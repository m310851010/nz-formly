import { NgModule } from '@angular/core';
import { FormlyFieldUploadComponent } from './upload.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxUploadModule } from '@xmagic/nzx-antd/upload';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldUploadComponent;

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    NzxUploadModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'upload',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    }),
    ReactiveFormsModule
  ]
})
export class FormlyNzUploadModule {}
