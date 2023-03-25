import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldBetweenInputComponent } from './between-input.component';
import { NzxBetweenInputModule } from '@xmagic/nzx-antd/between-input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
const COMPONENT = FormlyFieldBetweenInputComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzxBetweenInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'between-input',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyFieldBetweenInputModule {}
