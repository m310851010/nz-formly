import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FieldWrapperComponent } from './field-wrapper.component';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

const COMPONENT = FieldWrapperComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzOutletModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'field-wrapper',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzFormFieldModule {}
