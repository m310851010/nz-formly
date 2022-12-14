import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';

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
}

/**
 * Tabs配置
 */
export interface TextFieldConfig extends NzFormlyFieldConfig<TextOptions> {
  type: 'text';
}
