import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import { ModalWrapperComponent } from './modal-wrapper.component';
import { NzxModalModule } from '@xmagic/nzx-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';

const COMPONENT = ModalWrapperComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzCardModule,
    NzxModalModule,
    NzModalModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'modal-wrapper',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzModalWrapperModule {}
