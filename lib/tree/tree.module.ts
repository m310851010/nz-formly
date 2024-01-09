import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTreeComponent } from './tree.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldTreeComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzTreeModule,
    NzxPipeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzTreeModule {}
