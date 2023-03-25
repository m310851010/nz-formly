import { FormlyExtension } from '@ngx-formly/core';

/**
 * 添加默认placeholder
 */
export const defaultPlaceholderExtension: FormlyExtension = {
  prePopulate(field): void {
    if (!field.props?.label || field.props?.placeholder !== undefined || field.props?.nzPlaceholder !== undefined) {
      return;
    }
    const selectable = ['select', 'tree-select', 'cascader', 'date-picker', 'time-picker'];
    field.props = {
      ...field.props,
      placeholder:
        selectable.indexOf(field.type as string) >= 0 ? `请选择${field.props?.label}` : `请输入${field.props?.label}`
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
