import { html, LitElement } from 'lit';
import { styles } from './merch-quantity-select.css.js';
import { debounce } from './utils.js';

import { ARROW_DOWN, ARROW_UP, ENTER } from './focus.js';
import { EVENT_MERCH_QUANTITY_SELECTOR_CHANGE, EVENT_MERCH_CARD_QUANTITY_CHANGE } from './constants.js';

export class MerchQuantitySelect extends LitElement {
    static get properties() {
        return {
            closed: { type: Boolean, reflect: true },
            selected: { type: Number },
            min: { type: Number },
            max: { type: Number },
            step: { type: Number },
            maxInput: { type: Number, attribute: 'max-input' },
            options: { type: Array },
            highlightedIndex: { type: Number },
            defaultValue: {
                type: Number,
                attribute: 'default-value',
                reflect: true,
            },
            title: { type: String },
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.options = [];
        this.title = '';
        this.closed = true;
        this.min = 0;
        this.max = 0;
        this.step = 0;
        this.maxInput = undefined;
        this.defaultValue = undefined;
        this.selectedValue = 0;
        this.highlightedIndex = 0;
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.boundKeydownListener = this.handleKeydown.bind(this);
        this.handleKeyupDebounced = debounce(this.handleKeyup.bind(this), 500);
        this.debouncedQuantityUpdate = debounce(
            this.handleQuantityUpdate.bind(this),
            500,
        );
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this.boundKeydownListener);
        window.addEventListener('mousedown', this.handleClickOutside);
        this.addEventListener(
            EVENT_MERCH_CARD_QUANTITY_CHANGE,
            this.debouncedQuantityUpdate,
        );
    }

    handleKeyup() {
        this.handleInput();
        this.sendEvent();
    }

    handleKeydown(e) {
        switch (e.key) {
            case ARROW_DOWN:
                if (!this.closed) {
                    e.preventDefault();
                    this.highlightedIndex =
                        (this.highlightedIndex + 1) % this.options.length;
                }
                break;
            case ARROW_UP:
                if (!this.closed) {
                    e.preventDefault();
                    this.highlightedIndex =
                        (this.highlightedIndex - 1 + this.options.length) %
                        this.options.length;
                }
                break;
            case ENTER:
                if (!this.closed) {
                    const option = this.options[this.highlightedIndex];
                    if (!option) break;
                    this.selectedValue = option;
                    this.handleMenuOption(this.selectedValue);
                    this.toggleMenu();
                } else {
                    this.closePopover();
                    this.blur();
                }
                break;
        }
        if (e.composedPath().includes(this)) e.stopPropagation();
    }

    adjustInput(inputField, value) {
        this.selectedValue = value;
        inputField.value = value;
        this.highlightedIndex = this.options.indexOf(value);
    }

    handleInput() {
        const inputField = this.shadowRoot.querySelector('.text-field-input');
        const inputValue = parseInt(inputField.value);
        if (isNaN(inputValue)) return;
        if (inputValue > 0 && inputValue !== this.selectedValue) {
            let adjustedInputValue = inputValue;
            if (this.maxInput && inputValue > this.maxInput)
                adjustedInputValue = this.maxInput;
            if (this.min && adjustedInputValue < this.min)
                adjustedInputValue = this.min;
            this.adjustInput(inputField, adjustedInputValue);
        } else this.adjustInput(inputField, this.selectedValue || this.min || 1);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('mousedown', this.handleClickOutside);
        this.removeEventListener('keydown', this.boundKeydownListener);
        this.removeEventListener(
            EVENT_MERCH_CARD_QUANTITY_CHANGE,
            this.debouncedQuantityUpdate,
        );
    }

    generateOptionsArray() {
        const options = [];
        if (this.step > 0) {
            for (let value = this.min; value <= this.max; value += this.step) {
                options.push(value);
            }
        }
        return options;
    }

    update(changedProperties) {
        if (
            changedProperties.has('min') ||
            changedProperties.has('max') ||
            changedProperties.has('step') ||
            changedProperties.has('defaultValue')
        ) {
            this.options = this.generateOptionsArray();
            this.highlightedIndex = this.defaultValue
                ? this.options.indexOf(this.defaultValue)
                : 0;
            this.handleMenuOption(
                this.defaultValue ? this.defaultValue : this.options[0],
            );
        }
        super.update(changedProperties);
    }

    handleClickOutside(event) {
        const path = event.composedPath();
        if (!path.includes(this)) {
            this.closePopover();
        }
    }

    toggleMenu() {
        this.closed = !this.closed;
        this.adjustPopoverPlacement();
        if (this.closed) this.highlightedIndex = this.options.indexOf(this.selectedValue);
    }

    adjustPopoverPlacement() {
        const popover = this.shadowRoot.querySelector('.popover');
        if (this.closed || popover.getBoundingClientRect().bottom <= window.innerHeight)
            popover.setAttribute('placement', 'bottom');
        else
            popover.setAttribute('placement', 'top');
    }

    handleMouseEnter(index) {
        this.highlightedIndex = index;
    }

    handleMenuOption(option) {
        if (option === this.max)
            this.shadowRoot.querySelector('.text-field-input')?.focus();
        this.selectedValue = option;
        this.sendEvent();
        this.closePopover();
    }

    sendEvent() {
        const customEvent = new CustomEvent(
            EVENT_MERCH_QUANTITY_SELECTOR_CHANGE,
            {
                detail: { option: this.selectedValue },
                bubbles: true,
            },
        );
        this.dispatchEvent(customEvent);
    }

    closePopover() {
        if (!this.closed) {
            this.toggleMenu();
        }
    }

    get offerSelect() {
        return this.querySelector('merch-offer-select');
    }

    get popover() {
        return html` <div class="popover ${this.closed ? "closed" : "open"}" placement="bottom">
            ${this.options.map(
                (option, index) => html`
                    <div
                        class="item ${index === this.highlightedIndex
                            ? 'highlighted'
                            : ''}"
                        @click="${() => this.handleMenuOption(option)}"
                        @mouseenter="${() => this.handleMouseEnter(index)}"
                    >
                        ${option === this.max ? `${option}+` : option}
                    </div>
                `,
            )}
        </div>`;
    }

    handleQuantityUpdate({ detail: { quantity } }) {
        if (quantity && quantity !== this.selectedValue) {
            this.selectedValue = quantity;
            const inputField = this.shadowRoot.querySelector('.text-field-input');
            if (inputField) {
                inputField.value = quantity;
            }
            this.sendEvent();
        }
    }

    render() {
        return html`
            <div class="label" id="qsLabel">${this.title}</div>
            <div class="text-field">
                <input
                    class="text-field-input"
                    aria-labelledby="qsLabel"
                    name="quantity"
                    @focus="${this.closePopover}"
                    .value="${this.selectedValue}"
                    type="number"
                    @keydown="${this.handleKeydown}"
                    @keyup="${this.handleKeyupDebounced}"
                />
                <button class="picker-button" aria-labelledby="qsLabel" @click="${this.toggleMenu}">
                    <div
                        class="picker-button-fill ${this.closed
                            ? 'open'
                            : 'closed'}"
                    ></div>
                </button>
                ${this.popover}
            </div>
        `;
    }
}

customElements.define('merch-quantity-select', MerchQuantitySelect);
