import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTextareaComponent } from './textarea.component';
import { NzInputModule } from 'ng-zorro-antd/input';

const COMPONENT = FormlyFieldTextareaComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzTextareaModule {}
