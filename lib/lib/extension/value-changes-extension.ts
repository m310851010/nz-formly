import { FormlyExtension } from '@ngx-formly/core';

/**
 * 自动添加valueChanges函数
 */
export const valueChangesExtension: FormlyExtension = {
  postPopulate(field): void {
    if (!field.props?.valueChanges) {
      return;
    }
    if (field.formControl) {
      field.formControl.valueChanges.subscribe(value => field.props?.valueChanges(value, field));
    }
  }
};

/**
 * valueChanges函数配置
 */
export const valueChangesExtensionOption = {
  name: 'value-changes',
  extension: valueChangesExtension
};
