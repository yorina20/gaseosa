import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  HighContrastModeDetector
<<<<<<<< HEAD:.angular/cache/19.2.11/gaseosa/vite/deps_ssr/chunk-GFZ2V33D.js
} from "./chunk-55LBGNUJ.js";
========
} from "./chunk-6HKRVM7U.js";
>>>>>>>> 8b096f8cd58b69319a47301fcef4a030571f2129:.angular/cache/19.2.11/gaseosa/vite/deps_ssr/chunk-6ORSSHXS.js
import {
  BidiModule
} from "./chunk-7ACVPLRB.js";
import {
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-YWNTH3TK.js";

// node_modules/@angular/material/fesm2022/common-module-WayjW0Pb.mjs
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: () => true
});
var MatCommonModule = class _MatCommonModule {
  constructor() {
    inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
  }
  static ɵfac = function MatCommonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCommonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatCommonModule,
    imports: [BidiModule],
    exports: [BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], () => [], null);
})();

export {
  MatCommonModule
};
<<<<<<<< HEAD:.angular/cache/19.2.11/gaseosa/vite/deps_ssr/chunk-GFZ2V33D.js
//# sourceMappingURL=chunk-GFZ2V33D.js.map
========
//# sourceMappingURL=chunk-6ORSSHXS.js.map
>>>>>>>> 8b096f8cd58b69319a47301fcef4a030571f2129:.angular/cache/19.2.11/gaseosa/vite/deps_ssr/chunk-6ORSSHXS.js
