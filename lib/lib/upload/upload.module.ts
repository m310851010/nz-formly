import { NgModule } from '@angular/core';
import { FormlyFieldUploadComponent } from './upload.component';
import { NzCommTypeModule } from '../nz-comm-type.module';
import { FormlyModule } from '@ngx-formly/core';
import { NzxUploadModule } from '@xmagic/nzx-antd/upload';

const COMPONENT = FormlyFieldUploadComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    NzCommTypeModule,
    NzxUploadModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'upload',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ],
  exports: [COMPONENT]
})
export class FormlyNzUploadModule {}
