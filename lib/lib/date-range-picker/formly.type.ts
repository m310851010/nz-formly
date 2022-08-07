import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseDatePickerOptions, DatePickerDateOptions } from '../date-picker/formly.type';
import { NzFormlyFieldConfig } from '../formly-utils';
import { NzRangePickerComponent, PresetRanges } from 'ng-zorro-antd/date-picker';

/**
 * DateRangePicker配置项
 */
export type DateRangePickerOptions = BaseDatePickerOptions & DatePickerRangeOptions;

export interface DatePickerRangeOptions
  extends Pick<DatePickerDateOptions, 'nzDisabledTime' | 'nzShowTime' | 'nzOnOk'> {
  /**
   * 预设时间范围快捷选择
   */
  nzRanges?: PresetRanges;
  /**
   * 分隔符
   */
  nzSeparator?: string;
  /**
   * 待选日期发生变化的回调
   */
  nzOnCalendarChange?: (evt: Date[], field: FormlyFieldConfig, instance: NzRangePickerComponent) => void;
  /**
   *  日期选择模式
   */
  nzMode?: 'date';
}

/**
 *  DateRangePicker配置
 */
export interface DateRangePickerFieldConfig extends NzFormlyFieldConfig<DateRangePickerOptions> {
  type: 'date-range-picker';
}
