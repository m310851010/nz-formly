import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldDividerComponent } from './divider.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldDividerComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzDividerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'divider',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzDividerModule {}
