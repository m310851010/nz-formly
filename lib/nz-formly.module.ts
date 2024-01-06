import { NgModule } from '@angular/core';

import { FormlyModule } from '@ngx-formly/core';
import { defaultPlaceholderExtensionOption, valueChangesExtensionOption } from '@xmagic/nz-formly/extension';
import { NzxFormUtils } from '@xmagic/nzx-antd/util';

@NgModule({
  imports: [
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: (error, field) => `${field.props?.label}不能为空` },
        { name: 'minLength', message: (error, field) => `至少输入${field.props!.minLength}个字符` },
        { name: 'maxLength', message: (error, field) => `最多输入${field.props!.maxLength}个字符` },
        { name: 'max', message: (error, field) => `不能超过${field.props!.max}` },
        { name: 'min', message: (error, field) => `不能小于${field.props!.min}` },
        { name: 'pattern', message: (error, field) => `${field.props!.label}格式不正确` },
        { name: 'email', message: '邮箱格式不正确,例如:12345@qq.com' },
        { name: 'mobile', message: '手机号格式不正确,例如:18812345678' },
        { name: 'notBlank', message: '首尾不能包含空格' }
      ],
      validators: [
        { name: 'email', validation: NzxFormUtils.email() },
        { name: 'mobile', validation: NzxFormUtils.mobile() },
        {
          name: 'notBlank',
          validation: control => {
            if (!control.value) {
              return null;
            }
            return /^[\s\uFEFF]+|[\s\uFEFF]+$/.test(control.value) ? { notBlank: {} } : null;
          }
        }
      ],
      extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
    })
  ]
})
export class NzFormlyModule {}
