import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  LayoutPassportComponent,
  NgControlStatus,
  NgControlStatusGroup,
  NzAlertComponent,
  NzAlertModule,
  NzAvatarComponent,
  NzAvatarModule,
  NzCheckboxComponent,
  NzCheckboxModule,
  NzColDirective,
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormModule,
  NzGridModule,
  NzInputDirective,
  NzInputGroupComponent,
  NzInputModule,
  NzMessageService,
  NzOptionComponent,
  NzPopoverDirective,
  NzPopoverModule,
  NzProgressComponent,
  NzProgressModule,
  NzRowDirective,
  NzSelectComponent,
  NzSelectModule,
  NzTabComponent,
  NzTabSetComponent,
  NzTabsModule,
  NzToolTipModule,
  ReactiveFormsModule,
  ResultComponent,
  ResultModule,
  ReuseTabService,
  StartupService,
  Validators,
  environment,
  ɵNgNoValidate
} from "./chunk-L6CO3SDL.js";
import {
  ALLOW_ANONYMOUS,
  ChangeDetectorRef,
  DA_SERVICE_TOKEN,
  HttpContext,
  I18nPipe,
  NzButtonComponent,
  NzButtonModule,
  NzIconModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  Router,
  RouterLink,
  SettingsService,
  SocialService,
  _HttpClient,
  __spreadValues,
  finalize,
  inject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VFQBCSPZ.js";

// src/app/routes/passport/callback.component.ts
var _CallbackComponent = class _CallbackComponent {
  constructor() {
    this.socialService = inject(SocialService);
    this.settingsSrv = inject(SettingsService);
    this.type = "";
  }
  ngOnInit() {
    this.mockModel();
  }
  mockModel() {
    const info = {
      token: "123456789",
      name: "cipchk",
      email: `${this.type}@${this.type}.com`,
      id: 1e4,
      time: +/* @__PURE__ */ new Date()
    };
    this.settingsSrv.setUser(__spreadValues(__spreadValues({}, this.settingsSrv.user), info));
    this.socialService.callback(info);
  }
};
_CallbackComponent.\u0275fac = function CallbackComponent_Factory(t) {
  return new (t || _CallbackComponent)();
};
_CallbackComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CallbackComponent, selectors: [["app-callback"]], inputs: { type: "type" }, standalone: true, features: [\u0275\u0275ProvidersFeature([SocialService]), \u0275\u0275StandaloneFeature], decls: 0, vars: 0, template: function CallbackComponent_Template(rf, ctx) {
}, encapsulation: 2 });
var CallbackComponent = _CallbackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CallbackComponent, { className: "CallbackComponent", filePath: "src\\app\\routes\\passport\\callback.component.ts", lineNumber: 11 });
})();

// src/app/routes/passport/lock/lock.component.ts
var _UserLockComponent = class _UserLockComponent {
  constructor() {
    this.tokenService = inject(DA_SERVICE_TOKEN);
    this.settings = inject(SettingsService);
    this.router = inject(Router);
    this.f = new FormGroup({
      password: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  get user() {
    return this.settings.user;
  }
  submit() {
    this.f.controls.password.markAsDirty();
    this.f.controls.password.updateValueAndValidity();
    if (this.f.valid) {
      console.log("Valid!");
      console.log(this.f.value);
      this.tokenService.set({
        token: "123"
      });
      this.router.navigate(["dashboard"]);
    }
  }
};
_UserLockComponent.\u0275fac = function UserLockComponent_Factory(t) {
  return new (t || _UserLockComponent)();
};
_UserLockComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLockComponent, selectors: [["passport-lock"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 11, consts: [[1, "ant-card", "width-lg", 2, "margin", "0 auto"], [1, "ant-card-body"], [1, "avatar"], ["nzIcon", "user", "nzSize", "large", 3, "nzSrc"], ["nz-form", "", "role", "form", 1, "mt-md", 3, "ngSubmit", "formGroup"], [3, "nzErrorTip"], ["nzSuffixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password"], ["nz-row", "", "nzType", "flex", "nzAlign", "middle"], ["nz-col", "", 2, "text-align", "right", 3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "disabled"]], template: function UserLockComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "nz-avatar", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 4);
    \u0275\u0275listener("ngSubmit", function UserLockComponent_Template_form_ngSubmit_4_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(5, "nz-form-item")(6, "nz-form-control", 5);
    \u0275\u0275pipe(7, "i18n");
    \u0275\u0275elementStart(8, "nz-input-group", 6);
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "button", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "i18n");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("nzSrc", ctx.user.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.f);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzErrorTip", \u0275\u0275pipeBind1(7, 7, "validation.password.required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("nzOffset", 12)("nzSpan", 12);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.f.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "app.lock"));
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, I18nPipe, NzAvatarModule, NzAvatarComponent, NzFormModule, NzColDirective, NzRowDirective, NzFormDirective, NzFormItemComponent, NzFormControlComponent, NzGridModule, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzInputModule, NzInputDirective, NzInputGroupComponent], styles: ["\n\n[_nghost-%COMP%]     .ant-card-body {\n  position: relative;\n  margin-top: 80px;\n}\n[_nghost-%COMP%]     .avatar {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  margin-left: -20px;\n}\n/*# sourceMappingURL=lock.component.css.map */"] });
var UserLockComponent = _UserLockComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLockComponent, { className: "UserLockComponent", filePath: "src\\app\\routes\\passport\\lock\\lock.component.ts", lineNumber: 19 });
})();

// src/app/routes/passport/login/login.component.ts
function UserLoginComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzType", "error")("nzMessage", ctx_r1.error)("nzShowIcon", true);
  }
}
function UserLoginComponent_ng_template_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.phone-number.required"), " ");
  }
}
function UserLoginComponent_ng_template_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.phone-number.wrong-format"), " ");
  }
}
function UserLoginComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserLoginComponent_ng_template_19_Conditional_0_Template, 2, 3)(1, UserLoginComponent_ng_template_19_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275conditional(0, i_r3.errors.required ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, i_r3.errors.pattern ? 1 : -1);
  }
}
var _UserLoginComponent = class _UserLoginComponent {
  constructor() {
    this.router = inject(Router);
    this.settingsService = inject(SettingsService);
    this.socialService = inject(SocialService);
    this.reuseTabService = inject(ReuseTabService, { optional: true });
    this.tokenService = inject(DA_SERVICE_TOKEN);
    this.startupSrv = inject(StartupService);
    this.http = inject(_HttpClient);
    this.cdr = inject(ChangeDetectorRef);
    this.form = inject(FormBuilder).nonNullable.group({
      userName: ["", [Validators.required, Validators.pattern(/^(admin|user)$/)]],
      password: ["", [Validators.required, Validators.pattern(/^(admin|user)$/)]],
      mobile: ["", [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: ["", [Validators.required]],
      remember: [true]
    });
    this.error = "";
    this.type = 0;
    this.loading = false;
    this.count = 0;
  }
  switch({ index }) {
    this.type = index;
  }
  getCaptcha() {
    const mobile = this.form.controls.mobile;
    if (mobile.invalid) {
      mobile.markAsDirty({ onlySelf: true });
      mobile.updateValueAndValidity({ onlySelf: true });
      return;
    }
    this.count = 59;
    this.interval$ = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) {
        clearInterval(this.interval$);
      }
    }, 1e3);
  }
  submit() {
    this.error = "";
    if (this.type === 0) {
      const { userName, password } = this.form.controls;
      userName.markAsDirty();
      userName.updateValueAndValidity();
      password.markAsDirty();
      password.updateValueAndValidity();
      if (userName.invalid || password.invalid) {
        return;
      }
    } else {
      const { mobile, captcha } = this.form.controls;
      mobile.markAsDirty();
      mobile.updateValueAndValidity();
      captcha.markAsDirty();
      captcha.updateValueAndValidity();
      if (mobile.invalid || captcha.invalid) {
        return;
      }
    }
    this.loading = true;
    this.cdr.detectChanges();
    this.tokenService.set({ token: "123", expired: (/* @__PURE__ */ new Date()).getMilliseconds() * 1e4 });
    this.startupSrv.load().subscribe(() => {
      let url = this.tokenService.referrer.url || "/";
      if (url.includes("/passport")) {
        url = "/";
      }
      this.router.navigateByUrl(url);
    });
  }
  open(type, openType = "href") {
    let url = ``;
    let callback = ``;
    if (environment.production) {
      callback = `https://ng-alain.github.io/ng-alain/#/passport/callback/${type}`;
    } else {
      callback = `http://localhost:4200/#/passport/callback/${type}`;
    }
    switch (type) {
      case "auth0":
        url = `//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(callback)}`;
        break;
      case "github":
        url = `//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=${decodeURIComponent(callback)}`;
        break;
      case "weibo":
        url = `https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=${decodeURIComponent(callback)}`;
        break;
    }
    if (openType === "window") {
      this.socialService.login(url, "/", {
        type: "window"
      }).subscribe((res) => {
        if (res) {
          this.settingsService.setUser(res);
          this.router.navigateByUrl("/");
        }
      });
    } else {
      this.socialService.login(url, "/", {
        type: "href"
      });
    }
  }
  ngOnDestroy() {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }
};
_UserLoginComponent.\u0275fac = function UserLoginComponent_Factory(t) {
  return new (t || _UserLoginComponent)();
};
_UserLoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLoginComponent, selectors: [["passport-login"]], standalone: true, features: [\u0275\u0275ProvidersFeature([SocialService]), \u0275\u0275StandaloneFeature], decls: 45, vars: 33, consts: [["mobileErrorTip", ""], ["nz-form", "", "role", "form", 3, "ngSubmit", "formGroup"], [1, "tabs", 3, "nzSelectChange", "nzAnimated"], [3, "nzTitle"], [1, "mb-lg", 3, "nzType", "nzMessage", "nzShowIcon"], ["nzErrorTip", "Please enter mobile number, muse be: admin or user"], ["nzSize", "large", "nzPrefixIcon", "user"], ["nz-input", "", "formControlName", "userName", "placeholder", "username: admin or user"], ["nzErrorTip", "Please enter password, muse be: ng-alain.com"], ["nzSize", "large", "nzPrefixIcon", "lock"], ["nz-input", "", "type", "password", "formControlName", "password", "placeholder", "password: admin or user"], [3, "nzErrorTip"], ["nz-input", "", "formControlName", "mobile", "placeholder", "mobile number"], [3, "nzGutter"], [3, "nzSpan"], ["nzSize", "large", "nzPrefixIcon", "mail"], ["nz-input", "", "formControlName", "captcha", "placeholder", "captcha"], ["type", "button", "nz-button", "", "nzSize", "large", "nzBlock", "", 3, "click", "disabled", "nzLoading"], ["nz-checkbox", "", "formControlName", "remember"], [1, "text-right", 3, "nzSpan"], ["routerLink", "/passport/register", 1, "forgot"], ["nz-button", "", "type", "submit", "nzType", "primary", "nzSize", "large", "nzBlock", "", 3, "nzLoading"]], template: function UserLoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275elementStart(1, "nz-tabset", 2);
    \u0275\u0275listener("nzSelectChange", function UserLoginComponent_Template_nz_tabset_nzSelectChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.switch($event));
    });
    \u0275\u0275elementStart(2, "nz-tab", 3);
    \u0275\u0275pipe(3, "i18n");
    \u0275\u0275template(4, UserLoginComponent_Conditional_4_Template, 1, 3, "nz-alert", 4);
    \u0275\u0275elementStart(5, "nz-form-item")(6, "nz-form-control", 5)(7, "nz-input-group", 6);
    \u0275\u0275element(8, "input", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "nz-form-item")(10, "nz-form-control", 8)(11, "nz-input-group", 9);
    \u0275\u0275element(12, "input", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "nz-tab", 3);
    \u0275\u0275pipe(14, "i18n");
    \u0275\u0275elementStart(15, "nz-form-item")(16, "nz-form-control", 11)(17, "nz-input-group", 6);
    \u0275\u0275element(18, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, UserLoginComponent_ng_template_19_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "nz-form-item")(22, "nz-form-control", 11);
    \u0275\u0275pipe(23, "i18n");
    \u0275\u0275elementStart(24, "nz-row", 13)(25, "nz-col", 14)(26, "nz-input-group", 15);
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "nz-col", 14)(29, "button", 17);
    \u0275\u0275listener("click", function UserLoginComponent_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getCaptcha());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "i18n");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(32, "nz-form-item")(33, "nz-col", 14)(34, "label", 18);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "i18n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "nz-col", 19)(38, "a", 20);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "i18n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "nz-form-item")(42, "button", 21);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "i18n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mobileErrorTip_r4 = \u0275\u0275reference(20);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275property("nzAnimated", false);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind1(3, 19, "app.login.tab-login-credentials"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ctx.error ? 4 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind1(14, 21, "app.login.tab-login-mobile"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzErrorTip", mobileErrorTip_r4);
    \u0275\u0275advance(6);
    \u0275\u0275property("nzErrorTip", \u0275\u0275pipeBind1(23, 23, "validation.verification-code.required"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzGutter", 8);
    \u0275\u0275advance();
    \u0275\u0275property("nzSpan", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("nzSpan", 8);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.count >= 0)("nzLoading", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.count ? ctx.count + "s" : \u0275\u0275pipeBind1(31, 25, "app.register.get-verification-code"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("nzSpan", 12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 27, "app.login.remember-me"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzSpan", 12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 29, "app.login.forgot-password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzLoading", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 31, "app.login.login"), " ");
  }
}, dependencies: [
  RouterLink,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  I18nPipe,
  NzCheckboxModule,
  NzCheckboxComponent,
  NzTabsModule,
  NzTabSetComponent,
  NzTabComponent,
  NzAlertModule,
  NzAlertComponent,
  NzFormModule,
  NzColDirective,
  NzRowDirective,
  NzFormDirective,
  NzFormItemComponent,
  NzFormControlComponent,
  NzInputModule,
  NzInputDirective,
  NzInputGroupComponent,
  NzButtonModule,
  NzButtonComponent,
  NzTransitionPatchDirective,
  NzWaveDirective,
  NzToolTipModule,
  NzIconModule
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar {\n  margin-bottom: 24px;\n  text-align: center;\n  border-bottom: 0;\n}\n[_nghost-%COMP%]     .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 4px;\n}\n[_nghost-%COMP%]     .icon {\n  cursor: pointer;\n  margin-left: 16px;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  vertical-align: middle;\n  transition: color 0.3s;\n}\n[_nghost-%COMP%]     .icon:hover {\n  color: #1890ff;\n}\n[_nghost-%COMP%]     .other {\n  margin-top: 24px;\n  line-height: 22px;\n  text-align: left;\n}\n[_nghost-%COMP%]     .other nz-tooltip {\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .other .register {\n  float: right;\n}\n[data-theme=dark]   [_nghost-%COMP%]     .icon {\n  color: rgba(255, 255, 255, 0.2);\n}\n[data-theme=dark]   [_nghost-%COMP%]     .icon:hover {\n  color: #fff;\n}\n/*# sourceMappingURL=login.component.css.map */"], changeDetection: 0 });
var UserLoginComponent = _UserLoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLoginComponent, { className: "UserLoginComponent", filePath: "src\\app\\routes\\passport\\login\\login.component.ts", lineNumber: 41 });
})();

// node_modules/@delon/util/fesm2022/form.mjs
function MatchControl(controlName, matchingControlName) {
  return (formGroup) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    if (matchingControl.errors && !matchingControl.errors.matchControl) {
      return null;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchControl: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}

// src/app/routes/passport/register/register.component.ts
var _c0 = () => ({ "width.px": 240 });
function UserRegisterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzType", "error")("nzMessage", ctx_r1.error)("nzShowIcon", true);
  }
}
function UserRegisterComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.email.required"), " ");
  }
}
function UserRegisterComponent_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.email.wrong-format"), " ");
  }
}
function UserRegisterComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserRegisterComponent_ng_template_9_Conditional_0_Template, 2, 3)(1, UserRegisterComponent_ng_template_9_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275conditional(0, (i_r3.errors == null ? null : i_r3.errors.required) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (i_r3.errors == null ? null : i_r3.errors.email) ? 1 : -1);
  }
}
function UserRegisterComponent_ng_template_16_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.password.strength.strong"));
  }
}
function UserRegisterComponent_ng_template_16_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.password.strength.medium"));
  }
}
function UserRegisterComponent_ng_template_16_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.password.strength.short"));
  }
}
function UserRegisterComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, UserRegisterComponent_ng_template_16_Case_1_Template, 3, 3)(2, UserRegisterComponent_ng_template_16_Case_2_Template, 3, 3)(3, UserRegisterComponent_ng_template_16_Case_3_Template, 3, 3);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275element(5, "nz-progress", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "i18n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (tmp_6_0 = ctx_r1.status) === "ok" ? 1 : tmp_6_0 === "pass" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("progress-", ctx_r1.status, "");
    \u0275\u0275advance();
    \u0275\u0275property("nzPercent", ctx_r1.progress)("nzStatus", ctx_r1.passwordProgressMap[ctx_r1.status])("nzStrokeWidth", 6)("nzShowInfo", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "validation.password.strength.msg"));
  }
}
function UserRegisterComponent_ng_template_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.confirm-password.required"), " ");
  }
}
function UserRegisterComponent_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.password.twice"), " ");
  }
}
function UserRegisterComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserRegisterComponent_ng_template_22_Conditional_0_Template, 2, 3)(1, UserRegisterComponent_ng_template_22_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    \u0275\u0275conditional(0, (i_r4.errors == null ? null : i_r4.errors.required) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (i_r4.errors == null ? null : i_r4.errors.matchControl) ? 1 : -1);
  }
}
function UserRegisterComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-select", 29);
    \u0275\u0275element(1, "nz-option", 30)(2, "nz-option", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", "+86")("nzValue", "+86");
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", "+87")("nzValue", "+87");
  }
}
function UserRegisterComponent_ng_template_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.phone-number.required"), " ");
  }
}
function UserRegisterComponent_ng_template_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "validation.phone-number.wrong-format"), " ");
  }
}
function UserRegisterComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserRegisterComponent_ng_template_30_Conditional_0_Template, 2, 3)(1, UserRegisterComponent_ng_template_30_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275conditional(0, (i_r5.errors == null ? null : i_r5.errors.required) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (i_r5.errors == null ? null : i_r5.errors.pattern) ? 1 : -1);
  }
}
var _UserRegisterComponent = class _UserRegisterComponent {
  constructor() {
    this.router = inject(Router);
    this.http = inject(_HttpClient);
    this.cdr = inject(ChangeDetectorRef);
    this.form = inject(FormBuilder).nonNullable.group({
      mail: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), _UserRegisterComponent.checkPassword.bind(this)]],
      confirm: ["", [Validators.required, Validators.minLength(6)]],
      mobilePrefix: ["+86"],
      mobile: ["", [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: ["", [Validators.required]]
    }, {
      validators: MatchControl("password", "confirm")
    });
    this.error = "";
    this.type = 0;
    this.loading = false;
    this.visible = false;
    this.status = "pool";
    this.progress = 0;
    this.passwordProgressMap = {
      ok: "success",
      pass: "normal",
      pool: "exception"
    };
    this.count = 0;
  }
  static checkPassword(control) {
    if (!control) {
      return null;
    }
    const self = this;
    self.visible = !!control.value;
    if (control.value && control.value.length > 9) {
      self.status = "ok";
    } else if (control.value && control.value.length > 5) {
      self.status = "pass";
    } else {
      self.status = "pool";
    }
    if (self.visible) {
      self.progress = control.value.length * 10 > 100 ? 100 : control.value.length * 10;
    }
  }
  getCaptcha() {
    const { mobile } = this.form.controls;
    if (mobile.invalid) {
      mobile.markAsDirty({ onlySelf: true });
      mobile.updateValueAndValidity({ onlySelf: true });
      return;
    }
    this.count = 59;
    this.cdr.detectChanges();
    this.interval$ = setInterval(() => {
      this.count -= 1;
      this.cdr.detectChanges();
      if (this.count <= 0) {
        clearInterval(this.interval$);
      }
    }, 1e3);
  }
  // #endregion
  submit() {
    this.error = "";
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    this.loading = true;
    this.cdr.detectChanges();
    this.http.post("/register", data, null, {
      context: new HttpContext().set(ALLOW_ANONYMOUS, true)
    }).pipe(finalize(() => {
      this.loading = false;
      this.cdr.detectChanges();
    })).subscribe(() => {
      this.router.navigate(["passport", "register-result"], { queryParams: { email: data.mail } });
    });
  }
  ngOnDestroy() {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }
};
_UserRegisterComponent.\u0275fac = function UserRegisterComponent_Factory(t) {
  return new (t || _UserRegisterComponent)();
};
_UserRegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRegisterComponent, selectors: [["passport-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 34, consts: [["mailErrorTip", ""], ["pwdCdkTpl", ""], ["confirmErrorTip", ""], ["addOnBeforeTemplate", ""], ["mobileErrorTip", ""], ["nz-form", "", "role", "form", 3, "ngSubmit", "formGroup"], [1, "mb-lg", 3, "nzType", "nzMessage", "nzShowIcon"], [3, "nzErrorTip"], ["nzSize", "large", "nzAddonBeforeIcon", "user"], ["nz-input", "", "formControlName", "mail", "placeholder", "Email"], ["nzSize", "large", "nzAddonBeforeIcon", "lock", "nz-popover", "", "nzPopoverPlacement", "right", "nzPopoverTrigger", "focus", "nzPopoverOverlayClassName", "register-password-cdk", 3, "nzPopoverVisibleChange", "nzPopoverVisible", "nzPopoverOverlayStyle", "nzPopoverContent"], ["nz-input", "", "type", "password", "formControlName", "password", "placeholder", "Password"], ["nzSize", "large", "nzAddonBeforeIcon", "lock"], ["nz-input", "", "type", "password", "formControlName", "confirm", "placeholder", "Confirm Password"], ["nzSize", "large", 3, "nzAddOnBefore"], ["formControlName", "mobile", "nz-input", "", "placeholder", "Phone number"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzSize", "large", "nzAddonBeforeIcon", "mail"], ["nz-input", "", "formControlName", "captcha", "placeholder", "Captcha"], ["type", "button", "nz-button", "", "nzSize", "large", "nzBlock", "", 3, "click", "disabled", "nzLoading"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "type", "submit", 1, "submit", 3, "nzLoading"], ["routerLink", "/passport/login", 1, "login"], [2, "padding", "4px 0"], [3, "nzPercent", "nzStatus", "nzStrokeWidth", "nzShowInfo"], [1, "mt-sm"], [1, "success"], [1, "warning"], [1, "error"], ["formControlName", "mobilePrefix", 2, "width", "100px"], [3, "nzLabel", "nzValue"]], template: function UserRegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 5);
    \u0275\u0275listener("ngSubmit", function UserRegisterComponent_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275template(4, UserRegisterComponent_Conditional_4_Template, 1, 3, "nz-alert", 6);
    \u0275\u0275elementStart(5, "nz-form-item")(6, "nz-form-control", 7)(7, "nz-input-group", 8);
    \u0275\u0275element(8, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, UserRegisterComponent_ng_template_9_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "nz-form-item")(12, "nz-form-control", 7);
    \u0275\u0275pipe(13, "i18n");
    \u0275\u0275elementStart(14, "nz-input-group", 10);
    \u0275\u0275twoWayListener("nzPopoverVisibleChange", function UserRegisterComponent_Template_nz_input_group_nzPopoverVisibleChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(15, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, UserRegisterComponent_ng_template_16_Template, 9, 11, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "nz-form-item")(19, "nz-form-control", 7)(20, "nz-input-group", 12);
    \u0275\u0275element(21, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, UserRegisterComponent_ng_template_22_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "nz-form-item")(25, "nz-form-control", 7)(26, "nz-input-group", 14);
    \u0275\u0275template(27, UserRegisterComponent_ng_template_27_Template, 3, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(29, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, UserRegisterComponent_ng_template_30_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "nz-form-item")(33, "nz-form-control", 7);
    \u0275\u0275pipe(34, "i18n");
    \u0275\u0275elementStart(35, "div", 16)(36, "div", 17)(37, "nz-input-group", 18);
    \u0275\u0275element(38, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 17)(40, "button", 20);
    \u0275\u0275listener("click", function UserRegisterComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getCaptcha());
    });
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "i18n");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "nz-form-item")(44, "button", 21);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "i18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "a", 22);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "i18n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mailErrorTip_r6 = \u0275\u0275reference(10);
    const pwdCdkTpl_r7 = \u0275\u0275reference(17);
    const confirmErrorTip_r8 = \u0275\u0275reference(23);
    const addOnBeforeTemplate_r9 = \u0275\u0275reference(28);
    const mobileErrorTip_r10 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 21, "app.register.register"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx.error ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzErrorTip", mailErrorTip_r6);
    \u0275\u0275advance(6);
    \u0275\u0275property("nzErrorTip", \u0275\u0275pipeBind1(13, 23, "validation.password.required"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("nzPopoverVisible", ctx.visible);
    \u0275\u0275property("nzPopoverOverlayStyle", \u0275\u0275pureFunction0(33, _c0))("nzPopoverContent", pwdCdkTpl_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("nzErrorTip", confirmErrorTip_r8);
    \u0275\u0275advance(6);
    \u0275\u0275property("nzErrorTip", mobileErrorTip_r10);
    \u0275\u0275advance();
    \u0275\u0275property("nzAddOnBefore", addOnBeforeTemplate_r9);
    \u0275\u0275advance(7);
    \u0275\u0275property("nzErrorTip", \u0275\u0275pipeBind1(34, 25, "validation.verification-code.required"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzGutter", 8);
    \u0275\u0275advance();
    \u0275\u0275property("nzSpan", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("nzSpan", 8);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.count > 0)("nzLoading", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.count ? ctx.count + "s" : \u0275\u0275pipeBind1(42, 27, "app.register.get-verification-code"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("nzLoading", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 29, "app.register.register"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 31, "app.register.sign-in"));
  }
}, dependencies: [
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  I18nPipe,
  RouterLink,
  NzAlertModule,
  NzAlertComponent,
  NzFormModule,
  NzColDirective,
  NzRowDirective,
  NzFormDirective,
  NzFormItemComponent,
  NzFormControlComponent,
  NzInputModule,
  NzInputDirective,
  NzInputGroupComponent,
  NzPopoverModule,
  NzPopoverDirective,
  NzProgressModule,
  NzProgressComponent,
  NzSelectModule,
  NzOptionComponent,
  NzSelectComponent,
  NzGridModule,
  NzButtonModule,
  NzButtonComponent,
  NzTransitionPatchDirective,
  NzWaveDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     h3 {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .submit {\n  width: 50%;\n}\n[_nghost-%COMP%]     .login {\n  float: right;\n  line-height: 40px;\n}\n  .register-password-cdk .success,   .register-password-cdk .warning,   .register-password-cdk .error {\n  transition: color 0.3s;\n}\n  .register-password-cdk .success {\n  color: #52c41a;\n}\n  .register-password-cdk .warning {\n  color: #faad14;\n}\n  .register-password-cdk .error {\n  color: #ff4d4f;\n}\n  .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n/*# sourceMappingURL=register.component.css.map */"], changeDetection: 0 });
var UserRegisterComponent = _UserRegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRegisterComponent, { className: "UserRegisterComponent", filePath: "src\\app\\routes\\passport\\register\\register.component.ts", lineNumber: 39 });
})();

// src/app/routes/passport/register-result/register-result.component.ts
var _c02 = (a0) => ({ email: a0 });
function UserRegisterResultComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "app.register-result.msg", \u0275\u0275pureFunction1(4, _c02, ctx_r1.email)), " ");
  }
}
var _UserRegisterResultComponent = class _UserRegisterResultComponent {
  constructor() {
    this.msg = inject(NzMessageService);
    this.email = "";
  }
};
_UserRegisterResultComponent.\u0275fac = function UserRegisterResultComponent_Factory(t) {
  return new (t || _UserRegisterResultComponent)();
};
_UserRegisterResultComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRegisterResultComponent, selectors: [["passport-register-result"]], inputs: { email: "email" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 11, consts: [["title", ""], ["type", "success", 3, "title", "description"], ["nz-button", "", "nzSize", "large", 3, "click", "nzType"], ["routerLink", "/", "nz-button", "", "nzSize", "large"], [1, "title", 2, "font-size", "20px"]], template: function UserRegisterResultComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "result", 1);
    \u0275\u0275pipe(1, "i18n");
    \u0275\u0275template(2, UserRegisterResultComponent_ng_template_2_Template, 3, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function UserRegisterResultComponent_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.msg.success("email"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "i18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "i18n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const title_r3 = \u0275\u0275reference(3);
    \u0275\u0275propertyInterpolate("description", \u0275\u0275pipeBind1(1, 5, "app.register-result.activation-email"));
    \u0275\u0275property("title", title_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("nzType", "primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "app.register-result.view-mailbox"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "app.register-result.back-home"), " ");
  }
}, dependencies: [RouterLink, I18nPipe, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, ResultModule, ResultComponent], encapsulation: 2 });
var UserRegisterResultComponent = _UserRegisterResultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRegisterResultComponent, { className: "UserRegisterResultComponent", filePath: "src\\app\\routes\\passport\\register-result\\register-result.component.ts", lineNumber: 14 });
})();

// src/app/routes/passport/routes.ts
var routes = [
  // passport
  {
    path: "passport",
    component: LayoutPassportComponent,
    children: [
      {
        path: "login",
        component: UserLoginComponent,
        data: { title: "\u767B\u5F55", titleI18n: "app.login.login" }
      },
      {
        path: "register",
        component: UserRegisterComponent,
        data: { title: "\u6CE8\u518C", titleI18n: "app.register.register" }
      },
      {
        path: "register-result",
        component: UserRegisterResultComponent,
        data: { title: "\u6CE8\u518C\u7ED3\u679C", titleI18n: "app.register.register" }
      },
      {
        path: "lock",
        component: UserLockComponent,
        data: { title: "\u9501\u5C4F", titleI18n: "app.lock" }
      }
    ]
  },
  // 单页不包裹Layout
  { path: "passport/callback/:type", component: CallbackComponent }
];
export {
  routes
};
//# sourceMappingURL=chunk-BKRIWMB6.js.map
