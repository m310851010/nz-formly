import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseDatePickerOptions, DatePickerDateOptions } from '@xmagic/nz-formly/date-picker';
import { NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzRangePickerComponent, PresetRanges } from 'ng-zorro-antd/date-picker';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

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
export interface DateRangePickerFieldConfig extends NzFormlyFieldConfig<DateRangePickerOptions & FieldWrapperOptions> {
  type: 'date-range-picker';
}
