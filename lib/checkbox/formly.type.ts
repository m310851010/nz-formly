import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzxCheckboxOption } from '@xmagic/nzx-antd/checkbox';

/**
 * Checkbox模板配置
 */
export type CheckboxOptions = ControlOptions & AsyncFormlyOptions<NzSafeAny, NzxCheckboxOption>;

/**
 * Checkbox配置
 */
export interface CheckboxFieldConfig extends NzFormlyFieldConfig<CheckboxOptions> {
  type: 'checkbox';
}
