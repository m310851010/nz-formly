import { FormlyFieldConfig } from '@ngx-formly/core';
import { TemplateRef } from '@angular/core';
import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { NzDateMode, NzDatePickerComponent, SupportTimeOptions } from 'ng-zorro-antd/date-picker';

/**
 * DatePicker模板配置
 */
export type DatePickerOptions = BaseDatePickerOptions & DatePickerDateOptions;

export interface BaseDatePickerOptions extends ControlOptions {
  /**
   * 组件内部 input 的 id 值
   */
  nzId?: string;
  /**
   * 是否显示清除按钮
   */
  nzAllowClear?: boolean;
  /**
   * 自动获取焦点
   */
  nzAutoFocus?: boolean;
  /**
   * 浮层是否应带有背景板
   */
  nzBackdrop?: boolean;
  /**
   * 默认面板日期
   */
  nzDefaultPickerValue?: Date;
  /**
   * 禁用
   */
  nzDisabled?: boolean;
  /**
   * 不可选择的日期
   */
  nzDisabledDate?: (current: Date) => boolean;
  /**
   * 额外的弹出日历 className
   */
  nzDropdownClassName?: string;
  /**
   * 展示的日期格式，见nzFormat特别说明
   */
  nzFormat?: string;
  /**
   * 为 input 标签设置只读属性（避免在移动设备上触发小键盘）
   */
  nzInputReadOnly?: boolean;
  /**
   * 选择模式
   */
  nzMode?: NzDateMode;
  /**
   * 输入框提示文字
   */
  nzPlaceHolder?: string | string[];
  /**
   * 额外的弹出日历样式
   */
  nzPopupStyle?: object;
  /**
   * 在面板中添加额外的页脚
   */
  nzRenderExtraFooter?: TemplateRef<{}> | string | (() => TemplateRef<{}> | string);
  nzRenderExtraFooterName?: string;
  /**
   * 输入框大小，large 高度为 40px，small 为 24px，默认是 32px
   */
  nzSize?: 'large' | 'small';
  /**
   * 自定义的后缀图标
   */
  nzSuffixIcon?: string;
  /**
   * 移除边框
   */
  nzBorderless?: boolean;
  /**
   * 内联模式
   */
  nzInline?: boolean;
  /**
   * 弹出日历和关闭日历的回调
   */
  nzOnOpenChange?: (evt: boolean, field: FormlyFieldConfig, instance: NzDatePickerComponent) => void;
}

export interface DatePickerDateOptions {
  /**
   * 自定义日期单元格的内容（month-picker/year-picker不支持）
   */
  nzDateRender?: TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string);
  nzDateRenderName?: string;
  /**
   * 不可选择的时间
   */
  nzDisabledTime?: (current: Date) => {
    nzDisabledHours: number[];
    nzDisabledMinutes: number[];
    nzDisabledSeconds: number[];
  };
  /**
   * 增加时间选择功能
   */
  nzShowTime?: SupportTimeOptions | boolean;
  /**
   * 是否展示“今天”按钮
   */
  nzShowToday?: boolean;
  /**
   * 当设定了nzShowTime的时候，面板是否显示“此刻”按钮
   */
  nzShowNow?: boolean;
  /**
   * 点击确定按钮的回调
   */
  nzOnOk?: (evt: Date, field: FormlyFieldConfig, instance: NzDatePickerComponent) => void;
}

/**
 *  DatePicker配置
 */
export interface DatePickerFieldConfig extends NzFormlyFieldConfig<DatePickerOptions> {
  type: 'date-picker';
}
