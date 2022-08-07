import { NgModule } from '@angular/core';
import { FormlyFieldBetweenDatetimeComponent } from './between-datetime.component';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { BetweenDatetimeModule } from '@xmagic/nzx-antd/between-datetime';

const COMPONENT = FormlyFieldBetweenDatetimeComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    BetweenDatetimeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'between-datetime',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyFieldBetweenDatetimeModule {}
