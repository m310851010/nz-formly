import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSliderComponent } from './slider.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldSliderComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSliderModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'slider',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyNzSliderModule {}
