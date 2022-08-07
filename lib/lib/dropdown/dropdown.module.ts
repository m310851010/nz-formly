import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldDropdownComponent } from './dropdown.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormlyModule } from '@ngx-formly/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const COMPONENT = FormlyFieldDropdownComponent;

@NgModule({
  declarations: [FormlyFieldDropdownComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzDropDownModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'dropdown',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzDropdownModule {}
