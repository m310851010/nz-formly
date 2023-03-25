import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldDatePickerComponent } from './date-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldDatePickerComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date-picker',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzDatePickerModule {}
