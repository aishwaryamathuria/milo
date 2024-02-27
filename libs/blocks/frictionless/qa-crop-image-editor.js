"use strict";
(self.webpackChunk_hz_quick_actions_standalone_webapp = self.webpackChunk_hz_quick_actions_standalone_webapp || []).push([[96897], {
    955015: (e,r,i)=>{
        i.r(r),
        i.d(r, {
            CropImageEditor: ()=>l
        });
        var t, o = i(944440), a = i(692484), n = i(961741), s = i(903512), c = i(697038), d = i(848961);
        let l = t = class extends d.C {
            getCustomExportOptions() {
                return {
                    useCropGroupBounds: !0
                }
            }
            async processUploadedAsset() {
                this._uiSyncFrontend.submitAction({
                    type: n.I.crop,
                    payload: {
                        source: n.Q.quickAction
                    }
                }),
                this._quickActionExportStore.setExportEnabled(!0)
            }
            renderInteractions() {
                return s.Ld
            }
        }
        ;
        l.TAG_NAME = "qa-crop-image-editor",
        (0,
        o.__decorate)([(0,
        a.w)("UISyncFrontend")], l.prototype, "_uiSyncFrontend", void 0),
        (0,
        o.__decorate)([(0,
        a.w)("OpenInProjectXEditorHandler")], l.prototype, "_openInProjectXEditorHandler", void 0),
        l = t = (0,
        o.__decorate)([(0,
        c.Mo)(t.TAG_NAME)], l)
    }
    ,
    458047: (e,r,i)=>{
        i.d(r, {
            Z: ()=>t
        });
        const t = i(903512).iv`
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
    400779: (e,r,i)=>{
        i.d(r, {
            A: ()=>l
        });
        var t = i(374069)
          , o = i(903512)
          , a = i(697038);
        const n = o.iv`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(--spectrum-icon-size-s);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(--spectrum-icon-size-m);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(--spectrum-icon-size-l);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(--spectrum-icon-size-xl);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(--spectrum-icon-size-xxl);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`;
        var s = Object.defineProperty
          , c = Object.getOwnPropertyDescriptor
          , d = (e,r,i,t)=>{
            for (var o, a = t > 1 ? void 0 : t ? c(r, i) : r, n = e.length - 1; n >= 0; n--)
                (o = e[n]) && (a = (t ? o(r, i, a) : o(a)) || a);
            return t && a && s(r, i, a),
            a
        }
        ;
        class l extends t.o {
            static get styles() {
                return [n]
            }
            render() {
                return o.dy`
            <slot></slot>
        `
            }
        }
        d([(0,
        a.Cb)()], l.prototype, "label", 2),
        d([(0,
        a.Cb)({
            reflect: !0
        })], l.prototype, "size", 2)
    }
    ,
    29171: (e,r,i)=>{
        let t;
        i.d(r, {
            A: ()=>o,
            _: ()=>a
        });
        const o = function(e, ...r) {
            return t ? t(e, ...r) : r.reduce(((r,i,t)=>r + i + e[t + 1]), e[0])
        }
          , a = e=>{
            t = e
        }
    }
    ,
    857534: (e,r,i)=>{
        let t;
        i.d(r, {
            A: ()=>o,
            _: ()=>a
        });
        const o = function(e, ...r) {
            return t ? t(e, ...r) : r.reduce(((r,i,t)=>r + i + e[t + 1]), e[0])
        }
          , a = e=>{
            t = e
        }
    }
    ,
    727116: (e,r,i)=>{
        i.d(r, {
            Z: ()=>t
        });
        const t = i(903512).iv`
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
    197367: (e,r,i)=>{
        i.d(r, {
            G: ()=>t
        });
        const t = (e,r,{position: i, prepareCallback: t}={
            position: "beforeend"
        })=>{
            let {length: o} = e;
            if (0 === o)
                return ()=>e;
            let a = 1
              , n = 0;
            ("afterbegin" === i || "afterend" === i) && (a = -1,
            n = o - 1);
            const s = new Array(o)
              , c = new Array(o)
              , d = document.createComment("placeholder for reparented element");
            do {
                const o = e[n];
                t && (c[n] = t(o)),
                s[n] = d.cloneNode();
                const l = o.parentElement || o.getRootNode();
                l && l !== o && l.replaceChild(s[n], o),
                r.insertAdjacentElement(i, o),
                n += a
            } while (--o > 0);
            return function() {
                return function(e, r, i=[]) {
                    for (let t = 0; t < r.length; ++t) {
                        const o = r[t]
                          , a = e[t]
                          , n = a.parentElement || a.getRootNode();
                        i[t] && i[t](o),
                        n && n !== a && n.replaceChild(o, a),
                        delete e[t]
                    }
                    return r
                }(s, e, c)
            }
        }
    }
    ,
    455804: (e,r,i)=>{
        var t = i(374069)
          , o = i(903512)
          , a = i(697038);
        const n = o.iv`
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
        var s = Object.defineProperty
          , c = Object.getOwnPropertyDescriptor;
        class d extends t.o {
            constructor() {
                super(...arguments),
                this.open = !1
            }
            static get styles() {
                return [n]
            }
            render() {
                return o.dy``
            }
        }
        ((e,r,i,t)=>{
            for (var o, a = t > 1 ? void 0 : t ? c(r, i) : r, n = e.length - 1; n >= 0; n--)
                (o = e[n]) && (a = (t ? o(r, i, a) : o(a)) || a);
            t && a && s(r, i, a)
        }
        )([(0,
        a.Cb)({
            type: Boolean,
            reflect: !0
        })], d.prototype, "open", 2),
        (0,
        i(589415).N)("sp-underlay", d)
    }
    ,
    147122: (e,r,i)=>{
        var t, o, a, n;
        i.d(r, {
            GO: ()=>t,
            VW: ()=>n,
            gq: ()=>o
        }),
        function(e) {
            e.temporalArtboardContainer = "sl:temporalArtboardContainer",
            e.temporalArtboardContainerMain = "sl:temporalArtboardContainerMain"
        }(t || (t = {})),
        function(e) {
            e.ScenelineAudioTrackType = "sl:ScenelineAudioTrackType",
            e.ScenelineMusicChildOf = "sl:ScenelineMusicChildOf",
            e.ScenelineVoiceChildOf = "sl:ScenelineVoiceChildOf",
            e.ScenelineGeometryUnitType = "sl:ScenelineGeometryUnitType",
            e.ScenelineCreativeIntent = "sl:ScenelineCreativeIntent",
            e.HasExplicitDuration = "sl:HasExplicitDuration",
            e.GeneratedFromPremiumTemplate = "sl:GeneratedFromPremiumTemplate",
            e.TheoExportData = "sl:TheoExportData"
        }(o || (o = {})),
        function(e) {
            e[e.music = 1] = "music",
            e[e.voice = 2] = "voice"
        }(a || (a = {})),
        function(e) {
            e.Centimeter = "cm",
            e.Inch = "in",
            e.Millimeter = "mm",
            e.Pixel = "px"
        }(n || (n = {}));
        Object.values(o),
        o.ScenelineMusicChildOf,
        o.ScenelineVoiceChildOf
    }
    ,
    889063: (e,r,i)=>{
        i.d(r, {
            $j: ()=>c,
            Ku: ()=>n,
            hX: ()=>s,
            ni: ()=>a
        });
        var t = i(184930)
          , o = i(253624);
        const a = e=>{
            let r;
            if ("HttpError" === e.kind)
                r = new t.o(e.httpStatus,e.message,e.code,{
                    requestId: e.headers.requestId,
                    retryAfter: e.headers.retryAfter
                });
            else {
                if ("HzError" !== e.kind) {
                    if ("Error" === e.kind) {
                        const r = new Error(e.message);
                        return r.stack = e.stack,
                        r
                    }
                    throw new Error(`Unknown serialized error type: ${e.kind}`)
                }
                r = new o.R(e.code,e.message)
            }
            return r.category = e.category,
            r.uuid = e.uuid,
            r.stack = e.stack,
            r.isExpected = e.isExpected,
            r.logMetadata = e.logMetadata,
            e.previousErrorData && (r.previousError = a(e.previousErrorData)),
            r
        }
          , n = (e,r)=>{
            const i = e.getDataRepresentation(r);
            return a(i)
        }
          , s = new Map([[400, "BadRequest"], [401, "UnAuthorized"], [403, "Forbidden"], [404, "NotFound"], [409, "Conflict"], [429, "TooManyRequests"], [500, "InternalServerError"], [502, "BadGateway"], [503, "ServiceUnavailable"], [504, "GatewayTimeout"]]);
        function c(e) {
            return (r,i,t)=>{
                let a = {
                    category: e
                };
                return t instanceof Error ? a.previousError = t : a = void 0 === t?.category ? {
                    ...t,
                    category: e
                } : t,
                new o.R(r,i,a)
            }
        }
    }
    ,
    706048: (e,r,i)=>{
        i.d(r, {
            p: ()=>s
        });
        var t = i(374069)
          , o = i(903512)
          , a = i(454896)
          , n = i(511119);
        class s extends ((0,
        n.K)((0,
        a.x)((0,
        t.k)(o.oi)))) {
        }
    }
    ,
    486055: (e,r,i)=>{
        i.d(r, {
            A: ()=>t
        });
        const t = {
            bubbles: !0,
            composed: !0
        }
    }
    ,
    511119: (e,r,i)=>{
        i.d(r, {
            K: ()=>a
        });
        var t = i(944440)
          , o = i(697038);
        const a = e=>{
            class r extends e {
                constructor() {
                    super(...arguments),
                    this._loggedI18nWarning = !1,
                    this.formatMessage = e=>(this.underTest || this._loggedI18nWarning || (console.warn(`[i18n] Did you forget to pass formatMessage() as a property to ${this.constructor.name} or add the undertest attribute when testing?`),
                    this._loggedI18nWarning = !0),
                    this.underTest ? String(e.defaultMessage) : String(e.id) ?? ""),
                    this.underTest = !1
                }
            }
            return (0,
            t.__decorate)([(0,
            o.Cb)({
                attribute: !1
            })], r.prototype, "formatMessage", void 0),
            (0,
            t.__decorate)([(0,
            o.Cb)({
                type: Boolean,
                reflect: !0
            })], r.prototype, "underTest", void 0),
            r
        }
    }
}]);
//# sourceMappingURL=qa-crop-image-editor.a5138b0b0713b93dcacc.js.map
