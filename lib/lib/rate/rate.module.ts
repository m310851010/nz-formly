import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldRateComponent } from './rate.component';
import { NzRateModule } from 'ng-zorro-antd/rate';

const COMPONENT = FormlyFieldRateComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzRateModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rate',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzRateModule {}
