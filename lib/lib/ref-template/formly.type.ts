import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { TemplateRef } from '@angular/core';
/**
 * RefTemplate配置
 */
export interface RefTemplateOptions extends ControlOptions {
  ref?: string | TemplateRef<{ $implicit: RefTemplateFieldConfig, props: RefTemplateOptions }>;
}

/**
 * RefTemplate配置
 */
export interface RefTemplateFieldConfig extends NzFormlyFieldConfig<RefTemplateOptions> {
  type: 'ref-template';
}
