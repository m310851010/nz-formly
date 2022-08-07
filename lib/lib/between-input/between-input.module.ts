import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldBetweenInputComponent } from './between-input.component';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { NzxBetweenInputModule } from '@xmagic/nzx-antd/between-input';
const COMPONENT = FormlyFieldBetweenInputComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzxBetweenInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'between-input',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyFieldBetweenInputModule {}
