import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';

/**
 * 下拉菜单项配置
 */
export interface ControlItemOptions extends ControlOptions {
  nzSelected?: boolean;
  nzDisabled?: boolean;
  nzPaddingLeft?: boolean;
}

/**
 *  下拉菜单配置
 */
export interface DropdownFieldConfig extends NzFormlyFieldConfig<ControlItemOptions> {
  type: 'dropdown';
  fieldGroup?: NzFormlyFieldConfig<ControlItemOptions>[];
}
