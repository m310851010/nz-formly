import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { OptionItem } from '@xmagic/nzx-antd/checkbox';
import { NzRadioButtonStyle } from 'ng-zorro-antd/radio';
import { TemplateRef } from '@angular/core';

/**
 * Radio模板配置
 */
export interface BaseRadioOptions extends ControlOptions {
  /**
   * 启用html渲染,而不是转义html标签
   */
  enableHTML?: boolean;
  /**
   * 自定义渲染option label
   */
  labelTemplate?: string | TemplateRef<{ $implicit: RatioOptionItem; field: RadioFieldConfig }>;
  /**
   * 自定义渲染option label, 模板名称
   */
  labelTemplateName?: string;

  /**
   * nz-radio-group 下所有 input[type="radio"] 的 name 属性
   */
  nzName?: string;
  /**
   * 设定所有 nz-radio disable 状态
   */
  nzDisabled?: boolean;
  /**
   * 大小，只对按钮样式生效
   */
  nzSize?: NzSizeLDSType;
  /**
   * RadioButton 的风格样式，目前有描边和填色两种风格
   */
  nzButtonStyle?: NzRadioButtonStyle;
}

export type RatioOptionItem = OptionItem & {
  /**
   * 文字之前的图标
   */
  beforeIcon?: string;
  /**
   * 文字之后的图标
   */
  afterIcon?: string;
};

export type RadioOptions = BaseRadioOptions & AsyncFormlyOptions<NzSafeAny, RatioOptionItem>;
/**
 * radio配置
 */
export interface RadioFieldConfig extends NzFormlyFieldConfig<RadioOptions> {
  type: 'radio';
}
