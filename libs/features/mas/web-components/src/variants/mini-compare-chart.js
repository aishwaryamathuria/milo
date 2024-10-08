import { html, css, unsafeCSS } from 'lit';
import { isMobile } from '../utils.js';
import { VariantLayout } from './variant-layout.js';
import { CSS } from './mini-compare-chart.css.js';
import { DESKTOP_UP, TABLET_DOWN } from '../media.js';
const FOOTER_ROW_MIN_HEIGHT = 32; // as per the XD.

export class MiniCompareChart extends VariantLayout {
  constructor(card) {
    super(card);
  }

  #container;

  getRowMinHeightPropertyName = (index) =>
    `--consonant-merch-card-footer-row-${index}-min-height`;

  getContainer() {
    this.#container = this.#container ?? this.card.closest('[class*="-merch-cards"]') ?? this.card.parentElement;
    return this.#container;
  }

  getGlobalCSS() {
    return CSS;
  }

  getMiniCompareFooter = () => {
    const secureLabel = this.card.secureLabel
        ? html`<slot name="secure-transaction-label">
              <span class="secure-transaction-label"
                  >${this.card.secureLabel}</span
              ></slot
          >`
        : html`<slot name="secure-transaction-label"></slot>`;
    return html`<footer>${secureLabel}<slot name="footer"></slot></footer>`;
  }

  updateMiniCompareElementMinHeight (el, name) {
    const elMinHeightPropertyName = `--consonant-merch-card-mini-compare-${name}-height`;
    const height = Math.max(
        0,
        parseInt(window.getComputedStyle(el).height) || 0,
    );
    const maxMinHeight =
        parseInt(
            this.getContainer().style.getPropertyValue(elMinHeightPropertyName),
        ) || 0;
    if (height > maxMinHeight) {
        this.getContainer().style.setProperty(
            elMinHeightPropertyName,
            `${height}px`,
        );
    }
  }

  adjustMiniCompareBodySlots () {
    if (this.card.getBoundingClientRect().width === 0) return;
  
    this.updateMiniCompareElementMinHeight(
        this.card.shadowRoot.querySelector('.top-section'),
        'top-section',
    );
  
    const slots = [
        'heading-m',
        'body-m',
        'heading-m-price',
        'price-commitment',
        'offers',
        'promo-text',
        'callout-content',
        'secure-transaction-label',
    ];
  
    slots.forEach((slot) =>
        this.updateMiniCompareElementMinHeight(
            this.card.shadowRoot.querySelector(`slot[name="${slot}"]`),
            slot,
        ),
    );
    this.updateMiniCompareElementMinHeight(
        this.card.shadowRoot.querySelector('footer'),
        'footer',
    );
  
    const badge = this.card.shadowRoot.querySelector(
        '.mini-compare-chart-badge',
    );
    if (badge && badge.textContent !== '') {
        this.getContainer().style.setProperty(
            '--consonant-merch-card-mini-compare-top-section-mobile-height',
            '32px',
        );
    }
  }
  adjustMiniCompareFooterRows () {
    if (this.card.getBoundingClientRect().width === 0) return;
    const footerRows = this.card.querySelector('[slot="footer-rows"]');
    [...footerRows?.children].forEach((el, index) => {
        const height = Math.max(
            FOOTER_ROW_MIN_HEIGHT,
            parseInt(window.getComputedStyle(el).height) || 0,
        );
        const maxMinHeight =
            parseInt(
                this.getContainer().style.getPropertyValue(
                    this.getRowMinHeightPropertyName(index + 1),
                ),
            ) || 0;
        if (height > maxMinHeight) {
            this.getContainer().style.setProperty(
                this.getRowMinHeightPropertyName(index + 1),
                `${height}px`,
            );
        }
    });
  }

  removeEmptyRows() {
    const footerRows = this.card.querySelectorAll('.footer-row-cell');
    footerRows.forEach((row) => {
        const rowDescription = row.querySelector('.footer-row-cell-description');
        if (rowDescription) {
            const isEmpty = !rowDescription.textContent.trim();
            if (isEmpty) {
                row.remove();
            }
        }
    });
  }

  renderLayout () {
    return html` <div class="top-section${this.badge ? ' badge' : ''}">
            <slot name="icons"></slot> ${this.badge}
        </div>
        <slot name="heading-m"></slot>
        <slot name="body-m"></slot>
        <slot name="heading-m-price"></slot>
        <slot name="body-xxs"></slot>
        <slot name="price-commitment"></slot>
        <slot name="offers"></slot>
        <slot name="promo-text"></slot>
        <slot name="callout-content"></slot>
        ${this.getMiniCompareFooter()}
        <slot name="footer-rows"><slot name="body-s"></slot></slot>`;
  }
  postCardUpdateHook() {
    if (!isMobile()) {
      this.adjustMiniCompareBodySlots();
      this.adjustMiniCompareFooterRows();
    } else {
      this.removeEmptyRows();
    }
  }
  static variantStyle = css`
    :host([variant='mini-compare-chart']) > slot:not([name='icons']) {
        display: block;
    }
    :host([variant='mini-compare-chart']) footer {
        min-height: var(--consonant-merch-card-mini-compare-footer-height);
        padding: var(--consonant-merch-spacing-xs);
    }

    /* mini-compare card  */
    :host([variant='mini-compare-chart']) .top-section {
        padding-top: var(--consonant-merch-spacing-s);
        padding-inline-start: var(--consonant-merch-spacing-s);
        height: var(--consonant-merch-card-mini-compare-top-section-height);
    }

    @media screen and ${unsafeCSS(TABLET_DOWN)} {
        [class*'-merch-cards'] :host([variant='mini-compare-chart']) footer {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
        }
    }

    @media screen and ${unsafeCSS(DESKTOP_UP)} {
        :host([variant='mini-compare-chart']) footer {
            padding: var(--consonant-merch-spacing-xs)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s);
        }
    }

    :host([variant='mini-compare-chart']) slot[name='footer-rows'] {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    /* mini-compare card heights for the slots: heading-m, body-m, heading-m-price, price-commitment, offers, promo-text, footer */
    :host([variant='mini-compare-chart']) slot[name='heading-m'] {
        min-height: var(--consonant-merch-card-mini-compare-heading-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='body-m'] {
        min-height: var(--consonant-merch-card-mini-compare-body-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='heading-m-price'] {
        min-height: var(
            --consonant-merch-card-mini-compare-heading-m-price-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='price-commitment'] {
        min-height: var(
            --consonant-merch-card-mini-compare-price-commitment-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='offers'] {
        min-height: var(--consonant-merch-card-mini-compare-offers-height);
    }
    :host([variant='mini-compare-chart']) slot[name='promo-text'] {
        min-height: var(--consonant-merch-card-mini-compare-promo-text-height);
    }
    :host([variant='mini-compare-chart']) slot[name='callout-content'] {
        min-height: var(
            --consonant-merch-card-mini-compare-callout-content-height
        );
    }
  `;
};
