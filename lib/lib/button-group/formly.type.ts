import { NzButtonSize } from 'ng-zorro-antd/button';
import { ButtonOptions } from '../button/formly.type';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DropdownWrapperOptions } from '../wrappers/dropdown-wrapper/formly.type';
import { NzFormlyFieldConfig } from '../formly-utils';
/**
 * 按钮组模板配置
 */
export interface ButtonGroupOptions extends DropdownWrapperOptions {
  nzSize?: NzButtonSize;
  /**
   * 每个按钮配置
   */
  buttons?: NzFormlyFieldConfig<Omit<ButtonOptions, 'nzSize' | 'textName'>>[];
}

export interface ButtonGroupFieldConfig extends NzFormlyFieldConfig<ButtonGroupOptions> {
  type: 'button-group';
}
