import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTableComponent } from './table.component';
import { NzxDirectiveModule } from '@xmagic/nzx-antd/directive';
import { NzxTableModule } from '@xmagic/nzx-antd/table';
import { FormlyModule } from '@ngx-formly/core';

const COMPONENT = FormlyFieldTableComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzxTableModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'table',
          component: COMPONENT
        }
      ]
    }),
    NzxDirectiveModule
  ],
  exports: [COMPONENT]
})
export class FormlyNzTableModule {}
