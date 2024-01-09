import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';

import { NzxAntdService } from '@xmagic/nzx-antd';
import { NzxHttpInterceptorModule } from '@xmagic/nzx-antd/http-interceptor';
import { NzxModalModule } from '@xmagic/nzx-antd/modal';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';
import { NzxAntdConfigService } from './nzx-antd-config.service';

registerLocaleData(zh);
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    provideRouter(routes, withHashLocation(), withComponentInputBinding()),
    provideAnimations(),
    importProvidersFrom(NzxModalModule, NzxHttpInterceptorModule),
    provideHttpClient(withInterceptorsFromDi()),
    NzxAntdConfigService,
    { provide: NzxAntdService, useExisting: NzxAntdConfigService }
  ]
};
