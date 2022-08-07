import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTimePickerComponent } from './time-picker.component';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

const COMPONENT = FormlyFieldTimePickerComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
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
  ],
  exports: [COMPONENT]
})
export class FormlyNzTimePickerModule {}
