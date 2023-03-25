import { NgModule } from '@angular/core';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTreeSelectComponent } from './tree-select.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldTreeSelectComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
