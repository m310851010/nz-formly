import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSwitchComponent } from './switch.component';
import { NzxSwitchModule } from '@xmagic/nzx-antd/switch';

const COMPONENT = FormlyFieldSwitchComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
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
  ],
  exports: [COMPONENT]
})
export class FormlyNzSwitchModule {}
