import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTextareaComponent } from './textarea.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldTextareaComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzTextareaModule {}
