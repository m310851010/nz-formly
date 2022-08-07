import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldRefTemplateComponent } from './ref-template.component';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { FormlyModule } from '@ngx-formly/core';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe'

const COMPONENT = FormlyFieldRefTemplateComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'ref-template',
          component: COMPONENT
        }
      ]
    }),
    NzxPipeModule
  ],
  exports: [COMPONENT]
})
export class FormlyRefTemplateModule {}
