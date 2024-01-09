import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldCardComponent } from './card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

const COMPONENT = FormlyFieldCardComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzCardModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'card',
          component: COMPONENT
        }
      ]
    })
  ]
})
export class FormlyNzCardModule {}
