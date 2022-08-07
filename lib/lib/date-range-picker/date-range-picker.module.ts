import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldDateRangePickerComponent } from './date-range-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

const COMPONENT = FormlyFieldDateRangePickerComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzDatePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date-range-picker',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzDateRangePickerModule {}
