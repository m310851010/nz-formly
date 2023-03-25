import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldSpaceComponent } from './space.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldSpaceComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzSpaceModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'space',
          component: COMPONENT
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzSpaceModule {}
