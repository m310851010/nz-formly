import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSliderComponent } from './slider.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';

const COMPONENT = FormlyFieldSliderComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
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
  ],
  exports: [COMPONENT]
})
export class FormlyNzSliderModule {}
