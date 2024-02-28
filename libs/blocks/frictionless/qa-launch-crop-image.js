"use strict";
(self.webpackChunk_hz_quick_actions_standalone_webapp = self.webpackChunk_hz_quick_actions_standalone_webapp || []).push([[63818], {
    475935: (e,t,a)=>{
        function o() {
            return new Worker(new URL(a.p + a.u(80802),a.b),{
                type: void 0
            })
        }
        a.r(t),
        a.d(t, {
            default: ()=>_
        });
        
        var s = a(433318)
          , i = a(861149)
          , d = a(102775);
        const r = ["image/jpeg", "image/jpg", "image/png"]
          , c = {
            description: (0,
            s.Em)({
                id: "@hz/quick-actions:crop-image-title-section-description",
                defaultMessage: "Transform your image into the perfect shape or size in seconds."
            }),
            title: (0,
            s.Em)({
                id: "@hz/quick-actions:crop-image-title-section-title",
                defaultMessage: "Crop image"
            }),
            quickActionId: "crop-image",
            exportEntityType: i.FE.artboard,
            exportWithUploadFileMimeType: !0
        };
        var n = a(266427)
          , p = a(104144)
          , l = a(621998)
          , u = a(961741)
          , b = a(492733);
        class g extends b.Q {
            async restorePreviousApplicationState() {
                await super.restorePreviousApplicationState(),
                this._uiSyncFrontend.submitAction({
                    type: u.I.crop,
                    payload: {
                        source: u.Q.quickAction
                    }
                })
            }
        }
        class v {
            async onActivate(e) {
                const {locator: t} = e
                  , [a,o,s,i,d,r,c] = await t.getAll(["OpenInProjectXEditorHandler", "QuickActionAuthenticationStore", "QuickActionAnalyticsStore", "QuickActionExportStore", "QuickActionSelectionStore", "SessionPersistenceService", "UISyncFrontend"])
                  , n = new g(a,s,i,d,r,c);
                o.registerApplicationStatePersistencePlugin(n),
                t.set("CropQuickActionApplicationStatePersistencePlugin", (async()=>n))
            }
        }
        v.id = "@hz/quick-action-crop-image-application-state-persistence-brick";
        const m = [n.i, v, p.R, l.V]
          , h = {
            settingValues: {
                aaTrackingServer: "stats.adobe.com",
                aaSecureTrackingServer: "sstats.adobe.com",
                bundleHash: "",
                ingestAppCategory: "WEB",
                ingestProcessingInterval: 3e3,
                analyticsBufferLimit: 500,
                "experience-edge-org-id": "9E1005A551ED61CA0A490D45@AdobeOrg",
                footerLinkSelector: "",
                isHeadless: !1,
                floodgateApiKey: "",
                floodgateClientId: "horizon-platform",
                rrEntryName: "",
                rrEntryConfigName: "",
                rrTrafficTargetName: "",
                rrBuildSha: "",
                rrConfigSyncInterval: 10,
                videoLimitPerSceneCount: 2,
                headlessOnlineSupport: !1,
                headlessDocfusionSupport: !1,
                thumbnailRenditionMaxDimension: 512,
                previewRenditionMaxDimension: 4096,
                minHeightWidthForResize: 0,
                caiAppName: "Adobe Application",
                caiAppVersion: "1.0.0",
                stockApiKey: "projectx_webapp",
                pdfExportServiceURI: "/services/v2/predict",
                pdfExportServiceId: "Feature:autotags:Service-803a2ee4eb6a4750901b4b9236f4a5e4",
                pdfExportFlexServiceId: "Feature:autotags:Service-3af5ef519b984ccba634f25e235dbd02",
                pdfExportHeadlessServiceId: "Feature:autotags:Service-3af5ef519b984ccba634f25e235dbd02",
                deviceOSsWithServerSideImageExport: [],
                ccxSearchServiceApiKey: "projectx_webapp",
                ccxAutoCompleteApiKey: "projectx_webapp",
                apiKey: "projectx_webapp",
                minHeightWidthForCropResize: 0,
                "move-crop-shape": !0,
                appApiKey: "projectx_webapp",
                docStructureServiceId: "Feature:autocrop:Service-79b7c8d2aed84c648a9ac0041838cd5a",
                googleOneTapScriptUrl: "https://accounts.google.com/gsi/client",
                docFusionCPFServiceId: "Feature:autocrop:Service-d79d59fdb3ec4e95ab1261bc4d78d8d9",
                movingElementsCPFServiceId: "Feature:autocrop:Service-642daf20bcfe44498e402365883837af",
                movingElementsCPFServiceURI: "/services/v2/predict",
                allowedSubframeOrigins: [],
                allowedParentOrigins: ["^https://localhost.adobe.com:8080$", "^https://project-x-.*.pr.hz.adobe.com$", "^https://.*.corp.adobe.com$", "^https://.*.express.adobe.com$"],
                maxSmallResourceUploadingTasks: 6,
                maxMediumResourceUploadingTasks: 2,
                maxLargeResourceUploadingTasks: 1,
                maxMobileLargeResourceUploadingTasks: 1,
                roundedTriangleIds: [],
                "spl-client-id": "projectx_webapp",
                embedEnabled: !1,
                enableHeadlessRendererNetwork: !1,
                videoExportEngineVariant: "",
                videoExportEngineTestVariant: "stg1",
                exportWorkflow: "projectx-export",
                videoExportPreProdService: "Service-39ad8b5466d24e8bb2061b2afe30bffc",
                videoExportTestEnvService: "Feature:autocrop:Service-d3c68023519a4b7fa16628c9fa779965",
                videoExportServiceURI: "/services/v2/predict",
                googleOauthClientForOneTap: "659897251118-9o0pgs1pv4scgogo291gj0h3d52eb7oq.apps.googleusercontent.com",
                personalInfoGoUrl: "https://www.adobe.com/go/ca-rights",
                ututsApiHost: "https://utut-service.adobe.com/api/ututs",
                "enable-global-virtual-slot-root": !0,
                textResourceReadinessIgnorePendingFonts: !1,
                useRGBAForUnsupportedImageFormats: !1,
                serviceURI: "services/v2/predict",
                saliencyServiceId: "Feature:autocrop:Service-e4c2aec8002943a797840574eab514eb",
                rapiMaxOutstandingRequests: 32,
                ingestAppName: "",
                clientId: "projectx_webapp",
                pdfEmbedApiClientIdPREthos: "755b9dad12ef4e86bee182a63a666054",
                pdfEmbedApiClientIdPRAWS: "4fd755b6fddf4f679fcd110261413a82",
                needsFullCanvasRenditions: !1,
                maxThumbnailRenditionHeight: 205,
                maxThumbnailRenditionWidth: 365,
                needsThumbnailRenditionLocally: !1,
                name: "crop-image"
            },
            featureValues: {
                "ingest-host-always-prod-enabled": !1,
                "use-experience-edge": !0,
                enableAnalytics: !0,
                "include-ingest-build-prefix": !0,
                "animation-text-support": !1,
                "animation-playground-presets": !1,
                "animation-playground-transitions": !1,
                "animation-handler-ecs-update-optimization": !0,
                "animation-temporary-objects-support": !1,
                "animation-transition-dip-to-black-white": !1,
                "animation-transition-wipe": !1,
                "animation-aggregated-transform-cache": !0,
                "animation-archetype-keyed-child": !1,
                "animation-fractional-durations-enabled": !0,
                "animation-filter-grayscale": !1,
                "enable-media-readiness-monitor": !0,
                "animation-multiselect-preview-refactor-enabled": !1,
                "animation-dynamic-media-resource-loading": !1,
                "animation-decouple-media-dependencies": !0,
                "animation-reset-media-on-invalidate": !1,
                "artboard-sequence-enabled": !0,
                "page-presence-switch-to-page": !1,
                "optimize-video-experience-for-edu": !1,
                "switch-video-rendition": !0,
                "two-pass-thumbnail-generation-enabled": !0,
                "video-decoder-recovery": !0,
                "video-decoder-prewarm": !0,
                "video-poster-generation-enabled": !0,
                "video-resourceOptimizer-enabled": !0,
                "video-playback-with-increased-buffering": !1,
                "video-support-enabled": !0,
                "audio-support-enabled": !0,
                "move-from-personal-storage-to-space": !1,
                "enable-path-editing": !1,
                "canvas-accessibility-enabled": !1,
                "on-canvas-measurements": !1,
                "debug-component-transform": !1,
                background: !0,
                "background-final": !0,
                "background-perf": !0,
                "drag-drop-image-fill": !0,
                "scale-transform-utils": !1,
                "scale-strokes": !0,
                "mobile-show-both-exterior-decorations": !0,
                "brick-activate-perf": !1,
                "cai-sidecars": !0,
                "pdf-export-request-data-as-zip": !1,
                "indemnify-firefly-assets": !0,
                "download-parallel-processing": !0,
                "pdf-export-sensei-image-download": !1,
                "pdf-export-use-cai": !1,
                "pdf-export-cai-add-ingredients-to-manifest": !1,
                "pdf-export-use-flex": !1,
                "pdf-export-use-headless": !1,
                "server-export-on-client-for-mobile": !0,
                disableAutoDocEngine: !1,
                "brand-library-color-picker": !0,
                "color-picker-theme-brands": !1,
                "creative-captions": !1,
                "creative-captions-use-simulated-service": !1,
                "creative-captions-log-debug-info": !1,
                "crop-smart-resize": !0,
                "crop-editor-video": !0,
                "session-based-crop": !1,
                "linked-assets-crop": !0,
                discoveryContextEnabled: !1,
                "istos-edge-browser-enabled": !0,
                "synthetic-eye-dropper": !0,
                filters: !1,
                "image-effects-live-preview": !1,
                "image-effects-color-dependent": !1,
                "filter-shadow": !1,
                "design-assets": !0,
                "execute-filter-task-using-local-resources": !1,
                "cutout-using-dcx": !0,
                "neural-firefly-premium-metering": !0,
                "on-demand-action-handlers": !1,
                "explore-mobile-filters": !0,
                "category-filter-and-top-search-keywords": !1,
                "logged-out-user-support": !0,
                "use-custom-sign-in": !1,
                "use-prod-inspire-content": !1,
                "use-inspire-panel-data-optimisations": !0,
                "templates-panel-filters-styles": !0,
                "templates-panel-filters-moods": !0,
                "virtualize-collections": !0,
                "suggested-query": !0,
                "template-filters-phase-3": !1,
                "use-poor-mans-lazy-image-loading": !0,
                "defer-video-rendition-load": !0,
                "analytics-search-id-and-rank": !0,
                "use-light-template-api": !0,
                "use-content-security-policy": !0,
                "use-thumbnail-2.0": !1,
                "increase-premium-mix": !1,
                "enable-premium-preview-for-user-badge": !0,
                "resolve-collection-via-collection-id": !1,
                "inspire-favoriting": !1,
                "use-intl-dev-tools": !1,
                "ld-uuid-migration-enabled": !1,
                "linked-assets-in-personal-storage": !1,
                "show-all-locales": !0,
                "use-locale-negotiator": !0,
                "lock-unlock": !0,
                "logo-maker": !1,
                "use-bitmap-logos": !1,
                "pdf-export-list-and-bullet-support": !0,
                "pdf-export-oneate-settings-support": !1,
                "pdf-export-language-profile-support": !0,
                "pdf-export-rasterize-neural-text": !1,
                "pdf-export-neural-text-outline-underline": !0,
                "pdf-export-text-type-property": !1,
                "moving-elements": !1,
                "android-back-navigation": !0,
                "neural-schema-load-from-local": !1,
                "neural-uds-session-disabled": !1,
                "neural-effects-multilanguage-prompt-ui": !0,
                "neural-features-metering": !0,
                "neural-genfill-metering": !0,
                "neural-gen-fill-disable-restore": !1,
                "neural-features-metering-show-debug": !1,
                "neural-text-color-style": !0,
                "neural-legal-ga-update": !0,
                "neural-image-refresh-feature": !1,
                "neural-genfill-beta": !1,
                "text-to-image-mobile-home": !0,
                "neural-text-mobile-home": !0,
                "mobile-ai-quick-starts": !1,
                "mobile-app-genfill": !1,
                "mobile-web-genfill": !1,
                "mobile-web-genfill-send-to-app": !0,
                "mobile-genfill-brush-first": !1,
                "neural-text-mobile-inspirations": !0,
                "neural-text-mobile-variations": !1,
                "neural-text-inspirations-div-scroll": !0,
                "neural-image": !0,
                "neural-gen-fill": !0,
                "gen-fill-global-context": !0,
                "gen-fill-mobile-snapshot-generator": !0,
                "gen-fill-mobile-low-res-thumbnails": !0,
                "neural-image-external-integration": !0,
                "gc-on-duplicate-document-open": !0,
                "scale-object-pinch": !1,
                "new-autocenter-zoom": !0,
                "paths-enabled": !0,
                "path-geometry-maker-preallocation": !0,
                "perf-monitor-mark-all-actions": !1,
                "tablet-mobile-view": !0,
                "prevent-mobile-ui-on-web-desktop": !0,
                "polygon-edit-decorations": !1,
                "mixed-asset-replace": !0,
                "mixed-linked-asset-replace": !0,
                "gltf-enabled": !1,
                "dev-disable-resource-deduplication": !1,
                "contextual-track-thumbnails-enabled": !1,
                "import-mixed-assets-as-scenes": !0,
                "sceneline-audio-gaps-enabled": !1,
                "sceneline-seek-back-behavior-enabled": !1,
                "delete-old-offscreen-artwork": !0,
                "sceneline-thumbnails-enabled": !1,
                "video-contextual-thumbnails-caching-enabled": !0,
                videoLoadOnUIEnabled: !1,
                "single-scene-selection-on-media-upload": !0,
                "selector-engine-validation": !1,
                "basic-shapes-phase2": !0,
                "basic-shapes-phase3": !0,
                "basic-shapes-phase3-1": !0,
                "horizon-shapes-import": !1,
                "icons-percentage": !1,
                "spl-clio-image-stage1": !1,
                "spl-clio-glyph-stage1": !1,
                "spl-diffusion-cpf": !0,
                "spl-diffusion-ff-enabled": !1,
                "spl-neural-effects-multilanguage-prompt": !0,
                "use-prod-task-config": !1,
                "home-note-tasks": !0,
                "home-line-tasks": !0,
                "mobile-text-action-bar": !0,
                "mobile-text-selection-handles": !0,
                "text-in-edit-decorations": !0,
                "text-layer-thumbnails": !0,
                "circular-text-phase-1": !0,
                "text-autoselection": !0,
                "text-locales-ui-enabled": !1,
                "text-font-loading-spinner-decoration": !1,
                "filter-shape-effect": !1,
                "filter-outline": !0,
                "dynamic-text-layout-controls": !0,
                "enterprise-font-upload-modal": !0,
                opentelemetry: !0,
                betaAccessRequestDialog: !0,
                "rich-tooltips-enabled": !1,
                "onboarding-coachmark-enabled": !1,
                "future-onboarding-coachmark": !1,
                "feedback-toast": !1,
                "settings-dialog": !1,
                "ui-scale-change": !1,
                contributors: !1,
                "magic-text-ui-enabled": !0,
                "space-document-one-off-invites": !0,
                "reuse-authoring-worker": !0,
                "reuse-renderer-worker": !0,
                "tenant-dispatching-viewport-update": !1,
                "doc-model-incompatibility-redirect-enabled": !1,
                "debug-native-renderer": !1,
                "upgrade-with-coeditors-redirect-enabled": !1,
                "is-space-info-enabled": !1,
                "is-clipboard-service-enabled": !0,
                "get-les-asset-status-enabled": !1,
                "internal-stub-authoring": !1,
                "internal-stub-renderer": !1,
                "xlarge-cluster": !0,
                "gif-small-cpu-cluster": !1,
                "use-png-template-renditions": !1,
                "use-webp-for-all-template-renditions": !0,
                uss_ff_000000: !1,
                uss_ff_000011: !1,
                uss_ff_000012: !1,
                uss_ff_000013: !1,
                uss_ff_000016: !1,
                uss_ff_000017: !1,
                uss_ff_000020: !1,
                "video-import-support": !1,
                "drag-drop-video-replace": !0,
                "upload-video-enabled": !0,
                "scene-line-feature-enabled": !0,
                "mobile-async-local-transcode-enabled": !1,
                "video-limit-per-scene-safari": !1,
                "long-press-detector-enabled": !0,
                "new-drag-detection-enabled": !0,
                "new-pinch-detection-enabled": !0,
                "video-limit-per-scene": !0,
                "is-beta-user": !0,
                hz_pjx_autocomplete_task_qa_enabled: !1,
                seamless_upgrade_logged_in: !0,
                seamless_upgrade_logged_out: !1,
                "mobile-push-notification": !0,
                "adobe-account-deletion": !0,
                "mobile-language-region-switcher": !1,
                "mobile-tray-reduced-motion": !1,
                "is-native-paywall-enabled": !1,
                "is-mweb-paywall-enabled": !1,
                "paywall-headline-test": !1,
                "x-tray-debug-mode": !1,
                "neural-text-debug": !0,
                "text-effect-genai-consistency": !0,
                "text-effect-genai-vibrancy": !0,
                "neural-text-cache": !0,
                "neural-text-enable-cai-signing-on-mobile": !1,
                "neural-text-drop-outdated-glyphs": !0,
                "neural-shape-effects": !1,
                "load-tooltips-on-demand": !1,
                "cc-learn-integration": !0,
                "learn-tab-categories": !0,
                "learn-tab-ambassador-content": !1,
                "draggable-onboarding-popover": !1,
                "cc-learn-panel": !1,
                "learn-panel-creative-exercises": !1,
                "timeline-tour-enabled": !0,
                "mobile-timeline-tour-enabled": !1,
                "product-tour-enabled": !0,
                "community-report-enabled": !0,
                "add-ons": !1,
                "enable-mobile-add-ons": !1,
                "add-on-dev-api": !1,
                "add-on-script-runtime-enabled": !1,
                "replace-asset-flow": !1,
                "text-hyperlink": !1,
                "keyboard-styling-toolbar": !0,
                "cursor-animation": !0,
                "ios-split-editor": !1,
                "internal-force-split-editor": !1,
                "internal-auto-open-canvas-view": !1,
                "ios-split-editor-supported": !1,
                "perf-monitor-use-native-bridge": !0,
                "async-default-font-preload": !0,
                "text-auth-params-enabled": !1,
                "text-paragraph-direction-enabled": !1,
                "text-perf": !0,
                "rectangle-perf": !0,
                "smart-guides-new-look": !1,
                "display-size-fitting": !1,
                "drag-replace-delay": !0,
                "area-based-background-replace": !0,
                "vertical-scrolling-enabled": !1,
                "vertical-scrolling-forced-enabled": !1,
                checkerboard: !1,
                "media-decoder-lifetime-control-support": !0,
                "sceneline-group-trim-enabled": !0,
                "limit-mobile-playback-frame-rate": !1,
                "sceneline-transition-effect-support": !0,
                "resource-perf-logging-system": !1,
                "yuva-conversion-enabled": !0,
                "yuva-conversion-enabled-lossless": !1,
                "image-saliency-enabled": !1,
                flip: !1,
                "rapi-priority-header-enabled": !1,
                "lower-stock-image-allowance": !1,
                "collate-page-colors-enabled": !1,
                "community-report-ga-toggle": !1,
                "language-switcher-enabled": !1,
                "preload-quick-action-editor": !0,
                "quick-action-download-in-projectx-enabled": !1,
                "quick-action-tablet-mobile-view": !1,
                "execute-multiple-asset-processors": !1,
                "clipboard-paste-listener-disabled": !0,
                "video-quick-action": !1,
                "disable-user-storage": !0,
                "document-should-have-white-background": !1,
                "allow-video-transcoding": !0,
                "bypass-video-import-checks": !1,
                "hdr-file-support-enabled": !0,
                "afa-support-transparent-background": !0,
                "quick-actions-native-import-enabled": !1,
                "auto-select-node-in-projectx-deeplink": !0,
                "use-new-pdf-view-sdk": !0,
                hz_pjx_use_sam_rendition_api: !0,
                "animate-from-audio-simulated-TUS": !1,
                "caption-video-show-dev-styles": !1,
                "quick-action-ratings-in-projectx-enabled": !0,
                "quick-action-ratings-in-standalone-enabled": !0,
                "animate-from-audio-show-test-assets": !1,
                "anonymous-handoff-to-loe-editor": !1,
                "anonymous-download": !1,
                "embed-approval-workflow-enabled": !1,
                "qr-code-acmp-url-moderation": !1,
                "experiment-quick-action-aa-test": !1,
                "override-default-otel-config": !1,
                "use-webcodec-for-video-decoding": !1,
                "filter-shape-effect-ui-enabled": !1,
                "image-filter-analytics": !1,
                "neural-text": !1,
                "continue-crop-edit-on-canvas-actions": !0
            },
            envSettings: {
                ingestHost: {
                    default: "https://cc-api-data-stage.adobe.io",
                    envOverrides: {
                        prod: "https://cc-api-data.adobe.io"
                    }
                },
                ingestHostAlwaysProd: {
                    default: "https://cc-api-data.adobe.io",
                    envOverrides: {}
                },
                "experience-edge-config-id": {
                    default: "0868df6f-7d83-4bcd-a0f4-5656d4f0145a",
                    envOverrides: {
                        prod: "265427cd-70f8-4937-960a-5e42cc316895"
                    }
                },
                otDomainId: {
                    default: "7a5eb705-95ed-4cc4-a11d-0cc5760e93db-test",
                    envOverrides: {
                        prod: "7a5eb705-95ed-4cc4-a11d-0cc5760e93db"
                    }
                },
                privacyUrl: {
                    default: "https://www.stage.adobe.com/etc.clientlibs/globalnav/clientlibs/base/privacy-standalone.js",
                    envOverrides: {
                        local: "https://www.stage.adobe.com/etc.clientlibs/globalnav/clientlibs/base/privacy-standalone.js",
                        prod: "https://www.adobe.com/etc.clientlibs/globalnav/clientlibs/base/privacy-standalone.js"
                    }
                },
                floodgateFeaturesUrl: {
                    default: "https://p13n-stage.adobe.io/fg/api/v3/feature",
                    envOverrides: {
                        prod: "https://p13n.adobe.io/fg/api/v3/feature"
                    }
                },
                caiClaimsSignerUrl: {
                    default: "https://cai-stage.adobe.io",
                    envOverrides: {
                        prod: "https://cai.adobe.io"
                    }
                },
                caiManifestStoragePostUrl: {
                    default: "https://cai-msb-stage.adobe.io",
                    envOverrides: {
                        prod: "https://cai-msb.adobe.io"
                    }
                },
                caiManifestStorageGetUrl: {
                    default: "https://cai-manifests-stage.adobe.com",
                    envOverrides: {
                        prod: "https://cai-manifests.adobe.com"
                    }
                },
                pdfExportEndpoint: {
                    default: "https://sensei-stage.adobe.io",
                    envOverrides: {
                        prod: "https://sensei.adobe.io"
                    }
                },
                senseiHostUrlForRegionAmericas: {
                    default: "https://sensei-stage-va6.adobe.io",
                    envOverrides: {
                        prod: "https://sensei-va6.adobe.io"
                    }
                },
                senseiHostUrlForRegionEMEA: {
                    default: "https://sensei-stage-irl1.adobe.io",
                    envOverrides: {
                        prod: "https://sensei-irl1.adobe.io"
                    }
                },
                senseiHostUrlForRegionAPAC: {
                    default: "https://sensei-stage-jpn3.adobe.io",
                    envOverrides: {
                        prod: "https://sensei-jpn3.adobe.io"
                    }
                },
                ccSearchRootURL: {
                    default: "https://cchome-stage.adobe.io/srch",
                    envOverrides: {
                        dev: "https://cchome-stage.adobe.io/srch",
                        stage: "https://cchome-stage.adobe.io/srch",
                        prod: "https://cchome.adobe.io/srch"
                    }
                },
                ccxAutoCompleteURL: {
                    default: "https://adobesearch-atc-stage-ue1.adobe.io/uss/v3/autocomplete",
                    envOverrides: {
                        dev: "https://adobesearch-atc-stage-ue1.adobe.io/uss/v3/autocomplete",
                        stage: "https://adobesearch-atc-stage-ue1.adobe.io/uss/v3/autocomplete",
                        prod: "https://adobesearch-atc.adobe.io/uss/v3/autocomplete"
                    }
                },
                contentProductionEnv: {
                    default: "stage",
                    envOverrides: {
                        dev: "stage",
                        prod: "prod",
                        stage: "stage"
                    }
                },
                ccapCPFServiceUrl: {
                    default: "https://sensei-stage.adobe.io",
                    envOverrides: {
                        dev: "https://sensei-stage.adobe.io",
                        stage: "https://sensei-stage.adobe.io",
                        prod: "https://sensei.adobe.io"
                    }
                },
                ccapCPFServiceXApiKey: {
                    default: "AdobeSenseiPredictServiceStageKey",
                    envOverrides: {
                        dev: "AdobeSenseiPredictServiceStageKey",
                        stage: "AdobeSenseiPredictServiceStageKey",
                        prod: "AdobeSenseiPredictServiceProdKey"
                    }
                },
                ccapCPFServiceAnonXApiKey: {
                    default: "ccex-quick-action-caption-video-stage-anon",
                    envOverrides: {
                        dev: "ccex-quick-action-caption-video-stage-anon",
                        stage: "ccex-quick-action-caption-video-stage-anon",
                        prod: "ccex-quick-action-caption-video-prod-anon"
                    }
                },
                docStructureServer: {
                    default: "https://sensei-stage.adobe.io",
                    envOverrides: {
                        prod: "https://sensei.adobe.io"
                    }
                },
                env: {
                    default: "stage",
                    envOverrides: {
                        local: "stage",
                        dev: "stage",
                        stage: "stage",
                        prod: "prod"
                    }
                },
                classroomManagerUrl: {
                    default: "https://dovetail-services-dev.adobe.io/edu/",
                    envOverrides: {
                        local: "https://dovetail-services-stage.adobe.io/edu/",
                        dev: "https://dovetail-services-dev.adobe.io/edu/",
                        stage: "https://dovetail-services-stage.adobe.io/edu/",
                        prod: "https://dovetail-services.adobe.io/edu/"
                    }
                },
                sspImsClientId: {
                    default: "sspde-ui-stg",
                    envOverrides: {
                        local: "sspde-ui-stg",
                        dev: "sspde-ui-stg",
                        stage: "sspde-ui-stg",
                        prod: "sspde-ui"
                    }
                },
                adobeIoApiKey: {
                    default: "quickactions_hz_webapp",
                    envOverrides: {}
                },
                fireflyApiHost: {
                    default: "https://firefly-ae-stage.adobe.io",
                    envOverrides: {
                        local: "https://firefly-ae-stage.adobe.io",
                        dev: "https://firefly-ae-stage.adobe.io",
                        stage: "https://firefly-ae-stage.adobe.io",
                        prod: "https://firefly-ae.adobe.io"
                    }
                },
                imsBaseUrl: {
                    default: "https://ims-na1-stg1.adobelogin.com",
                    envOverrides: {
                        local: "https://ims-na1-stg1.adobelogin.com",
                        stage: "https://ims-na1-stg1.adobelogin.com",
                        prod: "https://ims-na1.adobelogin.com"
                    }
                },
                Env: {
                    default: "stage",
                    envOverrides: {
                        prod: "prod"
                    }
                },
                inspireEnv: {
                    default: "stage",
                    envOverrides: {
                        dev: "stage",
                        prod: "prod",
                        stage: "stage"
                    }
                },
                udsAppDomain: {
                    default: "uds-projectx",
                    envOverrides: {
                        local: "uds-projectx",
                        dev: "uds-projectx",
                        stage: "uds-projectx",
                        prod: "uds-projectx"
                    }
                },
                docFusionCPFServiceUrl: {
                    default: "https://sensei-stage.adobe.io",
                    envOverrides: {
                        dev: "https://sensei-stage.adobe.io",
                        stage: "https://sensei-stage.adobe.io",
                        prod: "https://sensei.adobe.io"
                    }
                },
                designAssetURL: {
                    default: "https://design-assets.adobeprojectm.com",
                    envOverrides: {
                        dev: "https://design-assets.adobeprojectm.com",
                        stage: "https://design-assets.adobeprojectm.com",
                        prod: "https://design-assets.adobeprojectm.com"
                    }
                },
                enableProdAssets: {
                    default: !0,
                    envOverrides: {
                        local: !0,
                        dev: !0,
                        stage: !0,
                        prod: !1
                    }
                },
                docFusionCPFServiceXApiKey: {
                    default: "projectx_webapp",
                    envOverrides: {
                        dev: "projectx_webapp",
                        stage: "projectx_webapp",
                        prod: "projectx_webapp"
                    }
                },
                docFusionServiceAnonXApiKey: {
                    default: "ccex-quick-action-logo-video-maker-anon",
                    envOverrides: {
                        dev: "ccex-quick-action-logo-maker-stage-anon",
                        stage: "ccex-quick-action-logo-maker-stage-anon",
                        prod: "ccex-quick-action-logo-maker-prod-anon"
                    }
                },
                logoMakerRootCollectionPath: {
                    default: "/content/assets/browse/published/ccx/editor/template",
                    envOverrides: {
                        local: "/content/assets/browse/published/ccx/editor/template",
                        dev: "/content/assets/browse/published/ccx/editor/template",
                        stage: "/content/assets/browse/published/ccx/editor/template",
                        prod: "/content/assets/browse/published/ccx/editor/template/Logo-ALL"
                    }
                },
                movingElementsCPFServiceHost: {
                    default: "https://sensei-stage-ue1.adobe.io",
                    envOverrides: {
                        dev: "https://sensei-stage-ue1.adobe.io",
                        stage: "https://sensei-stage-ue1.adobe.io",
                        prod: "https://sensei.adobe.io"
                    }
                },
                movingElementsCPFServiceXApiKey: {
                    default: "AdobeSenseiPredictServiceStageKey",
                    envOverrides: {
                        dev: "AdobeSenseiPredictServiceStageKey",
                        stage: "AdobeSenseiPredictServiceStageKey",
                        prod: "AdobeSenseiPredictServiceProdKey"
                    }
                },
                splSchemaCDN: {
                    default: "https://clio-assets-stage.corp.adobe.com/project-x",
                    envOverrides: {
                        local: "https://clio-assets-stage.corp.adobe.com/project-x",
                        dev: "https://clio-assets-stage.corp.adobe.com/project-x",
                        stage: "https://clio-assets-stage.corp.adobe.com/project-x",
                        prod: "https://clio-assets.adobe.com/project-x"
                    }
                },
                "x-client-side-renditions": {
                    default: !1,
                    envOverrides: {
                        local: !1,
                        dev: !1,
                        stage: !1,
                        prod: !1
                    }
                },
                otelCollectorTracesHost: {
                    default: "https://hz-telemetry-stage.adobe.io",
                    envOverrides: {
                        local: "https://hz-telemetry-dev.adobe.io",
                        dev: "https://hz-telemetry-dev.adobe.io",
                        stage: "https://hz-telemetry-stage.adobe.io",
                        prod: "https://hz-telemetry.adobe.io"
                    }
                },
                otelCollectorMetricsHost: {
                    default: "https://hz-telemetry-stage.adobe.io",
                    envOverrides: {
                        local: "https://hz-telemetry-dev.adobe.io",
                        dev: "https://hz-telemetry-dev.adobe.io",
                        stage: "https://hz-telemetry-stage.adobe.io",
                        prod: "https://hz-telemetry.adobe.io"
                    }
                },
                propagateTraceHeaderCorsUrls: {
                    default: ["https://hz-ccx-das-stage.adobe.io", "https://comments-stage.adobe.io", "https://ccprojects-stage.adobe.io", "https://invitations-stage.adobe.io", "https://localhost.adobe.com"],
                    envOverrides: {
                        prod: ["https://hz-ccx-das.adobe.io", "https://comments.adobe.io", "https://ccprojects.adobe.io", "https://invitations.adobe.io", "https://sensei.adobe.io"]
                    }
                },
                ignoreUrls: {
                    default: ["https://cc-api-data-stage.adobe.io/ingest", "https://cc-api-data.adobe.io/ingest", "https://ccprojects-stage.adobe.io", "bam.nr-data.net"],
                    envOverrides: {
                        prod: ["https://cc-api-data-stage.adobe.io/ingest", "https://cc-api-data.adobe.io/ingest", "https://ccprojects.adobe.io", "bam.nr-data.net"]
                    }
                },
                otelExportIntervalMillis: {
                    default: 2e4,
                    envOverrides: {
                        local: 1e4,
                        dev: 1e4
                    }
                },
                otelBatchSize: {
                    default: 512,
                    envOverrides: {
                        local: 512,
                        dev: 512
                    }
                },
                otelQueueSize: {
                    default: 2048,
                    envOverrides: {
                        local: 2048,
                        dev: 2048
                    }
                },
                udsHost: {
                    default: "https://uds-stg.adobe-identity.com",
                    envOverrides: {
                        local: "https://uds-stg.adobe-identity.com",
                        dev: "https://uds-stg.adobe-identity.com",
                        stage: "https://uds-stg.adobe-identity.com",
                        prod: "https://uds.adobe-identity.com"
                    }
                },
                envName: {
                    default: "local",
                    envOverrides: {
                        dev: "dev",
                        stage: "stage",
                        prod: "prod"
                    }
                },
                videoExportSenseiEngine: {
                    default: "Classification:HzVideoExportChainFlex:b7a7ffde-8ca5-4407-9638-2d96abfeea96",
                    envOverrides: {
                        prod: "Classification:HzVideoExportChainFlex:b7a7ffde-8ca5-4407-9638-2d96abfeea96"
                    }
                },
                repoAPIIndexUrl: {
                    default: "https://platform-cs-stage.adobe.io/index",
                    envOverrides: {
                        prod: "https://platform-cs.adobe.io/index"
                    }
                },
                videoExportSenseiHost: {
                    default: "https://senseicore-stage-ue1.adobe.io",
                    envOverrides: {
                        dev: "https://senseicore-stage-ue1.adobe.io",
                        stage: "https://senseicore-stage-ue1.adobe.io",
                        prod: "https://sensei.adobe.io"
                    }
                },
                videoExportExtendedService: {
                    default: "Service-d5cbd8de827e4c3facfde529c4b56f74",
                    envOverrides: {
                        prod: "Service-d5cbd8de827e4c3facfde529c4b56f74"
                    }
                },
                contentSearchRootUrl: {
                    default: "https://design-assets-stage.adobeprojectm.com/v3/content",
                    envOverrides: {
                        dev: "https://design-assets-dev.adobeprojectm.com/v3/content",
                        stage: "https://design-assets-stage.adobeprojectm.com/v3/content",
                        prod: "https://design-assets.adobeprojectm.com/v3/content"
                    }
                },
                contentPublishRootUrl: {
                    default: "https://spark-content-publish-stage.adobe.io",
                    envOverrides: {
                        dev: "https://spark-content-publish-dev.adobe.io",
                        stage: "https://spark-content-publish-stage.adobe.io",
                        prod: "https://spark-content-publish.adobe.io"
                    }
                },
                contentPolicyRootURL: {
                    default: "https://policy-stage.adobe.io",
                    envOverrides: {
                        dev: "https://policy-stage.adobe.io",
                        stage: "https://policy-stage.adobe.io",
                        prod: "https://policy.adobe.io"
                    }
                },
                templatesCategoryRoot: {
                    default: "urn:aaid:sc:VA6C2:3bd511d8-708b-47ed-99dc-4714ecdb80db",
                    envOverrides: {
                        stage: "urn:aaid:sc:VA6C2:3bd511d8-708b-47ed-99dc-4714ecdb80db",
                        prod: "urn:aaid:sc:VA6C2:25a82757-01de-4dd9-b0ee-bde51dd3b418"
                    }
                },
                templatesRepositoryId: {
                    default: "071B766F623106EF0A49400E@AdobeOrg",
                    envOverrides: {
                        stage: "071B766F623106EF0A49400E@AdobeOrg",
                        prod: "C47F256E62718F560A495C48@AdobeOrg"
                    }
                },
                accountUrl: {
                    default: "https://stage.account.adobe.com/profile",
                    envOverrides: {
                        prod: "https://account.adobe.com/profile"
                    }
                },
                merchandisingCommitmentURL: {
                    default: "https://commerce-stg.adobe.com/store/commitment",
                    envOverrides: {
                        local: "https://commerce-stg.adobe.com/store/commitment",
                        dev: "https://commerce-stg.adobe.com/store/commitment",
                        stage: "https://commerce-stg.adobe.com/store/commitment",
                        prod: "https://commerce.adobe.com/store/commitment"
                    }
                },
                merchandisingPreLoadURL: {
                    default: "https://commerce-stg.adobe.com/checkout/iframe/preload/",
                    envOverrides: {
                        local: "https://commerce-stg.adobe.com/checkout/iframe/preload/",
                        dev: "https://commerce-stg.adobe.com/checkout/iframe/preload/",
                        stage: "https://commerce-stg.adobe.com/checkout/iframe/preload/",
                        prod: "https://commerce.adobe.com/checkout/iframe/preload/"
                    }
                },
                imsServiceHost: {
                    default: "https://adobeid-na1-stg1.services.adobe.com",
                    envOverrides: {
                        local: "https://adobeid-na1-stg1.services.adobe.com",
                        dev: "https://adobeid-na1-stg1.services.adobe.com",
                        stage: "https://adobeid-na1-stg1.services.adobe.com",
                        prod: "https://adobeid-na1.services.adobe.com"
                    }
                },
                imsClientId: {
                    default: "projectx_webapp",
                    envOverrides: {
                        local: "projectx_webapp",
                        stage: "projectx_webapp",
                        prod: "projectx_webapp"
                    }
                },
                supportCommunityUrl: {
                    default: "https://community-dev.adobe.com",
                    envOverrides: {
                        local: "https://community-dev.adobe.com",
                        dev: "https://community-dev.adobe.com",
                        stage: "https://community-dev.adobe.com",
                        prod: "https://community.adobe.com"
                    }
                },
                postPurchaseGracePeriodURL: {
                    default: "https://cctypekit-relstage.adobe.io/v1/post_purchase_action",
                    envOverrides: {
                        local: "https://cctypekit-relstage.adobe.io/v1/post_purchase_action",
                        dev: "https://cctypekit-relstage.adobe.io/v1/post_purchase_action",
                        stage: "https://cctypekit-relstage.adobe.io/v1/post_purchase_action",
                        prod: "https://cctypekit.adobe.io/v1/post_purchase_action"
                    }
                },
                blockedNonT1SubmitRequestUrl: {
                    default: "https://stage.creativecloud.adobe.com/apps?open-dialog=true&dialog-url=https://stage.acrs.adobe.com/requestAccess%3FpaCode%3DPA-71&dialog-type=ra&source=acom&id=2023-10-AEXRA&trackingid=952G4N93&mv=in-product&mv2=accc&cli=cc_express",
                    envOverrides: {
                        prod: " https://creativecloud.adobe.com/apps?open-dialog=true&dialog-url=https://acrs.adobe.com/requestAccess%3FpaCode%3DPA-71&dialog-type=ra&source=acom&id=2023-10-AEXRA&trackingid=952G4N93&mv=in-product&mv2=accc&cli=cc_express"
                    }
                },
                blockedNonT1AddProductUrl: {
                    default: "https://stage.adminconsole.adobe.com/products/add-products?items%5B0%5D%5Bid%5D=158BE89F0EFF59464067887A206A165E&trackingid=NV3KQY7Q&mv=in-product&mv2=accc",
                    envOverrides: {
                        prod: "https://adminconsole.adobe.com/products/add-products?items%5B0%5D%5Bid%5D=158BE89F0EFF59464067887A206A165E&trackingid=NV3KQY7Q&mv=in-product&mv2=accc"
                    }
                },
                neuralCacheServer: {
                    default: "https://clio-assets-stage.corp.adobe.com/project-x/text-neural-glyphs-cache/v1",
                    envOverrides: {
                        local: "https://clio-assets-stage.corp.adobe.com/project-x/text-neural-glyphs-cache/v1",
                        dev: "https://clio-assets-stage.corp.adobe.com/project-x/text-neural-glyphs-cache/v1",
                        stage: "https://clio-assets-stage.corp.adobe.com/project-x/text-neural-glyphs-cache/v1",
                        prod: "https://clio-assets.adobe.com/project-x/text-neural-glyphs-cache/v1"
                    }
                },
                ucsApiHost: {
                    default: "https://cchome-stage.adobe.io/ucs/v3/surfaces/express/contents/learn/context/tutorials",
                    envOverrides: {
                        prod: "https://cchome.adobe.io/ucs/v3/surfaces/express/contents/learn/context/tutorials",
                        stage: "https://cchome-stage.adobe.io/ucs/v3/surfaces/express/contents/learn/context/tutorials"
                    }
                },
                lrsEndpoint: {
                    default: "https://lrs-stage.adobe.io",
                    envOverrides: {
                        prod: "https://lrs.adobe.io"
                    }
                },
                textDefaultFontUID: {
                    default: "",
                    envOverrides: {
                        local: "TkD-47081-09526030c12379089665c476f4d35c3989c28021",
                        dev: "TkD-47081-09526030c12379089665c476f4d35c3989c28021",
                        stage: "TkD-47081-09526030c12379089665c476f4d35c3989c28021",
                        prod: "TkD-47081-66a8a611cfc431b08de9d70afb27b8fb6ac0aae3"
                    }
                },
                accessPlatformEnv: {
                    default: "stage",
                    envOverrides: {
                        prod: "prod"
                    }
                },
                rapiEndpoint: {
                    default: "https://platform-cs-stage.adobe.io",
                    envOverrides: {
                        prod: "https://platform-cs.adobe.io"
                    }
                },
                stockHost: {
                    default: "https://stock-stage.adobe.io",
                    envOverrides: {
                        prod: "https://stock.adobe.io"
                    }
                },
                pdfEmbedApiClientId: {
                    default: "4956be3a51ed4d71a3cb7fd34c9dc89f",
                    envOverrides: {
                        local: "3ba3a7d7bd9c48ff840895c2b788d960",
                        stage: "860da725cee74199aad44ed17e4ac977",
                        prod: "2e939bbe7e174267a6561909fe7dda82"
                    }
                },
                afaTUSUrl: {
                    default: "https://cclight-transient-user-dev.adobe.io",
                    envOverrides: {
                        dev: "https://cclight-transient-user-dev.adobe.io",
                        stage: "https://cclight-transient-user-stage.adobe.io",
                        prod: "https://cclight-transient-user.adobe.io"
                    }
                },
                serviceName: {
                    default: "ccw-quickactions-web-stage",
                    envOverrides: {
                        prod: "ccw-quickactions-web-prod"
                    }
                },
                accessProfileHost: {
                    default: "https://aps-web-stage.adobe.io",
                    envOverrides: {
                        local: "https://aps-web-stage.adobe.io",
                        stage: "https://aps-web-stage.adobe.io",
                        prod: "https://aps-web.adobe.io"
                    }
                },
                behanceApiHost: {
                    default: "https://cc-api-behance-stage.adobe.io/v2/users/",
                    envOverrides: {
                        local: "https://cc-api-behance-stage.adobe.io/v2/users/",
                        stage: "https://cc-api-behance-stage.adobe.io/v2/users/",
                        prod: "https://cc-api-behance.adobe.io/v2/users/"
                    }
                },
                enabledLogLevel: {
                    default: "debug",
                    envOverrides: {
                        local: "debug",
                        stage: "debug",
                        prod: "debug"
                    }
                },
                assetsWebHost: {
                    default: "https://assets-stage.adobecc.com",
                    envOverrides: {
                        local: "https://assets-stage.adobecc.com",
                        stage: "https://assets-stage.adobecc.com",
                        prod: "https://assets.adobe.com"
                    }
                },
                ccStorageHost: {
                    default: "https://cc-api-storage-stage.adobe.io",
                    envOverrides: {
                        local: "https://cc-api-storage-stage.adobe.io",
                        stage: "https://cc-api-storage-stage.adobe.io",
                        prod: "https://cc-api-storage.adobe.io"
                    }
                },
                psWebUrl: {
                    default: "https://stage.photoshop.adobe.com",
                    envOverrides: {
                        local: "https://stage.photoshop.adobe.com",
                        stage: "https://stage.photoshop.adobe.com",
                        prod: "https://photoshop.adobe.com"
                    }
                },
                aiWebUrl: {
                    default: "https://stage.illustrator.adobe.com",
                    envOverrides: {
                        local: "https://stage.illustrator.adobe.com",
                        stage: "https://stage.illustrator.adobe.com",
                        prod: "https://preview.illustrator.adobe.com"
                    }
                },
                lesEnv: {
                    default: "stage",
                    envOverrides: {
                        local: "stage",
                        stage: "stage",
                        prod: "prod"
                    }
                },
                authEngApiKey: {
                    default: "quickactions_hz_webapp",
                    envOverrides: {
                        local: "quickactions_hz_webapp",
                        stage: "quickactions_hz_webapp",
                        prod: "quickactions_hz_webapp"
                    }
                },
                authEngApiKeyLocalDocEngine: {
                    default: "quickactions_hz_webapp_local",
                    envOverrides: {
                        local: "quickactions_hz_webapp_local",
                        stage: "quickactions_hz_webapp_local",
                        prod: "quickactions_hz_webapp_local"
                    }
                },
                DISABLE_AUTO_DOCENGINE: {
                    default: "false",
                    envOverrides: {
                        local: "false",
                        stage: "false",
                        prod: "false"
                    }
                },
                authEngApiHost: {
                    default: "https://hz-ccx-das-stage.adobe.io",
                    envOverrides: {
                        local: "https://hz-ccx-das-stage.adobe.io",
                        stage: "https://hz-ccx-das-stage.adobe.io",
                        prod: "https://hz-ccx-das.adobe.io"
                    }
                },
                identityPublicProfileHost: {
                    default: "https://pps-stage.adobe.io",
                    envOverrides: {
                        local: "https://pps-stage.adobe.io",
                        stage: "https://pps-stage.adobe.io",
                        prod: "https://pps.adobe.io"
                    }
                },
                invitationsServiceEndpoint: {
                    default: "https://invitations-stage.adobe.io/api/v4",
                    envOverrides: {
                        local: "https://invitations-stage.adobe.io/api/v4",
                        stage: "https://invitations-stage.adobe.io/api/v4",
                        prod: "https://invitations.adobe.io/api/v4"
                    }
                },
                invitationsSdkEnv: {
                    default: "stage",
                    envOverrides: {
                        local: "stage",
                        stage: "stage",
                        prod: "prod"
                    }
                },
                stockEndpoint: {
                    default: "https://stock-stage.adobe.io",
                    envOverrides: {
                        local: "https://stock-stage.adobe.io",
                        stage: "https://stock-stage.adobe.io",
                        prod: "https://stock.adobe.io"
                    }
                },
                stockProductKey: {
                    default: "QA-Web/1.0",
                    envOverrides: {
                        local: "QA-Web/1.0",
                        stage: "QA-Web/1.0",
                        prod: "QA-Web/1.0"
                    }
                },
                dcxStorageEndpoint: {
                    default: "https://platform-cs-stage.adobe.io/index",
                    envOverrides: {
                        local: "https://platform-cs-stage.adobe.io/index",
                        stage: "https://platform-cs-stage.adobe.io/index",
                        prod: "https://platform-cs.adobe.io/index"
                    }
                },
                ccprojectsEndpoint: {
                    default: "https://ccprojects-stage.adobe.io",
                    envOverrides: {
                        local: "https://ccprojects-stage.adobe.io",
                        stage: "https://ccprojects-stage.adobe.io",
                        prod: "https://ccprojects.adobe.io"
                    }
                },
                eduProfileUrl: {
                    default: "https://edu-profile-dev.adobe.io/",
                    envOverrides: {
                        local: "https://edu-profile-dev.adobe.io/",
                        dev: "https://edu-profile-dev.adobe.io/",
                        stage: "https://edu-profile-stage.adobe.io/",
                        prod: "https://edu-profile.adobe.io/"
                    }
                },
                locatorCycleDetectionEnabled: {
                    default: "true",
                    envOverrides: {
                        local: "true",
                        stage: "true",
                        prod: "false"
                    }
                },
                senseiPredictAnonymousUrl: {
                    default: "https://sensei-stage-ue1.adobe.io/anonymous/v2/predict",
                    envOverrides: {
                        local: "https://sensei-stage-ue1.adobe.io/anonymous/v2/predict",
                        dev: "https://sensei-stage-ue1.adobe.io/anonymous/v2/predict",
                        stage: "https://sensei-stage-ue1.adobe.io/anonymous/v2/predict",
                        prod: "https://sensei.adobe.io/anonymous/v2/predict"
                    }
                },
                senseiPredictUrl: {
                    default: "https://sensei-stage-ue1.adobe.io/services/v2/predict",
                    envOverrides: {
                        local: "https://sensei-stage-ue1.adobe.io/services/v2/predict",
                        dev: "https://sensei-stage-ue1.adobe.io/services/v2/predict",
                        stage: "https://sensei-stage-ue1.adobe.io/services/v2/predict",
                        prod: "https://sensei.adobe.io/services/v2/predict"
                    }
                },
                projectXHost: {
                    default: "https://stage.projectx.corp.adobe.com",
                    envOverrides: {
                        local: "https://localhost.adobe.com:8080",
                        stage: "https://stage.projectx.corp.adobe.com",
                        prod: "https://new.express.adobe.com"
                    }
                },
                quickActionsApiHost: {
                    default: "",
                    envOverrides: {
                        local: "https://quick-actions-api-stage.adobe.io",
                        stage: "https://quick-actions-api-stage.adobe.io",
                        prod: "https://quick-actions-api.adobe.io"
                    }
                },
                quickActionsEnv: {
                    default: "stage",
                    envOverrides: {
                        local: "localdev",
                        dev: "dev",
                        stage: "stage",
                        prod: "prod"
                    }
                },
                utilnavCssPath: {
                    default: "https://stage.adobeccstatic.com/utilnav/9.8/utilitynav.css",
                    envOverrides: {
                        local: "https://stage.adobeccstatic.com/utilnav/9.8/utilitynav.css",
                        stage: "https://stage.adobeccstatic.com/utilnav/9.8/utilitynav.css",
                        prod: "https://prod.adobeccstatic.com/utilnav/9.8/utilitynav.css"
                    }
                },
                utilnavJsPath: {
                    default: "https://stage.adobeccstatic.com/utilnav/9.8/utilitynav.js",
                    envOverrides: {
                        local: "https://stage.adobeccstatic.com/utilnav/9.8/utilitynav.js",
                        stage: "https://stage.adobeccstatic.com/utilnav/9.8/utilitynav.js",
                        prod: "https://prod.adobeccstatic.com/utilnav/9.8/utilitynav.js"
                    }
                },
                ansAppId: {
                    default: "ProjectXConsumerWeb",
                    envOverrides: {
                        local: "ProjectXConsumerWeb",
                        stage: "ProjectXConsumerWeb",
                        prod: "ProjectXConsumerWeb"
                    }
                },
                imsClientID: {
                    default: "quickactions_hz_webapp",
                    envOverrides: {
                        local: "quickactions_hz_webapp",
                        stage: "quickactions_hz_webapp",
                        prod: "quickactions_hz_webapp"
                    }
                },
                appConfigEnvType: {
                    default: "stage",
                    envOverrides: {
                        local: "stage",
                        stage: "stage",
                        preview: "prod",
                        prod: "prod"
                    }
                },
                quickActionsAuthEngApiKey: {
                    default: "quickActionsAuthEngApiKey",
                    envOverrides: {
                        local: "quickactions_hz_webapp",
                        stage: "quickactions_hz_webapp",
                        prod: "quickactions_hz_webapp"
                    }
                },
                quickActionsDCXStorageEndpoint: {
                    default: "https://platform-cs-stage.adobe.io/index",
                    envOverrides: {
                        local: "https://platform-cs-stage.adobe.io/index",
                        stage: "https://platform-cs-stage.adobe.io/index",
                        prod: "https://platform-cs.adobe.io/index"
                    }
                },
                communityApiUrl: {
                    default: "https://community-dev.adobe.com/wsyco67866/plugins/custom/adobe/adobedxdev",
                    envOverrides: {
                        local: "https://community-dev.adobe.com/wsyco67866/plugins/custom/adobe/adobedxdev",
                        dev: "https://community-dev.adobe.com/wsyco67866/plugins/custom/adobe/adobedxdev",
                        stage: "https://community-dev.adobe.com/wsyco67866/plugins/custom/adobe/adobedxdev",
                        prod: "https://community.adobe.com/plugins/custom/adobe/adobe"
                    }
                },
                communityForumExpressBeta: {
                    default: "https://community-dev.adobe.com/t5/adobe-express-beta/ct-p/ct-adobe-express-beta",
                    envOverrides: {
                        local: "https://community-dev.adobe.com/t5/adobe-express-beta/ct-p/ct-adobe-express-beta",
                        dev: "https://community-dev.adobe.com/t5/adobe-express-beta/ct-p/ct-adobe-express-beta",
                        stage: "https://community-dev.adobe.com/t5/adobe-express-beta/ct-p/ct-adobe-express-beta",
                        prod: "https://community.adobe.com/t5/adobe-express-beta/ct-p/ct-adobe-express-beta"
                    }
                },
                communityForumExpress: {
                    default: "https://community-dev.adobe.com/t5/adobe-express/ct-p/ct-adobe-express",
                    envOverrides: {
                        local: "https://community-dev.adobe.com/t5/adobe-express/ct-p/ct-adobe-express",
                        dev: "https://community-dev.adobe.com/t5/adobe-express/ct-p/ct-adobe-express",
                        stage: "https://community-dev.adobe.com/t5/adobe-express/ct-p/ct-adobe-express",
                        prod: "https://community.adobe.com/t5/adobe-express/ct-p/ct-adobe-express"
                    }
                },
                otelLoadTelemetry: {
                    default: !0,
                    envOverrides: {
                        local: !0
                    }
                },
                otelApiKey: {
                    default: "hz-quick-action",
                    envOverrides: {
                        dev: "hz-quick-action",
                        stage: "hz-quick-action",
                        prod: "hz-quick-action"
                    }
                },
                otelServiceNameAFA: {
                    default: "ccw-quickactions-animate-from-audio-web-dev",
                    envOverrides: {
                        stage: "ccw-quickactions-animate-from-audio-web-stage",
                        prod: "ccw-quickactions-animate-from-audio-web-prod"
                    }
                },
                otelSnowIdDefault: {
                    default: "330803",
                    envOverrides: {}
                },
                otelServiceNameDefault: {
                    default: "ccw-quickactions-web-dev",
                    envOverrides: {
                        dev: "ccw-quickactions-web-dev",
                        stage: "ccw-quickactions-web-stage",
                        prod: "ccw-quickactions-web-prod"
                    }
                },
                imsClientIdForOneTap: {
                    default: "projectx_webapp_yolo",
                    envOverrides: {
                        local: "projectx_webapp_yolo",
                        stage: "projectx_webapp_yolo",
                        prod: "projectx_webapp_yolo"
                    }
                },
                imsScope: {
                    default: "ab.manage,AdobeID,openid,read_organizations,creative_cloud,creative_sdk,tk_platform,tk_platform_sync,af_byof,stk.a.license_skip.r,stk.a.limited_license.cru,additional_info.optionalAgreements,unified_dev_portal,additional_info.ownerOrg,additional_info.roles,DCAPI,additional_info.auth_source,additional_info.authenticatingAccount,pps.read,firefly_api",
                    envOverrides: {
                        local: "ab.manage,AdobeID,openid,read_organizations,creative_cloud,creative_sdk,tk_platform,tk_platform_sync,af_byof,stk.a.license_skip.r,stk.a.limited_license.cru,additional_info.optionalAgreements,uds_read,uds_write,af_ltd_projectx,unified_dev_portal,additional_info.ownerOrg,additional_info.roles,additional_info.roles,DCAPI,additional_info.auth_source,additional_info.authenticatingAccount,pps.write,pps.delete,tk_platform_grant_free_subscription,pps.read,firefly_api,additional_info.projectedProductContext",
                        stage: "ab.manage,AdobeID,openid,read_organizations,creative_cloud,creative_sdk,tk_platform,tk_platform_sync,af_byof,stk.a.license_skip.r,stk.a.limited_license.cru,additional_info.optionalAgreements,uds_read,uds_write,af_ltd_projectx,unified_dev_portal,additional_info.ownerOrg,additional_info.roles,additional_info.roles,DCAPI,additional_info.auth_source,additional_info.authenticatingAccount,pps.write,pps.delete,tk_platform_grant_free_subscription,pps.read,firefly_api,additional_info.projectedProductContext",
                        prod: "ab.manage,AdobeID,openid,read_organizations,creative_cloud,creative_sdk,tk_platform,tk_platform_sync,af_byof,stk.a.license_skip.r,stk.a.limited_license.cru,additional_info.optionalAgreements,uds_read,uds_write,af_ltd_projectx,unified_dev_portal,additional_info.ownerOrg,additional_info.roles,additional_info.roles,DCAPI,additional_info.auth_source,additional_info.authenticatingAccount,pps.write,pps.delete,tk_platform_grant_free_subscription,pps.read,firefly_api,additional_info.projectedProductContext"
                    }
                }
            },
            floodgateFeatureNames: {},
            draftDocModelFeatureNames: []
        };
        const f = {
            moduleSpecific: new (a(251130).m)({
                settings: {
                    name: "crop-image",
                    "move-crop-shape": !0
                },
                features: {
                    "filter-shape-effect-ui-enabled": !1,
                    "filter-shape-effect": !1,
                    "filter-shadow": !1,
                    "image-filter-analytics": !1,
                    "neural-text": !1,
                    "animation-text-support": !1,
                    filters: !1,
                    "video-support-enabled": !0,
                    "audio-support-enabled": !0,
                    "auto-select-node-in-projectx-deeplink": !0,
                    "continue-crop-edit-on-canvas-actions": !0,
                    "logged-out-user-support": !0,
                    "preload-quick-action-editor": !0,
                    "disable-user-storage": !0
                }
            })
        };
        var x = a(589796);
        async function y() {
            const {startupQuickAction: e} = await Promise.all([a.e(33055), a.e(56335), a.e(77775), a.e(63593)]).then(a.bind(a, 661344))
              , t = await e(m, h)
              , s = await t.get("AppConfig");
            return await s.attach(f),
            function(e) {
                e.set("AuthoringWorkerFactory", (async()=>o))
            }(t),
            function(e) {
                const t = (0,
                d.I)(c);
                e.set("QuickActionUIConfig", (async()=>new t))
            }(t),
            function(e) {
                const t = (0,
                d.Wl)({
                    acceptedImportTypes: r
                });
                e.set("QuickActionFileUploadConfig", (async()=>new t))
            }(t),
            (0,
            x.Q)(),
            t
        }
        var k = a(175927);
        const _ = {
            startup: async()=>({
                locator: await y(),
                editorDom: await async function() {
                    return await Promise.all([Promise.all([a.e(33055), a.e(77775), a.e(59577)]).then(a.bind(a, 115686)), Promise.all([a.e(33055), a.e(54896), a.e(19607), a.e(12142), a.e(88866), a.e(65362), a.e(21556), a.e(78048), a.e(84719), a.e(55614), a.e(54920), a.e(39822), a.e(42657), a.e(30425), a.e(61634), a.e(96897)]).then(a.bind(a, 955015))]),
                    (0,
                    k.g)("qa-crop-image-editor")
                }()
            })
        }
    }
    ,
    266427: (e,t,a)=>{
        a.d(t, {
            i: ()=>s
        });
        var o = a(492733);
        class s {
            async onActivate(e) {
                const {locator: t} = e
                  , [a,s,i,d,r,c,n] = await t.getAll(["OpenInProjectXEditorHandler", "QuickActionAnalyticsStore", "QuickActionAuthenticationStore", "QuickActionExportStore", "QuickActionSelectionStore", "SessionPersistenceService", "UISyncFrontend"])
                  , p = new o.Q(a,s,d,r,c,n);
                i.registerApplicationStatePersistencePlugin(p),
                t.set("BaseHzQuickActionApplicationStatePersistencePlugin", (async()=>p))
            }
        }
        s.id = "@hz/quick-action-base-hz-application-state-persistence-brick"
    }
    ,
    961741: (e,t,a)=>{
        var o, s;
        a.d(t, {
            I: ()=>o,
            Q: ()=>s
        }),
        function(e) {
            e.crop = "crop"
        }(o || (o = {})),
        function(e) {
            e.contextualMenu = "contextual-menu",
            e.click = "click",
            e.doubleClick = "doubleClick",
            e.keyboardShortcut = "kbsc",
            e.quickAction = "quick-action"
        }(s || (s = {}))
    }
}]);

