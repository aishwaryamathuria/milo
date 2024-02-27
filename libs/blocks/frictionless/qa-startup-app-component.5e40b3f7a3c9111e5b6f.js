"use strict";(self.webpackChunk_hz_quick_actions_standalone_webapp=self.webpackChunk_hz_quick_actions_standalone_webapp||[]).push([[59577,98778,14899,84824,29536,88866,21556,55614],{316827:(t,e,o)=>{t.exports=o.p+"static/HeroImage.1c244425f74a99cb07d5.png"},481303:(t,e,o)=>{t.exports=o.p+"static/HeroImageBackground.43ab8a2897e5467e2128.png"},412943:(t,e,o)=>{o.d(e,{fA:()=>c,u:()=>p,Q7:()=>h});var i=o(433318),r=o(861149),a=o(102775),s=o(8652);const n=[...a.lV,"image/jpeg","image/jpg","image/png"],c=50,l={description:(0,i.Em)({id:"@hz/quick-actions:merge-videos-title-section-description",defaultMessage:"Merge videos in seconds with our free online tool."}),title:(0,i.Em)({id:"@hz/quick-actions:merge-videos-title-section-title",defaultMessage:"Merge videos"}),quickActionId:"merge-videos",exportEntityType:r.FE.artboard},d=(0,i.Em)({id:"@hz/quick-actions:shared-ui-upload-section-dropzone-title-desktop-merge-videos",defaultMessage:"Drag and drop videos & images or <accent>browse</accent>"}),u=(0,i.Em)({id:"@hz/quick-actions:shared-ui-upload-section-dropzone-title-mobile-merge-videos",defaultMessage:"Tap to upload videos"});function h(t){const e=(0,a.jA)(l);t.set("QuickActionUIConfig",(async()=>new e))}function p(t){const e=(0,a.L5)({uploadUIContent:{...s.BH.videoUIContent(),uploadTitleDesktop:d,uploadTitleMobile:u},acceptedImportTypes:n,maxFileCount:c});t.set("QuickActionFileUploadConfig",(async()=>new e))}},292963:(t,e,o)=>{o.d(e,{L:()=>f});var i=o(944440),r=o(859526),a=o(692484),s=o(433318),n=o(875095),c=o(804963),l=o(903512),d=o(697038),u=o(429950),h=o(661088),p=o(749472),m=o(163150),g=(o(12142),o(749179),o(553648));const v=l.iv`
    * {
        box-sizing: border-box;
    }

    :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: auto;
        font-weight: 400;
        color: var(--qa-color-gray-800);
    }

    .editor-area {
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    .loading-progress {
        display: flex;
        gap: ${(0,g.hO)(10)};
        align-items: center;
    }

    hz-canvas-surface {
        display: block;
        height: 100%;
        position: relative;
        width: 100%;
        --custom-hz-canvas-bottom-spacing: 0;
    }

    .canvas-section {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        /* Help distinguish between the white background of the
        quick actions page and white pages in documents */
        border: var(--spectrum-global-dimension-size-10) solid var(--spectrum-global-color-gray-200);
        border-radius: var(--qa-editor-canvas-section-border-radius, ${(0,g.hO)(12)});
    }

    hz-toasting-container {
        inset-block-end: ${(0,g.hO)(48)};
    }
`;var b=o(383188);class f extends r.j{constructor(){super(...arguments),this.isSmallAppFrame=!1,this.isAuthenticationModalOpen=!1,this._canvasRenderer=this.renderCanvas,this._interactionsRenderer=this.renderInteractions}get isNativeMobile(){return this._nativeMobileBridge.isAvailable}async contextsLoaded(){this._userStore.load(),await Promise.all([this._intlStore.load(),this._platformStore.load()]),this.autorun((()=>{this.isSmallAppFrame=b.q.quickActionTabletMobileView.enabled?this._platformStore.hasSmallAppFrame:this._platformStore.appFrameSize===n.Nc.small})),this._quickActionExportStore.registerDownloadCallback(this.getDownloadURL),this._anonymousUserExportAttemptedStateChange(),this.reaction((()=>this._quickActionExportStore.anonymousUserExportAttempted),(()=>this._anonymousUserExportAttemptedStateChange())),this._exportInProgressStateChange(),this.reaction((()=>this._quickActionExportStore.exportInProgress),(()=>this._exportInProgressStateChange())),this._isSavingLocalDocumentStateChange(),this.reaction((()=>this._quickActionAuthenticationStore.isSavingLocalDocument),(()=>this._isSavingLocalDocumentStateChange())),this._isCreatingDocFromLocalDocStateChange(),this.reaction((()=>this._quickActionAuthenticationStore.isCreatingDocFromLocalDoc),(()=>this._isCreatingDocFromLocalDocStateChange())),this.uploadStatusStateChange(),this.reaction((()=>this._quickActionEditorStore.uploadStatus),(()=>this.uploadStatusStateChange())),this.downloadRequestCompletedChange(),this.reaction((()=>this._quickActionExportStore.downloadRequestCompleted),(()=>this.downloadRequestCompletedChange())),this._quickActionAuthenticationStore.isCreatingDocFromLocalDoc&&this._quickActionEditorStore.setUploadStatus("skipped")}_exportInProgressStateChange(t=this._quickActionExportStore.exportInProgress){const e=this._quickActionUIConfig.downloadProgressLabel??{id:"@hz/quick-actions:shared-ui-file-exporting",defaultMessage:"Exporting your fileâ€¦"};t?this._quickActionEditorStore.setProgressLabel(this._intlStore.formatMessage(e)):this._quickActionEditorStore.setProgressLabel(void 0)}async uploadStatusStateChange(t=this._quickActionEditorStore.uploadStatus){"none"===t&&await(this.onUploadStatusNone?.()),"initialized"===t&&(this._quickActionEditorStore.setEditorLoading(!0),await(this.onUploadStatusInitialized?.())),"completed"===t&&(this._quickActionPerformance.begin(h.U.processUpload),await(this.onUploadStatusCompleted?.()),this._quickActionPerformance.end(h.U.processUpload),this._quickActionEditorStore.setEditorLoading(!1),this._quickActionEditorStore.setProgressLabel(void 0)),"skipped"===t&&(this._quickActionEditorStore.setEditorLoading(!0),await(this.onUploadStatusSkipped?.()),this._quickActionEditorStore.setEditorLoading(!1)),"completed"!==t&&"skipped"!==t||this._quickActionAnalyticsStore.onQuickActionEditorDisplayed()}_anonymousUserExportAttemptedStateChange(t=this._quickActionExportStore.anonymousUserExportAttempted){t&&(this._openAuthenticationModal(),this._quickActionExportStore.setAnonymousUserExportAttempted(!1))}_isSavingLocalDocumentStateChange(t=this._quickActionAuthenticationStore.isSavingLocalDocument){if(t){const t=(0,s.Em)({id:"@hz/quick-actions:shared-ui-progress-overlay-saving-local-document-label",defaultMessage:"Saving projectâ€¦"});this._quickActionEditorStore.setShowProgressOverlayWithLabel(!0,this._intlStore.formatMessage(t))}else this._quickActionEditorStore.setShowProgressOverlayWithLabel(!1,void 0)}_isCreatingDocFromLocalDocStateChange(){if(this._quickActionAuthenticationStore.isCreatingDocFromLocalDoc){const t=(0,s.Em)({id:"@hz/quick-actions:shared-ui-progress-overlay-creating-from-local-document-label",defaultMessage:"Opening your projectâ€¦"});this._quickActionEditorStore.setShowProgressOverlayWithLabel(!0,this._intlStore.formatMessage(t))}}downloadRequestCompletedChange(t=this._quickActionExportStore.downloadRequestCompleted){if(t&&(0,m.tB)(this._uiStateStore.qaParentContext)){if(!this._platformStore.isMobileOrTablet||this.isNativeMobile)return;let t;switch(p.qD[this._quickActionExportStore.exportMimeType]){case"file":default:t=this._successToastMessages.file;break;case"image":t=this._successToastMessages.image;break;case"video":t=this._successToastMessages.video}this._toastsStore.showSuccess(this._intlStore.formatMessage(t),(()=>this._quickActionAnalyticsStore.onDismissSuccessToast("tap-x")),(()=>this._quickActionAnalyticsStore.onDismissSuccessToast("automatic"))),this._quickActionAnalyticsStore.onViewSuccessToast()}}get _successToastMessages(){return{file:(0,s.Em)({id:"@hz/quick-actions:mobile-file-download-success-toast-message",defaultMessage:"File saved to device."}),image:(0,s.Em)({id:"@hz/quick-actions:mobile-image-download-success-toast-message",defaultMessage:"Photo saved to device."}),video:(0,s.Em)({id:"@hz/quick-actions:mobile-video-download-success-toast-message",defaultMessage:"Video saved to device."})}}_openAuthenticationModal(){this.isAuthenticationModalOpen=!0,c.Overlay.open(this,"modal",this._qaAuthenticationModal,{placement:"none",receivesFocus:"auto"})}closeAuthenticationModal(){this.isAuthenticationModalOpen=!1}renderAuthenticationModal(){return l.dy`
            <qa-authentication-modal
                ?open=${this.isAuthenticationModalOpen}
                @qa-authentication-modal-closed=${this.closeAuthenticationModal}
                @qa-authentication-modal-sign-in-clicked=${this.closeAuthenticationModal}
                @qa-authentication-modal-sign-up-clicked=${this.closeAuthenticationModal}
            >
            </qa-authentication-modal>
        `}renderToastContainer(){return l.dy`
            <hz-toasting-container
                style=${this._platformStore.isSmallAppFrameWithCoarsePointer?(0,u.V)({"--hz-toasting-container-left":"0","--hz-toasting-container-transform":"none"}):""}
            ></hz-toasting-container>
        `}render(){const{inputFileSrc:t}=this;return l.dy`${this._qaLayout.renderLayout((()=>this._canvasRenderer()),(()=>this._interactionsRenderer()),{inputFileSrc:t})}
        ${this.renderToastContainer()} ${this.renderAuthenticationModal()}`}}f.styles=[v],(0,i.__decorate)([(0,a.w)("PlatformStore")],f.prototype,"_platformStore",void 0),(0,i.__decorate)([(0,a.w)("ImsService")],f.prototype,"_imsService",void 0),(0,i.__decorate)([(0,a.w)("IntlStore")],f.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,a.w)("QuickActionAnalyticsStore")],f.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,a.w)("QuickActionAuthenticationStore")],f.prototype,"_quickActionAuthenticationStore",void 0),(0,i.__decorate)([(0,a.w)("QuickActionUIConfig")],f.prototype,"_quickActionUIConfig",void 0),(0,i.__decorate)([(0,a.w)("QuickActionEditorStore")],f.prototype,"_quickActionEditorStore",void 0),(0,i.__decorate)([(0,a.w)("QuickActionExportStore")],f.prototype,"_quickActionExportStore",void 0),(0,i.__decorate)([(0,a.w)("QuickActionPerformance")],f.prototype,"_quickActionPerformance",void 0),(0,i.__decorate)([(0,a.w)("QALayout")],f.prototype,"_qaLayout",void 0),(0,i.__decorate)([(0,a.w)("ToastsStore")],f.prototype,"_toastsStore",void 0),(0,i.__decorate)([(0,a.w)("UIStateStore")],f.prototype,"_uiStateStore",void 0),(0,i.__decorate)([(0,a.w)("UserStore")],f.prototype,"_userStore",void 0),(0,i.__decorate)([(0,a.w)("NativeMobileBridge")],f.prototype,"_nativeMobileBridge",void 0),(0,i.__decorate)([(0,d.Cb)({type:Boolean,attribute:"is-small-app-frame",reflect:!0})],f.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:"qa-parent-context",type:String})],f.prototype,"qaParentContext",void 0),(0,i.__decorate)([(0,d.Cb)({type:String})],f.prototype,"inputFileSrc",void 0),(0,i.__decorate)([(0,d.IO)("qa-authentication-modal")],f.prototype,"_qaAuthenticationModal",void 0),(0,i.__decorate)([(0,d.SB)()],f.prototype,"isAuthenticationModalOpen",void 0)},8652:(t,e,o)=>{o.d(e,{N8:()=>h,LC:()=>i.L,tc:()=>m.t,CD:()=>p.C,ip:()=>m.i,BH:()=>g.BH,FG:()=>v.FG,fD:()=>g.fD});var i=o(292963),r=o(944440),a=o(859526),s=o(692484),n=o(903512),c=o(697038),l=o(383188),d=o(875095),u=o(804963);class h extends a.j{constructor(){super(...arguments),this.isSmallAppFrame=!1,this.isAuthenticationModalOpen=!1,this._canvasRenderer=this.renderCanvas}_anonymousUserExportAttemptedStateChange(t=this._quickActionExportStore.anonymousUserExportAttempted){t&&(this._openAuthenticationModal(),this._quickActionExportStore.setAnonymousUserExportAttempted(!1))}_openAuthenticationModal(){this.isAuthenticationModalOpen=!0,u.Overlay.open(this,"modal",this._qaAuthenticationModal,{placement:"none",receivesFocus:"auto"})}closeAuthenticationModal(){this.isAuthenticationModalOpen=!1}renderAuthenticationModal(){return n.dy`
            <qa-authentication-modal
                ?open=${this.isAuthenticationModalOpen}
                @qa-authentication-modal-closed=${this.closeAuthenticationModal}
                @qa-authentication-modal-sign-in-clicked=${this.closeAuthenticationModal}
                @qa-authentication-modal-sign-up-clicked=${this.closeAuthenticationModal}
            >
            </qa-authentication-modal>
        `}async contextsLoaded(){await Promise.all([this._intlStore.load(),this._platformStore.load()]),this.autorun((()=>{this.isSmallAppFrame=l.q.quickActionTabletMobileView.enabled?this._platformStore.hasSmallAppFrame:this._platformStore.appFrameSize===d.Nc.small})),this._anonymousUserExportAttemptedStateChange(),this.reaction((()=>this._quickActionExportStore.anonymousUserExportAttempted),(()=>this._anonymousUserExportAttemptedStateChange()))}render(){return n.dy`
            ${this._makerLayout.renderLayout((()=>this.renderStepLoader()),(()=>this.renderCurrentStep()),((...t)=>this._canvasRenderer(...t)))}
            ${this.renderAuthenticationModal()}
        `}}(0,r.__decorate)([(0,s.w)("MakerLayout")],h.prototype,"_makerLayout",void 0),(0,r.__decorate)([(0,s.w)("PlatformStore")],h.prototype,"_platformStore",void 0),(0,r.__decorate)([(0,s.w)("IntlStore")],h.prototype,"_intlStore",void 0),(0,r.__decorate)([(0,s.w)("GuidedLayoutStore")],h.prototype,"_guidedLayoutStore",void 0),(0,r.__decorate)([(0,s.w)("QuickActionAuthenticationStore")],h.prototype,"_quickActionAuthenticationStore",void 0),(0,r.__decorate)([(0,s.w)("QuickActionExportStore")],h.prototype,"_quickActionExportStore",void 0),(0,r.__decorate)([(0,c.Cb)({type:Boolean,attribute:"is-small-app-frame",reflect:!0})],h.prototype,"isSmallAppFrame",void 0),(0,r.__decorate)([(0,c.IO)("qa-authentication-modal")],h.prototype,"_qaAuthenticationModal",void 0),(0,r.__decorate)([(0,c.SB)()],h.prototype,"isAuthenticationModalOpen",void 0);o(439719),o(749179),o(47619),o(297054),o(232488);var p=o(848961),m=o(196666),g=(o(283398),o(193566)),v=(o(15803),o(275862),o(953768),o(153706),o(243553),o(471066),o(576231))},439719:(t,e,o)=>{var i=o(944440),r=o(859526),a=o(692484),s=o(873650),n=o(903512),c=o(697038),l=o(148868);o(610250),o(84824),o(681248);const d=n.iv`
    :host {
        /* stylelint-disable unit-disallowed-list -- no spectrum var available */
        --panel-width: 320px;
        --x-thumbnail-size: var(--panel-width);
    }

    sp-underlay:not([open]) + div {
        display: none;
    }

    sp-underlay {
        inset-block-start: var(--spectrum-spacing-800);
    }

    sp-underlay + div {
        width: var(--panel-width);
        position: fixed;
        inset-block-start: var(--spectrum-spacing-800);
        inset-block-end: 0;
        inset-inline-end: 0;
        z-index: 1;
        background: var(--spectrum-white);
    }

    div {
        display: flex;
        flex-direction: column;
    }

    sp-action-button {
        margin-inline-end: auto;
    }

    ::slotted([slot="footer"]) {
        margin-block-end: var(--spectrum-spacing-400);
        margin-block-start: auto;
        align-self: center;
    }

    section {
        display: flex;
    }

    .assetDescription {
        margin-inline-start: var(--spectrum-spacing-300);
        margin-inline-end: var(--spectrum-spacing-300);
        margin-block-start: var(--spectrum-spacing-300);
        font-weight: var(--spectrum-extra-bold-font-weight);
        text-align: center;

        flex-grow: 1;
        width: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-clamp: 3;
        -webkit-line-clamp: 3;
    }

    .container {
        display: inline-block;
    }

    .footerContainer {
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        flex: 1;
        text-align: center;
    }
`;var u;let h=u=class extends r.j{constructor(){super(...arguments),this.showAssetDescription=!1}_handleDialogClose(){this.previewUnderlay.open=!1}_renderCloseButton(){return n.dy`<sp-action-button size="xl" quiet @click=${this._handleDialogClose}>
            <x-icon-chevron-left slot="icon"></x-icon-chevron-left>
        </sp-action-button>`}_renderAssetTitle(){return n.dy`<section class="spectrum-Typography">
            <p class="spectrum-Body spectrum-Body--sizeXL assetDescription">${this.props?.title}</p>
        </section>`}render(){return n.dy`
            <sp-underlay .onclick=${this._handleDialogClose.bind(this)}></sp-underlay>
            <div>
                ${this._renderCloseButton()}
                <div class="container">
                    <x-thumbnail
                        .orientation=${"vertical"}
                        .formatMessage=${this._intlStore.formatMessage}
                        .props=${this.props}
                    ></x-thumbnail>
                    ${(0,l.g)(this.showAssetDescription&&this.props?.title,(()=>this._renderAssetTitle()))}
                </div>
                <div class="footerContainer">
                    <slot name="footer"></slot>
                </div>
            </div>
        `}};h.TAG_NAME="mini-editor-preview-panel",h.styles=[s.Z,d],(0,i.__decorate)([(0,c.Cb)({attribute:!1})],h.prototype,"props",void 0),(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!0})],h.prototype,"showAssetDescription",void 0),(0,i.__decorate)([(0,a.w)("IntlStore")],h.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.IO)("sp-underlay")],h.prototype,"previewUnderlay",void 0),h=u=(0,i.__decorate)([(0,c.Mo)(u.TAG_NAME)],h)},115686:(t,e,o)=>{o.r(e),o.d(e,{QA_EDITOR_SLOT:()=>g,QuickActionApp:()=>v});var i=o(944440),r=(o(344354),o(531176),o(444862),o(948302),o(209532),o(859526)),a=o(692484),s=o(875095),n=o(903512),c=o(148868),l=o(697038),d=o(163150),u=o(383188),h=o(553648);o(47619),o(848961),o(196666),o(193566),o(15803),o(153706),o(953768),o(576231);const p=n.iv`
    ${h.gC}
    ${h.Rr}

    :host([is-small-app-frame][layout="modal"]) {
        --qa-workspace-custom-panel-section-padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    sp-theme {
        height: 100%;
        width: 100%;
        background-color: var(--qa-background-color-primary);
        display: flex;
        flex-flow: column;
    }

    ::slotted(*) {
        flex: 0 auto;
        min-height: 0;
    }

    ${h.Wh}
`;var m;const g="qa-editor-slot";let v=m=class extends r.j{constructor(){super(...arguments),this.isSmallAppFrame=!1}static get styles(){return[p]}firstUpdated(){const t=new URLSearchParams(window.location.search),e=t.get("colorScheme")||void 0,o=t.get("qaParentContext")||void 0;if(this.spectrumTheme=t.get("spectrumTheme")||"express",this._uiStateStore.manuallySetColorTheme(e),this._uiStateStore.manuallySetSpectrumTheme(this.spectrumTheme),o){Object.values(d.Jo).includes(o)&&this._uiStateStore.setQuickActionParentContext(o)}}async contextsLoaded(){this.autorun((()=>{this.isSmallAppFrame=u.q.quickActionTabletMobileView.enabled?this._platformStore.hasSmallAppFrame:this._platformStore.appFrameSize===s.Nc.small})),this._onScaleChange(),this.reaction((()=>this._uiStateStore.scale),this._onScaleChange.bind(this)),this._onColorSchemeChange(),this.reaction((()=>this._uiStateStore.colorScheme),this._onColorSchemeChange.bind(this)),this.reaction((()=>this._uiStateStore.spectrumTheme),this._onSpectrumThemeChange.bind(this))}_onScaleChange(t=this._uiStateStore.scale){const e=this._uiStateStore.spectrumTheme;return"express"===e?"large"===t?Promise.resolve().then(o.bind(o,531176)):Promise.resolve().then(o.bind(o,344354)):"spectrum"===e?"large"===t?Promise.all([o.e(99127),o.e(15398)]).then(o.bind(o,283735)):Promise.all([o.e(99127),o.e(40535)]).then(o.bind(o,260796)):void 0}_onColorSchemeChange(t=this._uiStateStore.colorScheme){const e=this._uiStateStore.spectrumTheme;return"express"===e?"dark"===t?Promise.resolve().then(o.bind(o,209532)):Promise.resolve().then(o.bind(o,444862)):"spectrum"===e?"dark"===t?Promise.all([o.e(99127),o.e(24875)]).then(o.bind(o,765385)):Promise.all([o.e(99127),o.e(62986)]).then(o.bind(o,245574)):void 0}_onSpectrumThemeChange(t=this._uiStateStore.spectrumTheme){this._onColorSchemeChange(),this._onScaleChange()}render(){const{scale:t,colorScheme:e,spectrumTheme:o}=this._uiStateStore,i=o??this.spectrumTheme;return n.dy`
            <sp-theme theme=${i} scale=${t} color=${e}>
                <slot name="header-bar"></slot>
                <slot name=${g}></slot>
                ${(0,c.g)(u.q.useIntlDevTools.enabled,(()=>n.dy`<intl-dev-tools></intl-dev-tools>`))}
            </sp-theme>
        `}};v.TAG_NAME="qa-app",(0,i.__decorate)([(0,l.Cb)({type:String})],v.prototype,"colorScheme",void 0),(0,i.__decorate)([(0,l.Cb)({type:Boolean,reflect:!0,attribute:"is-small-app-frame"})],v.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,l.Cb)({type:String,attribute:"layout",reflect:!0})],v.prototype,"layout",void 0),(0,i.__decorate)([(0,a.w)("PlatformStore")],v.prototype,"_platformStore",void 0),(0,i.__decorate)([(0,l.Cb)({type:String})],v.prototype,"spectrumTheme",void 0),(0,i.__decorate)([(0,a.w)("UIStateStore")],v.prototype,"_uiStateStore",void 0),v=m=(0,i.__decorate)([(0,l.Mo)(m.TAG_NAME)],v)},749179:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=o(148868),n=o(859526),c=o(692484),l=o(433318),d=(o(505162),o(326117),o(561528),o(927406),o(163150)),u=o(423079),h=o(576231),p=o(553648);const m=r.iv`
    :host {
        display: none;
        flex-direction: row;
        height: var(--qa-authentication-modal-custom-height, 100vh);
        inset-block-start: var(--qa-authentication-modal-custom-top, 0);
        justify-content: center;
        width: 100vw;
    }

    :host([open]) {
        display: flex;
    }

    x-custom-dialog-wrapper {
        inset-inline-start: auto;
        width: max-content;
    }

    sp-dialog {
        background-color: var(--qa-background-color-secondary);
        height: 100%;
        width: 100%;
    }

    :host(:not([is-small-app-frame])) sp-dialog {
        border-radius: ${(0,p.hO)(15)};
        height: auto;
    }

    .dialog-content {
        color: var(--qa-color-gray-900);
        margin: auto;
        max-width: ${(0,p.hO)(358)};
        text-align: center;
    }

    .hero-image {
        margin-block: ${(0,p.hO)(14)} ${(0,p.hO)(16)};
        width: 80%;
    }

    h1 {
        font-weight: 900;
        margin-block-end: 0;
        font-size: ${(0,p.hO)(24)};
    }

    :host(:not([is-small-app-frame])) h1 {
        font-size: ${(0,p.hO)(36)};
        margin-block-end: ${(0,p.hO)(23)};
    }

    .sign-up-description {
        font-size: ${(0,p.hO)(14)};
        padding: 0 ${(0,p.hO)(20)};
    }

    :host(:not([is-small-app-frame])) .sign-up-description {
        margin-block-end: ${(0,p.hO)(31)};
    }

    .modal-sign-up-button {
        margin-block-end: ${(0,p.hO)(12)};
    }

    :host(:not([is-small-app-frame])) .modal-sign-up-button {
        font-size: ${(0,p.hO)(17)};
        margin-block-end: ${(0,p.hO)(17)};
    }

    .sign-in-block {
        display: block;
        margin-block-end: ${(0,p.hO)(29)};
    }

    .sign-in-description {
        font-size: ${(0,p.hO)(14)};
    }

    sp-link {
        font-size: ${(0,p.hO)(14)};
    }
`;var g;let v=g=class extends n.j{constructor(){super(...arguments),this.isOpen=!1}async contextsLoaded(){await this._intlStore.load()}_renderStyleOverrides(){return r.dy`
            <style>
                /** CSS Variable overrides go here! */
                :host {
                    --qa-authentication-modal-custom-height: calc(100vh - ${h.hf}px);
                    --qa-authentication-modal-custom-top: ${h.hf}px;
                }
            </style>
        `}_handleCloseClick(){const t=new CustomEvent("qa-authentication-modal-closed",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)}_handleSignInClick(){const{currentExportTarget:t}=this._quickActionExportStore;if(!t)return void this._logger.error("Missing export target");const e=new CustomEvent("qa-authentication-modal-sign-in-clicked",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(e),this._quickActionAuthenticationStore.saveProjectAndAuthenticate(t)}_handleSignUpClick(){const{currentExportTarget:t}=this._quickActionExportStore;if(!t)return void this._logger.error("Missing export target");const e=new CustomEvent("qa-authentication-modal-sign-up-clicked",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(e),this._quickActionAuthenticationStore.saveProjectAndAuthenticate(t,!1)}_renderDialog(){const t=(0,l.Em)({id:"@hz/quick-actions:shared-ui-authentication-modal-dialog-title",defaultMessage:"One last thing!"}),e=(0,l.Em)({id:"@hz/quick-actions:shared-ui-authentication-modal-sign-up-description",defaultMessage:"Sign up to download your content. Don't worry, it's free to sign up and you get access to even more creative tools!"}),o=(0,l.Em)({id:"@hz/quick-actions:shared-ui-authentication-modal-sign-up-button-label",defaultMessage:"Sign up"}),i=(0,l.Em)({id:"@hz/quick-actions:shared-ui-authentication-modal-sign-in-description",defaultMessage:"Already have an account?"}),a=(0,l.Em)({id:"@hz/quick-actions:shared-ui-authentication-modal-sign-in-link",defaultMessage:"Sign in"});return r.dy`
            <sp-dialog no-divider open size="small">
                <div class="dialog-content">
                    <img class="hero-image" src=${u.Y9.data} />
                    <h1>${this._intlStore.formatMessage(t)}</h1>
                    <p class="sign-up-description">${this._intlStore.formatMessage(e)}</p>
                    <sp-button size="l" class="modal-sign-up-button" variant="cta" @click=${this._handleSignUpClick}>
                        ${this._intlStore.formatMessage(o)}
                    </sp-button>
                    <div class="sign-in-block">
                        <span class="sign-in-description">
                            ${this._intlStore.formatMessage(i)}
                            <sp-link class="modal-sign-in-link" @click=${this._handleSignInClick} quiet size="s">
                                ${this._intlStore.formatMessage(a)}
                            </sp-link>
                        </span>
                    </div>
                </div>
            </sp-dialog>
        `}render(){return r.dy`
            ${(0,s.g)((0,d.D3)(this._uiStateStore.qaParentContext),(()=>this._renderStyleOverrides()))}
            <x-custom-dialog-wrapper
                slot="click-content"
                ?open=${this.isOpen}
                ?dismissable=${!0}
                ?underlay=${!0}
                ?responsive=${!0}
                @cancel=${()=>this._handleCloseClick()}
            >
                ${this._renderDialog()}
            </x-custom-dialog-wrapper>
        `}};v.TAG_NAME="qa-authentication-modal",v.styles=[m],(0,i.__decorate)([(0,a.Cb)({attribute:"open",type:Boolean,reflect:!0})],v.prototype,"isOpen",void 0),(0,i.__decorate)([(0,c.w)("IntlStore")],v.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("Logger")],v.prototype,"_logger",void 0),(0,i.__decorate)([(0,c.w)("QuickActionExportStore")],v.prototype,"_quickActionExportStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionAuthenticationStore")],v.prototype,"_quickActionAuthenticationStore",void 0),(0,i.__decorate)([(0,c.w)("UIStateStore")],v.prototype,"_uiStateStore",void 0),v=g=(0,i.__decorate)([(0,a.Mo)(g.TAG_NAME)],v)},47619:(t,e,o)=>{o.d(e,{Qm:()=>u});var i=o(944440),r=o(903512),a=o(697038),s=o(859526),n=o(692484),c=(o(326117),o(88239),o(506705),o(851144),o(553648));const l=r.iv`
    :host {
        position: relative;
    }

    .dropdown-popover {
        margin: 0;
        max-width: ${(0,c.hO)(275)};
        max-height: ${(0,c.hO)(72)};
        position: absolute;
        width: max-content;
    }

    .dropdown-popover[placement="top"] {
        inset-block-start: ${(0,c.hO)(-4)};
        transform: translateY(-100%);
    }

    .dropdown-popover[placement="bottom"] {
        inset-block-start: 100%;
        transform: translateY(${(0,c.hO)(4)});
    }

    .dropdown-popover[alignment="left"] {
        inset-inline-start: 0;
    }

    .dropdown-popover[alignment="right"] {
        inset-inline-end: 0;
    }

    sp-popover {
        --spectrum-overlay-animation-distance: max-content;
        --spectrum-popover-min-width: ${(0,c.hO)(190)};
    }
`;var d;const u="menu-items-slot";let h=d=class extends s.j{constructor(){super(...arguments),this.isDisabled=!1,this.isDynamic=!1,this.alignment="left",this.placement="bottom",this.isOpen=!1,this._handleDynamicPositioning=()=>{if(this.isDynamic){const{_button:t,_popover:e}=this,o=function(t){const{popoverEl:e,buttonEl:o}=t;if(!o)return!1;if(!e)return!1;const i=o.getBoundingClientRect(),r=e.getBoundingClientRect();return i.left+r.width>(window.innerWidth||document.documentElement.clientWidth)}({buttonEl:t,popoverEl:e});o?"left"!==this.alignment&&(this.alignment="left"):this.alignment!==this.originalAlignment&&(this.alignment=this.originalAlignment);const i=function(t){const{popoverEl:e,buttonEl:o}=t;if(!o)return!1;if(!e)return!1;const i=o.getBoundingClientRect(),r=e.getBoundingClientRect();return i.bottom+r.height>(window.innerHeight||document.documentElement.clientHeight)}({buttonEl:t,popoverEl:e});i?"top"!==this.placement&&(this.placement="top"):this.placement!==this.originalPlacement&&(this.placement=this.originalPlacement)}},this._handleDocumentClick=()=>{this._unbindDocumentClickListener(),this.isOpen=!1}}async contextsLoaded(){await this._intlStore.load(),this.label||(this.label=this._intlStore.formatMessage({id:"@hz/quick-actions:shared-ui-button-dropdown-menu-default-label",defaultMessage:"Open in..."}))}static get styles(){return l}firstUpdated(t){this._handleDynamicPositioning(),super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleDynamicPositioning),this.originalAlignment=this.alignment,this.originalPlacement=this.placement}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleDynamicPositioning)}_bindDocumentClickListener(){document.addEventListener("click",this._handleDocumentClick)}_unbindDocumentClickListener(){document.removeEventListener("click",this._handleDocumentClick)}_onChangeIsOpen(t){t.stopPropagation();const{isOpen:e}=this;e?this._unbindDocumentClickListener():this._bindDocumentClickListener(),this.isOpen=!e}render(){const{alignment:t,isDisabled:e,isOpen:o,label:i,_onChangeIsOpen:a,placement:s,size:n,treatment:c,variant:l}=this;return r.dy`
            <sp-button
                ?disabled=${e}
                class="dropdown-button"
                @click=${a}
                variant=${l}
                treatment=${c||"fill"}
                size=${n||"m"}
            >
                ${i}
            </sp-button>
            <sp-popover class="dropdown-popover" ?open=${o} alignment=${t} placement=${s}>
                <sp-menu class="dropdown-menu">
                    <slot name=${u}></slot>
                </sp-menu>
            </sp-popover>
        `}};h.TAG_NAME="qa-button-dropdown-menu",(0,i.__decorate)([(0,a.Cb)({attribute:"is-disabled",type:Boolean})],h.prototype,"isDisabled",void 0),(0,i.__decorate)([(0,a.Cb)({attribute:"is-dynamic",type:Boolean})],h.prototype,"isDynamic",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],h.prototype,"label",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],h.prototype,"size",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],h.prototype,"treatment",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],h.prototype,"variant",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],h.prototype,"alignment",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],h.prototype,"placement",void 0),(0,i.__decorate)([(0,a.IO)("dropdown-button")],h.prototype,"_button",void 0),(0,i.__decorate)([(0,a.IO)("dropdown-popover")],h.prototype,"_popover",void 0),(0,i.__decorate)([(0,a.SB)()],h.prototype,"isOpen",void 0),(0,i.__decorate)([(0,n.w)("IntlStore")],h.prototype,"_intlStore",void 0),h=d=(0,i.__decorate)([(0,a.Mo)(d.TAG_NAME)],h)},297054:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=o(148868),n=o(859526),c=o(692484),l=o(433318),d=(o(505162),o(326117),o(561528),o(927406),o(112490)),u=o(553648);const h=r.iv`
    :host {
        display: none;
        flex-direction: row;
        height: 100vh;
        justify-content: center;
        width: 100vw;
        ---spectrum-dialog-confirm-hero-height: ${(0,u.hO)(247)};
        --spectrum-global-dimension-size-1600: 100%;
        --spectrum-dialog-confirm-padding: 0;
    }

    :host([open]) {
        display: flex;
    }

    x-custom-dialog-wrapper {
        inset-inline-start: auto;
        width: ${(0,u.hO)(562)};
        max-width: calc(100vw - ${(0,u.hO)(32)});
    }

    sp-dialog {
        background-color: var(--qa-background-color-secondary);
        max-height: calc(100vh - ${(0,u.hO)(32)});
        width: 100%;
        padding-block-end: ${(0,u.hO)(24)};
        min-width: unset;
    }

    :host(:not([is-small-app-frame])) sp-dialog {
        border-radius: ${(0,u.hO)(16)};
    }

    .dialog-content {
        color: var(--qa-color-gray-900);
        padding: 0 ${(0,u.hO)(24)};
    }

    .hero-image {
        height: unset;
        width: 100%;
        aspect-ratio: 16 / 9;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    @supports not (aspect-ratio: 16 / 9) {
        .hero-image::before {
            float: left;
            padding-block-start: 56.25%;
            content: "";
        }

        .hero-image::after {
            display: block;
            content: "";
            clear: both;
        }
    }

    #hero-image-background {
        height: 100%;
        width: 100%;
        position: absolute;
        pointer-events: none;
    }

    #hero-image-foreground {
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }

    :host([is-small-app-frame]) {
        --spectrum-dialog-confirm-hero-height: ${(0,u.hO)(204)};
    }

    :host([is-small-app-frame]) x-custom-dialog-wrapper {
        max-width: max-content;
    }

    h1 {
        font-weight: 900;
        font-size: ${(0,u.hO)(21)};
        margin: ${(0,u.hO)(32)} ${(0,u.hO)(24)} 0;
        padding-block-end: ${(0,u.hO)(12)};
    }

    :host(:not([is-small-app-frame])) h1 {
        font-size: ${(0,u.hO)(28)};
    }

    @media only screen and (max-height: ${(0,u.hO)(560)}) {
        .hero-image {
            height: 35vh;
        }
        h1 {
            font-size: ${(0,u.hO)(21)};
            margin-block-start: ${(0,u.hO)(24)};
        }
    }

    @media only screen and (max-height: ${(0,u.hO)(460)}) {
        .hero-image {
            display: none;
        }
    }

    .button-group {
        display: flex;
        justify-content: flex-end;
    }

    .description-block {
        display: block;
        margin-block-end: ${(0,u.hO)(10)};
    }

    .description-span {
        font-size: 1.125rem;
    }

    .try-again-block {
        display: block;
        margin-block-end: ${(0,u.hO)(24)};
    }

    .try-again-span,
    sp-link {
        font-size: 0.9rem;
    }

    .accent {
        color: var(--spectrum-global-color-indigo-500);
    }

    .try-again-link {
        --mod-link-text-color-secondary-focus: var(--spectrum-global-color-indigo-500);
        --mod-link-text-color-secondary-default: transparent;
        --mod-link-text-color-secondary-hover: var(--spectrum-global-color-indigo-500);
    }

    :host([hide-try-again]) .description-block {
        margin-block-end: ${(0,u.hO)(24)};
    }
`;var p,m=o(200128);const g=new URL(o(316827),o.b).toString(),v=new URL(o(481303),o.b).toString();let b=p=class extends n.j{constructor(){super(...arguments),this.isOpen=!1,this.isSmallAppFrame=!1,this.primaryCtaLink="",this.shouldHideTryAgain=!1,this.shouldHideExpressButton=!1}async contextsLoaded(){await this._intlStore.load()}static get styles(){return h}_handleCloseClick(){const t=new CustomEvent("qa-downloaded-modal-closed",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)}_handleTryAgainClick(){const t=new CustomEvent("qa-downloaded-modal-try-again-clicked",{bubbles:!0,cancelable:!0,composed:!0});this._quickActionAnalyticsStore.onTryAgainClicked(),this.dispatchEvent(t)}async _handlePrimaryCtaClick(){const t=new CustomEvent("qa-downloaded-modal-primary-cta-clicked",{bubbles:!0,cancelable:!0,composed:!0}),e=this._quickActionAnalyticsStore.downloadModalCTAMetadata.ctaMessage;if(e)this._quickActionAnalyticsStore.onDownloadSuccessModalCTAClicked(e);else{const t=`QuickActions: Missing CTA message for analytics event ${m.B_.selectQuickActionDownloadSuccessModalCTA}`;this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(d.i.warn,t,m.Zy.download)}this.primaryCtaLink&&window.open(this.primaryCtaLink,"_blank"),this.dispatchEvent(t)}_renderTryAgain(){if(this.shouldHideTryAgain)return r.Ld;const t=(0,l.Em)({id:"@hz/quick-actions:shared-ui-downloaded-try-again-description",defaultMessage:"If you do not see the download, <tryagainLink>try again</tryagainLink>."}),e=this._intlStore.formatMessage(t,{tryagainLink:t=>r.dy`<sp-link
                class="try-again-link"
                variant="secondary"
                for="file-input"
                @click=${this._handleTryAgainClick}
                @keydown=${t=>{"Enter"===t.code&&this._handleTryAgainClick()}}
                tabIndex="0"
                focusable
                ><span class="accent">${t}</span></sp-link
            >`});return r.dy`
            <div class="try-again-block">
                <span class="try-again-span">${e}</span>
            </div>
        `}_renderDialog(){const t=(0,l.Em)({id:"@hz/quick-actions:shared-ui-downloaded-modal-dialog-title",defaultMessage:"Your download is complete"}),e=(0,l.Em)({id:"@hz/quick-actions:shared-ui-downloaded-dialog-description",defaultMessage:"Use it to start a new file or explore more of what Adobe Express has to offer."}),o=(0,l.Em)({id:"@hz/quick-actions:shared-ui-downloaded-create-more-button-label",defaultMessage:"Go to Adobe Express"});this._quickActionAnalyticsStore.setDownloadedCTAMessage(this._intlStore.formatMessage(o));const i=this._uiStateStore.isSmallAppFrame?"m":"l";return r.dy`
            <sp-dialog no-divider open size="small" mode="modal">
                <div slot="hero" class="hero-image">
                    <img id="hero-image-background" src=${v} />
                    <img id="hero-image-foreground" src=${g} />
                </div>
                <h1 slot="heading">${this._intlStore.formatMessage(t)}</h1>
                <div class="dialog-content">
                    ${(0,s.g)(!this.shouldHideExpressButton,(()=>r.dy`
                            <div class="description-block">
                                <span class="description-span"
                                    >${this._intlStore.formatMessage(e)}</span
                                >
                            </div>
                        `))}
                    ${this._renderTryAgain()}
                    ${(0,s.g)(!this.shouldHideExpressButton,(()=>r.dy`
                            <div class="button-group">
                                <sp-button
                                    size=${i}
                                    class="modal-primary-cta-button"
                                    variant="cta"
                                    @click=${this._handlePrimaryCtaClick}
                                >
                                    ${this._intlStore.formatMessage(o)}
                                </sp-button>
                            </div>
                        `))}
                </div>
            </sp-dialog>
        `}render(){const t=this._uiStateStore.isSmallAppFrame?{height:"max-content",width:"364px",maxWidth:"calc(100vw - 2rem)",maxHeight:"calc(100vh - 2rem)",margin:"auto"}:{};return this.isOpen&&setTimeout((()=>{this._dialogWrapper.focus()})),r.dy`
            <x-custom-dialog-wrapper
                slot="click-content"
                ?open=${this.isOpen}
                ?dismissable=${!0}
                ?underlay=${!0}
                ?responsive=${!0}
                .styleOverride=${t}
                @keydown=${t=>{"Escape"===t.key&&this._handleCloseClick()}}
                max-width=${"440px"}
                @cancel=${()=>this._handleCloseClick()}
            >
                ${this._renderDialog()}
            </x-custom-dialog-wrapper>
        `}};b.TAG_NAME="qa-downloaded-modal",(0,i.__decorate)([(0,a.Cb)({attribute:"open",type:Boolean,reflect:!0})],b.prototype,"isOpen",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0,attribute:"is-small-app-frame"})],b.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],b.prototype,"primaryCtaLink",void 0),(0,i.__decorate)([(0,a.Cb)({attribute:"hide-try-again",type:Boolean,reflect:!0})],b.prototype,"shouldHideTryAgain",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean})],b.prototype,"shouldHideExpressButton",void 0),(0,i.__decorate)([(0,a.IO)("x-custom-dialog-wrapper sp-dialog")],b.prototype,"_dialogWrapper",void 0),(0,i.__decorate)([(0,c.w)("IntlStore")],b.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("Logger")],b.prototype,"_logger",void 0),(0,i.__decorate)([(0,c.w)("UIStateStore")],b.prototype,"_uiStateStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionAnalyticsStore")],b.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionErrorStore")],b.prototype,"_quickActionErrorStore",void 0),b=p=(0,i.__decorate)([(0,a.Mo)(p.TAG_NAME)],b)},232488:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=(o(419531),o(553648));const n=r.iv`
    .draggable-canvas-toast {
        --system-spectrum-toast-background-color-default: rgb(var(--spectrum-global-color-static-indigo-600-rgb));
        align-items: center;
        inset-block-end: 15%;
        inset-inline-start: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 80%;
        z-index: 10;
    }

    ${(0,s.rR)(r.iv`
        .draggable-canvas-toast {
            width: fit-content;
        }
    `)}

    .draggable-canvas-toast-content {
        display: flex;
    }

    .draggable-canvas-toast-icon-container {
        align-items: center;
        display: flex;
    }

    .draggable-canvas-toast-icon {
        margin-inline-end: ${(0,s.hO)(8)};
    }
`;var c,l=o(859526);let d=c=class extends l.j{_onClose(t){t.stopPropagation()}render(){return r.dy`
            <sp-toast
                open
                timeout=${6e3}
                class="draggable-canvas-toast"
                @close=${this._onClose}
            >
                <section class="draggable-canvas-toast-content">
                    <section class="draggable-canvas-toast-icon-container">
                        <sp-icon-move class="draggable-canvas-toast-icon"></sp-icon-move>
                    </section>
                    <slot></slot>
                </section>
            </sp-toast>
        `}};d.TAG_NAME="qa-draggable-canvas-toast",d.styles=[n],d=c=(0,i.__decorate)([(0,a.Mo)(c.TAG_NAME)],d)},848961:(t,e,o)=>{o.d(e,{C:()=>H});var i=o(944440),r=o(790176),a=o(829682),s=o(791300),n=o(507542),c=o(692484),l=o(789351),d=o(98426),u=o(690986),h=o(660667),p=o(581935),m=o(804963),g=o(543517),v=(o(361878),o(903512)),b=o(697038),f=o(228532),k=o(148868),y=o(553648);const x=v.iv`
    * {
        box-sizing: border-box;
    }

    :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: auto;
        font-weight: 400;
        color: var(--qa-color-gray-800);
    }

    .editor-area {
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    hz-canvas-surface {
        display: block;
        height: 100%;
        position: relative;
        width: 100%;
        --custom-hz-canvas-bottom-spacing: 0;
    }

    .preloaded-canvas {
        position: absolute;
        visibility: hidden;
    }

    .canvas-section {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    hz-toasting-container {
        inset-block-end: 3rem;
    }

    :host([is-small-app-frame]) hz-toasting-container {
        inset-block-end: 4rem;
    }

    qa-ratings-modal[is-button][do-not-show],
    qa-ratings-modal[is-button][submitted] {
        display: none;
    }

    :host(:not([is-small-app-frame])[qa-parent-context="project-x"]) {
        --qa-export-padding: 0 0 ${(0,y.hO)(18)} 0;
    }

    :host([is-small-app-frame]) qa-ratings-modal[is-button] {
        position: absolute;
        inset-inline-end: var(--spectrum-spacing-300);
        inset-block-end: var(--spectrum-spacing-50);
    }

    :host([is-small-app-frame][showing-rate-us="true"][qa-parent-context="project-x"]) {
        --qa-workspace-custom-padding: 0 0 var(--spectrum-spacing-400) 0;
    }
`;var w=o(660383);var _=o(196666),S=(o(576231),o(243553),o(297054),o(859526)),A=o(433318);o(505162),o(326117),o(561528),o(927406);const C=v.iv`
    :host {
        position: absolute;
        display: none;
        flex-direction: row;
        height: 100vh;
        justify-content: center;
        width: 100vw;
        --spectrum-global-dimension-size-1600: 100%;
        --spectrum-dialog-confirm-padding: 0;
    }
    :host([open]) {
        display: flex;
    }
    x-custom-dialog-wrapper {
        inset-inline-start: auto;
        width: ${(0,y.hO)(562)};
        max-width: calc(100vw - ${(0,y.hO)(32)});
        align-items: normal;
    }

    :host([is-small-app-frame]) x-custom-dialog-wrapper {
        align-elements: normal;
        inset-inline: 0;
    }

    sp-dialog {
        background-color: var(--qa-background-color-secondary);
        max-height: calc(100vh - ${(0,y.hO)(32)});
        width: 100%;
        padding-block-end: ${(0,y.hO)(24)};
    }

    :host(:not([is-small-app-frame])) sp-dialog {
        border-radius: ${(0,y.hO)(15)};
    }

    .dialog-content {
        color: var(--qa-color-gray-900);
        padding: 0 ${(0,y.hO)(24)};
    }

    h1 {
        font-weight: 900;
        font-size: ${(0,y.hO)(21)};
        margin: ${(0,y.hO)(32)} ${(0,y.hO)(24)} 0;
        padding-block-end: ${(0,y.hO)(12)};
    }

    :host(:not([is-small-app-frame])) h1 {
        font-size: ${(0,y.hO)(28)};
    }

    @media only screen and (max-height: ${(0,y.hO)(600)}) {
        h1 {
            font-size: ${(0,y.hO)(21)};
        }
    }
    .button-group {
        display: flex;
        justify-content: flex-end;
        padding-block-end: ${(0,y.hO)(4)};
    }
    .description-block {
        display: block;
        margin-block-end: ${(0,y.hO)(29)};
    }
    .description-span {
        font-size: 1.125rem;
    }
    .try-again-block {
        display: block;
        margin-block-start: ${(0,y.hO)(-16)};
        margin-block-end: ${(0,y.hO)(29)};
    }
    .try-again-span,
    sp-link {
        font-size: 0.9rem;
    }
    .accent {
        color: var(--spectrum-global-color-indigo-500);
    }
    .try-again-link {
        --mod-link-text-color-secondary-focus: var(--spectrum-global-color-indigo-500);
        --mod-link-text-color-secondary-default: transparent;
        --mod-link-text-color-secondary-hover: var(--spectrum-global-color-indigo-500);
    }
`;var E;let z=E=class extends S.j{constructor(){super(...arguments),this.isOpen=!1,this.isSmallAppFrame=!1,this.shouldHideTryAgain=!1,this.dialogTitle="Error",this.dialogDescription="Unknown Error. Please try again."}async contextsLoaded(){await this._intlStore.load()}static get styles(){return C}async _handlePrimaryCtaClick(){const t=new CustomEvent("qa-error-modal-primary-cta-clicked",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)}_renderDialog(){const t=(0,A.Em)({id:"@hz/quick-actions:shared-ui-upload-failure-dialog-button-accept",defaultMessage:"OK"}),e=this._uiStateStore.isSmallAppFrame?"m":"l";return v.dy`
            <sp-dialog no-divider open size="small" mode="modal">
                <h1 slot="heading">${this.dialogTitle}</h1>
                <div class="dialog-content">
                    <div class="description-block">
                        <span class="description-span">${this.dialogDescription}</span>
                    </div>
                    <div class="button-group">
                        <sp-button
                            size=${e}
                            class="modal-primary-cta-button"
                            variant="cta"
                            @click=${this._handlePrimaryCtaClick}
                        >
                            ${this._intlStore.formatMessage(t)}
                        </sp-button>
                    </div>
                </div>
            </sp-dialog>
        `}render(){const t=this._uiStateStore.isSmallAppFrame?{transform:"translate(-50%, -50%)",height:"max-content",width:"390px",maxWidth:"calc(100vw - 4rem)",maxHeight:"calc(100vh - 4rem)",insetInlineStart:"50%",insetBlockStart:"50%"}:{};return this.isOpen&&setTimeout((()=>{this._dialogWrapper.focus()})),v.dy`
            <x-custom-dialog-wrapper
                slot="click-content"
                ?open=${this.isOpen}
                ?underlay=${!0}
                ?responsive=${!0}
                .styleOverride=${t}
                @keydown=${t=>{"Escape"===t.key&&this._handlePrimaryCtaClick()}}
                max-width=${"440px"}
            >
                ${this._renderDialog()}
            </x-custom-dialog-wrapper>
        `}};z.TAG_NAME="qa-error-modal",(0,i.__decorate)([(0,b.Cb)({attribute:"open",type:Boolean,reflect:!0})],z.prototype,"isOpen",void 0),(0,i.__decorate)([(0,b.Cb)({type:Boolean,reflect:!0,attribute:"is-small-app-frame"})],z.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,b.Cb)({type:Boolean})],z.prototype,"shouldHideTryAgain",void 0),(0,i.__decorate)([(0,b.Cb)({type:String})],z.prototype,"dialogTitle",void 0),(0,i.__decorate)([(0,b.Cb)({type:String})],z.prototype,"dialogDescription",void 0),(0,i.__decorate)([(0,b.IO)("x-custom-dialog-wrapper sp-dialog")],z.prototype,"_dialogWrapper",void 0),(0,i.__decorate)([(0,c.w)("IntlStore")],z.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("Logger")],z.prototype,"_logger",void 0),(0,i.__decorate)([(0,c.w)("UIStateStore")],z.prototype,"_uiStateStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionAnalyticsStore")],z.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionErrorStore")],z.prototype,"_quickActionErrorStore",void 0),z=E=(0,i.__decorate)([(0,b.Mo)(E.TAG_NAME)],z);var T=o(292963),D=o(497335),$=o(219921),I=o(661088),M=o(112490),q=o(383188),L=o(200128),F=o(604927),O=o(163150),P=o(336964),R=o(797277),B=o(769261),U=o(123584),V=o(602892);class H extends T.L{constructor(){super(),this.mode="new",this.testDocModelLoadState=l.dI.init,this.isErrorModalOpen=!1,this._isRatingsModalOpen=!1,this.isDownloadedModalOpen=!1,this.downloadFailed=!1,this._canvasFirstUpdatedDeferred=new r.B,this.progressLabelIndex=0,this._closeOverlayPromise=null,this.onCanvasSurfaceReadyBound=this.onCanvasSurfaceReady.bind(this),this._onCanvasSurfaceFirstUpdate=()=>{this._webView.canvasIsConnectedToHost?.()===B.P.disconnected&&this._webView.initializeWebView("renderer",{useExitingCanvas:!0}),this._canvasFirstUpdatedDeferred.resolve()},this.resize=()=>{if(!this.canvasSection)return;const t={x:0,y:0,width:this.canvasSection.clientWidth,height:this.canvasSection.clientHeight};this._uiSyncFrontend.submitAction({type:h.qw.updateViewport,payload:{rect:t}}),window.dispatchEvent(new Event("resize"))},this.getDownloadURL=this.getDownloadURLUnbound.bind(this),this._ratingsWereSubmitted=!1,this.getExtraRatingsData=()=>{},this.handleCanvasPlaybackBound=this.handleCanvasPlayback.bind(this),this._canvasResizeObs=new ResizeObserver(this.resize)}static get styles(){return[x]}connectedCallback(){this.addEventListener(p.AR.EVENT_NAME,this._onCanvasSurfaceFirstUpdate),this.addEventListener(p.X6.EVENT_NAME,this.onCanvasSurfaceReadyBound),this._insertCanvasStyleDuringInit(),super.connectedCallback()}disconnectedCallback(){this.removeEventListener(p.X6.EVENT_NAME,this.onCanvasSurfaceReadyBound),this.removeEventListener(p.AR.EVENT_NAME,this._onCanvasSurfaceFirstUpdate),this.canvasSection&&(this._canvasResizeObs.unobserve(this.canvasSection),this._canvasResizeObs.disconnect()),this._quickActionResourceImportStore.disposeReactions(),this._removeCanvasStyleDuringInit(),super.disconnectedCallback()}async onCanvasSurfaceReady(){await Promise.all([this._artboardSequenceStore.load(),this._quickActionArtboardResizer.initialize(),this._quickActionResourceImportStore.load(),this._quickActionSelectionStore.load(),this._quickActionResizeStore?.load()]),this.canvasSection&&this._canvasResizeObs.observe(this.canvasSection)}getCustomExportOptions(){return{}}getVideoResolution(){}async undefinedExportEntityRaceConditionWorkaround(){let t=this._quickActionResourceImportStore.exportEntity;if(!t){const e=(0,g.gx)((()=>Boolean(this._quickActionResourceImportStore.exportEntity))),o=new Promise((t=>{setTimeout((()=>{t(void 0)}),250)}));t=await Promise.race([e,o]).then((()=>this._quickActionResourceImportStore.exportEntity))}return Promise.resolve(t)}async getDownloadURLUnbound(t=!1){const{quickActionConfig:e}=this._quickActionEditorStore,o=await this.undefinedExportEntityRaceConditionWorkaround(),{fileName:i,exportFileSize:r}=this._quickActionExportStore,{exportEntityType:n}=e;if(!o){const t=`Export entity is undefined for entity type: "${n}"`;this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(M.i.warn,t,L.Zy.download),this._logger.error(t),this._openQADownloadErrorModal()}const c=this._quickActionExportStore.exportMimeType;let l="";try{const e={...this.getCustomExportOptions(),mimeType:c,fileName:(0,F.Vi)(i,c)},n=q.q.forceTUSAssetUpload.enabled?"TUS":"RAPI";if((0,a.b5)(c)){const i={...e,backgroundColor:d.i5.fromRGBA(0,0,0,0)};l=(await Promise.all(this._exportUtils.exportBitmap([o],i,t)))[0]}else if(c===s.Oy.mp4){const i={...e,entity:o,composite:n,resolution:this.getVideoResolution()};l=(await Promise.all(this._exportUtils.exportMP4([i],t)))[0]}else if(c===s.Oy.gif){const i=[{...e,entity:o,fileSize:r,composite:n}];l=(await Promise.all(this._exportUtils.exportGIF(i,t)))[0]}}catch(t){const e=`Exporting ${c} failed with error: ${t}.`;this._logger.error(e),this._openQADownloadErrorModal()}return(0,a.b5)(c)||(this.tryAgainDownloadedUrl=l),{downloadURL:l,exportMimeType:c}}selectEntities(t){this._uiSyncFrontend.submitAction({type:u.so.selectItems,payload:t})}_onDocModelLoadStateChange(t=this._documentStore.docModelLoadState){this.testDocModelLoadState=t}downloadRequestCompletedChange(t=this._quickActionExportStore.downloadRequestCompleted){t&&this._shouldUseDownloadedModal&&this._openDownloadedModal(),super.downloadRequestCompletedChange(t)}async shouldResumeExportStateChange(){if(this._quickActionAuthenticationStore.shouldResumeExport){this._quickActionExportStore.registerDownloadCallback(this.getDownloadURL);const{exportClickedEventData:t,exportMimeType:e}=this._sessionPersistenceService.getRestoredData($.tF);this._quickActionExportStore.setExportMimeType(e);const o=new CustomEvent(_.t,{bubbles:!0,cancelable:!0,composed:!0,detail:t});await this._canvasFirstUpdatedDeferred.promise,t.target!==D.ED.editor&&await this.when((()=>this._documentStore.isDocumentLoadedAndWritable)),await this._quickActionExportStore.handleExportClicked(o),this._quickActionExportStore.setExportEnabled(!0),this._quickActionEditorStore.setEditorLoading(!1),this._quickActionAuthenticationStore.isCreatingDocFromLocalDoc=!1,this._quickActionAuthenticationStore.shouldResumeExport=!1,this._clearProgressOverlay()}}async uploadStatusStateChange(t=this._quickActionEditorStore.uploadStatus){if("initialized"===t){this.mode="editor";const{uploadProgressTitle:t}=this._quickActionFileUploadConfig.uploadUIContent;this._quickActionEditorStore.progressLabel=this._intlStore.formatMessage(t)}"loaded"===t&&(this._quickActionExportStore.exportDeferred=new r.B,await this._processUploadedAssetAndMarkEditorReady()),"completed"===t&&((q.q.isVideoQuickAction.enabled||q.q.disableUserStorage.enabled)&&await this._processUploadedAssetAndMarkEditorReady(),this._quickActionExportStore.exportDeferred?.resolve()),("loaded"===t||"skipped"===t||(q.q.disableUserStorage.enabled||q.q.isVideoQuickAction.enabled)&&"completed"===t)&&(this._quickActionExportStore.registerDownloadCallback(this.getDownloadURL),this._quickActionAnalyticsStore.onQuickActionEditorDisplayed())}async contextsLoaded(){await super.contextsLoaded(),this._onDocModelLoadStateChange(),this.reaction((()=>this._documentStore.docModelLoadState),(()=>this._onDocModelLoadStateChange())),this.shouldResumeExportStateChange(),this.reaction((()=>this._quickActionAuthenticationStore.shouldResumeExport),(()=>this.shouldResumeExportStateChange())),await this.initializeQuickAction(),this._shouldLoadGoogleOneTapWidget()&&this._googleOneTap.loadWidget({triggerLocation:"logged-out-editor",client_id:q.q.googleOauthClientForOneTap.value})}async initializeQuickAction(){if(this._quickActionAuthenticationStore.isCreatingDocFromLocalDoc)return this.mode="editor",void this._quickActionEditorStore.setUploadStatus("skipped");this.mode="new",q.q.preloadQuickActionEditor.enabled&&this._quickActionDocumentStore.createQuickActionDocument()}get isNewMode(){return"new"===this.mode}async _processUploadedAssetAndMarkEditorReady(){let t;this._quickActionPerformance.begin(I.U.processUpload),this._quickActionEditorStore.assetProcessingProgressLabels.length&&(this.progressLabelIndex=0,this._quickActionEditorStore.progressLabel=this._intlStore.formatMessage(this._quickActionEditorStore.assetProcessingProgressLabels[this.progressLabelIndex]),t=setInterval((()=>{this.progressLabelIndex=(this.progressLabelIndex+1)%this._quickActionEditorStore.assetProcessingProgressLabels.length,this._quickActionEditorStore.progressLabel=this._intlStore.formatMessage(this._quickActionEditorStore.assetProcessingProgressLabels[this.progressLabelIndex]),this.requestUpdate()}),3e3)),this._quickActionCustomizationStore.assetProcessorPlugins.size?await this._quickActionCustomizationStore.processAsset():await(this.processUploadedAsset?.()),this._quickActionEditorStore.assetProcessingProgressLabels&&t&&clearInterval(t),this._quickActionPerformance.end(I.U.processUpload),this._quickActionEditorStore.setEditorLoading(!1),this._quickActionEditorStore.progressLabel=void 0}_wipeStateAndRestart(){(0,O.tB)(this._uiStateStore.qaParentContext)?dispatchEvent(new Event(V.uB.reloadQuickAction)):location.reload()}_closeOverlay(){this._closeOverlayPromise?.then((t=>{t()}))}closeAuthenticationModal(){super.closeAuthenticationModal(),this._closeOverlay()}_openQAUploadErrorModal(t){const e=this._intlStore.formatMessage({id:"@hz/quick-actions:shared-ui-upload-failure-title",defaultMessage:"Upload failed"}),o=t||this._intlStore.formatMessage({id:"@hz/quick-actions:shared-ui-upload-failure-dialog-description",defaultMessage:"Your file could not be uploaded. Please try again."});this._openErrorModal(e,o)}_openQADownloadErrorModal(){const t=this._intlStore.formatMessage({id:"@hz/quick-actions:shared-ui-download-failure-title",defaultMessage:"Download failed"}),e=this._intlStore.formatMessage({id:"@hz/quick-actions:shared-ui-download-failure-dialog-description",defaultMessage:"An error occurred while trying to download your file. Please try again."});this.downloadFailed=!0,this._openErrorModal(t,e)}_openErrorModal(t,e){this.isErrorModalOpen||(this.isErrorModalOpen=!0,this._qaErrorModal.dialogTitle=t,this._qaErrorModal.dialogDescription=e,this._closeOverlayPromise=m.Overlay.open(this,"modal",this._qaErrorModal,{placement:"none",receivesFocus:"auto"}))}_closeQAErrorModal(){this.isErrorModalOpen=!1,this._closeOverlay()}get _shouldUseDownloadedModal(){return!(q.q.anonymousHandoffToLOEEditor.enabled&&!q.q.isVideoQuickAction.enabled)&&(0,O.D3)(this._uiStateStore.qaParentContext)}_openDownloadedModal(){this.downloadFailed||(this.isDownloadedModalOpen=!0,this._closeOverlayPromise=m.Overlay.open(this,"modal",this._qaDownloadedModal,{placement:"none",receivesFocus:"auto"}),this._quickActionAnalyticsStore.onDownloadSuccessModalViewed())}_closeDownloadedModal(){this.isDownloadedModalOpen=!1,this._closeOverlay()}_handleDownloadedModalTryAgain(){this.tryAgainDownloadedUrl&&n.w.downloadObjectUrlAsFile(this.tryAgainDownloadedUrl,"download")}_handleDownloadedModalMainCta(){this._closeDownloadedModal()}_clearProgressOverlay(){this._quickActionEditorStore.setShowProgressOverlayWithLabel(!1,void 0)}_handleRatingsModalSubmit(){this._ratingsWereSubmitted=!0}_handleRatingsModalOpened(){this._quickActionAnalyticsStore.onClickRateUs(),this._isRatingsModalOpen=!0,this._closeOverlayPromise=m.Overlay.open(this,"modal",this._qaRatingsModal,{placement:"none",receivesFocus:"auto"})}_handleRatingsModalClosed(){this._isRatingsModalOpen=!1,this._closeOverlay()}get editorReadyForRatings(){return!this.isEditorLoading}renderRatingsModal(t){if((0,O.D3)(this._uiStateStore.qaParentContext)){if(!q.q.ratingsInStandalone.enabled)return v.Ld}else if(!q.q.ratingsInProjectX.enabled||O.P2)return v.Ld;if(!this.editorReadyForRatings)return v.Ld;if(this.isNewMode)return v.Ld;const e=t?"rate-us":void 0;return v.dy`
            <qa-ratings-modal
                @qa-ratings-modal-submitted=${this._handleRatingsModalSubmit}
                @qa-ratings-modal-opened=${this._handleRatingsModalOpened}
                @qa-ratings-modal-closed=${this._handleRatingsModalClosed}
                ?is-button=${t}
                slot=${(0,U.o)(e)}
                .getExtraData=${this.getExtraRatingsData}
                ?isModalOpen=${this._isRatingsModalOpen}
                ?is-small-app-frame=${this.isSmallAppFrame}
                ?submitted=${this._ratingsWereSubmitted}
            >
            </qa-ratings-modal>
        `}_renderErrorModal(){return v.dy`<qa-error-modal
            ?is-small-app-frame=${this.isSmallAppFrame}
            ?open=${this.isErrorModalOpen}
            @qa-error-modal-primary-cta-clicked=${this._handleCTAOnErrorModal}
        >
        </qa-error-modal>`}_handleCTAOnErrorModal(){this.downloadFailed&&(this.downloadFailed=!1)}get downloadedModalSettings(){return{hideExpressCTA:!1,hideTryAgain:!1}}_renderDownloadedModal(){if(!this._shouldUseDownloadedModal)return v.Ld;const{hideExpressCTA:t,hideTryAgain:e}=this.downloadedModalSettings;return v.dy`
            <qa-downloaded-modal
                ?open=${this.isDownloadedModalOpen}
                ?hide-try-again=${e||!this.tryAgainDownloadedUrl}
                ?is-small-app-frame=${this.isSmallAppFrame}
                ?shouldHideExpressButton=${t}
                .primaryCtaLink=${this._quickActionAuthenticationStore.projectXHost}
                @qa-downloaded-modal-closed=${this._closeDownloadedModal}
                @qa-downloaded-modal-primary-cta-clicked=${this._handleDownloadedModalMainCta}
                @qa-downloaded-modal-try-again-clicked=${this._handleDownloadedModalTryAgain}
            >
            </qa-downloaded-modal>
        `}renderCanvas(){return v.dy`<hz-canvas-surface .disableDragNDropSupport=${!0} @keydown=${this.handleCanvasPlaybackBound}>
        </hz-canvas-surface>`}handleCanvasPlayback(t){const e=t.target;if("Space"===t.code){let t=!0;if(e.tagName===P.XW){t=Boolean(e.querySelector("x-quick-action-modal"))}else t=e.tagName===P.dd||e.tagName===P.GG;t&&window.dispatchEvent(new Event("canvas-toggle-playback"))}}renderVideoScene(){return v.Ld}renderEditor(t=!1){const e=(0,f.$)({"preloaded-canvas":t,"canvas-section":!0});return v.dy`
            <section class=${e} slot=${"canvas"}>
                <div class="editor-area">
                    ${this.renderDecorations()} ${this.renderCanvas()}
                    ${(0,k.g)(this._appStore.hasFatalError,(()=>v.dy`<hz-error-view></hz-error-view>`))}
                </div>
            </section>
            ${this.renderVideoScene()} ${this.renderInteractions()} ${this.renderRatingsModal(!0)}
            ${this.renderExportTemplate()} ${this.consentMessage}
        `}renderExportTemplate(){const{exportEnabled:t,downloadDisabled:e}=this._quickActionExportStore;return v.dy`<qa-export
            slot=${"export"}
            @export-clicked=${this._handleExportClick}
            ?is-disabled=${!t}
            ?is-download-disabled=${e}
            ?is-small-app-frame=${this.isSmallAppFrame}
            .options=${this.exportOptions}
        ></qa-export>`}handleFileValidated(t){return this._quickActionEditorStore.handleFileValidated(t)}_insertCanvasStyleDuringInit(){this._canvasStyleRuleElement=document.createElement("style"),this._canvasStyleRuleElement.appendChild(document.createTextNode("body > canvas { display: none !important; }")),document.body.appendChild(this._canvasStyleRuleElement)}_removeCanvasStyleDuringInit(){this._canvasStyleRuleElement&&document.body.removeChild(this._canvasStyleRuleElement)}renderUpload(){const{browserType:t,inputFileSrc:e}=this;return(0,w.j)({browserType:t,slot:"upload",handleFileValidated:this.handleFileValidated,inputFileSrc:e})}_handleExportClick(t){return this._quickActionEditorStore.dismissDragToast(),this._quickActionResizeStore?.dismissPixelatedWarningToast(),this._quickActionExportStore.handleExportClicked(t)}_renderWorkspaceContentWithPreload(){const t=this.isNewMode;return t||this._quickActionPerformance.end(R.O.assetUploaded,{noError:!0}),v.dy`${(0,k.g)(t,(()=>this.renderUpload()))} ${this.renderEditor(t)}`}_renderWorkspaceContentWithoutPreload(){const{isNewMode:t}=this;return v.dy`
            ${(0,k.g)(t,(()=>this.renderUpload()),(()=>this.renderEditor()))}
        `}render(){const{description:t,uploadStatus:e}=this._quickActionEditorStore,{formatMessage:o}=this._intlStore,i=q.q.preloadQuickActionEditor.enabled,r=function(t){const{description:e,formatMessage:o}=t;return e?v.dy`
        <div slot=${"description"} class="description-template-div">${o(e)}</div>
    `:v.Ld}({formatMessage:o,description:t});return v.dy`
            <qa-workspace
                upload-status=${e}
                .editorLoading=${this.isEditorLoading}
                ?is-small-app-frame=${this.isSmallAppFrame}
                @qa-file-failed-validation-event=${()=>this._openQAUploadErrorModal()}
            >
                ${r}
                ${(0,k.g)(i,(()=>this._renderWorkspaceContentWithPreload()),(()=>this._renderWorkspaceContentWithoutPreload()))}
            </qa-workspace>
            ${this.renderToastContainer()} ${this.renderAuthenticationModal()} ${this._renderDownloadedModal()}
            ${this.renderRatingsModal(!1)} ${this._renderErrorModal()}
        `}renderDecorations(){return v.Ld}get isEditorLoading(){return this._quickActionEditorStore.editorLoading||this._quickActionExportStore.exportInProgress}_shouldLoadGoogleOneTapWidget(){return O.P2&&this._imsService.isAnonymousUser()&&!this.isSmallAppFrame}}(0,i.__decorate)([(0,b.Cb)({attribute:"browser-type",reflect:!0})],H.prototype,"browserType",void 0),(0,i.__decorate)([(0,b.Cb)({attribute:"mode",reflect:!0})],H.prototype,"mode",void 0),(0,i.__decorate)([(0,b.Cb)({attribute:"test-doc-model-load-state",reflect:!0})],H.prototype,"testDocModelLoadState",void 0),(0,i.__decorate)([(0,b.Cb)({attribute:"export-options"})],H.prototype,"exportOptions",void 0),(0,i.__decorate)([(0,b.Cb)({type:Object})],H.prototype,"consentMessage",void 0),(0,i.__decorate)([(0,b.SB)()],H.prototype,"isErrorModalOpen",void 0),(0,i.__decorate)([(0,b.IO)("qa-error-modal")],H.prototype,"_qaErrorModal",void 0),(0,i.__decorate)([(0,b.SB)()],H.prototype,"_isRatingsModalOpen",void 0),(0,i.__decorate)([(0,b.IO)("qa-ratings-modal:not([is-button])")],H.prototype,"_qaRatingsModal",void 0),(0,i.__decorate)([(0,b.SB)()],H.prototype,"isDownloadedModalOpen",void 0),(0,i.__decorate)([(0,b.IO)("qa-downloaded-modal")],H.prototype,"_qaDownloadedModal",void 0),(0,i.__decorate)([(0,b.IO)(".canvas-section")],H.prototype,"canvasSection",void 0),(0,i.__decorate)([(0,c.w)("QuickActionResourceImportStore")],H.prototype,"_quickActionResourceImportStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionFileUploadConfig")],H.prototype,"_quickActionFileUploadConfig",void 0),(0,i.__decorate)([(0,c.w)("AppStore")],H.prototype,"_appStore",void 0),(0,i.__decorate)([(0,c.w)("ArtboardSequenceStore")],H.prototype,"_artboardSequenceStore",void 0),(0,i.__decorate)([(0,c.w)("DocumentStore")],H.prototype,"_documentStore",void 0),(0,i.__decorate)([(0,c.w)("ExportUtils")],H.prototype,"_exportUtils",void 0),(0,i.__decorate)([(0,c.w)("Logger")],H.prototype,"_logger",void 0),(0,i.__decorate)([(0,c.w)("QuickActionArtboardResizer")],H.prototype,"_quickActionArtboardResizer",void 0),(0,i.__decorate)([(0,c.w)("QuickActionCustomizationStore")],H.prototype,"_quickActionCustomizationStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionDocumentStore")],H.prototype,"_quickActionDocumentStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionErrorStore")],H.prototype,"_quickActionErrorStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionResizeStore",{optional:!0})],H.prototype,"_quickActionResizeStore",void 0),(0,i.__decorate)([(0,c.w)("QALayout",{optional:!0})],H.prototype,"_qaLayout",void 0),(0,i.__decorate)([(0,c.w)("QuickActionSelectionStore")],H.prototype,"_quickActionSelectionStore",void 0),(0,i.__decorate)([(0,c.w)("SessionPersistenceService")],H.prototype,"_sessionPersistenceService",void 0),(0,i.__decorate)([(0,c.w)("UISyncFrontend")],H.prototype,"_uiSyncFrontend",void 0),(0,i.__decorate)([(0,c.w)("CanvasWebView")],H.prototype,"_webView",void 0),(0,i.__decorate)([(0,c.w)("GoogleOneTapClient")],H.prototype,"_googleOneTap",void 0),(0,i.__decorate)([(0,b.SB)()],H.prototype,"downloadFailed",void 0),(0,i.__decorate)([(0,b.SB)()],H.prototype,"tryAgainDownloadedUrl",void 0),(0,i.__decorate)([(0,b.SB)()],H.prototype,"_ratingsWereSubmitted",void 0)},660383:(t,e,o)=>{o.d(e,{j:()=>r});var i=o(903512);o(193566);function r(t){const{browserType:e,slot:o,handleFileValidated:r,inputFileSrc:a}=t;return i.dy`
        <qa-file-upload
            slot=${o}
            ?is-disabled=${!1}
            browser-type=${e||"standard"}
            .inputFileSrc=${a}
            @qa-file-validated=${r}
        >
        </qa-file-upload>
    `}},196666:(t,e,o)=>{o.d(e,{t:()=>y,i:()=>w});var i=o(944440),r=o(903512),a=o(697038),s=o(941190),n=o(859526),c=o(692484),l=o(553648);const d=r.iv`
    :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    :host(:not([is-small-app-frame])) {
        align-items: normal;
        flex-flow: column;
        justify-content: flex-start;
    }

    .button-group-label {
        margin-block-end: ${(0,l.hO)(2)};
    }

    .button-group {
        display: grid;
        grid-auto-flow: column;
        gap: ${(0,l.hO)(8)};
        align-self: center;
        padding: 0 ${(0,l.hO)(12)};
        align-items: center;
    }

    :host(:not([is-small-app-frame])) .button-group {
        align-self: flex-start;
        display: flex;
        padding: 0;
    }

    .button-group sp-button:only-child {
        max-width: fit-content;
    }

    .onboarding-card {
        display: grid;
        grid-template-columns: auto ${(0,l.hO)(15)};
        margin-block-start: ${(0,l.hO)(15)};
        border: ${(0,l.hO)(1)} solid var(--qa-color-gray-500);
        border-radius: ${(0,l.hO)(5)};
        height: ${(0,l.hO)(110)};
    }

    .cross-icon {
        cursor: pointer;
    }

    .cross-icon sp-icon-cross100 {
        width: ${(0,l.hO)(10)};
        color: var(--qa-color-gray-500);
    }

    .onboarding-card-content {
        display: grid;
        grid-template-columns: 50% 50%;
        height: 100%;
        overflow-y: auto;
    }

    .button-group-info-content {
        padding-inline-start: ${(0,l.hO)(15)};
    }

    .feature-list-content {
        display: flex;
        flex-flow: column nowrap;
    }

    .feature-label {
        display: flex;
        align-items: center;
    }

    .feature-label img {
        flex: 0 auto;
        width: ${(0,l.hO)(18)};
        height: ${(0,l.hO)(18)};
        margin-inline-end: ${(0,l.hO)(5)};
    }

    .feature-list {
        flex: 1 auto;
        display: grid;
        flex-flow: row nowrap;
        align-items: center;
        grid-template-columns: ${(0,l.hO)(10)} auto;
    }

    .feature-list .bullet-point {
        width: ${(0,l.hO)(3)};
        height: ${(0,l.hO)(3)};
        border-radius: 50%;
        background: var(--qa-color-gray-500);
        margin-inline-end: ${(0,l.hO)(5)};
        display: inline-block;
        margin-block-start: ${(0,l.hO)(-10)};
    }

    .feature-list p {
        margin-block-start: 0;
        margin-block-end: ${(0,l.hO)(10)};
    }

    .export-link {
        margin-block-end: ${(0,l.hO)(4)};
    }
`;var u=o(123584);o(326117);o(506705);var h=o(47619);const p=t=>{const{buttonGroup:e,isDisabled:o,onExportDropdownMenuItemClick:i}=t,a=e.buttons.flatMap((t=>function(t,e){return r.dy`
        <sp-menu-item
            slot=${h.Qm}
            data-export-target-context=${(0,u.o)(t.context)}
            data-export-option-id=${(0,u.o)(t.id)}
            data-export-target=${(0,u.o)(t.target)}
            data-export-dialog-close=${(0,u.o)(t.shouldCloseTarget)}
            @click=${e}
        >
            ${t.label}
        </sp-menu-item>
    `}(t,i)||[]));return r.dy`
        <qa-button-dropdown-menu
            ?is-disabled=${o}
            is-dynamic
            label=${e.label}
            variant=${e.variant}
            size=${e.size}
            treatment=${e.treatment}
            alignment="left"
            placement="bottom"
        >
            ${a}
        </qa-button-dropdown-menu>
    `};var m,g=o(497335),v=o(1862),b=o(112490),f=o(200128),k=o(661088);const y="export-clicked";function x(t){return function(t){return Object.hasOwnProperty.call(t,"id")}(t)?t.id:t.buttons.map((t=>t.id)).join("-")}let w=m=class extends n.j{constructor(){super(...arguments),this.isDisabled=!1,this.isDownloadDisabled=!1,this.isSmallAppFrame=!1,this._showOnboardingCard=!0}static get styles(){return d}async contextsLoaded(){await this._intlStore.load(),this.options||(this.options=[(0,v.$y)(this._intlStore.formatMessage,"cta"),(0,v.Dn)(this._intlStore.formatMessage,"secondary")])}_triggerExportClickedEvent(t){const{exportOptionId:e,exportTarget:o,buttonLabel:i}=t;o===g.ED.download&&this._quickActionPerformance.begin(k.U.downloadMedia);const r=new CustomEvent(y,{bubbles:!0,cancelable:!0,composed:!0,detail:{id:e,target:o,buttonLabel:i}});this.dispatchEvent(r)}_onExportClick(t){const e=t.currentTarget;if(!e){const t="Export clicked missing target.";return void this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(b.i.warn,t,f.Zy.download)}const o=e.innerText;this._triggerExportClickedEvent({...e.dataset,buttonLabel:o})}_onExportDropdownMenuItemClick(t){const e=t.currentTarget;if(!e){const t="Export clicked missing target.";return void this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(b.i.warn,t,f.Zy.download)}const o=e.innerText;this._triggerExportClickedEvent({...e.dataset,buttonLabel:o})}_renderOpenInAppOnboardingCard(t){return r.dy`<div class="onboarding-card">
            <div class="onboarding-card-content">
                ${(0,s.r)(t,x,(t=>r.dy`<div class="button-group-info-content">
                        <div class="feature-label">
                            <img src=${t.iconUrl} alt=${(0,u.o)(t.label)} />
                            <sp-field-label size="l"> ${t.label} </sp-field-label>
                        </div>
                        <div class="feature-list-content">
                            ${t.featureList?(0,s.r)(t.featureList,(t=>r.dy`<div class="feature-list">
                                          <span class="bullet-point"></span>
                                          <p>${t}</p>
                                      </div>`)):""}
                        </div>
                    </div>`))}
            </div>
            <div
                class="cross-icon"
                @click=${()=>{this._showOnboardingCard=!1}}
            >
                <sp-icon-cross100></sp-icon-cross100>
            </div>
        </div>`}_renderOpenInAppCustomExportLink(t){if(!t?.label)return r.Ld;const e=(0,v.f9)(t?.label);if(!e)return r.Ld;const o=r.dy`<sp-link
            href="#"
            data-export-target=${(0,u.o)(t?.target)}
            data-export-option-id=${(0,u.o)(t?.id)}
            data-export-target-context=${(0,u.o)(t?.context)}
            @click=${this._onExportClick}
            >${e.clickableText}</sp-link
        >`;return r.dy`<p class="export-link spectrum-Body spectrum-Body--sizeS">
            ${e.startingText}${o}${e.endingText}
        </p>`}_renderOpenInAppExportLayout(t){const e=t.find((t=>t.optionType===g.n3.buttonGroup)),o=t.find((t=>t.optionType===g.n3.link)),{buttons:i}=e;i.sort((t=>"accent"===t.variant||"cta"===t.variant?-1:1));const a=i.slice(0,2),n=(0,s.r)(a,x,(t=>this._renderExportButtonTemplate({...t,variant:t.variant||"secondary",treatment:t.treatment||("cta"===t.variant?"fill":"outline")})));return r.dy`<div>
            <div>
                <sp-field-label class="button-group-label" size="l">${e.label}</sp-field-label>
                <div class="button-group">${n}</div>
                ${this._showOnboardingCard?this._renderOpenInAppOnboardingCard(a):""}
            </div>
            ${this._renderOpenInAppCustomExportLink(o)}
        </div>`}_shouldUseOpenInAppLayout(){const t=this.options?.find((t=>t.optionType===g.n3.buttonGroup));return t?.buttons?.some((t=>t?.featureList))}_renderExportButtonTemplate(t){const{isDisabled:e,isDownloadDisabled:o,_onExportClick:i}=this;return(t=>{const{button:e,isDisabled:o,onExportClick:i}=t;return r.dy`
        <sp-button
            ?disabled=${o}
            data-export-target-context=${(0,u.o)(e.context)}
            data-export-option-id=${(0,u.o)(e.id)}
            data-export-target=${(0,u.o)(e.target)}
            data-export-dialog-close=${(0,u.o)(e.shouldCloseTarget)}
            @click=${i}
            treatment=${e.treatment||"outline"}
            variant=${e.variant}
            size=${e.size||"m"}
        >
            ${e.label}
        </sp-button>
    `})({button:t,isDisabled:e||o&&t.target===g.ED.download,onExportClick:i})}render(){const{isDisabled:t,_onExportDropdownMenuItemClick:e,options:o}=this,i=this._uiStateStore.qaParentContext,{formatMessage:a}=this._intlStore;let n;try{n=(0,v.UW)(o,a,i)}catch(t){return this._logger.error("[QAExport] Failed to transform export options",t),r.Ld}if(this._shouldUseOpenInAppLayout())return this._renderOpenInAppExportLayout(n);const c=(0,s.r)(n,x,(o=>o.optionType===g.n3.buttonGroup?p({buttonGroup:o,isDisabled:t,onExportDropdownMenuItemClick:e}):this._renderExportButtonTemplate(o)));return r.dy`<div class="button-group">
            ${c}
            <slot name="uploading-media"></slot>
        </div>`}};w.TAG_NAME="qa-export",(0,i.__decorate)([(0,a.Cb)({attribute:"options",type:Array})],w.prototype,"options",void 0),(0,i.__decorate)([(0,a.Cb)({attribute:"is-disabled",type:Boolean})],w.prototype,"isDisabled",void 0),(0,i.__decorate)([(0,a.Cb)({attribute:"is-download-disabled",type:Boolean})],w.prototype,"isDownloadDisabled",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"is-small-app-frame",reflect:!0})],w.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,a.SB)()],w.prototype,"_showOnboardingCard",void 0),(0,i.__decorate)([(0,c.w)("QuickActionErrorStore")],w.prototype,"_quickActionErrorStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionPerformance")],w.prototype,"_quickActionPerformance",void 0),(0,i.__decorate)([(0,c.w)("IntlStore")],w.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("Logger")],w.prototype,"_logger",void 0),(0,i.__decorate)([(0,c.w)("UIStateStore")],w.prototype,"_uiStateStore",void 0),w=m=(0,i.__decorate)([(0,a.Mo)(m.TAG_NAME)],w)},1862:(t,e,o)=>{o.d(e,{$y:()=>c,Dn:()=>l,UW:()=>n,f9:()=>d});var i=o(163150),r=o(497335);function a(t,e){if(t.label&&t.id)return t;let o;switch(t.target){case r.ED.download:return o=t,o.id=t.id||c(e,"cta").id,o.label=t.label||c(e,"cta").label,o;case r.ED.editor:return o=t,o.id=t.id||l(e,t.variant).id,o.label=t.label||l(e,t.variant).label,o;case r.ED.host:default:throw new Error("Unable to set button label or ID for `Host` export target.")}}function s(t,e,o){if(t.optionType===r.n3.buttonGroup){if(function(t){return void 0!==t.buttons}(t))return{...t,buttons:t.buttons.flatMap((t=>a(t,e)||[])),variant:t.variant||"cta"};throw new Error("Invalid usage of export button group option type. Unable to render button.")}if(t.optionType===r.n3.button){if(function(t){return void 0!==t.target}(t)){let r=t.label;if("customizeExportOption"===t.id){const a=e({id:"@hz/quick-actions:shared-ui-default-open-in-express-label",defaultMessage:"Open in Adobe Express"});t.label===a&&o===i.Jo.PROJECT_X&&(r=e({id:"@hz/quick-actions:ui-project-x-default-customize-button-label",defaultMessage:"Open in editor"}))}const s=a(t,e);if(!s)return;return{...s,label:r||s.label,variant:t.variant||"cta"}}throw new Error("Invalid usage of export button option type. Unable to render button.")}if(t.optionType===r.n3.link){if(function(t){return t.optionType===r.n3.link}(t))return t;throw new Error("Invalid usage of custom export link type. Unable to render custom export link.")}}function n(t,e,o){return t.flatMap((t=>s(t,e,o)||[]))}function c(t,e,o){return{id:"downloadExportOption",label:t({id:"@hz/quick-actions:shared-ui-default-download-button-label",defaultMessage:"Download"}),optionType:r.n3.button,target:r.ED.download,variant:e,treatment:o||"fill"}}function l(t,e,o){return{id:"customizeExportOption",label:t({id:"@hz/quick-actions:shared-ui-default-open-in-express-label",defaultMessage:"Open in Adobe Express"}),optionType:r.n3.button,target:r.ED.editor,variant:e||"cta",treatment:o||"outline"}}function d(t){const e=t.match(/(?<startingText>[^<]*)<(?<clickableText>[^>]+)>(?<endingText>.*)/);if(!e?.groups)return;const{startingText:o="",clickableText:i,endingText:r=""}=e.groups;return{startingText:o,clickableText:i,endingText:r}}},283398:(t,e,o)=>{var i=o(944440),r=o(859526),a=o(692484),s=o(903512),n=o(697038),c=(o(482510),o(234648),o(553648));const l=s.iv`
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column wrap;
        margin: ${(0,c.hO)(12)} 0;
    }

    sp-picker {
        width: ${(0,c.hO)(280)};
    }
`;var d=o(433318);const u={"application/msword":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-doc-label",defaultMessage:"Microsoft Word 97-2003 (doc)"}),"application/vnd.openxmlformats-officedocument.wordprocessingml.document":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-docx-label",defaultMessage:"Microsoft Word (docx)"}),"image/jpeg":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-jpg-label",defaultMessage:"JPG"}),"image/png":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-png-label",defaultMessage:"PNG"}),"application/vnd.openxmlformats-officedocument.presentationml.presentation":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-pptx-label",defaultMessage:"Microsoft PowerPoint (pptx)"}),"text/rtf":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-rtf-label",defaultMessage:"Rich Text Format (rtf)"}),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":(0,d.Em)({id:"@hz/quick-actions:shared-ui-file-type-picker-xlsx-label",defaultMessage:"Microsoft Excel (xlsx)"})},h=Object.keys(u);var p;let m=p=class extends r.j{constructor(){super(...arguments),this.options=h}get initialSelectedOption(){return this.options[0]}_onSelectionChange(t){const e=t.currentTarget;e&&(this.selectedOption=e.value,this.dispatchEvent(new CustomEvent("qa-file-type-option-selected",{bubbles:!0,cancelable:!0,composed:!0,detail:{selectedFileType:this.selectedOption}})))}render(){const{initialSelectedOption:t,label:e,selectedOption:o,_onSelectionChange:i}=this,r=this.options.map((t=>s.dy`<sp-menu-item value=${t}>
                ${this._intlStore.formatMessage(u[t])}</sp-menu-item
            >`));return s.dy`
            <sp-field-label for="file-type-picker">${this._intlStore.formatMessage(e)}</sp-field-label>
            <sp-picker
                id="file-type-picker"
                value=${o||t}
                @change=${i}
            >
                ${r}
            </sp-picker>
        `}};m.TAG_NAME="qa-file-type-picker",m.styles=[l],(0,i.__decorate)([(0,n.Cb)({type:Object})],m.prototype,"label",void 0),(0,i.__decorate)([(0,n.Cb)({type:Array})],m.prototype,"options",void 0),(0,i.__decorate)([(0,n.SB)()],m.prototype,"selectedOption",void 0),(0,i.__decorate)([(0,a.w)("IntlStore")],m.prototype,"_intlStore",void 0),m=p=(0,i.__decorate)([(0,n.Mo)(p.TAG_NAME)],m)},15803:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=o(433318),n=o(859526),c=o(692484);o(927406);const l=r.iv`
    :host {
        display: block;
        font-size: var(--spectrum-global-dimension-font-size-50);
        color: var(--qa-color-gray-700);
    }

    :host span {
        display: inline-block;
    }
`;var d;let u=d=class extends n.j{static get styles(){return l}async contextsLoaded(){await this._intlStore.load()}render(){const{formatMessage:t}=this._intlStore,e=(0,s.Em)({id:"@hz/quick-actions:shared-ui-default-legal-message",defaultMessage:"By uploading your image or video, you are agreeing to the Adobe <span><aterms>Terms of Use</aterms> and <aprivacy>Privacy Policy</aprivacy>.</span>"}),o=t({id:"@hz/quick-actions:shared-ui-privacy-policy-go-url",defaultMessage:"https://adobe.com/go/privacy_policy_en"}),i=t({id:"@hz/quick-actions:shared-ui-terms-of-use-go-url",defaultMessage:"https://adobe.com/go/terms_en"});return r.dy`
            ${t(e,{span:t=>r.dy`<span>${t}</span>`,aterms:t=>r.dy`<sp-link href=${i} target="_blank" quiet>${t}</sp-link>`,aprivacy:t=>r.dy`<sp-link href=${o} target="_blank" quiet>${t}</sp-link>`})}
        `}};u.TAG_NAME="qa-legal-message",(0,i.__decorate)([(0,c.w)("IntlStore")],u.prototype,"_intlStore",void 0),u=d=(0,i.__decorate)([(0,a.Mo)(d.TAG_NAME)],u)},275862:(t,e,o)=>{var i=o(944440),r=(o(391101),o(321730),o(433318)),a=o(903512),s=o(697038),n=o(859526),c=o(692484);const l=a.iv`
    sp-switch {
        inline-size: fit-content;
    }
`;var d;let u=d=class extends n.j{constructor(){super(...arguments),this.selectedElements=[],this.sceneMode=0}static get styles(){return l}async contextsLoaded(){await this._videoPropertiesStore.load(),await this._scenelineQuickActionStore.load(),this._onSceneElementChange(),this.reaction((()=>this._scenelineQuickActionStore.selectedElements),this._onSceneElementChange.bind(this)),this._quickActionAnalyticsStore.setVideoMuted(this._videoPropertiesStore.muted)}_onSceneElementChange(t=this._scenelineQuickActionStore.selectedElements){this.selectedElements=t}_handleMuteChange(){const t=0===this.sceneMode?this._videoPropertiesStore.muted:this._scenelineQuickActionStore.mutedAllVideos;0===this.sceneMode?(this._quickActionResizeStore.selectEntity(this.selectedElements[0].id),this._videoPropertiesStore.setMuted(!t)):this._scenelineQuickActionStore.muteAllVideos(!t),this._quickActionAnalyticsStore.setVideoMuted(!t),this._quickActionAnalyticsStore.onToggleVideoMuted(!t)}render(){const t=(0,r.Em)({id:"@hz/quick-actions:shared-ui-qa-mute",defaultMessage:"Mute"}),e=this._intlStore.formatMessage(t),o=0===this.sceneMode?this._videoPropertiesStore.muted:this._scenelineQuickActionStore.mutedAllVideos;return a.dy`
            <sp-field-group>
                <sp-switch @change=${this._handleMuteChange} ?checked=${o}> ${e} </sp-switch>
            </sp-field-group>
        `}};u.TAG_NAME="qa-mute",(0,i.__decorate)([(0,c.w)("IntlStore")],u.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("VideoPropertiesStore")],u.prototype,"_videoPropertiesStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionResizeStore")],u.prototype,"_quickActionResizeStore",void 0),(0,i.__decorate)([(0,c.w)("ScenelineQuickActionStore")],u.prototype,"_scenelineQuickActionStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionAnalyticsStore")],u.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,s.SB)()],u.prototype,"selectedElements",void 0),(0,i.__decorate)([(0,s.Cb)()],u.prototype,"sceneMode",void 0),u=d=(0,i.__decorate)([(0,s.Mo)(d.TAG_NAME)],u)},153706:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=o(859526),n=(o(914078),o(610250),o(553648));const c=r.iv`
    :host {
        /* There are many components which already have a z-index defined.
        This allows us to ensure that the underlay and it's content container
        are rendered in front of these components. */
        z-index: 3;
    }

    sp-progress-circle {
        display: block;
        margin-inline: auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        position: fixed;
        inset-inline-start: 50%;
        inset-block-start: 50%;
        transform: translate(-50%, -50%);
        /* The content container (underlay's sibling) needs to have a z-index
        value higher than the underlay element */
        z-index: 4;
    }

    .label {
        color: var(--qa-progress-circle-label-color);
        font-size: ${(0,n.hO)(16)};
        font-weight: bold;
        margin: var(--qa-progress-circle-label-margin);
    }
`;var l;let d=l=class extends s.j{static get styles(){return c}render(){const{progressLabel:t,progressSize:e}=this;return r.dy`
            <sp-underlay open></sp-underlay>
            <div class="content">
                <sp-progress-circle
                    over-background
                    indeterminate
                    size=${e}
                    label=${t}
                    aria-label=${t}
                ></sp-progress-circle>
                <span class="label">${t}</span>
            </div>
        `}};d.TAG_NAME="qa-progress-overlay",(0,i.__decorate)([(0,a.Cb)({type:String,attribute:"progress-label"})],d.prototype,"progressLabel",void 0),(0,i.__decorate)([(0,a.Cb)({attribute:"progress-size"})],d.prototype,"progressSize",void 0),d=l=(0,i.__decorate)([(0,a.Mo)(l.TAG_NAME)],d)},953768:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=o(859526);o(914078);const n=r.iv`
    :host {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: rgba(var(--spectrum-global-color-gray-100-rgb), var(--spectrum-global-color-opacity-80));
    }

    span {
        color: var(--qa-progress-circle-label-color);
        /* Use relative positioning so that the label has a height only if a QA adds content.
        This will ensure that the loading icon is centered with or without the label. */
        position: relative;
    }

    .label {
        font-size: var(--qa-progress-circle-label-font-size);
        margin: var(--qa-progress-circle-label-margin);
    }
`;var c;let l=c=class extends s.j{constructor(){super(...arguments),this.progressPercent=void 0}static get styles(){return n}render(){const{progressLabel:t,progressPercent:e}=this;return r.dy`<sp-progress-circle
                ?indeterminate=${void 0===e}
                .progress=${e}
                size="l"
                label=${t}
                aria-label=${t}
            ></sp-progress-circle>
            <span class="label">${t}</span> `}};l.TAG_NAME="qa-progress",(0,i.__decorate)([(0,a.Cb)({type:String,attribute:"progress-label"})],l.prototype,"progressLabel",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],l.prototype,"progressPercent",void 0),l=c=(0,i.__decorate)([(0,a.Mo)(c.TAG_NAME)],l)},243553:(t,e,o)=>{var i=o(944440),r=o(903512),a=o(697038),s=o(123584),n=o(859526),c=o(692484),l=o(433318),d=o(400779),u=o(857534);class h extends d.A{render(){return(0,u._)(r.dy),(({width:t=24,height:e=24,hidden:o=!1,title:i="Star"}={})=>u.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M18.477.593 22.8 12.029l12.212.578a.51.51 0 0 1 .3.908l-9.54 7.646 3.224 11.793a.51.51 0 0 1-.772.561L18 26.805l-10.22 6.71a.51.51 0 0 1-.772-.561l3.224-11.793-9.54-7.646a.51.51 0 0 1 .3-.908l12.208-.578L17.523.593a.51.51 0 0 1 .954 0Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}(0,o(589415).N)("sp-icon-star",h);class p extends d.A{static get styles(){return[d.A.styles,r.iv`
        :host,
        ::slotted(*),
        img,
        svg {
          width: unset;
        }
      `]}render(){return(({hidden:t=!1,title:e="Star",size:o="s"}={})=>"s"===o?r.dy` <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${t?"true":"false"}"
        role="img"
        fill="currentColor"
        aria-label="${e}"
        viewBox="0 0 18 18"
      >
        <path
          d="M13.24 17.99c-.345 0-.691-.085-1.01-.26L9 15.958 5.77 17.73c-.712.39-1.563.34-2.225-.128a2.191 2.191 0 0 1-.892-2.163l.626-3.812L.632 8.934a2.21 2.21 0 0 1-.515-2.26A2.14 2.14 0 0 1 1.826 5.22l3.622-.55 1.628-3.443C7.432.476 8.17.008 9 .008s1.568.467 1.924 1.218l1.629 3.444 3.621.55a2.14 2.14 0 0 1 1.71 1.454 2.21 2.21 0 0 1-.515 2.26l-2.648 2.693.626 3.812a2.191 2.191 0 0 1-.892 2.163 2.1 2.1 0 0 1-1.214.389ZM9 13.957c.331 0 .662.083.964.249l3.228 1.771c.023.015.054.029.108-.007.036-.025.094-.087.075-.206l-.626-3.812c-.104-.627.1-1.273.547-1.727l2.646-2.692c.08-.082.058-.184.044-.224-.033-.1-.093-.11-.112-.112l-3.622-.55a1.99 1.99 0 0 1-1.508-1.123L9.115 2.082c-.02-.045-.21-.045-.23 0L7.256 5.525a1.992 1.992 0 0 1-1.509 1.121l-3.62.55c-.02.003-.08.013-.113.112a.216.216 0 0 0 .045.225l2.645 2.691c.447.454.65 1.1.547 1.727l-.626 3.812c-.02.12.04.181.075.206.054.037.083.023.109.007l3.228-1.772c.302-.165.632-.248.963-.248Z"
        />
      </svg>`:r.dy` <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${t?"true":"false"}"
        role="img"
        fill="currentColor"
        aria-label="${e}"
        viewBox="0 0 22 22"
      >
        <path
          d="M16.08 21.597c-.444 0-.889-.107-1.3-.324L11 19.286l-3.78 1.987a2.768 2.768 0 0 1-2.933-.21 2.77 2.77 0 0 1-1.107-2.725l.721-4.21-3.058-2.98a2.767 2.767 0 0 1-.704-2.854 2.768 2.768 0 0 1 2.248-1.896l4.226-.614 1.89-3.829C8.975.997 9.932.402 11 .402s2.025.595 2.497 1.553l1.89 3.83 4.226.613a2.768 2.768 0 0 1 2.248 1.896c.33 1.015.06 2.11-.704 2.854l-3.057 2.98.72 4.21a2.77 2.77 0 0 1-1.107 2.725 2.776 2.776 0 0 1-1.634.534ZM11 17.287c.318 0 .637.076.928.228l3.782 1.989a.765.765 0 0 0 .826-.06.766.766 0 0 0 .313-.768l-.722-4.21a1.994 1.994 0 0 1 .577-1.77l3.056-2.98a.767.767 0 0 0 .199-.804.767.767 0 0 0-.634-.535L15.1 7.763a1.997 1.997 0 0 1-1.505-1.091l-1.89-3.832c-.196-.396-.559-.438-.705-.438s-.509.042-.704.438l-1.89 3.829A2 2 0 0 1 6.9 7.764l-4.225.613a.767.767 0 0 0-.634.535.767.767 0 0 0 .2.805l3.057 2.98c.472.458.687 1.12.575 1.77l-.722 4.209a.766.766 0 0 0 .313.768c.118.087.44.264.826.06l3.78-1.987a2.01 2.01 0 0 1 .932-.23Z"
        />
      </svg>`)({hidden:!this.label,title:this.label,size:this.size})}}customElements.define("x-icon-star",p);o(505162),o(326117),o(561528),o(927406),o(195729),o(810115),o(64617);var m=o(553648);const g=30;let v=(0,r.$m)("100dvh");CSS.supports("min-height: 100dvh")||(v=(0,r.$m)("100vh"));const b=r.iv`
    :host {
        --spectrum-slider-track-color: transparent;
        --spectrum-slider-track-fill-color: transparent;
        --x-custom-dialog-wrapper-content-max-width: ${(0,m.hO)(900)};
        --mod-slider-ramp-track-height: ${(0,m.hO)(32)};
        z-index: 1;
        --spectrum-global-dimension-static-size-200: ${(0,m.hO)(12)};
    }

    :host(:not([is-small-app-frame])[is-darkmode]) {
        --spectrum-actionbutton-m-quiet-textonly-text-color-down: var(
            --spectrum-button-m-secondary-fill-texticon-text-color,
            var(--spectrum-global-color-gray-800)
        );
        --spectrum-actionbutton-m-quiet-textonly-background-color-hover: var(
            --spectrum-button-m-secondary-fill-texticon-background-color-hover,
            var(--spectrum-global-color-gray-300)
        );
        --spectrum-actionbutton-m-quiet-textonly-text-color-hover: var(
            --spectrum-actionbutton-m-quiet-textonly-text-color-down
        );
    }

    :host([submitted]) {
        --x-custom-dialog-wrapper-content-max-width: ${(0,m.hO)(550)};
    }

    :host([submitted]) h2 {
        font-weight: unset;
        max-width: ${(0,m.hO)(300)};
        margin-block-start: ${(0,m.hO)(6)};
    }

    :host([submitted]) .dialog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    x-custom-dialog-wrapper {
        inset-inline-start: auto;
        width: max-content;
        display: flex;
        flex-direction: row;
        height: ${v};
        justify-content: center;
        width: 100vw;
        position: fixed;
        z-index: 10;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-inline-start: 50%;
        transform: translateX(-50%);
    }

    .ratings-description-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .ratings-description {
        max-width: ${(0,m.hO)(750)};
    }

    .ratings-slider-container {
        margin-block-start: ${(0,m.hO)(100)};
        width: calc(100% - ${(0,m.hO)(10)});
        height: ${(0,m.hO)(150)};
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .backslider-full-width-container,
    .stars-and-bars {
        display: flex;
        width: calc(90% - ${(0,m.hO)(60)});
        justify-content: space-between;
        position: relative;
    }

    .stars-and-bars {
        height: ${(0,m.hO)(100)};
    }

    .stars-and-bar {
        position: relative;
    }

    .slider-bar {
        height: ${(0,m.hO)(20)};
        inset-block-start: ${(0,m.hO)(22)};
        border-inline-start: ${(0,m.hO)(1)} solid var(--qa-color-gray-400);
        border-inline-end: ${(0,m.hO)(1)} solid var(--qa-color-gray-400);
        position: relative;
    }

    .backslider-full-width-container {
        position: absolute;
        width: calc(100% - ${(0,m.hO)(90)});
        background-color: var(--spectrum-global-color-indigo-500);
        border-radius: ${(0,m.hO)(15)};
        height: ${(0,m.hO)(g)};
    }

    .backslider-container {
        width: calc(100% - ${(0,m.hO)(g)});
        inset-inline-start: ${(0,m.hO)(g)};
        position: absolute;
        display: flex;
        inset-inline-start: 0;
    }

    .backslider-right {
        height: ${(0,m.hO)(g)};
        background-color: var(--spectrum-indigo-500);
        position: absolute;
        border-radius: ${(0,m.hO)(15)};
    }

    :host([is-darkmode]) {
        .backslider-right {
            background-color: var(--spectrum-indigo-200);
        }
    }

    .slider-stars {
        position: absolute;
        inset-block-start: ${(0,m.hO)(60)};
        width: ${(0,m.hO)(200)};
        inset-inline-start: 50%;
        transform: translateX(-50%);
    }

    .slider-stars {
        display: none;
    }
    .slider-stars.selected {
        display: block;
    }

    sp-icon-star {
        margin: 0 ${(0,m.hO)(3)};
        color: var(--spectrum-gray-300);
    }

    .slider-stars.selected sp-icon-star {
        color: var(--spectrum-global-color-indigo-500);
    }

    .slider-image-and-text {
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        inset-block-start: ${(0,m.hO)(-48)};
        position: absolute;
        z-index: 2;
        pointer-events: none;
    }

    .emoticon-icon {
        width: ${(0,m.hO)(60)};
        height: ${(0,m.hO)(60)};
        border-radius: ${(0,m.hO)(30)};
        inset-block-start: ${(0,m.hO)(2)};
        position: relative;
        color: var(--spectrum-global-color-indigo-500);
    }

    .emoticon-icon svg {
        width: ${(0,m.hO)(38)};
        height: ${(0,m.hO)(38)};
        inset-block-start: ${(0,m.hO)(11)};
        position: relative;
    }

    .slider-image-text {
        background-color: var(--spectrum-global-color-gray-50);
        border-radius: ${(0,m.hO)(8)};
        min-height: ${(0,m.hO)(40)};
        min-width: ${(0,m.hO)(96)};
        padding: ${(0,m.hO)(8)} ${(0,m.hO)(8)};
        position: absolute;
        inset-block-end: ${(0,m.hO)(50)};
        margin-block-end: ${(0,m.hO)(20)};
        pointer-events: none;
        color: var(--spectrum-global-color-gray-700);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider-image-text.hidden {
        visibility: hidden;
    }

    .slider-image {
        width: ${(0,m.hO)(40)};
        height: ${(0,m.hO)(40)};
        inset-block-start: ${(0,m.hO)(10)};
        position: relative;
        border: ${(0,m.hO)(2)} solid transparent;
        pointer-events: none;
        background-color: transparent;
    }

    sp-slider {
        width: 90%;
        inset-inline-start: ${(0,m.hO)(-15)};
        --spectrum-slider-handle-height: ${(0,m.hO)(60)};
        --spectrum-slider-handle-width: ${(0,m.hO)(60)};
        --mod-slider-ramp-track-height: ${(0,m.hO)(30)};
        --mod-slider-track-corner-radius: ${(0,m.hO)(15)};
    }

    sp-dialog {
        background-color: var(--qa-background-color-secondary);
        height: 100%;
        width: 100%;
        min-width: ${(0,m.hO)(225)};
        max-height: ${v};
    }

    #dialog-content {
        max-width: ${(0,m.hO)(900)};
    }

    :host(:not([is-small-app-frame])) sp-dialog {
        border-radius: ${(0,m.hO)(15)};
        height: auto;
    }

    :host(:not([is-small-app-frame])) .slider-stars {
        display: block;
    }

    .open-ratings-button-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-block-end: ${(0,m.hO)(14)};
        border-block-start: var(--qa-ratings-modal-custom-button-section-top-border, none);
    }

    .open-ratings-button-section label {
        margin-inline-end: ${(0,m.hO)(16)};
    }

    #open-ratings-button {
        --system-spectrum-button-secondary-outline-border-color-default: transparent;
        flex-shrink: 0;
    }

    :host([is-small-app-frame]) #open-ratings-button {
        /* no spectum vars for these 2 */
        --system-spectrum-button-secondary-background-color-default: rgb(41, 41, 41);
        --background-neutral-hover: rgb(19, 19, 19);

        --system-spectrum-button-secondary-background-color-hover: var(--background-neutral-hover);
        --system-spectrum-button-secondary-background-color-down: var(--background-neutral-hover);
        --system-spectrum-button-secondary-background-color-focus: var(--background-neutral-hover);
        --system-spectrum-button-secondary-content-color-default: var(--spectrum-white);
        --system-spectrum-button-secondary-content-color-hover: var(--spectrum-white);
        --system-spectrum-button-secondary-content-color-down: var(--spectrum-white);
        --system-spectrum-button-secondary-content-color-focus: var(--spectrum-white);
        --spectrum-button-border-radius: var(--spectrum-spacing-300);
        --spectrum-button-height: var(--spectrum-spacing-500);
    }

    x-icon-star {
        --spectrum-icon-size-s: var(--spectrum-spacing-300);
    }

    :host([is-small-app-frame]) .open-ratings-button-section {
        justify-content: center;
        background-color: transparent;
        min-height: ${(0,m.hO)(56)};
        margin-block-end: 0;
    }

    :host([is-small-app-frame]) .open-ratings-button-section label {
        display: none;
    }

    :host([is-small-app-frame]) .stars-and-bars.no-selection .slider-stars.show-on-narrow-when-not-selected {
        display: block;
    }

    :host([is-small-app-frame]) .backslider-full-width-container {
        inset-block-start: ${(0,m.hO)(4)};
    }

    :host([is-small-app-frame]) .dialog-content {
        display: flex;
        flex-direction: column;
    }

    :host([is-small-app-frame]) .ratings-description {
        margin-block-start: ${(0,m.hO)(36)};
    }

    ${(0,m.sN)(r.iv`
        sp-icon-star {
            margin: 0 0;
        }
    `)}

    .dialog-content {
        color: var(--qa-color-gray-900);
        margin: auto;
        text-align: center;
        max-height: calc(${v} - ${(0,m.hO)(160)});
        max-width: ${(0,m.hO)(750)};
        height: 100%;
        user-select: none;
        overflow: hidden auto;
        padding: 0 ${(0,m.hO)(16)};
    }

    @media (hover: none) {
        .dialog-content {
            overflow: hidden auto;
        }
    }

    .hero-image {
        margin-block: ${(0,m.hO)(14)} ${(0,m.hO)(16)};
        width: 80%;
    }

    h1 {
        font-weight: 900;
        margin-block-end: 0;
        font-size: ${(0,m.hO)(24)};
    }

    :host(:not([is-small-app-frame])) h1 {
        font-size: ${(0,m.hO)(32)};
        margin-block-end: ${(0,m.hO)(23)};
    }

    :host(:not([is-small-app-frame])[submitted]) h1 {
        margin-block-end: 0;
    }

    #comments-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    #comments-textarea {
        font-family: inherit;
        width: calc(100% - ${(0,m.hO)(8)});
        resize: vertical;
    }

    #email-container {
        display: flex;
        flex-direction: column;
        padding: 0 ${(0,m.hO)(4)};
    }

    .email-textfield-and-error-field-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    .invalid-email-message {
        padding-block-start: ${(0,m.hO)(8)};
        color: var(--spectrum-alias-input-border-color-invalid-default);
        height: ${(0,m.hO)(20)};
    }

    #comments-email-input-field {
        width: 100%;
    }

    #email-container sp-field-label {
        margin-inline-end: 0;
    }

    :host(:not([is-small-app-frame])) #email-container {
        flex-direction: row;
        margin-block-start: ${(0,m.hO)(12)};
    }

    :host(:not([is-small-app-frame])) #email-container sp-field-label {
        margin-inline-end: ${(0,m.hO)(12)};
        padding-block-start: ${(0,m.hO)(6)};
        flex-shrink: 0;
        white-space: nowrap;
    }

    :host(:not([is-small-app-frame])) .dialog-content {
        padding-block-start: 0;
    }

    #submit-button {
        margin: ${(0,m.hO)(24)} auto ${(0,m.hO)(4)};
    }

    .csat-modal-thankyou-icon {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    x-pill-button[size="m"] {
        --mod-actionbutton-font-size: var(--spectrum-button-font-size, --spectrum-font-size-100);
        --mod-actionbutton-focus-indicator-border-radius: ${(0,m.hO)(25)};
    }
`;var f=o(148868),k=o(446422);const y=async t=>new Promise((e=>{const o=k.R.defaultInstance.context.mcidGuid;if(o){let i=setTimeout((()=>{t.warn("QARatingsModal getSegments failed to resolve in time"),i=void 0,e([])}),15e3);x.setAudienceManagerSegments=o=>{const r=[];o&&o.segments&&o.segments.includes(w)&&r.push(w),_.forEach((t=>{o&&o.segments&&o.segments.includes(t[0])&&r.push(t[0])})),i?(clearTimeout(i),e(r)):t.warn("QARatingsModal getSegments tried to resolve after timeout expired")},(t=>{const e=document.querySelector("head"),o=document.createElement("script");o.src=t,e.append(o)})(`https://adobe.demdex.net/event?d_dst=1&d_rtbd=json&d_cb=setAudienceManagerSegments&d_cts=2&d_mid=${o}`)}else e([])})),x=window,w=23153796,_=[[24241150,"enableRemoveBackgroundRating"],[24793469,"enableConvertToGifRating"],[24793470,"enableConvertToJpgRating"],[24793471,"enableConvertToMp4Rating"],[24793472,"enableConvertToPngRating"],[24793473,"enableConvertToSvgRating"],[24793474,"enableCropImageRating"],[24793475,"enableCropVideoRating"],[24793476,"enableLogoMakerRating"],[24793477,"enableMergeVideoRating"],[24793478,"enableQrGeneratorRating"],[24793479,"enableResizeImageRating"],[24793480,"enableChangeSpeedRating"],[24793481,"enableTrimVideoRating"],[24793483,"enableResizeVideoRating"],[24793488,"enableReverseVideoRating"]],S=r.YP`
<svg xmlns="http://www.w3.org/2000/svg" width="30.5" height="30.5" viewBox="0 0 30.5 30.5">
  <g id="Emotion_-_Angry_-_Element" data-name="Emotion - Angry - Element" transform="translate(1.569 1.023)">
    <circle id="ellipse_color_border_" data-name="ellipse [color_border]" cx="14" cy="14" r="14" transform="translate(-0.319 0.227)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <path id="line_color_border_" data-name="line [color_border]" d="M323.468,488.466a7.041,7.041,0,0,0-12.2,0" transform="translate(-303.651 -466.988)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_2" data-name="line [color_border]" y2="2.816" transform="translate(7.795 10.624) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_3" data-name="line [color_border]" y2="2.816" transform="translate(19.643 10.624) rotate(45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  </g>
</svg>

`,A=r.YP`
<svg xmlns="http://www.w3.org/2000/svg" width="30.663" height="30.663" viewBox="0 0 30.663 30.663">
  <g id="Emotion_-_Sad_-_Element" data-name="Emotion - Sad - Element" transform="translate(1.25 1.25)">
    <circle id="ellipse_color_border_" data-name="ellipse [color_border]" cx="14.082" cy="14.082" r="14.082" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <path id="line_color_border_" data-name="line [color_border]" d="M323.468,488.466a7.041,7.041,0,0,0-12.2,0" transform="translate(-303.288 -467.344)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_2" data-name="line [color_border]" y2="2.816" transform="translate(9.153 9.856)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_3" data-name="line [color_border]" y2="2.816" transform="translate(19.01 9.856)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  </g>
</svg>
`,C=r.YP`
<svg xmlns="http://www.w3.org/2000/svg" width="30.5" height="30.5" viewBox="0 0 30.5 30.5">
  <g id="Emotion_-_Uninterested_-_Element" data-name="Emotion - Uninterested - Element" transform="translate(1.41 1.023)">
    <circle id="ellipse_color_border_" data-name="ellipse [color_border]" cx="14" cy="14" r="14" transform="translate(-0.16 0.227)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_" data-name="line [color_border]" y2="3" transform="translate(8.84 10.227)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_2" data-name="line [color_border]" y2="3" transform="translate(18.84 10.227)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <line id="line_color_border_3" data-name="line [color_border]" x2="9.857" transform="translate(9.213 19.014)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  </g>
</svg>
`,E=r.YP`<svg xmlns="http://www.w3.org/2000/svg" width="30.663" height="30.663" viewBox="0 0 30.663 30.663">
<g id="Emotion_-_Happy_-_Element" data-name="Emotion - Happy - Element" transform="translate(1.25 1.25)">
  <circle id="ellipse_color_border_" data-name="ellipse [color_border]" cx="14.082" cy="14.082" r="14.082" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  <path id="line_color_border_" data-name="line [color_border]" d="M323.468,484.948a7.041,7.041,0,0,1-12.2,0" transform="translate(-303.288 -467.345)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  <line id="line_color_border_2" data-name="line [color_border]" y2="2.816" transform="translate(9.153 9.856)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  <line id="line_color_border_3" data-name="line [color_border]" y2="2.816" transform="translate(19.01 9.856)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
</g>
</svg>
`,z=r.YP`
<svg xmlns="http://www.w3.org/2000/svg" width="30.5" height="30.5" viewBox="0 0 30.5 30.5">
  <g id="Emotion_-_Love_-_Element" data-name="Emotion - Love - Element" transform="translate(1.25 1.023)">
    <path id="ellipse_color_border_" data-name="ellipse [color_border]" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(0 0.227)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"/>
    <path id="line_color_border_" data-name="line [color_border]" d="M323.468,484.948a7.041,7.041,0,0,1-12.2,0" transform="translate(-302.961 -466.989)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
    <path id="line_color_border_2" data-name="line [color_border]" d="M4.048,0A1.577,1.577,0,0,0,2.816.59,1.583,1.583,0,0,0,0,1.584C0,3.458,2.633,5.521,2.746,5.608a.117.117,0,0,0,.141,0C3,5.521,5.633,3.458,5.633,1.584A1.586,1.586,0,0,0,4.048,0Z" transform="translate(6.664 8.1)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"/>
    <path id="line_color_border_3" data-name="line [color_border]" d="M4.048,0A1.577,1.577,0,0,0,2.816.59,1.583,1.583,0,0,0,0,1.584C0,3.458,2.633,5.521,2.746,5.608a.117.117,0,0,0,.141,0C3,5.521,5.633,3.458,5.633,1.584A1.586,1.586,0,0,0,4.048,0Z" transform="translate(16.521 8.1)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"/>
  </g>
</svg>
`,T=r.YP`<svg xmlns="http://www.w3.org/2000/svg" width="61.696" height="54.582" viewBox="0 0 61.696 54.582">
  <path id="Path_129268" data-name="Path 129268" d="M1854.318,1286.307l-.6.24a9.685,9.685,0,0,0-5.36,5.36h0a.684.684,0,0,1-1.269,0h0a9.681,9.681,0,0,0-5.359-5.36l-.6-.24a.684.684,0,0,1,0-1.269l.253-.1a9.684,9.684,0,0,0,5.361-5.361l.341-.847a.685.685,0,0,1,1.269,0l.342.848a9.684,9.684,0,0,0,5.359,5.359l.254.1a.684.684,0,0,1,0,1.269Z" transform="translate(-1793.05 -1251.408)" fill="#dedef9"/>
  <path id="Path_129267" data-name="Path 129267" d="M1956.576,1321.444l-.838.338a13.623,13.623,0,0,0-7.539,7.54h0a.962.962,0,0,1-1.785,0h0a13.619,13.619,0,0,0-7.539-7.54l-.838-.338a.961.961,0,0,1,0-1.784l.356-.144a13.629,13.629,0,0,0,7.541-7.541l.479-1.19a.962.962,0,0,1,1.785,0l.481,1.193a13.63,13.63,0,0,0,7.538,7.539l.355.144a.961.961,0,0,1,0,1.784Z" transform="translate(-1929.489 -1275.343)" fill="#dedef9"/>
  <path id="Path_129267-2" data-name="Path 129267" d="M1971.609,1330.055l-1.5.6a24.184,24.184,0,0,0-13.459,13.306h0a1.725,1.725,0,0,1-3.187,0h0a24.177,24.177,0,0,0-13.459-13.306l-1.5-.6a1.692,1.692,0,0,1-.953-2.207,1.713,1.713,0,0,1,.953-.942l.635-.254a24.192,24.192,0,0,0,13.463-13.308l.856-2.1a1.727,1.727,0,0,1,2.236-.94,1.706,1.706,0,0,1,.951.94l.859,2.1a24.2,24.2,0,0,0,13.459,13.3l.635.254a1.691,1.691,0,0,1,.956,2.206A1.709,1.709,0,0,1,1971.609,1330.055Z" transform="translate(-1921.05 -1310.182)" fill="#dedef9"/>
  <path id="Path_1007211" data-name="Path 1007211" d="M441.985,235.613a3.973,3.973,0,0,1-.008-7.946h.009a3.977,3.977,0,0,1,3.973,3.963h0A3.973,3.973,0,0,1,442,235.613Zm0-5.953h0a1.98,1.98,0,0,0,0,3.96h0a1.98,1.98,0,0,0,0-3.96Z" transform="translate(-438.013 -201.702)" fill="#dedef9"/>
  <path id="Path_1007212" data-name="Path 1007212" d="M441.985,235.613a3.973,3.973,0,0,1-.008-7.946h.009a3.977,3.977,0,0,1,3.973,3.963h0A3.973,3.973,0,0,1,442,235.613Zm0-5.953h0a1.98,1.98,0,0,0,0,3.96h0a1.98,1.98,0,0,0,0-3.96Z" transform="translate(-398.298 -181.031)" fill="#dedef9"/>
</svg>`;var D,$=o(163150),I=o(256043);const M=[I.$B.eduK12,I.$B.eduStudent,I.$B.ageGroupUnder13,I.$B.ageGroup13To15],q=[{ratingLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-one-star-rating",defaultMessage:"Strongly disliked"}),ratingText:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-one-star-rating-text",defaultMessage:"Weâ€™re sorry to hear that. What went wrong?"}),iconTemplate:S},{ratingLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-two-star-rating",defaultMessage:"Disliked"}),ratingText:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-two-star-rating-text",defaultMessage:"We value your feedback. How can we improve?"}),iconTemplate:A},{ratingLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-three-star-rating",defaultMessage:"Neutral"}),ratingText:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-three-star-rating-text",defaultMessage:"Neutral is not bad, but what would make you love it?"}),iconTemplate:C},{ratingLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-four-star-rating",defaultMessage:"Liked"}),ratingText:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-four-star-rating-text",defaultMessage:"Was there more we could do to be better?"}),iconTemplate:E},{ratingLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-five-star-rating",defaultMessage:"Loved"}),ratingText:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-five-star-rating-text",defaultMessage:"Thatâ€™s great. Could you tell us what you loved?"}),iconTemplate:z}],L=r.dy`${T}`,F={defaultDialogTitle:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-modal-dialog-default-title",defaultMessage:"Rate our quick action"}),ratingsDescriptionNonEdu:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-description",defaultMessage:"Share your work on social with #adobeexpress"}),commentsPlaceholder:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-comments-placeholder",defaultMessage:"Your feedback (optional)"}),submitLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-submit-label",defaultMessage:"Submit rating"}),submittedTitle:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-submitted-title",defaultMessage:"Thank you for your feedback."}),submittedText:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-submitted-text",defaultMessage:"Weâ€™re always improving our tools to work better for you."}),emailLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-email-label",defaultMessage:"Want to stay in touch?"}),emailInputPlaceholder:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-email-input-placeholder",defaultMessage:"Your email address (optional)"}),invalidEmailLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-invalid-email-label",defaultMessage:"That's an invalid email. Please fix or remove."}),ratingsButtonLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-modal-dialog-open-label",defaultMessage:"Rate us"}),ratingsButtonSectionLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-modal-dialog-open-section-label",defaultMessage:"We appreciate your feedback."}),ratingsSliderAriaLabel:(0,l.Em)({id:"@hz/quick-actions:shared-ui-ratings-modal-dialog-ratings-slider-aria-label",defaultMessage:"Ratings value slider"})};var O;!function(t){t.Unknown="unknown",t.Edu="edu",t.Internal="internal",t.External="external"}(O||(O={}));const P={"generate-qr-code":"qr-generator","merge-videos":"merge-video"},R=new Set(["combine-files","convert-from-pdf","convert-to-pdf","edit-pdf","face-anonymization","micro-editor","organize-pages"]);let B,U=D=class extends n.j{constructor(){super(...arguments),this.isModalOpen=!1,this.isSmallAppFrame=!1,this.primaryCtaLink="",this.dialogTitle=F.defaultDialogTitle,this.isButton=!1,this._currentRating=4.5,this._showInputFields=!1,this._showSliderImageLabel=!1,this._emailIsValid=!0,this._emailHasBeenInvalid=!1,this._submitted=!1,this._doNotShow=!1,this._isInProjectXModal=!1,this._isDarkMode=!1,this._commentsText="",this._emailText="",this._eventStartRatingValue=-1,this._editorHasProp=!1,this._focusAfterOpen=()=>{if(!this._haveFocusedAfterOpen&&this._customDialogWrapper){const t=this._customDialogWrapper.querySelector("sp-dialog");t&&(this._haveFocusedAfterOpen=!0,t.focus())}},this._handleSliderRatingUpdate=(t,e=!1)=>{if(this._autoscrollInterval&&(clearInterval(this._autoscrollInterval),this._autoscrollInterval=void 0),e){if(-1===this._eventStartRatingValue&&t===this._currentRating)return;this._eventStartRatingValue=-1}else-1===this._eventStartRatingValue&&(this._eventStartRatingValue=t);if(this._currentRating=t,this._showSliderImageLabel=!0,e){this._showInputFields=!0;const e=Math.round(t);if(e!==this._currentRating){const t=.05*(e-this._currentRating);this._autoscrollInterval=setInterval((()=>{let o=this._currentRating+t,i=!1;i=t<0?o<=e:o>=e,i&&(o=e,clearInterval(this._autoscrollInterval),this._autoscrollInterval=void 0),this._currentRating=o}),1)}}},this._haveSetSliderAriaLabel=!1,this._updateSliderAriaLabel=()=>{const t=this._ratingsSlider?.shadowRoot?.querySelector("input");t&&(this._haveSetSliderAriaLabel=!0,t.setAttribute("aria-label",this._getTranslatedString(F.ratingsSliderAriaLabel)))},this._onCommentsChange=t=>{this._commentsText=t.currentTarget._value},this._onEmailChange=t=>{this._emailText=t.currentTarget._value,this._emailIsValid=this.isValidEmail(this._emailText),this._emailIsValid||(this._emailHasBeenInvalid=!0)},this._onEmailInput=t=>{this._emailText=t.currentTarget._value,this._emailIsValid=this.isValidEmail(this._emailText)},this._haveSetTextareaMaxHeight=!1,this._renderRatingsContent=()=>r.dy`
            <div class="ratings-description-container">
                ${(0,f.g)(this._userType!==O.Edu,(()=>r.dy`
                        <h3 class="ratings-description">
                            ${this._getTranslatedString(F.ratingsDescriptionNonEdu)}
                        </h3>
                    `))}
            </div>
            <h1>${this._getTranslatedString(this.dialogTitle)}</h1>

            ${this._renderRatingsSlider()} ${(0,f.g)(this._showInputFields,(()=>this._renderInputFields()))}
        `,this._renderSubmittedContent=()=>r.dy`
            <div class="csat-modal-thankyou-icon">${L}</div>
            <h1>${this._getTranslatedString(F.submittedTitle)}</h1>
            <h2>${this._getTranslatedString(F.submittedText)}</h2>
        `,this._haveFocusedAfterOpen=!1}get sheet(){const{quickActionId:t}=this._quickActionConfig;if(R.has(t))return"";return`/production/${P[t]||t}`}get _userType(){if(this._userStore.isAnonymousUser())return O.Unknown;const{email:t}=this._userStore;if(t){if(/@adobe(test)?\.com$/i.test(t))return O.Internal}const e=this._userStore.userProfile?.userTags;if(e?.length){if(Boolean(M.find((t=>e.includes(t)))))return O.Edu}return O.External}_translateStrings(){D._translatedStringsLocale!==this._intlStore.locale&&(D._translatedStringsLocale=this._intlStore.locale,Object.values(F).forEach((t=>{t.id?D._translatedStrings[t.id]=this._intlStore.formatMessage(t):this._logger.debug("QARatingsModal: missing string descriptor.id in _translateStrings",t)})),q.forEach((t=>{D._translatedStrings[t.ratingLabel.id]=this._intlStore.formatMessage(t.ratingLabel),D._translatedStrings[t.ratingText.id]=this._intlStore.formatMessage(t.ratingText)})))}_getTranslatedString(t){const e=D._translatedStrings[t.id];return e||this._logger.debug("missing translated string",t),e||this._intlStore.formatMessage(t)}async contextsLoaded(){await this._intlStore.load(),this._translateStrings(),(0,$.tB)(this._uiStateStore.qaParentContext)&&(this._isInProjectXModal=!0)}static get styles(){return b}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._autoscrollInterval&&clearInterval(this._autoscrollInterval),this.isButton&&this._setEditorHasProp(!1)}_getEditor(){const t=this.parentElement?.parentNode?.host;return t}async _loadSegments(){return B||(B=y(this._logger)),B}_openRatingsModal(){this._loadSegments(),this.isModalOpen=!0,this._sendOpenedClosedEvent()}_handleCloseEscape(){this.isModalOpen=!1}_handleCloseClick(){this.isModalOpen=!1,this._sendOpenedClosedEvent(),this._isInProjectXModal&&setTimeout((()=>{const t=document.querySelector("x-quick-action-modal")?.parentElement;t&&t.removeAttribute("tabindex")}))}_sendSubmittedEvent(){const t=new CustomEvent("qa-ratings-modal-submitted",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)}_sendOpenedClosedEvent(){const t=this.isModalOpen?"qa-ratings-modal-opened":"qa-ratings-modal-closed",e=new CustomEvent(t,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(e)}_getStarsAndBar(t,e=!1){const o=[],i=this._showSliderImageLabel&&t===Math.round(this._currentRating);let a=t;for(;a;)a--,o.push(r.dy`<sp-icon-star class="star-icon"></sp-icon-star>`);return r.dy`
            <div
                class="stars-and-bar stars-${t}"
                style="
                    display: flex;
                    flex-direction: column;
                "
            >
                <div class="slider-bar"></div>
                <div
                    class="slider-stars${(0,f.g)(i,(()=>" selected"))}${(0,f.g)(e,(()=>" show-on-narrow-when-not-selected"))}"
                >
                    ${o}
                </div>
            </div>
        `}_renderRatingsSlider(){const{ratingLabel:t,iconTemplate:e}=q[Math.round(this._currentRating)-1],o=this._getTranslatedString(t),i=25*(-1===this._eventStartRatingValue&&this._showSliderImageLabel?Math.round(this._currentRating-1):this._currentRating-1),a=`calc(${100-i}% + 30px)`;return this._haveSetSliderAriaLabel||setTimeout(this._updateSliderAriaLabel),r.dy`
            <div class="ratings-slider-container">
                <sp-slider
                    id="ratings-slider"
                    @change=${t=>this._handleSliderRatingUpdate(t.target.value,!0)}
                    @input=${t=>this._handleSliderRatingUpdate(t.target.value)}
                    @keydown=${t=>{if("ArrowLeft"===t.key)t.preventDefault(),this._handleSliderRatingUpdate(Math.max(1,Math.round(this._currentRating-1)),!0);else{if("ArrowRight"!==t.key)return;t.preventDefault(),this._handleSliderRatingUpdate(Math.min(5,Math.round(this._currentRating+1)),!0)}}}
                    value=${this._currentRating}
                    min="1"
                    max="5"
                    step="0.001"
                    label-visibility="none"
                    variant="filled"
                    aria-label=${this._getTranslatedString(F.ratingsSliderAriaLabel)}
                >
                </sp-slider>
                <div class="backslider-full-width-container">
                    <div class="backslider-container">
                        <div class="backslider-right" style="left:${i}%; width:${a};"></div>
                    </div>
                </div>
                <div class="stars-and-bars${(0,f.g)(!this._showSliderImageLabel,(()=>" no-selection"))}">
                    <div class="slider-image-and-text" style="left:${25*(this._currentRating-1)}%;">
                        <div class="slider-image-text${this._showSliderImageLabel?"":" hidden"}">${o}</div>
                        <div class="emoticon-icon">${e}</div>
                    </div>
                    ${this._getStarsAndBar(1,!0)} ${this._getStarsAndBar(2)} ${this._getStarsAndBar(3)}
                    ${this._getStarsAndBar(4)} ${this._getStarsAndBar(5,!0)}
                </div>
            </div>
        `}_renderInputFields(){const t=q[Math.round(this._currentRating)-1],e=!(this._emailIsValid||!this._emailHasBeenInvalid)||void 0;return this._haveSetTextareaMaxHeight||setTimeout((()=>{if(!this._haveSetTextareaMaxHeight){const t=this._commentsTextArea?.shadowRoot?.querySelector("textarea");t&&(t.style.maxHeight="100px",this._haveSetTextareaMaxHeight=!0)}})),r.dy`
            <div>
                <div id="comments-container">
                    <sp-field-label for="comments-text-area"
                        >${this._getTranslatedString(t.ratingText)}</sp-field-label
                    >
                    <sp-textfield
                        multiline
                        id="comments-textarea"
                        @change=${this._onCommentsChange}
                        value=${this._commentsText}
                        placeholder=${this._getTranslatedString(F.commentsPlaceholder)}
                    ></sp-textfield>
                </div>
            </div>
            ${(0,f.g)(this._userType!==O.Edu,(()=>r.dy`
                    <div id="email-container" style="display: none">
                        <sp-field-label for="comments-email-input-field"
                            >${this._getTranslatedString(F.emailLabel)}</sp-field-label
                        >
                        <div class="email-textfield-and-error-field-container">
                            <sp-textfield
                                @change=${this._onEmailChange}
                                @input=${this._onEmailInput}
                                value=${this._emailText}
                                id="comments-email-input-field"
                                type="text"
                                placeholder=${this._getTranslatedString(F.emailInputPlaceholder)}
                                invalid=${(0,s.o)(e)}
                            ></sp-textfield>
                            <div class="invalid-email-message">
                                ${(0,f.g)(e,(()=>r.dy` ${this._getTranslatedString(F.invalidEmailLabel)} `))}
                            </div>
                        </div>
                    </div>
                `))}
            <sp-button
                @click=${this._handleSubmit}
                @keydown=${t=>{"Enter"!==t.code&&"Space"!==t.code||this._handleSubmit()}}
                tabIndex="0"
                id="submit-button"
                type="submit"
                disabled=${(0,s.o)(e)}
                >${this._getTranslatedString(F.submitLabel)}</sp-button
            >
        `}_renderDialog(){return r.dy`
            <sp-dialog no-divider open size="l" mode="modal">
                <div class="dialog-content">
                    ${(0,f.g)(this._submitted,this._renderSubmittedContent,this._renderRatingsContent)}
                </div>
            </sp-dialog>
        `}_renderButton(){if(this._submitted)return r.Ld;this._setEditorHasProp(!0);const t=this._getTranslatedString(F.ratingsButtonLabel),e=this._getTranslatedString(F.ratingsButtonSectionLabel),o=this.isSmallAppFrame?"s":"m";return r.dy`
            <div class="open-ratings-button-section">
                <label>${e}</label>
                <sp-button
                    id="open-ratings-button"
                    size=${o}
                    ?quiet=${!this.isSmallAppFrame}
                    iconplacement="inline-start"
                    focusable
                    @click=${this._openRatingsModal}
                    tabIndex="0"
                    aria-label=${t}
                    variant="secondary"
                >
                    <x-icon-star size="s" slot="icon"></x-icon-star>
                    <span>${t}</span>
                </sp-button>
            </div>
        `}_setEditorHasProp(t=!1){if(t===this._editorHasProp)return;const e=this._getEditor();e&&(this._editorHasProp=t,t?e.setAttribute("showing-rate-us","true"):e.removeAttribute("showing-rate-us"))}render(){if(!this.sheet||!this.isModalOpen&&this._hasRated())return this._doNotShow=!0,this._setEditorHasProp(!1),r.Ld;if(this._isDarkMode="dark"===this._uiStateStore.colorScheme,this.isButton)return this._renderButton();this.isModalOpen?this._haveFocusedAfterOpen||setTimeout(this._focusAfterOpen):this.isModalOpen||(this._haveFocusedAfterOpen=!1);const t=this._submitted?550:900;return r.dy`
            <x-custom-dialog-wrapper
                slot="click-content"
                ?open=${this.isModalOpen}
                ?dismissable=${!0}
                ?underlay=${!0}
                ?responsive=${!0}
                mode="modal"
                desktop-width="calc(min(${t}px, 90%))"
                @keydown=${t=>{"Escape"===t.code&&(this._handleCloseEscape(),t.preventDefault(),t.stopPropagation())}}
                @cancel=${()=>this._handleCloseClick()}
            >
                ${this._renderDialog()}
            </x-custom-dialog-wrapper>
        `}async _handleSubmit(){await this._submitRating(),this._submitted&&this._sendSubmittedEvent()}_getLocale(){let{lang:t}=document.documentElement;t=t||"en-us";let e=t.split("-").pop()?.toLowerCase()||"en";return"en"===e&&(e="us"),e}_replaceDelimiters(t){return t.split(":__").join(":--").split("__:").join("--:")}isValidEmail(t){if(!t)return!0;return/\S+@\S+\.\S+/.test(t.toLocaleLowerCase())}async _submitRating(){const t=Math.round(this._currentRating);let e=this._commentsText?.trim(),o=this._emailText?.trim();const i=!!o,r=!!e;this._quickActionAnalyticsStore.onSubmitRating(t,i,r);const a=await this._loadSegments(),s=this._userType,{sheet:n}=this;let c={};try{c=this.getExtraData?.()||{}}catch(t){this._logger.error("QARatingsModal: getExtraData erred in _submitRating",t)}if(e&&(e=this._replaceDelimiters(e)),o){if(!this.isValidEmail(o))return;o=this._replaceDelimiters(o)}const l={email:o,info:s,context:this._uiStateStore.qaParentContext,os:this._browserService.deviceOs,browser:`${this._browserService.webBrowser}:${this._browserService.webBrowserVersion}`,dims:[window.innerWidth,window.innerHeight,screen.width,screen.height].join(","),...c},d=e+Object.entries(l).map((([t,e])=>`:__${t}__:${e}`)).join(""),u={data:[{name:"Segments",value:a.length?a.join(", "):""},{name:"Locale",value:this._getLocale()},{name:"Rating",value:t},{name:"Feedback",value:d},{name:"Timestamp",value:(new Date).toLocaleString("en-US",{timeZone:"UTC"})}]},h=null!==new URL(window.location.href).searchParams.get("ratingsTestSubmit"),p=`https://www.adobe.com/reviews-api/ccx${n}`;this._logger.debug("QARatingsModal:submitted data",{data:u.data,submitPath:p,isTestSubmit:h}),h||fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});let m=localStorage.getItem("ccxActionRatings")??"";m.includes(n)||(m=m.length>0?n:`,${n}`),localStorage.setItem("ccxActionRatings",m),this._submitted=!0}_hasRated(){if(this._submitted)return!0;const t=new URL(window.location.href).searchParams.get("ratingsActionRated");if("false"===t)return!1;if("true"===t)return!0;const e=localStorage.getItem("ccxActionRatings");return e&&e.includes(this.sheet)}};U.TAG_NAME="qa-ratings-modal",U._translatedStrings={},U._translatedStringsLocale="",(0,i.__decorate)([(0,a.Cb)({type:Boolean})],U.prototype,"isModalOpen",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0,attribute:"is-small-app-frame"})],U.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,a.IO)("sp-dialog")],U.prototype,"_qaRatingsModal",void 0),(0,i.__decorate)([(0,a.IO)("sp-slider")],U.prototype,"_ratingsSlider",void 0),(0,i.__decorate)([(0,a.IO)("x-custom-dialog-wrapper")],U.prototype,"_customDialogWrapper",void 0),(0,i.__decorate)([(0,a.IO)("#comments-textarea")],U.prototype,"_commentsTextArea",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],U.prototype,"primaryCtaLink",void 0),(0,i.__decorate)([(0,a.Cb)({type:Object})],U.prototype,"dialogTitle",void 0),(0,i.__decorate)([(0,a.Cb)({type:Function})],U.prototype,"getExtraData",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"is-button",reflect:!0})],U.prototype,"isButton",void 0),(0,i.__decorate)([(0,a.SB)()],U.prototype,"_currentRating",void 0),(0,i.__decorate)([(0,c.w)("IntlStore")],U.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("Logger")],U.prototype,"_logger",void 0),(0,i.__decorate)([(0,c.w)("QuickActionUIConfig")],U.prototype,"_quickActionConfig",void 0),(0,i.__decorate)([(0,c.w)("UserStore")],U.prototype,"_userStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionAnalyticsStore")],U.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,c.w)("BrowserService")],U.prototype,"_browserService",void 0),(0,i.__decorate)([(0,c.w)("UIStateStore")],U.prototype,"_uiStateStore",void 0),(0,i.__decorate)([(0,a.SB)()],U.prototype,"_showInputFields",void 0),(0,i.__decorate)([(0,a.SB)()],U.prototype,"_showSliderImageLabel",void 0),(0,i.__decorate)([(0,a.SB)()],U.prototype,"_emailIsValid",void 0),(0,i.__decorate)([(0,a.SB)()],U.prototype,"_emailHasBeenInvalid",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"submitted",reflect:!0})],U.prototype,"_submitted",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"do-not-show",reflect:!0})],U.prototype,"_doNotShow",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"is-in-project-x-modal",reflect:!0})],U.prototype,"_isInProjectXModal",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"is-darkmode",reflect:!0})],U.prototype,"_isDarkMode",void 0),U=D=(0,i.__decorate)([(0,a.Mo)(D.TAG_NAME)],U)},471066:(t,e,o)=>{var i=o(944440),r=(o(810115),o(543517)),a=o(903512),s=o(697038),n=o(859526),c=o(692484),l=o(270207);const d=a.iv`
    :host {
        /* stylelint-disable unit-disallowed-list -- no spectrum var available */
        --trim-section-min-width: 300px;
        /* stylelint-enable */
    }
    .trim-section {
        position: relative;
        padding-block: var(--spectrum-spacing-300);
        height: 100%;
        display: flex;
        min-width: var(--trim-section-min-width);
        flex-direction: column;
        row-gap: var(--spectrum-spacing-400);
        margin-inline-start: var(--spectrum-spacing-75);
    }

    .trim-section__input {
        position: relative;
        display: flex;
        justify-content: flex-start;
        height: auto;
        flex-direction: row;
        gap: var(--spectrum-spacing-400);
        width: 100%;
    }

    .triminput {
        width: var(--spectrum-spacing-1000);
    }
`;var u,h=o(661088),p=o(484866),m=o(743182),g=o(815898),v=o(200128),b=o(701724);let f=u=class extends n.j{constructor(){super(...arguments),this.selectedElements=[],this._trimInProgress=!1,this.sceneMode=0,this._handleTrimInProgress=t=>{this.isCustomEvent(t)&&this.handleTrimInProgressStateChange(t)},this._sendAnalyticsOnce=(()=>{const t={[v.B_.trimQuickActionResultByTimestamp]:!1};return e=>{if(!t[e]&&e===v.B_.trimQuickActionResultByTimestamp)this._quickActionAnalyticsStore.onTrimVideo(v.e.timestamp),t[e]=!0}})()}static get styles(){return d}async contextsLoaded(){await this._scenelineQuickActionStore.load(),this._onSceneElementChange(),this.reaction((()=>this._scenelineQuickActionStore.selectedElements),this._onSceneElementChange.bind(this))}get _scenelineFrameRate(){return this._scenelineQuickActionStore.frameRate||p.H7}handleTrimInProgressStateChange(t){this._trimInProgress=t.detail.trimInProgress,this._trimInProgress&&this._removeFocusFromInputFields()}isCustomEvent(t){return"detail"in t}connectedCallback(){super.connectedCallback(),this.addEventListener("qa-trim-in-progress",this._handleTrimInProgress)}disconnectedCallback(){this.removeEventListener("qa-trim-in-progress",this._handleTrimInProgress),super.disconnectedCallback()}get _disableLeftTrimInput(){return this.selectedElements.length>0&&this.selectedElements[0].elementType===l.Hd.IMAGE}_onSceneElementChange(t=this._scenelineQuickActionStore.selectedElements){this.selectedElements=(0,r.ZN)(t)??[]}_getInputFieldValuesFromSelected(){let t="--",e="--";if(this.selectedElements.length){const o=this.selectedElements[0],i=o?.mediaInfo?.mediaInTime?o?.mediaInfo?.mediaInTime:{value:0,scale:this._scenelineFrameRate.scale};i&&([t,e]=(0,g.YG)(i,m.JP.add(i,o?.duration)))}return{startTime:t,endTime:e}}_setInputFieldsFromSelected(){const{startTime:t,endTime:e}=this._getInputFieldValuesFromSelected();this.leftTrimEle.value=t,this.rightTrimEle.value=e}_textFieldValueIsUnchanged(t,e,o){const{startTime:i,endTime:r}=this._getInputFieldValuesFromSelected();return t===l.wD.left&&e===i||t===l.wD.right&&o===r}_onTrimStateChange(t){if(!this.selectedElements||!this.selectedElements[0])return;let e=null;const o={...this.selectedElements[0]},i=o.elementType===l.Hd.VIDEO;if(4===t?e=l.wD.left:3===t&&(e=l.wD.right),(0,g.F7)(this.leftTrimEle.value)&&(0,g.F7)(this.rightTrimEle.value)){if(o.duration&&o.mediaInfo){let t=(0,g.j$)(this.leftTrimEle.value,{...o.duration,value:1});i&&o.mediaInfo?.mediaInTime&&(t=o.mediaInfo?.mediaInTime);const r=e===l.wD.right?(0,g.j$)(this.rightTrimEle.value,{...o.duration,value:1}):m.JP.add(o.duration,t),a=e===l.wD.left?(0,g.j$)(this.leftTrimEle.value,{...o.duration,value:1}):t,[s,n]=(0,g.YG)(a,r);if(this._textFieldValueIsUnchanged(e,s,n))return void this._setInputFieldsFromSelected();if(m.JP.isGreaterOrEqual(a,r))return void this._setInputFieldsFromSelected();const c={value:10,scale:r.scale},d=m.JP.subtract(r,c),u=i?o.mediaInfo.mediaDuration:m.JP.getFrameTime(60,this._scenelineFrameRate);if(m.JP.isGreaterThan(d,u))return void this._setInputFieldsFromSelected();i?(o.mediaInfo.mediaInTime=a,o.duration=m.JP.subtract(r,a)):o.duration=r}if(o&&null!==e){const t={phase:l.pM.start,element:o,trimActionType:e};this._quickActionPerformance.begin(h.U.trimVideo),this._scenelineQuickActionStore.trimSelectedElement(t),t.phase=l.pM.end,this._scenelineQuickActionStore.trimSelectedElement(t),this._sendAnalyticsOnce(v.B_.trimQuickActionResultByTimestamp),e!==l.wD.right||i||this.dispatchEvent(new CustomEvent("qa-update-image-current-time",{bubbles:!0,composed:!0,detail:{currentImageTime:o.duration}}))}}else this._setInputFieldsFromSelected()}_onKeypress(t){if((0,b.RQ)(t))return t.preventDefault(),void this._removeFocusFromInputFields();new RegExp("^[0-9:]+$").test(t.key)||t.ctrlKey||t.preventDefault()}_removeFocusFromInputFields(){this.leftTrimEle.blur(),this.rightTrimEle.blur()}_onInputFieldFocus(){this._trimInProgress&&this._removeFocusFromInputFields()}render(){const{startTime:t,endTime:e}=this._getInputFieldValuesFromSelected();return a.dy` <div class="trim-section__input">
            <div class="trim-start">
                <sp-field-label for="lefttriminput"
                    >${this._intlStore.formatMessage({id:"@hz/quick-actions:trim-video-start-time",defaultMessage:"Start Time"})}</sp-field-label
                >
                <sp-textfield
                    id="lefttriminput"
                    value=${t}
                    @keypress=${this._onKeypress}
                    @focus=${this._onInputFieldFocus}
                    @blur=${()=>this._onTrimStateChange(4)}
                    class="triminput"
                    placeholder="00:00:00"
                    ?disabled=${this._disableLeftTrimInput}
                ></sp-textfield>
            </div>
            <div class="trim-end">
                <sp-field-label for="righttriminput"
                    >${this._intlStore.formatMessage({id:"@hz/quick-actions:trim-video-end-time",defaultMessage:"End Time"})}</sp-field-label
                >
                <sp-textfield
                    id="righttriminput"
                    value=${e}
                    @keypress=${this._onKeypress}
                    @focus=${this._onInputFieldFocus}
                    @blur=${()=>this._onTrimStateChange(3)}
                    class="triminput"
                    placeholder="00:00:00"
                ></sp-textfield>
            </div>
        </div>`}};f.TAG_NAME="qa-trim-input-fields",(0,i.__decorate)([(0,c.w)("IntlStore")],f.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionResizeStore")],f.prototype,"_quickActionResizeStore",void 0),(0,i.__decorate)([(0,c.w)("ScenelineQuickActionStore")],f.prototype,"_scenelineQuickActionStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionAnalyticsStore")],f.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,c.w)("QuickActionPerformance")],f.prototype,"_quickActionPerformance",void 0),(0,i.__decorate)([(0,s.SB)()],f.prototype,"selectedElements",void 0),(0,i.__decorate)([(0,s.SB)()],f.prototype,"_trimInProgress",void 0),(0,i.__decorate)([(0,s.IO)("#lefttriminput")],f.prototype,"leftTrimEle",void 0),(0,i.__decorate)([(0,s.IO)("#righttriminput")],f.prototype,"rightTrimEle",void 0),(0,i.__decorate)([(0,s.Cb)()],f.prototype,"sceneMode",void 0),f=u=(0,i.__decorate)([(0,s.Mo)(u.TAG_NAME)],f)},370428:(t,e,o)=>{o.d(e,{oB:()=>x,r0:()=>y,uz:()=>m,zV:()=>k});var i=o(903512),r=o(553648);const a=(0,i.$m)("canvas"),s=(0,i.$m)("upload"),n=(0,i.$m)("description"),c=(0,i.$m)("export"),l=(0,i.$m)("canvas"),d=(0,i.$m)("title"),u=(0,i.$m)("panel"),h=(0,i.$m)("export"),p=(0,r.hO)(24),m=(0,r.hO)(24),g=(0,r.hO)(16),v=(0,r.hO)(8),b=(0,r.hO)(300),f=(0,i.$m)("500ms"),k=(0,r.hO)(65),y=(0,r.hO)(320),x=i.iv`
    :host {
        display: flex;
        flex-direction: column;
        height: calc(var(--100dvh, 100vh) - var(--qa-workspace-custom-top, 0rem));
        inset-block-start: var(--qa-workspace-custom-top, 0);
        width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
        /* Prevents scroll chaining (pull to refresh) */
        overscroll-behavior: none;
        padding: var(--qa-workspace-custom-padding, var(--qa-workspace-padding));
        min-height: var(--qa-workspace-custom-min-height, unset);
    }

    :host(.qa-workspace-layout--full_width) {
        padding: 0;
    }
    :host(.qa-workspace-layout--fill) {
        padding: 0;
        --qa-editor-canvas-section-border-radius: 0;
    }

    :host(:not([is-small-app-frame])) {
        flex-direction: row;
        overflow: initial;
        overflow-y: var(--qa-workspace-overflow-y, unset);
        margin-inline: auto;
        max-height: 100%;
        --qa-workspace-padding: ${(0,r.hO)(32)};
    }

    .legal-message {
        margin: ${(0,r.hO)(16)} ${(0,r.hO)(16)} 0;
        text-align: center;
    }

    .grid-section {
        display: grid;
        width: 100%;
        box-sizing: border-box;
        row-gap: ${m};
        padding: var(--qa-workspace-custom-grid-padding, 0 ${p});
        height: var(--qa-workspace-custom-grid-height, 100%);
        position: var(--qa-workspace-custom-grid-position, relative);
        grid-template-rows: var(
            --qa-workspace-custom-grid-template-rows,
            max-content minmax(max-content, var(--qa-mobile-canvas-height, 60vh))
                var(--qa-grid-panel-height, max-content)
        );
        grid-template-columns: auto;
        grid-template-areas:
            " ${d}"
            " ${l}"
            " ${u}";
    }

    .grid-section--full_width {
        grid-template-rows: var(
            --qa-workspace-custom-grid-template-rows,
            minmax(max-content, 4rem) minmax(max-content, var(--qa-mobile-canvas-height, auto))
        );
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
            " ${d} ${u} ${h} "
            " ${l} ${l} ${l} ";
        padding-block-start: var(--qa-workspace-custom-row-gap, ${g});
    }
    .grid-section--full_width .title-section sp-divider {
        display: none;
    }

    .grid-section--full_width .title-section {
        align-self: center;
        padding: 0 ${(0,r.hO)(32)};
    }

    .grid-section--full_width .panel-section {
        align-self: center;
        justify-self: center;
    }
    .grid-section--full_width .export-section {
        align-self: center;
        justify-self: end;
        padding: 0 ${(0,r.hO)(16)};
    }
    .grid-section--full_width .canvas-section-content {
        --qa-canvas-section-border-radius: 0 0 ${(0,r.hO)(16)} ${(0,r.hO)(16)};
        border-block-start: ${(0,r.hO)(1)} solid var(--qa-color-gray-200);
        height: 100%;
    }

    .grid-section--fill .canvas-section-content {
        --qa-canvas-section-border-radius: 0;
    }

    :host(:not([is-small-app-frame])) .grid-section {
        padding: 0;
        height: 100%;
        row-gap: var(--qa-workspace-custom-row-gap, ${g});
        column-gap: var(--qa-workspace-custom-column-gap, ${(0,r.hO)(40)});
        grid-template-rows: var(
            --qa-workspace-custom-grid-template-rows,
            min-content auto var(--qa-grid-panel-height, 1fr)
        );
        grid-template-columns: var(--qa-workspace-custom-grid-template-columns, 100%);
        grid-template-areas: var(
            --qa-workspace-custom-grid-template-areas,
            " ${l} ${d}" " ${l} ${u}" " ${l} ${h}"
        );
    }

    :host(:not([is-small-app-frame])) .grid-section--full_width {
        grid-template-rows: var(
            --qa-workspace-custom-grid-template-rows,
            minmax(max-content, 4rem) minmax(max-content, var(--qa-mobile-canvas-height, auto))
        );
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
            " ${d} ${u} ${h} "
            " ${l} ${l} ${l} ";
    }

    ${(0,r.rR)(i.iv`
        :host(:not([is-small-app-frame])) .grid-section {
            grid-template-columns: var(--qa-workspace-custom-grid-template-columns, 100%);
        }
        :host(:not([is-small-app-frame])) .grid-section--full_width {
            grid-template-columns: 1fr 1fr 1fr;
            padding-block-start: var(--qa-workspace-custom-row-gap, ${g});
        }
    `)}

    .grid-section .title {
        ${r.yI}

        text-align: start;
        margin: 0;
    }

    .sub-title {
        margin: ${v} 0 0;
        font-weight: var(--spectrum-regular-font-weight);
    }

    .grid-section slot[name="${n}"]::slotted(*) {
        text-align: center;
        font-size: var(--qa-header-description-font-size);
        line-height: var(--qa-header-description-line-height);
        color: var(--qa-header-description-color);
        list-style-position: inside;
    }

    :host(:not([is-small-app-frame])) .grid-section slot[name="${n}"]::slotted(*) {
        display: var(--qa-description-display, block);
        text-align: start;
    }

    .grid-section slot[name="${n}"]::slotted(*) p:first-child {
        padding-block-start: ${(0,r.hO)(10)};
    }

    .grid-section slot[name="${a}"]::slotted(*) {
        align-self: center;
    }

    .canvas-section {
        grid-area: ${l};
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
    }

    .canvas-section-content {
        height: 100%;
        width: 100%;
        align-self: flex-start;
        display: flex;
        justify-content: center;
        background-color: var(--qa-background-color-secondary);
        position: relative;
        min-height: var(--qa-canvas-section-content-min-height, ${(0,r.hO)(300)});
        border-radius: var(--qa-workspace-custom-canvas-section-border-radius, var(--qa-canvas-section-border-radius));
    }

    :host([is-small-app-frame]) .canvas-section-content.mobile-vqa {
        min-height: var(--qa-canvas-section-content-min-height, ${(0,r.hO)(224)});
    }

    :host([is-small-app-frame]) .canvas-section.full-width.mobile-vqa {
        height: var(
            --qa-canvas-section-custom-full-width-mobile-vqa-height,
            ${y}
        );
        margin-block-start: var(--qa-workspace-mobile-vqa-canvas-margin-block-start, ${m});
    }

    :host([is-small-app-frame]) .grid-section.mobile-vqa {
        grid-template-rows: var(
            --qa-workspace-custom-grid-template-rows,
            max-content minmax(max-content, var(--qa-mobile-canvas-height, 35vh))
                var(--qa-grid-panel-height, max-content)
        );
        row-gap: 0;
    }

    :host(:not([is-small-app-frame])) .canvas-section-content {
        height: clamp(var(--qa-workspace-custom-canvas-height-min, 70%), ${(0,r.hO)(600)}, 100%);
        overflow: initial;
    }

    .canvas-section-loading {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        overflow: hidden;
        border-radius: inherit;
        z-index: 1;
        opacity: 1;
        /* Allow z-index to transition after the opacity has finished transitioning */
        transition: opacity ${f} ease 0s, z-index 0s ${f};
    }

    .skeleton-shimmer {
        animation: shimmer 1s infinite;
        animation-timing-function: linear;
        content: "";
        position: absolute;
        inset: 0;
    }

    .canvas-skeleton {
        background-color: var(--spectrum-global-color-gray-200);
        border-radius: var(--x-thumbnail-skeleton-border-radius, var(--spectrum-corner-radius-100));
        height: 100%;
        position: absolute;
        width: 25%;
        filter: blur(var(--spectrum-spacing-600));
    }

    .canvas-section-loading-label {
        color: var(--qa-color-gray-0);
        font-size: ${(0,r.hO)(16)};
        font-weight: bold;
        /* Use relative positioning so that the label has a height only if a QA adds content.
        This will ensure that the loading icon is centered with or without the label. */
        position: relative;
        inset-block-start: ${(0,r.hO)(14)};
    }

    .canvas-section.full-width {
        position: relative;
        margin: 0 ${(0,r.hO)(-24)};
        overflow: hidden;
    }

    :host(:not([is-small-app-frame])) .canvas-section.full-width {
        margin: 0;
        width: 100%;
    }

    .grid-section slot[name="${s}"]::slotted(*) {
        background-color: var(--qa-background-color-secondary);
        align-self: var(--qa-canvas-section-upload-slot-align);
    }

    ${(0,r.rR)(i.iv`
        :host(:not([is-small-app-frame])) .grid-section slot[name="${s}"]::slotted(*) {
            position: relative;
        }
    `)}

    ${(0,r.rR)(i.iv`
        :host(:not([is-small-app-frame])) .grid-section slot[name="${a}"]::slotted(*),
        :host(:not([is-small-app-frame])) .grid-section slot[name="${s}"]::slotted(*) {
            border-radius: var(
                --qa-workspace-custom-canvas-section-border-radius,
                var(--qa-canvas-section-border-radius)
            );
        }
    `)}

    .title-section {
        grid-area: ${d};
        align-self: flex-start;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: var(--qa-workspace-custom-title-section-margin, ${m} 0 0);
    }

    .grid-section--fill .title-section {
        margin: var(--qa-workspace-padding) var(--qa-workspace-padding) 0 0;
    }

    :host(:not([is-small-app-frame])) .title-section {
        padding: var(--qa-workspace-custom-title-section-padding, 0);
        margin: var(--qa-workspace-custom-title-section-margin, 0);
        align-items: flex-start;
        flex-direction: column;
        justify-content: initial;
    }

    :host(:not([is-small-app-frame])) .title-section sp-divider {
        margin-block-start: ${g};
    }

    .panel-section {
        grid-area: ${u};
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: var(--qa-workspace-custom-panel-section-overflow-y, auto);
        padding: var(--qa-workspace-custom-panel-section-padding, 0);
        overscroll-behavior: none;
        margin: var(--qa-workspace-custom-panel-section-margin, unset);
    }

    .grid-section--fill .panel-section {
        margin: 0 var(--qa-workspace-padding) 0 0;
    }

    ${(0,r.rR)(i.iv`
        :host(:not([is-small-app-frame])) .panel-section {
            overflow: hidden;
        }
    `)}

    .panel-content {
        padding: 0 0 var(--qa-workspace-custom-panel-content-padding-block-end, ${(0,r.hO)(115)}) ${(0,r.hO)(4)};
        height: var(--qa-workspace-custom-panel-content-height, 100%);
        overflow: var(--qa-workspace-custom-panel-content-overflow);
        overscroll-behavior: none;
    }

    :host(:not([is-small-app-frame])) .panel-content {
        padding: 0;
    }

    ${(0,r.rR)(i.iv`
        :host(:not([is-small-app-frame])) .panel-content {
            height: auto;
            padding: 0;
            overflow-x: hidden;
            overflow-y: auto;
        }
    `)}

    .export-section {
        grid-area: ${h};
        width: 100%;
        background-color: var(--qa-background-color-primary);
        position: fixed;
        inset-block-end: 0;
        inset-inline-start: 0;
        z-index: 1;
        border-block-start: var(--spectrum-global-dimension-size-10) solid var(--qa-color-gray-200);
        padding: var(--spectrum-global-dimension-size-200) 0;
        display: var(--qa-workspace-custom-export-panel-display);
    }

    .grid-section--fill .export-section {
        margin: 0 var(--qa-workspace-padding) var(--qa-workspace-padding) 0;
    }

    :host(:not([is-small-app-frame])) .export-section {
        position: relative;
        width: auto;
        border: none;
        padding: var(--qa-workspace-custom-export-section-padding, 0);
    }

    .grid-section slot[name="${c}"]::slotted(*) {
        padding: 0 ${p};
    }

    :host(:not([is-small-app-frame])) .grid-section slot[name="${c}"]::slotted(*) {
        padding: var(--qa-export-padding, 0);
    }

    .title-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: ${v} ${(0,r.hO)(16)};
    }

    .beta-label {
        font-weight: bold;
        font-size: ${(0,r.hO)(12)};
        color: var(--spectrum-global-color-static-white);
        background-color: var(--spectrum-global-color-indigo-500);
        padding: ${(0,r.hO)(2)} ${(0,r.hO)(6)};
        border-radius: ${(0,r.hO)(5)};
        white-space: pre;
        display: inline;
    }

    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`},576231:(t,e,o)=>{o.d(e,{hf:()=>et,Eo:()=>it,FG:()=>ot});var i=o(944440),r=o(790176),a=o(903512),s=o(697038),n=o(148868),c=o(859526),l=o(692484),d=o(433318),u=o(941190),h=o(228532),p=o(423079),m=o(743182),g=o(484866),v=o(429950),b=o(543517),f=o(336964),k=o(270207),y=o(553648);const x=a.iv`
    * {
        box-sizing: border-box;
    }
    :host {
        --mask-color: rgba(var(--spectrum-global-color-static-white-rgb), 0.75);
        --trim-bg-color: rgb(var(--spectrum-global-color-static-black-rgb));
        --trackpin-border: ${f.p0}px;
        --trackpin-width: ${f.LX}px;
        /* stylelint-disable unit-disallowed-list -- no spectrum var available */
        --trim-handle-width: 16px;
        --x-add-scene-button-width: 102px;
        --x-add-scene-button-height: 56px;
        --x-add-scene-button-width-mobile: 43px;
        --x-fixed-scene-width: 90px;
        --x-fixed-scene-height: var(--qa-x-fixed-scene-height, 56px);
        --scene-height: 64px;
        --multi-scene-height: 144px;
        --scene-container-padding-start: 16px;
        --scene-container-padding-end: 72px;
        --selected-scene-inline-border-width: 1px;
        --context-menu-left-position: -100px;
        --scene-time-position: 6px;
        --trackpin-height: 80px;
        --trackpin-overhang: 2px;
        --trackpin-horizontal-adjustment: 3px;
        --extra-trim-handle-hit-area: 0px;
        --extra-trackpin-hit-area: 0px;
        /* stylelint-enable */
    }

    ${(0,y.SV)(a.iv`
        :host {
            /* stylelint-disable unit-disallowed-list -- no spectrum var available */
            --trackpin-height: 74px;
            --trim-handle-width: ${f.xW+f.Bl}px;
            --extra-trim-handle-hit-area: ${f.Bl}px;
            --extra-trackpin-hit-area: ${f.CP}px;
            /* stylelint-enable */
        }
    `)}

    :host([mode="1"]) {
        block-size: var(--multi-scene-height);
        padding-inline: var(--spectrum-spacing-500);
    }

    .vqa-scenes-container {
        display: flex;
        inline-size: 100%;
        align-items: center;
        block-size: 100%;
    }

    .vqa-scenes-container.multi-scene {
        padding-block-start: var(--scene-container-padding-start);
        padding-block-end: var(--scene-container-padding-end);
        block-size: auto;
        overflow-x: auto;
    }

    .vqa-scenes {
        display: flex;
        inline-size: 100%;
        block-size: 100%;
    }
    .vqa-scenes.multi-scene {
        width: auto;
        align-items: center;
    }

    .vqa-scenes.multi-scene .scene__sorting-item:not(:last-child):not(:first-child) {
        padding-inline-start: var(--spectrum-spacing-200);
    }

    .scene {
        position: absolute;
        height: var(--scene-height);
        width: 100%;
        flex-shrink: 0;
        margin: 0 var(--trim-handle-width);
        width: calc(100% - (2 * var(--trim-handle-width)));
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .scene.disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    ${(0,y.SV)(a.iv`
        .scene {
            height: var(--qa-mobile-scene-height, ${(0,y.hO)(56)});
        }
    `)}

    .scene.multi {
    }

    .scene.scene--fixed {
        inline-size: var(--x-fixed-scene-width);
        block-size: var(--x-fixed-scene-height);
        position: relative;
        background: none;
        cursor: pointer;
        border-radius: var(--spectrum-global-dimension-static-size-100);
        margin: 0;
    }

    .scene.scene--fixed .scene-single-thumbnail {
        position: relative;
    }

    .scene__context-menu {
        position: absolute;
        height: auto;
        width: auto;
        inset-block-start: var(--x-fixed-scene-height);
        margin-block-start: var(--spectrum-spacing-100);
    }
    .scene__context-menu_left {
        inset-inline-start: var(--context-menu-left-position);
    }
    .scene-trim {
        position: relative;
        width: 100%;
        inset-inline-start: 0;
        cursor: pointer;
        z-index: 1;
        inset-block-start: 0;
        height: 100%;
        border-radius: var(--spectrum-global-dimension-size-100);
        background-repeat: repeat-x;
    }

    .scene-trim.no-trim {
        box-shadow: none;
        border: var(--spectrum-global-dimension-static-size-10) solid transparent;
        display: none;
    }
    .scene-trim__left {
        position: absolute;
        inset-block-start: 0;
        width: var(--trim-handle-width);
        transform: translate(-100%);
        height: 100%;
    }

    .scene-trim__trackpin {
        position: absolute;
        inset-block-start: calc(0% - var(--spectrum-global-dimension-size-150));
        z-index: 2;
        margin-inline: calc(0% - var(--extra-trackpin-hit-area) - var(--trackpin-horizontal-adjustment));
        padding-inline: var(--extra-trackpin-hit-area);
        width: fit-content;
        height: calc(100% + var(--spectrum-global-dimension-size-150) + var(--trackpin-overhang));
    }

    .scene-trim__trackpin img {
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
        height: var(--trackpin-height);
    }

    .trackpinGrab {
        cursor: grabbing;
    }

    .scene-single-thumbnail {
        position: absolute;
        height: 100%;
        display: flex;
        width: 100%;
        overflow: hidden;
    }

    .left-rounded-border {
        border-radius: var(--spectrum-spacing-100) 0 0 var(--spectrum-spacing-100);
    }

    .merge-scene-thumbnail {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
        border-radius: var(--spectrum-spacing-100);
        background-color: var(--spectrum-gray-200);
    }

    .thumbnail-loading-spinner {
        position: absolute;
    }

    .scene-selected::before {
        content: "";
        border-radius: var(--spectrum-corner-radius-100);
        border: var(--selected-scene-inline-border-width) solid var(--spectrum-gray-100);
        position: absolute;
        inset: var(--spectrum-spacing-50);
        pointer-events: none;
    }

    .scene-selected::after {
        content: "";
        border-radius: var(--spectrum-spacing-100);
        border: var(--spectrum-border-width-100) solid var(--spectrum-gray-900);
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    .merge-scene-thumbnail img {
        max-width: 100%;
        max-height: 100%;
    }

    .scene-single-thumbnail img {
        width: auto;
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
    }

    .scene-trim-rightmask {
        position: absolute;
        width: 100%;
        inset-inline-start: 100%;
        inset-block-start: 0;
        transform-origin: left center;
        height: 100%;
        transform: scaleX(0) translateX(-100%);
        background-color: var(--mask-color);
        pointer-events: none;
    }
    .scene-trim-leftmask {
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: calc(-1 * var(--extra-trim-handle-hit-area));
        pointer-events: none;
        transform-origin: left center;
        width: 0;
        height: 100%;
        background-color: var(--mask-color);
    }

    .scene-trim__right {
        position: absolute;
        inset-inline-start: 100%;
        inset-block-start: 0;
        display: flex;
        width: var(--trim-handle-width);
        cursor: ew-resize;
        height: 100%;
        -webikt-margin-start: calc(0% - var(--spectrum-global-dimension-size-25));
    }

    .scene-trim__time {
        position: absolute;
        pointer-events: none;
        width: var(--spectrum-global-dimension-max-content, var(--spectrum-alias-max-content));
        min-width: max-content;
        background-color: var(--spectrum-global-color-static-transparent-black-500);
        padding-inline: var(--spectrum-global-dimension-static-size-65);
        border-radius: var(--spectrum-alias-border-radius-regular);
        color: var(--spectrum-global-color-static-white);
        height: var(--spectrum-global-dimension-static-size-250);
        font-size: var(--spectrum-global-dimension-static-size-175);
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .scene-trim__time__position {
        z-index: 3;
        inset-inline-end: var(--spectrum-global-dimension-static-size-65);
        inset-block-start: 50%;
        transform: translateY(-50%);
    }

    .scene__time__position {
        inset-inline-start: var(--scene-time-position);
        inset-block-end: var(--scene-time-position);
    }

    .left-trim-handle-inner {
        background: var(--trim-bg-color);
        display: flex;
        z-index: 2;
        height: 100%;
        flex-direction: row;
        align-items: center;
        border-radius: var(--spectrum-global-dimension-static-size-65) 0 0
            var(--spectrum-global-dimension-static-size-65);
        justify-content: center;
        gap: var(--spectrum-global-dimension-static-size-25);
        margin-inline-start: var(--extra-trim-handle-hit-area);
    }

    .scene-trim__left-handle {
        position: absolute;
        display: block;
        z-index: 2;
        height: 100%;
        width: 100%;
    }

    .scene-trim__left-handle__cursor {
        cursor: ew-resize;
    }

    .trim-handle--hide {
        display: none;
    }

    .right-trim-handle-inner {
        background: var(--trim-bg-color);
        display: flex;
        z-index: 2;
        height: 100%;
        flex-direction: row;
        align-items: center;
        border-radius: 0 var(--spectrum-global-dimension-static-size-65) var(--spectrum-global-dimension-static-size-65)
            0;
        justify-content: center;
        gap: var(--spectrum-global-dimension-static-size-25);
        margin-inline-end: var(--extra-trim-handle-hit-area);
    }

    .scene-trim__right-handle {
        position: absolute;
        display: block;
        z-index: 2;
        height: 100%;
        width: 100%;
    }

    .scene-trim__handle-bar {
        background-color: var(--spectrum-transparent-white-900);
        width: var(--spectrum-global-dimension-size-25);
        height: var(--spectrum-global-dimension-size-300);
        border-radius: var(--spectrum-global-dimension-size-50);
    }

    .sceneBorder {
        inline-size: 100%;
        margin-block: var(--spectrum-global-dimension-static-size-25);
        margin-inline: var(--spectrum-global-dimension-static-size-25);
        border-radius: var(--spectrum-global-dimension-static-size-100);
        box-shadow: 0 0 0 var(--spectrum-global-dimension-static-size-100) var(--trim-bg-color);
    }

    .scene-border__image {
        inline-size: 100%;
        border: var(--spectrum-spacing-50) solid var(--trim-bg-color);
    }

    .disabled .scene-trim__left {
        pointer-events: none;
    }
    .disabled .scene-trim__right {
        pointer-events: none;
    }

    .disabled .scene-trim__left-handle {
        background: var(--spectrum-global-color-gray-200);
    }
    .disabled .scene-trim__right-handle {
        background: var(--spectrum-global-color-gray-200);
    }
    .disabled .sceneBorder {
        box-shadow: 0 0 0 var(--spectrum-global-dimension-static-size-100) var(--spectrum-global-color-gray-200);
    }

    .sceneBorder::after {
        content: "";
        display: flex;
        border: var(--spectrum-global-dimension-static-size-10) solid var(--spectrum-transparent-white-900);
        border-radius: var(--spectrum-global-dimension-static-size-75);
        block-size: calc(100% - var(--spectrum-global-dimension-static-size-25));
    }

    .sceneBorderWrapper {
        display: flex;
        block-size: 100%;
        overflow: hidden;
    }

    .scene-trim__right-masking {
        position: absolute;
        inset-inline-start: calc(-1 * var(--trim-handle-width));
        inset-block-start: 0;
        height: 100%;
        background: var(--mask-color);
        width: 100vw;
        z-index: 1;
    }

    .scene-trim__left-masking {
        position: absolute;
        inset-inline-start: var(--trim-handle-width);
        inset-block-start: 0;
        height: 100%;
        transform: translateX(-100%);
        background: var(--mask-color);
        width: 100vw;
        z-index: 1;
    }

    .scene__sorting-item {
        display: flex;
    }
    .scene__dragged-image {
        position: fixed;
        inline-size: var(--x-fixed-scene-width);
        block-size: var(--x-fixed-scene-height);
        z-index: 10;
    }
    .scene-item__dragged {
        inline-size: var(--x-fixed-scene-width);
        block-size: var(--x-fixed-scene-height);
        background: var(--spectrum-gray-300);
        border-radius: var(--spectrum-spacing-100);
    }
    .scene-item__drop-indicator {
        border-inline-start: var(--spectrum-spacing-50) solid;
        border-color: var(--spectrum-gray-900);
        block-size: var(--x-fixed-scene-height);
        margin-inline-end: var(--spectrum-spacing-100);
    }
    .drop-indicator-start-margin {
        margin-inline-start: var(--spectrum-spacing-100);
    }
    .addSceneFileUpload {
        --mod-drop-zone-padding: 0;
        inset-inline-end: 0;
        position: sticky;
        background: var(--spectrum-gray-50);
        padding: 0 0 0 var(--spectrum-spacing-300);
    }
`;var w=o(815898),_=o(642013),S=o(200128);const A=a.iv`
    :host {
        --mod-drop-zone-padding: 0;
        inset-inline-end: 0;
        position: sticky;
        background: var(--spectrum-gray-50);
        padding-inline-start: var(--spectrum-spacing-300);
    }
    .vqa-scene-add {
        inline-size: var(--x-add-scene-button-width);
        block-size: var(--x-add-scene-button-height);
        background: var(--spectrum-gray-100);
        border: var(--spectrum-spacing-50) dashed var(--spectrum-gray-300);
        font-size: var(--spectrum-global-dimension-static-size-160);
        line-height: var(--spectrum-spacing-300);
        font-weight: bold;
        color: var(--spectrum-gray-700);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: var(--spectrum-global-dimension-static-size-100);
    }
    .vqa-scene-add:hover {
        background: var(--spectrum-gray-300);
        border: var(--spectrum-border-width-200) dashed var(--spectrum-gray-500);
    }
    .add-scene-dropzone {
        background-color: var(--spectrum-alias-background-color-transparent);
    }
    /* Hide native input. */
    input[type="file"] {
        display: none;
    }
`;var C,E=o(112490),z=o(236186),T=o(661088),D=o(797277),$=o(799864),I=o(604927),M=o(749472),q=o(412943),L=o(383188);let F=C=class extends c.j{constructor(){super(...arguments),this.sceneTrackIndex=0,this._totalFileSize=0}static get styles(){return A}_onFileInputChange(){const t=this.fileInput.files;t&&this.handleFiles(t)}_triggerGenericUploadFailureToast(){const t=(0,d.Em)({id:"@hz/quick-actions:shared-ui-generic-upload-failure",defaultMessage:"Upload failed. Please try again. <ahelpx>Learn more.</ahelpx>"}),e=this._intlStore.formatMessage(t,{ahelpx:(0,z.D)(this._intlStore.locale)});this._toastsStore.showError(e)}isFileCountValid(t){if(0===t.length){const t="Error uploading file. No files found.";return this._triggerGenericUploadFailureToast(),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,t,S.Zy.upload),!1}const{maxFileCount:e}=this._quickActionFileUploadConfig;return!(t.length+this.sceneTrackIndex>e)||(this._triggerMaxFileCountUploadFailureToast(),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,"Error uploading, too many files",S.Zy.upload),!1)}_triggerMaxFileCountUploadFailureToast(){const{formatMessage:t,formatNumber:e}=this._intlStore,o=t((0,d.Em)({id:"@hz/quick-actions:shared-max-file-count-failure",defaultMessage:"The maximum number of files we can accept is {count}. Try again with fewer files."}),{count:e(q.fA)});this._toastsStore.showError(o)}async _getExpandedVideoMetadata(t){return(new $.c).fetchMetadata(t)}async _updateAndTriggerAnalytics(t){const{size:e,type:o}=t;if(this._quickActionAnalyticsStore.addFileSizeToUploadedFilesMetadata(e),this._quickActionAnalyticsStore.addMimeTypeAndExtensionToUploadedFilesMetadata(o),o.includes("video")){const e=await this._getExpandedVideoMetadata(t),{codec:o,audioCodec:i,bitrate:r}=e;this._quickActionAnalyticsStore.setAudioCodec(i),this._quickActionAnalyticsStore.setVideoCodec(o),this._quickActionAnalyticsStore.setBitrate(r.toString())}this._quickActionAnalyticsStore.onSelectResource()}_areImageDimensionsValid(t){let e,o,i;const r={width:t.naturalWidth,height:t.naturalHeight};if(this._quickActionAnalyticsStore.addResolutionToUploadedFilesMetadata(r),(0,I.v9)(r)){e=(0,d.Em)({id:"@hz/quick-actions:shared-ui-image-dimensions-too-large",defaultMessage:"Your image dimensions are invalid. Image width and height must be less than {max}px."}),o=this._intlStore.formatMessage(e,{max:I._W});i=`Max image dimensions exceeded. Expected dimensions: ${`${I._W} x ${I._W}`}`}if((0,I.DJ)(r)){e=(0,d.Em)({id:"@hz/quick-actions:shared-ui-image-dimensions-too-small",defaultMessage:"Your image dimensions are invalid. Image width and height must be larger than {min}px."}),o=this._intlStore.formatMessage(e,{min:I.eE});i=`Min image dimensions exceeded. Expected dimensions: ${`${I.eE} x ${I.eE}`}`}if(!e)return{isValid:!0,dimensions:r};const a=[{imageWidth:r.width,imageHeight:r.height}];return this._toastsStore.showError(o),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,i||"",S.Zy.upload,a),{isValid:!1,dimensions:r}}async _isImageValid(t){const e=URL.createObjectURL(t);let o;try{o=await(0,I.po)(e)}catch(o){const i="Unable to validate image. Image cannot be loaded.";this._triggerGenericUploadFailureToast();const r=[o];return this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,i,S.Zy.upload,r),{isValid:!1,file:t,src:e}}const{isValid:i,dimensions:r}=this._areImageDimensionsValid(o);return{isValid:i,element:o,dimensions:r,file:t,src:e}}_areVideoDimensionsValid(t,e,o){let i,r,a;const s={width:t,height:e};if(this._quickActionAnalyticsStore.setNativelySupported(!0),this._quickActionAnalyticsStore.addResolutionToUploadedFilesMetadata(s),this._quickActionAnalyticsStore.setUploadContentDuration(o.toString()),(0,I.Xf)(s)){i=(0,d.Em)({id:"@hz/quick-actions:shared-ui-video-dimensions-too-large",defaultMessage:"Your video dimensions are unsupported. Largest supported size is {maxWidth} x {maxHeight}px."}),r=this._intlStore.formatMessage(i,{maxWidth:I.FL.width,maxHeight:I.FL.height});a=`Max video dimensions exceeded. Expected dimensions: ${`${I.FL.width} x ${I.FL.height}`}`}if((0,I.Fv)(s)){i=(0,d.Em)({id:"@hz/quick-actions:shared-ui-video-dimensions-too-small",defaultMessage:"Your video dimensions are unsupported. Minimum supported size is {minWidth} x {minHeight}px."}),r=this._intlStore.formatMessage(i,{minWidth:I.uz.width,minHeight:I.uz.height});a=`Min video dimensions were not met. Expected dimensions: ${`${I.uz.width} x ${I.uz.height}`}`}if(!i)return{isValid:!0,dimensions:s};const n=[{videoWidth:s.width,videoHeight:s.height}];return this._toastsStore.showError(r),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,a||"",S.Zy.upload,n),{isValid:!1,dimensions:s}}async _loadVideoElement(t){const e=await(0,I.j5)(t);return{width:e.videoWidth,height:e.videoHeight,duration:e.duration,video:e}}async _isVideoValid(t){const e=URL.createObjectURL(t);let o,i,r,a;try{const t=await this._loadVideoElement(e);i=t.width,r=t.height,a=t.duration,o=t.video}catch(o){const i="Unable to validate video. Video cannot be loaded.";this._triggerGenericUploadFailureToast(),this._quickActionAnalyticsStore.setNativelySupported(!1);const r=[o];return this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,i,S.Zy.upload,r),{isValid:!1,file:t,src:e}}if(i<=0||r<=0){const o="This video is not supported. Please try another format.";return this._triggerGenericUploadFailureToast(),this._quickActionAnalyticsStore.setNativelySupported(!1),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,o,S.Zy.upload),{isValid:!1,file:t,src:e}}const{isValid:s,dimensions:n}=this._areVideoDimensionsValid(i,r,a);return{isValid:s,element:o,file:t,src:e,dimensions:n}}async isFileValid(t){const{acceptedImportTypes:e}=this._quickActionFileUploadConfig,{size:o,type:i}=t;if(await this._updateAndTriggerAnalytics(t),""!==i&&!(0,I.$Y)(i,e)&&!L.q.bypassVideoImportChecks.enabled){if(1===e.length){const o=(0,d.Em)({id:"@hz/quick-actions:shared-ui-invalid-file-extension",defaultMessage:"File type not supported. Please use {extension} only."}),r=this._intlStore.formatMessage(o,{extension:M.lp[e[0]]});this._toastsStore.showError(r);const a=`Unsupported file type: ${t.type}.`,s=[{fileType:i}];this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,a,S.Zy.upload,s)}else{const t="File type not supported.",e=this._intlStore.formatMessage({id:"@hz/quick-actions:shared-ui-invalid-file-type",defaultMessage:"File type not supported."});this._toastsStore.showError(e),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,t,S.Zy.upload)}return{isValid:!1,file:t}}if(0===o){const e=(0,d.Em)({id:"@hz/quick-actions:shared-ui-empty-file-warning",defaultMessage:"This file is empty. Please upload a file with content."}),o=this._intlStore.formatMessage(e);return this._toastsStore.showError(o),this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,e.defaultMessage,S.Zy.upload),{isValid:!1,file:t}}const{maxKBFileSize:r,uploadUIContent:a,maxFileSizeInFriendlyUnit:s,checkTotalFileSize:n}=this._quickActionFileUploadConfig,{fileSizeLimitExceededMessage:c}=a;if(this._totalFileSize=n?this._totalFileSize+o:o,(0,I.EO)(this._totalFileSize,r)){const e=this._intlStore.formatMessage(c,{maxFileSize:s});this._toastsStore.showError(e);const i=r/1024,a=`Uploaded file is too large. User file size: ${o/1048576}MB. Expected file size: ${i}MB.`,n=[{maxFileSize:i},{fileSize:this._totalFileSize}];return this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,a,S.Zy.upload,n),this._totalFileSize=0,{isValid:!1,file:t}}return(0,I.DW)(t.type)?this._isImageValid(t):(0,I.yh)(t.type)?this._isVideoValid(t):{isValid:!0,file:t}}async handleFiles(t){if(!this.isFileCountValid(t))return void(this.fileInput.value="");this._quickActionPerformance.begin(T.U.fileValidated);const e=[];for(const o of t)e.push(this.isFileValid(o));const o=await Promise.all(e);this._quickActionPerformance.end(T.U.fileValidated);if(o.filter((t=>!t.isValid)).length>0){if(this.fileInput.value="",this.inputFileSrc){const t="Some of the selected files coudn't be uploaded";this._logger.warn(t)}return}const i=new CustomEvent("qa-add-new-scene",{bubbles:!0,cancelable:!0,composed:!0,detail:{fileData:o,isNewScene:!0,sceneIndex:this.sceneTrackIndex}});this._quickActionPerformance.begin(D.O.assetUploaded),this.dispatchEvent(i),this.fileInput.value=""}_handleBrowseClick(){if(this._quickActionAnalyticsStore.setUploadMethod(S.gc.browseDevice),!this.fileInput){const t="File input was not found.";return this._triggerGenericUploadFailureToast(),void this._quickActionErrorStore.triggerLoggerAndErrorAnalytics(E.i.warn,t,S.Zy.upload)}this.fileInput.click()}render(){const{acceptedImportTypes:t,maxFileCount:e}=this._quickActionFileUploadConfig,o=t.flatMap((t=>M.lp[t]));return a.dy` <sp-dropzone class="add-scene-dropzone" @click=${this._handleBrowseClick}
            ><section class="vqa-scene-add">
                ${this._intlStore.formatMessage({id:"@hz/quick-actions:add-media-btn",defaultMessage:"+ Add Media"})}
            </section>
            <input
                id="file-input"
                @change=${this._onFileInputChange}
                ?multiple=${e>1}
                type="file"
                accept=${o.join(",")}
            />
        </sp-dropzone>`}};var O;F.TAG_NAME="qa-add-scene-file-upload",(0,i.__decorate)([(0,s.Cb)({attribute:"input-file-src",type:String})],F.prototype,"inputFileSrc",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],F.prototype,"sceneTrackIndex",void 0),(0,i.__decorate)([(0,s.IO)("#file-input")],F.prototype,"fileInput",void 0),(0,i.__decorate)([(0,l.w)("QuickActionFileUploadConfig")],F.prototype,"_quickActionFileUploadConfig",void 0),(0,i.__decorate)([(0,l.w)("QuickActionErrorStore")],F.prototype,"_quickActionErrorStore",void 0),(0,i.__decorate)([(0,l.w)("IntlStore")],F.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,l.w)("ToastsStore")],F.prototype,"_toastsStore",void 0),(0,i.__decorate)([(0,l.w)("Logger")],F.prototype,"_logger",void 0),(0,i.__decorate)([(0,l.w)("QuickActionPerformance")],F.prototype,"_quickActionPerformance",void 0),(0,i.__decorate)([(0,l.w)("QuickActionAnalyticsStore")],F.prototype,"_quickActionAnalyticsStore",void 0),F=C=(0,i.__decorate)([(0,s.Mo)(C.TAG_NAME)],F);let P=O=class extends a.oi{constructor(){super(...arguments),this.isDragModeEnabled=!1}render(){return this.isDragModeEnabled?a.dy`<slot name="being-dragged"></slot>`:a.dy`<slot name="not-being-dragged"></slot>`}};P.TAG_NAME="qa-scene-sorting-item",(0,i.__decorate)([(0,s.Cb)({type:Boolean,attribute:"is-drag-mode-enabled"})],P.prototype,"isDragModeEnabled",void 0),P=O=(0,i.__decorate)([(0,s.Mo)(O.TAG_NAME)],P);class R{constructor(t){this._videoContextualThumbnailsCachingEnabled=t,this.thumbnailsMap={},this.videoThumbnailsToDisplay=[],this.totalThumbnailsCount=0,this.totalThumbnailsPresent=0,this._videoThumbnailsMap={},this._frameRate=m.jd,this.onThumbnailsReceived=t=>{const e=t.dataUrl,o=Math.ceil(t.sceneFrameTime.value/this.thumbnailsStep.value)*this.thumbnailsStep.value;this.thumbnailsMap[o]=e,this.updateStoredVideoThumbnails(),this._videoThumbnailsMap[o]=e,this.totalThumbnailsPresent++},this.onThumbnailsGenerationDone=()=>{this.thumbnailsMap=this._videoThumbnailsMap,this.updateStoredVideoThumbnails(),this._videoThumbnailsMap={}},this._frameRate=m.jd,this.thumbnailsStep=this._frameRate}updateStoredVideoThumbnails(){const t=Object.keys(this.thumbnailsMap).map((t=>Number(t))).sort(((t,e)=>t-e));let e=0;this.videoThumbnailsToDisplay=[];for(let o=0;o<this.totalThumbnailsCount;o++){const i=m.JP.multiply(this.thumbnailsStep,o);let r=this.thumbnailsMap[i.value];if(void 0===r&&t.length>0){for(;Math.abs(t[e]-i.value)>Math.abs(t[e+1]-i.value);)e++;r=this.thumbnailsMap[t[e]]}this.videoThumbnailsToDisplay.push(r??"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")}}clearThumbnailMap(){this.thumbnailsMap={},this._videoThumbnailsMap={}}revokeStoredThumbnailUrls(){this._videoContextualThumbnailsCachingEnabled||Object.values(this.thumbnailsMap).forEach((t=>URL.revokeObjectURL(t)))}}var B,U=o(256162);let V=B=class extends c.j{constructor(){super(),this.mode=0,this.trimEnabled=!1,this.showTrackpin=!0,this.showContextualMenu=!1,this.sceneElementHasNonZeroOffsetWidth=!1,this.isPlayingStateForBitmap=!1,this.imageCurrentTime=m.jd,this.scenelineData=[],this._currentFrameTime=m.jd,this._scenelineFrameRate=g.H7,this._totalFrameTime=m.jd,this._currentVideoFrameTime=m.jd,this._totalVideoDuration=m.jd,this._selectedElements=[],this._thumbnailsUrl=new Map,this._sceneThumbnailUrl=new Map,this._trimSceneID="",this._trimSceneDuration=m.jd,this._sceneDragStart=!1,this._currentActivatedDropZoneIndicator=-1,this._assetInProgressElements=[],this._tickerTextDuringDrag=void 0,this._hasThumbnailReloadTriggeredWithLowResolutionProxy=!1,this._hasThumbnailReloadTriggeredWithPoster=!1,this._grabbingCursor=!1,this._thumbnailTimestamps=new Map,this._thumbnailRequested=!1,this._dragOffsetX=0,this._seekDragState=-1,this._trimDragState=2,this._offsetWidthX=0,this._offsetLeftX=0,this._trimOffsetWidth=0,this._maxContainerWidth=0,this._offsetRightX=0,this._computedDragLeft=0,this._computedDragWidth=0,this._milliSecondsPerWidth=1,this._totalMillisecondsPerTotalWidth=1,this._minimumWidth=1,this._originalSceneDuration={value:-1,scale:0},this._previousSceneOffset={value:0,scale:0},this._requestAnimationFrameID=0,this._pointerDownXPosition=0,this._pointerDownYPosition=0,this._trackingTrimPerf=!1,this.observerCallback=()=>{this.sceneElementHasNonZeroOffsetWidth=Boolean(this.firstSceneHTMLElement?.offsetWidth)},this._onVideoAssetInProgressElementsChange=()=>{this._assetInProgressElements=(0,b.ZN)(this._videoDecorationsStore.assetInProgressElements)},this.makeDebouncedUpdate=(0,U.Z)((()=>{this.requestUpdate()}),300),this._onThumbnailsReceived=t=>{const e=t.payload;this._thumbnailsGenerator.onThumbnailsReceived(e),this._thumbnailsUrl.set(e.id,this._thumbnailsGenerator.videoThumbnailsToDisplay),this.requestUpdate()},this._restrictExternalMoveEvents=t=>{t.preventDefault()},this._sendAnalyticsOnce=(()=>{const t={[S.B_.trimQuickActionResultByHandle]:!1};return e=>{if(!t[e]&&e===S.B_.trimQuickActionResultByHandle)this._quickActionAnalyticsStore.onTrimVideo(S.e.trimHandles),t[e]=!0}})(),this._thumbnailsGenerator=new R(L.q.videoContextualThumbnailsCaching.enabled)}static get styles(){return x}get trackPinWidth(){return this.showTrackpin?2*f.p0+f.LX:0}get minDuration(){return m.JP.getFrameTime(f.RT/1e3,this._scenelineFrameRate)}get selectedElement(){return this._selectedElements[0]}get firstSceneHTMLElement(){return this._sceneEle[0]}get activeScene(){return this._scenelineQuickActionStore.activeScene??""}get _activeSceneIndex(){return this.activeScene&&void 0!==this.scenelineData?this.scenelineData.findIndex((t=>t.id===this.activeScene)):0}_isTrimHandleDragDisabled(t){return!this._quickActionResourceImportStore.isResourceLoaded&&!this.selectedElement||this.selectedElement?.elementType===k.Hd.IMAGE&&4===t}_isVideo(t){return t?.elementType===k.Hd.VIDEO}async contextsLoaded(){await Promise.all([this._scenelineQuickActionStore.load(),this._quickActionResourceImportStore.load()]),this.reaction((()=>this._scenelineQuickActionStore.selectedElements),this._onSceneElementChange.bind(this)),this._onCurrentTimeStateChange(),this.reaction((()=>this._scenelineQuickActionStore.playhead),this._onCurrentTimeStateChange.bind(this)),this._onCurrentVideoFrameTimeStateChange(),this.reaction((()=>this._videoDecorationsStore.playhead),this._onCurrentVideoFrameTimeStateChange.bind(this)),this._onScenelineFrameRateChange(),this.reaction((()=>this._scenelineQuickActionStore.frameRate),this._onScenelineFrameRateChange.bind(this)),this._onTotalTimeStateChange(),this.reaction((()=>this._scenelineQuickActionStore.duration),this._onTotalTimeStateChange.bind(this)),this._onTotalVideoDurationStateChange(),this.reaction((()=>this._videoDecorationsStore.duration),this._onTotalVideoDurationStateChange.bind(this)),this._onSceneDataChange(),this.reaction((()=>this._scenelineQuickActionStore.scenelineData),this._onSceneDataChange.bind(this)),this.reaction((()=>this._contextualThumbnailsStore.scenelineThumbnails),this._onSceneThumbnailsUpdated.bind(this)),this._onVideoAssetInProgressElementsChange(),this.reaction((()=>this._videoDecorationsStore.assetInProgressElements),this._onVideoAssetInProgressElementsChange.bind(this)),this.reaction((()=>this._scenelineQuickActionStore.isPosterAvailable),this._triggerThumbnailReloadWithPoster.bind(this)),this.reaction((()=>this._scenelineQuickActionStore.isLowResolutionProxyAvailable),this._triggerThumbnailReloadWithLowResolutionProxy.bind(this))}connectedCallback(){super.connectedCallback(),this._resizeEventListener=this._onWindowResize.bind(this),window.addEventListener("resize",this._resizeEventListener,!1),this.addEventListener("touchstart",this._restrictExternalMoveEvents)}disconnectedCallback(){super.disconnectedCallback(),this.updateComplete.then((()=>{this._contextualThumbnailsStore?.unsubscribeContextualThumbnails(this._onThumbnailsReceived),this._contextualThumbnailsStore.unsubscribeOnContextualTrackThumbnailsGenerationDone(this._thumbnailsGenerator.onThumbnailsGenerationDone),this.makeDebouncedUpdate()})),window.removeEventListener("resize",this._resizeEventListener,!1),this.removeEventListener("touchstart",this._restrictExternalMoveEvents),this.revokeStoredThumbnailUrls()}updated(t){let e=!1,o=!1,i=!1,r=!1;for(const a of t.keys())"_currentFrameTime"===a||"_totalFrameTime"===a||"_currentVideoFrameTime"===a||"_totalVideoDuration"===a||"imageCurrentTime"===a?e=!0:"_selectedElements"===a&&(this._syncSceneTrimHandles(this.selectedElement),e=!0),"mode"===a&&(this._syncSceneTrimHandles(this.selectedElement),o=!0),"scenelineData"===a&&(r=!0,this._updateSceneThumbnailsSubscription()),"sceneElementHasNonZeroOffsetWidth"===a&&(i=!0,this._syncSceneTrimHandles(this.selectedElement)),"_hasThumbnailReloadTriggeredWithLowResolutionProxy"===a&&(o=!0),"_hasThumbnailReloadTriggeredWithPoster"===a&&(o=!0);r&&!this._intersectionObserver&&this._setUpScenelineIntersectionObserver(),i&&this.sceneElementHasNonZeroOffsetWidth&&this._scenelineQuickActionStore.forceScenelineThumbnailRegeneration&&(this._thumbnailRequested=!1,this.revokeStoredThumbnailUrls(),this._thumbnailsUrl.clear(),this._sceneThumbnailUrl.clear(),this._thumbnailTimestamps.clear()),!o&&this._thumbnailRequested||(window.cancelAnimationFrame(this._requestAnimationFrameID),this._requestAnimationFrameID=window.requestAnimationFrame((()=>this._triggerThumbnailGeneration()))),e&&this._updateTrackPin()}_setUpScenelineIntersectionObserver(){const t=this.firstSceneHTMLElement;if(t){const e={threshold:1};this._intersectionObserver=new IntersectionObserver(this.observerCallback,e),this._intersectionObserver.observe(t)}}_updateSceneThumbnailsSubscription(){if(this._quickActionConfig.quickActionId!==_.df.MergeVideos||0===this.mode)return;const t=[];for(const e of this.scenelineData)t.push({id:e.id,timestamps:[m.JP.getFrameTime(0,this._scenelineFrameRate)]});t.length>0&&this._contextualThumbnailsStore.subscribeScenelineThumbnails({thumbnailsSubscription:t})}_onSceneThumbnailsUpdated(t=this._contextualThumbnailsStore.scenelineThumbnails){const e=(0,b.ZN)(t);if(!this.scenelineData.length||void 0===e)return;const o=e.scenelineThumbnailsData;for(const t of this.scenelineData){const e=o[t.id]?.thumbnails??[];e.length>0&&(this._sceneThumbnailUrl=new Map(this._sceneThumbnailUrl.set(t.id,e[0].thumbnailUrl)))}}firstUpdated(){this.updateComplete.then((()=>{this._contextualThumbnailsStore.subscribeContextualThumbnails(this._onThumbnailsReceived),this._contextualThumbnailsStore.subscribeOnContextualTrackThumbnailsGenerationDone(this._thumbnailsGenerator.onThumbnailsGenerationDone),this.makeDebouncedUpdate()}))}revokeStoredThumbnailUrls(){L.q.videoContextualThumbnailsCaching.enabled?this._contextualThumbnailsStore.disableContextualTrackThumbnails():this._thumbnailsGenerator.revokeStoredThumbnailUrls()}_onWindowResize(){this._getMillisecondsPerWidth(),window.cancelAnimationFrame(this._requestAnimationFrameID),this._updateTrackPin(),this._requestAnimationFrameID=window.requestAnimationFrame((()=>this._triggerThumbnailGeneration())),this._updateLeftTrimMask(this.selectedElement)}_updateLeftTrimMask(t){if(t?.mediaInfo){let e=t.mediaInfo.mediaDuration;this._isVideo(t)||(e=m.JP.getFrameTime(f.s3,this._scenelineFrameRate));let o=this._isVideo(t)&&t.mediaInfo?.mediaInTime?t.mediaInfo?.mediaInTime?.value*e.scale/(t.mediaInfo?.mediaInTime?.scale*e.value):0;o=Math.max(0,o);let i=this._maxContainerWidth*o;this._uiStateStore.isMobileScale&&(i+=f.xW+f.qz),this._sceneTrimLeftMaskEle.style.width=i/this._maxContainerWidth*100+"%"}}_onSceneElementChange(t=this._scenelineQuickActionStore.selectedElements){if(this._selectedElements=(0,b.ZN)(t),0===this.mode&&this.selectedElement){this._trimSceneID!==this.selectedElement.id&&(this._trimSceneID=this.selectedElement.id);const t=this.selectedElement.mediaInfo?.mediaDuration;t&&!m.JP.isEqual(this._trimSceneDuration,t)&&(this._trimSceneDuration=t)}}_onScenelineFrameRateChange(t=this._scenelineQuickActionStore.frameRate){this._scenelineFrameRate=t||g.H7}_syncSceneTrimHandles(t){if(void 0!==this._sceneTrimEle&&this._sceneTrimRightMaskEle&&this._sceneTrimLeftMaskEle&&this.firstSceneHTMLElement&&t?.mediaInfo&&2===this._trimDragState){let e=t.mediaInfo.mediaDuration;this._isVideo(t)||(e=m.JP.getFrameTime(f.s3,this._scenelineFrameRate));const o=t.duration;let i=this._isVideo(t)&&t.mediaInfo?.mediaInTime?t.mediaInfo?.mediaInTime?.value*e.scale/(t.mediaInfo?.mediaInTime?.scale*e.value):0;i=Math.max(0,i);let r=o?.value*e.scale/(o?.scale*e.value);if(this._minimumWidth=this._computeMinWidth(),this._maxContainerWidth=this.firstSceneHTMLElement?.offsetWidth,m.JP.isEqual(e,t.duration)&&!this._maxContainerWidth)this._maxContainerWidth=this._minimumWidth;else if(!this._maxContainerWidth)return;const a=this._minimumWidth/this._maxContainerWidth;r=Math.max(a,r),r=Math.min(1,r),this._sceneTrimEle.style.left=100*i+"%",this._sceneTrimEle.style.width=100*r+"%",this._updateLeftTrimMask(t),this._sceneTrimRightMaskEle.style.transform=`scaleX(${1-(i+r)}) translateX(-100%)`,this._updateTrackPin()}}_computeMinWidth(){return this._getTotalMillisecondsPerTotalWidth(),0===this._totalMillisecondsPerTotalWidth?this.trackPinWidth:Math.round(f.RT/this._totalMillisecondsPerTotalWidth)}_getTotalMillisecondsPerTotalWidth(){if(void 0===this.firstSceneHTMLElement)return this._totalMillisecondsPerTotalWidth;const t=this.firstSceneHTMLElement?.offsetWidth,e={...this.selectedElement},o=this._isVideo(e)?e.mediaInfo?.mediaDuration:m.JP.getFrameTime(f.s3,this._scenelineFrameRate);if(o&&t){const e=m.JP.convertToMilliseconds(o);this._totalMillisecondsPerTotalWidth=e/t}return this._totalMillisecondsPerTotalWidth}_getMillisecondsPerWidth(){if(void 0===this.firstSceneHTMLElement||void 0===this._sceneTrackPinEle)return this._milliSecondsPerWidth;const t=this._sceneTrimEle.offsetWidth-this.trackPinWidth;let e=this._totalFrameTime;this._quickActionConfig.quickActionId===_.df.MergeVideos&&0===this.mode&&(e=this.scenelineData[this._activeSceneIndex].duration);const o=m.JP.convertToMilliseconds(e);return this._milliSecondsPerWidth=o/t,this._milliSecondsPerWidth}_triggerThumbnailGeneration(){if(void 0===this.selectedElement||1===this.mode)return;const t=this.selectedElement,e=t?.id;if(void 0===e)return;const o=this._getThumbnailParameters(t);if(void 0===o)return;const i=o.count;this._thumbnailsGenerator.totalThumbnailsCount=i,this._thumbnailsGenerator.thumbnailsStep=o.step;const r=this._getThumbnailTimestamps(i,o.step);if(!r.length)return;this._thumbnailTimestamps.set(e,r);const a=new Array(i).fill("");this._thumbnailsUrl.set(e,a),this._thumbnailsGenerator.clearThumbnailMap(),this._thumbnailRequested=!0,this._scenelineQuickActionStore.forceScenelineThumbnailRegeneration=!1,this._contextualThumbnailsStore.getContextualThumbnails({thumbnailHeight:o.height,thumbnailWidth:o.width,id:e,timestamps:r})}_getElementDimension(t,e){return t.mediaInfo?.dimension||{height:e,width:f.bZ}}_getThumbnailParameters(t){if(!this.firstSceneHTMLElement||!this.firstSceneHTMLElement?.offsetWidth)return;const e=t?.mediaInfo?.mediaDuration;if(!e)return;let o=f.bZ,i=0;const r=this._sceneTrimEle?.offsetHeight||f.rT,a=this._getElementDimension(t,r);let s=this._scenelineFrameRate;if(a){o=r/a.height*a.width;const t=this._scenesContainerEle?.offsetWidth-f.jx-f.xW;i=Math.ceil(t/o),s=m.JP.divide(e,i)}return{count:i,step:s,width:o,height:r}}_getThumbnailTimestamps(t,e){const o=[];for(let i=0;i<=t;i++){const t=m.JP.multiply(e,i);o.push(t)}return o}_updateTrackPin(){if(1!==this._seekDragState&&0!==this._seekDragState&&this.showTrackpin&&this._sceneTrackPinEle){const t=this._computeTrackPinLeftPosition();this._sceneTrackPinEle.style.left=`${t}px`}}_renderThumbnail(t,e=!1){const o=t.elements;return void 0===o?a.Ld:0===this.mode?this._scenelineQuickActionStore.videoIsTransparent?this._renderEmptyThumbsForTransparentVideo():o.length?this._renderContextualTrackThumbs(o):a.Ld:void 0===t?a.Ld:this._renderSceneThumbs(t,o,e)}_renderEmptyThumbsForTransparentVideo(){return a.dy` <div class="scene-single-thumbnail">
            <slot name="scene-waveform"></slot>
        </div>`}_renderContextualTrackThumbs(t){const e=t[0].id,o=this._thumbnailsUrl.get(e);if(void 0===o)return a.Ld;const i={"background-image":`url("${o?.[0]}")`,"background-repeat":"repeat-x","background-size":"contain"};return this._isVideo(t[0])?a.dy` <div class="scene-single-thumbnail">
                  ${(0,u.r)(o,(t=>t?a.dy` <img src=${t} alt="" draggable="false" />`:a.Ld))}
                  <slot name="scene-waveform"></slot>
              </div>`:a.dy`<div
                  class=${(0,h.$)({"scene-single-thumbnail":!0,"left-rounded-border":!0})}
                  style=${(0,v.V)(i)}
              ></div>`}_renderSceneThumbs(t,e,o){const i=e[0]?.id??"",r=this._assetInProgressElements.find((t=>t.id===i)),s=r?.isUnsupportedMedia&&(r?.isLoadInProgress||r?.isUploadInProgress),n=this._sceneThumbnailUrl.get(t.id)||"";return void 0===t?a.Ld:a.dy` <div
            class=${(0,h.$)({"merge-scene-thumbnail":!0,"scene-selected":o})}
        >
            <div class="scene-trim__time scene__time__position">${this._getTimeTicker({element:e[0]})}</div>
            <img src=${n} alt="" draggable="false" />
            ${s?a.dy`<sp-progress-circle
                      class="thumbnail-loading-spinner"
                      label="upload-progress"
                      aria-label="upload-progress"
                      size="s"
                      indeterminate
                  ></sp-progress-circle>`:a.Ld}
            <slot name="scene-waveform"></slot>
        </div>`}_onSceneDataChange(t=this._scenelineQuickActionStore.scenelineData){this.scenelineData=(0,b.ZN)(t)??[],this._trackingTrimPerf&&(this._quickActionPerformance.end(D.O.canvasFirstFrame,{noError:!0}),this._trackingTrimPerf=!1)}_triggerThumbnailReloadWithPoster(){this._scenelineQuickActionStore.isPosterAvailable?this._hasThumbnailReloadTriggeredWithPoster||(this._thumbnailsUrl.clear(),this._thumbnailTimestamps.clear(),this._thumbnailRequested=!1,this._hasThumbnailReloadTriggeredWithPoster=!0):this._hasThumbnailReloadTriggeredWithPoster=!1}_triggerThumbnailReloadWithLowResolutionProxy(){this._scenelineQuickActionStore.isLowResolutionProxyAvailable?this._hasThumbnailReloadTriggeredWithLowResolutionProxy||(this._thumbnailsUrl.clear(),this._thumbnailTimestamps.clear(),this._thumbnailRequested=!1,this._hasThumbnailReloadTriggeredWithLowResolutionProxy=!0):this._hasThumbnailReloadTriggeredWithLowResolutionProxy=!1}_renderDropIndicator(t,e=!1){return t===this._currentActivatedDropZoneIndicator?a.dy`<div
                  slot="being-dragged"
                  class="scene-item__drop-indicator ${(0,h.$)({"drop-indicator-start-margin":e})}"
              ></div>`:a.Ld}_renderDraggedImage(t,e){return e?a.dy`<div class="scene__dragged-image" slot="being-dragged">
                  ${this._renderThumbnail(t,e)}
              </div>`:a.Ld}_renderDraggedItem(t){return t?a.dy`<div slot="being-dragged" class="scene-item__dragged"></div>`:a.Ld}_renderSceneTemplate(){if(!this.scenelineData?.length)return a.Ld;let t=this.scenelineData;const e=t.length-1;return 0===this.mode&&(t=[this.scenelineData[this._activeSceneIndex]]),a.dy`
            ${(0,u.r)(t,(t=>t?t.id:"none"),((t,o)=>{if(!t)return a.Ld;const i=o===this._activeSceneIndex,r={scene:!0,"scene--fixed":!this.trimEnabled&&1===this.mode,disabled:this._scenelineQuickActionStore.isDisabled},s={"scene__context-menu":!0,"scene__context-menu_left":0!==o},c=!i&&this._sceneDragStart?"being-dragged":"not-being-dragged";return 0===this.mode?a.dy`<article class=${(0,h.$)(r)}>
                              ${this._renderThumbnail(t)} ${this._renderTrimTemplate(t)}
                          </article>`:a.dy`<qa-scene-sorting-item
                              class="scene__sorting-item"
                              ?is-drag-mode-enabled=${this._sceneDragStart}
                              @pointerdown=${t=>this._selectScene(t,o)}
                          >
                              ${this._renderDropIndicator(o,0===o)}
                              <article slot=${c} class=${(0,h.$)(r)}>
                                  ${this._renderThumbnail(t,i)} ${this._renderTrimTemplate(t)}
                                  ${(0,n.g)(o===this._activeSceneIndex&&this.showContextualMenu&&!this._scenelineQuickActionStore.isPlaying&&!this._sceneDragStart,(()=>a.dy`<section class=${(0,h.$)(s)}>
                                          <slot name="contextmenu"></slot>
                                      </section>`))}
                              </article>
                              ${this._renderDraggedItem(i)}
                              ${o===e&&this._renderDropIndicator(o+1,!0)}
                              ${this._renderDraggedImage(t,i)}
                          </qa-scene-sorting-item> `}))}
        `}_setTrackPinCurrentTimeFromWidth(t){const e=(0,w.a1)(t,this._scenelineFrameRate,this._getMillisecondsPerWidth());this._quickActionConfig.quickActionId===_.df.MergeVideos&&0===this.mode?this._isVideo(this.selectedElement)?this._videoDecorationsStore.seek({seekTime:e}):this.dispatchEvent(new CustomEvent("qa-update-image-current-time",{bubbles:!0,composed:!0,detail:{imageCurrentTime:e}})):this._scenelineQuickActionStore.seek(e)}_trimSceneElement(t,e){this._scenelineQuickActionStore.trimSelectedElement({...t,phase:e})}_trimScene(t,e){this._scenelineQuickActionStore.trimScene({element:t.element,trimActionType:t.trimActionType,phase:e})}_handleRightClick(t){t.preventDefault(),t.stopPropagation()}_handleDragStart(t,e){if(t.preventDefault(),this._isTrimHandleDragDisabled(e))return;this.addEventListener("touchmove",this._restrictExternalMoveEvents),this._dragOffsetX=t.clientX,this._offsetWidthX=this._sceneTrimEle?.offsetWidth||0,this._offsetLeftX=this._sceneTrimEle?.offsetLeft||0,this._offsetRightX=this._offsetLeftX+this._offsetWidthX,this._maxContainerWidth=this.firstSceneHTMLElement?.offsetWidth||0,this._trimDragState=0,this._minimumWidth=this._computeMinWidth();const o=4===e?k.wD.left:k.wD.right;let i;i=this._scenelineQuickActionStore.shouldTrimSceneInsteadOfElement?this._sendTrimStartEventForScene(o):this._sendTrimStartEventForSceneElement(o),this.dispatchEvent(new CustomEvent("qa-trim-in-progress",{bubbles:!0,composed:!0,detail:{trimInProgress:!0}})),o!==k.wD.right||this._quickActionConfig.quickActionId!==_.df.MergeVideos||this._isVideo(i)||this.dispatchEvent(new CustomEvent("qa-update-image-current-time",{bubbles:!0,composed:!0,detail:{imageCurrentTime:i.duration}})),document.onpointermove=t=>this._handleDragMove(t,e),document.onpointerup=t=>this._handleDragStop(t,e)}_sendTrimStartEventForScene(t){this._originalSceneDuration.value<0&&(this._originalSceneDuration=(0,b.ZN)(this._scenelineQuickActionStore.duration),this._previousSceneOffset={value:0,scale:this._originalSceneDuration.scale});const e={id:(0,b.ZN)(this._scenelineQuickActionStore.activeScene),elementType:k.Hd.SCENE,offset:this.selectedElement.offset,duration:this.selectedElement.duration};return this._trimScene({element:e,trimActionType:t},k.pM.start),e}_sendTrimStartEventForSceneElement(t){const e={...this.selectedElement};return this._trimSceneElement({element:e,trimActionType:t},k.pM.start),e}_selectScene(t,e){1===this.mode&&(this.dispatchEvent(new CustomEvent("qa-sceneline-select-scene",{bubbles:!0,composed:!0,detail:{index:e}})),this.scenelineData.length>1&&(this._pointerDownXPosition=t.clientX,this._pointerDownYPosition=t.clientY,document.onpointermove=t=>this._handleSceneDragMove(t),document.onpointerup=t=>this._handleSceneDragStop(t)))}_shouldStartDragMode(t,e){return Math.abs(e-this._pointerDownYPosition)+Math.abs(t-this._pointerDownXPosition)>10}_handleSceneDragMove(t){const e=this.shadowRoot?.querySelectorAll(".scene__sorting-item");if(void 0!==e&&this._shouldStartDragMode(t.clientX,t.clientY)){if(this._sceneDragStart||(this._sceneDragStart=!0,document.body.style.cursor="grabbing"),void 0!==this._sceneDraggedImage){const e=this._sceneDraggedImage.getBoundingClientRect();this._sceneDraggedImage.style.top=t.clientY-e.height/2+"px",this._sceneDraggedImage.style.left=t.clientX-e.width/2+"px"}this._currentActivatedDropZoneIndicator=this.calculateDropOffIndex(t.clientX,e)}}calculateDropOffIndex(t,e){const o=[];for(let t=0;t<e.length;t++){const i=e[t];if(i){const e=i.getBoundingClientRect();o[t]=parseInt(getComputedStyle(i).getPropertyValue("width"))/2+e.left}}const i=t;let r=0;for(let t=0;t<e.length;t++){if(i<o[t]){r=t;break}if(t+1<e.length&&i>=o[t]&&i<o[t+1]){r=t+1;break}i>o[t]&&(r=t+1)}return r}_handleSceneDragStop(t){this._sceneDragStart=!1,document.onpointermove=null,document.onpointerup=null,this._pointerDownXPosition=0,this._pointerDownYPosition=0,-1!==this._currentActivatedDropZoneIndicator&&(this._scenelineQuickActionStore.reorderScene({dropIndex:this._currentActivatedDropZoneIndicator}),this._scenelineQuickActionStore.selectSceneElement([this.activeScene]),this._currentActivatedDropZoneIndicator=-1),document.body.style.cursor="auto"}_handleTrackPinDragStart(t){this._sceneTrackPinEle&&this._sceneTrimEle&&(this._trimOffsetWidth=this._sceneTrimEle?.offsetWidth||0,this._offsetLeftX=this._sceneTrackPinEle.offsetLeft,this._dragOffsetX=t.clientX,this._seekDragState=0,this._grabbingCursor=!0,this.addEventListener("touchmove",this._restrictExternalMoveEvents),document.onpointermove=t=>this._handleTrackPinDragMove(t),document.onpointerup=t=>this._handleTrackPinDragStop(t),document.onlostpointercapture=t=>this._handleTrackPinDragStop(t))}_handleTrackPinDragMove(t){if(!this._sceneTrackPinEle)return;const e=t.clientX-this._dragOffsetX;let o=Math.max(this._offsetLeftX+e,0);o=Math.min(o,this._trimOffsetWidth-this.trackPinWidth);const i=100*o/(this._trimOffsetWidth??1);this._sceneTrackPinEle.style.left=`${i}%`,this._computedDragLeft=o,this._setTrackPinCurrentTimeFromWidth(o),this._seekDragState=1}_handleTrackPinDragStop(t){if(document.onpointermove=null,document.onpointerup=null,document.onlostpointercapture=null,this.removeEventListener("touchmove",this._restrictExternalMoveEvents),!this._sceneTrackPinEle||!this.firstSceneHTMLElement||0===this._trimDragState)return void this._resetTrackPinDrag();const e=this._trimOffsetWidth??1,o=100*this._computedDragLeft/e;this._sceneTrackPinEle.style.left=`${o}%`,this._setTrackPinCurrentTimeFromWidth(this._computedDragLeft),this._resetTrackPinDrag()}_resetTrackPinDrag(){this._trimOffsetWidth=0,this._offsetLeftX=0,this._dragOffsetX=0,this._grabbingCursor=!1,this._seekDragState=2}_handleDragMove(t,e){if(!this._sceneTrimEle||!this._sceneTrimRightMaskEle||!this._sceneTrimLeftMaskEle)return;t.preventDefault();const o=this._dragOffsetX-t.clientX;let i=this._offsetLeftX,r=this._offsetWidthX;4===e?(i=Math.max(i-o,0),i=Math.min(i,this._offsetRightX-this._minimumWidth),r=this._offsetRightX-i):(r=Math.min(this._offsetWidthX-o,this._maxContainerWidth-i),r=Math.max(r,this._minimumWidth)),this._computedDragLeft=i,this._computedDragWidth=r;const a=Math.max(0,i/this._maxContainerWidth),s=Math.min(1,r/this._maxContainerWidth);if(4===e&&(this._sceneTrimEle.style.left=a*this._maxContainerWidth+"px"),this._sceneTrimEle.style.width=s*this._maxContainerWidth+"px",this._sceneTrackPinEle)if(3===e){this._sceneTrackPinEle.style.right="0";const t=this._computeTrackPinLeftPosition();this._sceneTrackPinEle.style.left=`${t}px`}else this._sceneTrackPinEle.style.left="0",this._sceneTrackPinEle.style.right="";const n=(this._maxContainerWidth-(i+r))/this._maxContainerWidth;this._sceneTrimRightMaskEle.style.transform=`scaleX(${n}) translateX(-100%)`;const c=this._uiStateStore.isMobileScale?i+f.xW+f.qz:i;this._sceneTrimLeftMaskEle.style.width=`${c}px`,this._trimDragState=1;const l=4===e?k.wD.left:k.wD.right;let d;d=this._scenelineQuickActionStore.shouldTrimSceneInsteadOfElement?this._sendTrimContinueEventForSceneTrim(l,a,s):this._sendTrimContinueEventForSceneElementTrim(l,a,r),this._tickerTextDuringDrag=this._getTimeTicker({sceneDuration:d.duration}),l!==k.wD.right||this._quickActionConfig.quickActionId!==_.df.MergeVideos||this._isVideo(d)||this.dispatchEvent(new CustomEvent("qa-update-image-current-time",{bubbles:!0,composed:!0,detail:{imageCurrentTime:d.duration}}))}_sendTrimContinueEventForSceneTrim(t,e,o){const i=this._getSceneTrimElement(e,o);return this._scenelineQuickActionStore.currentSceneOffset=m.JP.multiply(this._originalSceneDuration,e),this._trimScene({element:i,trimActionType:t},k.pM.continue),i}_getSceneTrimElement(t,e){const o=m.JP.multiply(this._originalSceneDuration,t),i=m.JP.subtract(o,this._previousSceneOffset);return{id:(0,b.ZN)(this._scenelineQuickActionStore.activeScene),elementType:k.Hd.SCENE,offset:i,duration:m.JP.multiply(this._originalSceneDuration,e)}}_sendTrimContinueEventForSceneElementTrim(t,e,o){const i={...this.selectedElement},r=this._isVideo(i)?i.mediaInfo?.mediaDuration:m.JP.getFrameTime(f.s3,this._scenelineFrameRate);return r&&i.mediaInfo&&(this._isVideo(i)&&t===k.wD.left&&(i.mediaInfo.mediaInTime=0===e?{value:0,scale:i.duration.scale}:m.JP.multiply(r,e)),o<=this._minimumWidth?i.duration=this.minDuration:i.duration=(0,w.a1)(o,this._scenelineFrameRate,this._totalMillisecondsPerTotalWidth)),this._trimSceneElement({element:i,trimActionType:t},k.pM.continue),i}_handleDragStop(t,e){if(this._tickerTextDuringDrag=void 0,document.onpointermove=null,document.onpointerup=null,this.removeEventListener("touchmove",this._restrictExternalMoveEvents),0===this._trimDragState)return void this._resetTrimDrag();if(!this._sceneTrimEle||!this._sceneTrackPinEle)return;const o=4===e?k.wD.left:k.wD.right,i=Math.max(0,this._computedDragLeft/this._maxContainerWidth),r=Math.min(1,this._computedDragWidth/this._maxContainerWidth);o===k.wD.left&&(this._sceneTrimEle.style.left=`${Number(i*this._maxContainerWidth).toFixed(2)}px`);const a=Number(r*this._maxContainerWidth);this._sceneTrimEle.style.width=`${Number(a).toFixed(2)}px`,this._scenelineQuickActionStore.shouldTrimSceneInsteadOfElement?this._sendTrimEndEventForSceneTrim(o,i,r):this._sendTrimEndEventForElementTrim(o,i,a),this._quickActionConfig.quickActionId===_.df.MergeVideos&&(this._quickActionPerformance.begin(D.O.canvasFirstFrame,void 0,T.U.trimApplied),this._trackingTrimPerf=!0),this.dispatchEvent(new CustomEvent("qa-trim-in-progress",{bubbles:!0,composed:!0,detail:{trimInProgress:!1}})),this._resetTrimDrag(),this._sendAnalyticsOnce(S.B_.trimQuickActionResultByHandle),this._syncSceneTrimHandles(this.selectedElement)}_sendTrimEndEventForSceneTrim(t,e,o){const i=this._getSceneTrimElement(e,o);this._previousSceneOffset=m.JP.multiply(this._originalSceneDuration,e),this._scenelineQuickActionStore.currentSceneOffset=this._previousSceneOffset,this._trimScene({element:i,trimActionType:t},k.pM.end)}_sendTrimEndEventForElementTrim(t,e,o){const i={...this.selectedElement},r=this._isVideo(i)?i.mediaInfo?.mediaDuration:m.JP.getFrameTime(f.s3,this._scenelineFrameRate);r&&i.mediaInfo&&(this._isVideo(i)&&t===k.wD.left&&(i.mediaInfo.mediaInTime=0===e?{value:0,scale:i.duration.scale}:m.JP.multiply(r,e)),o<=this._minimumWidth?i.duration=this.minDuration:i.duration=(0,w.a1)(o,this._scenelineFrameRate,this._totalMillisecondsPerTotalWidth)),this._trimSceneElement({element:i,trimActionType:t},k.pM.end)}_resetTrimDrag(){this._offsetWidthX=0,this._offsetLeftX=0,this._offsetRightX=0,this._maxContainerWidth=0,this._computedDragLeft=0,this._computedDragWidth=0,this._trimDragState=2}_onTotalTimeStateChange(t=this._scenelineQuickActionStore.duration){let e=t||m.jd;e=g.Vb.alignWithFrameRate(e,this._scenelineFrameRate),this._totalFrameTime.value===e.value&&this._totalFrameTime.scale===e.scale||(this._totalFrameTime=e)}_onCurrentTimeStateChange(t=this._scenelineQuickActionStore.playhead){let e=t||m.jd;e=g.Vb.alignWithFrameRate(e,this._scenelineFrameRate),this._currentFrameTime.value===e.value&&this._currentFrameTime.scale===e.scale||(this._currentFrameTime=e)}_onTotalVideoDurationStateChange(t=this._videoDecorationsStore.duration){let e=t||m.jd;e=g.Vb.alignWithFrameRate(e,this._scenelineFrameRate),this._totalVideoDuration.value===e.value&&this._totalVideoDuration.scale===e.scale||(this._totalVideoDuration=e)}_onCurrentVideoFrameTimeStateChange(t=this._videoDecorationsStore.playhead){let e=t||m.jd;e=g.Vb.alignWithFrameRate(e,this._scenelineFrameRate),this._currentVideoFrameTime.value===e.value&&this._currentVideoFrameTime.scale===e.scale||(this._currentVideoFrameTime=e)}_renderTrackPinTemplate(){return(0,n.g)(this.showTrackpin,(()=>a.dy`<div
                class="scene-trim__trackpin ${(0,h.$)({trackpinGrab:this._grabbingCursor})}"
                    draggable="false"
                    @pointerdown=${t=>this._handleTrackPinDragStart(t)}
                >
                <img src=${p.kj.data}  aria-hidden="true"></img>
                </div>`))}_seekTrackPin(t){if((t.target===this._sceneTrack||t.target===this._sceneTrackForImage||t.target===this._sceneTrackWrapper)&&this.firstSceneHTMLElement&&this._sceneTrimEle&&this.firstSceneHTMLElement&&this._sceneTrimEle){const e=this.firstSceneHTMLElement.getBoundingClientRect(),o=t.x-e.x-this.trackPinWidth-this._sceneTrimEle.offsetLeft;o>=0&&o<=this.firstSceneHTMLElement?.offsetWidth&&(this._computedDragLeft=o,this._setTrackPinCurrentTimeFromWidth(o))}}_getTimeTicker({sceneDuration:t,element:e=this.selectedElement}={}){if(void 0===e)return"";const o=t??e.duration;if(!o)return"";const i=m.JP.convertFrameTimeToLocalizationFormat(o);return 0===i.timeInSeconds?i.displayedTime:i.timeInSeconds<60?this._intlStore.formatMessage({id:"@hz/quick-actions:scene-duration-with-seconds",defaultMessage:"{seconds}s"},{seconds:this._intlStore.formatNumber(i.timeInSeconds)}):i.timeInSeconds<3600?this._intlStore.formatMessage({id:"@hz/quick-actions:scene-duration-with-mins-seconds",defaultMessage:"{minutes}:{seconds}"},{minutes:i.displayedMinutes,seconds:i.displayedSeconds}):this._intlStore.formatMessage({id:"@hz/quick-actions:scene-duration-with-hours-mins-seconds",defaultMessage:"{hours}:{minutes}:{seconds}"},{hours:i.displayedHours,minutes:i.displayedMinutes,seconds:i.displayedSeconds})}_getScenelineCurrentAndTotalFrameTime(){let t=this._currentFrameTime,e=this._totalFrameTime;return this._quickActionConfig.quickActionId===_.df.MergeVideos&&0===this.mode&&(this._isVideo(this.selectedElement)?(t=this._currentVideoFrameTime,e=this._totalVideoDuration):(t=this.imageCurrentTime,e=this.selectedElement.duration)),{currentTime:t,totalTime:e}}_computeTrackPinLeftPosition(){const{currentTime:t,totalTime:e}=this._getScenelineCurrentAndTotalFrameTime();let o=t.value*e.scale/(t.scale*e.value);o=Math.min(1,o);return(this._sceneTrimEle.offsetWidth-this.trackPinWidth)*o}_renderTrimTemplate(t){const e={backgroundImage:"url("+t.id+")"},o=this.selectedElement?.elementType===k.Hd.IMAGE&&this._quickActionConfig.quickActionId===_.df.MergeVideos;if(!this.trimEnabled){const t={"scene-trim":!0,"no-trim":!0,"scene-trim--fixed":1===this.mode};return a.dy`<div class=${(0,h.$)(t)} style=${(0,v.V)(e)}></div>`}const i={disabled:!this._scenelineQuickActionStore.trimEnabled,"scene-trim":!0},r={"scene-trim__left":!0,"trim-handle--hide":o},s={"scene-trim__left-handle":!0,"scene-trim__left-handle__cursor":!o},n={sceneBorder:!o,"scene-border__image":o,"left-rounded-border":o};return a.dy`
            <div class="scene-trim-leftmask"></div>
            <div
                class=${(0,h.$)(i)}
                @pointerdown=${this._seekTrackPin}
                style=${(0,v.V)(e)}
            >
                <div
                    class=${(0,h.$)(r)}
                    draggable="false"
                    @pointerdown=${t=>this._handleDragStart(t,4)}
                    @contextmenu=${this._handleRightClick}
                >
                    <div class=${(0,h.$)(s)}>
                        <div class="left-trim-handle-inner">
                            <div class="scene-trim__handle-bar"></div>
                            <div class="scene-trim__handle-bar"></div>
                        </div>
                    </div>
                </div>
                <div class="scene-trim__time scene-trim__time__position">
                    ${this._tickerTextDuringDrag??this._getTimeTicker()}
                </div>
                <div class="sceneBorderWrapper">
                    <div class=${(0,h.$)(n)}></div>
                </div>
                <div
                    class="scene-trim__right"
                    draggable="false"
                    @contextmenu=${this._handleRightClick}
                    @pointerdown=${t=>this._handleDragStart(t,3)}
                >
                    <div class="scene-trim__right-handle">
                        <div class="right-trim-handle-inner">
                            <div class="scene-trim__handle-bar"></div>
                            <div class="scene-trim__handle-bar"></div>
                        </div>
                    </div>
                </div>
                ${this._renderTrackPinTemplate()}
            </div>
            <div class="scene-trim-rightmask"></div>
        `}_handleFileValidated(t){const e=new CustomEvent("qa-add-new-scene",{bubbles:!0,cancelable:!0,composed:!0,detail:{fileData:t.detail,isNewScene:!0,sceneIndex:this.scenelineData.length}});return this._quickActionResourceImportStore.handleAddNewSceneAtIndex(e)}render(){const t=1===this.mode,e={"multi-scene":t,"vqa-scenes":!0},o={"multi-scene":t,"vqa-scenes-container":!0};return a.dy`<article class=${(0,h.$)(o)}>
            <section class=${(0,h.$)(e)}>
                ${this._renderSceneTemplate()}
                ${(0,n.g)(1===this.mode,(()=>a.dy`<qa-file-upload
                            class="addSceneFileUpload"
                            @qa-file-validated=${this._handleFileValidated}
                            .isAddMediaTemplate=${!0}
                            .uploadedFileCount=${this.scenelineData.length}
                            ?prevent-disable-after-upload=${!0}
                        >
                        </qa-file-upload>`))}
            </section>
        </article> `}};V.TAG_NAME="qa-sceneline",(0,i.__decorate)([(0,l.w)("ScenelineQuickActionStore")],V.prototype,"_scenelineQuickActionStore",void 0),(0,i.__decorate)([(0,l.w)("ScenelineThumbnailsStore")],V.prototype,"_contextualThumbnailsStore",void 0),(0,i.__decorate)([(0,l.w)("QuickActionAnalyticsStore")],V.prototype,"_quickActionAnalyticsStore",void 0),(0,i.__decorate)([(0,l.w)("QuickActionResourceImportStore")],V.prototype,"_quickActionResourceImportStore",void 0),(0,i.__decorate)([(0,l.w)("IntlStore")],V.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,l.w)("QuickActionPerformance")],V.prototype,"_quickActionPerformance",void 0),(0,i.__decorate)([(0,l.w)("VideoDecorationsStore")],V.prototype,"_videoDecorationsStore",void 0),(0,i.__decorate)([(0,l.w)("UIStateStore")],V.prototype,"_uiStateStore",void 0),(0,i.__decorate)([(0,s.Cb)({reflect:!0})],V.prototype,"mode",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],V.prototype,"trimEnabled",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],V.prototype,"showTrackpin",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],V.prototype,"showContextualMenu",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],V.prototype,"sceneElementHasNonZeroOffsetWidth",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],V.prototype,"isPlayingStateForBitmap",void 0),(0,i.__decorate)([(0,s.Cb)()],V.prototype,"imageCurrentTime",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"scenelineData",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_currentFrameTime",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_scenelineFrameRate",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_totalFrameTime",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_currentVideoFrameTime",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_totalVideoDuration",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_selectedElements",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_thumbnailsUrl",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_sceneThumbnailUrl",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_trimSceneID",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_trimSceneDuration",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_sceneDragStart",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_currentActivatedDropZoneIndicator",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_assetInProgressElements",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_tickerTextDuringDrag",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_hasThumbnailReloadTriggeredWithLowResolutionProxy",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_hasThumbnailReloadTriggeredWithPoster",void 0),(0,i.__decorate)([(0,s.SB)()],V.prototype,"_grabbingCursor",void 0),(0,i.__decorate)([(0,s.IO)(".scene-trim")],V.prototype,"_sceneTrimEle",void 0),(0,i.__decorate)([(0,s.IO)(".scene-trim__trackpin")],V.prototype,"_sceneTrackPinEle",void 0),(0,i.__decorate)([(0,s.IO)(".scene-trim-rightmask")],V.prototype,"_sceneTrimRightMaskEle",void 0),(0,i.__decorate)([(0,s.IO)(".scene-trim-leftmask")],V.prototype,"_sceneTrimLeftMaskEle",void 0),(0,i.__decorate)([(0,s.IO)(".vqa-scenes-container")],V.prototype,"_scenesContainerEle",void 0),(0,i.__decorate)([(0,s.Kt)(".scene")],V.prototype,"_sceneEle",void 0),(0,i.__decorate)([(0,s.IO)(".scene__dragged-image")],V.prototype,"_sceneDraggedImage",void 0),(0,i.__decorate)([(0,s.IO)(".sceneBorder")],V.prototype,"_sceneTrack",void 0),(0,i.__decorate)([(0,s.IO)(".scene-border__image")],V.prototype,"_sceneTrackForImage",void 0),(0,i.__decorate)([(0,s.IO)(".sceneBorderWrapper")],V.prototype,"_sceneTrackWrapper",void 0),(0,i.__decorate)([(0,l.w)("QuickActionUIConfig")],V.prototype,"_quickActionConfig",void 0),V=B=(0,i.__decorate)([(0,s.Mo)(B.TAG_NAME)],V);o(187374),o(914078);var H=o(370428);o(15803);const N=a.iv`
    .thumbnail-container {
        display: flex;
        background: transparent linear-gradient(270deg, var(--spectrum-blue-200) 0%, var(--spectrum-indigo-300) 100%) 0%
            0% no-repeat padding-box;
        border-radius: var(--spectrum-global-dimension-size-100);
        padding: var(--spectrum-component-edge-to-visual-75);
    }

    .thumbnail-text {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-family: adobe-clean, sans-serif;
        font-size: var(--spectrum-toast-top-to-text);
        letter-spacing: var(--spectrum-global-dimension-static-size-0);
        color: var(--spectrum-black);
        margin-inline: var(--spectrum-component-edge-to-visual-75);
    }
`;class Z extends c.j{constructor(){super(...arguments),this.thumbnailText=""}render(){return a.dy`
            <article class="thumbnail-container" id="thumbnail-tag">
                <section class="thumbnail-text">${this.thumbnailText}</section>
            </article>
        `}}Z.styles=N,(0,i.__decorate)([(0,s.Cb)({type:String})],Z.prototype,"thumbnailText",void 0);class j extends Z{constructor(){super(...arguments),this.featureName="PremiumButton"}render(){return this._authorizeController.isEntitled(this.featureName)?a.Ld:super.render()}}(0,i.__decorate)([(0,l.w)("AuthorizeController")],j.prototype,"_authorizeController",void 0),(0,i.__decorate)([(0,s.Cb)({type:String})],j.prototype,"featureName",void 0);const W="hz-thumbnail-tag-base";customElements.get(W)||customElements.define(W,Z);const G="x-thumbnail-tag-base";customElements.get(G)||customElements.define(G,j);var Q,X=o(861149),Y=o(163150);let K=Q=class extends c.j{async contextsLoaded(){await this._intlStore.load()}render(){return this._quickActionUIConfig.premiumOptions.required&&this._quickActionUIConfig.quickActionGroup!==X.zF.PDF&&(0,Y.tB)(this._uiStateStore.qaParentContext)?a.dy`
            <x-thumbnail-tag-base
                thumbnailText=${this._intlStore.formatMessage({id:"@hz/quick-actions:free-for-limited-time",defaultMessage:"Free for limited time"})}
            ></x-thumbnail-tag-base>
        `:a.Ld}};K.TAG_NAME="qa-limited-time-tag",(0,i.__decorate)([(0,l.w)("IntlStore")],K.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,l.w)("QuickActionUIConfig")],K.prototype,"_quickActionUIConfig",void 0),(0,i.__decorate)([(0,l.w)("UIStateStore")],K.prototype,"_uiStateStore",void 0),K=Q=(0,i.__decorate)([(0,s.Mo)(Q.TAG_NAME)],K);var J,tt;o(953768),o(153706);!function(t){t.upload="upload",t.uploadControls="upload-controls",t.description="description",t.scenelineEditor="sceneline-editor",t.canvas="canvas",t.interactions="interactions",t.export="export",t.banner="banner",t.consentMessage="consent-message",t.rateUs="rate-us"}(tt||(tt={}));const et=65,ot="qa-editor-load-complete";let it=J=class extends c.j{constructor(){super(...arguments),this.editorLoading=!0,this.isSmallAppFrame=!1,this.uploadStatus="none",this.canvasContainerReady=new r.B,this._uploadPerfmarkerCalled=!1}_renderStyleOverrides(){return a.dy`
            <style>
                /** CSS Variable overrides go here! */
                :host {
                    --qa-workspace-custom-top: ${et}px;
                }
            </style>
        `}async contextsLoaded(){await this._intlStore.load(),this._authorizationStorePromise.then((async t=>{await t.load(),this._paywallStorePromise.then((async t=>{t.isEmbedEnabled?await Promise.all([o.e(33055),o.e(69221)]).then(o.bind(o,869221)):await Promise.all([o.e(33055),o.e(32610)]).then(o.bind(o,532610)),this._paywallDialogService.setDialogRoot(this)}))}))}updated(){if(!this.canvasContainerReady.isFulfilled){const t=this.renderRoot.querySelector(`.${J.CANVAS_SECTION_CONTENT_CLASS}`);t&&this.canvasContainerReady.resolve(t)}this._uploadPerfmarkerCalled||(performance.mark("UploadUIRenderComplete:end"),window.dispatchEvent(new CustomEvent(ot)),this._uploadPerfmarkerCalled=!0,this._quickActionAnalyticsStore.onQuickActionPageLoaded())}disconnectedCallback(){this._paywallDialogService.clearDialogRoot(),super.disconnectedCallback()}async getCanvasContainer(){return await this.canvasContainerReady.promise}_getCanvasSectionContentTemplateResult(){const{editorLoading:t,uploadStatus:e}=this,o=L.q.preloadQuickActionEditor.enabled;if(this._quickActionEditorStore.isTranscoding||this._showProgressForMobileMergeVQA)return a.dy`<div class="skeleton-shimmer"><div class="canvas-skeleton"></div></div>`;if(!o&&"none"===e)return a.dy`<slot name=${"upload"}></slot>`;const i=(0,n.g)(t&&(!o||"none"!==e),(()=>a.dy`<div class=${J.CANVAS_SECTION_LOADING_CLASS}>
                    <qa-progress progress-label=${this._quickActionEditorStore.progressLabel||""}> </qa-progress>
                </div>`)),r=(0,n.g)(o&&"none"===e,(()=>a.dy`<slot name=${"upload"}></slot>`));return a.dy`
            ${r} ${i}
            ${(0,n.g)(this.isSmallAppFrame,(()=>a.dy` <slot name=${"rate-us"}></slot>`))}
            <slot name=${"canvas"}></slot>
        `}_renderDescription(){return a.dy`<slot name=${"description"}></slot>`}_renderExportSection(){return a.dy`<section class=${J.EXPORT_SECTION_CLASS}>
            ${(0,n.g)(!this.isSmallAppFrame,(()=>a.dy` <slot name=${"rate-us"}></slot>`))}
            <slot name=${"export"}></slot>
            <slot name=${"consent-message"}></slot>
        </section>`}_renderUploadControls(){return a.dy`<section class=${J.UPLOAD_CONTROLS_CLASS}>
            <slot name=${"upload-controls"}></slot>
        </section>`}_renderSceneSection(){return a.dy`<section class=${J.SCENE_SECTION_CLASS}>
            <slot name=${"sceneline-editor"}></slot>
        </section>`}_renderPanelSection(){return a.dy`<section class=${J.PANEL_SECTION_CLASS}>
            <section class=${J.PANEL_CONTENT_CLASS}>
                ${(0,n.g)(this._shouldRenderDescription,(()=>this._renderDescription()))}
                ${(0,n.g)(this._shouldRenderUploadControls,(()=>this._renderUploadControls()))}
                ${(0,n.g)(this._shouldRenderInteractions,(()=>a.dy`<slot name=${"interactions"}></slot>`))}
            </section>
        </section>`}_renderLanguageSwitcher(){return a.dy`<hz-language-switcher></hz-language-switcher>`}_renderLegalMessage(){return a.dy`<qa-legal-message class=${J.LEGAL_MESSAGE_CLASS}></qa-legal-message>`}_renderPerfMonitorOverlay(){return a.dy`<hz-layout-perf-monitor-overlay></hz-layout-perf-monitor-overlay>`}_renderProgressOverlay(){return a.dy`
            <qa-progress-overlay
                progress-label=${this._quickActionEditorStore.progressOverlayLabel}
                progress-size="l"
            ></qa-progress-overlay>
        `}_renderBeta(){const t=(0,d.Em)({id:"@hz/quick-actions:beta-label",defaultMessage:"BETA"});return a.dy`<div class="beta-label">${this._intlStore.formatMessage(t)}</div>`}_renderTitleSectionContent(){const{title:t,isBeta:e,subTitle:o}=this._quickActionConfig,i=this.isSmallAppFrame?a.Ld:a.dy`<sp-divider size="s"></sp-divider>`;return a.dy`<div class="title-row">
                <h1 class=${J.TITLE_CLASS}>${this._intlStore.formatMessage(t)}</h1>
                ${(0,n.g)(e,(()=>this._renderBeta()))}
                <qa-limited-time-tag></qa-limited-time-tag>
            </div>
            ${(0,n.g)(o,(()=>a.dy`<h4 class=${J.SUB_TITLE_CLASS}>
                        ${this._intlStore.formatMessage(o,{strong:t=>a.dy`<strong>${t}</strong>`})}
                    </h4>`))}
            ${i}
            <slot name=${"banner"}></slot> `}_getCanvasSectionClassName(){return this._shouldEnableMobileVQACanvas()?`${J.CANVAS_SECTION_CLASS} ${J.FULL_WIDTH_CLASS} ${J.MOBILE_VQA}`:`${J.CANVAS_SECTION_CLASS} ${J.FULL_WIDTH_CLASS}`}_getCanvasSectionContentClassName(){return this._shouldEnableMobileVQACanvas()?`${J.CANVAS_SECTION_CONTENT_CLASS} ${J.MOBILE_VQA}`:`${J.CANVAS_SECTION_CONTENT_CLASS}`}_getGridSectionClassName(t){return this._shouldEnableMobileVQACanvas()?`${J.GRID_SECTION_CLASS} grid-section--${t} ${J.MOBILE_VQA}`:`${J.GRID_SECTION_CLASS} grid-section--${t}`}_shouldEnableMobileVQACanvas(){return!(!this._uiStateStore.isSmallAppFrame||!this._quickActionEditorStore.showVideoSceneline||"none"===this.uploadStatus||this._quickActionConfig.quickActionId===_.df.AnimateFromAudio)}get _showProgressForMobileMergeVQA(){return this._quickActionEditorStore.isMobileMergeVQA&&"none"!==this.uploadStatus}get _shouldRenderInteractions(){return!this.editorLoading||this._quickActionEditorStore.isTranscoding||this._showProgressForMobileMergeVQA||this._quickActionEditorStore.forceDisplayEditor}get _shouldRenderDescription(){return"none"===this.uploadStatus||"skipped"===this.uploadStatus}get _shouldRenderUploadControls(){return"none"===this.uploadStatus&&!this._uiStateStore.isSmallAppFrame}_shouldRenderExportSection(){return this._quickActionEditorStore.showVideoSceneline?!this.editorLoading&&"none"!==this.uploadStatus:!this.editorLoading}render(){const{layout:t}=this._quickActionConfig;return a.dy`
            ${(0,n.g)((0,Y.D3)(this._uiStateStore.qaParentContext),(()=>this._renderStyleOverrides()))}
            ${(0,n.g)(this._quickActionEditorStore.showProgressOverlay,(()=>this._renderProgressOverlay()))}
            <section class=${this._getGridSectionClassName(t)}>
                <section class=${this._getCanvasSectionClassName()}>
                    <section class=${this._getCanvasSectionContentClassName()}>
                        ${this._getCanvasSectionContentTemplateResult()}
                    </section>
                    ${(0,n.g)("none"===this.uploadStatus&&this._uiStateStore.isSmallAppFrame,(()=>this._renderUploadControls()))}
                    ${(0,n.g)(this._quickActionEditorStore.showVideoSceneline&&!this.editorLoading,(()=>this._renderSceneSection()))}
                    ${(0,n.g)(this._quickActionEditorStore.showLegalMessage,(()=>this._renderLegalMessage()))}
                    ${(0,n.g)(L.q.languageSwitcherEnabled.enabled,(()=>this._renderLanguageSwitcher()))}
                    ${(0,n.g)(this._perfMonitorStore.visible,(()=>this._renderPerfMonitorOverlay()))}
                </section>
                <section class=${J.TITLE_SECTION_CLASS}>${this._renderTitleSectionContent()}</section>
                ${this._renderPanelSection()}
                ${(0,n.g)(this._shouldRenderExportSection(),(()=>this._renderExportSection()))}
            </section>
        `}};it.TAG_NAME="qa-workspace",it.GRID_SECTION_CLASS="grid-section",it.CANVAS_SECTION_CLASS="canvas-section",it.CANVAS_SECTION_CONTENT_CLASS="canvas-section-content",it.CANVAS_SECTION_LOADING_CLASS="canvas-section-loading",it.CANVAS_SECTION_LOADING_LABEL_CLASS="canvas-section-loading-label",it.TITLE_SECTION_CLASS="title-section",it.TITLE_CLASS="title",it.SUB_TITLE_CLASS="sub-title",it.PANEL_SECTION_CLASS="panel-section",it.PANEL_CONTENT_CLASS="panel-content",it.EXPORT_SECTION_CLASS="export-section",it.SCENE_SECTION_CLASS="scene-editor",it.UPLOAD_CONTROLS_CLASS="upload-controls",it.FULL_WIDTH_CLASS="full-width",it.LEGAL_MESSAGE_CLASS="legal-message",it.RATE_US_SECTION_CLASS="rate-us-section",it.MOBILE_VQA="mobile-vqa",it.styles=[H.oB],(0,i.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0,attribute:"editor-loading"})],it.prototype,"editorLoading",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean,attribute:"is-small-app-frame",reflect:!0})],it.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,s.Cb)({attribute:"upload-status"})],it.prototype,"uploadStatus",void 0),(0,i.__decorate)([(0,l.w)("IntlStore")],it.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,l.w)("PerfMonitorStore")],it.prototype,"_perfMonitorStore",void 0),(0,i.__decorate)([(0,l.w)("QuickActionUIConfig")],it.prototype,"_quickActionConfig",void 0),(0,i.__decorate)([(0,l.w)("UIStateStore")],it.prototype,"_uiStateStore",void 0),(0,i.__decorate)([(0,l.w)("AuthorizationStore",{optionalPromise:!0})],it.prototype,"_authorizationStorePromise",void 0),(0,i.__decorate)([(0,l.w)("PaywallDialogService")],it.prototype,"_paywallDialogService",void 0),(0,i.__decorate)([(0,l.w)("PaywallStore",{optionalPromise:!0})],it.prototype,"_paywallStorePromise",void 0),(0,i.__decorate)([(0,l.w)("QuickActionEditorStore")],it.prototype,"_quickActionEditorStore",void 0),(0,i.__decorate)([(0,l.w)("QuickActionAnalyticsStore")],it.prototype,"_quickActionAnalyticsStore",void 0),it=J=(0,i.__decorate)([(0,s.Mo)(J.TAG_NAME)],it)},815898:(t,e,o)=>{o.d(e,{F7:()=>l,YG:()=>u,Zp:()=>m,a1:()=>n,hm:()=>p,j$:()=>d});var i=o(743182),r=o(484866),a=o(998835);const s=["--:--","--:--"];function n(t,e,o=1){const r=t*o/1e3;return i.JP.getFrameTime(r,e)}function c(t){const e=function(t){const e=Math.pow(10,1),o=Math.round(t.value/t.scale*e)/e,i=Math.floor(o),r=Math.floor(i/3600),a=Math.floor((i-3600*r)/60),s=i-3600*r-60*a,n=("0"+r).slice(-2),c=("0"+a).slice(-2),l=("0"+s).slice(-2);return{seconds:o,minutes:a,hours:r,displayedHours:n,displayedMinutes:c,displayedSeconds:l}}(t);return`${e.displayedHours}:${e.displayedMinutes}:${e.displayedSeconds}`}function l(t){const[e,o,i]=t.split(":");return!(Number.isNaN(parseInt(e))||Number.isNaN(parseInt(o))||Number.isNaN(parseInt(i)))}function d(t="00:00:00",e=r.H7){const[o="00",a="00",s="00"]=t.split(":");return r.Vb.alignWithFrameBoundary(i.JP.getFrameTime(3600*parseInt(o)+60*parseInt(a)+parseInt(s),e))}function u(t,e){return 0===t.scale||0===e.scale?s:[c(t),c(e)]}var h;function p(t){return t.roughlyEquals(a.o.aspectRatio16x9())?{type:"landscape",isStandard:!0}:t.roughlyEquals(a.o.aspectRatio1x1())?{type:"square",isStandard:!0}:t.roughlyEquals(a.o.aspectRatio9x16())?{type:"portrait",isStandard:!0}:{type:"original",isStandard:!1}}!function(t){t.original="original",t.landscape="landscape",t.portrait="portrait",t.square="square"}(h||(h={}));const m=async(t,e)=>{const o=t.map((t=>fetch(t)));let i=await Promise.all(o);i=i.filter((t=>!!t.ok||(e.error(`Error while fetching asset with url: ${t.url} with status: ${t.statusText}`),!1))),0===i.length&&Promise.reject(new Error("Downloading asset failed"));const r=await Promise.all(i.map((t=>t.blob())));r||Promise.reject(new Error("Downloading asset failed"));return r.map((t=>new File([t],"inputAsset."+t.type.split("/")[1],{type:t.type})))}},336964:(t,e,o)=>{var i,r,a,s,n;o.d(e,{Bl:()=>b,CP:()=>f,GG:()=>y,LX:()=>d,RT:()=>l,XW:()=>x,YF:()=>c,bZ:()=>h,dd:()=>k,jx:()=>m,p0:()=>u,qz:()=>v,rT:()=>p,s3:()=>S,wY:()=>w,xF:()=>_,xW:()=>g}),function(t){t[t.SINGLE=0]="SINGLE",t[t.MULTI=1]="MULTI"}(i||(i={})),function(t){t[t.HOVER=0]="HOVER",t[t.DISABLED=1]="DISABLED",t[t.ACTIVE=2]="ACTIVE",t[t.SELECTED=3]="SELECTED"}(r||(r={})),function(t){t[t.REORDER=0]="REORDER",t[t.TRIMMING=1]="TRIMMING",t[t.CONTEXTUAL_ACTIVE=2]="CONTEXTUAL_ACTIVE"}(a||(a={})),function(t){t[t.TRIM_START=0]="TRIM_START",t[t.TRIM_MOVE=1]="TRIM_MOVE",t[t.TRIM_END=2]="TRIM_END",t[t.RIGHT_TRIM=3]="RIGHT_TRIM",t[t.LEFT_TRIM=4]="LEFT_TRIM"}(s||(s={})),function(t){t[t.SEEK_START=0]="SEEK_START",t[t.SEEK_MOVE=1]="SEEK_MOVE",t[t.SEEK_END=2]="SEEK_END"}(n||(n={}));const c=1,l=140,d=2,u=1,h=86,p=64,m=16,g=16,v=5,b=20,f=15,k="BODY",y="HZ-CANVAS-SURFACE",x="ACTIVE-OVERLAY",w={SPACE:[{key:"REGULAR_KEYS",value:"Space"}]},_=["--:--","--:--"],S=60},684397:(t,e,o)=>{o.d(e,{r:()=>i});class i{constructor(t,{target:e,config:o,callback:i,skipInitial:r}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(null!=e?e:t),this.o=null!=r?r:this.o,this.callback=i,window.IntersectionObserver?(this.u=new IntersectionObserver((t=>{const e=this.i;this.i=!1,this.o&&e||(this.handleChanges(t),this.h.requestUpdate())}),o),t.addController(this)):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(t){var e;this.value=null===(e=this.callback)||void 0===e?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();t.length&&this.handleChanges(t)}observe(t){this.t.add(t),this.u.observe(t),this.i=!0}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}}},138575:(t,e,o)=>{var i=o(995898);(0,o(589415).N)("sp-action-button",i.K)},995898:(t,e,o)=>{o.d(e,{K:()=>b});var i=o(916420),r=o(903512),a=o(697038),s=o(194184);const n=r.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}::slotted([slot=icon]){max-block-size:100%}#label{place-self:center;text-align:center}#label:empty{display:none}:host{--spectrum-actionbutton-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-actionbutton-border-radius:var(--spectrum-corner-radius-100);--spectrum-actionbutton-border-width:var(--spectrum-border-width-100);--spectrum-actionbutton-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-actionbutton-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-actionbutton-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-actionbutton-focus-indicator-border-radius:calc(var(--spectrum-actionbutton-border-radius) + var(--spectrum-actionbutton-focus-indicator-gap))}:host([size=xs]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-50);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-actionbutton-font-size:var(--spectrum-font-size-50);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-50);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-50) - var(--spectrum-actionbutton-border-width))}:host([size=s]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-75);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-actionbutton-font-size:var(--spectrum-font-size-75);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-75) - var(--spectrum-actionbutton-border-width))}:host([size=m]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-100)*2 + var(--spectrum-workflow-icon-size-100));--spectrum-actionbutton-height:var(--spectrum-component-height-100);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-actionbutton-font-size:var(--spectrum-font-size-100);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-medium
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-100) - var(--spectrum-actionbutton-border-width))}:host([size=l]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-200)*2 + var(--spectrum-workflow-icon-size-200));--spectrum-actionbutton-height:var(--spectrum-component-height-200);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-actionbutton-font-size:var(--spectrum-font-size-200);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-200) - var(--spectrum-actionbutton-border-width))}:host([size=xl]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-300)*2 + var(--spectrum-workflow-icon-size-300));--spectrum-actionbutton-height:var(--spectrum-component-height-300);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-actionbutton-font-size:var(--spectrum-font-size-300);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-300) - var(--spectrum-actionbutton-border-width))}@media (forced-colors:active){:host{--highcontrast-actionbutton-focus-indicator-color:ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-actionbutton-background-color-default:Highlight;--highcontrast-actionbutton-background-color-hover:Highlight;--highcontrast-actionbutton-background-color-focus:Highlight;--highcontrast-actionbutton-background-color-down:Highlight;--highcontrast-actionbutton-background-color-disabled:ButtonFace;--highcontrast-actionbutton-border-color-default:HighlightText;--highcontrast-actionbutton-border-color-hover:HighlightText;--highcontrast-actionbutton-border-color-focus:HighlightText;--highcontrast-actionbutton-border-color-down:HighlightText;--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-default:HighlightText;--highcontrast-actionbutton-content-color-hover:HighlightText;--highcontrast-actionbutton-content-color-focus:HighlightText;--highcontrast-actionbutton-content-color-down:HighlightText;--highcontrast-actionbutton-content-color-disabled:GrayText}:host([selected]) #label,:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]){forced-color-adjust:none}}:host{background-color:var(
--highcontrast-actionbutton-background-color-default,var(
--mod-actionbutton-background-color-default,var(--spectrum-actionbutton-background-color-default)
)
);border-color:var(
--highcontrast-actionbutton-border-color-default,var(
--mod-actionbutton-border-color-default,var(--spectrum-actionbutton-border-color-default)
)
);border-radius:var(
--mod-actionbutton-border-radius,var(--spectrum-actionbutton-border-radius)
);border-width:var(
--mod-actionbutton-border-width,var(--spectrum-actionbutton-border-width)
);color:var(
--highcontrast-actionbutton-content-color-default,var(
--mod-actionbutton-content-color-default,var(--spectrum-actionbutton-content-color-default)
)
);gap:calc(var(
--mod-actionbutton-text-to-visual,
var(--spectrum-actionbutton-text-to-visual)
) + var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
));height:var(--mod-actionbutton-height,var(--spectrum-actionbutton-height));min-inline-size:var(
--mod-actionbutton-min-width,var(--spectrum-actionbutton-min-width)
);padding-inline:var(
--mod-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)
);position:relative}:host(:hover){background-color:var(
--highcontrast-actionbutton-background-color-hover,var(
--mod-actionbutton-background-color-hover,var(--spectrum-actionbutton-background-color-hover)
)
);border-color:var(
--highcontrast-actionbutton-border-color-hover,var(
--mod-actionbutton-border-color-hover,var(--spectrum-actionbutton-border-color-hover)
)
);color:var(
--highcontrast-actionbutton-content-color-hover,var(
--mod-actionbutton-content-color-hover,var(--spectrum-actionbutton-content-color-hover)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(:focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host([active]){background-color:var(
--highcontrast-actionbutton-background-color-down,var(
--mod-actionbutton-background-color-down,var(--spectrum-actionbutton-background-color-down)
)
);border-color:var(
--highcontrast-actionbutton-border-color-down,var(
--mod-actionbutton-border-color-down,var(--spectrum-actionbutton-border-color-down)
)
);color:var(
--highcontrast-actionbutton-content-color-down,var(
--mod-actionbutton-content-color-down,var(--spectrum-actionbutton-content-color-down)
)
)}:host([disabled]){background-color:var(
--highcontrast-actionbutton-background-color-disabled,var(
--mod-actionbutton-background-color-disabled,var(--spectrum-actionbutton-background-color-disabled)
)
);border-color:var(
--highcontrast-actionbutton-border-color-disabled,var(
--mod-actionbutton-border-color-disabled,var(--spectrum-actionbutton-border-color-disabled)
)
);color:var(
--highcontrast-actionbutton-content-color-disabled,var(
--mod-actionbutton-content-color-disabled,var(--spectrum-actionbutton-content-color-disabled)
)
)}::slotted([slot=icon]){color:inherit;height:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
);margin-inline-end:calc(var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
));margin-inline-start:calc(var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
));width:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
)}.hold-affordance+::slotted([slot=icon]),[icon-only]::slotted([slot=icon]){margin-inline-start:calc(var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
))}#label{color:inherit;font-size:var(
--mod-actionbutton-font-size,var(--spectrum-actionbutton-font-size)
);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=rtl]) .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{color:inherit;inset-block-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));inset-inline-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));position:absolute}:host{transition:border-color var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host:after{border-radius:var(
--mod-actionbutton-focus-indicator-border-radius,var(--spectrum-actionbutton-focus-indicator-border-radius)
);content:"";inset:0;margin:calc((var(
--mod-actionbutton-focus-indicator-gap,
var(--spectrum-actionbutton-focus-indicator-gap)
) + var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
))*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none}:host(.focus-visible){box-shadow:none}:host(:focus-visible){box-shadow:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host{--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-content-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-content-color-disabled
)}:host([quiet]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-quiet-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-quiet-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-quiet-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-quiet-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-quiet-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-quiet-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-quiet-border-color-disabled
)}:host([selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-selected-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-selected-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-selected-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-selected-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-selected-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-selected-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-selected-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-selected-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-selected-content-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-selected-border-color-disabled
)}:host([selected][emphasized]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-focus
)}:host([variant=black][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled
)}:host([variant=white][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled
)}:host([variant=black]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticblack-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticblack-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticblack-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticblack-content-color-focus
);--spectrum-actionbutton-focus-indicator-color:var(
--system-spectrum-actionbutton-staticblack-focus-indicator-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticblack-content-color-disabled
)}:host([variant=black][selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-border-color-disabled
);--spectrum-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-default
)
);--spectrum-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-hover
)
);--spectrum-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-down
)
);--spectrum-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-focus
)
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-disabled
)}:host([variant=white]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticwhite-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticwhite-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticwhite-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticwhite-content-color-focus
);--spectrum-actionbutton-focus-indicator-color:var(
--system-spectrum-actionbutton-staticwhite-focus-indicator-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-content-color-disabled
)}:host([variant=white][selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-focus
);--spectrum-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-default
)
);--spectrum-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-hover
)
);--spectrum-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-down
)
);--spectrum-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-focus
)
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-border-color-disabled
)}::slotted([slot=icon]){flex-shrink:0}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=xs]){min-width:var(--spectrum-actionbutton-height,0)}@media (forced-colors:active){:host{--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-disabled:GrayText}}
`,c=r.iv`
.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(--spectrum-alias-ui-icon-cornertriangle-size-100)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(--spectrum-alias-ui-icon-cornertriangle-size-300)}
`;var l=o(400779),d=o(29171);class u extends l.A{render(){return(0,d._)(r.dy),(({width:t=24,height:e=24,title:o="Corner Triangle300"}={})=>d.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`)()}}(0,o(589415).N)("sp-icon-corner-triangle300",u);var h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?p(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&h(e,o,a),a};const g={xs:"spectrum-UIIcon-CornerTriangle75",s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};let v;class b extends((0,i.I)(s.X,{validSizes:["xs","s","m","l","xl"]})){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{this.toggles&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected))},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[...super.styles,n,c]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(t){0===t.button&&(this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),v=setTimeout((()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))}),300))}onPointerup(){clearTimeout(v),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.preventDefault(),"ArrowDown"===e&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const t=super.buttonContent;return this.holdAffordance&&t.unshift(r.dy`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${g[this.size]}"
                ></sp-icon-corner-triangle300>
            `),t}updated(t){super.updated(t);const e="button"===this.role&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(e?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}m([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"emphasized",2),m([(0,a.Cb)({type:Boolean,reflect:!0,attribute:"hold-affordance"})],b.prototype,"holdAffordance",2),m([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"quiet",2),m([(0,a.Cb)({reflect:!0})],b.prototype,"role",2),m([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"selected",2),m([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"toggles",2),m([(0,a.Cb)({reflect:!0})],b.prototype,"variant",2),m([(0,a.Cb)({type:String})],b.prototype,"value",1)},64437:(t,e,o)=>{function i(t,e,o){const i=t.getAttribute(e);let r=i?i.split(/\s+/):[];r=r.filter((t=>!o.find((e=>t===e)))),r.length?t.setAttribute(e,r.join(" ")):t.removeAttribute(e)}function r(t,e,o){const r=Array.isArray(o)?o:[o],a=t.getAttribute(e),s=a?a.split(/\s+/):[];return r.every((t=>s.indexOf(t)>-1))?()=>{}:(s.push(...r),t.setAttribute(e,s.join(" ")),()=>i(t,e,r))}o.d(e,{H:()=>i,q:()=>r})},547179:(t,e,o)=>{o.d(e,{k:()=>n});var i=o(903512),r=o(190454);const a=["",()=>{}];class s extends r.sR{constructor(){super(...arguments),this.start=a,this.streamInside=a,this.end=a,this.streamOutside=a,this.state="off",this.handleStart=t=>{this.clearStream(),this.callHandler(this.start[1],t),!t.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleInside=t=>{this.handleStream(this.streamInside[1],t)},this.handleEnd=t=>{this.clearStream(),this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleOutside=t=>{this.handleStream(this.streamOutside[1],t)}}render(t){return i.Ld}update(t,[{start:e,end:o,streamInside:i=a,streamOutside:r=a}]){var s;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=(null==(s=t.options)?void 0:s.host)||this.element,this.start=e,this.end=o,this.streamInside=i,this.streamOutside=r,this.addListeners()}addListeners(t){this.state=t||this.state,"off"===this.state?(this.addListener(this.streamOutside[0],this.handleOutside),this.addListener(this.start[0],this.handleStart)):"on"===this.state&&(this.addListener(this.streamInside[0],this.handleInside),this.addListener(this.end[0],this.handleEnd))}callHandler(t,e){"function"==typeof t?t.call(this.host,e):t.handleEvent(e)}handleStream(t,e){this.stream||(this.callHandler(t,e),this.stream=requestAnimationFrame((()=>{this.stream=void 0})))}clearStream(){null!=this.stream&&(cancelAnimationFrame(this.stream),this.stream=void 0)}addListener(t,e){Array.isArray(t)?t.map((t=>{this.element.addEventListener(t,e)})):this.element.addEventListener(t,e)}removeListener(t,e){Array.isArray(t)?t.map((t=>{this.element.removeEventListener(t,e)})):this.element.removeEventListener(t,e)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleInside),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleOutside)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}}const n=(0,r.XM)(s)},528130:(t,e,o)=>{var i=o(916420),r=o(374069),a=o(903512),s=o(697038);const n=a.iv`
:host{--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-200);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host([size=m]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=l]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{display:flex;flex-wrap:wrap;gap:var(
--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal)
)}::slotted(*){flex-shrink:0}:host([vertical]){display:inline-flex;flex-direction:column;gap:var(
--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;var c=Object.defineProperty,l=Object.getOwnPropertyDescriptor;class d extends((0,i.I)(r.o)){constructor(){super(...arguments),this.vertical=!1}static get styles(){return[n]}handleSlotchange({target:t}){t.assignedElements().forEach((t=>{t.size=this.size}))}render(){return a.dy`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `}}((t,e,o,i)=>{for(var r,a=i>1?void 0:i?l(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);i&&a&&c(e,o,a)})([(0,s.Cb)({type:Boolean,reflect:!0})],d.prototype,"vertical",2),(0,o(589415).N)("sp-button-group",d)},833713:(t,e,o)=>{o.d(e,{A:()=>l});var i=o(903512),r=o(697038),a=o(813503),s=Object.defineProperty,n=Object.getOwnPropertyDescriptor,c=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?n(e,o):e,c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&s(e,o,a),a};class l extends a.Y{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const t=new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)||(this.checked=!this.inputElement.checked,this.inputElement.checked=this.checked)}render(){return i.dy`
            <input
                id="input"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}c([(0,r.Cb)({type:Boolean,reflect:!0})],l.prototype,"checked",2),c([(0,r.Cb)({type:Boolean,reflect:!0})],l.prototype,"readonly",2),c([(0,r.IO)("#input")],l.prototype,"inputElement",2)},721556:(t,e,o)=>{var i=o(769498);(0,o(589415).N)("sp-dialog",i.V)},769498:(t,e,o)=>{o.d(e,{V:()=>b});var i=o(374069),r=o(903512),a=o(697038),s=o(228532),n=o(64437),c=(o(897157),o(19607),o(528130),o(358319),o(446226)),l=o(405281);const d=r.iv`
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
`;var u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?h(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&u(e,o,a),a};let m=0;function g(t,e){const o=t.assignedElements(),i=[];return o.forEach((t=>{if(t.id)i.push(t.id);else{const o=e+"-"+m++;t.id=o,i.push(o)}})),i}const v=class extends((0,c.V)((0,l.h)(i.o,['[slot="hero"]','[slot="footer"]','[slot="button"]']))){constructor(){super(...arguments),this.error=!1,this.dismissable=!1,this.noDivider=!1,this.shouldManageTabOrderForScrolling=()=>{const{offsetHeight:t,scrollHeight:e}=this.contentElement;t<e?this.contentElement.tabIndex=0:this.contentElement.removeAttribute("tabindex")},this.labelledbyId="sp-dialog-label-"+v.instanceCount++,this.describedbyId="sp-dialog-description-"+v.instanceCount++}static get styles(){return[d]}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]')}get hasButtons(){return this.getSlotContentPresence('[slot="button"]')}get hasHero(){return this.getSlotContentPresence('[slot="hero"]')}close(){this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0,cancelable:!0}))}renderHero(){return r.dy`
            <slot name="hero"></slot>
        `}renderHeading(){return r.dy`
            <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
        `}renderContent(){return r.dy`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `}renderFooter(){return r.dy`
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        `}renderButtons(){const t={"button-group":!0,"button-group--noFooter":!this.hasFooter};return r.dy`
            <sp-button-group class=${(0,s.$)(t)}>
                <slot name="button"></slot>
            </sp-button-group>
        `}renderDismiss(){return r.dy`
            <sp-close-button
                class="close-button"
                label="Close"
                quiet
                size="m"
                @click=${this.close}
            ></sp-close-button>
        `}render(){return r.dy`
            <div class="grid">
                ${this.renderHero()} ${this.renderHeading()}
                ${this.error?r.dy`
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      `:r.Ld}
                ${this.noDivider?r.Ld:r.dy`
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                ${this.renderContent()}
                ${this.hasFooter?this.renderFooter():r.Ld}
                ${this.hasButtons?this.renderButtons():r.Ld}
                ${this.dismissable?this.renderDismiss():r.Ld}
            </div>
        `}shouldUpdate(t){return t.has("mode")&&this.mode&&(this.dismissable=!1),t.has("dismissable")&&this.dismissable&&(this.dismissable=!this.mode),super.shouldUpdate(t)}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","dialog")}onHeadingSlotchange({target:t}){this.conditionLabelledby&&(this.conditionLabelledby(),delete this.conditionLabelledby);const e=g(t,this.labelledbyId);e.length&&(this.conditionLabelledby=(0,n.q)(this,"aria-labelledby",e))}onContentSlotChange({target:t}){this.conditionDescribedby&&(this.conditionDescribedby(),delete this.conditionDescribedby);const e=g(t,this.describedbyId);if(e.length&&e.length<4)this.conditionDescribedby=(0,n.q)(this,"aria-describedby",e);else if(!e.length){const t=!!this.id;t||(this.id=this.describedbyId);const e=(0,n.q)(this,"aria-describedby",this.id);this.conditionDescribedby=()=>{e(),t||this.removeAttribute("id")}}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("resize",this.shouldManageTabOrderForScrolling)}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),super.disconnectedCallback()}};let b=v;b.instanceCount=0,p([(0,a.IO)(".close-button")],b.prototype,"closeButton",2),p([(0,a.IO)(".content")],b.prototype,"contentElement",2),p([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"error",2),p([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"dismissable",2),p([(0,a.Cb)({type:Boolean,reflect:!0,attribute:"no-divider"})],b.prototype,"noDivider",2),p([(0,a.Cb)({type:String,reflect:!0})],b.prototype,"mode",2),p([(0,a.Cb)({type:String,reflect:!0})],b.prototype,"size",2)},897157:(t,e,o)=>{var i=o(916420),r=o(374069),a=o(903512),s=o(697038),n=o(458047),c=Object.defineProperty,l=Object.getOwnPropertyDescriptor;class d extends((0,i.I)(r.o,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.vertical=!1}render(){return a.dy``}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","separator")}updated(t){super.updated(t),t.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}d.styles=[n.Z],((t,e,o,i)=>{for(var r,a=i>1?void 0:i?l(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);i&&a&&c(e,o,a)})([(0,s.Cb)({type:Boolean,reflect:!0})],d.prototype,"vertical",2),(0,o(589415).N)("sp-divider",d)},458047:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(903512).iv`
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
`},187309:(t,e,o)=>{o.d(e,{N:()=>u});var i=o(374069),r=o(903512),a=o(697038),s=o(172434);const n=r.iv`
:host{--spectrum-fieldgroup-margin:var(--spectrum-spacing-300);--spectrum-fieldgroup-readonly-delimiter:","}.spectrum-FieldGroup--toplabel{flex-direction:column}.spectrum-FieldGroup--sidelabel{flex-direction:row}.group{align-items:top;display:flex;flex-flow:column wrap}:host([vertical]) .group{flex-direction:column}:host([horizontal]) .group{flex-direction:row}:host([horizontal]) .group slot:not([name])::slotted(:not(:last-child)){margin-inline-end:var(--spectrum-fieldgroup-margin)}:host([horizontal]) .group .spectrum-HelpText{flex-basis:100%}:host([dir=rtl]:not([vertical])) slot:not([name])::slotted(:not(:last-child)),:host([horizontal][dir=rtl]) slot:not([name])::slotted(:not(:last-child)){margin:0 0 0 var(--spectrum-fieldgroup-margin)}:host([dir=ltr]:not([vertical])) slot:not([name])::slotted(:not(:last-child)),:host([horizontal][dir=ltr]) slot:not([name])::slotted(:not(:last-child)){margin:0 var(--spectrum-fieldgroup-margin) 0 0}
`;var c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?l(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&c(e,o,a),a};class u extends((0,s.i)(i.o,{mode:"external"})){constructor(){super(...arguments),this.horizontal=!1,this.invalid=!1,this.label="",this.vertical=!1}static get styles(){return[n]}handleSlotchange(){}render(){return r.dy`
            <div class="group" role="presentation">
                <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            ${this.renderHelpText(this.invalid)}
        `}updated(t){super.updated(t),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}}d([(0,a.Cb)({type:Boolean,reflect:!0})],u.prototype,"horizontal",2),d([(0,a.Cb)({type:Boolean,reflect:!0})],u.prototype,"invalid",2),d([(0,a.Cb)()],u.prototype,"label",2),d([(0,a.Cb)({type:Boolean,reflect:!0})],u.prototype,"vertical",2)},661517:(t,e,o)=>{var i=o(916420),r=o(374069),a=o(903512),s=o(697038),n=o(400779),c=o(29171);class l extends n.A{render(){return(0,c._)(a.dy),(({width:t=24,height:e=24,title:o="Asterisk100"}={})=>c.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`)()}}var d=o(589415);(0,d.N)("sp-icon-asterisk100",l);const u=a.iv`
.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(--spectrum-alias-ui-icon-asterisk-size-200)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(--spectrum-alias-ui-icon-asterisk-size-300)}
`;var h=o(64437);const p=Symbol("element resolver updated");class m{constructor(t,{selector:e}={selector:""}){this._element=null,this._selector="",this.mutationCallback=t=>{let e=!1;t.forEach((t=>{if(!e){if("childList"===t.type){const o=this.element&&[...t.removedNodes].includes(this.element),i=!!this.selector&&[...t.addedNodes].some((t=>{var e;return null==(e=null==t?void 0:t.matches)?void 0:e.call(t,this.selector)}));e=e||o||i}if("attributes"===t.type){const o=t.target===this.element,i=!!this.selector&&t.target.matches(this.selector);e=e||o||i}}})),e&&this.resolveElement()},this.host=t,this.selector=e,this.observer=new MutationObserver(this.mutationCallback),this.host.addController(this)}get element(){return this._element}set element(t){if(t===this.element)return;const e=this.element;this._element=t,this.host.requestUpdate(p,e)}get selector(){return this._selector}set selector(t){t!==this.selector&&(this.releaseElement(),this._selector=t,this.resolveElement())}hostConnected(){this.resolveElement(),this.observer.observe(this.host.getRootNode(),{subtree:!0,childList:!0,attributes:!0})}hostDisconnected(){this.releaseElement(),this.observer.disconnect()}resolveElement(){if(!this.selector)return void this.releaseElement();const t=this.host.getRootNode();this.element=t.querySelector(this.selector)}releaseElement(){this.element=null}}const g=a.iv`
:host{--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-medium
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
);--spectrum-fieldlabel-font-weight:var(--spectrum-regular-font-weight);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-small
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-small
)}:host([size=m]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-medium
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
)}:host([size=l]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-100);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-100);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-large
)}:host([size=xl]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-200);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-200);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-extra-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-extra-large
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;color:var(--spectrum-fieldlabel-color);display:block;font-size:var(
--mod-fieldlabel-font-size,var(--spectrum-fieldlabel-font-size)
);font-weight:var(
--mod-fieldlabel-font-weight,var(--spectrum-fieldlabel-font-weight)
);line-height:var(
--mod-fieldlabel-line-height,var(--spectrum-fieldlabel-line-height)
);min-block-size:var(
--mod-fieldlabel-min-height,var(--spectrum-fieldlabel-min-height)
);padding-block:var(--spectrum-fieldlabel-top-to-text) var(--spectrum-fieldlabel-bottom-to-text);padding-inline:0;vertical-align:top}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){line-height:var(
--mod-fieldlabel-line-height-cjk,var(--spectrum-fieldlabel-line-height-cjk)
)}.required-icon{margin-block:0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0}:host([side-aligned=start]){display:inline-block;padding-block:var(
--mod-fieldlabel-side-padding-top,var(--spectrum-fieldlabel-side-padding-top)
) 0;padding-inline:0 var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
)}:host([side-aligned=start]) .required-icon{margin-block:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0}:host([side-aligned=end]){display:inline-block;padding-block:var(
--mod-fieldlabel-side-padding-top,var(--spectrum-fieldlabel-side-padding-top)
) 0;padding-inline:0 var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
);text-align:end}:host([disabled]){color:var(
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}:host([disabled]) .required-icon{color:var(
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}@media (forced-colors:active){:host{--highcontrast-disabled-content-color:GrayText}}
`;var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?b(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&v(e,o,a),a};const k=class extends((0,i.I)(r.o)){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1,this.resolvedElement=new m(this)}static get styles(){return[g,u]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),o=this.target,i=o.getRootNode(),r=i.host;i===e&&o.forceFocusVisible?o.forceFocusVisible():r&&r.forceFocusVisible&&r.forceFocusVisible()}addTarget(t){this.target=t.focusElement||t,this.target.getRootNode()===this.getRootNode()?(0,h.q)(this.target,"aria-labelledby",[this.id]):this.target.setAttribute("aria-label",this.labelText)}removeTarget(){this.target&&(this.target.getRootNode()===this.getRootNode()?(0,h.H)(this.target,"aria-labelledby",[this.id]):this.target.removeAttribute("aria-label"))}async manageTarget(){this.removeTarget();const t=this.resolvedElement.element;t?(t.localName.search("-")>0&&await customElements.whenDefined(t.localName),void 0!==t.updateComplete&&await t.updateComplete,this.addTarget(t)):this.target=t}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});return t.length?t.map((t=>(t.textContent||"").trim())).join(" "):""}render(){return a.dy`
            <label>
                <slot></slot>
                ${this.required?a.dy`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:a.dy``}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick)}willUpdate(t){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${k.instanceCount++}`),t.has("for")&&(this.resolvedElement.selector=this.for?`#${this.for}`:""),(t.has("id")||t.has(p))&&this.manageTarget()}};let y=k;y.instanceCount=0,f([(0,s.Cb)({type:Boolean,reflect:!0})],y.prototype,"disabled",2),f([(0,s.Cb)({type:String})],y.prototype,"id",2),f([(0,s.Cb)({type:String})],y.prototype,"for",2),f([(0,s.Cb)({type:Boolean,reflect:!0})],y.prototype,"required",2),f([(0,s.IO)("slot")],y.prototype,"slotEl",2),f([(0,s.Cb)({type:String,reflect:!0,attribute:"side-aligned"})],y.prototype,"sideAligned",2),(0,d.N)("sp-field-label",y)},172434:(t,e,o)=>{o.d(e,{i:()=>c});var i=o(903512),r=o(123584),a=o(64437);const s=class{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:t})=>{this.handleHelpText(t),this.handleNegativeHelpText(t)},this.host=t,this.instanceCount=s.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=e}get isInternal(){return"internal"===this.mode}render(t){return i.dy`
            <div id=${(0,r.o)(this.isInternal?this.id:void 0)}>
                <slot
                    name=${t?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=(0,a.q)(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){"negative-help-text"===t.name&&t.assignedElements().forEach((t=>t.variant="negative"))}};let n=s;function c(t,{mode:e}={mode:"internal"}){return class extends t{constructor(){super(...arguments),this.helpTextManager=new n(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(t){return this.helpTextManager.render(t)}}}n.instanceCount=0},725962:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(903512).iv`
.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(--spectrum-alias-ui-icon-checkmark-size-50)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(--spectrum-alias-ui-icon-checkmark-size-75)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(--spectrum-alias-ui-icon-checkmark-size-100)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(--spectrum-alias-ui-icon-checkmark-size-200)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(--spectrum-alias-ui-icon-checkmark-size-300)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(--spectrum-alias-ui-icon-checkmark-size-400)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(--spectrum-alias-ui-icon-checkmark-size-500)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(--spectrum-alias-ui-icon-checkmark-size-600)}
`},368666:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(903512).iv`
.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(--spectrum-alias-ui-icon-chevron-size-75)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(--spectrum-alias-ui-icon-chevron-size-100)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(--spectrum-alias-ui-icon-chevron-size-200)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(--spectrum-alias-ui-icon-chevron-size-300)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(--spectrum-alias-ui-icon-chevron-size-400)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(--spectrum-alias-ui-icon-chevron-size-500)}
`},298229:(t,e,o)=>{var i=o(903512),r=o(400779),a=o(29171);class s extends r.A{render(){return(0,a._)(i.dy),(({width:t=24,height:e=24,title:o="Checkmark100"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`)()}}(0,o(589415).N)("sp-icon-checkmark100",s)},333717:(t,e,o)=>{var i=o(903512),r=o(400779),a=o(347952),s=o(29171);class n extends r.A{render(){return(0,s._)(i.dy),(0,a.Y)()}}(0,o(589415).N)("sp-icon-chevron100",n)},347952:(t,e,o)=>{o.d(e,{Y:()=>r});var i=o(29171);const r=({width:t=24,height:e=24,title:o="Chevron100"}={})=>i.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${o}
    width=${t}
    height=${e}
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`},358319:(t,e,o)=>{var i=o(903512),r=o(400779),a=o(857534);class s extends r.A{render(){return(0,a._)(i.dy),(({width:t=24,height:e=24,hidden:o=!1,title:i="Alert"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}(0,o(589415).N)("sp-icon-alert",s)},486538:(t,e,o)=>{var i=o(903512),r=o(400779),a=o(857534);class s extends r.A{render(){return(0,a._)(i.dy),(({width:t=24,height:e=24,hidden:o=!1,title:i="Checkmark Circle"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${t}
    height=${e}
    viewBox="0 0 36 36"
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.666 9.08L16.018 27.341a1.208 1.208 0 0 1-.875.461c-.024.002-.05.002-.073.002a1.2 1.2 0 0 1-.85-.351l-7.784-7.795a1.2 1.2 0 0 1 0-1.698l1.326-1.325a1.201 1.201 0 0 1 1.695 0l5.346 5.347L25.314 8.473A1.203 1.203 0 0 1 27 8.263l1.455 1.133a1.205 1.205 0 0 1 .211 1.684Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}(0,o(589415).N)("sp-icon-checkmark-circle",s)},135514:(t,e,o)=>{var i=o(903512),r=o(400779),a=o(857534);class s extends r.A{render(){return(0,a._)(i.dy),(({width:t=24,height:e=24,hidden:o=!1,title:i="Info"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}(0,o(589415).N)("sp-icon-info",s)},56193:(t,e,o)=>{var i=o(697038),r=o(412425),a=o(813503);const s=o(903512).iv`
:host{--spectrum-link-animation-duration:var(--spectrum-animation-duration-100);--spectrum-link-text-color-primary-default:var(
--spectrum-accent-content-color-default
);--spectrum-link-text-color-primary-hover:var(
--spectrum-accent-content-color-hover
);--spectrum-link-text-color-primary-active:var(
--spectrum-accent-content-color-down
);--spectrum-link-text-color-primary-focus:var(
--spectrum-accent-content-color-key-focus
);--spectrum-link-text-color-secondary-default:var(
--spectrum-neutral-content-color-default
);--spectrum-link-text-color-secondary-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-link-text-color-secondary-active:var(
--spectrum-neutral-content-color-down
);--spectrum-link-text-color-secondary-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-link-text-color-white:var(--spectrum-white);--spectrum-link-text-color-black:var(--spectrum-black)}@media (forced-colors:active){:host{--highcontrast-link-text-color-primary-default:LinkText;--highcontrast-link-text-color-primary-hover:LinkText;--highcontrast-link-text-color-primary-active:LinkText;--highcontrast-link-text-color-primary-focus:LinkText;--highcontrast-link-text-color-secondary-default:LinkText;--highcontrast-link-text-color-secondary-hover:LinkText;--highcontrast-link-text-color-secondary-active:LinkText;--highcontrast-link-text-color-secondary-focus:LinkText;--highcontrast-link-text-color-white:LinkText;--highcontrast-link-text-color-black:LinkText}}a{-webkit-text-decoration-skip:objects;background-color:#0000;color:var(
--highcontrast-link-text-color-primary-default,var(
--mod-link-text-color-primary-default,var(--spectrum-link-text-color-primary-default)
)
);cursor:pointer;outline:none;-webkit-text-decoration:underline;text-decoration:underline;transition:color var(
--mod-link-animation-duration,var(--spectrum-link-animation-duration)
) ease-in-out}a:hover{color:var(
--highcontrast-link-text-color-primary-hover,var(
--mod-link-text-color-primary-hover,var(--spectrum-link-text-color-primary-hover)
)
)}a:active{color:var(
--highcontrast-link-text-color-primary-active,var(
--mod-link-text-color-primary-active,var(--spectrum-link-text-color-primary-active)
)
)}a.focus-visible{color:var(
--highcontrast-link-text-color-primary-focus,var(
--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)
)
);-webkit-text-decoration:underline;text-decoration:underline;text-decoration-color:var(--highcontrast-link-focus-color,inherit);text-decoration-style:double}a:focus-visible{color:var(
--highcontrast-link-text-color-primary-focus,var(
--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)
)
);-webkit-text-decoration:underline;text-decoration:underline;text-decoration-color:var(--highcontrast-link-focus-color,inherit);text-decoration-style:double}:host([variant=secondary]) a{color:var(
--highcontrast-link-text-color-secondary-default,var(
--mod-link-text-color-secondary-default,var(--spectrum-link-text-color-secondary-default)
)
)}:host([variant=secondary]) a:hover{color:var(
--highcontrast-link-text-color-secondary-hover,var(
--mod-link-text-color-secondary-hover,var(--spectrum-link-text-color-secondary-hover)
)
)}:host([variant=secondary]) a:active{color:var(
--highcontrast-link-text-color-secondary-active,var(
--mod-link-text-color-secondary-active,var(--spectrum-link-text-color-secondary-active)
)
)}:host([variant=secondary]) a:focus{color:var(
--highcontrast-link-text-color-secondary-focus,var(
--mod-link-text-color-secondary-focus,var(--spectrum-link-text-color-secondary-focus)
)
)}:host([quiet]) a{-webkit-text-decoration:none;text-decoration:none}:host([quiet]) a:hover{-webkit-text-decoration:underline;text-decoration:underline}:host([static=white]) a{color:var(
--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white))
)}:host([static=white]) a:active,:host([static=white]) a:focus,:host([static=white]) a:hover{color:var(
--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white))
)}:host([static=black]) a{color:var(
--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black))
)}:host([static=black]) a:active,:host([static=black]) a:focus,:host([static=black]) a:hover{color:var(
--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black))
)}:host{display:inline}:host(:focus){outline:none}:host([href]) a.focus-visible{-webkit-text-decoration:underline;text-decoration:underline;text-decoration-style:double}:host([href]) a:focus-visible{-webkit-text-decoration:underline;text-decoration:underline;text-decoration-style:double}
`;var n=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?c(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&n(e,o,a),a};class d extends((0,r.V)(a.Y)){constructor(){super(...arguments),this.quiet=!1}static get styles(){return[s]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}l([(0,i.IO)("#anchor")],d.prototype,"anchorElement",2),l([(0,i.Cb)({type:String,reflect:!0})],d.prototype,"variant",2),l([(0,i.Cb)({type:String,reflect:!0})],d.prototype,"static",2),l([(0,i.Cb)({type:Boolean,reflect:!0,attribute:"quiet"})],d.prototype,"quiet",2),(0,o(589415).N)("sp-link",d)},949770:(t,e,o)=>{var i=o(562246);(0,o(589415).N)("sp-menu-item",i.sN)},482873:(t,e,o)=>{var i=o(790538);(0,o(589415).N)("sp-menu",i.v)},790538:(t,e,o)=>{o.d(e,{v:()=>h});var i=o(374069),r=o(903512),a=o(697038),s=o(562246);const n=r.iv`
:host{--spectrum-menu-margin-x:var(--spectrum-global-dimension-size-40);--spectrum-listitem-texticon-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-texticon-heading-text-font-weight:400;--spectrum-listitem-texticon-heading-text-transform:uppercase;--spectrum-listitem-texticon-heading-letter-spacing:0.06em;--spectrum-listitem-texticon-heading-margin:var(
--spectrum-global-dimension-size-75
) 0 0 0;--spectrum-listitem-texticon-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-texticon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-listitem-texticon-selectable-padding-right:calc(var(--spectrum-listitem-texticon-ui-icon-width) + var(--spectrum-listitem-texticon-ui-icon-gap) + var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
));--spectrum-listitem-texticon-label-line-height:1.3;--spectrum-listitem-texticon-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-texticon-padding-left:var(
--spectrum-listitem-m-texticon-padding-left
);--spectrum-listitem-textthumbnail-padding-left:var(
--spectrum-listitem-m-textthumbnail-padding-left
);--spectrum-listitem-texticon-text-size:var(
--spectrum-listitem-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-listitem-texticon-text-font-weight:var(
--spectrum-listitem-m-texticon-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-texticon-icon-gap:var(
--spectrum-listitem-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-divider-padding:var(
--spectrum-listitem-m-texticon-divider-padding,var(--spectrum-global-dimension-static-size-40)
);--spectrum-listitem-texticon-ui-icon-margin-top:var(
--spectrum-listitem-m-texticon-ui-icon-margin-top,var(--spectrum-global-dimension-size-125)
);--spectrum-listitem-texticon-ui-icon-width:var(
--spectrum-listitem-m-texticon-ui-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-listitem-texticon-ui-icon-gap:var(
--spectrum-listitem-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-padding-right:var(
--spectrum-listitem-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-listitem-texticon-focus-indicator-size:var(
--spectrum-listitem-m-texticon-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-height:var(
--spectrum-listitem-m-texticon-height,var(--spectrum-global-dimension-size-400)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(--spectrum-listitem-texticon-selectable-padding-right)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(--spectrum-listitem-texticon-selectable-padding-right)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host{--spectrum-listheading-text-color:var(--spectrum-global-color-gray-700)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap));display:inline-flex;flex-direction:column;width:var(--swc-menu-width)}:host(:focus){outline:none}::slotted(*){--swc-menu-width:100%;flex-shrink:0}
`;var c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?l(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&c(e,o,a),a};function u(t,e){return!!e&&(t===e||t.contains(e))}class h extends i.o{constructor(){super(),this.isSubmenu=!1,this.label="",this.ignore=!1,this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemMap=new Map,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[n]}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}childMenuItemMapHas(t){const e=this.childItemMap.get(t.__swcMenuItemId);return!(null==e||!e.deref())}updateCachedMenuItems(){this.cachedChildItems=[];const t=this.menuSlot?this.menuSlot.assignedElements({flatten:!0}):[];for(const e of t){const t=e instanceof s.sN?[e]:[...e.querySelectorAll("*")];for(const e of t)this.childMenuItemMapHas(e)&&this.cachedChildItems.push(e)}return this.cachedChildItems}get childRole(){if("listbox"===this.resolvedRole)return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){var e,o;if(t.item.menuData.focusRoot&&!this.ignore&&(this.tabIndex=-1),t.focusRoot=this,this.addChildItem(t.item),"inherit"===this.selects){this.resolvedSelects="inherit";const i=null==(e=t.currentAncestorWithSelects)?void 0:e.ignore;this.resolvedRole=i?"none":(null==(o=t.currentAncestorWithSelects)?void 0:o.getAttribute("role"))||this.getAttribute("role")||void 0}else this.selects?(this.resolvedRole=this.ignore?"none":this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,t.currentAncestorWithSelects=this):(this.resolvedRole=this.ignore?"none":this.getAttribute("role")||void 0,this.resolvedSelects="none"===this.resolvedRole?"ignore":"none")}onSelectableItemAddedOrUpdated(t){("single"===this.resolvedSelects||"multiple"===this.resolvedSelects||!this.selects&&"ignore"!==this.resolvedSelects)&&!t.item.menuData.selectionRoot&&(t.item.setRole(this.childRole),t.selectionRoot=this)}addChildItem(t){this.childItemMap.set(t.__swcMenuItemId,new WeakRef(t)),this.handleItemsChanged()}async removeChildItem(t){this.childItemMap.delete(t.item.__swcMenuItemId),this.cachedChildItems=void 0,t.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every((t=>t.disabled)))return;if(this.childItems.some((t=>t.menuData.focusRoot!==this)))return void super.focus({preventScroll:t});this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.querySelector("[selected]");e&&!t&&e.scrollIntoView({block:"nearest"})}onClick(t){if(t.defaultPrevented)return;const e=t.composedPath().find((t=>t instanceof Element&&t.getAttribute("role")===this.childRole));null!=e&&e.href&&e.href.length?this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})):(null==e?void 0:e.menuData.selectionRoot)===this&&this.childItems.length&&(t.preventDefault(),e.hasSubmenu||e.open||(this.selectOrToggleItem(e),this.prepareToCleanUp()))}handleFocusin(t){var e;const o=u(this,t.relatedTarget);if(o||this.childItems.some((t=>t.menuData.focusRoot!==this)))return;const i=this.getRootNode().activeElement,r=(null==(e=this.childItems[this.focusedItemIndex])?void 0:e.menuData.selectionRoot)||this;if((i!==r||!o)&&(r.focus({preventScroll:!0}),i&&0===this.focusedItemIndex)){const t=this.childItems.findIndex((t=>t===i));t>0&&this.focusMenuItemByOffset(t)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(t){if(u(this,t.relatedTarget))t.composedPath()[0].focused=!1;else{if(this.stopListeningToKeyboard(),t.target===this&&this.childItems.some((t=>t.menuData.focusRoot===this))){const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1)}this.removeAttribute("aria-activedescendant")}}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(t){const e=this.resolvedSelects,o=new Map(this.selectedItemsMap),i=this.selected.slice(),r=this.selectedItems.slice(),a=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),"multiple"===e){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const e=[],o=[];for(const[,t]of this.childItemMap){const i=t.deref();i&&i.menuData.selectionRoot===this&&this.selectedItemsMap.has(i)&&(e.push(i.value),o.push(i))}this.selected=e,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this.selected=[t.value],this.selectedItems=[t];if(await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})))return this.selected=i,this.selectedItems=r,this.selectedItemsMap=o,void(this.value=a);if("single"===e){for(const e of o.keys())e!==t&&(e.selected=!1);t.selected=!0}else"multiple"===e&&(t.selected=!t.selected)}navigateWithinMenu(t){const{code:e}=t,o=this.childItems[this.focusedItemIndex],i="ArrowDown"===e?1:-1,r=this.focusMenuItemByOffset(i);r!==o&&(t.preventDefault(),r.scrollIntoView({block:"nearest"}))}navigateBetweenRelatedMenus(t){const e=this.isLTR&&"ArrowRight"===t||!this.isLTR&&"ArrowLeft"===t,o=this.isLTR&&"ArrowLeft"===t||!this.isLTR&&"ArrowRight"===t;if(e){const t=this.childItems[this.focusedItemIndex];null!=t&&t.hasSubmenu&&(this.blur(),t.openOverlay())}else o&&this.isSubmenu&&this.dispatchEvent(new Event("close",{bubbles:!0}))}handleKeydown(t){var e;const{code:o}=t;if("Tab"!==o){if("Space"===o){const t=this.childItems[this.focusedItemIndex];if(null!=t&&t.hasSubmenu)return this.blur(),void t.openOverlay()}"Space"!==o&&"Enter"!==o?"ArrowDown"!==o&&"ArrowUp"!==o?this.navigateBetweenRelatedMenus(o):this.navigateWithinMenu(t):null==(e=this.childItems[this.focusedItemIndex])||e.click()}else this.prepareToCleanUp()}focusMenuItemByOffset(t){const e=t||1;this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],i=this.childItems.length;for(;o.disabled&&i;)i-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return null!=o&&o.disabled||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",(()=>{requestAnimationFrame((()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())}))}),{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,o=[],i=[];let r=this.childItems.length;for(;r;){r-=1;const a=this.childItems[r];a.menuData.selectionRoot===this&&(a.selected&&(t=r,e.set(a,!0),o.unshift(a.value),i.unshift(a)),r!==t&&(a.focused=!1))}i.map(((t,e)=>{e>0&&(t.focused=!1)})),this.selectedItemsMap=e,this.selected=o,this.selectedItems=i,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let t=()=>{};this.cacheUpdated=new Promise((e=>t=e)),this._willUpdateItems=!0,window.requestAnimationFrame((()=>{void 0===this.cachedChildItems&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,t()}))}}updateItemFocus(){if(0==this.childItems.length)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}forwardFocusVisibleToItem(t){t.menuData.focusRoot===this&&(t.focused=this.hasVisibleFocusInTree(),this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus())}render(){return r.dy`
            <slot></slot>
        `}firstUpdated(t){super.firstUpdated(t),!this.hasAttribute("tabindex")&&!this.ignore&&("group"===this.getAttribute("role")?this.tabIndex=-1:this.tabIndex=0);const e=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];[...this.children].forEach((t=>{"sp-menu-item"===t.localName&&e.push(t.updateComplete)})),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const t=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];for(const[,e]of this.childItemMap){const o=e.deref();o&&t.push(o.triggerUpdate())}this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),!this.hasAttribute("role")&&!this.ignore&&this.setAttribute("role",this.ownRole),this.updateComplete.then((()=>this.updateItemFocus()))}disconnectedCallback(){this.cachedChildItems=void 0,super.disconnectedCallback()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}d([(0,a.Cb)({type:String,reflect:!0})],h.prototype,"label",2),d([(0,a.Cb)({type:Boolean,reflect:!0})],h.prototype,"ignore",2),d([(0,a.Cb)({type:String,reflect:!0})],h.prototype,"selects",2),d([(0,a.Cb)({type:String})],h.prototype,"value",2),d([(0,a.Cb)({type:String,attribute:"value-separator"})],h.prototype,"valueSeparator",2),d([(0,a.Cb)({attribute:!1})],h.prototype,"selected",2),d([(0,a.Cb)({attribute:!1})],h.prototype,"selectedItems",2),d([(0,a.IO)("slot:not([name])")],h.prototype,"menuSlot",2)},562246:(t,e,o)=>{o.d(e,{sN:()=>A});var i=o(903512),r=o(697038),a=(o(298229),o(412425)),s=o(813503),n=(o(333717),o(368666)),c=o(359815);class l extends Event{constructor({root:t}){super("sp-overlay-close",{bubbles:!0,composed:!0}),this.root=t}}const d=i.iv`
.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{padding-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) .checkmark{padding-right:var(--spectrum-listitem-texticon-icon-gap)}.checkmark{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]) .chevron{padding-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) .chevron{padding-right:var(--spectrum-listitem-texticon-icon-gap)}.chevron{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]){border-left:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-texticon-text-size);font-style:normal;font-weight:var(--spectrum-listitem-texticon-text-font-weight);margin:0;min-height:var(--spectrum-listitem-texticon-height);padding:var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-right) var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-left);position:relative;-webkit-text-decoration:none;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) [name=icon]+#label{margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) [name=icon]+#label{margin-right:var(--spectrum-listitem-texticon-icon-gap)}.icon+#label,[name=icon]+#label{width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap) - var(--spectrum-listitem-textthumbnail-padding-left) - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
))}#label{flex:auto}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{padding-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{padding-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host .is-highlighted,:host .is-open,:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-texticon-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([selected]){color:var(
--spectrum-listitem-m-texticon-text-color-selected,var(--spectrum-alias-component-text-color-default)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-texticon-ui-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host([active]),:host:active{background-color:var(
--spectrum-listitem-m-texticon-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);cursor:default}@media (forced-colors:active){:host{--spectrum-listheading-text-color:ButtonText;--spectrum-listitem-m-texticon-background-color:ButtonFace;--spectrum-listitem-m-texticon-background-color-disabled:ButtonFace;--spectrum-listitem-m-texticon-background-color-down:ButtonFace;--spectrum-listitem-m-texticon-background-color-hover:Highlight;--spectrum-listitem-m-texticon-background-color-key-focus:Highlight;--spectrum-listitem-m-texticon-focus-indicator-color:Highlight;--spectrum-listitem-m-texticon-text-color:ButtonText;--spectrum-listitem-m-texticon-text-color-disabled:GrayText;--spectrum-listitem-m-texticon-text-color-hover:HighlightText;--spectrum-listitem-m-texticon-text-color-key-focus:HighlightText;--spectrum-listitem-m-texticon-text-color-selected:ButtonText;--spectrum-listitem-m-texticon-ui-icon-color-selected:Highlight;forced-color-adjust:none}:host(:not([disabled])) .is-highlighted,:host(:not([disabled])) .is-open,:host(:not([disabled]).focus-visible),:host(:not([disabled]):focus),:host(:not([disabled]):hover),:host(:not([disabled])[focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:not([disabled])) .is-highlighted,:host(:not([disabled])) .is-open,:host(:not([disabled]):focus),:host(:not([disabled]):focus-visible),:host(:not([disabled]):hover),:host(:not([disabled])[focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:not([disabled]).focus-visible[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark,:host(:not([disabled])[selected]) .is-highlighted .checkmark,:host(:not([disabled])[selected]) .is-open .checkmark,:host(:not([disabled])[selected]:focus) .checkmark,:host(:not([disabled])[selected]:hover) .checkmark{color:HighlightText}:host(:not([disabled]).focus-visible[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark,:host(:not([disabled])[selected]) .is-highlighted .checkmark,:host(:not([disabled])[selected]) .is-open .checkmark,:host(:not([disabled])[selected]:focus) .checkmark,:host(:not([disabled])[selected]:hover) .checkmark{color:HighlightText}:host(:not([disabled]):focus-visible[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark,:host(:not([disabled])[selected]) .is-highlighted .checkmark,:host(:not([disabled])[selected]) .is-open .checkmark,:host(:not([disabled])[selected]:focus) .checkmark,:host(:not([disabled])[selected]:hover) .checkmark{color:HighlightText}}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}:host([disabled]){pointer-events:none}#button{inset:0;position:absolute}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}:host([dir=rtl]) .chevron{padding-left:var(--spectrum-listitem-texticon-icon-gap);padding-right:0}
`;var u=o(725962),h=o(197367),p=o(108348),m=Object.defineProperty,g=Object.getOwnPropertyDescriptor,v=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?g(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&m(e,o,a),a};class b extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(t){this._item=t}}class f extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(t){this.item.menuData.focusRoot=this.item.menuData.focusRoot||t}set selectionRoot(t){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||t}get item(){return this._item}set currentAncestorWithSelects(t){this._currentAncestorWithSelects=t}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(t){this._item=t,this._currentAncestorWithSelects=void 0,t.menuData={focusRoot:void 0,selectionRoot:void 0}}}let k=new f,y=new b,x=0;function w(){0===x&&(x=requestAnimationFrame((()=>{k=new f,x=0})))}let _=0;const S=class extends((0,a.V)(s.Y)){constructor(){super(),this.isInSubmenu=!1,this.__swcMenuItemId=S.nextId++,this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.hasSubmenu=!1,this.noWrap=!1,this.open=!1,this.handleSubmenuChange=()=>{var t;null==(t=this.menuData.selectionRoot)||t.selectOrToggleItem(this)},this.handleSubmenuPointerenter=()=>{this.leaveTimeout&&(clearTimeout(this.leaveTimeout),delete this.leaveTimeout)},this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0}),new p._(this,{config:{characterData:!0,childList:!0,subtree:!0},callback:()=>{this.breakItemChildrenCache()}})}static get styles(){return[d,u.Z,n.Z]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return this.itemChildren.content.reduce(((t,e)=>t+(e.textContent||"").trim()),"")}get focusElement(){return this}get itemChildren(){var t,e;if(this._itemChildren)return this._itemChildren;const o=null==(t=this.shadowRoot)?void 0:t.querySelector('slot[name="icon"]'),i=o?o.assignedElements().map((t=>{const e=t.cloneNode(!0);return e.removeAttribute("slot"),e.classList.toggle("icon"),e})):[],r=null==(e=this.shadowRoot)?void 0:e.querySelector("slot:not([name])"),a=r?r.assignedNodes().map((t=>t.cloneNode(!0))):[];return this._itemChildren={icon:i,content:a},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}render(){return i.dy`
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="value"></slot>
            ${this.selected?i.dy`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 icon checkmark"
                      ></sp-icon-checkmark100>
                  `:i.dy``}
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):i.dy``}
            <slot
                hidden
                name="submenu"
                @slotchange=${this.manageSubmenu}
            ></slot>
            ${this.hasSubmenu?i.dy`
                      <sp-icon-chevron100
                          class="spectrum-UIIcon-ChevronRight100 chevron icon"
                      ></sp-icon-chevron100>
                  `:i.dy``}
        `}manageSubmenu(t){const e=t.target.assignedElements({flatten:!0});this.hasSubmenu=this.open||!!e.length}handleRemoveActive(t){"pointerleave"===t.type&&this.hasSubmenu||this.hasSubmenu||this.open||(this.active=!1)}handlePointerdown(){this.active=!0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id="sp-menu-item-"+S.instanceCount++),this.addEventListener("pointerenter",this.closeOverlaysForRoot)}closeOverlaysForRoot(){if(this.open)return;const t=new l({root:this.menuData.focusRoot});this.dispatchEvent(t)}handleSubmenuClick(){this.openOverlay()}handlePointerenter(){if(this.leaveTimeout)return clearTimeout(this.leaveTimeout),void delete this.leaveTimeout;this.openOverlay()}handlePointerleave(){this.hasSubmenu&&this.open&&(this.leaveTimeout=setTimeout((()=>{delete this.leaveTimeout,this.closeOverlay&&this.closeOverlay()}),100))}async openOverlay(){if(!this.hasSubmenu||this.open||this.disabled)return;this.open=!0,this.active=!0;const t=this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements()[0];t.addEventListener("pointerenter",this.handleSubmenuPointerenter),t.addEventListener("change",this.handleSubmenuChange);const e=document.createElement("sp-popover"),o=(0,h.G)([t],e,{position:"beforeend",prepareCallback:t=>{const e=t.slot;return t.tabIndex=0,t.removeAttribute("slot"),t.isSubmenu=!0,t=>{t.tabIndex=-1,t.slot=e,t.isSubmenu=!1}}}),i=(0,c.I)(this,"click",e,{placement:this.isLTR?"right-start":"left-start",receivesFocus:"auto",root:this.menuData.focusRoot}),r=async()=>{delete this.closeOverlay,(await i)()};this.closeOverlay=r;this.addEventListener("sp-closed",(t=>{t.stopPropagation(),delete this.closeOverlay,o(),this.open=!1,this.active=!1}),{once:!0}),e.addEventListener("change",r)}updateAriaSelected(){const t=this.getAttribute("role");"option"===t?this.setAttribute("aria-selected",this.selected?"true":"false"):("menuitemcheckbox"===t||"menuitemradio"===t)&&this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){super.updated(t),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive),this.addEventListener("pointercancel",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive),this.removeEventListener("pointercancel",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected(),t.has("hasSubmenu")&&(this.hasSubmenu?(this.addEventListener("click",this.handleSubmenuClick),this.addEventListener("pointerenter",this.handlePointerenter),this.addEventListener("pointerleave",this.handlePointerleave)):this.closeOverlay||(this.removeEventListener("click",this.handleSubmenuClick),this.removeEventListener("pointerenter",this.handlePointerenter),this.removeEventListener("pointerleave",this.handlePointerleave)))}connectedCallback(){super.connectedCallback(),this.isInSubmenu=!!this.closest('[slot="submenu"]'),!this.isInSubmenu&&(k.reset(this),this.dispatchEvent(k),w(),this._parentElement=this.parentElement)}disconnectedCallback(){!this.isInSubmenu&&this._parentElement&&(y.reset(this),this._parentElement.dispatchEvent(y),0===_&&(_=requestAnimationFrame((()=>{y=new b,_=0})))),this.isInSubmenu=!1,this._itemChildren=void 0,super.disconnectedCallback()}async triggerUpdate(){this.isInSubmenu||(await new Promise((t=>requestAnimationFrame(t))),k.reset(this),this.dispatchEvent(k),w())}};let A=S;A.nextId=0,A.instanceCount=0,v([(0,r.Cb)({type:Boolean,reflect:!0})],A.prototype,"active",2),v([(0,r.Cb)({type:Boolean,reflect:!0})],A.prototype,"focused",2),v([(0,r.Cb)({type:Boolean,reflect:!0})],A.prototype,"selected",2),v([(0,r.Cb)({type:String})],A.prototype,"value",1),v([(0,r.Cb)({type:Boolean})],A.prototype,"hasSubmenu",2),v([(0,r.Cb)({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged:()=>!1})],A.prototype,"noWrap",2),v([(0,r.IO)(".anchor")],A.prototype,"anchorElement",2),v([(0,r.Cb)({type:Boolean})],A.prototype,"open",2)},689635:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(903512).iv`
:host{align-items:center;box-sizing:border-box;display:flex;height:100vh;height:-webkit-fill-available;height:-moz-available;height:stretch;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden;width:100vw;z-index:2}:host([open]){visibility:visible}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]){border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}:host([responsive]){margin-top:0}}
`},727116:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(903512).iv`
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
`},675125:(t,e,o)=>{o.d(e,{U:()=>r});var i=o(804963);class r{constructor(t,e){this.x=0,this.y=0,this.x=t,this.y=e}updateBoundingClientRect(t,e){this.x=t,this.y=e,i.Overlay.update()}getBoundingClientRect(){return{width:0,height:0,top:this.y,right:this.x,y:this.y,x:this.x,bottom:this.y,left:this.x,toJSON(){}}}}},359815:(t,e,o)=>{o.d(e,{I:()=>i});const i=async(t,e,i,r)=>{const{Overlay:a}=await o.e(4963).then(o.bind(o,804963));return a.open(t,e,i,r)}},492950:(t,e,o)=>{var i=o(691997);(0,o(589415).N)("sp-picker",i.c)},691997:(t,e,o)=>{o.d(e,{c:()=>f,o:()=>b});var i=o(916420),r=o(903512),a=o(228532),s=o(697038);const n=r.iv`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;position:relative;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;margin-block:-2px;padding:0}#button:disabled{cursor:default}.spectrum--medium{--spectrum-picker-popover-quiet-offset-x:12px}.spectrum--large{--spectrum-picker-popover-quiet-offset-x:14px}:host{--spectrum-picker-font-size:var(--spectrum-font-size-100);--spectrum-picker-font-weight:var(--spectrum-regular-font-weight);--spectrum-picker-placeholder-font-style:var(
--spectrum-default-font-style
);--spectrum-picker-line-height:var(--spectrum-line-height-100);--spectrum-picker-block-size:var(--spectrum-component-height-100);--spectrum-picker-border-radius:var(--spectrum-corner-radius-100);--spectrum-picker-spacing-edge-to-text:var(
--spectrum-component-edge-to-text-100
);--spectrum-picker-spacing-edge-to-text-quiet:var(
--spectrum-field-edge-to-text-quiet
);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-medium
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-100
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-100
);--spectrum-picker-spacing-edge-to-disclosure-icon-quiet:var(
--spectrum-picker-end-edge-to-disclousure-icon-quiet
);--spectrum-picker-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-picker-font-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-picker-font-color-default-open:var(
--spectrum-neutral-content-color-focus
);--spectrum-picker-font-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-picker-font-color-hover-open:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-picker-font-color-active:var(
--spectrum-neutral-content-color-down
);--spectrum-picker-font-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-picker-icon-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-picker-icon-color-default-open:var(
--spectrum-neutral-content-color-focus
);--spectrum-picker-icon-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-picker-icon-color-hover-open:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-picker-icon-color-active:var(
--spectrum-neutral-content-color-down
);--spectrum-picker-icon-color-key-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-picker-border-color-error-default:var(
--spectrum-negative-border-color-default
);--spectrum-picker-border-color-error-default-open:var(
--spectrum-negative-border-color-focus
);--spectrum-picker-border-color-error-hover:var(
--spectrum-negative-border-color-hover
);--spectrum-picker-border-color-error-hover-open:var(
--spectrum-negative-border-color-focus-hover
);--spectrum-picker-border-color-error-active:var(
--spectrum-negative-border-color-down
);--spectrum-picker-border-color-error-key-focus:var(
--spectrum-negative-border-color-key-focus
);--spectrum-picker-icon-color-error:var(--spectrum-negative-visual-color);--spectrum-picker-background-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-picker-font-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-picker-icon-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-picker-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-picker-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-picker-focus-indicator-color:var(
--spectrum-focus-indicator-color
)}:host([size=s]){--spectrum-picker-font-size:var(--spectrum-font-size-75);--spectrum-picker-block-size:var(--spectrum-component-height-75);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-75);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-small
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-small
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-small
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-75
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-75
)}:host([size=m]){--spectrum-picker-font-size:var(--spectrum-font-size-100);--spectrum-picker-block-size:var(--spectrum-component-height-100);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-medium
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-100
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-100
)}:host([size=l]){--spectrum-picker-font-size:var(--spectrum-font-size-200);--spectrum-picker-block-size:var(--spectrum-component-height-200);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-200);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-large
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-large
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-large
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-200
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-200
)}:host([size=xl]){--spectrum-picker-font-size:var(--spectrum-font-size-300);--spectrum-picker-block-size:var(--spectrum-component-height-300);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-300);--spectrum-picker-spacing-text-to-alert-icon-inline-start:var(
--spectrum-field-text-to-alert-icon-extra-large
);--spectrum-picker-spacing-icon-to-disclosure-icon:var(
--spectrum-picker-visual-to-disclosure-icon-extra-large
);--spectrum-picker-spacing-label-to-picker-quiet:var(
--spectrum-field-label-to-component-quiet-extra-large
);--spectrum-picker-spacing-top-to-disclosure-icon:var(
--spectrum-field-top-to-disclosure-icon-300
);--spectrum-picker-spacing-edge-to-disclosure-icon:var(
--spectrum-field-end-edge-to-disclosure-icon-300
)}@media (forced-colors:active){:host{--highcontrast-picker-focus-indicator-color:CanvasText;--highcontrast-picker-border-color-default:ButtonText;--highcontrast-picker-border-color-active:ButtonText;--highcontrast-picker-border-color-key-focus:Highlight;--highcontrast-picker-border-color-error-default-open:ButtonText;--highcontrast-picker-border-color-error-hover:ButtonText;--highcontrast-picker-border-color-error-active:ButtonText;--highcontrast-picker-font-color-default:ButtonText;--highcontrast-picker-font-color-default-open:ButtonText;--highcontrast-picker-font-color-key-focus:ButtonText;--highcontrast-picker-font-color-disabled:GrayText;--highcontrast-picker-background-color-default:Background;--highcontrast-picker-background-color-disabled:Background;--highcontrast-picker-icon-color-default:ButtonText;--highcontrast-picker-icon-color-default-open:ButtonText;--highcontrast-picker-icon-color-hover:ButtonText;--highcontrast-picker-icon-color-hover-open:ButtonText;--highcontrast-picker-icon-color-key-focus:Highlight;--highcontrast-picker-icon-color-error-default:ButtonText}#button:disabled,:host([disabled]) #button{border-color:GrayText;border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{forced-color-adjust:none;outline:0}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{forced-color-adjust:none;outline:0}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{forced-color-adjust:none;outline:0}}#button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-default,var(--spectrum-picker-background-color-default)
)
);block-size:var(--mod-picker-block-size,var(--spectrum-picker-block-size));border-color:var(
--highcontrast-picker-border-color-default,var(
--mod-picker-border-color-default,var(--spectrum-picker-border-color-default)
)
);border-radius:var(
--mod-picker-border-radius,var(--spectrum-picker-border-radius)
);border-style:solid;border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);display:flex;max-inline-size:100%;min-inline-size:calc(var(--spectrum-picker-minimum-width-multiplier)*var(--mod-picker-block-size, var(--spectrum-picker-block-size)));padding-block:0;padding-inline-end:var(
--mod-picker-spacing-edge-to-disclosure-icon,var(--spectrum-picker-spacing-edge-to-disclosure-icon)
);padding-inline-start:var(
--mod-picker-spacing-edge-to-text,var(--spectrum-picker-spacing-edge-to-text)
);transition:background-color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
),box-shadow var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
),border-color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-in-out}#button:after{block-size:calc(100% + var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
)*2 + var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);border-color:#0000;border-radius:calc(var(--mod-picker-border-radius, var(--spectrum-picker-border-radius)) + var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(--mod-picker-border-width, var(--spectrum-picker-border-width)));border-style:solid;border-width:var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
);content:"";inline-size:calc(100% + var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
)*2 + var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);inset-block:0;inset-inline:0;margin-block-start:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-focus-indicator-thickness,
var(--spectrum-picker-focus-indicator-thickness)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1);margin-inline-start:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-focus-indicator-thickness,
var(--spectrum-picker-focus-indicator-thickness)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1);pointer-events:none;position:absolute}#button:hover{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-hover,var(--spectrum-picker-background-color-hover)
)
);border-color:var(
--highcontrast-picker-border-color-default,var(
--mod-picker-border-color-hover,var(--spectrum-picker-border-color-hover)
)
);color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-hover,var(--spectrum-picker-font-color-hover)
)
)}#button:hover .picker{color:var(
--highcontrast-picker-icon-color-hover,var(
--mod-picker-icon-color-hover,var(--spectrum-picker-icon-color-hover)
)
)}#button:active{background-color:var(
--highcontrast-picker-background-active,var(
--mod-picker-background-color-active,var(--spectrum-picker-background-color-active)
)
);border-color:var(
--highcontrast-picker-border-color-active,var(
--mod-picker-border-active,var(--spectrum-picker-border-color-active)
)
)}#button:active:after{border-color:#0000}#button:active.placeholder #label{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-active,var(--spectrum-picker-font-color-active)
)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)
)
);border-color:var(
--highcontrast-picker-border-color-key-focus,var(
--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)
)
);border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
);outline:none}#button.focus-visible,:host([focused]) #button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)
)
);border-color:var(
--highcontrast-picker-border-color-key-focus,var(
--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)
)
);border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
);outline:none}#button:focus-visible,:host([focused]) #button{background-color:var(
--highcontrast-picker-background-color-default,var(
--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)
)
);border-color:var(
--highcontrast-picker-border-color-key-focus,var(
--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)
)
);border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
);outline:none}#button.focus-visible:after,:host([focused]) #button:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button.focus-visible:after,:host([focused]) #button:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button:focus-visible:after,:host([focused]) #button:after{border-color:var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--highcontrast-picker-font-color-key-focus,var(
--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)
)
)}#button.focus-visible .picker,:host([focused]) #button .picker{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}#button.focus-visible .picker,:host([focused]) #button .picker{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}#button:focus-visible .picker,:host([focused]) #button .picker{color:var(
--highcontrast-picker-icon-color-key-focus,var(
--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)
)
)}:host([open]) #button{background-color:var(
--highcontrast-picker-background-default-open,var(
--mod-picker-background-color-default-open,var(--spectrum-picker-background-color-default-open)
)
);border-color:var(
--highcontrast-picker-border-color-default-open,var(
--mod-picker-border-default-open,var(--spectrum-picker-border-color-default-open)
)
);color:var(
--highcontrast-picker-font-color-default-open,var(
--mod-picker-font-color-default-open,var(--spectrum-picker-font-color-default-open)
)
)}:host([open]) #button:hover{background-color:var(
--highcontrast-picker-background-color-hover-open,var(
--mod-picker-background-color-hover-open,var(--spectrum-picker-background-color-hover-open)
)
);border-color:var(
--highcontrast-picker-border-color-hover-open,var(
--mod-picker-border-color-hover-open,var(--spectrum-picker-border-color-hover-open)
)
);color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-hover-open,var(--spectrum-picker-font-color-hover-open)
)
)}:host([open]) #button:hover .picker{color:var(
--highcontrast-picker-icon-color-hover-open,var(
--mod-picker-icon-color-hover-open,var(--spectrum-picker-icon-color-hover-open)
)
)}:host([open]) #button .picker{color:var(
--highcontrast-picker-icon-color-default-open,var(
--mod-picker-icon-color-default-open,var(--spectrum-picker-icon-color-default-open)
)
)}:host([invalid]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-default,var(--spectrum-picker-border-color-error-default)
)
)}:host([invalid]) #button .validation-icon{color:var(
--highcontrast-picker-icon-color-error-default,var(
--mod-picker-icon-color-error,var(--spectrum-picker-icon-color-error)
)
)}:host([invalid]) #button:hover{border-color:var(
--highcontrast-picker-border-color-error-hover,var(
--mod-picker-border-color-error-hover,var(--spectrum-picker-border-color-error-hover)
)
)}:host([invalid]) #button:active{border-color:var(
--highcontrast-picker-border-color-error-active,var(
--mod-picker-border-color-error-active,var(--spectrum-picker-border-color-error-active)
)
)}:host([invalid][open]) #button{border-color:var(
--highcontrast-picker-border-color-error-default-open,var(
--mod-picker-border-color-error-default-open,var(--spectrum-picker-border-color-error-default-open)
)
)}:host([invalid][open]) #button:hover{border-color:var(
--highcontrast-picker-border-color-error-hover-open,var(
--mod-picker-border-color-error-hover-open,var(--spectrum-picker-border-color-error-hover-open)
)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)
)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)
)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--highcontrast-picker-border-color-error-default,var(
--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)
)
)}#button.is-loading .picker{color:var(
--highcontrast-picker-icon-color-disabled,var(
--mod-picker-icon-color-disabled,var(--spectrum-picker-icon-color-disabled)
)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--highcontrast-picker-background-color-disabled,var(
--mod-picker-background-color-disabled,var(--spectrum-picker-background-color-disabled)
)
);border-color:#0000;border-width:var(
--mod-picker-border-width,var(--spectrum-picker-border-width)
);color:var(
--highcontrast-picker-font-color-disabled,var(
--mod-picker-font-color-disabled,var(--spectrum-picker-font-color-disabled)
)
);cursor:default}#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon{color:var(
--highcontrast-picker-icon-color-disabled,var(
--mod-picker-icon-color-disabled,var(--spectrum-picker-icon-color-disabled)
)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--highcontrast-picker-font-color-disabled,var(
--mod-picker-font-color-disabled,var(--spectrum-picker-font-color-disabled)
)
)}.icon{flex-shrink:0;margin-inline-end:var(
--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon)
)}:host([quiet]) #button{inline-size:auto;min-inline-size:0}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{border-color:#0000}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{border-color:#0000}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{border-color:#0000}#label{flex:auto;font-size:var(--mod-picker-font-size,var(--spectrum-picker-font-size));line-height:calc(var(--mod-picker-block-size, var(--spectrum-picker-block-size)) - var(--mod-picker-border-width, var(--spectrum-picker-border-width))*2);line-height:var(
--mod-picker-line-height,var(--spectrum-picker-line-height)
);overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);font-style:var(
--mod-picker-placeholder-font-style,var(--spectrum-picker-placeholder-font-style)
);font-weight:var(
--mod-picker-font-weight,var(--spectrum-picker-font-weight)
);transition:color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-in-out}#label.placeholder:hover{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-hover,var(--spectrum-picker-font-color-hover)
)
)}#label.placeholder:active{color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-active,var(--spectrum-picker-font-color-active)
)
)}.picker{color:var(
--highcontrast-picker-icon-color-default,var(
--mod-picker-icon-color-default,var(--spectrum-picker-icon-color-default)
)
);display:inline-block;flex-shrink:0;margin-block:var(
--mod-picker-spacing-top-to-disclosure-icon,var(--spectrum-picker-spacing-top-to-disclosure-icon)
);margin-inline-start:var(
--mod-picker-spacing-icon-to-disclosure-icon,var(--spectrum-picker-spacing-icon-to-disclosure-icon)
);position:relative;transition:color var(
--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)
) ease-out;vertical-align:top}.picker:active{color:var(
--highcontrast-picker-icon-color-default,var(
--mod-picker-icon-color-active,var(--spectrum-picker-icon-color-active)
)
)}#button .spectrum-ProgressCircle,.validation-icon{margin-inline-start:var(
--mod-picker-spacing-text-to-alert-icon-inline-start,var(--spectrum-picker-spacing-text-to-alert-icon-inline-start)
)}#label~.picker{margin-inline-start:var(
--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon)
)}:host([quiet]) #button{background-color:#0000;border:none;border-radius:0;color:var(
--highcontrast-picker-font-color-default,var(
--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)
)
);margin-block-start:calc(var(
--mod-picker-spacing-label-to-picker-quiet,
var(--spectrum-picker-spacing-label-to-picker-quiet)
) + 1px);padding-inline:var(
--mod-picker-spacing-edge-to-text-quiet,var(--spectrum-picker-spacing-edge-to-text-quiet)
)}:host([quiet]) #button .picker{margin-inline-end:var(
--mod-picker-spacing-edge-to-disclosure-icon-quiet,var(--spectrum-picker-spacing-edge-to-disclosure-icon-quiet)
)}:host([quiet]) #button:after{block-size:auto;border:none;inline-size:auto}:host([quiet]) #button:hover{background-color:#0000}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:#0000}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:#0000}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:#0000}:host([quiet]) #button.focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
) 0 0 var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
);margin:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1) 0}:host([quiet]) #button.focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
) 0 0 var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
);margin:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1) 0}:host([quiet]) #button:focus-visible:after,:host([quiet][focused]) #button:after{border:none;border-radius:0;box-shadow:0 var(
--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)
) 0 0 var(
--highcontrast-picker-focus-indicator-color,var(
--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)
)
);margin:calc((var(
--mod-picker-focus-indicator-gap,
var(--spectrum-picker-focus-indicator-gap)
) + var(
--mod-picker-border-width,
var(--spectrum-picker-border-width)
))*-1) 0}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:#0000}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:#0000}:host{--spectrum-picker-background-color-default:var(
--system-spectrum-picker-background-color-default
);--spectrum-picker-background-color-default-open:var(
--system-spectrum-picker-background-color-default-open
);--spectrum-picker-background-color-active:var(
--system-spectrum-picker-background-color-active
);--spectrum-picker-background-color-hover:var(
--system-spectrum-picker-background-color-hover
);--spectrum-picker-background-color-hover-open:var(
--system-spectrum-picker-background-color-hover-open
);--spectrum-picker-background-color-key-focus:var(
--system-spectrum-picker-background-color-key-focus
);--spectrum-picker-border-color-default:var(
--system-spectrum-picker-border-color-default
);--spectrum-picker-border-color-default-open:var(
--system-spectrum-picker-border-color-default-open
);--spectrum-picker-border-color-hover:var(
--system-spectrum-picker-border-color-hover
);--spectrum-picker-border-color-hover-open:var(
--system-spectrum-picker-border-color-hover-open
);--spectrum-picker-border-color-active:var(
--system-spectrum-picker-border-color-active
);--spectrum-picker-border-color-key-focus:var(
--system-spectrum-picker-border-color-key-focus
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}#icon:not([hidden]){display:inline-flex}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validation-icon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`;var c=o(368666),l=o(813503),d=o(197367),u=(o(333717),o(358319),o(482873),o(271420),o(383990),o(359815)),h=o(465346),p=Object.defineProperty,m=Object.getOwnPropertyDescriptor,g=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?m(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&p(e,o,a),a};const v={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class b extends((0,i.I)(l.Y)){constructor(){super(),this.isMobile=new h.l8(this,h.q$),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=t=>{this.focused=!0,("ArrowDown"===t.code||"ArrowUp"===t.code)&&(t.preventDefault(),this.toggle(!0))},this.overlayOpenCallback=async()=>{this.updateMenuItems(),await this.itemsUpdated,await this.optionsMenu.updateComplete,requestAnimationFrame((()=>this.menuStateResolver()))},this.overlayCloseCallback=async()=>{this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.close(),requestAnimationFrame((()=>this.menuStateResolver()))},this._willUpdateItems=!1,this.itemsUpdated=Promise.resolve(),this.menuStatePromise=Promise.resolve(),this.selectionPromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(t){const e=t.target,[o]=e.selectedItems;t.cancelable?(t.stopPropagation(),this.setValueFromItem(o,t)):this.open=!1}async setValueFromItem(t,e){const o=this.selectedItem,i=this.value;if(this.selectedItem=t,this.value=t.value,this.open=!1,await this.updateComplete,!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})))return e&&e.preventDefault(),this.setMenuItemSelected(this.selectedItem,!1),o&&this.setMenuItemSelected(o,!0),this.selectedItem=o,this.value=i,void(this.open=!0);o&&this.setMenuItemSelected(o,!1),this.setMenuItemSelected(t,!!this.selects)}setMenuItemSelected(t,e){null!=this.selects&&(t.selected=e)}toggle(t){this.readonly||(this.open=void 0!==t?t:!this.open)}close(){this.readonly||(this.open=!1)}async generatePopover(){this.popoverFragment||(this.popoverFragment=document.createDocumentFragment()),(0,r.sY)(this.renderPopover,this.popoverFragment,{host:this}),this.popoverEl=this.popoverFragment.children[0],this.optionsMenu=this.popoverEl.children[1]}async openMenu(){let t=[];const e=this.querySelector(":scope > sp-menu");await this.generatePopover(),t=e?Array.from(e.children):Array.from(this.children).filter((t=>!t.hasAttribute("slot"))),0!==t.length?(this.restoreChildren=(0,d.G)(t,this.optionsMenu,{position:"beforeend",prepareCallback:t=>(this.value===t.value&&this.setMenuItemSelected(t,!0),t=>{void 0!==t.focused&&(t.focused=!1)})}),this.sizePopover(this.popoverEl),this.closeOverlay=f.openOverlay(this,"modal",this.popoverEl,{placement:this.isMobile.matches?"none":this.placement,receivesFocus:"auto"})):this.menuStateResolver()}sizePopover(t){this.isMobile.matches&&t.style.setProperty("--swc-menu-width","100%")}async closeMenu(){if(this.closeOverlay){const t=this.closeOverlay;delete this.closeOverlay,(await t)()}}get selectedItemContent(){return this.selectedItem?this.selectedItem.itemChildren:{icon:[],content:[]}}renderLabelContent(t){return this.value&&this.selectedItem?t:r.dy`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const t={"visually-hidden":"only"===this.icons&&!!this.value,placeholder:!this.value};return[r.dy`
                <span id="icon" ?hidden=${"none"===this.icons}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${(0,a.$)(t)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?r.dy`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:r.Ld}
                <sp-icon-chevron100
                    class="picker ${v[this.size]}"
                ></sp-icon-chevron100>
            `]}render(){return r.dy`
            <span
                id="focus-helper"
                tabindex="${this.focused?"-1":"0"}"
                @focus=${this.onHelperFocus}
            ></span>
            <button
                aria-haspopup="true"
                aria-expanded=${this.open?"true":"false"}
                aria-labelledby="button icon label"
                id="button"
                class="button"
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
        `}update(t){this.selects&&(this.selects="single"),t.has("disabled")&&this.disabled&&(this.open=!1),t.has("open")&&(this.open||void 0!==t.get("open"))&&(this.menuStatePromise=new Promise((t=>this.menuStateResolver=t)),this.open?this.openMenu():this.closeMenu()),t.has("value")&&!t.has("selectedItem")&&this.updateMenuItems(),super.update(t)}get dismissHelper(){return r.dy`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    aria-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `}get renderPopover(){const t=r.dy`
            ${this.dismissHelper}
            <sp-menu
                id="menu"
                role="${this.listRole}"
                @change=${this.handleChange}
                .selects=${this.selects}
            ></sp-menu>
            ${this.dismissHelper}
        `;return this.isMobile.matches?r.dy`
                <sp-tray
                    id="popover"
                    role="dialog"
                    @sp-menu-item-added-or-updated=${this.updateMenuItems}
                    .overlayOpenCallback=${this.overlayOpenCallback}
                    .overlayCloseCallback=${this.overlayCloseCallback}
                >
                    ${t}
                </sp-tray>
            `:r.dy`
            <sp-popover
                id="popover"
                role="dialog"
                @sp-menu-item-added-or-updated=${this.updateMenuItems}
                .overlayOpenCallback=${this.overlayOpenCallback}
                .overlayCloseCallback=${this.overlayCloseCallback}
            >
                ${t}
            </sp-popover>
        `}updateMenuItems(t){if(this.open&&"sp-menu-item-removed"===(null==t?void 0:t.type)||this._willUpdateItems)return;this._willUpdateItems=!0,(null==t?void 0:t.item)===this.selectedItem&&this.requestUpdate();let e=()=>{};this.itemsUpdated=new Promise((t=>e=t)),window.requestAnimationFrame((async()=>{this.open?(await this.optionsMenu.updateComplete,this.menuItems=this.optionsMenu.childItems):this.menuItems=[...this.querySelectorAll('sp-menu-item:not([slot="submenu"] *)')],this.manageSelection(),e(),this._willUpdateItems=!1}))}async manageSelection(){if(null==this.selects)return;let t;await this.menuStatePromise,this.selectionPromise=new Promise((t=>this.selectionResolver=t)),this.menuItems.forEach((e=>{this.value!==e.value||e.disabled?e.selected=!1:t=e})),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&(await this.optionsMenu.updateComplete,this.optionsMenu.updateSelectedItemIndex()),this.selectionResolver()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.menuStatePromise,await this.itemsUpdated,await this.selectionPromise,t}connectedCallback(){this.updateMenuItems(),this.addEventListener("sp-menu-item-added-or-updated",this.updateMenuItems),this.addEventListener("sp-menu-item-removed",this.updateMenuItems),super.connectedCallback()}disconnectedCallback(){this.close(),super.disconnectedCallback()}}b.openOverlay=async(t,e,o,i)=>await(0,u.I)(t,e,o,i),g([(0,s.IO)("#button")],b.prototype,"button",2),g([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),g([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"focused",2),g([(0,s.Cb)({type:String,reflect:!0})],b.prototype,"icons",2),g([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"invalid",2),g([(0,s.Cb)()],b.prototype,"label",2),g([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",2),g([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"readonly",2),g([(0,s.Cb)()],b.prototype,"placement",2),g([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"quiet",2),g([(0,s.Cb)({type:String})],b.prototype,"value",2),g([(0,s.Cb)({attribute:!1})],b.prototype,"selectedItem",2);class f extends b{constructor(){super(...arguments),this.onKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if(t.preventDefault(),"ArrowUp"===e||"ArrowDown"===e)return void this.toggle(!0);const o=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,i=this.value&&"ArrowRight"!==e?-1:1;let r=o+i;for(;this.menuItems[r]&&this.menuItems[r].disabled;)r+=i;!this.menuItems[r]||this.menuItems[r].disabled||(!this.value||r!==o)&&this.setValueFromItem(this.menuItems[r])}}static get styles(){return[n,c.Z]}sizePopover(t){super.sizePopover(t),!this.quiet&&t.style.setProperty("min-width",`${this.offsetWidth}px`)}}},383990:(t,e,o)=>{var i=o(982958);(0,o(589415).N)("sp-popover",i.J)},144195:(t,e,o)=>{var i=o(916420),r=o(374069),a=o(903512),s=o(697038),n=o(123584);const c=a.iv`
.fill-submask-2{animation:spectrum-fill-mask-2 1s linear infinite}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{--spectrum-progress-circle-track-border-color:var(--spectrum-gray-300);--spectrum-progress-circle-fill-border-color:var(
--spectrum-accent-content-color-default
);--spectrum-progress-circle-track-border-color-over-background:var(
--spectrum-transparent-white-300
);--spectrum-progress-circle-fill-border-color-over-background:var(
--spectrum-transparent-white-900
);--spectrum-progress-circle-size:var(
--spectrum-progress-circle-size-medium
);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-medium
);--spectrum-progress-circle-track-border-style:solid}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-small);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-small
)}.spectrum-ProgressCircle--medium{--spectrum-progress-circle-size:var(
--spectrum-progress-circle-size-medium
);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-medium
)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-large);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-large
)}@media (forced-colors:active){:host{--highcontrast-progress-circle-fill-border-color:Highlight;--highcontrast-progress-circle-fill-border-color-over-background:Highlight}.track{--spectrum-progress-circle-track-border-style:double}}:host{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);direction:ltr;display:inline-block;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);position:relative;transform:translateZ(0)}.track{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-color:var(
--mod-progress-circle-track-border-color,var(--spectrum-progress-circle-track-border-color)
);border-radius:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-style:var(
--highcontrast-progress-circle-track-border-style,var(
--mod-progress-circle-track-border-style,var(--spectrum-progress-circle-track-border-style)
)
);border-width:var(
--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness)
);box-sizing:border-box;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
)}.fills{block-size:100%;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}.fill{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-color:var(
--highcontrast-progress-circle-fill-border-color,var(
--mod-progress-circle-fill-border-color,var(--spectrum-progress-circle-fill-border-color)
)
);border-radius:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-style:solid;border-width:var(
--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness)
);box-sizing:border-box;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
)}:host([static=white]) .track{border-color:var(
--mod-progress-circle-track-border-color-over-background,var(--spectrum-progress-circle-track-border-color-over-background)
)}:host([static=white]) .fill{border-color:var(
--highcontrast-progress-circle-fill-border-color-over-background,var(
--mod-progress-circle-fill-border-color-over-background,var(--spectrum-progress-circle-fill-border-color-over-background)
)
)}.fillMask1,.fillMask2{block-size:100%;inline-size:50%;overflow:hidden;position:absolute;transform:rotate(180deg);transform-origin:100%}.fillSubMask1,.fillSubMask2{block-size:100%;inline-size:100%;overflow:hidden;transform:rotate(-180deg);transform-origin:100%}.fillMask2{transform:rotate(0)}:host([indeterminate]) .fills{animation:spectrum-fills-rotate 1s cubic-bezier(.25,.78,.48,.89) infinite;transform:translateZ(0);transform-origin:center;will-change:transform}:host([indeterminate]) .fillSubMask1{animation:spectrum-fill-mask-1 1s linear infinite;transform:translateZ(0);will-change:transform}:host([indeterminate]) .fillSubMask2{animation:spectrum-fill-mask-2 1s linear infinite;transform:translateZ(0);will-change:transform}:host{--spectrum-progresscircle-m-over-background-track-fill-color:var(
--spectrum-alias-track-fill-color-overbackground
)}
`;var l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?d(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&l(e,o,a),a};class h extends((0,i.I)(r.o,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.indeterminate=!1,this.label="",this.overBackground=!1,this.progress=0}static get styles(){return[c]}makeRotation(t){return this.indeterminate?void 0:`transform: rotate(${t}deg);`}willUpdate(t){t.has("overBackground")&&(this.static=this.overBackground?"white":this.static||void 0)}render(){const t=[this.makeRotation(3.6*Math.min(this.progress,50)-180),this.makeRotation(3.6*Math.max(this.progress-50,0)-180)];return a.dy`
            <div class="track"></div>
            <div class="fills">
                ${["Mask1","Mask2"].map(((e,o)=>a.dy`
                        <div class="fill${e}">
                            <div
                                class="fillSub${e}"
                                style=${(0,n.o)(t[o])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `))}
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("role")||this.setAttribute("role","progressbar")}updated(t){super.updated(t),!this.indeterminate&&t.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),this.label&&t.has("label")&&this.setAttribute("aria-label",this.label)}}u([(0,s.Cb)({type:Boolean,reflect:!0})],h.prototype,"indeterminate",2),u([(0,s.Cb)({type:String})],h.prototype,"label",2),u([(0,s.Cb)({type:Boolean,reflect:!0,attribute:"over-background"})],h.prototype,"overBackground",2),u([(0,s.Cb)({reflect:!0})],h.prototype,"static",2),u([(0,s.Cb)({type:Number})],h.prototype,"progress",2),(0,o(589415).N)("sp-progress-circle",h)},465346:(t,e,o)=>{o.d(e,{l8:()=>r,q$:()=>i});const i="(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)";class r{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.host.addController(this),this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){var t;null==(t=this.media)||t.addEventListener("change",this.onChange)}hostDisconnected(){var t;null==(t=this.media)||t.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}}},405281:(t,e,o)=>{o.d(e,{h:()=>a});var i=o(108348);const r=Symbol("slotContentIsPresent");function a(t,e){var o;const a=Array.isArray(e)?e:[e];return o=r,class extends t{constructor(...t){super(t),this[o]=new Map,this.managePresenceObservedSlot=()=>{let t=!1;a.forEach((e=>{const o=!!this.querySelector(e),i=this[r].get(e)||!1;t=t||i!==o,this[r].set(e,!!this.querySelector(e))})),t&&this.updateComplete.then((()=>{this.requestUpdate()}))},new i._(this,{config:{childList:!0,subtree:!0},callback:()=>{this.managePresenceObservedSlot()}}),this.managePresenceObservedSlot()}get slotContentIsPresent(){if(1===a.length)return this[r].get(a[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(t){if(this[r].has(t))return this[r].get(t)||!1;throw new Error(`The provided selector \`${t}\` is not being observed.`)}}}},19298:(t,e,o)=>{function i(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.userAgent)}function r(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}function a(){return r(/^Mac/)}function s(){return r(/^iPhone/)}function n(){return s()||r(/^iPad/)||a()&&navigator.maxTouchPoints>1}function c(){return i(/AppleWebKit/)&&!i(/Chrome/)}function l(){return i(/Android/)}o.d(e,{Dt:()=>l,IN:()=>s,Pf:()=>c,gn:()=>n})},430367:(t,e,o)=>{var i=o(697038),r=o(813503);const a=Symbol("language resolver updated");class s{constructor(t){this.language=document.documentElement.lang||navigator.language,this.host=t,this.host.addController(this)}hostConnected(){this.resolveLanguage()}hostDisconnected(){var t;null==(t=this.unsubscribe)||t.call(this)}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:(t,e)=>{const o=this.language;this.language=t,this.unsubscribe=e,this.host.requestUpdate(a,o)}},cancelable:!0});this.host.dispatchEvent(t)}}var n=o(970102),c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?l(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&c(e,o,a),a};const u={toNormalized:(t,e,o)=>(t-e)/(o-e),fromNormalized:(t,e,o)=>t*(o-e)+e},h={fromAttribute:t=>"previous"===t?t:parseFloat(t),toAttribute:t=>t.toString()},p={fromAttribute:t=>"next"===t?t:parseFloat(t),toAttribute:t=>t.toString()};class m extends r.Y{constructor(){super(...arguments),this._forcedUnit="",this.dragging=!1,this.highlight=!1,this.name="",this.label="",this.getAriaHandleText=(t,e)=>e.format(t),this.languageResolver=new s(this),this.normalization=u}get handleName(){return this.name}get focusElement(){var t,e;return null!=(e=null==(t=this.handleController)?void 0:t.inputForHandle(this))?e:this}update(t){var e;if(!this.hasUpdated){const{max:t,min:e}=this;null==this.value&&!isNaN(t)&&!isNaN(e)&&(this.value=t<e?e:e+(t-e)/2)}(t.has("formatOptions")||t.has(a))&&delete this._numberFormatCache,t.has("value")&&null!=t.get("value")&&this.updateComplete.then((()=>{var t;null==(t=this.handleController)||t.setValueFromHandle(this)})),null==(e=this.handleController)||e.handleHasChanged(this),super.update(t)}firstUpdated(t){super.firstUpdated(t),this.dispatchEvent(new CustomEvent("sp-slider-handle-ready"))}dispatchInputEvent(){const t=new Event("input",{bubbles:!0,composed:!0});this.dispatchEvent(t)}getNumberFormat(){var t;if(!this._numberFormatCache||this.languageResolver.language!==this._numberFormatCache.language){let t;try{t=new n.e(this.languageResolver.language,this.formatOptions),this._forcedUnit=""}catch(e){const{style:o,unit:i,unitDisplay:r,...a}=this.formatOptions||{};"unit"===o&&(this._forcedUnit=i),t=new n.e(this.languageResolver.language,a)}this._numberFormatCache={language:this.languageResolver.language,numberFormat:t}}return null==(t=this._numberFormatCache)?void 0:t.numberFormat}get numberFormat(){if(this.formatOptions)return this.getNumberFormat()}}d([(0,i.Cb)({type:Number})],m.prototype,"value",2),d([(0,i.Cb)({type:Boolean,reflect:!0})],m.prototype,"dragging",2),d([(0,i.Cb)({type:Boolean})],m.prototype,"highlight",2),d([(0,i.Cb)({type:String})],m.prototype,"name",2),d([(0,i.Cb)({reflect:!0,converter:h})],m.prototype,"min",2),d([(0,i.Cb)({reflect:!0,converter:p})],m.prototype,"max",2),d([(0,i.Cb)({type:Number,reflect:!0})],m.prototype,"step",2),d([(0,i.Cb)({type:Object,attribute:"format-options"})],m.prototype,"formatOptions",2),d([(0,i.Cb)({type:String})],m.prototype,"label",2),d([(0,i.Cb)({attribute:!1})],m.prototype,"getAriaHandleText",2),d([(0,i.Cb)({attribute:!1})],m.prototype,"normalization",2);var g=o(589415);(0,g.N)("sp-slider-handle",m);var v=o(903512),b=o(228532),f=o(123584),k=o(429950),y=o(941190);const x=v.iv`
:host{--spectrum-slider-font-size:var(--spectrum-font-size-75);--spectrum-slider-handle-size:var(--spectrum-slider-handle-size-medium);--spectrum-slider-control-height:var(--spectrum-component-height-100);--spectrum-slider-handle-border-radius:var(--spectrum-corner-radius-200);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-medium
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-medium
)}.spectrum-Slider--sizeS{--spectrum-slider-font-size:var(--spectrum-font-size-75);--spectrum-slider-handle-size:var(--spectrum-slider-handle-size-small);--spectrum-slider-control-height:var(--spectrum-component-height-75);--spectrum-slider-handle-border-radius:var(--spectrum-corner-radius-200);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-small
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-small
)}.spectrum-Slider--sizeL{--spectrum-slider-font-size:var(--spectrum-font-size-100);--spectrum-slider-handle-size:var(--spectrum-slider-handle-size-large);--spectrum-slider-control-height:var(--spectrum-component-height-200);--spectrum-slider-handle-border-radius:calc(var(--spectrum-corner-radius-200)*4);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-large
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-large
)}.spectrum-Slider--sizeXL{--spectrum-slider-font-size:var(--spectrum-font-size-200);--spectrum-slider-handle-size:var(
--spectrum-slider-handle-size-extra-large
);--spectrum-slider-control-height:var(--spectrum-component-height-300);--spectrum-slider-handle-border-radius:calc(var(--spectrum-corner-radius-200)*4);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-extra-large
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-extra-large
)}:host{--spectrum-slider-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-slider-min-size:var(--spectrum-spacing-900);--spectrum-slider-track-corner-radius:var(--spectrum-corner-radius-75);--spectrum-slider-label-margin-start:var(--spectrum-spacing-300);--spectrum-slider-handle-border-width:var(--spectrum-border-width-200);--spectrum-slider-handle-margin-left:calc(var(--spectrum-slider-handle-size)/-2);--spectrum-slider-controls-margin:calc(var(--spectrum-slider-handle-size)/2);--spectrum-slider-track-margin-offset:calc(var(--spectrum-slider-controls-margin)*-1);--spectrum-slider-track-middle-handleoffset:calc(var(--spectrum-slider-handle-gap) + var(--spectrum-slider-handle-size)/2);--spectrum-slider-input-top-size:calc(var(--spectrum-slider-handle-size)/-2/4);--spectrum-slider-track-fill-thickness:var(
--spectrum-slider-track-thickness
);--spectrum-slider-tick-mark-width:var(--spectrum-border-width-200);--spectrum-slider-tick-mark-border-radius:2px;--spectrum-slider-tick-handle-background-color:var(--spectrum-gray-100);--spectrum-slider-track-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-slider-track-fill-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-slider-handle-border-color-disabled:var(
--spectrum-disabled-border-color
);--spectrum-slider-label-text-color:var(
--spectrum-neutral-content-color-default
);--spectrum-slider-label-text-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-slider-tick-mark-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-slider-ramp-handle-border-color-active:var(--spectrum-gray-100);--spectrum-slider-input-left:calc(var(--spectrum-slider-handle-margin-left)/4);--spectrum-slider-track-handleoffset:var(--spectrum-slider-handle-gap);--spectrum-slider-range-track-reset:0}:host{display:block;min-inline-size:var(
--mod-slider-min-size,var(--spectrum-slider-min-size)
);position:relative;-webkit-user-select:none;user-select:none;z-index:1}#controls{block-size:var(
--mod-slider-control-height,var(--spectrum-slider-control-height)
);box-sizing:border-box;cursor:pointer;display:inline-block;inline-size:calc(100% - var(
--mod-slider-controls-margin,
var(--spectrum-slider-controls-margin)
)*2);margin-inline-start:var(
--mod-slider-controls-margin,var(--spectrum-slider-controls-margin)
);position:relative;vertical-align:top;z-index:auto}#label-container+#controls{margin-block-start:calc(var(--spectrum-slider-control-to-field-label)*-1)}:host([variant=tick]){margin-block-end:var(
--mod-slider-control-height,var(--spectrum-slider-control-height)
)}#fill,.track{block-size:var(
--mod-slider-track-fill-thickness,var(--spectrum-slider-track-fill-thickness)
);box-sizing:border-box;inset-block-start:calc(var(--mod-slider-control-height, var(--spectrum-slider-control-height))/2 - var(
--mod-slider-track-fill-thickness,
var(--spectrum-slider-track-fill-thickness)
)/2);inset-inline:0 auto;margin-inline-start:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);padding-block:0;padding-inline-end:var(
--mod-slider-handle-gap,var(--spectrum-slider-handle-gap)
);padding-inline-start:0;pointer-events:none;position:absolute;z-index:1}#fill:before,.track:before{block-size:100%;border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0;content:"";display:block}.track:first-of-type:before{border-end-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}.track:last-of-type:before{border-end-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}.track~.track{inset-inline-end:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);inset-inline-start:auto;margin-inline-end:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);margin-inline-start:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);padding-block:0;padding-inline-end:0;padding-inline-start:var(
--mod-slider-track-handleoffset,var(--spectrum-slider-track-handleoffset)
)}:host([variant=range]) .track~.track{inset-inline:auto;margin-inline:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);padding-inline:var(
--mod-slider-track-middle-handleoffset,var(--spectrum-slider-track-middle-handleoffset)
) var(
--mod-slider-track-middle-handleoffset,var(--spectrum-slider-track-middle-handleoffset)
)}#fill{margin-inline-start:0;padding-block:0;padding-inline-end:0;padding-inline-start:calc(var(
--mod-slider-controls-margin,
var(--spectrum-slider-controls-margin)
) + var(--spectrum-slider-handle-gap, var(--spectrum-slider-handle-gap)))}.spectrum-Slider-fill--right{padding-block:0;padding-inline-end:calc(var(
--mod-slider-controls-margin,
var(--spectrum-slider-controls-margin)
) + var(--spectrum-slider-handle-gap, var(--spectrum-slider-handle-gap)));padding-inline-start:0}:host([variant=range]) #value{-webkit-user-select:text;user-select:text}:host([variant=range]) .track:first-of-type{inset-inline-end:auto;inset-inline-start:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);margin-inline-start:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);padding-inline-end:var(
--mod-slider-track-handleoffset,var(--spectrum-slider-track-handleoffset)
);padding-inline-start:0}:host([variant=range]) .track:first-of-type:before{border-end-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}:host([variant=range]) .track:last-of-type{inset-inline-end:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);inset-inline-start:auto;margin-inline-end:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);padding-inline-end:0;padding-inline-start:var(--spectrum-slider-track-handleoffset)}:host([variant=range]) .track:last-of-type:before{border-end-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}#ramp{block-size:var(
--mod-slider-ramp-track-height,var(--spectrum-slider-ramp-track-height)
);inset-inline-end:var(
--spectrum-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);inset-inline-start:var(
--spectrum-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);margin-block-start:calc(var(
--mod-slider-ramp-track-height,
var(--spectrum-slider-ramp-track-height)
)/2);position:absolute}:host([dir=rtl]) #ramp svg{transform:matrix(-1,0,0,1,0,0)}#ramp svg{block-size:100%;inline-size:100%}.handle{block-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);border-radius:var(
--mod-slider-handle-border-radius,var(--spectrum-slider-handle-border-radius)
);border-style:solid;border-width:var(
--mod-slider-handle-border-width,var(--spectrum-slider-handle-border-width)
);box-sizing:border-box;display:inline-block;inline-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);inset-block-start:calc(var(--mod-slider-control-height, var(--spectrum-slider-control-height))/2 - var(--mod-slider-handle-size, var(--spectrum-slider-handle-size))/2);inset-inline-start:0;margin-block:0;margin-inline:calc(var(--mod-slider-handle-size, var(--spectrum-slider-handle-size))/-2) 0;outline:none;position:absolute;transition:border-width var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out;z-index:2}.handle.dragging,.handle.handle-highlight,.handle:active{border-width:var(
--mod-slider-handle-border-width-down,var(--spectrum-slider-handle-border-width-down)
)}.handle.dragging,.handle.handle-highlight,.handle.is-tophandle,.handle:active{z-index:3}.handle:before{block-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);border-radius:100%;content:" ";display:block;inline-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,inline-size var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,block-size var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out}.handle.handle-highlight:before{block-size:calc(var(--mod-slider-handle-size, var(--spectrum-slider-handle-size)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*2);inline-size:calc(var(--mod-slider-handle-size, var(--spectrum-slider-handle-size)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*2)}.input{-webkit-appearance:none;block-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);border:0;cursor:default;inline-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);inset-block-start:var(
--mod-slider-input-top-size,var(--spectrum-slider-input-top-size)
);inset-inline-start:var(
--mod-slider-input-left,var(--spectrum-slider-input-left)
);margin:0;opacity:.000001;overflow:hidden;padding:0;pointer-events:none;position:absolute}.input:focus{outline:none}#label-container{align-items:center;display:flex;font-size:var(--mod-slider-font-size,var(--spectrum-slider-font-size));inline-size:auto;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin-block-start:var(
--mod-slider-label-top-to-text,var(--spectrum-slider-label-top-to-text)
);position:relative}#label-container:lang(ja),#label-container:lang(ko),#label-container:lang(zh){line-height:var(
--mod-slider-cjk-line-height,var(--spectrum-slider-cjk-line-height)
)}#label{flex-grow:1;font-size:var(--mod-slider-font-size,var(--spectrum-slider-font-size));padding-inline-start:0}#value{font-feature-settings:"tnum";cursor:default;flex-grow:0;margin-inline-start:var(
--mod-slider-label-margin-start,var(--spectrum-slider-label-margin-start)
);padding-inline-end:0;text-align:end}:host([variant=tick]) .handle{background-color:var(
--highcontrast-slider-tick-handle-background-color,var(
--mod-slider-tick-handle-background-color,var(--spectrum-slider-tick-handle-background-color)
)
)}:host([variant=tick]) #controls{margin-block-start:calc(var(--spectrum-text-to-visual-75) - var(
--mod-slider-tick-mark-height,
var(--spectrum-slider-tick-mark-height)
)/2 - var(
--mod-slider-track-thickness,
var(--spectrum-slider-track-thickness)
)/2)}:host([variant=tick]) .tickLabel{margin-block-start:calc(var(
--mod-slider-tick-mark-height,
var(--spectrum-slider-tick-mark-height)
) + var(--spectrum-text-to-visual-75))}.ticks{display:flex;justify-content:space-between;margin-inline:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);z-index:0}.ticks~.spectrum-Slider-handleContainer .handle{background:var(
--mod-slider-ticks-handle-background-color,var(--spectrum-slider-ticks-handle-background-color)
)}.tick{inline-size:var(
--mod-slider-tick-mark-width,var(--spectrum-slider-tick-mark-width)
);inset-block-start:calc(var(--mod-slider-track-thickness, var(--spectrum-slider-control-height))/2 - var(
--mod-slider-tick-mark-height,
var(--spectrum-slider-tick-mark-height)
)/2);position:relative}.tick:after{block-size:var(
--mod-slider-tick-mark-height,var(--spectrum-slider-tick-mark-height)
);border-radius:var(
--mod-slider-tick-mark-border-radius,var(--spectrum-slider-tick-mark-border-radius)
);content:"";display:block;inline-size:var(
--mod-slider-tick-mark-width,var(--spectrum-slider-tick-mark-width)
);inset-block-start:0;inset-inline-start:calc(50% - var(
--mod-slider-tick-mark-width,
var(--spectrum-slider-tick-mark-width)
)/2);position:absolute}.tick .tickLabel{align-items:center;display:flex;font-size:var(--mod-font-size-75,var(--spectrum-font-size-75));justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100))}.tick:first-of-type .tickLabel,.tick:last-of-type .tickLabel{display:block;margin-inline:0;position:absolute}.tick:first-of-type{inset-inline-start:calc(var(
--mod-slider-tick-mark-width,
var(--spectrum-slider-tick-mark-width)
)/-2)}.tick:first-of-type .tickLabel{inset-inline-start:0}.tick:last-of-type{inset-inline-end:calc(var(
--mod-slider-tick-mark-width,
var(--spectrum-slider-tick-mark-width)
)/-2)}.tick:last-of-type .tickLabel{inset-inline-end:0}:host([disabled]){cursor:default}:host([disabled]) .handle{cursor:default;pointer-events:none}:host([disabled]) .tickLabel{color:var(
--highcontrast-slider-label-text-color-disabled,var(
--mod-slider-label-text-color-disabled,var(--spectrum-slider-label-text-color-disabled)
)
)}.spectrum-Slider-handleContainer,.spectrum-Slider-trackContainer{inline-size:calc(100% + var(--spectrum-slider-handle-size));inset-block-start:0;margin-inline-start:calc(var(--spectrum-slider-handle-size)/2*-1);position:absolute}.spectrum-Slider-trackContainer{block-size:var(
--mod-slider-control-height,var(--spectrum-slider-control-height)
);overflow:hidden}.track:before{background:var(
--highcontrast-slider-track-color,var(--mod-slider-track-color,var(--spectrum-slider-track-color))
)}#label-container{color:var(
--highcontrast-slider-label-text-color,var(
--mod-slider-label-text-color,var(--spectrum-slider-label-text-color)
)
)}:host([variant=filled]) .track:first-child:before{background:var(
--highcontrast-slider-track-fill-color,var(
--mod-slider-track-fill-color,var(--spectrum-slider-track-fill-color)
)
)}#fill:before{background:var(
--highcontrast-slider-track-fill-color,var(
--mod-slider-track-fill-color,var(--spectrum-slider-track-fill-color)
)
)}#ramp path{fill:var(
--highcontrast-slider-ramp-track-color,var(
--mod-slider-ramp-track-color,var(--spectrum-slider-ramp-track-color)
)
)}.handle{background:var(
--highcontrast-slider-handle-background-color,var(
--mod-slider-handle-background-color,var(--spectrum-slider-handle-background-color)
)
);border-color:var(
--highcontrast-slider-handle-border-color,var(
--mod-slider-handle-border-color,var(--spectrum-slider-handle-border-color)
)
)}.handle:hover{border-color:var(
--highcontrast-slider-handle-border-color-hover,var(
--mod-slider-handle-border-color-hover,var(--spectrum-slider-handle-border-color-hover)
)
)}.handle.handle-highlight{border-color:var(
--highcontrast-slider-handle-border-color-key-focus,var(
--mod-slider-handle-border-color-key-focus,var(--spectrum-slider-handle-border-color-key-focus)
)
)}.handle.handle-highlight:before{box-shadow:0 0 0 var(--spectrum-focus-indicator-thickness) var(
--highcontrast-slider-handle-focus-ring-color-key-focus,var(
--mod-slider-handle-focus-ring-color-key-focus,var(--spectrum-slider-handle-focus-ring-color-key-focus)
)
)}.handle.dragging,.handle:active{border-color:var(
--highcontrast-slider-handle-border-color-down,var(
--mod-slider-handle-border-color-down,var(--spectrum-slider-handle-border-color-down)
)
)}:host([variant=ramp]) .handle{background:var(
--mod-slider-ramp-handle-background-color,var(--spectrum-slider-ramp-handle-background-color)
);box-shadow:0 0 0 var(--spectrum-slider-handle-gap) var(
--highcontrast-slider-ramp-handle-border-color-active,var(
--mod-sectrum-slider-ramp-handle-border-color-active,var(--spectrum-slider-ramp-handle-border-color-active)
)
)}@media (forced-colors:active){:host([variant=ramp]) .handle{background-color:ButtonFace;border-color:ButtonText;box-shadow:0 0 0 var(--spectrum-slider-handle-gap) ButtonFace;forced-color-adjust:none}}.input{background:none}.tick:after{background-color:var(
--highcontrast-slider-tick-mark-color,var(
--mod-slider-tick-mark-color,var(--spectrum-slider-tick-mark-color)
)
)}.handle.dragging{background:var(
--highcontrast-slider-handle-background-color,var(
--mod-slider-handle-background-color,var(--spectrum-slider-handle-background-color)
)
);border-color:var(
--highcontrast-slider-handle-border-color-down,var(
--mod-slider-handle-border-color-down,var(--spectrum-slider-handle-border-color-down)
)
)}:host([variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--highcontrast-slider-track-fill-color,var(
--mod-slider-track-fill-color,var(--spectrum-slider-track-fill-color)
)
)}:host([disabled]) #label-container{color:var(
--highcontrast-slider-label-text-color-disabled,var(
--mod-slider-label-text-color-disabled,var(--spectrum-slider-label-text-color-disabled)
)
)}:host([disabled]) .handle{background:var(
--highcontrast-slider-handle-disabled-background-color,var(
--mod-slider-handle-disabled-background-color,var(--spectrum-slider-handle-disabled-background-color)
)
);border-color:var(
--highcontrast-slider-handle-border-color-disabled,var(
--mod-slider-handle-border-color-disabled,var(--spectrum-slider-handle-border-color-disabled)
)
)}:host([disabled]) .handle:active,:host([disabled]) .handle:hover{background:var(
--highcontrast-slider-handle-background-color-disabled,var(
--mod-slider-handle-background-color-disabled,var(--spectrum-slider-handle-background-color-disabled)
)
);border-color:var(
--highcontrast-disabled-border-color,var(--mod-disabled-border-color,var(--spectrum-disabled-border-color))
)}:host([disabled]) .track:before{background:var(
--highcontrast-slider-track-color-disabled,var(
--mod-slider-track-color-disabled,var(--spectrum-slider-track-color-disabled)
)
)}:host([disabled][variant=filled]) .track:first-child:before{background:var(
--highcontrast-slider-track-fill-color-disabled,var(
--mod-slider-track-fill-color-disabled,var(--spectrum-slider-track-fill-color-disabled)
)
)}:host([disabled]) #fill:before{background:var(
--highcontrast-slider-track-fill-color-disabled,var(
--mod-slider-track-fill-color-disabled,var(--spectrum-slider-track-fill-color-disabled)
)
)}@media (forced-colors:active){:host([disabled]) #ramp+.handle{fill:ButtonFace;background-color:ButtonFace}}:host([disabled]) #ramp path{fill:var(
--highcontrast-slider-ramp-track-color-disabled,var(
--mod-slider-ramp-track-color-disabled,var(--spectrum-slider-ramp-track-color-disabled)
)
)}:host([disabled]) .tick:after{background-color:var(
--highcontrast-slider-tick-mark-color-disabled,var(
--mod-slider-tick-mark-color-disabled,var(--spectrum-slider-tick-mark-color-disabled)
)
)}:host([disabled][variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--highcontrast-slider-track-color-disabled,var(
--mod-slider-track-color-disabled,var(--spectrum-slider-track-color-disabled)
)
)}@media (forced-colors:active){:host{--highcontrast-slider-track-color:ButtonText;--highcontrast-slider-track-fill-color:ButtonText;--highcontrast-slider-ramp-track-color:ButtonText;--highcontrast-slider-ramp-track-color-disabled:GrayText;--highcontrast-slider-tick-mark-color:ButtonText;--spectrum-slider-track-color:ButtonText;--spectrum-slider-track-fill-color:ButtonText;--spectrum-slider-ramp-track-color:ButtonText;--spectrum-slider-ramp-track-color-disabled:GrayText;--spectrum-slider-handle-background-color:ButtonFace;--spectrum-slider-handle-background-color-disabled:GrayText;--spectrum-slider-handle-border-color:ButtonText;--spectrum-slider-handle-disabled-background-color:GrayText;--spectrum-slider-tick-mark-color:ButtonText;--spectrum-slider-tick-mark-color-disabled:GrayText;--spectrum-slider-handle-border-color-hover:Highlight;--spectrum-slider-handle-border-color-down:Highlight;--spectrum-slider-handle-border-color-key-focus:Highlight;--spectrum-slider-handle-focus-ring-color-key-focus:Highlight;--spectrum-slider-track-color-disabled:GrayText;--spectrum-slider-track-fill-color-disabled:GrayText;--spectrum-slider-handle-border-color-disabled:GrayText;--spectrum-slider-label-text-color:CanvasText;--spectrum-slider-label-text-color-disabled:GrayText;--spectrum-slider-ramp-handle-border-color-active:ButtonText}}:host{--spectrum-slider-track-color:var(--system-spectrum-slider-track-color);--spectrum-slider-track-fill-color:var(
--system-spectrum-slider-track-fill-color
);--spectrum-slider-ramp-track-color:var(
--system-spectrum-slider-ramp-track-color
);--spectrum-slider-ramp-track-color-disabled:var(
--system-spectrum-slider-ramp-track-color-disabled
);--spectrum-slider-handle-background-color:var(
--system-spectrum-slider-handle-background-color
);--spectrum-slider-handle-background-color-disabled:var(
--system-spectrum-slider-handle-background-color-disabled
);--spectrum-slider-ramp-handle-background-color:var(
--system-spectrum-slider-ramp-handle-background-color
);--spectrum-slider-ticks-handle-background-color:var(
--system-spectrum-slider-ticks-handle-background-color
);--spectrum-slider-handle-border-color:var(
--system-spectrum-slider-handle-border-color
);--spectrum-slider-handle-disabled-background-color:var(
--system-spectrum-slider-handle-disabled-background-color
);--spectrum-slider-tick-mark-color:var(
--system-spectrum-slider-tick-mark-color
);--spectrum-slider-handle-border-color-hover:var(
--system-spectrum-slider-handle-border-color-hover
);--spectrum-slider-handle-border-color-down:var(
--system-spectrum-slider-handle-border-color-down
);--spectrum-slider-handle-border-color-key-focus:var(
--system-spectrum-slider-handle-border-color-key-focus
);--spectrum-slider-handle-focus-ring-color-key-focus:var(
--system-spectrum-slider-handle-focus-ring-color-key-focus
)}sp-field-label{padding-bottom:0;padding-top:0}:host(:focus){outline:0}:host([editable]){display:grid;grid-template-areas:"label ." "slider number";grid-template-columns:1fr auto}:host([editable]) #label-container{grid-area:label}:host([editable]) #label-container+div{grid-area:slider}:host([editable]) sp-number-field{--mod-stepper-width:var(
--spectrum-slider-editable-number-field-width,var(--spectrum-global-dimension-size-1000)
);grid-area:number}:host([hide-stepper]) sp-number-field{--mod-stepper-width:var(
--spectrum-slider-editable-number-field-width,var(--spectrum-global-dimension-size-900)
)}:host([editable][dir=ltr]) sp-number-field{margin-left:var(--spectrum-global-dimension-size-200)}:host([editable][dir=rtl]) sp-number-field{margin-right:var(--spectrum-global-dimension-size-200)}:host([editable]) output{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([disabled]){pointer-events:none}#track,:host([dragging]){touch-action:none;-webkit-user-select:none;user-select:none}.not-exact.ticks{justify-content:start}:host([dir=ltr]) .not-exact .tick{padding-right:var(--sp-slider-tick-offset)}:host([dir=rtl]) .not-exact .tick{padding-left:var(--sp-slider-tick-offset)}:host([dir=ltr]) .not-exact .tick:after{left:auto;transform:translate(-50%)}:host([dir=rtl]) .not-exact .tick:after{right:auto;transform:translate(50%)}.track:before{background-size:var(--spectrum-slider-track-background-size)!important}:host([dir=ltr]) .track:last-of-type:before{background-position:100%}:host([dir=rtl]) .track:first-of-type:before{background-position:100%}:host([dir=ltr]) .track:not(:first-of-type,:last-of-type){left:var(--spectrum-slider-track-segment-position)}:host([dir=rtl]) .track:not(:first-of-type,:last-of-type){right:var(--spectrum-slider-track-segment-position)}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([label-visibility=value][dir=ltr]) #value{margin-left:auto}:host([label-visibility=value][dir=rtl]) #value{margin-right:auto}:host([label-visibility=none]) #label-container{margin:0;padding:0}
`;var w=o(666413),_=(o(661517),o(108348));class S{constructor(t){this.handles=new Map,this.model=[],this.handleOrder=[],this.handleOrientation=()=>{this.updateBoundingRect()},this.extractModelFromLightDom=()=>{let t=[...this.host.querySelectorAll('[slot="handle"]')];0===t.length&&(t=[this.host]),!t.some((t=>this.waitForUpgrade(t)))&&(this.handles=new Map,this.handleOrder=[],t.forEach(((t,e)=>{var o;null!=(o=t.handleName)&&o.length||(t.name=`handle${e+1}`),this.handles.set(t.handleName,t),this.handleOrder.push(t.handleName),t.handleController=this})),this.requestUpdate())},this.onInputChange=t=>{const e=t.target;e.model.handle.value=e.valueAsNumber,this.requestUpdate(),this.dispatchChangeEvent(e,e.model.handle)},this.onInputFocus=t=>{const e=t.target;let o;try{o=e.matches(":focus-visible")||this.host.matches(".focus-visible")}catch(t){o=this.host.matches(".focus-visible")}e.model.handle.highlight=o,this.requestUpdate()},this.onInputBlur=t=>{t.target.model.handle.highlight=!1,this.requestUpdate()},this.onInputKeydown=t=>{t.target.model.handle.highlight=!0,this.requestUpdate()},this.host=t,new _._(this.host,{config:{subtree:!0,childList:!0},callback:()=>{this.extractModelFromLightDom()}}),this.extractModelFromLightDom()}get values(){const t={};for(const e of this.handles.values())t[e.handleName]=e.value;return t}get size(){return this.handles.size}inputForHandle(t){if(this.handles.has(t.handleName)){const{input:e}=this.getHandleElements(t);return e}throw new Error(`No input for handle "${t.name}"`)}requestUpdate(){this.host.hasUpdated&&this.host.requestUpdate()}setValueFromHandle(t){const e=this.getHandleElements(t);if(!e)return;const{input:o}=e;o.valueAsNumber===t.value?t.dragging&&t.dispatchInputEvent():(o.valueAsNumber=t.value,this.requestUpdate()),t.value=o.valueAsNumber}handleHasChanged(t){t!==this.host&&this.requestUpdate()}formattedValueForHandle(t){var e;const{handle:o}=t,i=null!=(e=o.numberFormat)?e:this.host.numberFormat;return o.getAriaHandleText(t.value,i)}get formattedValues(){const t=new Map;for(const e of this.model)t.set(e.name,this.formattedValueForHandle(e));return t}get focusElement(){const{input:t}=this.getActiveHandleElements();return this.host.editable&&!t.model.handle.dragging?this.host.numberField:t}hostConnected(){"orientation"in screen?screen.orientation.addEventListener("change",this.handleOrientation):window.addEventListener("orientationchange",this.handleOrientation)}hostDisconnected(){"orientation"in screen?screen.orientation.removeEventListener("change",this.handleOrientation):window.removeEventListener("orientationchange",this.handleOrientation)}hostUpdate(){this.updateModel()}waitForUpgrade(t){return!(t instanceof m)&&(t.addEventListener("sp-slider-handle-ready",(()=>this.extractModelFromLightDom()),{once:!0,passive:!0}),!0)}get activeHandle(){return this.handleOrder[this.handleOrder.length-1]}get activeHandleInputId(){const t=this.activeHandle;return`input-${this.model.findIndex((e=>e.name===t))}`}activateHandle(t){const e=this.handleOrder.findIndex((e=>e===t));e>=0&&this.handleOrder.splice(e,1),this.handleOrder.push(t)}getActiveHandleElements(){const t=this.activeHandle,e=this.handles.get(t);return{model:e,...this.getHandleElements(e)}}getHandleElements(t){if(!this.handleRefMap){this.handleRefMap=new WeakMap;const t=this.host.shadowRoot.querySelectorAll(".handle > input");for(const e of t){const t=e,o=t.parentElement,i=this.handles.get(o.getAttribute("name"));i&&this.handleRefMap.set(i,{input:t,handle:o})}}return this.handleRefMap.get(t)}clearHandleComponentCache(){delete this.handleRefMap}get boundingClientRect(){return this._boundingClientRect||(this._boundingClientRect=this.host.track.getBoundingClientRect()),this._boundingClientRect}updateBoundingRect(){delete this._boundingClientRect}extractDataFromEvent(t){if(!this._activePointerEventData){let e=t.target.querySelector(":scope > .input");const o=!e,i=e?e.model:this.model.find((t=>t.name===this.activeHandle));!e&&i&&(e=i.handle.focusElement),this._activePointerEventData={input:e,model:i,resolvedInput:o}}return this._activePointerEventData}handlePointerdown(t){const{resolvedInput:e,model:o}=this.extractDataFromEvent(t);o&&!this.host.disabled&&0===t.button?(this.host.track.setPointerCapture(t.pointerId),this.updateBoundingRect(),"mouse"===t.pointerType&&this.host.labelEl.click(),this.draggingHandle=o.handle,o.handle.dragging=!0,this.activateHandle(o.name),e&&this.handlePointermove(t),this.requestUpdate()):t.preventDefault()}handlePointerup(t){const{input:e,model:o}=this.extractDataFromEvent(t);delete this._activePointerEventData,o&&("mouse"===t.pointerType&&this.host.labelEl.click(),this.cancelDrag(o),this.requestUpdate(),this.host.track.releasePointerCapture(t.pointerId),this.dispatchChangeEvent(e,o.handle))}handlePointermove(t){const{input:e,model:o}=this.extractDataFromEvent(t);o&&this.draggingHandle&&(t.stopPropagation(),e.value=this.calculateHandlePosition(t,o).toString(),o.handle.value=parseFloat(e.value),this.host.indeterminate=!1,this.requestUpdate())}cancelDrag(t){(t=t||this.model.find((t=>t.name===this.activeHandle)))&&(t.handle.highlight=!1,delete this.draggingHandle,t.handle.dragging=!1)}dispatchChangeEvent(t,e){t.valueAsNumber=e.value;const o=new Event("change",{bubbles:!0,composed:!0});e.dispatchEvent(o)}calculateHandlePosition(t,e){const o=this.boundingClientRect,i=o.left,r=t.clientX,a=o.width,s=(this.host.isLTR?r-i:a-(r-i))/a;return e.normalization.fromNormalized(s,e.range.min,e.range.max)}renderHandle(t,e,o,i){var r;const a={handle:!0,dragging:(null==(r=this.draggingHandle)?void 0:r.handleName)===t.name,"handle-highlight":t.highlight},s={[this.host.isLTR?"left":"right"]:100*t.normalizedValue+"%","z-index":o.toString(),"background-color":`var(--spectrum-slider-handle-background-color-${e}, var(--spectrum-slider-handle-background-color))`,"border-color":`var(--spectrum-slider-handle-border-color-${e}, var(--spectrum-slider-handle-border-color))`},n=i?`label input-${e}`:"label";return v.dy`
            <div
                class=${(0,b.$)(a)}
                name=${t.name}
                style=${(0,k.V)(s)}
                role="presentation"
            >
                <input
                    type="range"
                    class="input"
                    id="input-${e}"
                    min=${t.clamp.min}
                    max=${t.clamp.max}
                    step=${t.step}
                    value=${t.value}
                    aria-disabled=${(0,f.o)(this.host.disabled?"true":void 0)}
                    tabindex=${(0,f.o)(this.host.editable?-1:void 0)}
                    aria-label=${(0,f.o)(t.ariaLabel)}
                    aria-labelledby=${n}
                    aria-valuetext=${this.formattedValueForHandle(t)}
                    @change=${this.onInputChange}
                    @focus=${this.onInputFocus}
                    @blur=${this.onInputBlur}
                    @keydown=${this.onInputKeydown}
                    .model=${t}
                />
            </div>
        `}render(){return this.clearHandleComponentCache(),this.model.map(((t,e)=>{const o=this.handleOrder.indexOf(t.name)+1;return this.renderHandle(t,e,o,this.model.length>1)}))}trackSegments(){const t=this.model.map((t=>t.normalizedValue));return t.sort(((t,e)=>t-e)),t.unshift(0),t.map(((t,e,o)=>{var i;return[t,null!=(i=o[e+1])?i:1]}))}updateModel(){const t=[...this.handles.values()],e=e=>{const o=t[e],i=t[e-1],r=t[e+1],a="number"==typeof o.min?o.min:this.host.min,s="number"==typeof o.max?o.max:this.host.max,n={range:{min:a,max:s},clamp:{min:a,max:s}};if("previous"===o.min&&i){for(let o=e-1;o>=0;o--){const e=t[o];if("number"==typeof e.min){n.range.min=e.min;break}}n.clamp.min=Math.max(i.value,n.range.min)}if("next"===o.max&&r){for(let o=e+1;o<t.length;o++){const e=t[o];if("number"==typeof e.max){n.range.max=e.max;break}}n.clamp.max=Math.min(r.value,n.range.max)}return n},o=t.map(((t,o)=>{var i;const r=e(o),{toNormalized:a}=t.normalization,s=Math.max(Math.min(t.value,r.clamp.max),r.clamp.min),n=a(s,r.range.min,r.range.max);return{name:t.handleName,value:s,normalizedValue:n,highlight:t.highlight,step:null!=(i=t.step)?i:this.host.step,normalization:t.normalization,handle:t,ariaLabel:t!==this.host&&(null==t?void 0:t.label.length)>0?t.label:void 0,...r}}));this.model=o}async handleUpdatesComplete(){const t=[...this.handles.values()].filter((t=>t!==this.host)).map((t=>t.updateComplete));await Promise.all(t)}}var A=o(547179),C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,z=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?E(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&C(e,o,a),a};const T=["filled","ramp","range","tick"];class D extends((0,w.o)(m,"")){constructor(){super(...arguments),this.handleController=new S(this),this._editable=!1,this.hideStepper=!1,this.type="",this._variant="",this.getAriaValueText=t=>{const e=[...t.values()];return 2===e.length?`${e[0]}${this._forcedUnit} - ${e[1]}${this._forcedUnit}`:e.join(`${this._forcedUnit}, `)+this._forcedUnit},this.min=0,this.max=100,this.step=1,this.tickStep=0,this.tickLabels=!1,this.disabled=!1,this.quiet=!1,this.indeterminate=!1,this._numberFieldInput=Promise.resolve()}static get styles(){return[x]}get editable(){return this._editable}set editable(t){if(t===this.editable)return;const e=this.editable;this._editable=this.handleController.size<2&&t,this.editable&&(this._numberFieldInput=Promise.all([o.e(33055),o.e(93504)]).then(o.bind(o,593504))),e!==this.editable&&this.requestUpdate("editable",e)}set variant(t){const e=this.variant;t!==this.variant&&(T.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e))}get variant(){return this._variant}get values(){return this.handleController.values}get handleName(){return"value"}get ariaValueText(){return this.getAriaValueText?this.getAriaValueText(this.handleController.formattedValues):`${this.value}${this._forcedUnit}`}get numberFormat(){return this.getNumberFormat()}get focusElement(){return this.handleController.focusElement}handleLabelClick(t){this.editable&&(t.preventDefault(),this.focus())}render(){return v.dy`
            ${this.renderLabel()} ${this.renderTrack()}
            ${this.editable?v.dy`
                      <sp-number-field
                          .formatOptions=${this.formatOptions||{}}
                          id="number-field"
                          min=${this.min}
                          max=${this.max}
                          step=${this.step}
                          value=${this.value}
                          ?hide-stepper=${this.hideStepper}
                          ?disabled=${this.disabled}
                          ?quiet=${this.quiet}
                          ?indeterminate=${this.indeterminate}
                          @input=${this.handleNumberInput}
                          @change=${this.handleNumberChange}
                      ></sp-number-field>
                  `:v.dy``}
        `}connectedCallback(){super.connectedCallback(),this.handleController.hostConnected()}disconnectedCallback(){super.disconnectedCallback(),this.handleController.hostDisconnected()}update(t){this.handleController.hostUpdate(),t.has("disabled")&&this.disabled&&this.handleController.cancelDrag(),super.update(t)}renderLabel(){const t="none"===this.labelVisibility||"value"===this.labelVisibility,e="none"===this.labelVisibility||"text"===this.labelVisibility;return v.dy`
            <div id="label-container">
                <sp-field-label
                    class=${(0,b.$)({"visually-hidden":t})}
                    ?disabled=${this.disabled}
                    id="label"
                    for=${this.editable?"number-field":this.handleController.activeHandleInputId}
                    @click=${this.handleLabelClick}
                >
                    ${this.slotHasContent?v.dy``:this.label}
                    <slot>${this.label}</slot>
                </sp-field-label>
                <output
                    class=${(0,b.$)({"visually-hidden":e})}
                    id="value"
                    aria-live="off"
                    for="input"
                >
                    ${this.ariaValueText}
                </output>
            </div>
        `}renderRamp(){return"ramp"!==this.variant?v.dy``:v.dy`
            <div id="ramp">
                <svg
                    viewBox="0 0 240 16"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                        d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"
                    ></path>
                </svg>
            </div>
        `}renderTicks(){if("tick"!==this.variant)return v.dy``;const t=this.tickStep||this.step,e=(this.max-this.min)/t,o=e%1!=0,i=new Array(Math.floor(e+1));return i.fill(0,0,e+1),v.dy`
            <div
                class="${o?"not-exact ":""}ticks"
                style=${(0,f.o)(o?`--sp-slider-tick-offset: calc(100% / ${this.max} * ${this.tickStep}`:void 0)}
            >
                ${i.map(((e,o)=>v.dy`
                        <div class="tick">
                            ${this.tickLabels?v.dy`
                                      <div class="tickLabel">
                                          ${o*t+this.min}
                                      </div>
                                  `:v.dy``}
                        </div>
                    `))}
            </div>
        `}renderTrackSegment(t,e){return"ramp"===this.variant?v.dy``:v.dy`
            <div
                class="track"
                style=${(0,k.V)(this.trackSegmentStyles(t,e))}
                role="presentation"
            ></div>
        `}renderTrack(){const t=this.handleController.trackSegments(),e=[{id:"track0",html:this.renderTrackSegment(...t[0])},{id:"ramp",html:this.renderRamp()},{id:"ticks",html:this.renderTicks()},{id:"handles",html:this.handleController.render()},...t.slice(1).map((([t,e],o)=>({id:`track${o+1}`,html:this.renderTrackSegment(t,e)})))];return v.dy`
            <div
                id="track"
                ${(0,A.k)({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel","pointerleave"],this.handlePointerup]})}
            >
                <div id="controls">
                    ${(0,y.r)(e,(t=>t.id),(t=>t.html))}
                </div>
            </div>
        `}handlePointerdown(t){this.handleController.handlePointerdown(t)}handlePointermove(t){this.handleController.handlePointermove(t)}handlePointerup(t){this.handleController.handlePointerup(t)}handleNumberInput(t){var e;const{value:o}=t.target;null==(e=t.target)||!e.managedInput||isNaN(o)?t.stopPropagation():this.value=o}handleNumberChange(t){var e;const{value:o}=t.target;isNaN(o)?(t.target.value=this.value,t.stopPropagation()):(this.value=o,null!=(e=t.target)&&e.managedInput||this.dispatchInputEvent()),this.indeterminate=!1}trackSegmentStyles(t,e){const o=e-t;return{width:100*o+"%","--spectrum-slider-track-background-size":1/o*100+"%","--spectrum-slider-track-segment-position":100*t+"%"}}async getUpdateComplete(){const t=await super.getUpdateComplete();return this.editable&&(await this._numberFieldInput,await this.numberField.updateComplete),await this.handleController.handleUpdatesComplete(),t}}z([(0,i.Cb)({type:Boolean,reflect:!0})],D.prototype,"editable",1),z([(0,i.Cb)({type:Boolean,reflect:!0,attribute:"hide-stepper"})],D.prototype,"hideStepper",2),z([(0,i.Cb)()],D.prototype,"type",2),z([(0,i.Cb)({type:String})],D.prototype,"variant",1),z([(0,i.Cb)({attribute:!1})],D.prototype,"getAriaValueText",2),z([(0,i.Cb)({type:String,reflect:!0,attribute:"label-visibility"})],D.prototype,"labelVisibility",2),z([(0,i.Cb)({type:Number,reflect:!0})],D.prototype,"min",2),z([(0,i.Cb)({type:Number,reflect:!0})],D.prototype,"max",2),z([(0,i.Cb)({type:Number})],D.prototype,"step",2),z([(0,i.Cb)({type:Number,attribute:"tick-step"})],D.prototype,"tickStep",2),z([(0,i.Cb)({type:Boolean,attribute:"tick-labels"})],D.prototype,"tickLabels",2),z([(0,i.Cb)({type:Boolean,reflect:!0})],D.prototype,"disabled",2),z([(0,i.Cb)({type:Boolean})],D.prototype,"quiet",2),z([(0,i.Cb)({type:Boolean})],D.prototype,"indeterminate",2),z([(0,i.IO)("#label")],D.prototype,"labelEl",2),z([(0,i.IO)("#number-field")],D.prototype,"numberField",2),z([(0,i.IO)("#track")],D.prototype,"track",2),(0,g.N)("sp-slider",D)},852032:(t,e,o)=>{o.d(e,{Z:()=>s});var i=o(478984),r=o(17050);const a=o(903512).iv`
.spectrum-Detail{--spectrum-detail-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-detail-serif-font-family:var(
--spectrum-serif-font-family-stack
);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-detail-margin-start:calc(var(--mod-detail-font-size, var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-top-multiplier));--spectrum-detail-margin-end:calc(var(--mod-detail-font-size, var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-bottom-multiplier));--spectrum-detail-font-color:var(--spectrum-detail-color)}@media (forced-colors:active){.spectrum-Detail{--highcontrast-detail-font-color:Text}}.spectrum-Detail--sizeS{--spectrum-detail-font-size:var(--spectrum-detail-size-s)}.spectrum-Detail--sizeM{--spectrum-detail-font-size:var(--spectrum-detail-size-m)}.spectrum-Detail--sizeL{--spectrum-detail-font-size:var(--spectrum-detail-size-l)}.spectrum-Detail--sizeXL{--spectrum-detail-font-size:var(--spectrum-detail-size-xl)}.spectrum-Detail{color:var(
--highcontrast-detail-font-color,var(--mod-detail-font-color,var(--spectrum-detail-font-color))
);font-family:var(
--mod-detail-sans-serif-font-family,var(--spectrum-detail-sans-serif-font-family)
);font-size:var(--mod-detail-font-size,var(--spectrum-detail-font-size));font-style:var(
--mod-detail-sans-serif-font-style,var(--spectrum-detail-sans-serif-font-style)
);font-weight:var(
--mod-detail-sans-serif-font-weight,var(--spectrum-detail-sans-serif-font-weight)
);letter-spacing:var(
--mod-detail-letter-spacing,var(--spectrum-detail-letter-spacing)
);line-height:var(
--mod-detail-line-height,var(--spectrum-detail-line-height)
);margin-block:0;text-transform:uppercase}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-style:var(
--mod-detail-sans-serif-strong-font-style,var(--spectrum-detail-sans-serif-strong-font-style)
);font-weight:var(
--mod-detail-sans-serif-strong-font-weight,var(--spectrum-detail-sans-serif-strong-font-weight)
)}.spectrum-Detail .spectrum-Detail-emphasized,.spectrum-Detail em{font-style:var(
--mod-detail-sans-serif-emphasized-font-style,var(--spectrum-detail-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-emphasized-font-weight,var(--spectrum-detail-sans-serif-emphasized-font-weight)
)}.spectrum-Detail .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail em strong,.spectrum-Detail strong em{font-style:var(
--mod-detail-sans-serif-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(
--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family)
);font-style:var(
--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style)
);font-weight:var(
--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight)
);line-height:var(
--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(
--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style)
);font-weight:var(
--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(
--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(
--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight)
)}.spectrum-Detail--serif{font-family:var(
--mod-detail-serif-font-family,var(--spectrum-detail-serif-font-family)
);font-style:var(
--mod-detail-serif-font-style,var(--spectrum-detail-serif-font-style)
);font-weight:var(
--mod-detail-serif-font-weight,var(--spectrum-detail-serif-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-strong,.spectrum-Detail--serif strong{font-style:var(
--mod-detail-serif-strong-font-style,var(--spectrum-detail-serif-strong-font-style)
);font-weight:var(
--mod-detail-serif-strong-font-weight,var(--spectrum-detail-serif-strong-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-emphasized,.spectrum-Detail--serif em{font-style:var(
--mod-detail-serif-emphasized-font-style,var(--spectrum-detail-serif-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-emphasized-font-weight,var(--spectrum-detail-serif-emphasized-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--serif em strong,.spectrum-Detail--serif strong em{font-style:var(
--mod-detail-serif-strong-emphasized-font-style,var(--spectrum-detail-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-strong-emphasized-font-weight,var(--spectrum-detail-serif-strong-emphasized-font-weight)
)}.spectrum-Detail--light{font-style:var(
--mod-detail-sans-serif-light-font-style,var(--spectrum-detail-sans-serif-light-font-style)
);font-weight:var(
--spectrum-detail-sans-serif-light-font-weight,var(--spectrum-detail-sans-serif-light-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--light strong{font-style:var(
--mod-detail-sans-serif-light-strong-font-style,var(--spectrum-detail-sans-serif-light-strong-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-strong-font-weight,var(--spectrum-detail-sans-serif-light-strong-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--light em{font-style:var(
--mod-detail-sans-serif-light-emphasized-font-style,var(--spectrum-detail-sans-serif-light-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-emphasized-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--light em strong,.spectrum-Detail--light strong em{font-style:var(
--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight)
)}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(
--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style)
);font-weight:var(
--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(
--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style)
);font-weight:var(
--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(
--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(
--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light{font-style:var(
--mod-detail-serif-light-font-style,var(--spectrum-detail-serif-light-font-style)
);font-weight:var(
--mod-detail-serif-light-font-weight,var(--spectrum-detail-serif-light-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--serif.spectrum-Detail--light strong{font-style:var(
--mod-detail-serif-light-strong-font-style,var(--spectrum-detail-serif-light-strong-font-style)
);font-weight:var(
--mod-detail-serif-light-strong-font-weight,var(--spectrum-detail-serif-light-strong-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em{font-style:var(
--mod-detail-serif-light-emphasized-font-style,var(--spectrum-detail-serif-light-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-light-emphasized-font-weight,var(--spectrum-detail-serif-light-emphasized-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em strong,.spectrum-Detail--serif.spectrum-Detail--light strong em{font-style:var(
--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Detail{margin-block-end:var(
--mod-detail-margin-end,var(--spectrum-detail-margin-end)
);margin-block-start:var(
--mod-detail-margin-start,var(--spectrum-detail-margin-start)
)}
`,s=[i.Z,r.Z,a]},378885:(t,e,o)=>{var i=o(566176);(0,o(589415).N)("sp-textfield",i.V)},566176:(t,e,o)=>{o.d(e,{V:()=>b,b:()=>v});var i=o(903512),r=o(123584),a=o(747151),s=o(697038),n=o(172434),c=o(813503);o(298229),o(358319);const l=i.iv`
:host{--spectrum-texfield-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-textfield-width:240px;--spectrum-textfield-min-width:var(
--spectrum-text-field-minimum-width-multiplier
);--spectrum-textfield-corner-radius:var(--spectrum-corner-radius-100);--spectrum-textfield-height:var(--spectrum-component-height-100);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-100
);--spectrum-textfield-spacing-inline-quiet:var(
--spectrum-field-edge-to-text-quiet
);--spectrum-textfield-spacing-block-start:var(
--spectrum-component-top-to-text-100
);--spectrum-textfield-spacing-block-end:var(
--spectrum-component-bottom-to-text-100
);--spectrum-textfield-spacing-block-quiet:var(
--spectrum-field-edge-to-border-quiet
);--spectrum-textfield-label-spacing-block:var(
--spectrum-field-label-to-component
);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-100
);--spectrum-textfield-helptext-spacing-block:var(
--spectrum-help-text-to-component
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-100
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-quiet-invalid:var(
--spectrum-field-edge-to-alert-icon-quiet
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-quiet-valid:var(
--spectrum-field-edge-to-validation-icon-quiet
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-override:32px;--spectrum-Textfield-workflow-icon-width:18px;--spectrum-Textfield-workflow-icon-gap:6px;--spectrum-textfield-font-family:var(--spectrum-sans-font-family-stack);--spectrum-textfield-font-weight:var(--spectrum-regular-font-weight);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-100);--spectrum-textfield-character-count-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-textfield-character-count-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-75
);--spectrum-textfield-character-count-spacing-inline:var(
--spectrum-spacing-200
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-75
);--spectrum-textfield-character-count-spacing-inline-side:var(
--spectrum-side-label-character-count-to-field
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-medium
);--spectrum-textfield-focus-indicator-width:var(
--spectrum-focus-indicator-thickness
);--spectrum-textfield-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-textfield-background-color:var(--spectrum-gray-50);--spectrum-textfield-text-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-text-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-textfield-text-color-focus:var(
--spectrum-neutral-content-color-focus
);--spectrum-textfield-text-color-focus-hover:var(
--spectrum-neutral-content-color-focus-hover
);--spectrum-textfield-text-color-keyboard-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-textfield-text-color-readonly:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-background-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-textfield-border-color-disabled:var(
--spectrum-disabled-border-color
);--spectrum-textfield-text-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-textfield-border-color-invalid-default:var(
--spectrum-negative-border-color-default
);--spectrum-textfield-border-color-invalid-hover:var(
--spectrum-negative-border-color-hover
);--spectrum-textfield-border-color-invalid-focus:var(
--spectrum-negative-border-color-focus
);--spectrum-textfield-border-color-invalid-focus-hover:var(
--spectrum-negative-border-color-focus-hover
);--spectrum-textfield-border-color-invalid-keyboard-focus:var(
--spectrum-negative-border-color-key-focus
);--spectrum-textfield-icon-color-invalid:var(
--spectrum-negative-visual-color
);--spectrum-textfield-text-color-invalid:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-text-color-valid:var(
--spectrum-neutral-content-color-default
);--spectrum-textfield-icon-color-valid:var(
--spectrum-positive-visual-color
);--spectrum-textfield-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-text-area-min-inline-size:var(
--spectrum-text-area-minimum-width
);--spectrum-text-area-min-block-size:var(
--spectrum-text-area-minimum-height
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-100
)}.spectrum-Textfield--sizeS{--spectrum-textfield-height:var(--spectrum-component-height-75);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-small
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-100
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-75);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-75
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-75
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-small
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-small
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-small
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-small
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-small
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-small
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-75
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-75
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-small
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-small
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-75
)}.spectrum-Textfield--sizeM{--spectrum-textfield-height:var(--spectrum-component-height-100);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-medium
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-200
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-100);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-100
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-100
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-medium
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-medium
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-medium
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-75
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-75
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-medium
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-medium
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-100
)}.spectrum-Textfield--sizeL{--spectrum-textfield-height:var(--spectrum-component-height-200);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-large
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-200
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-200);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-200
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-200
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-large
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-large
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-large
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-large
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-large
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-large
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-100
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-100
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-large
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-large
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-200
)}.spectrum-Textfield--sizeXL{--spectrum-textfield-height:var(--spectrum-component-height-300);--spectrum-textfield-label-spacing-block-quiet:var(
--spectrum-field-label-to-component-quiet-extra-large
);--spectrum-textfield-label-spacing-inline-side-label:var(
--spectrum-spacing-200
);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-300);--spectrum-textfield-spacing-inline:var(
--spectrum-component-edge-to-text-200
);--spectrum-textfield-icon-size-invalid:var(
--spectrum-workflow-icon-size-300
);--spectrum-textfield-icon-spacing-inline-end-invalid:var(
--spectrum-field-edge-to-alert-icon-extra-large
);--spectrum-textfield-icon-spacing-inline-end-valid:var(
--spectrum-field-edge-to-validation-icon-extra-large
);--spectrum-textfield-icon-spacing-block-invalid:var(
--spectrum-field-top-to-alert-icon-extra-large
);--spectrum-textfield-icon-spacing-block-valid:var(
--spectrum-field-top-to-validation-icon-extra-large
);--spectrum-textfield-icon-spacing-inline-start-invalid:var(
--spectrum-field-text-to-alert-icon-extra-large
);--spectrum-textfield-icon-spacing-inline-start-valid:var(
--spectrum-field-text-to-validation-icon-extra-large
);--spectrum-textfield-character-count-font-size:var(
--spectrum-font-size-200
);--spectrum-textfield-character-count-spacing-block:var(
--spectrum-component-bottom-to-text-200
);--spectrum-textfield-character-count-spacing-block-quiet:var(
--spectrum-character-count-to-field-quiet-extra-large
);--spectrum-textfield-character-count-spacing-block-side:var(
--spectrum-side-label-character-count-top-margin-extra-large
);--spectrum-text-area-min-block-size-quiet:var(
--spectrum-component-height-300
)}#textfield{-moz-appearance:textfield;display:inline-grid;grid-template-columns:auto auto;grid-template-rows:auto auto auto;inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width));margin:0;overflow:visible;position:relative;text-indent:0;text-overflow:ellipsis}:host([quiet]) #textfield:after{block-size:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
);bottom:calc((var(
--mod-textfield-focus-indicator-gap,
var(--spectrum-textfield-focus-indicator-gap)
) + var(
--mod-textfield-focus-indicator-width,
var(--spectrum-textfield-focus-indicator-width)
))*-1);content:"";inline-size:100%;left:0;position:absolute}:host([quiet]) #textfield.focus-visible:after,:host([quiet]) #textfield:focus-within:after,:host([quiet][focused]) #textfield:after{background-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
)}:host([quiet]) #textfield.focus-visible:after,:host([quiet]) #textfield:focus-within:after,:host([quiet][focused]) #textfield:after{background-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
)}:host([quiet]) #textfield:focus-visible:after,:host([quiet]) #textfield:focus-within:after,:host([quiet][focused]) #textfield:after{background-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
)}:host([invalid]) #textfield .icon,:host([valid]) #textfield .icon{grid-area:2/2;margin-inline-start:auto;pointer-events:all;position:absolute;top:0}:host([valid]) #textfield .icon{color:var(
--highcontrast-textfield-icon-color-valid,var(
--mod-textfield-icon-color-valid,var(--spectrum-textfield-icon-color-valid)
)
);inset-block-end:var(
--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid)
);inset-block-start:var(
--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid)
);inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-valid,var(--spectrum-textfield-icon-spacing-inline-end-valid)
);inset-inline-start:var(
--mod-textfield-icon-spacing-inline-start-valid,var(--spectrum-textfield-icon-spacing-inline-start-valid)
)}:host([invalid]) #textfield .icon{block-size:var(
--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)
);color:var(
--highcontrast-textfield-icon-color-invalid,var(
--mod-textfield-icon-color-invalid,var(--spectrum-textfield-icon-color-invalid)
)
);inline-size:var(
--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)
);inset-block-end:var(
--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid)
);inset-block-start:var(
--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid)
);inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-invalid,var(--spectrum-textfield-icon-spacing-inline-end-invalid)
);inset-inline-start:var(
--mod-textfield-icon-spacing-inline-start-invalid,var(--spectrum-textfield-icon-spacing-inline-start-invalid)
)}:host([disabled]) #textfield .icon,:host([readonly]) #textfield .icon{color:#0000}:host([quiet]) .icon{padding-inline-end:0}:host([quiet][valid]) .icon{inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-quiet-valid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-valid)
)}:host([quiet][invalid]) .icon{inset-inline-end:var(
--mod-textfield-icon-spacing-inline-end-quiet-invalid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-invalid)
)}.spectrum-InputGroup .icon{margin-inline-end:var(
--spectrum-textfield-icon-spacing-inline-end-override
)}#textfield .spectrum-FieldLabel{grid-area:1/1/auto/span 1;margin-block-end:var(
--mod-textfield-label-spacing-block,var(--spectrum-textfield-label-spacing-block)
);padding-left:calc(var(
--mod-textfield-corner-radius,
var(--spectrum-textfield-corner-radius)
)/2)}:host([quiet]) .spectrum-FieldLabel{margin-block-end:var(
--mod-textfield-label-spacing-block-quiet,var(--spectrum-textfield-label-spacing-block-quiet)
)}:host([disabled]) .spectrum-FieldLabel{color:var(--spectrum-textfield-text-color-disabled)}#textfield .spectrum-HelpText{grid-area:3/1/auto/span 2;margin-block-start:var(
--mod-textfield-helptext-spacing-block,var(--spectrum-textfield-helptext-spacing-block)
);padding-left:calc(var(
--mod-textfield-corner-radius,
var(--spectrum-textfield-corner-radius)
)/2)}.spectrum-Textfield-characterCount{align-items:flex-end;display:inline-flex;font-family:var(
--mod-textfield-character-count-font-family,var(--spectrum-textfield-character-count-font-family)
);font-size:var(
--mod-textfield-character-count-font-size,var(--spectrum-textfield-character-count-font-size)
);font-weight:var(
--mod-textfield-character-count-font-weight,var(--spectrum-textfield-character-count-font-weight)
);grid-area:1/2/auto/span 1;justify-content:flex-end;margin-block-end:var(
--mod-textfield-character-count-spacing-block,var(--spectrum-textfield-character-count-spacing-block)
);margin-inline-end:0;margin-inline-start:var(
--mod-textfield-character-count-spacing-inline,var(--spectrum-textfield-character-count-spacing-inline)
);padding-right:calc(var(
--mod-textfield-corner-radius,
var(--spectrum-textfield-corner-radius)
)/2);width:auto}:host([quiet]) .spectrum-Textfield-characterCount{margin-block-end:var(
--mod-textfield-character-count-spacing-block-quiet,var(--spectrum-textfield-character-count-spacing-block-quiet)
)}.input{-webkit-appearance:none;-moz-appearance:textfield;background-color:var(
--mod-textfield-background-color,var(--spectrum-textfield-background-color)
);block-size:var(--mod-textfield-height,var(--spectrum-textfield-height));border:var(
--mod-textfield-border-width,var(--spectrum-textfield-border-width)
) solid var(
--highcontrast-textfield-border-color,var(
--mod-textfield-border-color,var(--spectrum-textfield-border-color)
)
);border-radius:var(
--mod-textfield-corner-radius,var(--spectrum-textfield-corner-radius)
);box-sizing:border-box;color:var(
--highcontrast-textfield-text-color-default,var(
--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)
)
);font-family:var(
--mod-textfield-font-family,var(--spectrum-textfield-font-family)
);font-size:var(
--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size)
);font-weight:var(
--mod-textfield-font-weight,var(--spectrum-textfield-font-weight)
);grid-area:2/1/auto/span 2;inline-size:100%;margin:0;min-inline-size:var(
--mod-textfield-min-width,var(--spectrum-textfield-min-width)
);outline:none;overflow:visible;padding-block-end:calc(var(
--mod-textfield-spacing-block-end,
var(--spectrum-textfield-spacing-block-end)
) - var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));padding-block-start:calc(var(
--mod-textfield-spacing-block-start,
var(--spectrum-textfield-spacing-block-start)
) - var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));padding-inline:calc(var(
--mod-textfield-spacing-inline,
var(--spectrum-textfield-spacing-inline)
) - var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));text-indent:0;text-overflow:ellipsis;transition:border-color var(
--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration)
) ease-in-out;vertical-align:top}:host([quiet]) .icon-workflow~.input{padding-inline-start:calc(var(
--mod--Textfield-workflow-icon-gap,
var(--spectrum-Textfield-workflow-icon-gap)
) + var(
--mod-Textfield-workflow-icon-width,
var(--spectrum-Textfield-workflow-icon-width)
))}.input::-ms-clear{block-size:0;inline-size:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}.input::placeholder{color:var(
--highcontrast-textfield-text-color-default,var(
--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)
)
);font-family:var(
--mod-textfield-font-family,var(--spectrum-textfield-font-family)
);font-size:var(
--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size)
);font-weight:var(
--mod-textfield-font-weight,var(--spectrum-textfield-font-weight)
);opacity:1;transition:color var(
--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration)
) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:lang(ja)::-moz-placeholder,.input:lang(ko)::-moz-placeholder,.input:lang(zh)::-moz-placeholder{font-style:normal}#textfield:hover .input,.input:hover{border-color:var(
--highcontrast-textfield-border-color-hover,var(
--mod-textfield-border-color-hover,var(--spectrum-textfield-border-color-hover)
)
);color:var(
--highcontrast-textfield-text-color-hover,var(
--mod-textfield-text-color-hover,var(--spectrum-textfield-text-color-hover)
)
)}#textfield:hover .input::placeholder,.input:hover::placeholder{color:var(
--highcontrast-textfield-text-color-hover,var(
--mod-textfield-text-color-hover,var(--spectrum-textfield-text-color-hover)
)
)}.input:focus,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-focus,var(
--mod-textfield-border-color-focus,var(--spectrum-textfield-border-color-focus)
)
);color:var(
--highcontrast-textfield-text-color-focus,var(
--mod-textfield-text-color-focus,var(--spectrum-textfield-text-color-focus)
)
)}.input:focus::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-focus,var(
--mod-textfield-text-color-focus,var(--spectrum-textfield-text-color-focus)
)
)}.input:focus:hover,:host([focused]) .input:hover{border-color:var(
--highcontrast-textfield-border-color-focus-hover,var(
--mod-textfield-border-color-focus-hover,var(--spectrum-textfield-border-color-focus-hover)
)
);color:var(
--highcontrast-textfield-text-color-focus-hover,var(
--mod-textfield-text-color-focus-hover,var(--spectrum-textfield-text-color-focus-hover)
)
)}.input:focus:hover::placeholder,:host([focused]) .input:hover::placeholder{color:var(
--highcontrast-textfield-text-color-focus-hover,var(
--mod-textfield-text-color-focus-hover,var(--spectrum-textfield-text-color-focus-hover)
)
)}.input.focus-visible,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-keyboard-focus,var(
--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)
)
);color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
);outline:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
);outline-offset:var(
--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)
)}.input.focus-visible,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-keyboard-focus,var(
--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)
)
);color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
);outline:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
);outline-offset:var(
--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)
)}.input:focus-visible,:host([focused]) .input{border-color:var(
--highcontrast-textfield-border-color-keyboard-focus,var(
--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)
)
);color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
);outline:var(
--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)
) solid;outline-color:var(
--highcontrast-textfield-focus-indicator-color,var(
--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)
)
);outline-offset:var(
--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)
)}.input.focus-visible::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
)}.input.focus-visible::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
)}.input:focus-visible::placeholder,:host([focused]) .input::placeholder{color:var(
--highcontrast-textfield-text-color-keyboard-focus,var(
--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)
)
)}:host([valid]) .input{color:var(
--highcontrast-textfield-text-color-valid,var(
--mod-textfield-text-color-valid,var(--spectrum-textfield-text-color-valid)
)
)}:host([invalid]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-default,var(
--mod-textfield-border-color-invalid-default,var(--spectrum-textfield-border-color-invalid-default)
)
);color:var(
--highcontrast-textfield-text-color-invalid,var(
--mod-textfield-text-color-invalid,var(--spectrum-textfield-text-color-invalid)
)
)}:host([invalid]) .input:hover,:host([invalid]:hover) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-hover,var(
--mod-textfield-border-color-invalid-hover,var(--spectrum-textfield-border-color-invalid-hover)
)
)}:host([invalid]) .input:focus,:host([invalid]:focus) .input,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-focus,var(
--mod-textfield-border-color-invalid-focus,var(--spectrum-textfield-border-color-invalid-focus)
)
)}:host([invalid]) .input:focus:hover,:host([invalid]:focus) .input:hover,:host([invalid][focused]) .input:hover{border-color:var(
--highcontrast-textfield-border-color-invalid-focus-hover,var(
--mod-textfield-border-color-invalid-focus-hover,var(--spectrum-textfield-border-color-invalid-focus-hover)
)
)}:host([invalid]) .input.focus-visible,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-keyboard-focus,var(
--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)
)
)}:host([invalid]) .input.focus-visible,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-keyboard-focus,var(
--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)
)
)}:host([invalid]) .input:focus-visible,:host([invalid][focused]) .input{border-color:var(
--highcontrast-textfield-border-color-invalid-keyboard-focus,var(
--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)
)
)}.input:disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
);background-color:var(
--mod-textfield-background-color-disabled,var(--spectrum-textfield-background-color-disabled)
);border-color:#0000;color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
);opacity:1;resize:none}.input:disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}:host([quiet]) .input{background-color:#0000;border-block-start-width:0;border-inline-width:0;border-radius:0;margin-block-end:var(
--mod-textfield-spacing-block-quiet,var(--spectrum-textfield-spacing-block-quiet)
);outline:none;overflow-y:hidden;padding-block-start:var(
--mod-textfield-spacing-block-start,var(--spectrum-textfield-spacing-block-start)
);padding-inline:var(
--mod-textfield-spacing-inline-quiet,var(--spectrum-textfield-spacing-inline-quiet)
);resize:none}.input:disabled,:host([quiet][disabled]) .input,:host([quiet][disabled]:hover) .input{background-color:#0000;border-color:var(
--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled)
);color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}.input:disabled::placeholder,:host([quiet][disabled]) .input::placeholder,:host([quiet][disabled]:hover) .input::placeholder{color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}.input:read-only,:host([readonly]) #textfield .input,:host([readonly]) #textfield:hover .input{background-color:#0000;border-color:#0000;color:var(
--highcontrast-textfield-text-color-readonly,var(
--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)
)
);outline:none}.input:read-only::placeholder,:host([readonly]) #textfield .input::placeholder,:host([readonly]) #textfield:hover .input::placeholder{background-color:#0000;color:var(
--highcontrast-textfield-text-color-readonly,var(
--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)
)
)}.spectrum-Textfield--sideLabel{grid-template-columns:auto auto auto;grid-template-rows:auto auto}.spectrum-Textfield--sideLabel:after{grid-area:1/2/span 1/span 1}.spectrum-Textfield--sideLabel .spectrum-FieldLabel{grid-area:1/1/span 2/span 1;margin-inline-end:var(
--mod-textfield-label-spacing-inline-side-label,var(--spectrum-textfield-label-spacing-inline-side-label)
)}.spectrum-Textfield--sideLabel .spectrum-Textfield-characterCount{align-items:flex-start;grid-area:1/3/auto/span 1;margin-block-start:var(
--mod-textfield-character-count-spacing-block-side,var(--spectrum-textfield-character-count-spacing-block-side)
);margin-inline-start:var(
--mod-textfield-character-count-spacing-inline-side,var(--spectrum-textfield-character-count-spacing-inline-side)
)}.spectrum-Textfield--sideLabel .spectrum-HelpText{grid-area:2/2/auto/span 1}.spectrum-Textfield--sideLabel .icon,.spectrum-Textfield--sideLabel .input{grid-area:1/2/span 1/span 1}:host([multiline]) .input{min-block-size:var(
--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size)
);min-inline-size:var(
--mod-text-area-min-inline-size,var(--spectrum-text-area-min-inline-size)
);resize:inherit}:host([multiline][grows]) .input{grid-row:1}:host([multiline][quiet]) .input{min-block-size:var(
--mod-text-area-min-block-size-quiet,var(--spectrum-text-area-min-block-size-quiet)
);overflow-y:hidden;resize:none}@media (forced-colors:active){:host{--highcontrast-textfield-border-color-hover:Highlight;--highcontrast-textfield-border-color-focus:Highlight;--highcontrast-textfield-border-color-keyboard-focus:CanvasText;--highcontrast-textfield-focus-indicator-color:Highlight;--highcontrast-textfield-border-color-invalid-default:Highlight;--highcontrast-textfield-border-color-invalid-hover:Highlight;--highcontrast-textfield-border-color-invalid-focus:Highlight;--highcontrast-textfield-border-color-invalid-keyboard-focus:Highlight;--highcontrast-textfield-text-color-valid:CanvasText;--highcontrast-textfield-text-color-invalid:CanvasText}#textfield .input{--highcontrast-textfield-text-color-default:CanvasText;--highcontrast-textfield-text-color-hover:CanvasText;--highcontrast-textfield-text-color-keyboard-focus:CanvasText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}#textfield .input::placeholder{--highcontrast-textfield-text-color-default:GrayText;--highcontrast-textfield-text-color-hover:GrayText;--highcontrast-textfield-text-color-keyboard-focus:GrayText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}}:host{--spectrum-textfield-border-color:var(
--system-spectrum-textfield-border-color
);--spectrum-textfield-border-color-hover:var(
--system-spectrum-textfield-border-color-hover
);--spectrum-textfield-border-color-focus:var(
--system-spectrum-textfield-border-color-focus
);--spectrum-textfield-border-color-focus-hover:var(
--system-spectrum-textfield-border-color-focus-hover
);--spectrum-textfield-border-color-keyboard-focus:var(
--system-spectrum-textfield-border-color-keyboard-focus
);--spectrum-textfield-border-width:var(
--system-spectrum-textfield-border-width
)}:host{display:inline-flex;flex-direction:column;inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width))}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}#textfield{inline-size:100%}#textfield,textarea{resize:inherit}.input{min-inline-size:var(--spectrum-textfield-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #textfield:after{grid-area:unset;min-block-size:calc(var(
--mod-text-area-min-block-size,
var(--spectrum-text-area-min-block-size)
) + var(
--mod-textfield-focus-indicator-gap,
var(--spectrum-textfield-focus-indicator-gap)
)*2)}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);inline-size:100%;line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;min-block-size:var(
--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size)
);outline:none;overflow:visible;overflow-wrap:break-word;padding-block-end:calc(var(
--mod-textfield-spacing-block-end,
var(--spectrum-textfield-spacing-block-end)
) + var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));padding-block-start:calc(var(
--mod-textfield-spacing-block-start,
var(--spectrum-textfield-spacing-block-start)
) + var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));padding-inline:calc(var(
--mod-textfield-spacing-inline,
var(--spectrum-textfield-spacing-inline)
) + var(
--mod-textfield-border-width,
var(--spectrum-textfield-border-width)
));text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;white-space:pre-wrap;word-break:break-word}:host([grows][quiet]) #sizer{border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-width:0 0 var(--spectrum-textfield-quiet-texticon-border-size) 0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([disabled]) #textfield .icon.icon-search,:host([readonly]) #textfield .icon.icon-search{color:var(
--highcontrast-textfield-text-color-disabled,var(
--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)
)
)}#form-container,form.input{border:0;display:flex;padding:0!important}#formWrapper.input{-webkit-text-fill-color:initial}
`;var d=o(725962),u=o(19298),h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?p(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&h(e,o,a),a};const g=["text","url","tel","email","password"];class v extends((0,n.i)(c.Y)){constructor(){super(...arguments),this._firstUpdateAfterConnected=!0,this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1,this._eventHandlers={input:this.handleInput.bind(this),change:this.handleChange.bind(this),focus:this.onFocus.bind(this),blur:this.onBlur.bind(this),submit:this.handleInputSubmit.bind(this)}}static get styles(){return[l,d.Z]}get type(){var t;return null!=(t=g.find((t=>t===this._type)))?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){var t;return(0,u.Pf)()&&null!=(t=this._inputRef)?t:this.inputElement}setSelectionRange(t,e,o="none"){this.inputElement.setSelectionRange(t,e,o)}select(){this.inputElement.select()}handleInput(){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const t=this.inputElement.selectionStart-1;return this.inputElement.value=this.value.toString(),void this.inputElement.setSelectionRange(t,t)}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!this.readonly&&!0}onBlur(){this.focused=!this.readonly&&!1}handleInputSubmit(t){this.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0})),t.preventDefault()}firstUpdateAfterConnected(){this._inputRef=this.inputElement,this.formElement&&(this._formRef=this.formElement,this.formElement.addEventListener("submit",this._eventHandlers.submit),this.inputElement.addEventListener("change",this._eventHandlers.change),this.inputElement.addEventListener("input",this._eventHandlers.input),this.inputElement.addEventListener("focus",this._eventHandlers.focus),this.inputElement.addEventListener("blur",this._eventHandlers.blur))}updated(t){super.updated(t),(0,u.Pf)()&&this._firstUpdateAfterConnected&&(this._firstUpdateAfterConnected=!1,this.firstUpdateAfterConnected())}connectedCallback(){if(super.connectedCallback(),(0,u.Pf)()&&(this._firstUpdateAfterConnected=!0,this._formRef)){const t=this.shadowRoot.querySelector("#form-container");t&&(t.appendChild(this._formRef),this.requestUpdate()),this._formRef=void 0}}disconnectedCallback(){var t,e,o,i;(0,u.Pf)()&&(null==(t=this._inputRef)||t.removeEventListener("change",this._eventHandlers.change),null==(e=this._inputRef)||e.removeEventListener("input",this._eventHandlers.input),null==(o=this._inputRef)||o.removeEventListener("focus",this._eventHandlers.focus),null==(i=this._inputRef)||i.removeEventListener("blur",this._eventHandlers.blur),this._formRef&&(this._formRef.remove(),this._formRef.removeEventListener("submit",this._eventHandlers.submit))),super.disconnectedCallback()}renderStateIcons(){return this.invalid?i.dy`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?i.dy`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:i.Ld}get displayValue(){return this.value.toString()}get renderMultiline(){return i.dy`
            ${this.grows&&!this.quiet?i.dy`
                      <div id="sizer">${this.value}&#8203;</div>
                  `:i.Ld}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,r.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,r.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,r.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,r.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,r.o)(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return(0,u.Pf)()?i.dy`
                <!-- @ts-ignore -->
                <div id="form-container" class="input">
                    <form id="formWrapper" class="input">
                        <input
                            type=${this.type}
                            aria-describedby=${this.helpTextId}
                            aria-label=${this.label||this.placeholder}
                            aria-invalid=${(0,r.o)(this.invalid||void 0)}
                            class="input"
                            maxlength=${(0,r.o)(this.maxlength>-1?this.maxlength:void 0)}
                            minlength=${(0,r.o)(this.minlength>-1?this.minlength:void 0)}
                            pattern=${(0,r.o)(this.pattern)}
                            placeholder=${this.placeholder}
                            .value=${(0,a.a)(this.displayValue)}
                            ?disabled=${this.disabled}
                            ?required=${this.required}
                            ?readonly=${this.readonly}
                            autocomplete=${(0,r.o)(this.autocomplete)}
                        />
                    </form>
                </div>
            `:i.dy`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,r.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,r.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,r.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,r.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${(0,a.a)(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,r.o)(this.autocomplete)}
            />
        `}renderField(){return i.dy`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return i.dy`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}update(t){(t.has("value")||t.has("required")&&this.required)&&this.updateComplete.then((()=>{this.checkValidity()})),super.update(t)}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),void 0!==this.minlength&&(t=t&&this.value.toString().length>=this.minlength),this.valid=t,this.invalid=!t),t}}m([(0,s.IO)("#formWrapper")],v.prototype,"formElement",2),m([(0,s.Cb)({attribute:"allowed-keys"})],v.prototype,"allowedKeys",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"focused",2),m([(0,s.IO)("input, input.input, textarea.input")],v.prototype,"inputElement",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"invalid",2),m([(0,s.Cb)()],v.prototype,"label",2),m([(0,s.Cb)()],v.prototype,"placeholder",2),m([(0,s.Cb)({attribute:"type",reflect:!0})],v.prototype,"_type",2),m([(0,s.SB)()],v.prototype,"type",1),m([(0,s.Cb)()],v.prototype,"pattern",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"grows",2),m([(0,s.Cb)({type:Number})],v.prototype,"maxlength",2),m([(0,s.Cb)({type:Number})],v.prototype,"minlength",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"multiline",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"readonly",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"valid",2),m([(0,s.Cb)({type:String})],v.prototype,"value",1),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"quiet",2),m([(0,s.Cb)({type:Boolean,reflect:!0})],v.prototype,"required",2),m([(0,s.Cb)({type:String,reflect:!0})],v.prototype,"autocomplete",2);class b extends v{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}m([(0,s.Cb)({type:String})],b.prototype,"value",1)},963734:(t,e,o)=>{var i=o(397208);customElements.define("sp-theme",i.Q)},777105:(t,e,o)=>{var i=o(397208),r=o(807350);i.Q.registerThemeFragment("express","theme",r.Z)},925470:(t,e,o)=>{var i=o(148819);(0,o(589415).N)("sp-toast",i.F)},148819:(t,e,o)=>{o.d(e,{F:()=>u});var i=o(374069),r=o(903512),a=o(697038);o(19607),o(358319),o(135514),o(486538);const s=r.iv`
:host{--spectrum-toast-font-weight:var(--spectrum-regular-font-weight);--spectrum-toast-font-size:var(--spectrum-font-size-100);--spectrum-toast-corner-radius:var(--spectrum-corner-radius-100);--spectrum-toast-block-size:var(--spectrum-toast-height);--spectrum-toast-border-width:var(--spectrum-border-width-100);--spectrum-toast-line-height:var(--spectrum-line-height-100);--spectrum-toast-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-toast-spacing-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-toast-spacing-start-edge-to-text-and-icon:var(
--spectrum-spacing-300
);--spectrum-toast-spacing-text-and-action-button-to-divider:var(
--spectrum-spacing-300
);--spectrum-toast-spacing-top-edge-to-divider:var(--spectrum-spacing-100);--spectrum-toast-spacing-bottom-edge-to-divider:var(
--spectrum-spacing-100
);--spectrum-toast-spacing-top-edge-to-icon:var(
--spectrum-toast-top-to-workflow-icon
);--spectrum-toast-spacing-text-to-action-button-horizontal:var(
--spectrum-spacing-300
);--spectrum-toast-spacing-close-button:var(--spectrum-spacing-100);--spectrum-toast-spacing-block-start:var(--spectrum-spacing-100);--spectrum-toast-spacing-block-end:var(--spectrum-spacing-100);--spectrum-toast-spacing-top-edge-to-text:var(
--spectrum-toast-top-to-text
);--spectrum-toast-spacing-bottom-edge-to-text:var(
--spectrum-toast-bottom-to-text
);--spectrum-toast-negative-background-color-default:var(
--spectrum-negative-background-color-default
);--spectrum-toast-positive-background-color-default:var(
--spectrum-positive-background-color-default
);--spectrum-toast-informative-background-color-default:var(
--spectrum-informative-background-color-default
);--spectrum-toast-text-and-icon-color:var(--spectrum-white);--spectrum-toast-divider-color:var(--spectrum-transparent-white-300)}@media (forced-colors:active){:host{--highcontrast-toast-border-color:ButtonText;border:var(
--mod-toast-border-width,var(--spectrum-toast-border-width)
) solid var(--highcontrast-toast-border-color,transparent)}}:host{-webkit-font-smoothing:antialiased;align-items:stretch;background-color:var(
--highcontrast-toast-background-color-default,var(
--mod-toast-background-color-default,var(--spectrum-toast-background-color-default)
)
);border-radius:var(
--mod-toast-corner-radius,var(--spectrum-toast-corner-radius)
);box-sizing:border-box;color:var(
--highcontrast-toast-background-color-default,var(
--mod-toast-background-color-default,var(--spectrum-toast-background-color-default)
)
);display:inline-flex;flex-direction:row;font-size:var(--mod-toast-font-size,var(--spectrum-toast-font-size));font-weight:var(
--mod-toast-font-weight,var(--spectrum-toast-font-weight)
);min-block-size:var(--spectrum-toast-block-size);padding-inline-start:var(
--mod-toast-spacing-start-edge-to-text-and-icon,var(--spectrum-toast-spacing-start-edge-to-text-and-icon)
)}:host([variant=negative]){background-color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
);color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--highcontrast-toast-negative-background-color-default,var(
--mod-toast-negative-background-color-default,var(--spectrum-toast-negative-background-color-default)
)
)}:host([variant=info]){background-color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
);color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--highcontrast-toast-informative-background-color-default,var(
--mod-toast-informative-background-color-default,var(--spectrum-toast-informative-background-color-default)
)
)}:host([variant=positive]){background-color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
);color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active){color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active){color:var(
--highcontrast-toast-positive-background-color-default,var(
--mod-toast-positive-background-color-default,var(--spectrum-toast-positive-background-color-default)
)
)}.type{flex-grow:0;flex-shrink:0;margin-block-start:var(
--mod-toast-spacing-top-edge-to-icon,var(--spectrum-toast-spacing-top-edge-to-icon)
);margin-inline-end:var(
--mod-toast-spacing-icon-to-text,var(--spectrum-toast-spacing-icon-to-text)
);margin-inline-start:0}.content,.type{color:var(
--highcontrast-toast-text-and-icon-color,var(
--mod-toast-text-and-icon-color,var(--spectrum-toast-text-and-icon-color)
)
)}.content{box-sizing:border-box;display:inline-block;flex:auto;line-height:var(
--mod-toast-line-height,var(--spectrum-toast-line-height)
);padding-block-end:calc(var(
--mod-toast-spacing-bottom-edge-to-text,
var(--spectrum-toast-spacing-bottom-edge-to-text)
) - var(
--mod-toast-spacing-block-end,
var(--spectrum-toast-spacing-block-end)
));padding-block-start:calc(var(
--mod-toast-spacing-top-edge-to-text,
var(--spectrum-toast-spacing-top-edge-to-text)
) - var(
--mod-toast-spacing-block-start,
var(--spectrum-toast-spacing-block-start)
));padding-inline-end:var(
--mod-toast-spacing-text-to-action-button-horizontal,var(--spectrum-toast-spacing-text-to-action-button-horizontal)
);padding-inline-start:0;text-align:start}.content:lang(ja),.content:lang(ko),.content:lang(zh){line-height:var(
--mod-toast-line-height-cjk,var(--spectrum-toast-line-height-cjk)
)}.buttons{align-items:flex-start;border-inline-start-color:var(
--mod-toast-divider-color,var(--spectrum-toast-divider-color)
);display:flex;flex:none;margin-block-end:var(
--mod-toast-spacing-bottom-edge-to-divider,var(--spectrum-toast-spacing-bottom-edge-to-divider)
);margin-block-start:var(
--mod-toast-spacing-top-edge-to-divider,var(--spectrum-toast-spacing-top-edge-to-divider)
);padding-inline-end:var(
--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button)
)}.buttons .spectrum-CloseButton{align-self:flex-start}.body{align-items:center;align-self:center;display:flex;flex:auto;flex-wrap:wrap;padding-block-end:var(
--mod-toast-spacing-block-end,var(--spectrum-toast-spacing-block-end)
);padding-block-start:var(
--mod-toast-spacing-block-start,var(--spectrum-toast-spacing-block-start)
)}.body ::slotted([slot=action]){margin-inline-end:var(
--mod-toast-spacing-text-and-action-button-to-divider,var(--spectrum-toast-spacing-text-and-action-button-to-divider)
)}:host([dir=ltr]) .body ::slotted([slot=action]){margin-left:auto}:host([dir=rtl]) .body ::slotted([slot=action]){margin-right:auto;margin-inline-end:var(
--mod-toast-spacing-text-and-action-button-to-divider,var(--spectrum-toast-spacing-text-and-action-button-to-divider)
)}.body+.buttons{border-inline-start-style:solid;border-inline-start-width:1px;padding-inline-start:var(
--mod-toast-spacing-close-button,var(--spectrum-toast-spacing-close-button)
)}:host{--spectrum-toast-background-color-default:var(
--system-spectrum-toast-background-color-default
)}:host(:not([open])){display:none}
`;var n=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?c(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&n(e,o,a),a};const d=["negative","positive","info","error","warning"];class u extends i.o{constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[s]}set timeout(t){const e=null!==typeof t&&t>0?Math.max(6e3,t):null,o=this.timeout;e&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=e,this.requestUpdate("timeout",o)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;d.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(t){switch(t){case"info":return r.dy`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;case"negative":case"error":case"warning":return r.dy`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;case"positive":case"success":return r.dy`
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;default:return r.dy``}}startCountdown(){this.countdown(),this.addEventListener("focusin",this.holdCountdown)}stopCountdown(){cancelAnimationFrame(this.nextCount),this.countdownStart=0}shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}close(){this.open=!1}render(){return r.dy`
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this.shouldClose}
                    label="Close"
                    variant="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(null!==this.timeout&&this.open?this.startCountdown():this.stopCountdown())}}l([(0,a.Cb)({type:Boolean,reflect:!0})],u.prototype,"open",2),l([(0,a.Cb)({type:Number})],u.prototype,"timeout",1),l([(0,a.Cb)({type:String})],u.prototype,"variant",1)},271420:(t,e,o)=>{var i=o(374069),r=o(903512),a=o(697038),s=(o(455804),o(644886)),n=o(465346),c=o(727116);const l=r.iv`
:host{bottom:0;display:flex;inline-size:100%;inset-inline-start:0;justify-content:center;position:fixed}:host{--spectrum-tray-exit-animation-delay:0s;--spectrum-tray-entry-animation-delay:0.16s;--spectrum-tray-max-inline-size:375px;--spectrum-tray-spacing-edge-to-tray-safe-zone:64px;--spectrum-tray-entry-animation-duration:var(
--spectrum-animation-duration-500
);--spectrum-tray-exit-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-tray-corner-radius:var(--spectrum-corner-radius-100);--spectrum-tray-background-color:var(--spectrum-background-layer-2-color)}@media (forced-colors:active){:host{--highcontrast-tray-background-color:Background}}.tray{background-color:var(
--highcontrast-tray-background-color,var(--mod-tray-background-color,var(--spectrum-tray-background-color))
);border-radius:unset;inline-size:100%;margin-block-start:var(
--mod-tray-spacing-edge-to-tray-safe-zone,var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
);max-block-size:calc(100vh - var(
--mod-tray-spacing-edge-to-tray-safe-zone,
var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
));outline:none;overflow:auto;transform:translateY(100%);transition:opacity var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) cubic-bezier(.5,0,1,1) var(
--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)
),visibility var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) linear calc(var(
--mod-tray-exit-animation-delay,
var(--spectrum-tray-exit-animation-delay)
) + var(
--mod-tray-exit-animation-duration,
var(--spectrum-tray-exit-animation-duration)
)),transform var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) cubic-bezier(.5,0,1,1) var(
--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)
)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--mod-tray-entry-animation-duration,var(--spectrum-tray-entry-animation-duration)
) cubic-bezier(0,0,.4,1) var(
--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)
),opacity var(
--spectrum-tray-entry-animation-duration,var(--mod-tray-entry-animation-duration)
) cubic-bezier(0,0,.4,1) var(
--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)
)}@media screen and (orientation:landscape){.tray{border-top-left-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);border-top-right-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);max-inline-size:var(
--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size)
)}}:host{align-items:flex-end;max-height:100vh;max-height:100dvh;position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain;padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?u(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&d(e,o,a),a};class p extends i.o{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new n.l8(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve(),this.animating=!1}static get styles(){return[c.Z,l]}focus(){const t=(0,s.i)(this);t?t.focus():1===this.children.length?this.tray.focus():super.focus()}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.resolveTransitionPromise(),this.dispatchClosed())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(t){t.has("open")&&void 0!==t.get("open")&&this.prefersMotion.matches&&(this.animating=!0,this.transitionPromise=new Promise((t=>{this.resolveTransitionPromise=()=>{this.animating=!1,t()}}))),super.update(t)}render(){return r.dy`
            <sp-underlay
                ?open=${this.open}
                @click=${this.close}
                @transitionend=${this.handleUnderlayTransitionend}
            ></sp-underlay>
            <div
                class="tray modal"
                tabindex="-1"
                @transitionend=${this.handleTrayTransitionend}
            >
                <slot></slot>
            </div>
        `}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.transitionPromise,t}}h([(0,a.Cb)({type:Boolean,reflect:!0})],p.prototype,"open",2),h([(0,a.IO)(".tray")],p.prototype,"tray",2),(0,o(589415).N)("sp-tray",p)},455804:(t,e,o)=>{var i=o(374069),r=o(903512),a=o(697038);const s=r.iv`
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
`;var n=Object.defineProperty,c=Object.getOwnPropertyDescriptor;class l extends i.o{constructor(){super(...arguments),this.open=!1}static get styles(){return[s]}render(){return r.dy``}}((t,e,o,i)=>{for(var r,a=i>1?void 0:i?c(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);i&&a&&n(e,o,a)})([(0,a.Cb)({type:Boolean,reflect:!0})],l.prototype,"open",2),(0,o(589415).N)("sp-underlay",l)},190454:(t,e,o)=>{o.d(e,{XM:()=>i.XM,pX:()=>i.pX,sR:()=>i.sR});var i=o(664988)},270207:(t,e,o)=>{var i,r,a,s;o.d(e,{Hd:()=>i,pM:()=>r,wD:()=>a}),function(t){t[t.VIDEO=0]="VIDEO",t[t.AUDIO=1]="AUDIO",t[t.SCENE=2]="SCENE",t[t.GAP=3]="GAP",t[t.IMAGE=4]="IMAGE",t[t.TEXT=5]="TEXT",t[t.OTHER=6]="OTHER",t[t.GROUP=7]="GROUP"}(i||(i={})),function(t){t[t.start=0]="start",t[t.continue=1]="continue",t[t.end=2]="end"}(r||(r={})),function(t){t[t.left=0]="left",t[t.right=1]="right",t[t.slip=2]="slip"}(a||(a={})),function(t){t.success="success",t.unavailable="unavailable",t.loadFailed="loadFailed"}(s||(s={}))},614899:(t,e,o)=>{o.r(e);var i=o(903512),r=o(400779),a=o(857534);class s extends r.A{render(){return(0,a._)(i.dy),(({width:t=24,height:e=24,hidden:o=!1,title:i="Close"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${t}
    height=${e}
    viewBox="0 0 36 36"
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M26.485 6.686 18 15.172 9.515 6.686a1 1 0 0 0-1.414 0L6.686 8.101a1 1 0 0 0 0 1.414L15.172 18l-8.486 8.485a1 1 0 0 0 0 1.414l1.415 1.415a1 1 0 0 0 1.414 0L18 20.828l8.485 8.486a1 1 0 0 0 1.414 0l1.415-1.415a1 1 0 0 0 0-1.414L20.828 18l8.486-8.485a1 1 0 0 0 0-1.414l-1.415-1.415a1 1 0 0 0-1.414 0Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}(0,o(589415).N)("sp-icon-close",s)},419531:(t,e,o)=>{var i=o(903512),r=o(400779),a=o(857534);class s extends r.A{render(){return(0,a._)(i.dy),(({width:t=24,height:e=24,hidden:o=!1,title:i="Move"}={})=>a.A`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${o?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${i}
  >
    <path
      d="M34 18a.5.5 0 0 0-.113-.316L32 16.029V16h-.033l-2.113-1.853A.49.49 0 0 0 29.5 14a.5.5 0 0 0-.5.5V16h-9V7h1.5a.5.5 0 0 0 .5-.5.489.489 0 0 0-.147-.35L20 4.033V4h-.029l-1.655-1.887a.5.5 0 0 0-.632 0L16.029 4H16v.033l-1.853 2.113A.489.489 0 0 0 14 6.5a.5.5 0 0 0 .5.5H16v9H7v-1.5a.5.5 0 0 0-.5-.5.49.49 0 0 0-.35.147L4.033 16H4v.029l-1.887 1.655a.5.5 0 0 0 0 .632L4 19.971V20h.033l2.113 1.852A.491.491 0 0 0 6.5 22a.5.5 0 0 0 .5-.5V20h9v9h-1.5a.5.5 0 0 0-.5.5.487.487 0 0 0 .147.35L16 31.967V32h.029l1.655 1.887a.5.5 0 0 0 .632 0L19.971 32H20v-.033l1.853-2.114A.487.487 0 0 0 22 29.5a.5.5 0 0 0-.5-.5H20v-9h9v1.5a.5.5 0 0 0 .5.5.491.491 0 0 0 .35-.148L31.967 20H32v-.029l1.887-1.655A.5.5 0 0 0 34 18Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}(0,o(589415).N)("sp-icon-move",s)},84824:(t,e,o)=>{o.r(e);o(138575)},808182:(t,e,o)=>{var i=o(916420),r=o(374069),a=o(903512),s=o(697038),n=o(666413),c=o(405281);const l=a.iv`
:host{--spectrum-badge-corner-radius:var(--spectrum-corner-radius-100);--spectrum-badge-line-height:var(--spectrum-line-height-100);--spectrum-badge-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-badge-label-icon-color-white:var(--spectrum-white);--spectrum-badge-label-icon-color-black:var(--spectrum-black);--spectrum-badge-background-color-default:var(
--spectrum-neutral-subdued-background-color-default
);--spectrum-badge-background-color-accent:var(
--spectrum-accent-background-color-default
);--spectrum-badge-background-color-informative:var(
--spectrum-informative-background-color-default
);--spectrum-badge-background-color-negative:var(
--spectrum-negative-background-color-default
);--spectrum-badge-background-color-positive:var(
--spectrum-positive-background-color-default
);--spectrum-badge-height:var(--spectrum-component-height-100);--spectrum-badge-font-size:var(--spectrum-font-size-100);--spectrum-badge-label-spacing-vertical-top:var(
--spectrum-component-top-to-text-100
);--spectrum-badge-label-spacing-vertical-bottom:var(
--spectrum-component-bottom-to-text-100
);--spectrum-badge-label-spacing-horizontal:var(
--spectrum-component-edge-to-text-100
);--spectrum-badge-workflow-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-badge-icon-text-spacing:var(--spectrum-text-to-visual-100);--spectrum-badge-icon-spacing-horizontal:var(
--spectrum-component-edge-to-visual-100
);--spectrum-badge-icon-spacing-vertical-top:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-badge-icon-only-spacing-horizontal:var(
--spectrum-component-edge-to-visual-only-100
)}:host([size=s]){--spectrum-badge-height:var(--spectrum-component-height-75);--spectrum-badge-font-size:var(--spectrum-font-size-75);--spectrum-badge-label-spacing-vertical-top:var(
--spectrum-component-top-to-text-75
);--spectrum-badge-label-spacing-vertical-bottom:var(
--spectrum-component-bottom-to-text-75
);--spectrum-badge-label-spacing-horizontal:var(
--spectrum-component-edge-to-text-75
);--spectrum-badge-workflow-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-badge-icon-text-spacing:var(--spectrum-text-to-visual-75);--spectrum-badge-icon-spacing-horizontal:var(
--spectrum-component-edge-to-visual-75
);--spectrum-badge-icon-spacing-vertical-top:var(
--spectrum-component-top-to-workflow-icon-75
);--spectrum-badge-icon-only-spacing-horizontal:var(
--spectrum-component-edge-to-visual-only-75
)}:host([size=m]){--spectrum-badge-height:var(--spectrum-component-height-100);--spectrum-badge-font-size:var(--spectrum-font-size-100);--spectrum-badge-label-spacing-vertical-top:var(
--spectrum-component-top-to-text-100
);--spectrum-badge-label-spacing-vertical-bottom:var(
--spectrum-component-bottom-to-text-100
);--spectrum-badge-label-spacing-horizontal:var(
--spectrum-component-edge-to-text-100
);--spectrum-badge-workflow-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-badge-icon-text-spacing:var(--spectrum-text-to-visual-100);--spectrum-badge-icon-spacing-horizontal:var(
--spectrum-component-edge-to-visual-100
);--spectrum-badge-icon-spacing-vertical-top:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-badge-icon-only-spacing-horizontal:var(
--spectrum-component-edge-to-visual-only-100
)}:host([size=l]){--spectrum-badge-height:var(--spectrum-component-height-100);--spectrum-badge-font-size:var(--spectrum-font-size-200);--spectrum-badge-label-spacing-vertical-top:var(
--spectrum-component-top-to-text-200
);--spectrum-badge-label-spacing-vertical-bottom:var(
--spectrum-component-bottom-to-text-200
);--spectrum-badge-label-spacing-horizontal:var(
--spectrum-component-edge-to-text-200
);--spectrum-badge-workflow-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-badge-icon-text-spacing:var(--spectrum-text-to-visual-200);--spectrum-badge-icon-spacing-horizontal:var(
--spectrum-component-edge-to-visual-200
);--spectrum-badge-icon-spacing-vertical-top:var(
--spectrum-component-top-to-workflow-icon-200
);--spectrum-badge-icon-only-spacing-horizontal:var(
--spectrum-component-edge-to-visual-only-200
)}:host([size=xl]){--spectrum-badge-height:var(--spectrum-component-height-100);--spectrum-badge-font-size:var(--spectrum-font-size-300);--spectrum-badge-label-spacing-vertical-top:var(
--spectrum-component-top-to-text-300
);--spectrum-badge-label-spacing-vertical-bottom:var(
--spectrum-component-bottom-to-text-300
);--spectrum-badge-label-spacing-horizontal:var(
--spectrum-component-edge-to-text-300
);--spectrum-badge-workflow-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-badge-icon-text-spacing:var(--spectrum-text-to-visual-300);--spectrum-badge-icon-spacing-horizontal:var(
--spectrum-component-edge-to-visual-300
);--spectrum-badge-icon-spacing-vertical-top:var(
--spectrum-component-top-to-workflow-icon-300
);--spectrum-badge-icon-only-spacing-horizontal:var(
--spectrum-component-edge-to-visual-only-300
)}@media (forced-colors:active){:host{border-color:CanvasText}}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;background:var(
--mod-badge-background-color-default,var(--spectrum-badge-background-color-default)
);border:1px solid #0000;border-radius:var(
--mod-badge-corner-radius,var(--spectrum-badge-corner-radius)
);color:var(
--mod-badge-label-icon-color-white,var(--spectrum-badge-label-icon-color-white)
);cursor:default;display:inline-flex;inline-size:auto;min-block-size:var(--mod-badge-height,var(--spectrum-badge-height));position:relative;vertical-align:middle}:host([static=black]){color:var(
--mod-badge-label-icon-color-black,var(--spectrum-badge-label-icon-color-black)
)}:host([variant=neutral]){background:var(
--mod-badge-background-color-default,var(--spectrum-badge-background-color-default)
)}:host([variant=accent]){background:var(
--mod-badge-background-color-accent,var(--spectrum-badge-background-color-accent)
)}:host([variant=informative]){background:var(
--mod-badge-background-color-informative,var(--spectrum-badge-background-color-informative)
)}:host([variant=negative]){background:var(
--mod-badge-background-color-negative,var(--spectrum-badge-background-color-negative)
)}:host([variant=positive]){background:var(
--mod-badge-background-color-positive,var(--spectrum-badge-background-color-positive)
)}:host([fixed=inline-start]){border-end-start-radius:0;border-start-start-radius:0}:host([fixed=inline-end]){border-end-end-radius:0;border-start-end-radius:0}:host([fixed=block-start]){border-start-end-radius:0;border-start-start-radius:0}:host([fixed=block-end]){border-end-end-radius:0;border-end-start-radius:0}.label{color:var(
--mod-badge-label-icon-color-white,var(--spectrum-badge-label-icon-color-white)
);font-size:var(--mod-badge-font-size,var(--spectrum-badge-font-size));line-height:var(
--mod-badge-line-height,var(--spectrum-badge-line-height)
);padding-block-end:var(
--mod-badge-label-spacing-vertical-bottom,var(--spectrum-badge-label-spacing-vertical-bottom)
);padding-block-start:var(
--mod-badge-label-spacing-vertical-top,var(--spectrum-badge-label-spacing-vertical-top)
);padding-inline-end:var(
--mod-badge-label-spacing-horizontal,var(--spectrum-badge-label-spacing-horizontal)
);padding-inline-start:var(
--mod-badge-label-spacing-horizontal,var(--spectrum-badge-label-spacing-horizontal)
)}:host([static=black]) .label{color:var(
--mod-badge-label-icon-color-black,var(--spectrum-badge-label-icon-color-black)
)}.label:lang(ja),.label:lang(ko),.label:lang(zh){line-height:var(
--mod-badge-line-height-cjk,var(--spectrum-badge-line-height-cjk)
)}[name=icon]+.label{padding-inline-start:0}::slotted([slot=icon]){block-size:var(
--mod-badge-workflow-icon-size,var(--spectrum-badge-workflow-icon-size)
);color:var(
--mod-badge-label-icon-color-white,var(--spectrum-badge-label-icon-color-white)
);flex:0 0 var(
--mod-badge-workflow-icon-size,var(--spectrum-badge-workflow-icon-size)
);inline-size:var(
--mod-badge-workflow-icon-size,var(--spectrum-badge-workflow-icon-size)
);padding-block-end:var(
--mod-badge-icon-spacing-vertical-top,var(--spectrum-badge-icon-spacing-vertical-top)
);padding-block-start:var(
--mod-badge-icon-spacing-vertical-top,var(--spectrum-badge-icon-spacing-vertical-top)
);padding-inline-end:var(
--mod-badge-icon-text-spacing,var(--spectrum-badge-icon-text-spacing)
);padding-inline-start:var(
--mod-badge-icon-spacing-horizontal,var(--spectrum-badge-icon-spacing-horizontal)
)}[icon-only]::slotted(*){padding-inline-end:var(
--mod-badge-icon-only-spacing-horizontal,var(--spectrum-badge-icon-only-spacing-horizontal)
);padding-inline-start:var(
--mod-badge-icon-only-spacing-horizontal,var(--spectrum-badge-icon-only-spacing-horizontal)
)}:host([static=black]) ::slotted([slot=icon]){color:var(
--mod-badge-label-icon-color-black,var(--spectrum-badge-label-icon-color-black)
)}:host{align-items:center}:host([fixed=left]){border-end-start-radius:0;border-start-start-radius:0}:host([fixed=right]){border-end-end-radius:0;border-start-end-radius:0}:host([fixed=top]){border-start-end-radius:0;border-start-start-radius:0}:host([fixed=bottom]){border-end-end-radius:0;border-end-start-radius:0}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}::slotted([slot=icon]){flex-shrink:0}.label slot{display:block;max-height:calc(var(--spectrum-badge-line-height)*var(--spectrum-badge-font-size)*2);overflow:hidden}[icon-only]+.label{display:none}
`;var d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(t,e,o,i)=>{for(var r,a=i>1?void 0:i?u(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);return i&&a&&d(e,o,a),a};class p extends((0,i.I)((0,n.o)((0,c.h)(r.o,'[slot="icon"]'),""))){constructor(){super(...arguments),this.variant="informative"}static get styles(){return[l]}get fixed(){return this._fixed}set fixed(t){if(t===this.fixed)return;const e=this.fixed;this._fixed=t,t?this.setAttribute("fixed",t):this.removeAttribute("fixed"),this.requestUpdate("fixed",e)}get hasIcon(){return this.slotContentIsPresent}render(){return a.dy`
            ${this.hasIcon?a.dy`
                      <slot
                          name="icon"
                          ?icon-only=${!this.slotHasContent}
                      ></slot>
                  `:a.dy``}
            <div class="label">
                <slot></slot>
            </div>
        `}}h([(0,s.Cb)({reflect:!0})],p.prototype,"fixed",1),h([(0,s.Cb)({type:String,reflect:!0})],p.prototype,"variant",2),(0,o(589415).N)("sp-badge",p)},561528:(t,e,o)=>{o(721556)},187374:(t,e,o)=>{o(897157)},321730:(t,e,o)=>{var i=o(187309);(0,o(589415).N)("sp-field-group",i.N)},482510:(t,e,o)=>{o(661517)},927406:(t,e,o)=>{o(56193)},506705:(t,e,o)=>{o(949770)},88239:(t,e,o)=>{o(482873)},234648:(t,e,o)=>{var i=o(691997),r=o(804963);i.c.openOverlay=async(t,e,o,i)=>await r.Overlay.open(t,e,o,i);o(492950)},851144:(t,e,o)=>{o(383990)},914078:(t,e,o)=>{o(144195)},64617:(t,e,o)=>{o(430367)},391101:(t,e,o)=>{var i=o(916420),r=o(903512),a=o(697038),s=o(833713);const n=r.iv`
:host{--spectrum-switch-label-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-switch-label-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-switch-label-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-switch-label-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-switch-label-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-switch-background-color:var(--spectrum-gray-300);--spectrum-switch-background-color-disabled:var(--spectrum-gray-300);--spectrum-switch-background-color-selected-disabled:var(
--spectrum-gray-400
);--spectrum-switch-focus-indicator-thickness:var(
--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness)
);--spectrum-switch-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-switch-handle-background-color:var(--spectrum-gray-75);--spectrum-switch-handle-border-color-disabled:var(--spectrum-gray-400)}:host([disabled]){--spectrum-switch-label-color-default:var(
--spectrum-disabled-content-color
)}:host([emphasized]){--spectrum-switch-background-color-selected-default:var(
--spectrum-accent-color-900
);--spectrum-switch-background-color-selected-hover:var(
--spectrum-accent-color-1000
);--spectrum-switch-background-color-selected-down:var(
--spectrum-accent-color-1100
);--spectrum-switch-background-color-selected-focus:var(
--spectrum-accent-color-1000
);--spectrum-switch-handle-border-color-selected-default:var(
--spectrum-accent-color-900
);--spectrum-switch-handle-border-color-selected-hover:var(
--spectrum-accent-color-1000
);--spectrum-switch-handle-border-color-selected-down:var(
--spectrum-accent-color-1100
);--spectrum-switch-handle-border-color-selected-focus:var(
--spectrum-accent-color-1000
)}:host([size=s]){--spectrum-switch-min-height:var(--spectrum-component-height-75);--spectrum-switch-control-width:var(--spectrum-switch-control-width-small);--spectrum-switch-control-height:var(
--spectrum-switch-control-height-small
);--spectrum-switch-control-label-spacing:var(--spectrum-text-to-control-75);--spectrum-switch-spacing-top-to-control:var(
--spectrum-switch-top-to-control-small
);--spectrum-switch-spacing-top-to-label:var(
--spectrum-component-top-to-text-75
);--spectrum-switch-font-size:var(--spectrum-font-size-75)}:host([size=m]){--spectrum-switch-min-height:var(--spectrum-component-height-100);--spectrum-switch-control-width:var(
--spectrum-switch-control-width-medium
);--spectrum-switch-control-height:var(
--spectrum-switch-control-height-medium
);--spectrum-switch-control-label-spacing:var(
--spectrum-text-to-control-100
);--spectrum-switch-spacing-top-to-control:var(
--spectrum-switch-top-to-control-medium
);--spectrum-switch-spacing-top-to-label:var(
--spectrum-component-top-to-text-100
);--spectrum-switch-font-size:var(--spectrum-font-size-100)}:host([size=l]){--spectrum-switch-min-height:var(--spectrum-component-height-200);--spectrum-switch-control-width:var(--spectrum-switch-control-width-large);--spectrum-switch-control-height:var(
--spectrum-switch-control-height-large
);--spectrum-switch-control-label-spacing:var(
--spectrum-text-to-control-200
);--spectrum-switch-spacing-top-to-control:var(
--spectrum-switch-top-to-control-large
);--spectrum-switch-spacing-top-to-label:var(
--spectrum-component-top-to-text-200
);--spectrum-switch-font-size:var(--spectrum-font-size-200)}:host([size=xl]){--spectrum-switch-min-height:var(--spectrum-component-height-300);--spectrum-switch-control-width:var(
--spectrum-switch-control-width-extra-large
);--spectrum-switch-control-height:var(
--spectrum-switch-control-height-extra-large
);--spectrum-switch-control-label-spacing:var(
--spectrum-text-to-control-300
);--spectrum-switch-spacing-top-to-control:var(
--spectrum-switch-top-to-control-extra-large
);--spectrum-switch-spacing-top-to-label:var(
--spectrum-component-top-to-text-300
);--spectrum-switch-font-size:var(--spectrum-font-size-300)}:host{align-items:flex-start;display:inline-flex;max-inline-size:100%;min-block-size:var(--mod-switch-height,var(--spectrum-switch-min-height));position:relative;vertical-align:top}#input{block-size:100%;box-sizing:border-box;cursor:pointer;inline-size:100%;inset-block-start:0;inset-inline-start:0;margin:0;opacity:0;padding:0;position:absolute;z-index:1}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(
--mod-switch-control-width,
var(--spectrum-switch-control-width)
) - 100%))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc((var(
--mod-switch-control-width,
var(--spectrum-switch-control-width)
) - 100%)*-1))}:host([disabled]) #input{cursor:default}#input.focus-visible+#switch:after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-1)}#input.focus-visible+#switch:after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-1)}#input:focus-visible+#switch:after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-1)}#label{color:var(
--highcontrast-switch-label-color-default,var(
--mod-switch-label-color-default,var(--spectrum-switch-label-color-default)
)
);font-size:var(--mod-switch-font-size,var(--spectrum-switch-font-size));line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin-block-end:0;margin-block-start:var(
--mod-switch-spacing-top-to-label,var(--spectrum-switch-spacing-top-to-label)
);margin-inline:var(
--mod-switch-control-label-spacing,var(--spectrum-switch-control-label-spacing)
);transition:color var(
--mod-animation-duration-200,var(--spectrum-animation-duration-200)
) ease-in-out}#switch{block-size:var(
--mod-switch-control-height,var(--spectrum-switch-control-height)
);border-radius:calc(var(--mod-switch-control-height, var(--spectrum-switch-control-height))/2);box-sizing:border-box;display:inline-block;flex-grow:0;flex-shrink:0;inline-size:var(
--mod-switch-control-width,var(--spectrum-switch-control-width)
);inset-inline:0;margin-block:calc(var(--mod-switch-height, var(--spectrum-switch-min-height)) - var(
--mod-switch-control-height,
var(--spectrum-switch-control-height)
) - var(
--mod-switch-spacing-top-to-control,
var(--spectrum-switch-spacing-top-to-control)
));margin-inline:0;position:relative;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out,border var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out;vertical-align:middle}#switch:before{box-sizing:border-box;content:"";display:block;position:absolute}#switch:before{block-size:var(
--mod-switch-control-height,var(--spectrum-switch-control-height)
);border-radius:calc(var(--mod-switch-control-height, var(--spectrum-switch-control-height))/2);border-style:solid;border-width:var(--mod-border-width-200,var(--spectrum-border-width-200));inline-size:var(
--mod-switch-control-height,var(--spectrum-switch-control-height)
);inset-block-start:0;inset-inline-start:0;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out,border var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out,transform var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out}#switch:after{border-radius:calc(var(--mod-switch-control-height, var(--spectrum-switch-control-height)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap)));content:"";display:block;inset-block:0;inset-inline:0;margin:0;position:absolute;transition:opacity var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,margin var(
--spectrum-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out}#switch{background-color:var(
--highcontrast-switch-background-color,var(
--mod-switch-background-color,var(--spectrum-switch-background-color)
)
)}#switch:before{background-color:var(
--highcontrast-switch-handle-background-color,var(
--mod-switch-handle-background-color,var(--spectrum-switch-handle-background-color)
)
);border-color:var(
--highcontrast-switch-handle-border-color-default,var(
--mod-switch-handle-border-color-default,var(--spectrum-switch-handle-border-color-default)
)
)}:host(:hover) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-hover,var(
--mod-switch-handle-border-color-hover,var(--spectrum-switch-handle-border-color-hover)
)
);box-shadow:none}:host(:hover) #input~#label{color:var(
--highcontrast-switch-label-color-hover,var(
--mod-switch-label-color-hover,var(--spectrum-switch-label-color-hover)
)
)}:host([checked]:hover) #input:enabled+#switch{background-color:var(
--highcontrast-switch-background-color-selected-hover,var(
--mod-switch-background-color-selected-hover,var(--spectrum-switch-background-color-selected-hover)
)
)}:host([checked]:hover) #input:enabled+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-selected-hover,var(
--mod-switch-handle-border-color-selected-hover,var(--spectrum-switch-handle-border-color-selected-hover)
)
)}:host([disabled]:hover) #input+#switch{background-color:var(
--highcontrast-switch-background-color-disabled,var(
--mod-switch-background-color-disabled,var(--spectrum-switch-background-color-disabled)
)
)}:host([disabled]:hover) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-disabled,var(
--mod-switch-handle-border-color-disabled,var(--spectrum-switch-handle-border-color-disabled)
)
)}:host([disabled]:hover) #input~#label{color:var(
--highcontrast-switch-label-color-disabled,var(
--mod-switch-label-color-disabled,var(--spectrum-switch-label-color-disabled)
)
)}:host([disabled][checked]:hover) #input+#switch{background-color:var(
--highcontrast-switch-background-color-selected-disabled,var(
--mod-switch-background-color-selected-disabled,var(--spectrum-switch-background-color-selected-disabled)
)
)}:host([disabled][checked]:hover) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-disabled,var(
--mod-switch-handle-border-color-disabled,var(--spectrum-switch-handle-border-color-disabled)
)
)}:host([disabled][checked]:hover) #input~#label{color:var(
--highcontrast-switch-label-color-disabled,var(
--mod-switch-label-color-disabled,var(--spectrum-switch-label-color-disabled)
)
)}:host(:active) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-down,var(
--mod-switch-handle-border-color-down,var(--spectrum-switch-handle-border-color-down)
)
)}:host(:active) #input~#label{color:var(
--highcontrast-switch-label-color-down,var(
--mod-switch-label-color-down,var(--spectrum-switch-label-color-down)
)
)}:host(:active[checked]) #input:enabled+#switch{background-color:var(
--highcontrast-switch-background-color-selected-down,var(
--mod-switch-background-color-selected-down,var(--spectrum-switch-background-color-selected-down)
)
)}:host(:active[checked]) #input:enabled+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-selected-down,var(
--mod-switch-handle-border-color-selected-down,var(--spectrum-switch-handle-border-color-selected-down)
)
)}#input.focus-visible+#switch:after,:host(:hover) #input.focus-visible+#switch:after{box-shadow:0 0 0 var(
--mod-switch-focus-indicator-thickness,var(--spectrum-switch-focus-indicator-thickness)
) var(
--highcontrast-switch-focus-indicator-color,var(
--mod-switch-focus-indicator-color,var(--spectrum-switch-focus-indicator-color)
)
)}#input.focus-visible+#switch:after,:host(:hover) #input.focus-visible+#switch:after{box-shadow:0 0 0 var(
--mod-switch-focus-indicator-thickness,var(--spectrum-switch-focus-indicator-thickness)
) var(
--highcontrast-switch-focus-indicator-color,var(
--mod-switch-focus-indicator-color,var(--spectrum-switch-focus-indicator-color)
)
)}#input:focus-visible+#switch:after,:host(:hover) #input:focus-visible+#switch:after{box-shadow:0 0 0 var(
--mod-switch-focus-indicator-thickness,var(--spectrum-switch-focus-indicator-thickness)
) var(
--highcontrast-switch-focus-indicator-color,var(
--mod-switch-focus-indicator-color,var(--spectrum-switch-focus-indicator-color)
)
)}#input.focus-visible+#switch:before,:host(:hover) #input.focus-visible+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-focus,var(
--mod-switch-handle-border-color-focus,var(--spectrum-switch-handle-border-color-focus)
)
)}#input.focus-visible+#switch:before,:host(:hover) #input.focus-visible+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-focus,var(
--mod-switch-handle-border-color-focus,var(--spectrum-switch-handle-border-color-focus)
)
)}#input:focus-visible+#switch:before,:host(:hover) #input:focus-visible+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-focus,var(
--mod-switch-handle-border-color-focus,var(--spectrum-switch-handle-border-color-focus)
)
)}:host([checked]) #input.focus-visible+#switch,:host([checked]:hover) #input.focus-visible+#switch{background-color:var(
--highcontrast-switch-background-color-selected-focus,var(
--mod-switch-background-color-selected-focus,var(--spectrum-switch-background-color-selected-focus)
)
)}:host([checked]) #input.focus-visible+#switch,:host([checked]:hover) #input.focus-visible+#switch{background-color:var(
--highcontrast-switch-background-color-selected-focus,var(
--mod-switch-background-color-selected-focus,var(--spectrum-switch-background-color-selected-focus)
)
)}:host([checked]) #input:focus-visible+#switch,:host([checked]:hover) #input:focus-visible+#switch{background-color:var(
--highcontrast-switch-background-color-selected-focus,var(
--mod-switch-background-color-selected-focus,var(--spectrum-switch-background-color-selected-focus)
)
)}:host([checked]) #input.focus-visible+#switch:before,:host([checked]:hover) #input.focus-visible+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-selected-focus,var(
--mod-switch-handle-border-color-selected-focus,var(--spectrum-switch-handle-border-color-selected-focus)
)
)}:host([checked]) #input.focus-visible+#switch:before,:host([checked]:hover) #input.focus-visible+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-selected-focus,var(
--mod-switch-handle-border-color-selected-focus,var(--spectrum-switch-handle-border-color-selected-focus)
)
)}:host([checked]) #input:focus-visible+#switch:before,:host([checked]:hover) #input:focus-visible+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-selected-focus,var(
--mod-switch-handle-border-color-selected-focus,var(--spectrum-switch-handle-border-color-selected-focus)
)
)}#input.focus-visible~#label,:host(:hover) #input.focus-visible~#label{color:var(
--highcontrast-switch-label-color-focus,var(
--mod-switch-label-color-focus,var(--spectrum-switch-label-color-focus)
)
)}#input.focus-visible~#label,:host(:hover) #input.focus-visible~#label{color:var(
--highcontrast-switch-label-color-focus,var(
--mod-switch-label-color-focus,var(--spectrum-switch-label-color-focus)
)
)}#input:focus-visible~#label,:host(:hover) #input:focus-visible~#label{color:var(
--highcontrast-switch-label-color-focus,var(
--mod-switch-label-color-focus,var(--spectrum-switch-label-color-focus)
)
)}:host([checked]) #input+#switch{background-color:var(
--highcontrast-switch-background-color-selected-default,var(
--mod-switch-background-color-selected-default,var(--spectrum-switch-background-color-selected-default)
)
)}:host([checked]) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-selected-default,var(
--mod-switch-handle-border-color-selected-default,var(--spectrum-switch-handle-border-color-selected-default)
)
)}:host([disabled]) #input+#switch{background-color:var(
--highcontrast-switch-background-color-disabled,var(
--mod-switch-background-color-disabled,var(--spectrum-switch-background-color-disabled)
)
)}:host([disabled]) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-disabled,var(
--mod-switch-handle-border-color-disabled,var(--spectrum-switch-handle-border-color-disabled)
)
)}:host([disabled]) #input~#label{color:var(
--highcontrast-switch-label-color-disabled,var(
--mod-switch-label-color-disabled,var(--spectrum-switch-label-color-disabled)
)
)}:host([disabled][checked]) #input+#switch{background-color:var(
--highcontrast-switch-background-color-selected-disabled,var(
--mod-switch-background-color-selected-disabled,var(--spectrum-switch-background-color-selected-disabled)
)
)}:host([disabled][checked]) #input+#switch:before{border-color:var(
--highcontrast-switch-handle-border-color-disabled,var(
--mod-switch-handle-border-color-disabled,var(--spectrum-switch-handle-border-color-disabled)
)
)}:host([disabled][checked]) #input~#label{color:var(
--highcontrast-switch-label-color-disabled,var(
--mod-switch-label-color-disabled,var(--spectrum-switch-label-color-disabled)
)
)}@media (forced-colors:active){:host{--highcontrast-switch-label-color-default:ButtonText;--highcontrast-switch-label-color-hover:ButtonText;--highcontrast-switch-label-color-down:ButtonText;--highcontrast-switch-label-color-focus:ButtonText;--highcontrast-switch-label-color-disabled:GrayText;--highcontrast-switch-handle-background-color:ButtonFace;--highcontrast-switch-handle-border-color-default:ButtonText;--highcontrast-switch-handle-border-color-focus:Highlight;--highcontrast-switch-handle-border-color-disabled:Highlight;--highcontrast-switch-handle-border-color-selected-default:Highlight;--highcontrast-switch-handle-border-color-selected-hover:Highlight;--highcontrast-switch-handle-border-color-selected-down:Highlight;--highcontrast-switch-handle-border-color-selected-focus:Highlight;--highcontrast-switch-background-color:ButtonFace;--highcontrast-switch-background-color-selected-default:Highlight;--highcontrast-switch-background-color-selected-hover:Highlight;--highcontrast-switch-background-color-selected-down:Highlight;--highcontrast-switch-background-color-selected-focus:Highlight;--highcontrast-switch-background-color-selected-disabled:Highlight;--highcontrast-switch-handle-border-color-hover:Highlight;--highcontrast-switch-handle-border-color-down:Highlight;--highcontrast-switch-focus-indicator-color:ButtonText;forced-color-adjust:none}#input:not(:checked)+#switch{box-shadow:inset 0 0 0 1px ButtonText}:host(:hover) #input:not(:checked)+#switch{box-shadow:inset 0 0 0 1px Highlight}:host([disabled][checked]:hover) #input+#switch{background-color:GrayText;box-shadow:inset 0 0 0 1px GrayText}:host([disabled][checked]:hover) #input+#switch:before{background-color:ButtonFace;border-color:GrayText}:host([disabled]) #input:not(:checked)+#switch{background-color:ButtonFace;box-shadow:inset 0 0 0 1px GrayText}:host([disabled]) #input:not(:checked)+#switch:before{background-color:ButtonFace;border-color:GrayText}:host([disabled][checked]) #input+#switch{background-color:GrayText;box-shadow:inset 0 0 0 1px GrayText}:host([disabled][checked]) #input+#switch:before{background-color:ButtonFace;border-color:GrayText}:host([disabled]) #input~#label{color:GrayText}}:host{--spectrum-switch-background-color-selected-default:var(
--system-spectrum-switch-background-color-selected-default
);--spectrum-switch-background-color-selected-hover:var(
--system-spectrum-switch-background-color-selected-hover
);--spectrum-switch-background-color-selected-down:var(
--system-spectrum-switch-background-color-selected-down
);--spectrum-switch-background-color-selected-focus:var(
--system-spectrum-switch-background-color-selected-focus
);--spectrum-switch-handle-border-color-default:var(
--system-spectrum-switch-handle-border-color-default
);--spectrum-switch-handle-border-color-hover:var(
--system-spectrum-switch-handle-border-color-hover
);--spectrum-switch-handle-border-color-down:var(
--system-spectrum-switch-handle-border-color-down
);--spectrum-switch-handle-border-color-focus:var(
--system-spectrum-switch-handle-border-color-focus
);--spectrum-switch-handle-border-color-selected-default:var(
--system-spectrum-switch-handle-border-color-selected-default
);--spectrum-switch-handle-border-color-selected-hover:var(
--system-spectrum-switch-handle-border-color-selected-hover
);--spectrum-switch-handle-border-color-selected-down:var(
--system-spectrum-switch-handle-border-color-selected-down
);--spectrum-switch-handle-border-color-selected-focus:var(
--system-spectrum-switch-handle-border-color-selected-focus
)}:host([disabled]){pointer-events:none}
`,c=r.iv`
#switch:before{transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}
`;var l=Object.defineProperty,d=Object.getOwnPropertyDescriptor;class u extends((0,i.I)(s.A)){constructor(){super(...arguments),this.emphasized=!1}static get styles(){return window.hasOwnProperty("ShadyDOM")?[n,c]:[n]}render(){return r.dy`
            ${super.render()}
            <span id="switch"></span>
            <label id="label" for="input"><slot></slot></label>
        `}firstUpdated(t){super.firstUpdated(t),this.inputElement.setAttribute("role","switch")}updated(t){t.has("checked")&&this.inputElement.setAttribute("aria-checked",this.checked?"true":"false")}}((t,e,o,i)=>{for(var r,a=i>1?void 0:i?d(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i?r(e,o,a):r(a))||a);i&&a&&l(e,o,a)})([(0,a.Cb)({type:Boolean,reflect:!0})],u.prototype,"emphasized",2),(0,o(589415).N)("sp-switch",u)},810115:(t,e,o)=>{o(378885)},610250:(t,e,o)=>{o(455804)},544233:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(689635).Z},257110:(t,e,o)=>{o.d(e,{Z:()=>i});const i=o(727116).Z},531176:(t,e,o)=>{o.r(e);var i=o(397208),r=o(211819);o(777105);i.Q.registerThemeFragment("large-express","scale",r.Z);var a=o(966995);i.Q.registerThemeFragment("large-express","scale",a.Z)},344354:(t,e,o)=>{o.r(e);var i=o(397208),r=o(899849);o(777105);i.Q.registerThemeFragment("medium-express","scale",r.Z);var a=o(581664);i.Q.registerThemeFragment("medium-express","scale",a.Z)},948302:(t,e,o)=>{o(963734)},209532:(t,e,o)=>{o.r(e);var i=o(397208),r=o(806506);o(777105);i.Q.registerThemeFragment("dark-express","color",r.Z);var a=o(752871);i.Q.registerThemeFragment("dark-express","color",a.Z)},444862:(t,e,o)=>{o.r(e);var i=o(397208),r=o(260092);o(777105);i.Q.registerThemeFragment("light-express","color",r.Z);var a=o(464416);i.Q.registerThemeFragment("light-express","color",a.Z)},581935:(t,e,o)=>{o.d(e,{V1:()=>Y,AR:()=>X,X6:()=>Q});var i=o(944440),r=o(859526),a=o(692484),s=o(903512),n=o(697038),c=o(148868),l=o(675125),d=o(359815),u=o(86265),h=o(228532);const p={name:"artboard",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.outline%7Bfill%3A%23fff%3Bopacity%3A.65%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22cursor%22%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M8%206.25V8H6.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25H8v1.75a.25.25%200%200%200%20.25.25h.5a.25.25%200%200%200%20.25-.25V9h1.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25H9V6.25A.25.25%200%200%200%208.75%206h-.5a.25.25%200%200%200-.25.25Zm0-.5v-4.5A.25.25%200%200%201%208.25%201h.5a.25.25%200%200%201%20.25.25v4.5a.25.25%200%200%200%20.25.25h.25a.5.5%200%200%200%20.5-.5V1.25A1.25%201.25%200%200%200%208.75%200h-.5A1.25%201.25%200%200%200%207%201.25V5.5a.5.5%200%200%200%20.5.5h.25A.25.25%200%200%200%208%205.75ZM5.75%209h-4.5A.25.25%200%200%201%201%208.75v-.5A.25.25%200%200%201%201.25%208h4.5A.25.25%200%200%200%206%207.75V7.5a.5.5%200%200%200-.5-.5H1.25A1.25%201.25%200%200%200%200%208.25v.5A1.25%201.25%200%200%200%201.25%2010H5.5a.5.5%200%200%200%20.5-.5v-.25A.25.25%200%200%200%205.75%209Z%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221%22%20height%3D%225%22%20rx%3D%22.25%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%228%22%20width%3D%225%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M18.5%208h-7.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25H18v9H9v-6.75a.25.25%200%200%200-.25-.25h-.5a.25.25%200%200%200-.25.25v7.25a.5.5%200%200%200%20.5.5h10a.5.5%200%200%200%20.5-.5v-10a.5.5%200%200%200-.5-.5Z%22%2F%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M18%209h-6.75a.25.25%200%200%200-.25.25v.25a.5.5%200%200%200%20.5.5H17v7h-7v-5.5a.5.5%200%200%200-.5-.5h-.25a.25.25%200%200%200-.25.25V18h9Z%22%2F%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M18.5%207h-7a.5.5%200%200%200-.5.5v.25a.25.25%200%200%200%20.25.25h7.25a.5.5%200%200%201%20.5.5v10a.5.5%200%200%201-.5.5h-10a.5.5%200%200%201-.5-.5v-7.25a.25.25%200%200%200-.25-.25H7.5a.5.5%200%200%200-.5.5v7A1.5%201.5%200%200%200%208.5%2020h10a1.5%201.5%200%200%200%201.5-1.5v-10A1.5%201.5%200%200%200%2018.5%207Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"},m={name:"drag_duplicate",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22m15.247%2010.832-8.54-8.54A1%201%200%200%200%206%202h-.25a.75.75%200%200%200-.75.75v.836L1.707.293A1%201%200%200%200%201%200H.75A.75.75%200%200%200%200%20.75v12.57a1.304%201.304%200%200%200%201.093%201.317%201.242%201.242%200%200%200%201.04-.357L5%2011.414v3.907a1.304%201.304%200%200%200%201.093%201.316%201.242%201.242%200%200%200%201.04-.357L10.415%2013h3.982a1.25%201.25%200%200%200%201.24-1.078%201.292%201.292%200%200%200-.39-1.09ZM14.397%2012H10l-3.573%203.573a.245.245%200%200%201-.175.074.25.25%200%200%201-.252-.248V10H5l-3.573%203.573a.245.245%200%200%201-.175.074.25.25%200%200%201-.252-.248V1l5%205V3l8.573%208.573a.25.25%200%200%201-.177.427Z%22%20style%3D%22opacity%3A.65%3Bfill%3A%23fff%22%2F%3E%3Cpath%20d%3D%22M14.573%2011.573%206%203v3L1%201v12.396a.25.25%200%200%200%20.427.177L5%2010h1v5.396a.25.25%200%200%200%20.427.177L10%2012h4.396a.25.25%200%200%200%20.177-.427Z%22%2F%3E%3Cpath%20d%3D%22M7%205.414V7l2.573%202.573a.25.25%200%200%201-.177.427H7v3.586l2.293-2.293.293-.293h3Z%22%20style%3D%22opacity%3A.9%3Bfill%3A%23fff%22%2F%3E%3C%2Fsvg%3E"},g={name:"increase_decrease",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.outline%7Bfill%3A%23fff%3Bopacity%3A.65%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M7.247%205.832%201.707.293A1%201%200%200%200%201%200H.5a.5.5%200%200%200-.5.5v8.821a1.316%201.316%200%200%200%201.093%201.316%201.241%201.241%200%200%200%201.041-.357L4.414%208H6.4a1.25%201.25%200%200%200%201.24-1.078%201.3%201.3%200%200%200-.393-1.09ZM6.4%207H4L1.427%209.573a.245.245%200%200%201-.175.074A.25.25%200%200%201%201%209.4V1l5.573%205.573A.25.25%200%200%201%206.4%207Z%22%2F%3E%3Cpath%20d%3D%22m1%201%205.573%205.573A.25.25%200%200%201%206.4%207H4L1.427%209.573A.25.25%200%200%201%201%209.4Z%22%2F%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M6.75%2011a.25.25%200%200%201%20.25.25V14h2.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H7v2.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V15H3.25a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25H6v-2.75a.25.25%200%200%201%20.25-.25Zm0-1h-.5A1.252%201.252%200%200%200%205%2011.25V13H3.25A1.252%201.252%200%200%200%202%2014.25v.5A1.252%201.252%200%200%200%203.25%2016H5v1.75A1.252%201.252%200%200%200%206.25%2019h.5A1.252%201.252%200%200%200%208%2017.75V16h1.75A1.252%201.252%200%200%200%2011%2014.75v-.5A1.252%201.252%200%200%200%209.75%2013H8v-1.75A1.252%201.252%200%200%200%206.75%2010Z%22%2F%3E%3Cpath%20d%3D%22M6.25%2011h.5a.25.25%200%200%201%20.25.25V14h2.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H7v2.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V15H3.25a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25H6v-2.75a.25.25%200%200%201%20.25-.25Z%22%2F%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M21.75%2021a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25h-6.5a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm0-1h-6.5A1.252%201.252%200%200%200%2014%2021.25v.5A1.252%201.252%200%200%200%2015.25%2023h6.5A1.252%201.252%200%200%200%2023%2021.75v-.5A1.252%201.252%200%200%200%2021.75%2020Z%22%2F%3E%3Cpath%20d%3D%22M15%2021.25v.5a.25.25%200%200%200%20.25.25h6.5a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25h-6.5a.25.25%200%200%200-.25.25Z%22%2F%3E%3Cpath%20class%3D%22outline%22%20d%3D%22M15.752%2011.133a.25.25%200%200%201%20.226.357l-6.259%2013.3a.249.249%200%200%201-.226.144h-.448a.25.25%200%200%201-.226-.357l6.259-13.3a.252.252%200%200%201%20.227-.144Zm0-1h-.447a1.257%201.257%200%200%200-1.131.718l-6.26%2013.3a1.25%201.25%200%200%200%201.131%201.782h.448a1.255%201.255%200%200%200%201.131-.718l6.259-13.3a1.25%201.25%200%200%200-1.131-1.783Z%22%2F%3E%3Cpath%20d%3D%22M9.493%2024.934h-.448a.25.25%200%200%201-.226-.357l6.259-13.3a.252.252%200%200%201%20.227-.144h.447a.25.25%200%200%201%20.226.357l-6.259%2013.3a.249.249%200%200%201-.226.144Z%22%2F%3E%3C%2Fsvg%3E"},v={name:"move",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22m11%202.5%203.177%203.073A.25.25%200%200%201%2014%206h-2v4h4V8a.25.25%200%200%201%20.25-.25h.002a.245.245%200%200%201%20.175.073L19.5%2011l-3.073%203.177a.245.245%200%200%201-.175.073.25.25%200%200%201-.252-.247V12h-4v4h2a.25.25%200%200%201%20.177.427L11%2019.5l-3.177-3.073A.25.25%200%200%201%208%2016h2v-4H6v2a.25.25%200%200%201-.25.25h-.002a.245.245%200%200%201-.175-.073L2.5%2011l3.073-3.177a.245.245%200%200%201%20.175-.073.25.25%200%200%201%20.252.247V10h4V6H8a.25.25%200%200%201-.177-.427Zm.348-1.055a.5.5%200%200%200-.696%200l-3.524%203.41A1.253%201.253%200%200%200%207%206.502%201.285%201.285%200%200%200%208.042%207H9v2H7v-.924a1.304%201.304%200%200%200-1.093-1.317%201.243%201.243%200%200%200-1.04.357l-3.422%203.536a.5.5%200%200%200%200%20.696l3.41%203.524a1.248%201.248%200%200%200%201.045.37A1.296%201.296%200%200%200%207%2013.934V13h2v2h-.952a1.292%201.292%200%200%200-1.046.495%201.25%201.25%200%200%200%20.114%201.639l3.536%203.421a.5.5%200%200%200%20.696%200l3.524-3.41A1.253%201.253%200%200%200%2015%2015.498%201.285%201.285%200%200%200%2013.958%2015H13v-2h2v.924a1.304%201.304%200%200%200%201.093%201.317%201.243%201.243%200%200%200%201.04-.357l3.422-3.536a.5.5%200%200%200%200-.696l-3.41-3.524A1.25%201.25%200%200%200%2015%208v1h-2V7h.952a1.292%201.292%200%200%200%201.046-.495%201.25%201.25%200%200%200-.114-1.639Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%22%2F%3E%3Cpath%20d%3D%22M12%206h2a.25.25%200%200%200%20.177-.427L11%202.5%207.823%205.573A.25.25%200%200%200%208%206h2v4H6V8a.25.25%200%200%200-.427-.177L2.5%2011l3.073%203.177A.25.25%200%200%200%206%2014v-2h4v4H8a.25.25%200%200%200-.177.427L11%2019.5l3.177-3.073A.25.25%200%200%200%2014%2016h-2v-4h4v2a.25.25%200%200%200%20.427.177L19.5%2011l-3.073-3.177A.25.25%200%200%200%2016%208v2h-4Z%22%2F%3E%3C%2Fsvg%3E"},b={name:"not_allowed",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M8.5%202.5a7%207%200%201%201-7%207%207%207%200%200%201%207-7Zm0-1a8%208%200%201%200%208%208%208%208%200%200%200-8-8Z%22%20style%3D%22opacity%3A.65%3Bfill%3A%23fff%22%2F%3E%3Cpath%20d%3D%22M1.5%209.5a7%207%200%201%201%207%207%207%207%200%200%201-7-7Z%22%2F%3E%3Cpath%20d%3D%22M8.5%204.017a5.452%205.452%200%200%200-3.185%201.025l7.643%207.643A5.477%205.477%200%200%200%208.5%204.017ZM3.017%209.5a5.477%205.477%200%200%200%208.668%204.458L4.042%206.315A5.452%205.452%200%200%200%203.017%209.5Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.9%22%2F%3E%3C%2Fsvg%3E"},f={name:"pan_fist",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M9.069%207.6a1.922%201.922%200%200%200-1.926%201.916v.036A4.683%204.683%200%200%201%207%2010.676a2.822%202.822%200%200%200-1.63%201.458%202.668%202.668%200%200%200%20.43%202.908l.034.042c.293.358.569.7.787%201.023a9.722%209.722%200%200%200%20.87%201.476%204.537%204.537%200%200%200%203.824%201.677%204.63%204.63%200%200%200%204.35-2.354%207%207%200%200%200%20.226-.565c.945-2.612%201.419-4.57.657-5.638a2.709%202.709%200%200%200-1.475-.893l-.023-.026-.091-.105a2.567%202.567%200%200%200-1.5-.9%202.228%202.228%200%200%200-.382-.03h-.266a1.106%201.106%200%200%200-.069-.082%202.437%202.437%200%200%200-1.419-.825%201.606%201.606%200%200%200-.259-.021%201.71%201.71%200%200%200-.608.116A2.891%202.891%200%200%200%209.069%207.6Z%22%2F%3E%3Cpath%20d%3D%22M15.048%2016.035c.561-1.551%201.364-3.977.77-4.809a2.193%202.193%200%200%200-1.228-.618%204.1%204.1%200%200%201-.295-.324%201.675%201.675%200%200%200-.989-.618%203.306%203.306%200%200%200-.554-.009.691.691%200%200%201-.666-.364%201.559%201.559%200%200%200-.905-.554c-.385-.062-.587.2-.828.18A2.382%202.382%200%200%200%209.069%208.5c-.986%200-1.027%201.051-1.027%201.051a4.862%204.862%200%200%201-.363%201.849%201.143%201.143%200%200%201-.054.087A1.777%201.777%200%200%200%206.5%2014.474a14.594%2014.594%200%200%201%20.9%201.18%209.927%209.927%200%200%200%20.8%201.372%203.655%203.655%200%200%200%203.117%201.334%203.724%203.724%200%200%200%203.543-1.852c.04-.071.177-.435.188-.473Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.9%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},k={name:"pan_hand",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M10.99%201.46A1.969%201.969%200%200%200%209.106%203.5v.37A1.9%201.9%200%200%200%207.5%202.884a1.75%201.75%200%200%200-.323.031%201.873%201.873%200%200%200-1.245.885%202.186%202.186%200%200%200-.222%201.749l1.341%204.53c0%20.01.02.07.042.172a38.481%2038.481%200%200%201-1.563-.942%202.768%202.768%200%200%200-1.671-.667%201.737%201.737%200%200%200-1.422.716%202.109%202.109%200%200%200%20.344%202.559l.026.031.029.029%203.435%203.448a1.058%201.058%200%200%201%20.091.156%2013.15%2013.15%200%200%200%201.132%202%204.537%204.537%200%200%200%203.824%201.677%204.489%204.489%200%200%200%204.52-2.724l.01-.027.008-.027c.209-.7.406-1.538.565-2.209.089-.379.167-.708.219-.892.14-.363%201.35-2.867%202.431-5.069l.011-.022.009-.022a2.254%202.254%200%200%200%20.05-1.772%201.728%201.728%200%200%200-1.014-.94%201.513%201.513%200%200%200-.52-.09%202.043%202.043%200%200%200-1.715%201.142l.243-1.657a2.175%202.175%200%200%200-.337-1.7%201.842%201.842%200%200%200-1.3-.792%201.648%201.648%200%200%200-.2-.012%201.822%201.822%200%200%200-1.445.749A1.943%201.943%200%200%200%2010.99%201.46Z%22%2F%3E%3Cpath%20d%3D%22M17.823%206.4c-.468-.167-.985.252-1.2.762l-1.354%202.426c-.1.23-.351.445-.531.354s-.229-.334-.138-.725l.649-4.429a1.14%201.14%200%200%200-.771-1.414%201.345%201.345%200%200%200-.086-.021%201.051%201.051%200%200%200-1.058.9l-.618%204.129s-.045.536-.413.517-.328-.567-.328-.567V3.5a1.073%201.073%200%200%200-.985-1.14%201.073%201.073%200%200%200-.984%201.14v4.81a.238.238%200%200%201-.469.047%20930.74%20930.74%200%200%201-1.083-3.739A1.026%201.026%200%200%200%207.349%203.8a1.16%201.16%200%200%200-.794%201.438c0%20.02.011.039.018.059l1.341%204.527a4.291%204.291%200%200%201%20.123.615%201.039%201.039%200%200%201-.369%201.048%2015.052%2015.052%200%200%201-2.657-1.441c-.985-.778-1.592-.509-1.846-.159-.271.372-.082.984.309%201.455l3.484%203.5a2.063%202.063%200%200%201%20.215.351A13.42%2013.42%200%200%200%208.2%2017.026a3.655%203.655%200%200%200%203.117%201.334%203.629%203.629%200%200%200%203.675-2.134c.328-1.1.639-2.6.788-3.114.1-.339%202.482-5.2%202.482-5.2.267-.618.159-1.295-.439-1.512Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.9%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},y={name:"pointer",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M9.069%201.95a1.917%201.917%200%200%200-1.933%201.9q0%20.086.007.172V9.55a4.884%204.884%200%200%201-.057.695%2038.871%2038.871%200%200%201-1.556-.937%202.769%202.769%200%200%200-1.671-.667%201.736%201.736%200%200%200-1.422.715%202.11%202.11%200%200%200%20.344%202.56l.026.031.03.03%202.106%202.114a16.817%2016.817%200%200%201%201.68%202.015%209.695%209.695%200%200%200%20.87%201.476%204.537%204.537%200%200%200%203.825%201.677%204.807%204.807%200%200%200%204.052-1.852%206.469%206.469%200%200%200%20.535-1.098c.93-2.6%201.405-4.544.646-5.607a2.703%202.703%200%200%200-1.475-.893l-.023-.026a6.05%206.05%200%200%200-.09-.105%202.563%202.563%200%200%200-1.505-.9%202.253%202.253%200%200%200-.382-.03c-.073%200-.143.002-.208.005l-.058.003a1.037%201.037%200%200%200-.07-.082%202.433%202.433%200%200%200-1.418-.825%201.642%201.642%200%200%200-.26-.02%201.615%201.615%200%200%200-.162.008V4.022a1.858%201.858%200%200%200-1.831-2.073Z%22%2F%3E%3Cpath%20d%3D%22M15.048%2016.035c.561-1.551%201.364-3.977.77-4.81a2.195%202.195%200%200%200-1.228-.617%203.981%203.981%200%200%201-.295-.324%201.677%201.677%200%200%200-.99-.618%203.346%203.346%200%200%200-.553-.01.69.69%200%200%201-.666-.363%201.563%201.563%200%200%200-.905-.554c-.385-.062-.587.196-.828.18C10.15%208.832%2010%208.21%2010%208.21V4.022c0-.58-.212-1.173-.931-1.173a1.046%201.046%200%200%200-1.027%201.173V9.55a4.868%204.868%200%200%201-.363%201.852c-.01.021-.032.054-.054.087a18.055%2018.055%200%200%201-2.614-1.444c-.985-.778-1.592-.509-1.846-.16-.27.373-.082.985.309%201.456l2.106%202.114a17.06%2017.06%200%200%201%201.823%202.198%209.993%209.993%200%200%200%20.798%201.372%203.654%203.654%200%200%200%203.117%201.334%203.721%203.721%200%200%200%203.543-1.852s.114-.231.132-.282c.019-.061.036-.127.055-.191Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.9%22%2F%3E%3C%2Fsvg%3E"},x={name:"precise",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3Bisolation%3Aisolate%3Bopacity%3A.65%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Crect%20class%3D%22cls-1%22%20x%3D%229%22%20y%3D%228%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M10%2013v4.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V13h-.5a.5.5%200%200%200-.5.5v4.25A1.25%201.25%200%200%200%209.25%2019h.5A1.25%201.25%200%200%200%2011%2017.75V13.5a.5.5%200%200%200-.5-.5Zm-4-3H1.25A.25.25%200%200%201%201%209.75v-.5A.25.25%200%200%201%201.25%209H6v-.5a.5.5%200%200%200-.5-.5H1.25A1.25%201.25%200%200%200%200%209.25v.5A1.25%201.25%200%200%200%201.25%2011H5.5a.5.5%200%200%200%20.5-.5Zm11.75-2H13.5a.5.5%200%200%200-.5.5V9h4.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H13v.5a.5.5%200%200%200%20.5.5h4.25A1.25%201.25%200%200%200%2019%209.75v-.5A1.25%201.25%200%200%200%2017.75%208Z%22%2F%3E%3Cpath%20d%3D%22M9.25%2018h.5a.25.25%200%200%200%20.25-.25V13H9v4.75a.25.25%200%200%200%20.25.25Zm-8-8H6V9H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25ZM9%206h1V1.25A.25.25%200%200%200%209.75%201h-.5a.25.25%200%200%200-.25.25Zm4%203v1h4.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25Z%22%2F%3E%3Cpath%20d%3D%22M6%209h1.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6V9Zm5.25%200H13v1h-1.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm-2%202h.5a.25.25%200%200%201%20.25.25V13H9v-1.75a.25.25%200%200%201%20.25-.25ZM9%206h1v1.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75V6Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M9%206V1.25A.25.25%200%200%201%209.25%201h.5a.25.25%200%200%201%20.25.25V6h.5a.5.5%200%200%200%20.5-.5V1.25A1.25%201.25%200%200%200%209.75%200h-.5A1.25%201.25%200%200%200%208%201.25V5.5a.5.5%200%200%200%20.5.5Z%22%2F%3E%3C%2Fsvg%3E"},w={name:"precise_arrow",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23fff%3Bopacity%3A.65%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22e%22%20data-name%3D%22ImportedIcons%22%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%20ry%3D%22.25%22%2F%3E%3Crect%20class%3D%22a%22%20x%3D%229%22%20y%3D%228%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%20ry%3D%22.25%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M10%2013v4.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V13h-.5a.5.5%200%200%200-.5.5v4.25c0%20.69.56%201.25%201.25%201.25h.5c.69%200%201.25-.56%201.25-1.25V13.5a.5.5%200%200%200-.5-.5H10Zm-4-3H1.25A.25.25%200%200%201%201%209.75v-.5A.25.25%200%200%201%201.25%209H6v-.5a.5.5%200%200%200-.5-.5H1.25C.56%208%200%208.56%200%209.25v.5C0%2010.44.56%2011%201.25%2011H5.5a.5.5%200%200%200%20.5-.5V10Zm11.75-2H13.5a.5.5%200%200%200-.5.5V9h4.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H13v.5a.5.5%200%200%200%20.5.5h4.25c.69%200%201.25-.56%201.25-1.25v-.5C19%208.56%2018.44%208%2017.75%208Z%22%2F%3E%3Cpath%20d%3D%22M9.25%2018h.5a.25.25%200%200%200%20.25-.25V13H9v4.75c0%20.138.112.25.25.25Zm-8-8H6V9H1.25a.25.25%200%200%200-.25.25v.5c0%20.138.112.25.25.25ZM9%206h1V1.25A.25.25%200%200%200%209.75%201h-.5a.25.25%200%200%200-.25.25V6Zm4%203v1h4.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25H13Z%22%2F%3E%3Cpath%20d%3D%22M6%209h1.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6V9Zm5.25%200H13v1h-1.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm-2%202h.5a.25.25%200%200%201%20.25.25V13H9v-1.75a.25.25%200%200%201%20.25-.25ZM9%206h1v1.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75V6Z%22%20style%3D%22isolation%3Aisolate%3Bopacity%3A.3%3Bfill%3A%23fff%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M9%206V1.25A.25.25%200%200%201%209.25%201h.5a.25.25%200%200%201%20.25.25V6h.5a.5.5%200%200%200%20.5-.5V1.25C11%20.56%2010.44%200%209.75%200h-.5C8.56%200%208%20.56%208%201.25V5.5a.5.5%200%200%200%20.5.5H9Zm16.716%207.457A1.245%201.245%200%200%200%2024.75%2013l-.156.005-4.333.923a1.248%201.248%200%200%200-.639%202.11l.609.608-6.293%206.293a1.502%201.502%200%200%200%201.06%202.561H15a1.49%201.49%200%200%200%201.061-.439l6.293-6.293.609.609a1.252%201.252%200%200%200%202.107-.627l.906-4.257a1.247%201.247%200%200%200-.26-1.036Zm-1.624%205.085a.25.25%200%200%201-.422.128l-1.316-1.316-7%207a.5.5%200%200%201-.708-.708l7-7-1.316-1.316a.25.25%200%200%201%20.128-.422l4.243-.903a.25.25%200%200%201%20.294.294l-.903%204.243Z%22%2F%3E%3Cpath%20d%3D%22m24.7%2014.005-4.242.903a.25.25%200%200%200-.128.422l1.316%201.316-7%207a.5.5%200%201%200%20.708.708l7-7%201.316%201.316a.25.25%200%200%200%20.422-.128l.903-4.243a.25.25%200%200%200-.294-.294Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"},_={name:"precise_ellipse",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3Bisolation%3Aisolate%3Bopacity%3A.65%7D.cls-3%7Bfill%3Anone%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Crect%20class%3D%22cls-1%22%20x%3D%229%22%20y%3D%228%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M10%2013v4.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V13h-.5a.5.5%200%200%200-.5.5v4.25A1.25%201.25%200%200%200%209.25%2019h.5A1.25%201.25%200%200%200%2011%2017.75V13.5a.5.5%200%200%200-.5-.5Zm-4-3H1.25A.25.25%200%200%201%201%209.75v-.5A.25.25%200%200%201%201.25%209H6v-.5a.5.5%200%200%200-.5-.5H1.25A1.25%201.25%200%200%200%200%209.25v.5A1.25%201.25%200%200%200%201.25%2011H5.5a.5.5%200%200%200%20.5-.5Zm11.75-2H13.5a.5.5%200%200%200-.5.5V9h4.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H13v.5a.5.5%200%200%200%20.5.5h4.25A1.25%201.25%200%200%200%2019%209.75v-.5A1.25%201.25%200%200%200%2017.75%208Z%22%2F%3E%3Cpath%20d%3D%22M9.25%2018h.5a.25.25%200%200%200%20.25-.25V13H9v4.75a.25.25%200%200%200%20.25.25Zm-8-8H6V9H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25ZM9%206h1V1.25A.25.25%200%200%200%209.75%201h-.5a.25.25%200%200%200-.25.25Zm4%203v1h4.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25Z%22%2F%3E%3Cpath%20d%3D%22M6%209h1.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6V9Zm5.25%200H13v1h-1.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm-2%202h.5a.25.25%200%200%201%20.25.25V13H9v-1.75a.25.25%200%200%201%20.25-.25ZM9%206h1v1.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75V6Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M9%206V1.25A.25.25%200%200%201%209.25%201h.5a.25.25%200%200%201%20.25.25V6h.5a.5.5%200%200%200%20.5-.5V1.25A1.25%201.25%200%200%200%209.75%200h-.5A1.25%201.25%200%200%200%208%201.25V5.5a.5.5%200%200%200%20.5.5Z%22%2F%3E%3Cpath%20d%3D%22M20%2015.85A4.15%204.15%200%201%200%2024.15%2020%204.15%204.15%200%200%200%2020%2015.85Zm0%207.3A3.15%203.15%200%201%201%2023.15%2020%203.15%203.15%200%200%201%2020%2023.15Z%22%2F%3E%3Cpath%20class%3D%22cls-3%22%20d%3D%22M20%2015.85A4.15%204.15%200%201%200%2024.15%2020%204.15%204.15%200%200%200%2020%2015.85Zm0%207.3A3.15%203.15%200%201%201%2023.15%2020%203.15%203.15%200%200%201%2020%2023.15Z%22%2F%3E%3Cpath%20class%3D%22cls-3%22%20d%3D%22M20%2017.85A2.15%202.15%200%201%200%2022.15%2020%202.151%202.151%200%200%200%2020%2017.85Z%22%2F%3E%3Cpath%20d%3D%22M20%2016.85A3.15%203.15%200%201%200%2023.15%2020%203.15%203.15%200%200%200%2020%2016.85Zm0%205.3A2.15%202.15%200%201%201%2022.15%2020%202.151%202.151%200%200%201%2020%2022.15Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M20%2014.85A5.15%205.15%200%201%200%2025.15%2020%205.15%205.15%200%200%200%2020%2014.85Zm0%209.3A4.15%204.15%200%201%201%2024.15%2020%204.15%204.15%200%200%201%2020%2024.15Z%22%2F%3E%3C%2Fsvg%3E"},S={name:"precise_line",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3Bisolation%3Aisolate%3Bopacity%3A.65%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Crect%20class%3D%22cls-1%22%20x%3D%229%22%20y%3D%228%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M10%2013v4.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V13h-.5a.5.5%200%200%200-.5.5v4.25A1.25%201.25%200%200%200%209.25%2019h.5A1.25%201.25%200%200%200%2011%2017.75V13.5a.5.5%200%200%200-.5-.5Zm-4-3H1.25A.25.25%200%200%201%201%209.75v-.5A.25.25%200%200%201%201.25%209H6v-.5a.5.5%200%200%200-.5-.5H1.25A1.25%201.25%200%200%200%200%209.25v.5A1.25%201.25%200%200%200%201.25%2011H5.5a.5.5%200%200%200%20.5-.5Zm11.75-2H13.5a.5.5%200%200%200-.5.5V9h4.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H13v.5a.5.5%200%200%200%20.5.5h4.25A1.25%201.25%200%200%200%2019%209.75v-.5A1.25%201.25%200%200%200%2017.75%208Z%22%2F%3E%3Cpath%20d%3D%22M9.25%2018h.5a.25.25%200%200%200%20.25-.25V13H9v4.75a.25.25%200%200%200%20.25.25Zm-8-8H6V9H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25ZM9%206h1V1.25A.25.25%200%200%200%209.75%201h-.5a.25.25%200%200%200-.25.25Zm4%203v1h4.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25Z%22%2F%3E%3Cpath%20d%3D%22M6%209h1.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6V9Zm5.25%200H13v1h-1.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm-2%202h.5a.25.25%200%200%201%20.25.25V13H9v-1.75a.25.25%200%200%201%20.25-.25ZM9%206h1v1.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75V6Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M9%206V1.25A.25.25%200%200%201%209.25%201h.5a.25.25%200%200%201%20.25.25V6h.5a.5.5%200%200%200%20.5-.5V1.25A1.25%201.25%200%200%200%209.75%200h-.5A1.25%201.25%200%200%200%208%201.25V5.5a.5.5%200%200%200%20.5.5Z%22%2F%3E%3Cpath%20d%3D%22M15%2024.5a.5.5%200%200%201-.354-.854l9-9a.5.5%200%200%201%20.708.708l-9%209A.5.5%200%200%201%2015%2024.5Z%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M25.061%2013.939a1.5%201.5%200%200%200-2.122%200l-9%209a1.5%201.5%200%200%200%202.122%202.122l9-9a1.5%201.5%200%200%200%200-2.122Zm-.707%201.415-9%209a.5.5%200%200%201-.708-.708l9-9a.5.5%200%200%201%20.708.708Z%22%2F%3E%3C%2Fsvg%3E"},A={name:"precise_polygon",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Crect%20class%3D%22cls-1%22%20x%3D%229%22%20y%3D%228%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M10%2013v4.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V13h-.5a.5.5%200%200%200-.5.5v4.25A1.25%201.25%200%200%200%209.25%2019h.5A1.25%201.25%200%200%200%2011%2017.75V13.5a.5.5%200%200%200-.5-.5Zm-4-3H1.25A.25.25%200%200%201%201%209.75v-.5A.25.25%200%200%201%201.25%209H6v-.5a.5.5%200%200%200-.5-.5H1.25A1.25%201.25%200%200%200%200%209.25v.5A1.25%201.25%200%200%200%201.25%2011H5.5a.5.5%200%200%200%20.5-.5Zm11.75-2H13.5a.5.5%200%200%200-.5.5V9h4.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H13v.5a.5.5%200%200%200%20.5.5h4.25A1.25%201.25%200%200%200%2019%209.75v-.5A1.25%201.25%200%200%200%2017.75%208Z%22%2F%3E%3Cpath%20d%3D%22M9.25%2018h.5a.25.25%200%200%200%20.25-.25V13H9v4.75a.25.25%200%200%200%20.25.25Zm-8-8H6V9H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25ZM9%206h1V1.25A.25.25%200%200%200%209.75%201h-.5a.25.25%200%200%200-.25.25Zm4%203v1h4.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25Z%22%2F%3E%3Cpath%20d%3D%22M6%209h1.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6V9Zm5.25%200H13v1h-1.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm-2%202h.5a.25.25%200%200%201%20.25.25V13H9v-1.75a.25.25%200%200%201%20.25-.25ZM9%206h1v1.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75V6Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M9%206V1.25A.25.25%200%200%201%209.25%201h.5a.25.25%200%200%201%20.25.25V6h.5a.5.5%200%200%200%20.5-.5V1.25A1.25%201.25%200%200%200%209.75%200h-.5A1.25%201.25%200%200%200%208%201.25V5.5a.5.5%200%200%200%20.5.5Z%22%2F%3E%3Cpath%20d%3D%22m19.961%2019.5%201.445%202.5h-2.889Zm0-2L16.785%2023h6.353Z%22%20style%3D%22opacity%3A.3%3Bisolation%3Aisolate%3Bfill%3A%23fff%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M19.961%2015.749a.248.248%200%200%201%20.217.125l4.476%207.752a.25.25%200%200%201-.216.375h-8.952a.25.25%200%200%201-.217-.375l4.476-7.752a.248.248%200%200%201%20.216-.125Zm0-1a1.253%201.253%200%200%200-1.082.625L14.4%2023.126A1.25%201.25%200%200%200%2015.486%2025h8.952a1.25%201.25%200%200%200%201.082-1.875l-4.476-7.752a1.255%201.255%200%200%200-1.083-.624Z%22%2F%3E%3Cpath%20d%3D%22M24.438%2024h-8.952a.25.25%200%200%201-.217-.375l4.476-7.752a.25.25%200%200%201%20.433%200l4.476%207.752a.25.25%200%200%201-.216.375Zm-7.653-1h6.353l-3.177-5.5Z%22%20style%3D%22isolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},C={name:"precise_rectangle",data:"data:image/svg+xml,%3Csvg%20id%3D%22cursor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3Bisolation%3Aisolate%3Bopacity%3A.65%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Crect%20class%3D%22cls-1%22%20x%3D%229%22%20y%3D%228%22%20width%3D%221%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M10%2013v4.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25V13h-.5a.5.5%200%200%200-.5.5v4.25A1.25%201.25%200%200%200%209.25%2019h.5A1.25%201.25%200%200%200%2011%2017.75V13.5a.5.5%200%200%200-.5-.5Zm-4-3H1.25A.25.25%200%200%201%201%209.75v-.5A.25.25%200%200%201%201.25%209H6v-.5a.5.5%200%200%200-.5-.5H1.25A1.25%201.25%200%200%200%200%209.25v.5A1.25%201.25%200%200%200%201.25%2011H5.5a.5.5%200%200%200%20.5-.5Zm11.75-2H13.5a.5.5%200%200%200-.5.5V9h4.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H13v.5a.5.5%200%200%200%20.5.5h4.25A1.25%201.25%200%200%200%2019%209.75v-.5A1.25%201.25%200%200%200%2017.75%208Z%22%2F%3E%3Cpath%20d%3D%22M9.25%2018h.5a.25.25%200%200%200%20.25-.25V13H9v4.75a.25.25%200%200%200%20.25.25Zm-8-8H6V9H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25ZM9%206h1V1.25A.25.25%200%200%200%209.75%201h-.5a.25.25%200%200%200-.25.25Zm4%203v1h4.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25Z%22%2F%3E%3Cpath%20d%3D%22M6%209h1.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6V9Zm5.25%200H13v1h-1.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25Zm-2%202h.5a.25.25%200%200%201%20.25.25V13H9v-1.75a.25.25%200%200%201%20.25-.25ZM9%206h1v1.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75V6Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M9%206V1.25A.25.25%200%200%201%209.25%201h.5a.25.25%200%200%201%20.25.25V6h.5a.5.5%200%200%200%20.5-.5V1.25A1.25%201.25%200%200%200%209.75%200h-.5A1.25%201.25%200%200%200%208%201.25V5.5a.5.5%200%200%200%20.5.5Z%22%2F%3E%3Cpath%20d%3D%22M16%2016.25v7.5a.25.25%200%200%200%20.25.25h7.5a.25.25%200%200%200%20.25-.25v-7.5a.25.25%200%200%200-.25-.25h-7.5a.25.25%200%200%200-.25.25ZM23%2023h-6v-6h6Z%22%2F%3E%3Cpath%20d%3D%22M23.75%2016h-7.5a.25.25%200%200%200-.25.25v7.5a.25.25%200%200%200%20.25.25h7.5a.25.25%200%200%200%20.25-.25v-7.5a.25.25%200%200%200-.25-.25ZM23%2023h-6v-6h6Z%22%20style%3D%22fill%3Anone%22%2F%3E%3Cpath%20d%3D%22M17%2023h6v-6h-6Zm1-5h4v4h-4Z%22%20style%3D%22opacity%3A.3%3Bfill%3A%23fff%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M24.5%2015h-9a.5.5%200%200%200-.5.5v9a.5.5%200%200%200%20.5.5h9a.5.5%200%200%200%20.5-.5v-9a.5.5%200%200%200-.5-.5Zm-.5%208.75a.25.25%200%200%201-.25.25h-7.5a.25.25%200%200%201-.25-.25v-7.5a.25.25%200%200%201%20.25-.25h7.5a.25.25%200%200%201%20.25.25Z%22%2F%3E%3C%2Fsvg%3E"},E={name:"rotate",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216.01%22%20height%3D%2224.64%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20d%3D%22M0%200h16.01v24.64H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20data-name%3D%22Artboard%20%E2%80%93%201%22%20clip-path%3D%22url(%23a)%22%3E%3Cpath%20data-name%3D%22Path%201%22%20d%3D%22M9.137%2010a1.1%201.1%200%200%201%201.089%201.138v.96a6.28%206.28%200%201%201-5.814%209.606%201.35%201.35%200%200%201%20.188-1.631l.1-.1a1.191%201.191%200%200%201%201.826.149%201.1%201.1%200%200%201%20.038.056%203.8%203.8%200%200%200%203.222%201.682%203.386%203.386%200%200%200%203.44-3.56%203.2%203.2%200%200%200-3-3.356v.906a1.1%201.1%200%200%201-1.089%201.138%201.154%201.154%200%200%201-.77-.305l-2.8-2.462a1%201%200%200%201%20.008-1.509l2.81-2.42A1.138%201.138%200%200%201%209.137%2010m0%201a.161.161%200%200%200-.1.048l-2.81%202.42%202.81%202.47a.156.156%200%200%200%20.1.048c.053%200%20.089-.049.089-.138V13.92a1.339%201.339%200%200%201%20.171-.009c.119%200%20.246.009.359.009a4.251%204.251%200%200%201%204.47%204.38%204.379%204.379%200%200%201-4.44%204.56%204.768%204.768%200%200%201-4.07-2.15.21.21%200%200%200-.167-.095.2.2%200%200%200-.143.065l-.1.1a.333.333%200%200%200-.05.39%205.28%205.28%200%201%200%204.47-8.09c-.17%200-.34.01-.5.02v-1.96c0-.089-.036-.138-.089-.138%22%20transform%3D%22translate(.003)%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.65%22%20style%3D%22isolation%3Aisolate%22%2F%3E%3Cpath%20data-name%3D%22Path%204%22%20d%3D%22M5.259%2021.17a.334.334%200%200%201%20.05-.391l.1-.1a.193.193%200%200%201%20.162-.064.2.2%200%200%201%20.148.094%204.767%204.767%200%200%200%204.07%202.149%204.379%204.379%200%200%200%203.2-1.323%204.379%204.379%200%200%200%201.238-3.236%204.252%204.252%200%200%200-1.274-3.172%204.25%204.25%200%200%200-3.2-1.209%204.74%204.74%200%200%200-.53%200v1.931c0%20.139-.09.18-.19.09l-2.81-2.471%202.81-2.42c.1-.09.19-.049.19.09v1.96c.16-.01.33-.02.5-.02a5.279%205.279%200%200%201%205.188%204.3%205.281%205.281%200%200%201-3.258%205.9%205.267%205.267%200%200%201-1.929.366%205.279%205.279%200%200%201-4.465-2.474ZM1.006%209.75V1l5.82%205.819c.1.1.069.18-.07.18h-2.75L1.186%209.82a.165.165%200%200%201-.106.059c-.048%200-.074-.044-.074-.129Z%22%2F%3E%3Cpath%20data-name%3D%22Path%203%22%20d%3D%22M1%200a1%201%200%200%200-1%201v8.75a1.091%201.091%200%200%200%201.074%201.129%201.15%201.15%200%200%200%20.813-.352L4.414%208H6.75a1.085%201.085%200%200%200%20.777-1.887L1.707.293A1%201%200%200%200%201%200m0%201%205.82%205.82c.1.1.07.18-.07.18H4L1.18%209.82a.162.162%200%200%201-.106.059C1.029%209.879%201%209.834%201%209.75V1%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.65%22%20style%3D%22isolation%3Aisolate%22%20transform%3D%22translate(.003)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"},z={name:"rotate_bottom_left_corner",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M11.409%209.058A.249.249%200%200%200%2011%209.25v1.8H9.5c-3.838%200-5.55-1.866-5.55-6.05V4h1.8a.25.25%200%200%200%20.192-.411L3.5%201.016%201.059%203.589a.251.251%200%200%200%20.031.353.254.254%200%200%200%20.16.058h1.8v1c0%204.677%202.11%206.95%206.451%206.95H11v1.8a.25.25%200%200%200%20.411.191L14%2011.484Z%22%2F%3E%3Cpath%20d%3D%22m3.5%201.016%202.441%202.573a.251.251%200%200%201-.031.353.254.254%200%200%201-.161.058H3.95v1c0%204.184%201.712%206.05%205.551%206.05H11v-1.8a.25.25%200%200%201%20.25-.25.246.246%200%200%201%20.158.058L14%2011.484l-2.589%202.457a.247.247%200%200%201-.16.059.25.25%200%200%201-.251-.249v-1.8H9.5C5.16%2011.95%203.05%209.677%203.05%205V4h-1.8a.25.25%200%200%201-.191-.411Zm.726-.689A1%201%200%200%200%202.812.29l-.038.037L.333%202.9l-.021.023-.02.023A1.251%201.251%200%200%200%201.25%205h.8c0%203.627%201.293%207.95%207.451%207.95H10v.736a1.312%201.312%200%200%200%20.485%201.048%201.241%201.241%200%200%200%201.568-.027l.024-.019.022-.021%202.589-2.457a1%201%200%200%200%20.037-1.414.793.793%200%200%200-.041-.041l-2.591-2.427-.022-.021-.024-.019a1.237%201.237%200%200%200-1.569-.014A1.34%201.34%200%200%200%2010%209.333v.717h-.5c-3.274%200-4.55-1.416-4.55-5.05h.8a1.25%201.25%200%200%200%20.959-2.053l-.02-.023-.022-.024Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},T={name:"rotate_bottom_right_corner",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M3.591%209.058A.249.249%200%200%201%204%209.25v1.8h1.5c3.839%200%205.551-1.866%205.551-6.05V4h-1.8a.25.25%200%200%201-.192-.411L11.5%201.016l2.441%202.573a.251.251%200%200%201-.031.353.254.254%200%200%201-.16.058h-1.8v1c0%204.677-2.11%206.95-6.451%206.95H4v1.8a.25.25%200%200%201-.411.191L1%2011.484Z%22%2F%3E%3Cpath%20d%3D%22M13.941%203.589a.251.251%200%200%201-.031.353.254.254%200%200%201-.16.058h-1.8v1c0%204.677-2.11%206.95-6.451%206.95H4v1.8a.25.25%200%200%201-.25.25.247.247%200%200%201-.16-.059L1%2011.484l2.591-2.426A.246.246%200%200%201%203.749%209%20.25.25%200%200%201%204%209.249v1.8h1.5c3.839%200%205.551-1.866%205.551-6.05V4h-1.8a.25.25%200%200%201-.192-.411L11.5%201.016ZM8.333%202.9l-.021.023-.02.023A1.251%201.251%200%200%200%209.251%205h.8c0%203.634-1.276%205.05-4.551%205.05H5v-.717a1.34%201.34%200%200%200-.478-1.059%201.237%201.237%200%200%200-1.569.014l-.024.019-.022.021-2.591%202.427a1%201%200%200%200-.046%201.413l.042.042L2.9%2014.667l.022.021.024.019a1.241%201.241%200%200%200%201.568.027A1.312%201.312%200%200%200%205%2013.686v-.736h.5c6.158%200%207.451-4.323%207.451-7.95h.8a1.25%201.25%200%200%200%20.958-2.053l-.02-.023-.022-.024L12.226.327A1%201%200%200%200%2010.812.29l-.038.037Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},D={name:"rotate_from_bottom",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M10.251%206a.25.25%200%200%200-.177.427l1.451%201.45A5.2%205.2%200%200%201%207.5%2010.3a5.2%205.2%200%200%201-4.024-2.423l1.451-1.45A.25.25%200%200%200%204.75%206H1v3.75a.25.25%200%200%200%20.427.176l1.409-1.409A5.993%205.993%200%200%200%207.5%2011.2a5.994%205.994%200%200%200%204.665-2.686l1.409%201.409A.25.25%200%200%200%2014%209.75V6Z%22%2F%3E%3Cpath%20d%3D%22M14%206v3.75a.249.249%200%200%201-.249.25.245.245%200%200%201-.175-.074l-1.411-1.409A5.994%205.994%200%200%201%207.5%2011.2a5.993%205.993%200%200%201-4.664-2.683L1.427%209.926a.245.245%200%200%201-.175.074A.25.25%200%200%201%201%209.752V6h3.75a.25.25%200%200%201%20.25.25.255.255%200%200%201-.073.177l-1.451%201.45A5.2%205.2%200%200%200%207.5%2010.3a5.2%205.2%200%200%200%204.025-2.426l-1.451-1.45A.25.25%200%200%201%2010.251%206Zm0-1h-3.7a1.293%201.293%200%200%200-1.046.5%201.25%201.25%200%200%200%20.114%201.639l.8.8A3.822%203.822%200%200%201%207.5%209.3a3.821%203.821%200%200%201-2.668-1.364l.768-.768a1.292%201.292%200%200%200%20.389-1.09A1.251%201.251%200%200%200%204.75%205H1a1%201%200%200%200-1%201v3.674a1.3%201.3%200%200%200%201.093%201.316%201.239%201.239%200%200%200%201.041-.357l.648-.648A6.522%206.522%200%200%200%207.5%2012.2a6.522%206.522%200%200%200%204.719-2.217l.647.647a1.241%201.241%200%200%200%201.041.357A1.3%201.3%200%200%200%2015%209.674V6a1%201%200%200%200-1-1Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},$={name:"rotate_from_left",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M11%2010.251a.25.25%200%200%200-.427-.177l-1.45%201.451A5.2%205.2%200%200%201%206.7%207.5a5.2%205.2%200%200%201%202.423-4.024l1.45%201.451A.25.25%200%200%200%2011%204.75V1H7.251a.25.25%200%200%200-.177.427l1.409%201.409A5.993%205.993%200%200%200%205.8%207.5a5.994%205.994%200%200%200%202.686%204.665l-1.412%201.409a.25.25%200%200%200%20.177.426H11Z%22%2F%3E%3Cpath%20d%3D%22M11%2014H7.251A.249.249%200%200%201%207%2013.751a.245.245%200%200%201%20.074-.175l1.409-1.409A5.994%205.994%200%200%201%205.8%207.5a5.993%205.993%200%200%201%202.683-4.664L7.074%201.427A.245.245%200%200%201%207%201.252.25.25%200%200%201%207.248%201H11v3.75a.25.25%200%200%201-.25.25.255.255%200%200%201-.177-.073l-1.45-1.451A5.2%205.2%200%200%200%206.7%207.5a5.2%205.2%200%200%200%202.426%204.025l1.45-1.451a.25.25%200%200%201%20.427.177Zm1%200v-3.7a1.293%201.293%200%200%200-.495-1.046%201.25%201.25%200%200%200-1.639.114l-.8.8A3.822%203.822%200%200%201%207.7%207.5a3.821%203.821%200%200%201%201.364-2.668l.768.768a1.292%201.292%200%200%200%201.09.389A1.251%201.251%200%200%200%2012%204.75V1a1%201%200%200%200-1-1H7.326A1.3%201.3%200%200%200%206.01%201.093a1.239%201.239%200%200%200%20.357%201.041l.648.648A6.522%206.522%200%200%200%204.8%207.5a6.522%206.522%200%200%200%202.217%204.719l-.647.647a1.241%201.241%200%200%200-.357%201.041A1.3%201.3%200%200%200%207.326%2015H11a1%201%200%200%200%201-1Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},I={name:"rotate_from_right",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M6%2010.251a.25.25%200%200%201%20.427-.177l1.45%201.451A5.2%205.2%200%200%200%2010.3%207.5a5.2%205.2%200%200%200-2.423-4.024l-1.45%201.451A.25.25%200%200%201%206%204.75V1h3.75a.25.25%200%200%201%20.176.427L8.517%202.836A5.993%205.993%200%200%201%2011.2%207.5a5.994%205.994%200%200%201-2.686%204.665l1.409%201.409A.25.25%200%200%201%209.75%2014H6Z%22%2F%3E%3Cpath%20d%3D%22M6%2010.251a.25.25%200%200%201%20.427-.177l1.45%201.451A5.2%205.2%200%200%200%2010.3%207.5a5.2%205.2%200%200%200-2.423-4.024l-1.45%201.451A.25.25%200%200%201%206%204.75V1h3.75a.251.251%200%200%201%20.25.25.245.245%200%200%201-.074.175L8.517%202.836A5.993%205.993%200%200%201%2011.2%207.5a5.994%205.994%200%200%201-2.686%204.665l1.409%201.409a.245.245%200%200%201%20.074.175.249.249%200%200%201-.245.251H6ZM6%2015h3.674a1.3%201.3%200%200%200%201.316-1.093%201.241%201.241%200%200%200-.357-1.041l-.647-.647A6.522%206.522%200%200%200%2012.2%207.5a6.522%206.522%200%200%200-2.215-4.718l.648-.648a1.239%201.239%200%200%200%20.357-1.041A1.3%201.3%200%200%200%209.674%200H6a1%201%200%200%200-1%201v3.75a1.251%201.251%200%200%200%201.078%201.239%201.292%201.292%200%200%200%201.09-.389l.768-.768A3.821%203.821%200%200%201%209.3%207.5a3.822%203.822%200%200%201-1.367%202.669l-.8-.8A1.25%201.25%200%200%200%205.5%209.253%201.293%201.293%200%200%200%205%2010.3V14a1%201%200%200%200%201%201Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},M={name:"rotate_from_top",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M10.251%2011a.25.25%200%200%201-.177-.427l1.451-1.45A5.2%205.2%200%200%200%207.5%206.7a5.2%205.2%200%200%200-4.024%202.423l1.451%201.45A.25.25%200%200%201%204.75%2011H1V7.251a.25.25%200%200%201%20.427-.177l1.409%201.409A5.993%205.993%200%200%201%207.5%205.8a5.994%205.994%200%200%201%204.665%202.686l1.409-1.409a.25.25%200%200%201%20.426.174V11Z%22%2F%3E%3Cpath%20d%3D%22M10.251%2011a.25.25%200%200%201-.177-.427l1.451-1.45A5.2%205.2%200%200%200%207.5%206.7a5.2%205.2%200%200%200-4.024%202.423l1.451%201.45A.25.25%200%200%201%204.75%2011H1V7.251A.251.251%200%200%201%201.25%207a.245.245%200%200%201%20.175.074l1.411%201.409A5.993%205.993%200%200%201%207.5%205.8a5.994%205.994%200%200%201%204.665%202.686l1.409-1.409A.245.245%200%200%201%2013.749%207a.249.249%200%200%201%20.251.248V11ZM15%2011V7.326a1.3%201.3%200%200%200-1.093-1.316%201.241%201.241%200%200%200-1.041.357l-.647.647A6.522%206.522%200%200%200%207.5%204.8a6.522%206.522%200%200%200-4.718%202.215l-.648-.648a1.239%201.239%200%200%200-1.041-.357A1.3%201.3%200%200%200%200%207.326V11a1%201%200%200%200%201%201h3.75a1.251%201.251%200%200%200%201.239-1.078%201.292%201.292%200%200%200-.389-1.09l-.768-.768A3.821%203.821%200%200%201%207.5%207.7a3.822%203.822%200%200%201%202.669%201.367l-.8.8a1.25%201.25%200%200%200-.114%201.639A1.293%201.293%200%200%200%2010.3%2012H14a1%201%200%200%200%201-1Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},q={name:"rotate_top_left_corner",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M11.409%205.942A.249.249%200%200%201%2011%205.75v-1.8H9.5c-3.838%200-5.55%201.866-5.55%206.05v1h1.8a.25.25%200%200%201%20.192.411L3.5%2013.984l-2.441-2.573a.251.251%200%200%201%20.031-.353.254.254%200%200%201%20.16-.058h1.8v-1c0-4.676%202.11-6.95%206.451-6.95H11v-1.8a.25.25%200%200%201%20.411-.191L14%203.516Z%22%2F%3E%3Cpath%20d%3D%22M1.059%2011.411a.251.251%200%200%201%20.031-.353.254.254%200%200%201%20.16-.058h1.8v-1c0-4.676%202.11-6.95%206.451-6.95H11v-1.8a.25.25%200%200%201%20.25-.25.247.247%200%200%201%20.16.059L14%203.516l-2.591%202.426a.246.246%200%200%201-.158.058.25.25%200%200%201-.251-.249V3.95H9.5c-3.838%200-5.55%201.866-5.55%206.05v1h1.8a.25.25%200%200%201%20.192.411L3.5%2013.984Zm5.608.688.021-.023.02-.023A1.251%201.251%200%200%200%205.749%2010h-.8c0-3.634%201.276-5.05%204.551-5.05h.5v.717a1.34%201.34%200%200%200%20.478%201.059%201.237%201.237%200%200%200%201.569-.014l.024-.019.022-.021%202.591-2.427a1%201%200%200%200%20.046-1.413l-.042-.042L12.1.333l-.023-.021-.024-.019a1.241%201.241%200%200%200-1.568-.027A1.312%201.312%200%200%200%2010%201.314v.736h-.5c-6.157%200-7.45%204.323-7.45%207.95h-.8a1.25%201.25%200%200%200-.958%202.053l.02.023.021.023%202.441%202.573a1%201%200%200%200%201.414.038l.038-.038Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},L={name:"rotate_top_right_corner",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M3.591%205.942A.249.249%200%200%200%204%205.75v-1.8h1.5c3.839%200%205.551%201.866%205.551%206.05v1H9.25a.25.25%200%200%200-.191.411l2.441%202.573%202.441-2.573a.251.251%200%200%200-.031-.353.254.254%200%200%200-.16-.058h-1.8v-1c0-4.676-2.11-6.95-6.451-6.95H4v-1.8a.25.25%200%200%200-.411-.191L1%203.516Z%22%2F%3E%3Cpath%20d%3D%22m11.5%2013.984-2.441-2.573a.251.251%200%200%201%20.031-.353.254.254%200%200%201%20.16-.058h1.8v-1c0-4.184-1.712-6.05-5.551-6.05H4v1.8a.25.25%200%200%201-.25.25.246.246%200%200%201-.158-.058L1%203.516l2.589-2.457A.247.247%200%200%201%203.749%201%20.25.25%200%200%201%204%201.249v1.8h1.5c4.34.001%206.45%202.275%206.45%206.951v1h1.8a.25.25%200%200%201%20.191.411Zm-.726.689a1%201%200%200%200%201.414.037l.038-.037%202.441-2.573.021-.023.02-.023A1.251%201.251%200%200%200%2013.75%2010h-.8c0-3.627-1.293-7.95-7.451-7.95H5v-.736A1.312%201.312%200%200%200%204.515.266a1.241%201.241%200%200%200-1.568.027l-.024.019L2.9.333.312%202.79A1%201%200%200%200%20.275%204.2a.793.793%200%200%200%20.041.041l2.591%202.431.022.021.024.019a1.237%201.237%200%200%200%201.569.014A1.34%201.34%200%200%200%205%205.667V4.95h.5c3.275%200%204.551%201.416%204.551%205.05h-.8a1.25%201.25%200%200%200-.958%202.053l.02.023.021.023Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},F={name:"scale_horizontal",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M15.073%205.31a1.247%201.247%200%200%200-1.4-.17A1.3%201.3%200%200%200%2013%206.31V8h-1.75a1.233%201.233%200%200%200-.25.025V7.25A1.25%201.25%200%200%200%209.75%206h-.5A1.25%201.25%200%200%200%208%207.25v.775A1.233%201.233%200%200%200%207.75%208H6V6.251A1.251%201.251%200%200%200%204.75%205a1.242%201.242%200%200%200-.821.31L.308%208.778a1%201%200%200%200-.03%201.414l.03.03%203.619%203.468a1.247%201.247%200%200%200%201.4.17A1.3%201.3%200%200%200%206%2012.693V11h1.75a1.233%201.233%200%200%200%20.25-.025v.775A1.25%201.25%200%200%200%209.25%2013h.5A1.25%201.25%200%200%200%2011%2011.75v-.775a1.233%201.233%200%200%200%20.25.025H13v1.693a1.3%201.3%200%200%200%20.676%201.168%201.249%201.249%200%200%200%201.4-.171l3.619-3.468a1%201%200%200%200%20.03-1.414l-.03-.03ZM7.75%2010H5v2.75a.249.249%200%200%201-.249.25.246.246%200%200%201-.164-.062L1%209.5l3.585-3.438A.246.246%200%200%201%204.749%206%20.25.25%200%200%201%205%206.249V9h2.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25ZM10%2011.75a.25.25%200%200%201-.25.25h-.5a.25.25%200%200%201-.25-.25v-4.5A.25.25%200%200%201%209.25%207h.5a.25.25%200%200%201%20.25.25Zm4.415%201.188a.246.246%200%200%201-.164.062.249.249%200%200%201-.251-.249V10h-2.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25H14V6.251A.25.25%200%200%201%2014.25%206a.246.246%200%200%201%20.164.062L18%209.5Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%227%22%20width%3D%221%22%20height%3D%225%22%20rx%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M7.75%209H5V6.25a.251.251%200%200%200-.415-.188L1%209.5l3.585%203.438A.251.251%200%200%200%205%2012.749V10h2.75A.25.25%200%200%200%208%209.75v-.5A.25.25%200%200%200%207.75%209Zm6.665-2.938A.251.251%200%200%200%2014%206.25V9h-2.75a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25H14v2.749a.25.25%200%200%200%20.415.189L18%209.5Z%22%2F%3E%3C%2Fsvg%3E"},O={name:"scale_tlbr",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M15.907%2010.01a1.24%201.24%200%200%200-1.041.357l-1.224%201.224-1.44-1.44a1.242%201.242%200%200%200-.884-.366c-.02%200-.039%200-.058.006l.907-.907a1.251%201.251%200%200%200%200-1.768l-.283-.283a1.251%201.251%200%200%200-1.768%200l-.907.906c0-.019.006-.038.006-.058a1.242%201.242%200%200%200-.366-.881l-1.44-1.44L8.6%204.168a1.3%201.3%200%200%200%20.389-1.09A1.25%201.25%200%200%200%207.749%202H3a1%201%200%200%200-1%201v4.673A1.3%201.3%200%200%200%203.093%208.99a1.24%201.24%200%200%200%201.041-.357l1.224-1.224L6.8%208.849a1.242%201.242%200%200%200%20.884.366c.02%200%20.039%200%20.058-.006l-.907.907a1.251%201.251%200%200%200%200%201.768l.283.283a1.251%201.251%200%200%200%201.768%200l.907-.906c0%20.019-.006.038-.006.058a1.242%201.242%200%200%200%20.366.884l1.44%201.44-1.193%201.19a1.292%201.292%200%200%200-.389%201.089A1.25%201.25%200%200%200%2011.25%2017H16a1%201%200%200%200%201-1v-4.673a1.3%201.3%200%200%200-1.093-1.317Zm-8.4-1.868L5.358%206%203.427%207.926A.245.245%200%200%201%203.252%208%20.25.25%200%200%201%203%207.752V3h4.749a.25.25%200%200%201%20.177.427L6%205.358l2.142%202.147a.25.25%200%200%201%200%20.353l-.284.284a.25.25%200%200%201-.353%200Zm.672%203.318a.252.252%200%200%201-.354%200l-.282-.283a.25.25%200%200%201%200-.354l3.282-3.282a.25.25%200%200%201%20.354%200l.282.282a.25.25%200%200%201%200%20.354ZM16%2016h-4.75a.25.25%200%200%201-.176-.427l1.931-1.931-2.147-2.142a.25.25%200%200%201%200-.353l.284-.284a.25.25%200%200%201%20.353%200l2.147%202.147%201.931-1.931a.245.245%200%200%201%20.175-.079.25.25%200%200%201%20.252.248V16Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20d%3D%22M8.142%207.505%206%205.358l1.926-1.931A.25.25%200%200%200%207.749%203H3v4.749a.25.25%200%200%200%20.427.177L5.358%206l2.147%202.142a.25.25%200%200%200%20.353%200l.284-.284a.25.25%200%200%200%200-.353Zm7.431%203.569-1.931%201.931-2.142-2.147a.25.25%200%200%200-.353%200l-.284.284a.25.25%200%200%200%200%20.353l2.147%202.147-1.931%201.931a.25.25%200%200%200%20.171.427H16v-4.75a.25.25%200%200%200-.427-.176Z%22%2F%3E%3Crect%20x%3D%226.929%22%20y%3D%229.05%22%20width%3D%225.142%22%20height%3D%22.9%22%20rx%3D%22.25%22%20transform%3D%22rotate(-45%209.5%209.5)%22%2F%3E%3C%2Fsvg%3E"},P={name:"scale_trbl",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M2%2011.327V16a1%201%200%200%200%201%201h4.749a1.25%201.25%200%200%200%201.24-1.078%201.292%201.292%200%200%200-.389-1.089l-1.191-1.191%201.44-1.44a1.242%201.242%200%200%200%20.366-.884c0-.02%200-.039-.006-.058l.907.906a1.25%201.25%200%200%200%201.768%200l.283-.283a1.251%201.251%200%200%200%200-1.768l-.907-.907c.019%200%20.038.006.058.006a1.242%201.242%200%200%200%20.884-.366l1.44-1.44%201.224%201.224a1.24%201.24%200%200%200%201.041.357A1.3%201.3%200%200%200%2017%207.673V3a1%201%200%200%200-1-1h-4.75a1.25%201.25%200%200%200-1.239%201.078%201.3%201.3%200%200%200%20.389%201.09l1.191%201.19-1.44%201.442a1.242%201.242%200%200%200-.366.884c0%20.02%200%20.039.006.058l-.907-.906a1.25%201.25%200%200%200-1.768%200l-.283.283a1.251%201.251%200%200%200%200%201.768l.907.907c-.019%200-.038-.006-.058-.006a1.242%201.242%200%200%200-.884.366l-1.44%201.44-1.224-1.227a1.24%201.24%200%200%200-1.041-.357A1.3%201.3%200%200%200%202%2011.327Zm9.318-3.112a.247.247%200%200%201-.176-.073l-.284-.284a.25.25%200%200%201%200-.353l2.147-2.147-1.931-1.931A.25.25%200%200%201%2011.25%203H16v4.749a.25.25%200%200%201-.249.251.245.245%200%200%201-.175-.074L13.642%206%2011.5%208.142a.249.249%200%200%201-.182.073Zm-3.777-.038a.25.25%200%200%201%200-.354l.282-.282a.251.251%200%200%201%20.354%200l3.283%203.282a.252.252%200%200%201%200%20.354l-.283.282a.251.251%200%200%201-.354%200ZM3%2011.25a.25.25%200%200%201%20.249-.25.245.245%200%200%201%20.175.074l1.931%201.931%202.147-2.147a.25.25%200%200%201%20.353%200l.284.284a.25.25%200%200%201%200%20.353L6%2013.642l1.931%201.931a.25.25%200%200%201-.182.427H3Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20d%3D%22m10.858%207.505%202.147-2.147-1.931-1.931A.25.25%200%200%201%2011.25%203H16v4.749a.25.25%200%200%201-.427.177L13.642%206%2011.5%208.142a.25.25%200%200%201-.353%200l-.284-.284a.25.25%200%200%201%200-.353Zm-7.431%203.569%201.931%201.931%202.147-2.147a.25.25%200%200%201%20.353%200l.284.284a.25.25%200%200%201%200%20.353L6%2013.642l1.931%201.931a.25.25%200%200%201-.182.427H3v-4.75a.25.25%200%200%201%20.427-.176Z%22%2F%3E%3Crect%20x%3D%229.05%22%20y%3D%226.929%22%20width%3D%22.9%22%20height%3D%225.142%22%20rx%3D%22.25%22%20transform%3D%22rotate(-45%209.5%209.5)%22%2F%3E%3C%2Fsvg%3E"},R={name:"scale_vertical",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M13.69%2015.073a1.247%201.247%200%200%200%20.17-1.4A1.3%201.3%200%200%200%2012.69%2013H11v-1.75a1.233%201.233%200%200%200-.025-.25h.775A1.25%201.25%200%200%200%2013%209.75v-.5A1.25%201.25%200%200%200%2011.75%208h-.775A1.233%201.233%200%200%200%2011%207.75V6h1.75A1.251%201.251%200%200%200%2014%204.749a1.242%201.242%200%200%200-.31-.821L10.222.308a1%201%200%200%200-1.414-.03l-.03.03L5.31%203.927a1.247%201.247%200%200%200-.17%201.4A1.3%201.3%200%200%200%206.307%206H8v1.75a1.233%201.233%200%200%200%20.025.25H7.25A1.25%201.25%200%200%200%206%209.25v.5A1.25%201.25%200%200%200%207.25%2011h.775a1.233%201.233%200%200%200-.025.25V13H6.307a1.3%201.3%200%200%200-1.167.676%201.247%201.247%200%200%200%20.17%201.4l3.468%203.619a1%201%200%200%200%201.414.03l.03-.03ZM9%207.75V5H6.251A.249.249%200%200%201%206%204.751a.246.246%200%200%201%20.062-.164L9.5%201l3.438%203.585a.246.246%200%200%201%20.062.164.25.25%200%200%201-.249.251H10v2.75a.25.25%200%200%201-.25.25h-.5A.25.25%200%200%201%209%207.75ZM7.25%2010A.25.25%200%200%201%207%209.75v-.5A.25.25%200%200%201%207.25%209h4.5a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25Zm-1.188%204.415A.246.246%200%200%201%206%2014.251.249.249%200%200%201%206.249%2014H9v-2.75a.25.25%200%200%201%20.25-.25h.5a.25.25%200%200%201%20.25.25V14h2.75a.25.25%200%200%201%20.25.25.246.246%200%200%201-.062.164L9.5%2018Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3Crect%20x%3D%227%22%20y%3D%229%22%20width%3D%225%22%20height%3D%221%22%20rx%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M10%207.75V5h2.75a.251.251%200%200%200%20.188-.415L9.5%201%206.062%204.585A.251.251%200%200%200%206.251%205H9v2.75a.25.25%200%200%200%20.25.25h.5a.25.25%200%200%200%20.25-.25Zm2.938%206.665A.251.251%200%200%200%2012.75%2014H10v-2.75a.25.25%200%200%200-.25-.25h-.5a.25.25%200%200%200-.25.25V14H6.251a.25.25%200%200%200-.189.415L9.5%2018Z%22%2F%3E%3C%2Fsvg%3E"},B={name:"selection",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M1%201v16.4a.25.25%200%200%200%20.427.177L6%2013h6.4a.25.25%200%200%200%20.177-.427Z%22%2F%3E%3Cpath%20d%3D%22M13.246%2011.832%201.707.293A1%201%200%200%200%201%200H.75A.75.75%200%200%200%200%20.75v16.571a1.3%201.3%200%200%200%201.093%201.316%201.241%201.241%200%200%200%201.041-.357L6.414%2014H12.4a1.252%201.252%200%200%200%201.24-1.078%201.292%201.292%200%200%200-.394-1.09ZM12.4%2013H6l-4.573%204.573a.245.245%200%200%201-.175.074A.25.25%200%200%201%201%2017.4V1l11.573%2011.573A.25.25%200%200%201%2012.4%2013Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3C%2Fsvg%3E"},U={name:"text",data:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22M7.75%201a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6.136L5%203.136V10h.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H5v1.864L6.136%2014H7.75a.25.25%200%200%201%20.25.25v.5a.25.25%200%200%201-.25.25H6.071a.5.5%200%200%201-.354-.146L4.5%2013.636l-1.217%201.218a.5.5%200%200%201-.354.146H1.25a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25h1.614L4%2012.864V11h-.75a.25.25%200%200%201-.25-.25v-.5a.25.25%200%200%201%20.25-.25H4V3.136L2.864%202H1.25A.25.25%200%200%201%201%201.75v-.5A.25.25%200%200%201%201.25%201h1.679a.5.5%200%200%201%20.354.146L4.5%202.364l1.217-1.218A.5.5%200%200%201%206.071%201Zm0-1H6.071A1.493%201.493%200%200%200%205.01.439L4.5.95%203.99.439A1.493%201.493%200%200%200%202.929%200H1.25A1.252%201.252%200%200%200%200%201.25v.5A1.251%201.251%200%200%200%201.25%203h1.2l.55.551v5.474a1.252%201.252%200%200%200-1%201.225v.5a1.252%201.252%200%200%200%201%201.225v.474L2.449%2013H1.25A1.252%201.252%200%200%200%200%2014.25v.5A1.251%201.251%200%200%200%201.25%2016h1.679a1.493%201.493%200%200%200%201.061-.439l.51-.511.51.511A1.493%201.493%200%200%200%206.071%2016H7.75A1.252%201.252%200%200%200%209%2014.75v-.5A1.252%201.252%200%200%200%207.75%2013h-1.2L6%2012.449v-.474a1.252%201.252%200%200%200%201-1.225v-.5a1.252%201.252%200%200%200-1-1.225V3.551L6.551%203h1.2A1.252%201.252%200%200%200%209%201.75v-.5A1.252%201.252%200%200%200%207.75%200Z%22%20style%3D%22fill%3A%23fff%3Bopacity%3A.65%3Bisolation%3Aisolate%22%2F%3E%3Cpath%20d%3D%22M6.136%202H7.75A.25.25%200%200%200%208%201.75v-.5A.25.25%200%200%200%207.75%201H6.071a.5.5%200%200%200-.354.146L4.5%202.364%203.283%201.146A.5.5%200%200%200%202.929%201H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25h1.614L4%203.136V10h-.75a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25H4v1.864L2.864%2014H1.25a.25.25%200%200%200-.25.25v.5a.25.25%200%200%200%20.25.25h1.679a.5.5%200%200%200%20.354-.146L4.5%2013.636l1.217%201.218a.5.5%200%200%200%20.354.146H7.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25H6.136L5%2012.864V11h.75a.25.25%200%200%200%20.25-.25v-.5a.25.25%200%200%200-.25-.25H5V3.136Z%22%2F%3E%3C%2Fsvg%3E"},V=t=>`'${t}'`,H=s.iv`
    .overtake {
        position: fixed;
        z-index: 100000;
        inset-block-start: calc(50% - var(--spectrum-global-dimension-static-size-300));
        inset-inline-start: calc(50% - var(--spectrum-global-dimension-static-size-300));
    }

    * {
        touch-action: none;
    }

    hz-canvas-input {
        position: absolute;
        inset-block-start: var(--hz-header-height, 0);

        /* stylelint-disable-next-line unit-disallowed-list -- calc function needs to have unit defined */
        --canvas-input-height: calc(100% - var(--hz-header-height, 0px));
        --canvas-input-width: 100%;
    }

    #cursor-overlay {
        display: block;
        position: var(--hz-canvas-overlay-position, absolute);
        inset: 0;
    }

    /* stylelint-disable -- autofix messes up these declarations because of the unsafeCSS usage */
    #cursor-overlay.none {
        cursor: none;
    }

    #cursor-overlay.default,
    #cursor-overlay.selection {
        cursor: url(${(0,s.$m)(V(B.data))}) 1 1, default;
    }

    #cursor-overlay.dragDuplicate {
        cursor: url(${(0,s.$m)(V(m.data))}) 9 9, crosshair;
    }

    #cursor-overlay.ellipse {
        cursor: url(${(0,s.$m)(V(_.data))}) 9 9, crosshair;
    }
    #cursor-overlay.line {
        cursor: url(${(0,s.$m)(V(S.data))}) 9 9, crosshair;
    }
    #cursor-overlay.arrow {
        cursor: url(${(0,s.$m)(V(w.data))}) 9 9, crosshair;
    }

    #cursor-overlay.increaseDecrease {
        cursor: url(${(0,s.$m)(V(g.data))}) 1 1, default;
    }

    #cursor-overlay.precise {
        cursor: url(${(0,s.$m)(V(x.data))}) 9 9, crosshair;
    }

    #cursor-overlay.rectangle {
        cursor: url(${(0,s.$m)(V(C.data))}) 9 9, crosshair;
    }

    #cursor-overlay.polygon {
        cursor: url(${(0,s.$m)(V(A.data))}) 9 9, crosshair;
    }

    #cursor-overlay.artboard {
        cursor: url(${(0,s.$m)(V(p.data))}) 8 8, crosshair;
    }

    #cursor-overlay.rotate {
        cursor: url(${(0,s.$m)(V(E.data))}) 1 1, alias;
    }

    #cursor-overlay.rotateBottomLeftCorner {
        cursor: url(${(0,s.$m)(V(z.data))}) 7 7, nw-resize;
    }

    #cursor-overlay.rotateBottomRightCorner {
        cursor: url(${(0,s.$m)(V(T.data))}) 7 7, sw-resize;
    }

    #cursor-overlay.rotateTopLeftCorner {
        cursor: url(${(0,s.$m)(V(q.data))}) 7 7, ne-resize;
    }

    #cursor-overlay.rotateTopRightCorner {
        cursor: url(${(0,s.$m)(V(L.data))}) 7 7, se-resize;
    }

    #cursor-overlay.rotateFromBottom {
        cursor: url(${(0,s.$m)(V(D.data))}) 7 7, w-resize;
    }

    #cursor-overlay.rotateFromLeft {
        cursor: url(${(0,s.$m)(V($.data))}) 7 7, n-resize;
    }

    #cursor-overlay.rotateFromRight {
        cursor: url(${(0,s.$m)(V(I.data))}) 7 7, s-resize;
    }

    #cursor-overlay.rotateFromTop {
        cursor: url(${(0,s.$m)(V(M.data))}) 7 7, e-resize;
    }

    #cursor-overlay.scaleHorizontal {
        cursor: url(${(0,s.$m)(V(F.data))}) 9 9, ew-resize;
    }

    #cursor-overlay.scaleVertical {
        cursor: url(${(0,s.$m)(V(R.data))}) 9 9, ns-resize;
    }

    #cursor-overlay.scaleTopLeftBottomRight {
        cursor: url(${(0,s.$m)(V(O.data))}) 9 9, nwse-resize;
    }

    #cursor-overlay.scaleTopRightBottomLeft {
        cursor: url(${(0,s.$m)(V(P.data))}) 9 9, nesw-resize;
    }

    #cursor-overlay.text {
        cursor: url(${(0,s.$m)(V(U.data))}) 4 10, text;
    }

    #cursor-overlay.panHand {
        cursor: url(${(0,s.$m)(V(k.data))}) 11 11, grab;
    }

    #cursor-overlay.panFist {
        cursor: url(${(0,s.$m)(V(f.data))}) 11 11, grabbing;
    }

    #cursor-overlay.pointer {
        cursor: url(${(0,s.$m)(V(y.data))}) 8 3, pointer;
    }

    #cursor-overlay.move {
        cursor: url(${(0,s.$m)(V(v.data))}) 11 11, move;
    }

    #cursor-overlay.notAllowed {
        cursor: url(${(0,s.$m)(V(b.data))}) 11 11, not-allowed;
    }

    /* stylelint-enable */
    /* tablet and mobile appearance overrides */
    @media (min-width: 768px) and (max-width: 1279px) {
        #cursor-overlay {
            inset-block-end: var(--custom-hz-canvas-bottom-spacing, var(--spectrum-spacing-300));
        }
    }

    :host([is-small-app-frame]) #cursor-overlay {
        inset-block-end: var(--custom-hz-canvas-bottom-spacing, var(--spectrum-spacing-300));
    }

    .canvas-toast-container {
        z-index: 110;
        position: relative;
        inset-block-start: var(--spectrum-global-dimension-size-200);
    }
`;var N=o(987265),Z=o(989981),j=o(914847),W=o(543309),G=o(819760);class Q extends Event{constructor(){super(Q.EVENT_NAME,{bubbles:!0,composed:!0})}}Q.EVENT_NAME="hz-canvas-surface-ready";class X extends Event{constructor(){super(X.EVENT_NAME,{bubbles:!0,composed:!0})}}X.EVENT_NAME="hz-canvas-surface-first-update";class Y extends r.j{constructor(){super(...arguments),this.disableDragNDropSupport=!1,this.isSmallAppFrame=!1,this.cursorType=u.N.default,this.offsetUpdateDebounceMillis=64,this.disablePositionOffset=!1,this._editContextEnabled=!1}static get styles(){return H}async contextsLoaded(){this._canvasInputStore.setCanvasSurfaceRef(this),this._cursorStore.load(),await this._appConfig.attach(N.q);const t="EditContext"in window,e=await this._appConfig.hasFeature("edit-context-enabled");this._editContextEnabled=t&&e,this.autorun((()=>{this.isSmallAppFrame=this._platformStore.hasSmallAppFrame}))}_renderIMEHolder(){return this._editContextEnabled?s.dy`<hz-edit-context-holder
            id="textEditorInputHolder"
            ${(0,Z.i)(this._canvasInputStore.setIMEHolderRef)}
        ></hz-edit-context-holder>`:s.dy`<hz-text-input-holder
                id="textEditorInputHolder"
                ${(0,Z.i)(this._canvasInputStore.setIMEHolderRef)}
            ></hz-text-input-holder>`}async connectedCallback(){super.connectedCallback(),this._canvasInputStore?.setCanvasSurfaceRef(this)}async disconnectedCallback(){this._canvasInputStore.setCanvasSurfaceRef(void 0),super.disconnectedCallback()}updated(t){t.has("cursorType")&&t.get("cursorType")!==this.cursorType&&this.cursorOverlay&&this.cursorOverlay.offsetHeight}async firstUpdated(){this._workersStore.initialized&&!this._workersStore.isLoading&&this._webView.disconnectFromHost?.(),this._workersStore.load({useStale:!0})?.then((()=>{this.dispatchEvent(new Q)})),await this._workersStore.rendererStartedPromise(),this.dispatchEvent(new X)}async openContextualMenu(t,e,o){if(!this._contextualMenuStore)return;const i=new l.U(t.clientX,t.clientY);await(0,d.I)(e,"modal",o,{placement:"bottom-start",receivesFocus:"auto",virtualTrigger:i}),this._contextualMenuStore.openMenu(t.clientX,t.clientY),this.closeMenuCallback=()=>{this.closeContextualMenu()},this.addEventListener("sp-closed",this.closeMenuCallback),this.closeOnResize=()=>{o?.dispatchEvent(new Event("close",{bubbles:!0}))},window.addEventListener("resize",this.closeOnResize)}closeContextualMenu(){this._contextualMenuStore&&(this._contextualMenuStore.closeMenu(),this.closeOnResize&&window.removeEventListener("resize",this.closeOnResize),this.closeMenuCallback&&(this.removeEventListener("sp-closed",this.closeMenuCallback),requestAnimationFrame((()=>{j.A.hasObservers()?j.A.restoresTextEditorFocus(this._browserService.isDeviceTouchOnly):this._canvasInputStore?.restoreFocus()}))))}_handlePointerTypeChanged(t){this._platformStore.setPointerType(t.detail.value)}render(){this.cursorType=this._cursorStore.type;const t=this._browserService.isIOSDevice&&!(0,W.Xd)()&&!this.hideTextEditButton;return s.dy`
            <hz-toasting-container
                .toastsConsumers=${[G.YV.Canvas]}
                class="canvas-toast-container"
            ></hz-toasting-container>

            <div
                id="cursor-overlay"
                class=${(0,h.$)({[this.cursorType]:!0})}
            >
                ${this._renderIMEHolder()}
                ${(0,c.g)(t,(()=>s.dy`<hz-text-canvas-edit></hz-text-canvas-edit>`))}
                <hz-canvas-input
                    id="renderer"
                    class="canvas"
                    part="canvas-input"
                    .isMacLike=${this._browserService.platformIsMacLike}
                    ?disable-drag-drop=${this.disableDragNDropSupport}
                    .offsetUpdateDebounceMillis=${this.offsetUpdateDebounceMillis}
                    @hz-pointer-type-updated=${this._handlePointerTypeChanged}
                    ?disable-position-offset=${this.disablePositionOffset}
                    ?long-press-detector-enabled=${N.q.longPressDetectorEnabled.enabled}
                    ?new-drag-detection-enabled=${N.q.newDragDetectionEnabled.enabled}
                    ?new-pinch-detection-enabled=${N.q.newPinchDetectionEnabled.enabled}
                    ${(0,Z.i)(this._canvasInputStore.setCanvasInputRef)}
                >
                    <slot></slot>
                    ${this.enableCanvasOverlay?s.dy`
                              <hz-canvas-accessibility-overlay
                                  ?enableCanvasOverlayPath=${this.enableCanvasOverlayPath}
                              ></hz-canvas-accessibility-overlay>
                          `:s.Ld}
                </hz-canvas-input>
            </div>
        `}}Y.TAG_NAME="hz-canvas-surface",(0,i.__decorate)([(0,n.Cb)({type:Boolean,attribute:"disable-drag-drop"})],Y.prototype,"disableDragNDropSupport",void 0),(0,i.__decorate)([(0,a.w)("BrowserService")],Y.prototype,"_browserService",void 0),(0,i.__decorate)([(0,a.w)("WorkersStore")],Y.prototype,"_workersStore",void 0),(0,i.__decorate)([(0,a.w)("CursorStore")],Y.prototype,"_cursorStore",void 0),(0,i.__decorate)([(0,a.w)("ContextualMenuStore",{optional:!0})],Y.prototype,"_contextualMenuStore",void 0),(0,i.__decorate)([(0,a.w)("AppConfig")],Y.prototype,"_appConfig",void 0),(0,i.__decorate)([(0,a.w)("CanvasInputStore")],Y.prototype,"_canvasInputStore",void 0),(0,i.__decorate)([(0,a.w)("PlatformStore")],Y.prototype,"_platformStore",void 0),(0,i.__decorate)([(0,a.w)("CanvasWebView")],Y.prototype,"_webView",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,attribute:"is-small-app-frame",reflect:!0})],Y.prototype,"isSmallAppFrame",void 0),(0,i.__decorate)([(0,n.Cb)({type:String})],Y.prototype,"cursorType",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],Y.prototype,"enableCanvasOverlay",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],Y.prototype,"enableCanvasOverlayPath",void 0),(0,i.__decorate)([(0,n.Cb)({attribute:!1})],Y.prototype,"offsetUpdateDebounceMillis",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,attribute:"disable-position-offset"})],Y.prototype,"disablePositionOffset",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,attribute:"hide-text-edit-button"})],Y.prototype,"hideTextEditButton",void 0),(0,i.__decorate)([(0,n.IO)("#cursor-overlay")],Y.prototype,"cursorOverlay",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],Y.prototype,"_editContextEnabled",void 0)},361878:(t,e,o)=>{var i=o(244421);customElements.define("hz-canvas-input",i.r);var r=o(295029);customElements.get(r.c.TAG_NAME)||customElements.define(r.c.TAG_NAME,r.c);var a=o(139985);o(29536);customElements.get(a.a.TAG_NAME)||customElements.define(a.a.TAG_NAME,a.a);var s=o(581935);customElements.get(s.V1.TAG_NAME)||customElements.define(s.V1.TAG_NAME,s.V1)},12142:(t,e,o)=>{o(326117),o(925470);var i=o(944440),r=o(148819),a=o(903512);const s=a.iv`
    :host {
        --mod-toast-spacing-bottom-edge-to-text: var(--spectrum-spacing-300);
        --mod-toast-spacing-text-to-action-button-horizontal: var(--spectrum-spacing-100);

        --mod-toast-spacing-close-button: 0;

        --mod-toast-spacing-text-and-action-button-to-divider: 0px;

        --mod-button-border-width: 2px;

        pointer-events: all;

        --mod-toast-max-width: 576px;
        --mod-toast-min-width: 288px;
        width: clamp(var(--mod-toast-min-width), calc(50 * var(--1dvw, 1dvw)), var(--mod-toast-max-width));
    }

    ::slotted(.force-wrap) {
        white-space: normal;
    }

    .body + .buttons {
        border-inline-start: none;
    }

    .closeButton {
        margin-inline: 8px;
    }

    .content ::slotted(p) {
        margin-block: 0;
    }

    :host([variant="neutral"]) {
        background-color: var(--sx-neutral-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-gray-25);
        --mod-closebutton-icon-color-default: var(--x-transparent-white-900);
    }

    :host([variant="neutral-subdued"]) {
        background-color: var(--x-neutral-extra-subdued-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-neutral-subdued-content-color-default);
        --mod-closebutton-icon-color-default: var(--sx-neutral-background-color-default);
    }

    :host([variant="informative"]) {
        background-color: var(--x-informative-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-gray-25);
        --mod-closebutton-icon-color-default: var(--x-transparent-white-900);
    }

    :host([variant="informative-subdued"]) {
        background-color: var(--x-informative-subdued-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-neutral-content-color-default);
        --mod-closebutton-icon-color-default: var(--sx-neutral-background-color-default);
    }

    :host([variant="informative-subdued"]) .type {
        color: var(--x-informative-visual-color);
    }

    :host([variant="positive"]) {
        background-color: var(--sx-positive-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-gray-25);
        --mod-closebutton-icon-color-default: var(--x-transparent-white-900);
    }

    :host([variant="positive-subdued"]) {
        background-color: var(--x-positive-subdued-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-neutral-content-color-default);
        --mod-closebutton-icon-color-default: var(--sx-neutral-content-color-default);
    }

    :host([variant="positive-subdued"]) .type {
        color: var(--sx-positive-visual-color);
    }

    :host([variant="negative"]) {
        background-color: var(--sx-negative-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-gray-25);
        --mod-closebutton-icon-color-default: var(--x-transparent-white-900);
    }

    :host([variant="notice"]) {
        background-color: var(--x-notice-subdued-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-neutral-content-color-default);
        --mod-closebutton-icon-color-default: var(--sx-neutral-content-color-default);
    }

    :host([variant="notice"]) .type {
        color: var(--sx-notice-visual-color);
    }

    :host([variant="premium"]) {
        background: var(--sx-premium-subdued-background-color-default);
        --mod-toast-text-and-icon-color: var(--sx-static-gray-800);
        --mod-closebutton-icon-color-default: var(--sx-static-gray-800);
    }
`;var n,c=o(697038);!function(t){t.NEUTRAL="neutral",t.NEUTRAL_SUBDUED="neutral-subdued",t.INFORMATIVE="informative",t.INFORMATIVE_SUBDUED="informative-subdued",t.POSITIVE="positive",t.POSITIVE_SUBDUED="positive-subdued",t.NEGATIVE="negative",t.NOTICE="notice",t.PREMIUM="premium"}(n||(n={}));const l=Object.values(n),d=[n.NEUTRAL_SUBDUED,n.INFORMATIVE_SUBDUED,n.POSITIVE_SUBDUED,n.NOTICE,n.PREMIUM];class u extends r.F{constructor(){super(...arguments),this._sxVariant=""}static get styles(){return[...r.F.styles,s]}set sxVariant(t){if(t===this.sxVariant)return;const e=this.sxVariant;l.includes(t)?(this.setAttribute("variant",t),this._sxVariant=t):(this.removeAttribute("variant"),this._sxVariant=""),this.requestUpdate("variant",e)}get sxVariant(){return this._sxVariant}_renderIcon(t){switch(t){case n.NEUTRAL:case n.NEUTRAL_SUBDUED:case n.INFORMATIVE:case n.INFORMATIVE_SUBDUED:return a.dy` <sx-icon-info class="type"></sx-icon-info> `;case n.POSITIVE:case n.POSITIVE_SUBDUED:return a.dy` <sx-icon-checkmark-circle class="type"></sx-icon-checkmark-circle> `;case n.NEGATIVE:case n.NOTICE:return a.dy` <sx-icon-alert class="type"></sx-icon-alert> `;case n.PREMIUM:return a.dy` <sx-icon-premium class="type"></sx-icon-premium> `;default:return a.dy` <sx-icon-info class="type"></sx-icon-info> `}}_shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}_resolveCloseButtonVariant(){return d.includes(this.sxVariant)?"black":"white"}render(){return a.dy`
            ${this._renderIcon(this.sxVariant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this._shouldClose}
                    label="Close"
                    variant=${this._resolveCloseButtonVariant()}
                    class="closeButton"
                ></sp-close-button>
            </div>
        `}}u.TAG_NAME="sx-toast",(0,i.__decorate)([(0,c.Cb)({type:String,attribute:"variant",reflect:!0})],u.prototype,"sxVariant",null);var h=o(400779);class p extends h.A{static get styles(){return[h.A.styles,a.iv`
                :host,
                ::slotted(*),
                img,
                svg {
                    width: unset;
                }
            `]}render(){return(({hidden:t=!1,title:e="Info",size:o="s"}={})=>"s"===o?a.dy` <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden=${t?"true":"false"}
              role="img"
              fill="currentColor"
              aria-label=${e}
              viewBox="0 0 18 18"
          >
              <path d="M9 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
              <circle cx="9" cy="5.5" r="1.5" />
              <path
                  d="M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9Zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7Z"
              />
          </svg>`:a.dy` <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden=${t?"true":"false"}
              role="img"
              fill="currentColor"
              aria-label=${e}
              viewBox="0 0 22 22"
          >
              <path d="M11 9a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Z" />
              <circle cx="11" cy="6" r="1.5" />
              <path
                  d="M11 0C4.935 0 0 4.935 0 11s4.935 11 11 11 11-4.935 11-11S17.065 0 11 0Zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9Z"
              />
          </svg>`)({hidden:!this.label,title:this.label,size:this.size})}}customElements.define("sx-icon-info",p);class m extends h.A{static get styles(){return[h.A.styles,a.iv`
                :host,
                ::slotted(*),
                img,
                svg {
                    width: unset;
                }
            `]}render(){return(({hidden:t=!1,title:e="Checkmark Circle",size:o="s"}={})=>"s"===o?a.dy` <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden=${t?"true":"false"}
              role="img"
              fill="currentColor"
              aria-label=${e}
              viewBox="0 0 18 18"
          >
              <path
                  d="M9.016 18a8.944 8.944 0 0 1-6.797-3.087A8.94 8.94 0 0 1 .023 8.386c.164-2.398 1.253-4.59 3.065-6.17S7.217-.137 9.618.02a8.944 8.944 0 0 1 6.168 3.066c3.26 3.74 2.871 9.436-.869 12.698A8.934 8.934 0 0 1 9.016 18ZM8.992 2c-1.69 0-3.304.603-4.59 1.724a7.008 7.008 0 0 0-.675 9.876 6.95 6.95 0 0 0 4.797 2.384 6.932 6.932 0 0 0 5.079-1.707 7.008 7.008 0 0 0 .675-9.876A6.947 6.947 0 0 0 9.48 2.016 6.817 6.817 0 0 0 8.992 2Zm-.83 11.26a1 1 0 0 0 .713-.395l4.924-6.546A1 1 0 1 0 12.2 5.115L7.947 10.77 5.401 8.38a1.001 1.001 0 0 0-1.369 1.459l3.36 3.154a1.001 1.001 0 0 0 .77.267Z"
              />
          </svg>`:a.dy` <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden=${t?"true":"false"}
              role="img"
              fill="currentColor"
              aria-label=${e}
              viewBox="0 0 22 22"
          >
              <path
                  d="M11 22C4.935 22 0 17.065 0 11S4.935 0 11 0s11 4.935 11 11-4.935 11-11 11Zm0-20c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9Zm-.858 13.948a.998.998 0 0 0 .712-.395L16.8 7.648a.999.999 0 1 0-1.598-1.2L9.927 13.46l-3.242-3.045a.999.999 0 1 0-1.37 1.457l4.056 3.809a1.002 1.002 0 0 0 .77.267Z"
              />
          </svg>`)({hidden:!this.label,title:this.label,size:this.size})}}customElements.define("sx-icon-checkmark-circle",m);class g extends h.A{static get styles(){return[h.A.styles,a.iv`
                :host,
                ::slotted(*),
                img,
                svg {
                    width: unset;
                }
            `]}render(){return(({hidden:t=!1,title:e="Alert",size:o="s"}={})=>"s"===o?a.dy` <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden=${t?"true":"false"}
              role="img"
              fill="currentColor"
              aria-label=${e}
              viewBox="0 0 18 18"
          >
              <path
                  d="M9 10.5a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4.5a1 1 0 0 1-1 1Zm0 1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm8.497 3.589a3.49 3.49 0 0 0 .079-3.474L12 1.815C11.394.68 10.273 0 9 0 7.732 0 6.613.676 6.007 1.808L.416 11.88a3.485 3.485 0 0 0 .089 3.459A3.375 3.375 0 0 0 3.416 17h11.169c1.199 0 2.288-.621 2.912-1.661ZM10.244 2.77l5.575 10.05c.253.473.238 1.03-.037 1.489-.264.438-.7.69-1.197.69H3.416c-.498 0-.933-.252-1.197-.69a1.493 1.493 0 0 1-.046-1.474l5.593-10.08C8.018 2.284 8.48 2 9.001 2s.982.283 1.243.771Z"
              />
          </svg>`:a.dy` <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden=${t?"true":"false"}
              role="img"
              fill="currentColor"
              aria-label=${e}
              viewBox="0 0 22 22"
          >
              <path
                  d="M11 13a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Zm0 1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm10.39 4.3c.77-1.273.815-2.82.114-4.153L14.53 2.163C13.82.81 12.5 0 11.001 0 9.505 0 8.188.806 7.474 2.155L.49 14.912a4.18 4.18 0 0 0 .12 4.139C1.348 20.27 2.623 21 4.022 21H17.98c1.399 0 2.674-.729 3.41-1.95ZM12.77 3.11l6.972 12.734c.364.692.341 1.505-.063 2.174-.377.624-.996.982-1.7.982H4.022c-.703 0-1.322-.358-1.699-.982a2.188 2.188 0 0 1-.07-2.16L9.238 3.095C9.6 2.409 10.26 2 11.001 2s1.4.41 1.769 1.11Z"
              />
          </svg>`)({hidden:!this.label,title:this.label,size:this.size})}}customElements.define("sx-icon-alert",g);class v extends h.A{static get styles(){return[h.A.styles,a.iv`
                :host,
                ::slotted(*),
                img,
                svg {
                    width: unset;
                }
            `]}render(){return(({hidden:t=!1,title:e="Premium"}={})=>a.dy`
        <svg
            aria-hidden=${t?"true":"false"}
            aria-label=${e}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
        >
            <g clip-path="url(#clip0_3570_9278)">
                <path
                    d="M9 0C13.9706 0 18 4.02943 18 9C18 13.9706 13.9706 18 9 18C4.02943 18 0 13.9706 0 9C0 4.02943 4.02943 0 9 0Z"
                    fill="white"
                />
                <path
                    d="M13.8631 6.47762C13.6991 6.22189 13.3588 6.14743 13.1031 6.31138C12.6278 6.6309 12.1728 6.98037 11.7415 7.3577C11.4896 7.56825 11.2463 7.77128 11.0057 7.95605C10.8053 7.60155 10.6071 7.22664 10.4084 6.85066C10.099 6.2652 9.78855 5.67866 9.46843 5.16087C9.4303 5.10655 9.38303 5.05929 9.32878 5.02115C9.07042 4.83994 8.71404 4.90252 8.53277 5.16087C8.20351 5.6937 7.88553 6.29312 7.57239 6.88611C7.37903 7.25135 7.18727 7.61444 6.99499 7.95497C6.7549 7.77127 6.51265 7.56824 6.26128 7.3577C5.8289 6.98037 5.37342 6.63017 4.89753 6.30923C4.78688 6.23833 4.65476 6.20932 4.52477 6.22746C4.22371 6.26935 4.01342 6.54738 4.05533 6.84851C4.19981 7.77786 4.39103 8.69929 4.62844 9.60931C4.84624 10.4386 5.02215 11.2783 5.15535 12.1252C5.19268 12.3974 5.42525 12.6001 5.7 12.6H12.3001C12.5752 12.6002 12.8077 12.3974 12.8448 12.1251C12.9785 11.2742 13.1552 10.4306 13.3739 9.59742C13.6107 8.69177 13.8014 7.77463 13.9448 6.84958C13.9628 6.7198 13.9338 6.58787 13.8631 6.47762Z"
                    fill="url(#paint0_linear_3570_9278)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_3570_9278"
                    x1="6.03509"
                    y1="6.42386"
                    x2="13.5776"
                    y2="12.8364"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.13391" stop-color="#EB577C" />
                    <stop offset="0.92258" stop-color="#5A60D7" />
                </linearGradient>
                <clipPath id="clip0_3570_9278">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `)({hidden:!this.label,title:this.label})}}customElements.define("sx-icon-premium",v),customElements.get(u.TAG_NAME)||customElements.define(u.TAG_NAME,u);const b=a.iv`
    .force-wrap {
        white-space: normal;
    }
`;var f=o(123584);class k extends a.oi{constructor(){super(...arguments),this._closed=!1,this._variant=""}static get styles(){return b}_renderActionButton(){if(this._label||this._href)return a.dy`
                <sp-button
                    slot="action"
                    variant="overBackground"
                    quiet
                    href=${(0,f.o)(this._href)}
                    target=${(0,f.o)(this._target)}
                    @click=${this._onAction}
                >
                    ${this._renderButtonLabel()}
                </sp-button>
            `}_renderButtonLabel(){return this._forceWrap?a.dy` <span class="force-wrap">${this._label}</span> `:this._label}render(){return a.dy`
            <sp-toast ?open=${!this._closed} variant=${this._variant} @close=${(0,f.o)(this.onClose)}>
                <slot></slot>
                ${this._renderActionButton()}
            </sp-toast>
        `}_onAction(){this._closed=!0,this.onAction?.()}}k.TAG_NAME="hz-toast",(0,i.__decorate)([(0,c.SB)()],k.prototype,"_closed",void 0),(0,i.__decorate)([(0,c.Cb)({type:String,reflect:!1,attribute:"href"})],k.prototype,"_href",void 0),(0,i.__decorate)([(0,c.Cb)({type:String,reflect:!1,attribute:"target"})],k.prototype,"_target",void 0),(0,i.__decorate)([(0,c.Cb)({type:String,reflect:!1,attribute:"label"})],k.prototype,"_label",void 0),(0,i.__decorate)([(0,c.Cb)({type:String,reflect:!1,attribute:"variant"})],k.prototype,"_variant",void 0),(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!1,attribute:"force-wrap"})],k.prototype,"_forceWrap",void 0),(0,i.__decorate)([(0,c.Cb)({attribute:!1})],k.prototype,"onClose",void 0),(0,i.__decorate)([(0,c.Cb)({attribute:!1})],k.prototype,"onAction",void 0);var y=o(859526),x=o(692484),w=o(977518),_=o(941190);const S=a.iv`
    :host {
        position: fixed;
        /* --hz-toasting-container-left and --hz-toasting-container-transform are dynamic values inserted in App.ts 
        for touch Devices with smaller screens, which makes toasts full width */
        inset-inline-start: unset;
        transform: unset;
        z-index: 20;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    /* Note: display: flex for safari bug https://jira.corp.adobe.com/browse/CCEX-67250 */
    hz-toast {
        display: flex;
        pointer-events: all;
        margin: var(--spectrum-spacing-100);
    }

    hz-error-toast {
        pointer-events: all;
        margin: var(--spectrum-spacing-100);
    }
`;var A=o(148868);const C="feedback_toast_shown",E="feedback_toast_shown_count",z="feedback_seen";class T extends y.j{constructor(){super(...arguments),this.toastsConsumers=[],this._appName="",this._feedbackToastShownCount=0,this._showProvideFeedbackToast=t=>{this.windowIsClosingBound=this.windowIsClosing.bind(this,t),window.addEventListener("beforeunload",this.windowIsClosingBound);const e=this._intlStore?.formatMessage,o=e?.({id:"@hz/web-components:send-feedback-url",defaultMessage:"https://survey.adobe.com/jfe/form/SV_3qLJFRp60YN0gdM"}),i={label:e?.({id:"@hz/web-components:feedback-toast-button",defaultMessage:"Provide feedback"}),href:o,target:"_blank",callback:()=>this.feedbackCTAClicked(t,o)};this._feedbackAnalyticsStore.onViewToast(),this._toastsStore.showPersistentToast({action:i,text:e?.({id:"@hz/web-components:feedback-toast-message",defaultMessage:"Let us know what you think of {app}"},{app:this._appName}),closeCallback:()=>this.feedbackToastDismissed(t)})}}static get styles(){return S}async contextsLoaded(){const t=await this._appConfig.getSettings();this._appName=String(t.appName)}feedbackCTAClicked(t,e){const o=`${z}_${t.userId}`;this._localStorageService.setInStorage(o,!0),this._feedbackAnalyticsStore.onSendFeedback(w.R.toast),window.open(e,"_blank"),window.removeEventListener("beforeunload",this.windowIsClosing.bind(this,t))}feedbackToastDismissed(t){this._handleFeedbackToastDismissal(t),this._feedbackAnalyticsStore.onDismissToast()}windowIsClosing(t){this._handleFeedbackToastDismissal(t)}_handleFeedbackToastDismissal(t){const e=`${C}_${t.userId}`;this._localStorageService.setInStorage(e,!0,2880);const o=`${E}_${t.userId}`;this._localStorageService.setInStorage(o,this._feedbackToastShownCount?this._feedbackToastShownCount+1:1),this.windowIsClosingBound&&(window.removeEventListener("beforeunload",this.windowIsClosingBound),this.windowIsClosingBound=void 0)}get _hasCustomersSpecified(){return Boolean(this.toastsConsumers.length)}_shouldDisplayToast(t){const e=this._hasCustomersSpecified,o=Boolean(t.consumer);return e?!!o&&this.toastsConsumers.includes(t.consumer):!o}_renderToastV1(t){return t.errorVariant?a.dy`
                  <hz-error-toast
                      variant=${t.errorVariant}
                      label=${(0,f.o)(t.action?.label)}
                      target=${(0,f.o)(t.action?.target)}
                      href=${t.action?.href}
                      .onAction=${(0,f.o)(t.action?.callback)}
                      .onClose=${(0,f.o)(t.onClose)}
                  >
                      ${t.text||t.key||""}
                  </hz-error-toast>
              `:a.dy`
                  <hz-toast
                      variant=${t.variant}
                      label=${(0,f.o)(t.action?.label)}
                      target=${(0,f.o)(t.action?.target)}
                      href=${t.action?.href}
                      force-wrap=${(0,f.o)(t.action?.forceWrap)}
                      .onAction=${(0,f.o)(t.action?.callback)}
                      .onClose=${(0,f.o)(t.onClose)}
                  >
                      ${t.text||t.key||""}
                  </hz-toast>
              `}_renderToastV2(t){return a.dy`
            <sx-toast @close=${(0,f.o)(t.onClose)} variant=${t.variant} open>
                ${t.text||t.key||""}
                ${(0,A.g)(t.action?.label||t.action?.href,(()=>a.dy`
                            <sx-button
                                slot="action"
                                static=${d.includes(t.variant)?"black":"white"}
                                variant="primary"
                                treatment="outline"
                                href=${(0,f.o)(t.action?.href)}
                                target=${(0,f.o)(t.action?.target)}
                                @click=${(0,f.o)(t.action?.callback)}
                            >
                                ${(0,A.g)(t.action?.forceWrap,(()=>a.dy` <span class="force-wrap">${t.action?.label}</span> `),(()=>a.dy`${t.action?.label}`))}
                            </sx-button>
                        `))}
            </sx-toast>
        `}render(){return a.dy`
            ${(0,_.r)(this._toastsStore.toasts||[],(t=>t.text),(t=>t.useToastV2||this._hasCustomersSpecified?this._shouldDisplayToast(t)?this._renderToastV2(t):a.Ld:this._renderToastV1(t)))}
        `}_shouldShowFeedbackToast(t){if(!this._appStore.enableFeedbackToast)return!1;const e=this._localStorageService.getFromStorage(`${z}_${t.userId}`),o=this._localStorageService.getFromStorage(`${C}_${t.userId}`);return this._feedbackToastShownCount=this._localStorageService.getFromStorage(`${E}_${t.userId}`),!(e||o||this._feedbackToastShownCount&&this._feedbackToastShownCount>=2)}async showStartupToasts(){if(this._toastsStore.showStartupToasts){const t=await this._imsService.getProfile();this._shouldShowFeedbackToast(t)&&setTimeout((()=>{this._showProvideFeedbackToast(t)}),3e5)}}async firstUpdated(){return this.showStartupToasts()}}T.TAG_NAME="hz-toasting-container",(0,i.__decorate)([(0,x.w)("ToastsStore")],T.prototype,"_toastsStore",void 0),(0,i.__decorate)([(0,x.w)("IntlStore")],T.prototype,"_intlStore",void 0),(0,i.__decorate)([(0,x.w)("FeedbackAnalyticsStore")],T.prototype,"_feedbackAnalyticsStore",void 0),(0,i.__decorate)([(0,x.w)("ImsService")],T.prototype,"_imsService",void 0),(0,i.__decorate)([(0,x.w)("LocalStorageService")],T.prototype,"_localStorageService",void 0),(0,i.__decorate)([(0,x.w)("AppConfig")],T.prototype,"_appConfig",void 0),(0,i.__decorate)([(0,x.w)("AppStore")],T.prototype,"_appStore",void 0),(0,i.__decorate)([(0,c.Cb)({type:Array})],T.prototype,"toastsConsumers",void 0),customElements.get(k.TAG_NAME)||customElements.define(k.TAG_NAME,k),customElements.get(T.TAG_NAME)||customElements.define(T.TAG_NAME,T)},987265:(t,e,o)=>{o.d(e,{q:()=>a});var i=o(988543),r=o(370371);const a={accountUrl:new i.NE("accountUrl","https://stage.account.adobe.com/profile",{prod:"https://account.adobe.com/profile"}),allowVideoTranscoding:new r.XB("allow-video-transcoding"),longPressDetectorEnabled:new r.L0("long-press-detector-enabled",!0),newDragDetectionEnabled:new r.L0("new-drag-detection-enabled",!0),newPinchDetectionEnabled:new r.L0("new-pinch-detection-enabled",!0),videoLimitPerScene:new r.L0("video-limit-per-scene",!0),videoLimitPerSceneOnSafari:new r.XB("video-limit-per-scene-safari")}},706048:(t,e,o)=>{o.d(e,{p:()=>n});var i=o(374069),r=o(903512),a=o(454896),s=o(511119);class n extends((0,s.K)((0,a.x)((0,i.k)(r.oi)))){}},361092:(t,e,o)=>{o.d(e,{L:()=>r});var i=o(224478);class r{constructor(t,e,o=[]){this.host=t,this._namedMedia=e,this._reflectedQueries=o,this._onNamedMediaChange=()=>{this.host.requestUpdate()},t.addController(this)}get matches(){return this._namedMedia.matches}hostConnected(){this._namedMedia.addEventListener(i.O,this._onNamedMediaChange)}hostDisconnected(){this._namedMedia.removeEventListener(i.O,this._onNamedMediaChange)}hostUpdate(){for(const t of this._reflectedQueries)this.matches[t]&&!this.host.getAttribute?.(String(t))?this.host.setAttribute?.(String(t),""):this.host.removeAttribute?.(String(t))}}},750661:(t,e,o)=>{o.d(e,{l:()=>i});const i=(0,o(224478).z)({colorSchemeDark:"(prefers-color-scheme: dark)",reducedMotion:"(prefers-reduced-motion)",hover:"(hover: hover)",mobile:"(max-width: 767px)",minMobilePortrait:"(min-width: 320px)",minMobileLandscape:"(min-width: 475px)",tablet:"(min-width: 768px) and (max-width: 1279px)",minTabletPortrait:"(min-width: 768px)",minTabletLandscape:"(min-width: 1024px)",desktop:"(min-width: 1280px)",minDesktopS:"(min-width: 1280px)",minDesktopM:"(min-width: 1440px)"})},224478:(t,e,o)=>{o.d(e,{O:()=>a,z:()=>s});var i=o(903512),r=o(486055);const a="change";function s(t){const e={},o=new Map,s={},n=new Map,c=()=>{l.dispatchEvent(new Event(a,r.A))};for(const[r,l]of Object.entries(t)){const t=matchMedia(l);t.addEventListener(a,c),n.set(r,t),o.set(r,(0,i.$m)(l)),Object.defineProperty(s,r,{enumerable:!0,get:()=>n.get(r).matches}),Object.defineProperty(e,r,{enumerable:!0,get:()=>o.get(r)})}const l=Object.assign(new EventTarget,{matches:s,css:e});return l}},486055:(t,e,o)=>{o.d(e,{A:()=>i});const i={bubbles:!0,composed:!0}},454896:(t,e,o)=>{o.d(e,{x:()=>c});var i=o(903512),r=o(873650),a=o(186887);const s=o(852032).Z,n=[i.iv`
.spectrum-Typography .spectrum-Heading{margin-block-end:var(
--mod-heading-margin-end,var(--spectrum-heading-margin-end)
);margin-block-start:var(
--mod-heading-margin-start,var(--spectrum-heading-margin-start)
)}.spectrum-Typography .spectrum-Body{margin-block-end:var(--mod-body-margin,var(--spectrum-body-margin))}.spectrum-Typography .spectrum-Detail{margin-block-end:var(
--mod-detail-margin-end,var(--spectrum-detail-margin-end)
);margin-block-start:var(
--mod-detail-margin-start,var(--spectrum-detail-margin-start)
)}
`],c=t=>{class e extends t{}return e.styles=[r.Z,a.Z,s,n,i.iv`
                :host {
                    /* block is more common and expected; eliminates display inline pitfalls */
                    display: block;

                    /* prevent text selection by default */
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    user-select: none;
                }

                /* hidden should always work regardless of the display value set on host */
                :host([hidden]) {
                    display: none !important;
                }

                /* hide customElement tags prior to definition to avoid Flash of Undefined Custom Elements (FOUCE) */
                :not(:defined) {
                    display: none !important;
                }

                *,
                *::before,
                *::after {
                    /* border-box is more common and expected; eliminates pitfalls */
                    box-sizing: border-box;
                }

                .sr-only {
                    border: 0;
                    clip: rect(0 0 0 0);
                    height: var(--spectrum-global-dimension-static-size-10);
                    margin: calc(-1 * var(--spectrum-global-dimension-static-size-10));
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: var(--spectrum-global-dimension-static-size-10);
                }
            `],e}},511119:(t,e,o)=>{o.d(e,{K:()=>a});var i=o(944440),r=o(697038);const a=t=>{class e extends t{constructor(){super(...arguments),this._loggedI18nWarning=!1,this.formatMessage=t=>(this.underTest||this._loggedI18nWarning||(console.warn(`[i18n] Did you forget to pass formatMessage() as a property to ${this.constructor.name} or add the undertest attribute when testing?`),this._loggedI18nWarning=!0),this.underTest?String(t.defaultMessage):String(t.id)??""),this.underTest=!1}}return(0,i.__decorate)([(0,r.Cb)({attribute:!1})],e.prototype,"formatMessage",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],e.prototype,"underTest",void 0),e}},681248:(t,e,o)=>{var i=o(903512),r=o(400779);class a extends r.A{static get styles(){return[r.A.styles,i.iv`
        :host,
        ::slotted(*),
        img,
        svg {
          width: unset;
        }
      `]}render(){return(({hidden:t=!1,title:e="Chevron Left",size:o="s"}={})=>"s"===o?i.dy` <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${t?"true":"false"}"
        role="img"
        fill="currentColor"
        aria-label="${e}"
        viewBox="0 0 18 18"
      >
        <path
          d="M11.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L8.414 9l3.293-3.293a1 1 0 0 0 0-1.414Z"
        />
      </svg>`:i.dy` <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${t?"true":"false"}"
        role="img"
        fill="currentColor"
        aria-label="${e}"
        viewBox="0 0 22 22"
      >
        <path
          d="M14.207 5.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L9.914 11l4.293-4.293a1 1 0 0 0 0-1.414Z"
        />
      </svg>`)({hidden:!this.label,title:this.label,size:this.size})}}customElements.define("x-icon-chevron-left",a)},29536:(t,e,o)=>{o.r(e);var i=o(903512),r=o(400779);class a extends r.A{static get styles(){return[r.A.styles,i.iv`
        :host,
        ::slotted(*),
        img,
        svg {
          width: unset;
        }
      `]}render(){return(({hidden:t=!1,title:e="Edit",size:o="s"}={})=>"s"===o?i.dy` <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${t?"true":"false"}"
        role="img"
        fill="currentColor"
        aria-label="${e}"
        viewBox="0 0 18 18"
      >
        <path
          d="M13.873 0a4.114 4.114 0 0 0-2.919 1.206l-9.36 9.367a2.011 2.011 0 0 0-.586 1.41L1 15.99a1 1 0 0 0 .998 1.002L6.013 17a2.01 2.01 0 0 0 1.42-.586l9.384-9.385A4.122 4.122 0 0 0 18 4.129 4.121 4.121 0 0 0 13.873 0Zm0 1.999c.586 0 2.128.458 2.128 2.125a2.15 2.15 0 0 1-.622 1.513l-.098.098-3.012-3.014.1-.1c.414-.414.96-.622 1.505-.622Zm-9.19 8.312 6.172-6.175 3.012 3.014-6.175 6.176a4.996 4.996 0 0 0-3.008-3.015ZM3 12a3.01 3.01 0 0 1 3 3H3v-3Z"
        />
      </svg>`:i.dy` <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${t?"true":"false"}"
        role="img"
        fill="currentColor"
        aria-label="${e}"
        viewBox="0 0 22 22"
      >
        <path
          d="M13.531 1.449 1.304 13.684a1 1 0 0 0-.293.705L1 19.986a1 1 0 0 0 .998 1.002L7.613 21a1 1 0 0 0 .71-.293l12.255-12.26a4.981 4.981 0 0 0-.03-7 4.974 4.974 0 0 0-7.017.002ZM3 18.992 3.007 15A4.451 4.451 0 0 1 7 19l-4-.008Zm5.704-1.496a6.452 6.452 0 0 0-4.188-4.195l8.136-8.14 4.192 4.194-8.14 8.141Zm10.429-10.43-.875.875-4.192-4.195.876-.877a2.97 2.97 0 0 1 4.19 0c1.15 1.147 1.157 3.022 0 4.197Z"
        />
      </svg>`)({hidden:!this.label,title:this.label,size:this.size})}}customElements.define("x-icon-edit",a)},505162:(t,e,o)=>{var i=o(944440),r=o(697038),a=o(228532),s=o(429950),n=o(148868),c=o(903512),l=o(544233),d=o(257110),u=o(446226),h=o(405281),p=o(644886),m=o(706048),g=o(361092),v=o(750661);const b=c.iv`
    :host {
        --close-icon-size: var(--spectrum-global-dimension-static-size-500);
        --dialog-content-inner-background-color-default: var(--spectrum-gray-50);
    }

    .content {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: var(--x-custom-dialog-wrapper-content-max-height, inherit);
        outline: none;
        position: relative;
        width: 100%;
        max-width: var(--x-custom-dialog-wrapper-content-max-width, 100%);
        overflow: hidden;
        border-radius: var(--spectrum-alias-item-rounded-border-radius-m);
        background-color: var(
            --dialog-content-inner-background-color,
            var(--dialog-content-inner-background-color-default)
        );
    }

    .close {
        position: absolute;
        inset-inline-end: calc(var(--close-icon-size) / -2);
        inset-block-start: calc(var(--close-icon-size) / -2);
        width: calc(var(--close-icon-size));
        height: calc(var(--close-icon-size));
        border-radius: var(--close-icon-size);
        box-shadow: 0 0 var(--spectrum-global-dimension-static-size-125)
            var(--spectrum-global-color-static-transparent-black-300);
        transition: background-color 0.2s ease-in-out;
        background-color: var(--close-icon-background-color, var(--spectrum-global-color-gray-50));
        z-index: 100;

        /* make the focus-ring round as well */
        --mod-actionbutton-focus-indicator-border-radius: var(--close-icon-size);
    }

    .close svg {
        margin: var(--spectrum-global-dimension-static-size-125);
        height: var(--close-icon-size);
        width: var(--close-icon-size);
    }

    .is-small-app-frame .close {
        border: none;
        box-shadow: unset;
        inset-inline-end: var(--spectrum-global-dimension-static-size-200);
        inset-block-start: var(--spectrum-global-dimension-static-size-200);
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible;
        box-sizing: border-box;
        width: 100%;
        background: var(--spectrum-alias-background-color-transparent);
    }

    .modal.is-small-app-frame {
        width: 100%;
        position: relative;
        max-height: unset;
        height: unset !important;
        padding: 0;
        margin: 0 var(--spectrum-spacing-300);
    }

    .modal.no-full-screen {
        /* stylelint-disable-next-line unit-disallowed-list -- no spectrum var available */
        margin: 0 30px;
    }

    .modal.is-small-app-frame .content {
        height: inherit;
    }

    .content-inner {
        overflow: hidden auto;
    }

    .overflow-visible > .content-inner {
        overflow: visible;
    }

    .content.overflow-visible {
        overflow: visible;
    }

    .modal.is-small-app-frame .content-inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;var f=o(745111),k=o(739321);class y extends((0,u.V)((0,h.h)(m.p,["[slot]"]))){constructor(){super(...arguments),this.desktopWidth="80%",this.onDismiss=()=>{},this.maxWidth="",this.noUnderlayDismiss=!1,this.noDismissButton=!1,this.dismissable=!1,this.open=!1,this.responsive=!1,this.isOverflowVisible=!1,this._isConfirm=!1,this.transitionPromise=Promise.resolve(),this.resolveTransitionPromise=()=>{},this.underlay=!1,this._media=new g.L(this,v.l),this.animating=!1,this.handleSuccessfulClose=t=>{t.stopPropagation(),this._isConfirm=!0,this.close()},this.handleCancelClose=t=>{t.stopPropagation(),this._isConfirm=!1,this.close(),this.onDismiss()},this.handleAllowAutoDismiss=t=>{t.stopPropagation(),this.dismissable=!0},this.handleDisableAutoDismiss=t=>{t.stopPropagation(),this.dismissable=!1}}static get styles(){return[l.Z,d.Z,b]}onSlotChange({target:t}){const e=t.assignedElements({flatten:!0})[0];this._customDialog=this.getCustomDialog(e)}getCustomDialog(t){if(t?.localName===f.D)return t}focus(){if(this.shadowRoot&&this._customDialog){const t=(0,p.i)(this._customDialog);t?(t.updateComplete?t.updateComplete.then((()=>{t.focus()})):t.focus(),this.removeAttribute("tabindex")):this._customDialog.focus()}else super.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener(k.P.CLOSE_DIALOG_SUCCESS,this.handleSuccessfulClose),this.addEventListener(k.P.CLOSE_DIALOG_CANCEL,this.handleCancelClose),this.addEventListener(k.P.ALLOW_AUTO_DISMISS,this.handleAllowAutoDismiss),this.addEventListener(k.P.DISABLE_AUTO_DISMISS,this.handleDisableAutoDismiss)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(k.P.CLOSE_DIALOG_SUCCESS,this.handleSuccessfulClose),this.removeEventListener(k.P.CLOSE_DIALOG_CANCEL,this.handleCancelClose),this.removeEventListener(k.P.ALLOW_AUTO_DISMISS,this.handleAllowAutoDismiss),this.removeEventListener(k.P.DISABLE_AUTO_DISMISS,this.handleDisableAutoDismiss)}overlayWillCloseCallback(){return!this.dismissable||(this.open?(this.close(),!0):this.animating)}dismiss(){this.dismissable&&!this.noUnderlayDismiss&&(this._isConfirm=!1,this.close())}close(){this.open=!1}dispatchClosed(){this._isConfirm?this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0})):this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}handleUnderlayTransitionend(t){this.open||"visibility"!==t.propertyName||(this.resolveTransitionPromise(),this.dispatchClosed())}handleModalTransitionend(){!this.open&&this.underlay||(this.resolveTransitionPromise(),this.open||this.dispatchClosed())}handleKeyDown(t){t.stopImmediatePropagation(),"Escape"===t.code&&this.dismissable&&this.close()}update(t){t.has("open")&&void 0!==t.get("open")&&(this.animating=!0,this.transitionPromise=new Promise((t=>{this.resolveTransitionPromise=()=>{this.animating=!1,t()}}))),super.update(t)}updated(t){t.has("open")&&(this.open?this._customDialog&&"updateComplete"in this._customDialog&&"shouldManageTabOrderForScrolling"in this._customDialog&&this._customDialog.updateComplete.then((()=>{this._customDialog?.shouldManageTabOrderForScrolling()})):this.content.tabIndex=0)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.transitionPromise,t}render(){const t=this._media.matches.mobile&&this.responsive,e={width:this._media.matches.mobile?"100%":this.desktopWidth,maxWidth:this.maxWidth,...this.styleOverride||{}};return c.dy`
            ${(0,n.g)(this.underlay,(()=>c.dy`
                    <sp-underlay
                        ?open=${this.open}
                        @click=${this.dismiss}
                        @transitionend=${this.handleUnderlayTransitionend}
                    ></sp-underlay>
                `))}
            <div
                class=${(0,a.$)({modal:!0,"is-small-app-frame":t,"no-full-screen":!this.responsive})}
                style=${(0,s.V)(e)}
                @transitionend=${this.handleModalTransitionend}
            >
                ${(0,n.g)(this.dismissable&&!this.noDismissButton,(()=>c.dy`
                        <sp-action-button
                            class="close"
                            @click=${t=>this.handleCancelClose(t)}
                            data-test-id="alert-dialog-close-button"
                        >
                            <sp-icon-close
                                slot="icon"
                                size="l"
                                label=${this.formatMessage({id:"@hz/x-web-components:close-dialog",defaultMessage:"Close dialog"})}
                            ></sp-icon-close>
                        </sp-action-button>
                    `))}
                <div
                    id="dialog-content"
                    class=${(0,a.$)({content:!0,"overflow-visible":this.isOverflowVisible})}
                >
                    <div class="content-inner">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </div>
                </div>
            </div>
        `}}(0,i.__decorate)([(0,r.IO)("#dialog-content")],y.prototype,"content",void 0),(0,i.__decorate)([(0,r.Cb)({type:String,attribute:"desktop-width"})],y.prototype,"desktopWidth",void 0),(0,i.__decorate)([(0,r.Cb)({type:Function})],y.prototype,"onDismiss",void 0),(0,i.__decorate)([(0,r.Cb)({type:String,attribute:"max-width"})],y.prototype,"maxWidth",void 0),(0,i.__decorate)([(0,r.Cb)({type:Object})],y.prototype,"styleOverride",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,attribute:"no-underlay-dismiss",reflect:!0})],y.prototype,"noUnderlayDismiss",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,attribute:"no-dismiss-button",reflect:!0})],y.prototype,"noDismissButton",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],y.prototype,"dismissable",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],y.prototype,"open",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],y.prototype,"responsive",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,attribute:"is-overflow-visible",reflect:!0})],y.prototype,"isOverflowVisible",void 0),(0,i.__decorate)([(0,r.SB)()],y.prototype,"_isConfirm",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],y.prototype,"underlay",void 0);o(84824),o(614899);const x="x-custom-dialog-wrapper";customElements.get(x)||customElements.define(x,y)},745111:(t,e,o)=>{o.d(e,{D:()=>f});var i=o(944440),r=o(903512),a=o(64437),s=o(446226),n=o(405281),c=o(697038),l=o(228532),d=o(429950),u=o(148868),h=o(706048),p=o(361092),m=o(750661);const g=r.iv`
    .grid {
        display: grid;
        overflow: hidden;
        column-gap: var(--spectrum-global-dimension-size-300);
        padding-inline-end: var(--spectrum-global-dimension-size-300);
        box-sizing: border-box;
        height: 100%;
        grid-template:
            "hero heading" auto
            "hero divider" auto
            "hero content" auto
            "hero buttons" 1fr / 1fr 1fr;
    }

    .grid:lang(ja-JP) .grid:lang(ko-KR) .grid:lang(de-DE) {
        display: grid;
        overflow: auto;
        column-gap: var(--spectrum-spacing-400);
        padding-inline-end: var(--spectrum-spacing-400);
        box-sizing: border-box;
        height: 100%;
        grid-template:
            "hero heading" auto
            "hero divider" auto
            "hero content" auto
            "hero buttons" 1fr / 1fr 1fr;
    }

    /* TODO[CCEX-30059] to be removed with the proper fix */
    :host(.content-first) .grid .heading {
        display: contents;
    }

    .grid.right-hero {
        padding-inline-start: var(--spectrum-global-dimension-size-300);
        padding-inline-end: 0;
        grid-template:
            "heading hero" auto
            "divider hero" auto
            "content hero" auto
            "buttons hero" 1fr / 1fr 1fr;
    }

    :host([no-divider]) .grid {
        grid-template:
            "hero heading" auto
            "hero content" auto
            "hero buttons" 1fr / 1fr 1fr;
    }

    :host([no-divider]) .grid.right-hero {
        grid-template:
            "heading hero" auto
            "content hero" auto
            "buttons hero" 1fr / 1fr 1fr;
    }

    .grid.no-hero ::slotted(div[slot="button"]) {
        display: flex;
        justify-content: flex-end;
    }

    .grid.is-small-app-frame {
        display: flex;
        flex-direction: column;
        grid-template-areas: unset;
        column-gap: unset;
        padding: 0;
        max-height: 100%;
        overflow-y: auto;
    }

    .grid.no-hero,
    .grid.no-hero.is-small-app-frame {
        column-gap: unset;
        height: 100%;
        max-height: var(--spectrum-dialog-max-height);
        padding-inline: 0;
        grid-template:
            "heading" auto
            "divider" auto
            "content" minmax(min-content, 1fr)
            "buttons" min-content;
    }

    .grid.no-hero :is(.heading, .content, .button-group) {
        padding-inline: var(--spectrum-global-dimension-size-300);
    }

    .grid.is-small-app-frame > * {
        padding-inline: var(--mod-x-custom-dialog-mobile-inline-padding, var(--spectrum-spacing-400));
    }

    /* stylelint-disable selector-type-no-unknown -- slot selector unknown */
    .grid.is-small-app-frame ::slotted(div[slot="hero"]) {
        flex: 1;
    }

    .grid.is-small-app-frame .content {
        flex: 1;
    }

    .content[tabindex] {
        overflow: auto;
    }

    .content {
        grid-area: content;
    }

    .grid.no-hero .content {
        /* important: css grid elements get min-width: auto and min-height:
         * auto - this was making it so the content stretched to the size of
         * its content, pushing the [slot="button"] element out of view - we
         * instead want content to stretch across visible space and then be
         * scrollable when the content is too long */
        min-height: 0;
        overflow-y: auto;
    }

    .heading.is-small-app-frame {
        position: sticky;
        inset-block-start: 0;
        background-color: var(--spectrum-global-color-gray-50);
        z-index: 3;
    }

    .button-group {
        margin-block: var(--spectrum-global-dimension-size-300);
        grid-area: buttons;
    }

    ::slotted(slot="heading") {
        grid-area: heading;
    }

    ::slotted(*[slot="button"]) {
        display: flex;
        flex-flow: row wrap;
        gap: var(--spectrum-global-dimension-size-150);
    }

    .grid.buttons-end ::slotted(*[slot="button"]) {
        justify-content: end;
    }

    ::slotted(*[slot="heading"]) {
        font-weight: 900;
    }

    ::slotted([slot="hero"]) {
        background-color: var(--spectrum-global-color-gray-100);
        grid-area: hero;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    /* stylelint-enable selector-type-no-unknown */
`;function v(t,e){const o=t.assignedElements(),i=[];return o.forEach(((t,o)=>{if(t.id)i.push(t.id);else{const r=e+`-${o}`;t.id=r,i.push(r)}})),i}class b extends((0,s.V)((0,n.h)(h.p,['[slot="heading"]','[slot="hero"]','[slot="button"]']))){constructor(){super(...arguments),this._media=new p.L(this,m.l),this.buttonPlacement="left",this.heroPlacement="left",this.noDivider=!1,this.shouldManageTabOrderForScrolling=()=>{const{offsetHeight:t,scrollHeight:e}=this.contentElement;t<e?this.contentElement.tabIndex=0:this.contentElement.removeAttribute("tabindex")},this.labelledbyId="x-custom-dialog-label-"+b.instanceCount++,this.describedbyId="x-custom-dialog-description-"+b.instanceCount++}static get styles(){return[g]}get hasHeading(){return this.getSlotContentPresence('[slot="heading"]')}get hasHero(){return this.getSlotContentPresence('[slot="hero"]')}get hasButtons(){return this.getSlotContentPresence('[slot="button"]')}close(){this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0,cancelable:!0}))}renderHero(){return r.dy` <slot name="hero"></slot> `}renderHeading(){return r.dy`
            <div
                class=${(0,l.$)({heading:!0,"is-small-app-frame":this._media.matches.mobile})}
            >
                <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
                ${(0,u.g)(!this.noDivider&&this.hasHeading,(()=>r.dy`<sp-divider
                        class=${(0,l.$)({"is-small-app-frame":this._media.matches.mobile})}
                    ></sp-divider>`))}
            </div>
        `}renderContent(){return r.dy`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `}renderButtons(){return r.dy`
            <div class="button-group">
                <slot name="button"></slot>
            </div>
        `}render(){return r.dy`
            <div
                class=${(0,l.$)({grid:!0,"is-small-app-frame":this._media.matches.mobile,"no-hero":!this.hasHero,"buttons-end":"right"===this.buttonPlacement,"right-hero":"right"===this.heroPlacement})}
                style=${(0,d.V)({"grid-template-columns":this.gridColumns})}
            >
                ${this.renderHeading()} ${this.renderHero()} ${this.renderContent()}
                ${this.hasButtons?this.renderButtons():r.Ld}
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","dialog")}onHeadingSlotchange({target:t}){this.conditionLabelledby&&(this.conditionLabelledby(),delete this.conditionLabelledby);const e=v(t,this.labelledbyId);e.length&&(this.conditionLabelledby=(0,a.q)(this,"aria-labelledby",e))}onContentSlotChange({target:t}){this.conditionDescribedby&&(this.conditionDescribedby(),delete this.conditionDescribedby);const e=v(t,this.describedbyId);if(e.length&&e.length<4)this.conditionDescribedby=(0,a.q)(this,"aria-describedby",e);else if(!e.length){const t=Boolean(this.id);t||(this.id=this.describedbyId);const e=(0,a.q)(this,"aria-describedby",this.id);this.conditionDescribedby=()=>{e(),t||this.removeAttribute("id")}}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("resize",this.shouldManageTabOrderForScrolling)}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),super.disconnectedCallback()}}b.instanceCount=0,(0,i.__decorate)([(0,c.IO)(".content")],b.prototype,"contentElement",void 0),(0,i.__decorate)([(0,c.Cb)({type:String,attribute:"button-placement"})],b.prototype,"buttonPlacement",void 0),(0,i.__decorate)([(0,c.Cb)({type:String,attribute:"hero-placement"})],b.prototype,"heroPlacement",void 0),(0,i.__decorate)([(0,c.Cb)({type:String})],b.prototype,"gridColumns",void 0),(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!0,attribute:"no-divider"})],b.prototype,"noDivider",void 0);o(187374);const f="x-custom-dialog";customElements.get(f)||customElements.define(f,b)},195729:(t,e,o)=>{o(808182);var i=o(944440),r=o(903512),a=o(697038),s=o(684397),n=o(995898);const c=r.iv`
    :host([hidden]) {
        display: none !important;
    }

    :host {
        border-width: var(--spectrum-global-dimension-static-size-10);
        --label-weight: var(--x-label-weight, 800);
        /* stylelint-disable-next-line unit-disallowed-list -- no spectrum var available */
        --_min-wrap-width: var(--x-pill-button-min-wrap-width, 52px);
    }

    :host([quiet]) {
        /* stylelint-disable-next-line unit-disallowed-list -- no spectrum var available */
        --_border-radius: 999px; /* circular sides */
        --_bg-color-selected: var(--spectrum-global-color-static-gray-300);
        --_transition-duration-short: var(--spectrum-global-animation-duration-200);
        --_transition-duration-long: var(--spectrum-global-animation-duration-400);
        --_transition-timing-function: ease-in-out;

        --spectrum-alias-component-background-color-quiet-hover: var(--_bg-color-hover);
        --spectrum-alias-component-background-color-quiet-down: var(
            --spectrum-alias-component-background-color-selected-default
        );

        --spectrum-alias-component-background-color-selected-default: var(--_bg-color-selected);
        --spectrum-alias-component-background-color-quiet-selected-hover: var(
            --spectrum-alias-component-background-color-selected-default
        );
        --spectrum-alias-component-background-color-quiet-selected-key-focus: var(
            --spectrum-alias-component-background-color-selected-default
        );
        --spectrum-alias-component-background-color-quiet-selected-down: var(
            --spectrum-alias-component-background-color-selected-default
        );

        --spectrum-alias-component-border-color-quiet-selected-default: var(
            --spectrum-alias-component-background-color-selected-default
        );
        --spectrum-alias-component-border-color-quiet-selected-hover: var(
            --spectrum-alias-component-border-color-quiet-selected-default
        );
        --highcontrast-actionbutton-border-color-focus: var(
            --spectrum-alias-component-border-color-quiet-selected-default
        );
        --spectrum-alias-component-border-color-quiet-selected-down: var(
            --spectrum-alias-component-border-color-quiet-selected-default
        );

        --spectrum-alias-component-text-color-selected-default: var(--spectrum-global-color-static-gray-800);
        --spectrum-alias-component-text-color-selected-hover: var(
            --spectrum-alias-component-text-color-selected-default
        );
        --spectrum-alias-component-text-color-selected-key-focus: var(
            --spectrum-alias-component-text-color-selected-default
        );
        --spectrum-alias-component-text-color-selected-down: var(
            --spectrum-alias-component-text-color-selected-default
        );

        --spectrum-actionbutton-quiet-textonly-text-font-weight: var(--spectrum-medium-font-weight);

        --highcontrast-actionbutton-background-color-hover: var(--spectrum-alias-background-color-transparent);
        --highcontrast-actionbutton-background-color-down: var(--spectrum-alias-background-color-transparent);

        --spectrum-focus-ring-gap: var(--spectrum-global-dimension-size-10);

        transition-property: background-color, border-color;
        transition-duration: var(--_transition-duration-long);
        transition-timing-function: var(--_transition-timing-function);
        font-weight: var(--spectrum-medium-font-weight);
    }

    :host([quiet][selected]) {
        background-color: var(
            --spectrum-actionbutton-m-quiet-textonly-background-color-selected,
            var(--spectrum-alias-component-background-color-selected-default)
        );
        color: var(
            --spectrum-actionbutton-m-quiet-textonly-text-color-selected,
            var(--spectrum-alias-component-text-color-selected-default)
        );
    }

    @media (hover: hover) {
        :host([quiet]:hover) {
            background-color: var(
                --spectrum-actionbutton-m-quiet-textonly-background-color-hover,
                var(--spectrum-alias-component-background-color-quiet-hover)
            );
            color: var(
                --spectrum-actionbutton-m-quiet-textonly-text-color-hover,
                var(--spectrum-alias-component-text-color-hover)
            );
        }

        :host([quiet]) {
            --_bg-color-hover: var(--spectrum-global-color-static-gray-200);
        }
    }

    :host([quiet][active]) {
        background-color: var(
            --spectrum-actionbutton-m-quiet-textonly-background-color-down,
            var(--spectrum-alias-component-background-color-quiet-down)
        );
        color: var(
            --spectrum-actionbutton-m-quiet-textonly-text-color-down,
            var(--spectrum-alias-component-text-color-down)
        );
    }

    :host([quiet][active][selected]) {
        background-color: var(
            --spectrum-actionbutton-m-quiet-textonly-background-color-down,
            var(--spectrum-alias-component-background-color-quiet-selected-down)
        );
        color: var(
            --spectrum-actionbutton-m-quiet-textonly-text-color-down,
            var(--spectrum-alias-component-text-color-selected-down)
        );
    }

    :host(:not([iconplacement="block-start"])) {
        --mod-actionbutton-border-radius: var(--_border-radius);
        --spectrum-actionbutton-focus-ring-border-radius: var(--_border-radius);
    }

    :host([iconplacement="inline-end"]) slot[name="icon"]:not([empty]) {
        min-width: 1rem;
    }

    :host([iconplacement="inline-end"]) slot[name="icon"]::slotted([slot="icon"]) {
        margin-inline-start: calc(var(--spectrum-global-dimension-static-size-25) * -1);
    }

    :host([iconplacement="inline-end"]) {
        --mod-actionbutton-edge-to-text: var(--spectrum-global-dimension-size-130);

        display: inline-flex;
        flex-direction: row-reverse;
    }

    :host([iconplacement="block-start"]) {
        --mod-actionbutton-edge-to-text: 0;
        --spectrum-actionbutton-texticon-icon-gap: 0 !important;
        --spectrum-actionbutton-label-text-align: center;
        --spectrum-alias-component-background-color-quiet-hover: initial;
        --spectrum-alias-component-background-color-selected-default: var(
            --spectrum-alias-background-color-transparent
        );
        --highcontrast-actionbutton-background-color-focus: var(--spectrum-alias-background-color-transparent);

        flex-direction: column;
        height: auto;
        font-size: var(--spectrum-global-dimension-static-font-size-75);
    }

    slot[name="icon"]:not([empty]) {
        display: grid;
    }

    :host([iconplacement="block-start"]) slot[name="icon"]:not([empty]) {
        position: relative;
        width: 4em;
        padding-block: 0.73em;
        justify-content: center;
        border: none;
    }

    :host([iconplacement="block-start"]) slot[name="icon"]:not([empty])::before {
        content: "";
        position: absolute;
        background-color: var(--_bg-color-hover);
        inset: 0;
        opacity: 0;
        clip-path: inset(0 1em round var(--_border-radius));
        transition: clip-path var(--_transition-duration-long) var(--_transition-timing-function), opacity,
            background-color;
    }

    :host([iconplacement="block-start"]:is(:hover, :focus-visible, [selected])) slot[name="icon"]:not([empty])::before {
        clip-path: inset(0 0 round var(--_border-radius));
        opacity: 1;
    }

    :host([iconplacement="block-start"]:is([selected], [active])) slot[name="icon"]:not([empty])::before {
        background-color: var(--_bg-color-selected);
    }

    ::slotted([slot="icon"]) {
        grid-row: 1;
        grid-column: 1;
        position: relative;
        transition: opacity var(--_transition-duration-short) var(--_transition-timing-function);
        pointer-events: none;
    }

    slot[name="icon"]::slotted(div[slot="icon"]) {
        display: block;
        width: auto;
        height: var(--x-pill-button-icon-height, auto);
    }

    /* hide icon variants */
    slot[name="icon"]::slotted(:not(:first-child)) {
        opacity: 0;
    }

    /* when button is selected, hide default icon if there is a variant */
    :host([selected]) slot[name="icon"][multiple]::slotted(:first-child) {
        opacity: 0;
    }

    /* when button is selected, show icon variant */
    :host([selected]) slot[name="icon"]::slotted(:nth-child(2)) {
        opacity: 1;
    }

    slot[name="icon"]:not([empty]) + #label {
        padding-inline-start: 0;
        margin-inline-start: var(--mod-actionbutton-text-to-visual, var(--spectrum-actionbutton-text-to-visual));
    }

    :host([iconplacement="block-start"]) #label {
        margin-block-start: 0.1em;
    }

    :host([iconplacement="inline-end"]) slot[name="icon"]:not([empty]) + #label {
        margin-inline: 0 var(--spectrum-alias-clearbutton-icon-margin-m);
    }

    :host([iconplacement="block-start"]) slot[name="icon"]:not([empty]) + #label {
        margin-inline: 0;
    }

    #label {
        font-weight: var(--label-weight);
        color: transparent;
        position: relative;
        max-width: 100%;
    }

    /* In order to embolden the font weight for selected states we
       layer a pseudo element and use the bolded font weight in the normal layout.
       The pseudo element takes the place of the default label state.
    */
    #label::before {
        content: attr(data-label);

        /* Specify an alternate string for screen readers - not supported by all browsers */
        content: attr(data-label) / "";
        position: absolute;
        inset: 0 auto;
        width: 100%;
        display: block;
        text-align: center;
        color: var(
            --spectrum-actionbutton-m-quiet-textonly-text-color-down,
            var(--spectrum-alias-component-text-color-selected-down)
        );
        font-size: var(--_label-font-size);
        font-weight: var(--spectrum-actionbutton-quiet-textonly-text-font-weight);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    :host([labelwrap]) #label,
    :host([labelwrap]) #label::before {
        white-space: normal;
    }

    :host([labelwrap]) #label:lang(ko-KR)::before {
        white-space: nowrap;
        text-overflow: unset;
    }

    :host([disabled]) #label::before {
        display: none;
    }

    :host([disabled]) #label {
        color: var(--spectrum-disabled-content-color);
        font-weight: var(--spectrum-medium-font-weight); /* Prevents bold label when disabled, CCEX-59609 */
    }

    :host([selected]) #label {
        color: var(
            --spectrum-actionbutton-m-quiet-textonly-text-color-down,
            var(--spectrum-alias-component-text-color-selected-down)
        );
    }

    :host([selected]) #label::before {
        display: none;
    }

    :host([size="m"]) {
        --spectrum-actionbutton-font-size: var(--spectrum-font-size-75);
    }

    sp-badge {
        --spectrum-badge-label-spacing-horizontal: var(--spectrum-spacing-75);
        --spectrum-badge-label-spacing-vertical-bottom: var(--spectrum-spacing-50);
        --spectrum-badge-label-spacing-vertical-top: var(--spectrum-spacing-50);
        --spectrum-badge-font-size: 0.5625rem;
        --spectrum-badge-height: 1rem;
        --mod-badge-background-color-informative: var(--spectrum-indigo-900);
        margin-inline-start: var(--spectrum-spacing-75);
    }

    /* Compact style for tray-refinement FF */

    :host([compact]) {
        min-width: var(--_pill-size);
        padding: var(--_button-padding);
        padding: 0;
        border-width: 0;

        /* stylelint-disable unit-disallowed-list -- no spectrum var available */
        --_button-padding: var(--x-pill-button-padding, var(--_button-padding-block) 0);
        --_pill-size: var(--x-pill-button-pill-size, var(--spectrum-spacing-600));
        --_pill-padding: var(--x-pill-button-pill-padding, 9px);
        --_min-wrap-width: var(--x-pill-button-min-wrap-width, 48px);
        --_label-font-size: var(--x-pill-button-font-size, 11px);
        --_label-height: var(--x-pill-button-label-height, 25px);

        --_border-radius: var(--spectrum-spacing-100);
        --_button-padding-block: var(--spectrum-spacing-200);
        --_label-line-height: 14px;
        --_icon-margin-bottom: 2px;
        --_status-light-width: 6px;
        --_status-light-height: var(--spectrum-spacing-75);
        /* stylelint-enable unit-disallowed-list */
    }

    :host([compact]) slot[name="icon"]:not([empty]) {
        max-width: var(--_pill-size);
        height: var(--_pill-size);
        max-height: var(--_pill-size);
        padding: 0;
        align-items: center;
        margin-block-end: var(--_icon-margin-bottom);
    }

    :host([compact]) #label {
        width: var(--_min-wrap-width);
        max-height: var(--_label-height);
        max-width: max-content;
        min-width: min-content;
        font-size: var(--_label-font-size);
        line-height: var(--_label-line-height);
        margin-block-start: 0;
    }

    :host([compact]) #label,
    :host([compact]) #label::before {
        white-space: normal;
        overflow: visible;
    }

    #status-light-container {
        position: absolute;
        inset-block-start: calc(var(--_pill-size) - var(--_status-light-height));
        height: var(--_status-light-height);
        overflow: hidden;
    }

    sp-status-light {
        width: var(--_status-light-width);
        --mod-statuslight-dot-size: var(--_status-light-width);
        --mod-statuslight-height: var(--spectrum-spacing-100);
        --mod-statuslight-spacing-top-to-label: 0;
    }
`,l="popstate";class d{constructor(){this.back=history.back.bind(history),this.forward=history.forward.bind(history),this.go=history.go.bind(history),this._dispatchStateChangeEvent=()=>{const t=new CustomEvent(d.historyStateChangeEventName,{detail:{state:history.state}});window.dispatchEvent(t)},window.addEventListener(l,this._dispatchStateChangeEvent)}get length(){return history.length}get scrollRestoration(){return history.scrollRestoration}set scrollRestoration(t){history.scrollRestoration=t}get state(){return history.state}pushState(...t){history.pushState(...t),this._dispatchStateChangeEvent()}replaceState(...t){history.replaceState(...t),this._dispatchStateChangeEvent()}destroy(){window.removeEventListener(l,this._dispatchStateChangeEvent)}}d.historyStateChangeEventName="history-state-change";var u,h=o(148868);!function(t){t.inlineStart="inline-start",t.inlineEnd="inline-end",t.blockStart="block-start"}(u||(u={}));class p extends n.K{constructor(){super(),this.iconPlacement="inline-start",this.badge=void 0,this.labelWrap=!1,this.hasStatusLight=!1,this.compact=!1,this._isURLPatternInitType=t=>!!t&&"string"!=typeof this.selectedPattern,this._onHistoryStateChange=()=>{this._navigable&&this.requestUpdate()},this._onSlotChange=t=>{const e=t.target;"icon"===e.name?this._updateIconSlotCount():e.name||this._updateDataLabelAttr()},this.quiet=!0,new s.r(this,{callback:t=>{t.forEach((t=>{t.isIntersecting&&this._updateDataLabelAttr()}))}}),this.setAttribute("quiet","")}static get styles(){return[...super.styles,c]}get _navigable(){return this.selectedPattern||this.href}get patternMatches(){if(!this.selectedPattern&&!this.href)return!1;return new URLPattern(this.selectedPattern||this.href?.replace(/:/g,"\\:"),this._isURLPatternInitType(this.selectedPattern)?void 0:location.origin).test(location.href)}connectedCallback(){super.connectedCallback(),(async()=>{globalThis.URLPattern||await o.e(14849).then(o.bind(o,414849))})(),window.addEventListener(d.historyStateChangeEventName,this._onHistoryStateChange),this.shadowRoot.addEventListener("slotchange",this._onSlotChange)}disconnectedCallback(){window.removeEventListener(d.historyStateChangeEventName,this._onHistoryStateChange),this.shadowRoot.removeEventListener("slotchange",this._onSlotChange),super.disconnectedCallback()}get buttonContent(){const t=super.buttonContent;return this.badge&&t.push(r.dy` <sp-badge size="s"> ${this.badge} </sp-badge> `),t}async updated(t){super.updated(t),(t.has("selectedPattern")||t.has("href"))&&(this.selectedPattern||this.href)&&(this.patternMatches?(this.selected=!0,await this.updateComplete,this.dispatchEvent(new Event(p.pillButtonSelectedPatternMatchEventName,{bubbles:!0})),this.ariaCurrent="page"):(this.selected=!1,this.removeAttribute("aria-current"))),this._updateDataLabelAttr(),this._updateIconSlotCount()}_updateIconSlotCount(){if(!this._icon)return;const t=this._icon.assignedElements();0===t.length?(this._icon.setAttribute("empty",""),this._icon.removeAttribute("multiple")):t.length>1?(this._icon.setAttribute("multiple",""),this._icon.removeAttribute("empty")):(this._icon.removeAttribute("multiple"),this._icon.removeAttribute("empty"))}_updateDataLabelAttr(){this._label?.setAttribute("data-label",this.innerText??"")}_renderStatusLight(){return r.dy`
            <div id="status-light-container">
                <sp-status-light data-test-id="affordance-on" size="s" variant="indigo"></sp-status-light>
            </div>
        `}render(){return r.dy` ${super.render()} ${(0,h.g)(this.hasStatusLight,(()=>this._renderStatusLight()))} `}}p.focusedAttribute="focused",p.pillButtonSelectedPatternMatchEventName="x-pill-button-selected-pattern-match",p.getOrderIndependentSearchParamURLPatternInputString=(t,e)=>`/*\\?([^#]*&)?${t}=${e}(&.*)?#*`,(0,i.__decorate)([(0,a.Cb)({reflect:!0})],p.prototype,"iconPlacement",void 0),(0,i.__decorate)([(0,a.Cb)()],p.prototype,"selectedPattern",void 0),(0,i.__decorate)([(0,a.Cb)({type:String})],p.prototype,"badge",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],p.prototype,"labelWrap",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"has-status-light",reflect:!0})],p.prototype,"hasStatusLight",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,attribute:"compact",reflect:!0})],p.prototype,"compact",void 0),(0,i.__decorate)([(0,a.IO)("#label")],p.prototype,"_label",void 0),(0,i.__decorate)([(0,a.IO)("slot[name='icon']")],p.prototype,"_icon",void 0);const m="x-pill-button";customElements.get(m)||customElements.define(m,p)},739321:(t,e,o)=>{o.d(e,{P:()=>i});class i extends Event{constructor(t,e){super(t,{cancelable:!0,bubbles:!0,composed:!0,...e})}}i.CLOSE_DIALOG_SUCCESS="x-dialog-confirm",i.CLOSE_DIALOG_CANCEL="x-dialog-cancel",i.ALLOW_AUTO_DISMISS="x-dialog-enable-dismiss",i.DISABLE_AUTO_DISMISS="x-dialog-disable-dismiss"},139985:(t,e,o)=>{o.d(e,{a:()=>d});var i=o(944440),r=o(903512),a=o(827777),s=o(429950),n=o(859526),c=o(692484);const l=r.iv`
    :host {
        pointer-events: none;
        --button-size: var(--spectrum-thumbnail-size-300);
    }
    sp-action-button {
        z-index: 1;
        pointer-events: none;
        width: var(--button-size);
        height: var(--button-size);
        border-radius: var(--spectrum-corner-radius-200);
    }

    x-icon-edit {
        width: var(--spectrum-workflow-icon-size-50);
        height: var(--spectrum-workflow-icon-size-50);
    }

    #button-container {
        width: min-content;
        justify-self: center;
        align-self: center;
        pointer-events: auto;
        z-index: 1;
        position: fixed;
    }
`;class d extends n.j{constructor(){super(...arguments),this._canvasTranslate={x:0,y:0},this._onClick=()=>{this._textStore.submitStartEditText(),this._textStore.hasReadonlyBYOFFonts||this.dispatchEvent(new CustomEvent("text-edit-start",{composed:!0,bubbles:!0}))}}static get styles(){return l}async contextsLoaded(){await this._textStore.load(),await this._canvasStore.load(),this.autorun((()=>{this._canvasTranslate={x:this._canvasStore.tx,y:this._canvasStore.ty}}))}disconnectedCallback(){super.disconnectedCallback()}render(){if(!this._textStore.editButtonVisible||this._keyboardStylingToolbarStore.isKeyboardUp)return r.Ld;const t=this._textStore.editButtonX+this._canvasTranslate.x,e=this._textStore.editButtonY+this._canvasTranslate.y,o=d.BUTTON_SIZE/2+d.HIT_AREA_EXTRA,i=d.HIT_AREA_EXTRA,a=this._positionPaneStore.rotation.value;return r.dy`
            <div
                id="button-container"
                @click=${this._onClick}
                style=${(0,s.V)({top:`${e}px`,left:`${t}px`,padding:`${i}px`,transform:`translate(-${o}px, -${o}px) rotate(${a}deg)`})}
            >
                <sp-action-button selected emphasized size="s" id="edit-text-button">
                    <x-icon-edit slot="icon"></x-icon-edit>
                </sp-action-button>
            </div>
        `}}d.TAG_NAME="hz-text-canvas-edit",d.BUTTON_SIZE=32,d.HIT_AREA_EXTRA=16,d.DISTANCE_TO_OBJECT=32,(0,i.__decorate)([(0,c.w)("TextStore")],d.prototype,"_textStore",void 0),(0,i.__decorate)([(0,c.w)("PositionPaneStore")],d.prototype,"_positionPaneStore",void 0),(0,i.__decorate)([(0,c.w)("CanvasStore")],d.prototype,"_canvasStore",void 0),(0,i.__decorate)([(0,c.w)("KeyboardStylingToolbarStore")],d.prototype,"_keyboardStylingToolbarStore",void 0),(0,i.__decorate)([(0,a.S)()],d.prototype,"_canvasTranslate",void 0)}}]);
//# sourceMappingURL=qa-startup-app-component.5e40b3f7a3c9111e5b6f.js.map
