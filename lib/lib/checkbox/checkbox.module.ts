import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormlyFieldCheckboxComponent } from './checkbox.component';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { NzxCheckboxModule } from '@xmagic/nzx-antd/checkbox';

const COMPONENT = FormlyFieldCheckboxComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzCheckboxModule,
    NzxPipeModule,
    NzxCheckboxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzCheckboxModule {}
