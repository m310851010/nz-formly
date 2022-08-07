import { NgModule } from '@angular/core';
import { FormlyFieldBetweenTimeComponent } from './between-time.component';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { BetweenTimeModule } from '@xmagic/nzx-antd/between-time';

const COMPONENT = FormlyFieldBetweenTimeComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    BetweenTimeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'between-time',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyFieldBetweenTimeModule {}
