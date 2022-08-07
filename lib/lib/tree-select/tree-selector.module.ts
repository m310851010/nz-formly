import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTreeSelectComponent } from './tree-select.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';

const COMPONENT = FormlyFieldTreeSelectComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzTreeSelectModule,
    NzxPipeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree-select',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzTreeSelectModule {}