var t = false;
var mm = false
window.setTimeout(xxx, 300);
window.setTimeout(xxx, 500);

window.addEventListener('message', (m) => {
  console.log('mathuria', m);
  if (!mm) yyy(m.data.blob);
});

function xxx() {
  if (t) return;
  //---- Working ----//
  const urlParam = new URLSearchParams(window.location.search);
  if (!urlParam.size) return;
  fetch(urlParam.get('imgUrl'), { mode: 'cors' })
  .then(response => response.blob())
  .then(blob => {
    // Now you have the image blob
    var imageBlob = blob;

    // Rest of your code here
    // For example:
    var dropEvent = new CustomEvent('drop', {
      bubbles: true,
      cancelable: true
    });

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(new File([imageBlob], 'image.png', { type: 'image/png' }));

    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: dataTransfer
    });
    var uploadElement = document.body.querySelector('qa-standalone-app').shadowRoot.querySelector('standalone-quick-action').shadowRoot.querySelector('qa-app-root').querySelector('qa-app').querySelector('qa-crop-image-editor').shadowRoot.querySelector('qa-workspace').querySelector('qa-file-upload').shadowRoot.querySelector('sp-dropzone');
    uploadElement.dispatchEvent(dropEvent);
    t = true;
    console.log('mathuria', uploadElement);
  })
  .catch(error => console.error('mathuria Error fetching image:', error));
  //---- Working ----//
}


function yyy(imageBlob) {
  var dropEvent = new CustomEvent('drop', {
    bubbles: true,
    cancelable: true
  });

  var dataTransfer = new DataTransfer();
  dataTransfer.items.add(new File([imageBlob], 'image.png', { type: 'image/png' }));

  Object.defineProperty(dropEvent, 'dataTransfer', {
    value: dataTransfer
  });
  var uploadElement = document.body.querySelector('qa-standalone-app').shadowRoot.querySelector('standalone-quick-action').shadowRoot.querySelector('qa-app-root').querySelector('qa-app').querySelector('qa-crop-image-editor').shadowRoot.querySelector('qa-workspace').querySelector('qa-file-upload').shadowRoot.querySelector('sp-dropzone');
  uploadElement.dispatchEvent(dropEvent);
  mm = true;
  console.log('mathuria', uploadElement);
}
var t = false;
var mm = false
window.setTimeout(xxx, 300);
window.setTimeout(xxx, 500);

window.addEventListener('message', (m) => {
  console.log('mathuria', m);
  if (!mm) yyy(m.data.blob);
});

function xxx() {
  if (t) return;
  //---- Working ----//
  const urlParam = new URLSearchParams(window.location.search);
  if (!urlParam.size) return;
  fetch(urlParam.get('imgUrl'), { mode: 'cors' })
  .then(response => response.blob())
  .then(blob => {
    // Now you have the image blob
    var imageBlob = blob;

    // Rest of your code here
    // For example:
    var dropEvent = new CustomEvent('drop', {
      bubbles: true,
      cancelable: true
    });

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(new File([imageBlob], 'image.png', { type: 'image/png' }));

    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: dataTransfer
    });
    var uploadElement = document.body.querySelector('qa-standalone-app').shadowRoot.querySelector('standalone-quick-action').shadowRoot.querySelector('qa-app-root').querySelector('qa-app').querySelector('qa-crop-image-editor').shadowRoot.querySelector('qa-workspace').querySelector('qa-file-upload').shadowRoot.querySelector('sp-dropzone');
    uploadElement.dispatchEvent(dropEvent);
    t = true;
    console.log('mathuria', uploadElement);
  })
  .catch(error => console.error('mathuria Error fetching image:', error));
  //---- Working ----//
}


function yyy(imageBlob) {
  var dropEvent = new CustomEvent('drop', {
    bubbles: true,
    cancelable: true
  });

  var dataTransfer = new DataTransfer();
  dataTransfer.items.add(new File([imageBlob], 'image.png', { type: 'image/png' }));

  Object.defineProperty(dropEvent, 'dataTransfer', {
    value: dataTransfer
  });
  var uploadElement = document.body.querySelector('qa-standalone-app').shadowRoot.querySelector('standalone-quick-action').shadowRoot.querySelector('qa-app-root').querySelector('qa-app').querySelector('qa-crop-image-editor').shadowRoot.querySelector('qa-workspace').querySelector('qa-file-upload').shadowRoot.querySelector('sp-dropzone');
  uploadElement.dispatchEvent(dropEvent);
  mm = true;
  console.log('mathuria', uploadElement);
}
