import { NgModule } from '@angular/core';

import { FormlyModule } from '@ngx-formly/core';
import { defaultPlaceholderExtensionOption, valueChangesExtensionOption } from '@xmagic/nz-formly/extension';

@NgModule({
  imports: [
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: (error, field) => `${field.templateOptions?.label}不能为空` },
        { name: 'minLength', message: (error, field) => `至少输入${field.templateOptions!.minLength}个字符` },
        { name: 'maxLength', message: (error, field) => `最多输入${field.templateOptions!.maxLength}个字符` },
        { name: 'max', message: (error, field) => `不能超过${field.templateOptions!.max}` },
        { name: 'min', message: (error, field) => `不能小于${field.templateOptions!.min}` },
        { name: 'pattern', message: (error, field) => `${field.templateOptions!.label}格式不正确` }
      ],
      extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
    })
  ]
})
export class NzFormlyModule {}
