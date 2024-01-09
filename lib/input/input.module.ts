import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInputComponent } from './input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldInputComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzOutletModule,
    NzxPipeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number'
            }
          }
        },
        {
          name: 'autocomplete',
          extends: 'input',
          defaultOptions: {
            props: {
              nzAutocomplete: true
            }
          }
        }
      ]
    }),
    NzAutocompleteModule,
    NzxPipeModule
  ]
})
export class FormlyNzInputModule {}
