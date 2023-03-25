import { NgModule } from '@angular/core';
import { FormlyFieldBetweenTimeComponent } from './between-time.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxBetweenTimeModule } from '@xmagic/nzx-antd/between-time';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldBetweenTimeComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzxBetweenTimeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'between-time',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyFieldBetweenTimeModule {}
