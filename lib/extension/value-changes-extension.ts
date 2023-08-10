import { FormlyExtension } from '@ngx-formly/core';

/**
 * 自动添加valueChanges函数
 * @example
 * fields = [
 * {
 *  type: 'input',
 *  props: {
 *    valueChanges: (value, field) => {}
 *  }
 * }
 * ]
 */
export const valueChangesExtension: FormlyExtension = {
  postPopulate(field): void {
    if (!field.formControl || !field.props?.valueChanges || field.props.valueChanges.observed) {
      return;
    }

    field.props.valueChanges.observed = true;
    field.formControl.valueChanges.subscribe(value => field.props!.valueChanges(value, field));
  }
};

/**
 * valueChanges函数配置
 */
export const valueChangesExtensionOption = {
  name: 'value-changes',
  extension: valueChangesExtension
};
