"use strict";
(self.webpackChunk_hz_quick_actions_standalone_webapp = self.webpackChunk_hz_quick_actions_standalone_webapp || []).push([[17558, 58267, 21556], {
    64437: (e,t,r)=>{
        function i(e, t, r) {
            const i = e.getAttribute(t);
            let o = i ? i.split(/\s+/) : [];
            o = o.filter((e=>!r.find((t=>e === t)))),
            o.length ? e.setAttribute(t, o.join(" ")) : e.removeAttribute(t)
        }
        function o(e, t, r) {
            const o = Array.isArray(r) ? r : [r]
              , a = e.getAttribute(t)
              , s = a ? a.split(/\s+/) : [];
            return o.every((e=>s.indexOf(e) > -1)) ? ()=>{}
            : (s.push(...o),
            e.setAttribute(t, s.join(" ")),
            ()=>i(e, t, o))
        }
        r.d(t, {
            H: ()=>i,
            q: ()=>o
        })
    }
    ,
    528130: (e,t,r)=>{
        var i = r(916420)
          , o = r(374069)
          , a = r(903512)
          , s = r(697038);
        const n = a.iv`
:host{--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-200);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host([size=m]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=l]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{display:flex;flex-wrap:wrap;gap:var(
--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal)
)}::slotted(*){flex-shrink:0}:host([vertical]){display:inline-flex;flex-direction:column;gap:var(
--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;
        var d = Object.defineProperty
          , l = Object.getOwnPropertyDescriptor;
        class c extends ((0,
        i.I)(o.o)) {
            constructor() {
                super(...arguments),
                this.vertical = !1
            }
            static get styles() {
                return [n]
            }
            handleSlotchange({target: e}) {
                e.assignedElements().forEach((e=>{
                    e.size = this.size
                }
                ))
            }
            render() {
                return a.dy`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `
            }
        }
        ((e,t,r,i)=>{
            for (var o, a = i > 1 ? void 0 : i ? l(t, r) : t, s = e.length - 1; s >= 0; s--)
                (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
            i && a && d(t, r, a)
        }
        )([(0,
        s.Cb)({
            type: Boolean,
            reflect: !0
        })], c.prototype, "vertical", 2),
        (0,
        r(589415).N)("sp-button-group", c)
    }
    ,
    721556: (e,t,r)=>{
        var i = r(769498);
        (0,
        r(589415).N)("sp-dialog", i.V)
    }
    ,
    769498: (e,t,r)=>{
        r.d(t, {
            V: ()=>b
        });
        var i = r(374069)
          , o = r(903512)
          , a = r(697038)
          , s = r(228532)
          , n = r(64437)
          , d = (r(897157),
        r(19607),
        r(528130),
        r(358319),
        r(446226))
          , l = r(405281);
        const c = o.iv`
:host{--spectrum-dialog-fullscreen-header-text-size:28px;--spectrum-dialog-confirm-small-width:400px;--spectrum-dialog-confirm-medium-width:480px;--spectrum-dialog-confirm-large-width:640px;--spectrum-dialog-error-width:var(--spectrum-dialog-confirm-medium-width);--spectrum-dialog-confirm-hero-height:var(
--spectrum-global-dimension-size-1600
);--spectrum-dialog-confirm-description-padding:var(
--spectrum-global-dimension-size-25
);--spectrum-dialog-confirm-description-margin:calc(var(--spectrum-global-dimension-size-25)*-1);--spectrum-dialog-confirm-footer-padding-top:var(
--spectrum-global-dimension-static-size-500,40px
);--spectrum-dialog-confirm-gap-size:var(
--spectrum-global-dimension-size-200
);--spectrum-dialog-confirm-buttongroup-padding-top:var(
--spectrum-global-dimension-static-size-500,40px
);--spectrum-dialog-confirm-close-button-size:var(
--spectrum-global-dimension-size-400
);--spectrum-dialog-confirm-close-button-padding:calc(26px - var(--spectrum-global-dimension-size-175));--spectrum-dialog-confirm-divider-height:var(
--spectrum-global-dimension-static-size-25,2px
)}:host{box-sizing:border-box;display:flex;max-height:inherit;max-width:100%;min-width:var(
--spectrum-dialog-confirm-min-width,var(--spectrum-global-dimension-static-size-3600)
);outline:none;width:-moz-fit-content;width:fit-content}:host([size=s]){width:var(--spectrum-dialog-confirm-small-width)}:host([size=m]){width:var(--spectrum-dialog-confirm-medium-width)}:host([size=l]){width:var(--spectrum-dialog-confirm-large-width)}::slotted([slot=hero]){background-position:50%;background-size:cover;border-top-left-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);border-top-right-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);grid-area:hero;height:var(--spectrum-dialog-confirm-hero-height);overflow:hidden}.grid{display:grid;grid-template-areas:"hero hero hero hero hero hero" ". . . . . ." ". heading header header typeIcon ." ". divider divider divider divider ." ". content content content content ." ". footer footer buttonGroup buttonGroup ." ". . . . . .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
);width:100%}:host([dir=ltr]) ::slotted([slot=heading]){padding-right:var(--spectrum-dialog-confirm-gap-size)}:host([dir=rtl]) ::slotted([slot=heading]){padding-left:var(--spectrum-dialog-confirm-gap-size)}::slotted([slot=heading]){font-size:var(--spectrum-dialog-confirm-title-text-size);font-weight:var(
--spectrum-dialog-confirm-title-text-font-weight,var(--spectrum-alias-heading-text-font-weight-regular)
);grid-area:heading;line-height:var(
--spectrum-dialog-confirm-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);margin:0;outline:none}:host([dir=ltr]) .no-header::slotted([slot=heading]){padding-right:0}:host([dir=rtl]) .no-header::slotted([slot=heading]){padding-left:0}.no-header::slotted([slot=heading]){grid-area:heading-start/heading-start/header-end/header-end}.header{align-items:center;box-sizing:border-box;display:flex;grid-area:header;justify-content:flex-end;outline:none}.type-icon{grid-area:typeIcon}.divider{grid-area:divider;margin-bottom:var(
--spectrum-dialog-confirm-divider-margin-bottom,var(--spectrum-global-dimension-static-size-200)
);margin-top:var(
--spectrum-dialog-confirm-divider-margin-top,var(--spectrum-global-dimension-static-size-150)
);width:100%}:host([mode=fullscreen]) [name=heading]+.divider{margin-bottom:calc(var(
--spectrum-dialog-confirm-divider-margin-bottom,
var(--spectrum-global-dimension-static-size-200)
) - var(--spectrum-dialog-confirm-description-padding)*2)}:host([no-divider]) .divider{display:none}:host([no-divider]) ::slotted([slot=heading]){padding-bottom:calc(var(
--spectrum-dialog-confirm-divider-margin-top,
var(--spectrum-global-dimension-static-size-150)
) + var(
--spectrum-dialog-confirm-divider-margin-bottom,
var(--spectrum-global-dimension-static-size-200)
) + var(
--spectrum-dialog-confirm-divider-height,
var(--spectrum-global-dimension-size-25)
))}.content{-webkit-overflow-scrolling:touch;box-sizing:border-box;font-size:var(--spectrum-dialog-confirm-description-text-size);font-weight:var(
--spectrum-dialog-confirm-description-text-font-weight,var(--spectrum-global-font-weight-regular)
);grid-area:content;line-height:var(
--spectrum-dialog-confirm-description-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin:0 var(--spectrum-dialog-confirm-description-margin);outline:none;overflow-y:auto;padding:calc(var(--spectrum-dialog-confirm-description-padding)*2)}.footer{display:flex;flex-wrap:wrap;grid-area:footer;outline:none;padding-top:var(--spectrum-dialog-confirm-footer-padding-top)}.footer>*,.footer>.spectrum-Button+.spectrum-Button{margin-bottom:0}:host([dir=ltr]) .button-group{padding-left:var(--spectrum-dialog-confirm-gap-size)}:host([dir=rtl]) .button-group{padding-right:var(--spectrum-dialog-confirm-gap-size)}.button-group{display:flex;grid-area:buttonGroup;justify-content:flex-end;padding-top:var(--spectrum-dialog-confirm-buttongroup-padding-top)}.button-group.button-group--noFooter{grid-area:footer-start/footer-start/buttonGroup-end/buttonGroup-end}:host([dismissable]) .grid{grid-template-areas:"hero hero hero hero hero hero hero" ". . . . . closeButton closeButton" ". heading header header typeIcon closeButton closeButton" ". divider divider divider divider divider ." ". content content content content content ." ". footer footer buttonGroup buttonGroup buttonGroup ." ". . . . . . .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) minmax(0,var(--spectrum-dialog-confirm-close-button-size)) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([dismissable]) .grid .button-group{display:none}:host([dismissable]) .grid .footer{grid-area:footer/footer/buttonGroup/buttonGroup}:host([dir=ltr]) .close-button{margin-right:var(--spectrum-dialog-confirm-close-button-padding)}:host([dir=rtl]) .close-button{margin-left:var(--spectrum-dialog-confirm-close-button-padding)}.close-button{grid-area:closeButton;margin-top:var(--spectrum-dialog-confirm-close-button-padding);place-self:start end}:host([error]){width:var(--spectrum-dialog-error-width,90%)}:host([mode=fullscreen]){height:100%;width:100%}:host([mode=fullscreenTakeover]){border-radius:0;height:100%;width:100%}:host([mode=fullscreenTakeover]),:host([mode=fullscreen]){max-height:none;max-width:none}:host([mode=fullscreenTakeover]) .grid,:host([mode=fullscreen]) .grid{display:grid;grid-template-areas:". . . . ." ". heading header buttonGroup ." ". divider divider divider ." ". content content content ." ". . . . .";grid-template-columns:var(--spectrum-dialog-confirm-padding) 1fr auto auto var(
--spectrum-dialog-confirm-padding
);grid-template-rows:var(--spectrum-dialog-confirm-padding) auto auto 1fr var(
--spectrum-dialog-confirm-padding
)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:var(--spectrum-dialog-fullscreen-header-text-size)}:host([mode=fullscreenTakeover]) .content,:host([mode=fullscreen]) .content{max-height:none}:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .button-group,:host([mode=fullscreen]) .footer{padding-top:0}:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .footer{display:none}:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreen]) .button-group{align-self:start;grid-area:buttonGroup}@media screen and (max-width:700px){.grid{grid-template-areas:"hero hero hero hero hero hero" ". . . . . ." ". heading heading heading typeIcon ." ". header header header header ." ". divider divider divider divider ." ". content content content content ." ". footer footer buttonGroup buttonGroup ." ". . . . . .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([dismissable]) .grid{grid-template-areas:"hero hero hero hero hero hero hero" ". . . . . closeButton closeButton" ". heading heading heading typeIcon closeButton closeButton" ". header header header header header ." ". divider divider divider divider divider ." ". content content content content content ." ". footer footer buttonGroup buttonGroup buttonGroup ." ". . . . . . .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) minmax(0,var(--spectrum-dialog-confirm-close-button-size)) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}.header{justify-content:flex-start}:host([mode=fullscreenTakeover]) .grid,:host([mode=fullscreen]) .grid{display:grid;grid-template-areas:". . ." ". heading ." ". header ." ". divider ." ". content ." ". buttonGroup ." ". . .";grid-template-columns:var(--spectrum-dialog-confirm-padding) 1fr var(
--spectrum-dialog-confirm-padding
);grid-template-rows:var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreen]) .button-group{padding-top:var(--spectrum-dialog-confirm-buttongroup-padding-top)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:var(--spectrum-dialog-confirm-title-text-size)}}@media (forced-colors:active){:host{border:solid}}::slotted([slot=heading]){color:var(
--spectrum-dialog-confirm-title-text-color,var(--spectrum-alias-heading-text-color)
)}.content,.footer{color:var(
--spectrum-dialog-confirm-description-text-color,var(--spectrum-global-color-gray-800)
)}.type-icon{color:var(
--spectrum-dialog-confirm-icon-color,var(--spectrum-global-color-gray-900)
)}:host([error]) .type-icon{color:var(
--spectrum-dialog-error-icon-color,var(--spectrum-semantic-negative-icon-color)
)}.content{overflow:hidden}.footer{color:var(
--spectrum-dialog-confirm-description-text-color,var(--spectrum-global-color-gray-800)
)}.content[tabindex]{overflow:auto}::slotted(img[slot=hero]){height:auto;width:100%}.grid{grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading heading heading     typeIcon    ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           ."}
`;
        var p = Object.defineProperty
          , u = Object.getOwnPropertyDescriptor
          , m = (e,t,r,i)=>{
            for (var o, a = i > 1 ? void 0 : i ? u(t, r) : t, s = e.length - 1; s >= 0; s--)
                (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
            return i && a && p(t, r, a),
            a
        }
        ;
        let g = 0;
        function h(e, t) {
            const r = e.assignedElements()
              , i = [];
            return r.forEach((e=>{
                if (e.id)
                    i.push(e.id);
                else {
                    const r = t + "-" + g++;
                    e.id = r,
                    i.push(r)
                }
            }
            )),
            i
        }
        const v = class extends ((0,
        d.V)((0,
        l.h)(i.o, ['[slot="hero"]', '[slot="footer"]', '[slot="button"]']))) {
            constructor() {
                super(...arguments),
                this.error = !1,
                this.dismissable = !1,
                this.noDivider = !1,
                this.shouldManageTabOrderForScrolling = ()=>{
                    const {offsetHeight: e, scrollHeight: t} = this.contentElement;
                    e < t ? this.contentElement.tabIndex = 0 : this.contentElement.removeAttribute("tabindex")
                }
                ,
                this.labelledbyId = "sp-dialog-label-" + v.instanceCount++,
                this.describedbyId = "sp-dialog-description-" + v.instanceCount++
            }
            static get styles() {
                return [c]
            }
            get hasFooter() {
                return this.getSlotContentPresence('[slot="footer"]')
            }
            get hasButtons() {
                return this.getSlotContentPresence('[slot="button"]')
            }
            get hasHero() {
                return this.getSlotContentPresence('[slot="hero"]')
            }
            close() {
                this.dispatchEvent(new Event("close",{
                    bubbles: !0,
                    composed: !0,
                    cancelable: !0
                }))
            }
            renderHero() {
                return o.dy`
            <slot name="hero"></slot>
        `
            }
            renderHeading() {
                return o.dy`
            <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
        `
            }
            renderContent() {
                return o.dy`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `
            }
            renderFooter() {
                return o.dy`
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        `
            }
            renderButtons() {
                const e = {
                    "button-group": !0,
                    "button-group--noFooter": !this.hasFooter
                };
                return o.dy`
            <sp-button-group class=${(0,
                s.$)(e)}>
                <slot name="button"></slot>
            </sp-button-group>
        `
            }
            renderDismiss() {
                return o.dy`
            <sp-close-button
                class="close-button"
                label="Close"
                quiet
                size="m"
                @click=${this.close}
            ></sp-close-button>
        `
            }
            render() {
                return o.dy`
            <div class="grid">
                ${this.renderHero()} ${this.renderHeading()}
                ${this.error ? o.dy`
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      ` : o.Ld}
                ${this.noDivider ? o.Ld : o.dy`
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                ${this.renderContent()}
                ${this.hasFooter ? this.renderFooter() : o.Ld}
                ${this.hasButtons ? this.renderButtons() : o.Ld}
                ${this.dismissable ? this.renderDismiss() : o.Ld}
            </div>
        `
            }
            shouldUpdate(e) {
                return e.has("mode") && this.mode && (this.dismissable = !1),
                e.has("dismissable") && this.dismissable && (this.dismissable = !this.mode),
                super.shouldUpdate(e)
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this.setAttribute("role", "dialog")
            }
            onHeadingSlotchange({target: e}) {
                this.conditionLabelledby && (this.conditionLabelledby(),
                delete this.conditionLabelledby);
                const t = h(e, this.labelledbyId);
                t.length && (this.conditionLabelledby = (0,
                n.q)(this, "aria-labelledby", t))
            }
            onContentSlotChange({target: e}) {
                this.conditionDescribedby && (this.conditionDescribedby(),
                delete this.conditionDescribedby);
                const t = h(e, this.describedbyId);
                if (t.length && t.length < 4)
                    this.conditionDescribedby = (0,
                    n.q)(this, "aria-describedby", t);
                else if (!t.length) {
                    const e = !!this.id;
                    e || (this.id = this.describedbyId);
                    const t = (0,
                    n.q)(this, "aria-describedby", this.id);
                    this.conditionDescribedby = ()=>{
                        t(),
                        e || this.removeAttribute("id")
                    }
                }
            }
            connectedCallback() {
                super.connectedCallback(),
                this.tabIndex = 0,
                window.addEventListener("resize", this.shouldManageTabOrderForScrolling)
            }
            disconnectedCallback() {
                window.removeEventListener("resize", this.shouldManageTabOrderForScrolling),
                super.disconnectedCallback()
            }
        }
        ;
        let b = v;
        b.instanceCount = 0,
        m([(0,
        a.IO)(".close-button")], b.prototype, "closeButton", 2),
        m([(0,
        a.IO)(".content")], b.prototype, "contentElement", 2),
        m([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0
        })], b.prototype, "error", 2),
        m([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0
        })], b.prototype, "dismissable", 2),
        m([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0,
            attribute: "no-divider"
        })], b.prototype, "noDivider", 2),
        m([(0,
        a.Cb)({
            type: String,
            reflect: !0
        })], b.prototype, "mode", 2),
        m([(0,
        a.Cb)({
            type: String,
            reflect: !0
        })], b.prototype, "size", 2)
    }
    ,
    902329: (e,t,r)=>{
        r.d(t, {
            M: ()=>m
        });
        var i = r(374069)
          , o = r(903512)
          , a = r(697038)
          , s = (r(455804),
        r(373010),
        r(721556),
        r(689635))
          , n = r(727116)
          , d = r(446226)
          , l = r(644886)
          , c = Object.defineProperty
          , p = Object.getOwnPropertyDescriptor
          , u = (e,t,r,i)=>{
            for (var o, a = i > 1 ? void 0 : i ? p(t, r) : t, s = e.length - 1; s >= 0; s--)
                (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
            return i && a && c(t, r, a),
            a
        }
        ;
        class m extends ((0,
        d.V)(i.o)) {
            constructor() {
                super(...arguments),
                this.dismissable = !1,
                this.open = !1,
                this.responsive = !1,
                this.transitionPromise = Promise.resolve(),
                this.resolveTransitionPromise = ()=>{}
                ,
                this.underlay = !1,
                this.animating = !1
            }
            static get styles() {
                return [s.Z, n.Z]
            }
            get dialog() {
                return this.shadowRoot.querySelector("slot").assignedElements()[0] || this
            }
            async focus() {
                if (this.shadowRoot) {
                    const e = (0,
                    l.i)(this.dialog);
                    e ? (e.updateComplete && await e.updateComplete,
                    e.focus(),
                    this.removeAttribute("tabindex")) : this.dialog.focus()
                } else
                    super.focus()
            }
            overlayWillCloseCallback() {
                return this.open ? (this.close(),
                !0) : this.animating
            }
            dismiss() {
                this.dismissable && this.close()
            }
            handleClose(e) {
                e.stopPropagation(),
                this.close()
            }
            close() {
                this.open = !1
            }
            dispatchClosed() {
                this.dispatchEvent(new Event("close",{
                    bubbles: !0
                }))
            }
            handleUnderlayTransitionend(e) {
                !this.open && "visibility" === e.propertyName && (this.resolveTransitionPromise(),
                this.dispatchClosed())
            }
            handleModalTransitionend() {
                (this.open || !this.underlay) && (this.resolveTransitionPromise(),
                this.open || this.dispatchClosed())
            }
            update(e) {
                e.has("open") && void 0 !== e.get("open") && (this.animating = !0,
                this.transitionPromise = new Promise((e=>{
                    this.resolveTransitionPromise = ()=>{
                        this.animating = !1,
                        e()
                    }
                }
                ))),
                super.update(e)
            }
            renderDialog() {
                return o.dy`
            <slot></slot>
        `
            }
            render() {
                return o.dy`
            ${this.underlay ? o.dy`
                      <sp-underlay
                          ?open=${this.open}
                          @click=${this.dismiss}
                          @transitionend=${this.handleUnderlayTransitionend}
                      ></sp-underlay>
                  ` : o.dy``}
            <div
                class="modal ${this.mode}"
                @transitionend=${this.handleModalTransitionend}
                @close=${this.handleClose}
            >
                ${this.renderDialog()}
            </div>
        `
            }
            updated(e) {
                e.has("open") && (this.open ? "updateComplete"in this.dialog && "shouldManageTabOrderForScrolling"in this.dialog && this.dialog.updateComplete.then((()=>{
                    this.dialog.shouldManageTabOrderForScrolling()
                }
                )) : this.tabIndex = 0)
            }
            async getUpdateComplete() {
                const e = await super.getUpdateComplete();
                return await this.transitionPromise,
                e
            }
        }
        u([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0
        })], m.prototype, "dismissable", 2),
        u([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0
        })], m.prototype, "open", 2),
        u([(0,
        a.Cb)({
            type: String,
            reflect: !0
        })], m.prototype, "mode", 2),
        u([(0,
        a.Cb)({
            type: Boolean
        })], m.prototype, "responsive", 2),
        u([(0,
        a.Cb)({
            type: Boolean
        })], m.prototype, "underlay", 2)
    }
    ,
    897157: (e,t,r)=>{
        var i = r(916420)
          , o = r(374069)
          , a = r(903512)
          , s = r(697038)
          , n = r(458047)
          , d = Object.defineProperty
          , l = Object.getOwnPropertyDescriptor;
        class c extends ((0,
        i.I)(o.o, {
            validSizes: ["s", "m", "l"]
        })) {
            constructor() {
                super(...arguments),
                this.vertical = !1
            }
            render() {
                return a.dy``
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this.setAttribute("role", "separator")
            }
            updated(e) {
                super.updated(e),
                e.has("vertical") && (this.vertical ? this.setAttribute("aria-orientation", "vertical") : this.removeAttribute("aria-orientation"))
            }
        }
        c.styles = [n.Z],
        ((e,t,r,i)=>{
            for (var o, a = i > 1 ? void 0 : i ? l(t, r) : t, s = e.length - 1; s >= 0; s--)
                (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
            i && a && d(t, r, a)
        }
        )([(0,
        s.Cb)({
            type: Boolean,
            reflect: !0
        })], c.prototype, "vertical", 2),
        (0,
        r(589415).N)("sp-divider", c)
    }
    ,
    458047: (e,t,r)=>{
        r.d(t, {
            Z: ()=>i
        });
        const i = r(903512).iv`
:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-medium
);--spectrum-divider-background-color-small:var(--spectrum-gray-300);--spectrum-divider-background-color-medium:var(--spectrum-gray-300);--spectrum-divider-background-color-large:var(--spectrum-gray-800);--spectrum-divider-background-color-small-static-white:var(
--spectrum-transparent-white-300
);--spectrum-divider-background-color-medium-static-white:var(
--spectrum-transparent-white-300
);--spectrum-divider-background-color-large-static-white:var(
--spectrum-transparent-white-800
);--spectrum-divider-background-color-small-static-black:var(
--spectrum-transparent-black-300
);--spectrum-divider-background-color-medium-static-black:var(
--spectrum-transparent-black-300
);--spectrum-divider-background-color-large-static-black:var(
--spectrum-transparent-black-800
)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-small
)}:host([size=m]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-medium
)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(
--spectrum-divider-background-color-large
)}@media (forced-colors:active){:host,:host([size=l]),:host([size=m]),:host([size=s]){--spectrum-divider-background-color:CanvasText;--spectrum-divider-background-color-small-static-white:CanvasText;--spectrum-divider-background-color-medium-static-white:CanvasText;--spectrum-divider-background-color-large-static-white:CanvasText;--spectrum-divider-background-color-small-static-black:CanvasText;--spectrum-divider-background-color-medium-static-black:CanvasText;--spectrum-divider-background-color-large-static-black:CanvasText}}:host{background-color:var(
--mod-divider-background-color,var(--spectrum-divider-background-color)
);block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border:none;border-radius:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);border-width:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);inline-size:100%;overflow:visible}:host([static=white][size=s]){--spectrum-divider-background-color:var(
--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-small-static-white)
)}:host([static=white][size=m]){--spectrum-divider-background-color:var(
--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-medium-static-white)
)}:host([static=white][size=l]){--spectrum-divider-background-color:var(
--mod-divider-background-color-large-static-white,var(--spectrum-divider-background-color-large-static-white)
)}:host([static=black][size=s]){--spectrum-divider-background-color:var(
--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-small-static-black)
)}:host([static=black][size=m]){--spectrum-divider-background-color:var(
--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-medium-static-black)
)}:host([static=black][size=l]){--spectrum-divider-background-color:var(
--mod-divider-background-color-large-static-black,var(--spectrum-divider-background-color-large-static-black)
)}:host([vertical]){align-self:var(--mod-divider-vertical-align);block-size:100%;inline-size:var(
--mod-divider-thickness,var(--spectrum-divider-thickness)
);height:var(--mod-divider-vertical-height);margin-block:var(--mod-divider-vertical-margin)}:host{display:block}hr{border:none;margin:0}
`
    }
    ,
    358319: (e,t,r)=>{
        var i = r(903512)
          , o = r(400779)
          , a = r(857534);
        class s extends o.A {
            render() {
                return (0,
                a._)(i.dy),
                (({width: e=24, height: t=24, hidden: r=!1, title: i="Alert"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${t}
    viewBox="0 0 36 36"
    width=${e}
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`)({
                    hidden: !this.label,
                    title: this.label
                })
            }
        }
        (0,
        r(589415).N)("sp-icon-alert", s)
    }
    ,
    689635: (e,t,r)=>{
        r.d(t, {
            Z: ()=>i
        });
        const i = r(903512).iv`
:host{align-items:center;box-sizing:border-box;display:flex;height:100vh;height:-webkit-fill-available;height:-moz-available;height:stretch;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden;width:100vw;z-index:2}:host([open]){visibility:visible}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]){border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}:host([responsive]){margin-top:0}}
`
    }
    ,
    727116: (e,t,r)=>{
        r.d(t, {
            Z: ()=>i
        });
        const i = r(903512).iv`
.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0s;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);max-height:var(--spectrum-dialog-max-height);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0s),visibility 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0s) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0s) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(--spectrum-dialog-fullscreen-margin);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;box-sizing:border-box;inset:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(
--spectrum-dialog-confirm-background-color,var(--spectrum-alias-background-color-default)
)}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(
--swc-test-duration
);height:100dvh}
`
    }
    ,
    405281: (e,t,r)=>{
        r.d(t, {
            h: ()=>a
        });
        var i = r(108348);
        const o = Symbol("slotContentIsPresent");
        function a(e, t) {
            var r;
            const a = Array.isArray(t) ? t : [t];
            return r = o,
            class extends e {
                constructor(...e) {
                    super(e),
                    this[r] = new Map,
                    this.managePresenceObservedSlot = ()=>{
                        let e = !1;
                        a.forEach((t=>{
                            const r = !!this.querySelector(t)
                              , i = this[o].get(t) || !1;
                            e = e || i !== r,
                            this[o].set(t, !!this.querySelector(t))
                        }
                        )),
                        e && this.updateComplete.then((()=>{
                            this.requestUpdate()
                        }
                        ))
                    }
                    ,
                    new i._(this,{
                        config: {
                            childList: !0,
                            subtree: !0
                        },
                        callback: ()=>{
                            this.managePresenceObservedSlot()
                        }
                    }),
                    this.managePresenceObservedSlot()
                }
                get slotContentIsPresent() {
                    if (1 === a.length)
                        return this[o].get(a[0]) || !1;
                    throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")
                }
                getSlotContentPresence(e) {
                    if (this[o].has(e))
                        return this[o].get(e) || !1;
                    throw new Error(`The provided selector \`${e}\` is not being observed.`)
                }
            }
        }
    }
    ,
    455804: (e,t,r)=>{
        var i = r(374069)
          , o = r(903512)
          , a = r(697038);
        const s = o.iv`
:host{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0s;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1)}:host{inset:0;overflow:hidden;position:fixed;transition:opacity var(
--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)
) var(
--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)
) var(
--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)
),visibility 0s linear calc(var(
--spectrum-dialog-confirm-background-exit-animation-delay,
var(--spectrum-global-animation-duration-200)
) + var(
--spectrum-dialog-confirm-background-exit-animation-duration,
var(--spectrum-global-animation-duration-300)
));z-index:1}:host([open]){transition:opacity var(
--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
) var(
--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)
) var(--spectrum-dialog-confirm-background-entry-animation-delay,0s)}:host{background:var(
--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay)
)}
`;
        var n = Object.defineProperty
          , d = Object.getOwnPropertyDescriptor;
        class l extends i.o {
            constructor() {
                super(...arguments),
                this.open = !1
            }
            static get styles() {
                return [s]
            }
            render() {
                return o.dy``
            }
        }
        ((e,t,r,i)=>{
            for (var o, a = i > 1 ? void 0 : i ? d(t, r) : t, s = e.length - 1; s >= 0; s--)
                (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
            i && a && n(t, r, a)
        }
        )([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0
        })], l.prototype, "open", 2),
        (0,
        r(589415).N)("sp-underlay", l)
    }
    ,
    182301: (e,t,r)=>{
        r.d(t, {
            JX: ()=>f,
            Hp: ()=>y
        });
        var i = r(944440)
          , o = r(859526)
          , a = r(692484)
          , s = r(821530)
          , n = r(903512);
        const d = n.iv`
    sp-dialog-wrapper {
        --spectrum-dialog-confirm-padding: 0;
        --spectrum-global-dimension-size-25: 0;
        --mod-divider-thickness: 0.063rem;
        z-index: 1000;
    }

    .hide {
        display: none;
    }

    .transParentBackground {
        --spectrum-alias-background-color-default: transparent;
    }

    .loaderContainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .iframeContainer {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    iframe {
        border: none;
    }

    :host([is-small-app-frame]) .content {
        max-width: 100%;
    }

    .content {
        border-radius: var(--spectrum-global-dimension-size-150);
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 2rem;
        max-width: 27.5rem;
    }

    :host([is-small-app-frame]) .heading {
        font-size: var(--spectrum-global-dimension-font-size-400);
    }

    :host([is-small-app-frame]) .body {
        font-size: var(--spectrum-global-dimension-font-size-200);
    }
    .heading {
        font-size: var(--spectrum-font-size-700);
        font-weight: var(--spectrum-black-font-weight);
        font-family: var(--spectrum-font-family-base);
    }

    .body {
        text-size-adjust: auto;
        font-size: var(--spectrum-global-dimension-font-size-400);
        font-family: var(--spectrum-font-family-base);
    }

    #outer-wrapper {
        padding: 1.25rem;
        background-color: transparent;
    }

    #outer-wrapper.is-small-app-frame {
        width: 100vw;
        max-width: 29rem;
        padding: 0;
    }

    #inner-wrapper {
        border-radius: 0.5rem;
        position: relative;
        background-color: var(--spectrum-white);
        width: 100%;
    }

    #inner-wrapper.is-small-app-frame {
        border-radius: 1rem;
        margin: 1.5rem;
        width: auto;
    }

    #inner-wrapper #close-icon {
        position: absolute;
        inset-block-start: -1.25rem;
        inset-inline-end: -1.25rem;
        height: 2.5rem;
        width: 2.5rem;
        background-color: var(--spectrum-white);
        border-radius: 50%;
        box-shadow: 0 var(--spectrum-drop-shadow-y) var(--spectrum-drop-shadow-blur)
            var(--spectrum-transparent-black-200);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #inner-wrapper #close-icon.is-small-app-frame {
        position: absolute;
        inset-block-start: 2.25rem;
        inset-inline-end: 1.25rem;
        height: auto;
        width: auto;
        border-radius: 0;
        box-shadow: none;
        display: block;
        cursor: pointer;
        background-color: transparent;
    }

    .first-content {
        border-radius: var(--spectrum-global-dimension-size-150);
        background-color: var(--spectrum-white);
        align-items: center;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 2rem;
        width: 46.25rem;
    }

    .insufficient-credit-dialog {
        --spectrum-dialog-confirm-buttongroup-padding-top: 1.5rem;
        border-radius: var(--spectrum-global-dimension-size-150);
        background-color: var(--spectrum-white);
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 1.5rem;
        width: 26.563rem;
    }

    .insufficient-credit-dialog.is-small-app-frame {
        width: 20rem;
    }

    .insufficient-credit-heading {
        font-size: 1.75rem;
        font-weight: 800;
    }

    .insufficient-credit-heading.is-small-app-frame {
        font-size: 1.5rem;
    }

    .insufficient-credit-body {
        font-size: 1.125rem;
    }

    .insufficient-credit-ok-button {
        width: 4.5rem;
        height: 2.5rem;
        border-radius: 6.25rem;
        font-size: 1rem;
        --spectrum-button-top-to-text-medium: 0.563rem;
    }

    :host([is-small-app-frame]) .first-content {
        align-items: flex-start;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }

    :host([is-small-app-frame]) .first-content-heading {
        font-size: 1.375rem;
        text-align: center;
        font-weight: var(--spectrum-black-font-weight);
        font-family: var(--spectrum-font-family-base);
    }

    :host([is-small-app-frame]) .upper {
        text-align: center;
        font-size: 1rem;
    }

    :host([is-small-app-frame]) .middle {
        font-size: 1rem;
        padding-inline: 1.25rem;
        margin-block-start: 1.875rem;
        margin-block-end: 1.125rem;
    }

    :host([is-small-app-frame]) .lower {
        font-size: 1rem;
        padding-inline: 1.25rem;
    }

    .upper {
        font-size: var(--spectrum-global-dimension-font-size-300);
        margin-block-start: 0;
        margin-block-end: 1.5rem;
    }

    .middle {
        margin-block-end: 0.5rem;
        font-size: var(--spectrum-global-dimension-font-size-200);
    }

    .lower {
        display: flex;
        align-items: center;
        margin-block-start: 0.5rem;
        margin-block-end: 1.875rem;
        font-size: var(--spectrum-global-dimension-font-size-200);
    }

    .lowerText {
        margin-inline-start: 1rem;
    }

    sp-button-group {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        --spectrum-font-size-100: 1rem;
        --spectrum-component-height-100: 2.5rem;
        --spectrum-button-min-width: 7.875rem;
        --spectrum-component-pill-edge-to-text-100: 1.25rem;
        --spectrum-spacing-300: 0.5rem;
        --mod-button-top-to-text: 0.625rem;
    }

    :host([is-small-app-frame]) sp-button-group {
        --spectrum-component-height-100: 3.125rem;
        --spectrum-button-min-width: 8.375rem;
        --spectrum-component-pill-edge-to-text-100: 1.5rem;
        --mod-button-top-to-text: 0.875rem;
        justify-content: center;
    }

    .cancel-button {
        --spectrum-button-min-width: 5.125rem;
    }

    .cancel-button:hover {
        border-color: var(
            --spectrum-button-m-secondary-outline-texticon-border-color,
            var(--spectrum-global-color-gray-300)
        );
    }

    #automatic-close-icon {
        height: 2rem;
        width: 2rem;
        background-color: var(--spectrum-white);
        border-radius: 50%;
        box-shadow: 0 var(--spectrum-drop-shadow-y) var(--spectrum-drop-shadow-blur)
            var(--spectrum-transparent-black-200);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-block-end: 1.25rem;
    }

    .purple-background {
        background-color: rgb(222, 222, 249);
        padding: 1.25rem;
    }
`;
        var l = r(4646)
          , c = r(228532)
          , p = r(697038);
        const u = n.dy`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <g>
        <rect width="18" height="18" fill="rgba(255,19,220,0)" />
    </g>
    <g>
        <path
            data-name="Path 120020"
            d="M14.707,3.293a1,1,0,0,0-1.414,0L9,7.586,4.707,3.293A1,1,0,1,0,3.293,4.707L7.586,9,3.293,13.293a1,1,0,1,0,1.414,1.414L9,10.414l4.293,4.293a1,1,0,1,0,1.414-1.414L10.414,9l4.293-4.293a1,1,0,0,0,0-1.414Z"
            fill="#484848"
        />
    </g>
</svg>`;
        var m, g, h, v = r(886922), b = r(148868);
        !function(e) {
            e.system = "System",
            e.openUrl = "OpenURL"
        }(m || (m = {})),
        function(e) {
            e.resize = "Resize",
            e.close = "Close",
            e.appLoaded = "AppLoaded",
            e.external = "EXTERNAL",
            e.switch = "SWITCH"
        }(g || (g = {})),
        function(e) {
            e.ACCESS_REQUESTED = "ACCESS_REQUESTED",
            e.ACCESS_PROVIDED = "ACCESS_PROVIDED",
            e.ACCESS_PENDING = "ACCESS_PENDING",
            e.CANCELLED = "CANCELLED",
            e.FAILED = "FAILED"
        }(h || (h = {}));
        const f = "close-license-upgrade-dialog-event";
        class y extends o.j {
            constructor() {
                super(...arguments),
                this.isSmallAppFrame = !1,
                this.appMessage = "",
                this._messageEventListener = e=>{
                    try {
                        if (this._licenseUpgradeStore.licenseUpgradeUrlValue) {
                            const t = new URL(this._licenseUpgradeStore.licenseUpgradeUrlValue).origin;
                            if (e.origin === t) {
                                const t = e.data ? JSON.parse(e.data) : {};
                                this._handleMessage(t)
                            }
                        }
                    } catch (e) {
                        return void console.error(`Listening to request access event failed with error -> ${e}`)
                    }
                }
                ,
                this._messageHandlers = {
                    [m.system]: {
                        [g.resize]: e=>this._resize(e),
                        [g.close]: e=>this._close(e),
                        [g.appLoaded]: ()=>this._appLoaded()
                    },
                    [m.openUrl]: {
                        [g.external]: e=>this._openUrl(e),
                        [g.switch]: e=>this._openUrl(e)
                    }
                }
            }
            static get styles() {
                return d
            }
            connectedCallback() {
                super.connectedCallback(),
                window.addEventListener("message", this._messageEventListener)
            }
            disconnectedCallback() {
                window.removeEventListener("message", this._messageEventListener),
                super.disconnectedCallback()
            }
            async contextsLoaded() {
                await this._accessProfileStore.load(),
                this._isAutomaticAssignment = this._accessProfileStore.allowsAutomaticAssignment
            }
            _appLoaded() {
                this._isAutomaticAssignment || this._licenseUpgradeStore.triggerAnalyticsEvent(l.n.viewModal, v.w8.onRequest),
                this._licenseUpgradeStore.endPerfAction(),
                this._licenseUpgradeStore.appLoadComplete()
            }
            _close(e) {
                e?.status === h.ACCESS_PROVIDED ? (this._isAutomaticAssignment && this._licenseUpgradeStore.triggerAnalyticsEvent(l.n.complete),
                this._accessProfileStore.load(!0)) : e?.status !== h.ACCESS_REQUESTED || this._isAutomaticAssignment || this._licenseUpgradeStore.triggerAnalyticsEvent(l.n.submitRequest, v.w8.onRequest);
                const t = new CustomEvent(f,{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        requestStatus: e?.status
                    }
                });
                this.dispatchEvent(t),
                this._closePreview()
            }
            _openUrl(e) {
                e && "string" == typeof e.externalUrl && window.open(e.externalUrl, "_blank")
            }
            _resize(e) {
                this._iframeInstance && e && e.width && e.height && (this._iframeInstance.width = this.isSmallAppFrame ? "100%" : String(e.width),
                this._iframeInstance.height = this.isSmallAppFrame ? "100%" : String(e.height))
            }
            _handleMessage(e) {
                this._messageHandlers[e.type]?.[e.subType]?.(e.data)
            }
            _closePreview() {
                this._licenseUpgradeStore.closeOverlay()
            }
            _sendRequestForOnDemand() {
                this._licenseUpgradeStore.triggerAnalyticsEvent(l.n.submitRequest, v.w8.onDemand),
                this._licenseUpgradeStore.hideFirstViewForAutomatic(),
                this._licenseUpgradeStore.startPerfAction()
            }
            _renderLoader() {
                return n.dy` <div class="icon">
            <sp-progress-circle size="m" indeterminate label="Loader"></sp-progress-circle>
        </div>`
            }
            _renderServiceNotAvailableView() {
                const e = this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:license-upgrade-error-heading",
                    defaultMessage: "Service not available"
                })
                  , t = this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:license-upgrade-error",
                    defaultMessage: "You do not have access to this service. Contact your IT administrator to gain access or sign in with an eligible Adobe ID."
                })
                  , r = {
                    "is-small-app-frame": this.isSmallAppFrame
                };
                return n.dy`<div id="outer-wrapper" class=${(0,
                c.$)(r)}>
            <div id="inner-wrapper" class=${(0,
                c.$)(r)}>
                <sp-dialog class="content" size="s">
                    <h1 slot="heading" class="heading">${e}</h1>
                    <span class="body">${t}</span>
                </sp-dialog>
                <div @click=${this._closePreview} class=${(0,
                c.$)(r)} id="close-icon">${u}</div>
            </div>
        </div>`
            }
            _renderInsufficientFireflyCreditsView() {
                const e = this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:license-upgrade-not-available-with-insufficient-firefly-credits-heading",
                    defaultMessage: "Insufficient credits"
                })
                  , t = this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:license-upgrade-not-available-with-insufficient-firefly-credits-body",
                    defaultMessage: "You don’t have enough Generative Credits to use this feature. You can wait for your monthly credit reset or contact your admin for details."
                })
                  , r = {
                    "is-small-app-frame": this.isSmallAppFrame
                };
                return n.dy` <sp-dialog class="${(0,
                c.$)(r)} insufficient-credit-dialog" size="s">
            <h1 slot="heading" class="${(0,
                c.$)(r)} insufficient-credit-heading">${e}</h1>
            <span class="insufficient-credit-body">${t}</span>
            <sp-button slot="button" class="insufficient-credit-ok-button" size="m" @click=${this._closePreview}>
                ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:license-upgrade-not-available-with-insufficient-firefly-credits-ok-button-text",
                    defaultMessage: "Okay"
                })}
            </sp-button>
        </sp-dialog>`
            }
            _renderUpperContent() {
                const {locale: e} = this._intlStore
                  , t = this._intlStore.getLocalizedURL("https://helpx.adobe.com/enterprise/using/request-access.html", e);
                return n.dy`<h1 slot="heading" class="heading first-content-heading">
                ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:heading",
                    defaultMessage: "You need to upgrade to use this feature"
                })}
            </h1>
            <span class="body first-content-body">
                <p class="upper">
                    ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:upper-message-text-start",
                    defaultMessage: "This feature is only available in the premium version of this app, which is available on demand. Click"
                })}
                    <b>
                        ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:upper-messsage-bold-text",
                    defaultMessage: "Send request"
                })}</b
                    >
                    ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:upper-message-text-end",
                    defaultMessage: "and you will be notified by email when the app is ready to use."
                })}
                    <sp-link quiet target="_blank" href=${t}>
                        ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:upper-message-text-learn-more",
                    defaultMessage: "Learn more about requesting Adobe apps."
                })}
                    </sp-link>
                </p>
            </span>`
            }
            _renderLowerContent() {
                return n.dy` <p class="middle">
                <b>
                    ${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:middle-message-text",
                    defaultMessage: "Request access to"
                })}
                </b>
            </p>
            <p class="lower">
                <slot name="app-icon"></slot>
                <span class="lowerText"><b>${this.appMessage}</b></span>
            </p>
            <sp-button-group>
                ${(0,
                b.g)(!this.isSmallAppFrame, (()=>n.dy`<sp-button
                        class="cancel-button"
                        variant="secondary"
                        size="m"
                        treatment="outline"
                        @click=${this._closePreview}
                        >${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:cancel-label",
                    defaultMessage: "Cancel"
                })}</sp-button
                    >`))}
                <sp-button class="next-button" size="m" @click=${()=>this._sendRequestForOnDemand()}
                    >${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:send-request-label",
                    defaultMessage: "Send request"
                })}</sp-button
                >
            </sp-button-group>`
            }
            _renderFirstViewForAutomaticAssignmentInMobile() {
                return n.dy` <div class="purple-background">
                <div @click=${this._closePreview} class="is-small-app-frame" id="automatic-close-icon">
                    ${u}
                </div>
                ${this._renderUpperContent()}
            </div>
            ${this._renderLowerContent()}`
            }
            _renderFirstViewForAutomaticAssignmentInDesktop() {
                return n.dy` ${this._renderUpperContent()} ${this._renderLowerContent()}`
            }
            _renderFirstViewForAutomaticAssignment() {
                return n.dy`
            <sp-dialog
                class=${(0,
                c.$)({
                    "first-content": !0
                })}
                size="s"
                ?no-divider=${this.isSmallAppFrame}
            >
                ${(0,
                b.g)(this.isSmallAppFrame, (()=>this._renderFirstViewForAutomaticAssignmentInMobile()), (()=>this._renderFirstViewForAutomaticAssignmentInDesktop()))}
            </sp-dialog>
        `
            }
            _renderIFrame() {
                const e = this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:license-upgrade-frame",
                    defaultMessage: "request license upgrade"
                });
                return n.dy`<iframe
            src=${this._licenseUpgradeStore.licenseUpgradeUrlValue}
            id="licenseUpgrade"
            title=${e}
            sandbox="allow-same-origin allow-scripts"
        ></iframe>`
            }
            _renderUpgradeView() {
                return n.dy` ${(0,
                b.g)(this._isAutomaticAssignment && this._licenseUpgradeStore.isFirstViewForAutomaticVisible, (()=>this._renderFirstViewForAutomaticAssignment()), (()=>n.dy`<div
                    class=${(0,
                c.$)({
                    hide: this._licenseUpgradeStore.isAppLoaded,
                    loaderContainer: !this._licenseUpgradeStore.isAppLoaded
                })}
                >
                    ${this._renderLoader()}
                </div>
                <div
                    class=${(0,
                c.$)({
                    hide: !this._licenseUpgradeStore.isAppLoaded,
                    iframeContainer: this._licenseUpgradeStore.isAppLoaded
                })}
                >
                    ${this._renderIFrame()}
                </div>`))}`
            }
            _renderUpgradeNotAvailableView() {
                return n.dy` ${(0,
                b.g)(this._licenseUpgradeStore.paywallTriggerType === s.LY.Firefly, (()=>this._renderInsufficientFireflyCreditsView()), (()=>this._renderServiceNotAvailableView()))}`
            }
            _renderOverlay() {
                return n.dy`<sp-dialog-wrapper
            slot="click-content"
            ?open=${this._licenseUpgradeStore.isLicenseUpgradeOverlayVisible}
            underlay
            no-divider
            @close=${this._closePreview}
            headline=${this._intlStore.formatMessage({
                    id: "@hz/license-upgrade:dialog-heading",
                    defaultMessage: "license upgrade dialog"
                })}
            headline-visibility="none"
            class=${(0,
                c.$)({
                    transParentBackground: !(this._licenseUpgradeStore.licenseUpgradeUrlValue && this._licenseUpgradeStore.isAppLoaded)
                })}
            mode=${this._licenseUpgradeStore.licenseUpgradeUrlValue && this.isSmallAppFrame ? "fullscreenTakeover" : ""}
        >
            ${(0,
                b.g)(this._licenseUpgradeStore.licenseUpgradeUrlValue, (()=>this._renderUpgradeView()), (()=>this._renderUpgradeNotAvailableView()))}
        </sp-dialog-wrapper>`
            }
            render() {
                return n.dy` ${(0,
                b.g)(this._licenseUpgradeStore.isLicenseUpgradeOverlayVisible, (()=>this._renderOverlay()), (()=>n.Ld))}`
            }
        }
        (0,
        i.__decorate)([(0,
        a.w)("AccessProfileStore")], y.prototype, "_accessProfileStore", void 0),
        (0,
        i.__decorate)([(0,
        a.w)("LicenseUpgradeStore")], y.prototype, "_licenseUpgradeStore", void 0),
        (0,
        i.__decorate)([(0,
        a.w)("IntlStore")], y.prototype, "_intlStore", void 0),
        (0,
        i.__decorate)([(0,
        p.IO)("#licenseUpgrade")], y.prototype, "_iframeInstance", void 0),
        (0,
        i.__decorate)([(0,
        p.Cb)({
            attribute: "is-small-app-frame",
            type: Boolean,
            reflect: !0
        })], y.prototype, "isSmallAppFrame", void 0),
        (0,
        i.__decorate)([(0,
        p.Cb)({
            type: String,
            reflect: !0
        })], y.prototype, "appMessage", void 0)
    }
    ,
    917558: (e,t,r)=>{
        r.r(t);
        var i = r(182301);
        r(858267);
        const o = "hz-license-upgrade";
        customElements.get(o) || customElements.define(o, i.Hp)
    }
    ,
    858267: (e,t,r)=>{
        r.r(t);
        var i = r(903512)
          , o = r(697038)
          , a = r(123584)
          , s = (r(455804),
        r(373010),
        r(721556),
        r(902329))
          , n = Object.defineProperty
          , d = Object.getOwnPropertyDescriptor
          , l = (e,t,r,i)=>{
            for (var o, a = i > 1 ? void 0 : i ? d(t, r) : t, s = e.length - 1; s >= 0; s--)
                (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
            return i && a && n(t, r, a),
            a
        }
        ;
        class c extends s.M {
            constructor() {
                super(...arguments),
                this.error = !1,
                this.cancelLabel = "",
                this.confirmLabel = "",
                this.footer = "",
                this.hero = "",
                this.heroLabel = "",
                this.noDivider = !1,
                this.secondaryLabel = "",
                this.headline = ""
            }
            static get styles() {
                return [...super.styles]
            }
            get dialog() {
                return this.shadowRoot.querySelector("sp-dialog")
            }
            clickSecondary() {
                this.dispatchEvent(new Event("secondary",{
                    bubbles: !0
                }))
            }
            clickCancel() {
                this.dispatchEvent(new Event("cancel",{
                    bubbles: !0
                }))
            }
            clickConfirm() {
                this.dispatchEvent(new Event("confirm",{
                    bubbles: !0
                }))
            }
            renderDialog() {
                const e = this.noDivider || !this.headline || "none" === this.headlineVisibility;
                return i.dy`
            <sp-dialog
                ?dismissable=${this.dismissable}
                ?no-divider=${e}
                ?error=${this.error}
                mode=${(0,
                a.o)(this.mode)}
                size=${(0,
                a.o)(this.size)}
            >
                ${this.hero ? i.dy`
                          <img
                              src="${this.hero}"
                              slot="hero"
                              aria-hidden=${(0,
                a.o)(this.heroLabel ? void 0 : "true")}
                              alt=${(0,
                a.o)(this.heroLabel ? this.heroLabel : void 0)}
                          />
                      ` : i.dy``}
                ${this.headline ? i.dy`
                          <h2
                              slot="heading"
                              ?hidden=${"none" === this.headlineVisibility}
                          >
                              ${this.headline}
                          </h2>
                      ` : i.dy``}
                <slot></slot>
                ${this.footer ? i.dy`
                          <div slot="footer">${this.footer}</div>
                      ` : i.dy``}
                ${this.cancelLabel ? i.dy`
                          <sp-button
                              variant="secondary"
                              treatment="outline"
                              slot="button"
                              @click=${this.clickCancel}
                          >
                              ${this.cancelLabel}
                          </sp-button>
                      ` : i.dy``}
                ${this.secondaryLabel ? i.dy`
                          <sp-button
                              variant="primary"
                              treatment="outline"
                              slot="button"
                              @click=${this.clickSecondary}
                          >
                              ${this.secondaryLabel}
                          </sp-button>
                      ` : i.dy``}
                ${this.confirmLabel ? i.dy`
                          <sp-button
                              variant="accent"
                              slot="button"
                              @click=${this.clickConfirm}
                          >
                              ${this.confirmLabel}
                          </sp-button>
                      ` : i.dy``}
            </sp-dialog>
        `
            }
        }
        l([(0,
        o.Cb)({
            type: Boolean,
            reflect: !0
        })], c.prototype, "error", 2),
        l([(0,
        o.Cb)({
            attribute: "cancel-label"
        })], c.prototype, "cancelLabel", 2),
        l([(0,
        o.Cb)({
            attribute: "confirm-label"
        })], c.prototype, "confirmLabel", 2),
        l([(0,
        o.Cb)()], c.prototype, "footer", 2),
        l([(0,
        o.Cb)()], c.prototype, "hero", 2),
        l([(0,
        o.Cb)({
            attribute: "hero-label"
        })], c.prototype, "heroLabel", 2),
        l([(0,
        o.Cb)({
            type: Boolean,
            reflect: !0,
            attribute: "no-divider"
        })], c.prototype, "noDivider", 2),
        l([(0,
        o.Cb)({
            type: String,
            reflect: !0
        })], c.prototype, "size", 2),
        l([(0,
        o.Cb)({
            attribute: "secondary-label"
        })], c.prototype, "secondaryLabel", 2),
        l([(0,
        o.Cb)()], c.prototype, "headline", 2),
        l([(0,
        o.Cb)({
            type: String,
            attribute: "headline-visibility"
        })], c.prototype, "headlineVisibility", 2),
        (0,
        r(589415).N)("sp-dialog-wrapper", c)
    }
}]);
//# sourceMappingURL=17558.db19941e996d2215a15f.js.map
