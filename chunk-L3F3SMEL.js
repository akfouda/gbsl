import {
  NzCardComponent,
  NzCardModule
} from "./chunk-WECDCNMD.js";
import {
  ActivatedRoute,
  AlainConfigService,
  CdkObserveContent,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DA_SERVICE_TOKEN,
  DelonLocaleModule,
  DelonLocaleService,
  DestroyRef,
  Directionality,
  DomSanitizer,
  Input,
  NgModule,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  ObserversModule,
  RouterLink,
  RouterModule,
  ViewChild,
  ViewEncapsulation$1,
  _HttpClient,
  inject,
  isEmpty,
  setClassMetadata,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VFQBCSPZ.js";

// node_modules/@delon/abc/fesm2022/exception.mjs
var _c0 = ["conTpl"];
var _c1 = ["*"];
function ExceptionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r1.backRouterLink)("nzType", "primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.locale.backToHome, " ");
  }
}
var _ExceptionComponent = class _ExceptionComponent {
  set type(value) {
    const item = this.typeDict[value];
    if (!item)
      return;
    this.fixImg(item.img);
    this._type = value;
    this._title = item.title;
    this._desc = "";
  }
  fixImg(src) {
    this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
  }
  set img(value) {
    this.fixImg(value);
  }
  set title(value) {
    this._title = this.dom.bypassSecurityTrustHtml(value);
  }
  set desc(value) {
    this._desc = this.dom.bypassSecurityTrustHtml(value);
  }
  checkContent() {
    this.hasCon = !isEmpty(this.conTpl.nativeElement);
    this.cdr.detectChanges();
  }
  constructor(configSrv) {
    this.i18n = inject(DelonLocaleService);
    this.dom = inject(DomSanitizer);
    this.directionality = inject(Directionality, {
      optional: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = inject(DestroyRef);
    this.locale = {};
    this.hasCon = false;
    this.dir = "ltr";
    this._img = "";
    this._title = "";
    this._desc = "";
    this.backRouterLink = "/";
    configSrv.attach(this, "exception", {
      typeDict: {
        403: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",
          title: "403"
        },
        404: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",
          title: "404"
        },
        500: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",
          title: "500"
        }
      }
    });
  }
  ngOnInit() {
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.i18n.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getData("exception");
      this.cdr.detectChanges();
    });
    this.checkContent();
  }
};
_ExceptionComponent.\u0275fac = function ExceptionComponent_Factory(t) {
  return new (t || _ExceptionComponent)(\u0275\u0275directiveInject(AlainConfigService));
};
_ExceptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ExceptionComponent,
  selectors: [["exception"]],
  viewQuery: function ExceptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.conTpl = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function ExceptionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("exception", true)("exception-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    type: "type",
    img: "img",
    title: "title",
    desc: "desc",
    backRouterLink: "backRouterLink"
  },
  exportAs: ["exception"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c1,
  decls: 10,
  vars: 5,
  consts: [["conTpl", ""], [1, "exception__img-block"], [1, "exception__img"], [1, "exception__cont"], [1, "exception__cont-title", 3, "innerHTML"], [1, "exception__cont-desc", 3, "innerHTML"], [1, "exception__cont-actions"], [3, "cdkObserveContent"], ["nz-button", "", 3, "routerLink", "nzType"]],
  template: function ExceptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3);
      \u0275\u0275element(3, "h1", 4)(4, "div", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7, 0);
      \u0275\u0275listener("cdkObserveContent", function ExceptionComponent_Template_div_cdkObserveContent_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.checkContent());
      });
      \u0275\u0275projection(8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ExceptionComponent_Conditional_9_Template, 2, 3, "button", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-image", ctx._img);
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx._title, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance();
      \u0275\u0275property("innerHTML", ctx._desc || ctx.locale[ctx._type], \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(9, !ctx.hasCon ? 9 : -1);
    }
  },
  dependencies: [CdkObserveContent, NzButtonComponent, RouterLink],
  encapsulation: 2,
  changeDetection: 0
});
var ExceptionComponent = _ExceptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExceptionComponent, [{
    type: Component,
    args: [{
      selector: "exception",
      exportAs: "exception",
      host: {
        "[class.exception]": "true",
        "[class.exception-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkObserveContent, NzButtonComponent, RouterLink],
      template: `<div class="exception__img-block">
  <div class="exception__img" [style.backgroundImage]="_img"></div>
</div>
<div class="exception__cont">
  <h1 class="exception__cont-title" [innerHTML]="_title"></h1>
  <div class="exception__cont-desc" [innerHTML]="_desc || locale[_type]"></div>
  <div class="exception__cont-actions">
    <div (cdkObserveContent)="checkContent()" #conTpl>
      <ng-content />
    </div>
    @if (!hasCon) {
      <button nz-button [routerLink]="backRouterLink" [nzType]="'primary'">
        {{ locale.backToHome }}
      </button>
    }
  </div>
</div>
`
    }]
  }], () => [{
    type: AlainConfigService
  }], {
    conTpl: [{
      type: ViewChild,
      args: ["conTpl", {
        static: true
      }]
    }],
    type: [{
      type: Input
    }],
    img: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    desc: [{
      type: Input
    }],
    backRouterLink: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [ExceptionComponent];
var _ExceptionModule = class _ExceptionModule {
};
_ExceptionModule.\u0275fac = function ExceptionModule_Factory(t) {
  return new (t || _ExceptionModule)();
};
_ExceptionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ExceptionModule
});
_ExceptionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, COMPONENTS]
});
var ExceptionModule = _ExceptionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExceptionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, ...COMPONENTS],
      exports: COMPONENTS
    }]
  }], null, null);
})();

