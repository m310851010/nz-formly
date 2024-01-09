import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTextValueComponent } from './text-value.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { NzFormModule } from 'ng-zorro-antd/form';

const COMPONENT = FormlyFieldTextValueComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzxPipeModule,
    NzFormModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'text',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzTextValueModule {}
