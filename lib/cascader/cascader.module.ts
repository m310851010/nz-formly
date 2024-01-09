import { NgModule } from '@angular/core';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCascaderComponent } from './cascader.component';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldCascaderComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    })
  ]
})
export class FormlyNzCascaderModule {}