// src/app/routes/exception/exception.component.ts
var _ExceptionComponent2 = class _ExceptionComponent2 {
  constructor() {
    this.route = inject(ActivatedRoute);
  }
  get type() {
    return this.route.snapshot.data["type"];
  }
};
_ExceptionComponent2.\u0275fac = function ExceptionComponent_Factory(t) {
  return new (t || _ExceptionComponent2)();
};
_ExceptionComponent2.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExceptionComponent2, selectors: [["app-exception"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[2, "min-height", "500px", "height", "80%", 3, "type"]], template: function ExceptionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "exception", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("type", ctx.type);
  }
}, dependencies: [ExceptionModule, ExceptionComponent], encapsulation: 2, changeDetection: 0 });
var ExceptionComponent2 = _ExceptionComponent2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExceptionComponent2, { className: "ExceptionComponent", filePath: "src\\app\\routes\\exception\\exception.component.ts", lineNumber: 12 });
})();

// src/app/routes/exception/trigger.component.ts
function ExceptionTriggerComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function ExceptionTriggerComponent_For_3_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.go(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u89E6\u53D1", t_r2, "");
  }
}
var _ExceptionTriggerComponent = class _ExceptionTriggerComponent {
  constructor() {
    this.http = inject(_HttpClient);
    this.tokenService = inject(DA_SERVICE_TOKEN);
    this.types = [401, 403, 404, 500];
  }
  go(type) {
    this.http.get(`/api/${type}`).subscribe();
  }
  refresh() {
    this.tokenService.set({ token: "invalid-token" });
    this.http.post(`https://localhost:5001/auth`).subscribe({
      next: (res) => console.warn("\u6210\u529F", res),
      error: (err) => {
        console.log("\u6700\u540E\u7ED3\u679C\u5931\u8D25", err);
      }
    });
  }
};
_ExceptionTriggerComponent.\u0275fac = function ExceptionTriggerComponent_Factory(t) {
  return new (t || _ExceptionTriggerComponent)();
};
_ExceptionTriggerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExceptionTriggerComponent, selectors: [["exception-trigger"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 0, consts: [[1, "pt-lg"], ["nz-button", "", "nzDanger", ""], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-button", "", "nzDanger", "", 3, "click"]], template: function ExceptionTriggerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nz-card");
    \u0275\u0275repeaterCreate(2, ExceptionTriggerComponent_For_3_Template, 2, 1, "button", 1, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function ExceptionTriggerComponent_Template_button_click_4_listener() {
      return ctx.refresh();
    });
    \u0275\u0275text(5, "\u89E6\u53D1\u5237\u65B0Token");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.types);
  }
}, dependencies: [NzCardModule, NzCardComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective], encapsulation: 2 });
var ExceptionTriggerComponent = _ExceptionTriggerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExceptionTriggerComponent, { className: "ExceptionTriggerComponent", filePath: "src\\app\\routes\\exception\\trigger.component.ts", lineNumber: 22 });
})();

// src/app/routes/exception/routes.ts
var routes = [
  { path: "403", component: ExceptionComponent2, data: { type: 403 } },
  { path: "404", component: ExceptionComponent2, data: { type: 404 } },
  { path: "500", component: ExceptionComponent2, data: { type: 500 } },
  { path: "trigger", component: ExceptionTriggerComponent }
];
export {
  routes
};
//# sourceMappingURL=chunk-L3F3SMEL.js.map
