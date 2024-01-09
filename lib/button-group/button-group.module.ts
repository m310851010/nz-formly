import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldButtonGroupComponent } from './button-group.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyModule } from '@ngx-formly/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const COMPONENT = FormlyFieldButtonGroupComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button-group',
          component: COMPONENT
        }
      ]
    }),
    NzDropDownModule
  ]
})
export class FormlyNzButtonGroupModule {}
