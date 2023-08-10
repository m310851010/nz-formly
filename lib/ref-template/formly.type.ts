import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';
/**
 * RefTemplate配置
 */
export interface RefTemplateOptions extends ControlOptions {
  ref?: string | TemplateRef<{ $implicit: RefTemplateFieldConfig; templateOptions: RefTemplateOptions }>;
  refName?: string;
}

/**
 * RefTemplate配置
 */
export interface RefTemplateFieldConfig extends NzFormlyFieldConfig<RefTemplateOptions & FieldWrapperOptions> {
  type: 'ref-template';
}
