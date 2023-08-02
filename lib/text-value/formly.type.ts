import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * Tabs模板配置
 */
export interface TextOptions extends ControlOptions {
  ngClass?:
    | string
    | string[]
    | Set<string>
    | {
        [klass: string]: NzSafeAny;
      };

  ngStyle?: {
    [klass: string]: any;
  } | null;

  /**
   * 格式化函数
   * @param value 表单值
   * @param field 当前字段
   */
  format?: (
    value: NzSafeAny,
    field: NzFormlyFieldConfig<TextOptions>
  ) => Observable<NzSafeAny> | Promise<NzSafeAny> | NzSafeAny | null;

  /**
   * 默认显示文本
   */
  defaultText?: string;
}

/**
 * Tabs配置
 */
export interface TextFieldConfig extends NzFormlyFieldConfig<TextOptions & FieldWrapperOptions> {
  type: 'text';
}
