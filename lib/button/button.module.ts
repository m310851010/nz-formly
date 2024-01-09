import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldButtonComponent } from './button.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const COMPONENT = FormlyFieldButtonComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button',
          component: COMPONENT
        }
      ]
    }),
    NzDropDownModule
  ]
})
export class FormlyNzButtonModule {}
