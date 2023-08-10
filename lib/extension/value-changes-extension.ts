import { FormlyExtension } from '@ngx-formly/core';

/**
 * 自动添加valueChanges函数
 * @example
 * fields = [
 * {
 *  type: 'input',
 *  templateOptions: {
 *    valueChanges: (value, field) => {}
 *  }
 * }
 * ]
 */
export const valueChangesExtension: FormlyExtension = {
  postPopulate(field): void {
    if (!field.formControl || !field.templateOptions?.valueChanges || field.templateOptions.valueChanges.observed) {
      return;
    }

    field.templateOptions.valueChanges.observed = true;
    field.formControl.valueChanges.subscribe(value => field.templateOptions!.valueChanges(value, field));
  }
};

/**
 * valueChanges函数配置
 */
export const valueChangesExtensionOption = {
  name: 'value-changes',
  extension: valueChangesExtension
};
