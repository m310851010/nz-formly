import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSelectComponent } from './select.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldSelectComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzxPipeModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzSelectModule {}
