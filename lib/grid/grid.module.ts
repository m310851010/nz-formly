import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldGridComponent } from './grid.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldGridComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzGridModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'row',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzGridModule {}
