import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldRepeatComponent } from './repeat.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

const COMPONENT = FormlyFieldRepeatComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: COMPONENT
        }
      ]
    }),
    NzIconModule,
    NzOutletModule
  ]
})
export class FormlyRepeatModule {}
