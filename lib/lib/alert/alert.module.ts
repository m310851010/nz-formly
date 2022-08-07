import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldAlertComponent } from './alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldAlertComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzAlertModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'alert',
          component: COMPONENT
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyFieldAlertModule {}
