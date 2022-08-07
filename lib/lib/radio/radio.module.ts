import { NgModule } from '@angular/core';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldRadioComponent } from './radio.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

const COMPONENT = FormlyFieldRadioComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzRadioModule,
    NzIconModule,
    NzButtonModule,
    NzxPipeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    }),
    NzOutletModule
  ],
  exports: [COMPONENT]
})
export class FormlyNzRadioModule {}
