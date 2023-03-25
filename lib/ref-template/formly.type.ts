import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
/**
 * RefTemplate配置
 */
export interface RefTemplateOptions extends ControlOptions {
  ref?: string | TemplateRef<{ $implicit: RefTemplateFieldConfig, props: RefTemplateOptions }>;
  refName?: string
}

/**
 * RefTemplate配置
 */
export interface RefTemplateFieldConfig extends NzFormlyFieldConfig<RefTemplateOptions> {
  type: 'ref-template';
}
