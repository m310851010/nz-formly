import { TemplateRef } from '@angular/core';
import { DropdownWrapperOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';

/**
 * Divider 配置项
 */
export interface DividerOptions extends DropdownWrapperOptions {
  /**
   * 是否虚线
   */
  nzDashed?: boolean;
  /**
   * 水平还是垂直类型
   */
  nzType?: 'horizontal' | 'vertical';
  /**
   * 中间文字
   */
  nzText?: string | TemplateRef<void>;
  nzTextName?: string;
  /**
   * 文字是否显示为普通正文样式
   */
  nzPlain?: boolean;
  /**
   * 中间文字方向
   */
  nzOrientation?: 'center' | 'left' | 'right';
}

/**
 *  Divider配置
 */
export interface DividerFieldConfig extends NzFormlyFieldConfig<DividerOptions> {
  type: 'divider';
}
