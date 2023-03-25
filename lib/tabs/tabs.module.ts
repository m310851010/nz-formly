import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyFieldTabsComponent } from './tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet'

const COMPONENT = FormlyFieldTabsComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzTabsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tabs',
          component: COMPONENT
        }
      ]
    }),
    NzButtonModule,
    NzOutletModule
  ],
  exports: [COMPONENT]
})
export class FormlyNzTabsModule { }
