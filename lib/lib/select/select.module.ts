import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSelectComponent } from './select.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet'

const COMPONENT = FormlyFieldSelectComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzSelectModule,
    NzxPipeModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    }),
  ],
  exports: [COMPONENT]
})
export class FormlyNzSelectModule {}
