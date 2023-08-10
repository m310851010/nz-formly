import { FormlyExtension } from '@ngx-formly/core';

/**
 * 添加默认placeholder
 */
export const defaultPlaceholderExtension: FormlyExtension = {
  prePopulate(field): void {
    if (
      !field.templateOptions?.label ||
      field.templateOptions?.placeholder !== undefined ||
      field.templateOptions?.nzPlaceholder !== undefined
    ) {
      return;
    }
    const selectable = ['select', 'tree-select', 'cascader', 'date-picker', 'time-picker'];
    field.templateOptions = {
      ...field.templateOptions,
      placeholder:
        selectable.indexOf(field.type as string) >= 0
          ? `请选择${field.templateOptions?.label}`
          : `请输入${field.templateOptions?.label}`
    };
  }
};

/**
 * 默认placeholder 配置
 */
export const defaultPlaceholderExtensionOption = {
  name: 'default-label',
  extension: defaultPlaceholderExtension
};
