import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSwitchComponent } from './switch.component';
import { NzxSwitchModule } from '@xmagic/nzx-antd/switch';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldSwitchComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzxSwitchModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'switch',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzSwitchModule {}
