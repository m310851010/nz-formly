import { NzButtonSize } from 'ng-zorro-antd/button';
import { DropdownWrapperOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { ButtonOptions } from '@xmagic/nz-formly/button';
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
