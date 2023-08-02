import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { BaseInputOptions } from '@xmagic/nz-formly/input';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * 多行文本模板配置
 */
export interface BaseTextareaOptions extends ControlOptions {
  /**
   * textarea 数字提示显示的最大值
   */
  nzMaxCharacterCount?: number;
  /**
   * 自定义计算 characterCount 的函数
   */
  nzComputeCharacterCount?: (v: string) => number;
}

export type TextareaOptions = BaseInputOptions & BaseTextareaOptions;

/**
 *  grid配置
 */
export interface TextareaFieldConfig extends NzFormlyFieldConfig<TextareaOptions & FieldWrapperOptions> {
  type: 'textarea';
}
