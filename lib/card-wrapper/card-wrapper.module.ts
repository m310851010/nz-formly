import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = CardWrapperComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzCardModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'card-wrapper',
          component: COMPONENT
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzCardWrapperModule {}
