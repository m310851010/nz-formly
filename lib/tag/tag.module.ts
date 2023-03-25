import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTagComponent } from './tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldTagComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzTagModule,
    NzOutletModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tag',
          component: COMPONENT
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzTagModule {}
