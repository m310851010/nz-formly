import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable, throwError } from 'rxjs';

import { DEFAULT_STATUS_MESSAGE_MAP, NzxAntdService, ResponseSetting, TableSetting } from '@xmagic/nzx-antd';
import { HttpRequestOptions } from '@xmagic/nzx-antd/nzx-antd.service';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzxStorageService } from '@xmagic/nzx-antd/service';

@Injectable({
  providedIn: 'root'
})
export class NzxAntdConfigService extends NzxAntdService {
  override basePath = '/ma-boot';

  override response: ResponseSetting = {
    data: 'data',
    timeout: error => {
      return error.code === 402;
    },
    handleError: (req, error) => {
      if (error.httpError) {
        this.messageService.error(DEFAULT_STATUS_MESSAGE_MAP[error.code] || DEFAULT_STATUS_MESSAGE_MAP['other']);
      } else if (error.code < 1024) {
        this.messageService.error(error.message);
      }
      return throwError(() => error);
    }
  };

  override table: TableSetting = {
    method: 'post',
    listField: 'list',
    totalField: 'total'
  };

  constructor(
    private messageService: NzMessageService,
    protected storageService: NzxStorageService
  ) {
    super();
  }

  override handleRequest = (req: HttpRequest<NzSafeAny>, url: string): null | HttpRequestOptions => {
    const Authorization =
      this.storageService.getItem<string>('_ma_AUTHORIZATION') || this.storageService.getItem<string>('TOKEN');
    return Authorization ? { setHeaders: { Authorization } } : null;
  };
}
