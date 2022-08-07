import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCascaderComponent } from './cascader.component';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';

const COMPONENT = FormlyFieldCascaderComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzCascaderModule,
    NzxPipeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascader',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    }),

  ],
  exports: [COMPONENT]
})
export class FormlyNzCascaderModule {}
