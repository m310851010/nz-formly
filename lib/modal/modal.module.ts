import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormlyFieldModalComponent } from './modal.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxModalModule } from '@xmagic/nzx-antd/modal';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

const COMPONENT = FormlyFieldModalComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzModalModule,
    NzxModalModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'modal',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzModalModule {}
