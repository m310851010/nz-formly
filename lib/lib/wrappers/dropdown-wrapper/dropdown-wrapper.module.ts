import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DropdownWrapperComponent } from './dropdown-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { dropdownExtension } from './dropdown.extension';

const COMPONENT = DropdownWrapperComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzDropDownModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'dropdown-wrapper',
          component: COMPONENT
        }
      ],
      extensions: [{ name: 'dropdown', extension: { postPopulate: dropdownExtension } }]
    })
  ]
})
export class FormlyDropdownWrapperModule {}
