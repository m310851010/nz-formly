import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldEchartsComponent } from './echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormlyModule } from '@ngx-formly/core';
import { NzxPipeModule } from '@xmagic/nzx-antd/pipe';
const COMPONENT = FormlyFieldEchartsComponent;
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    FormlyModule.forChild({
      types: [
        {
          name: 'echarts',
          component: COMPONENT
        }
      ]
    }),
    NzxPipeModule
  ]
})
export class FormlyEchartsModule {}
