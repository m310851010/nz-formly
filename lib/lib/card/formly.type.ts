import { TemplateRef } from '@angular/core';
import { NzFormlyFieldConfig } from '../formly-utils';
import { CardWrapperOptions } from '../wrappers/card-wrapper/formly.type';

/**
 * 卡片模板配置
 */
export interface CardOptions extends CardWrapperOptions {
  /**
   * 内容
   */
  nzContent?: string | TemplateRef<{ $implicit: CardOptions; options: CardOptions }>;
  nzContentName?: string;
}

/**
 *  上传文件配置
 */
export interface CardFieldConfig extends NzFormlyFieldConfig<CardOptions> {
  type: 'card';
}
