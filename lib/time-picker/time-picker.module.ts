import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTimePickerComponent } from './time-picker.component';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldTimePickerComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTimePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'time-picker',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzTimePickerModule {}
