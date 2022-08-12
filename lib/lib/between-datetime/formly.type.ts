import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { TemplateRef } from '@angular/core';
import { FunctionProp, NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseBetweenOptions } from '../between-input/base-between.type';
import { CompatibleDate, NzDateMode, SupportTimeOptions } from 'ng-zorro-antd/date-picker';
import { NzDatePickerI18nInterface } from 'ng-zorro-antd/i18n';
import { NzxBetweenDatetimeComponent, DisabledDateType } from '@xmagic/nzx-antd/between-datetime';

/**
 * BetweenDatetime模板配置
 */
export interface BaseBetweenDatetimeOptions<T> extends ControlOptions {
  nzMode?: NzDateMode;

  /**
   * 开始字段Placeholder
   */
  nzxStartPlaceholder?: string | string[];
  /**
   * 结束字段Placeholder
   */
  nzxEndPlaceholder?: string | string[];

  /**
   * 开始字段重命名
   */
  nzxStartReName?: string;
  /**
   * 结束字段重命名
   */
  nzxEndReName?: string;

  /**
   * 组件内部 input 的 id 值
   */
  nzxStartId?: string;

  /**
   * 组件内部 input 的 id 值
   */
  nzxEndId?: string;
  /**
   * 是否显示清除按钮
   */
  nzxStartAllowClear?: boolean;

  /**
   * 是否显示清除按钮
   */
  nzxEndAllowClear?: boolean;
  /**
   * 自动获取焦点
   */
  nzxStartAutoFocus?: boolean;

  /**
   * 自动获取焦点
   */
  nzxEndAutoFocus?: boolean;
  /**
   * 浮层是否应带有背景板
   */
  nzxStartBackdrop?: boolean;

  /**
   * 浮层是否应带有背景板
   */
  nzxEndBackdrop?: boolean;
  /**
   * 默认面板日期
   */
  nzxStartDefaultPickerValue?: Date;

  /**
   * 默认面板日期
   */
  nzxEndDefaultPickerValue?: Date;

  nzxStartShowNow?: boolean;
  nzxEndShowNow?: boolean;

  nzShowToday?: boolean;
  nzxStartShowToday?: boolean;
  nzxEndShowToday?: boolean;

  nzShowTime: SupportTimeOptions | boolean;
  nzxStartShowTime?: SupportTimeOptions | boolean;
  nzxEndShowTime?: SupportTimeOptions | boolean;

  /**
   * 额外的弹出日历 className
   */
  nzxStartDropdownClassName?: string;

  /**
   * 额外的弹出日历 className
   */
  nzxEndDropdownClassName?: string;
  /**
   * 展示的日期格式，见nzFormat特别说明
   */
  nzFormat?: string;

  /**
   * 为 input 标签设置只读属性（避免在移动设备上触发小键盘）
   */
  nzxStartInputReadOnly?: boolean;

  /**
   * 为 input 标签设置只读属性（避免在移动设备上触发小键盘）
   */
  nzxEndInputReadOnly?: boolean;
  /**
   * 国际化配置
   */
  nzLocale?: NzDatePickerI18nInterface;

  /**
   * 额外的弹出日历样式
   */
  nzxStartPopupStyle?: object;

  /**
   * 额外的弹出日历样式
   */
  nzxEndPopupStyle?: object;
  /**
   * 在面板中添加额外的页脚
   */
  nzxStartRenderExtraFooter?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<NzSafeAny> | string>;

  /**
   * 在面板中添加额外的页脚
   */
  nzxEndRenderExtraFooter?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<NzSafeAny> | string>;
  /**
   * 自定义的后缀图标
   */
  nzxStartSuffixIcon?: string | TemplateRef<NzSafeAny>;

  /**
   * 自定义的后缀图标
   */
  nzxEndSuffixIcon?: string | TemplateRef<NzSafeAny>;

  nzxStartDateRender?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<Date> | string>;
  nzxEndDateRender?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<Date> | string>;

  /**
   * 弹出日历和关闭日历的回调
   */
  nzxStartOnOpenChange?: (evt: boolean, field: NzFormlyFieldConfig<BetweenDatetimeOptions>, instance: T) => void;

  /**
   * 弹出日历和关闭日历的回调
   */
  nzxEndOnOpenChange?: (evt: boolean, field: NzFormlyFieldConfig<BetweenDatetimeOptions>, instance: T) => void;

  /**
   * OK按钮点击
   */
  nzxStartOnOk?: (evt: CompatibleDate | null, field: NzFormlyFieldConfig<BetweenDatetimeOptions>, instance: T) => void;

  /**
   * OK按钮点击
   */
  nzxEndOnOk?: (evt: CompatibleDate | null, field: NzFormlyFieldConfig<BetweenDatetimeOptions>, instance: T) => void;

  /**
   * 待选日期发生变化的回调
   */
  nzxStartOnCalendarChange?: (
    evt: (Date | null)[],
    field: NzFormlyFieldConfig<BetweenDatetimeOptions>,
    instance: T
  ) => void;

  /**
   * 待选日期发生变化的回调
   */
  nzxEndOnCalendarChange?: (
    evt: (Date | null)[],
    field: NzFormlyFieldConfig<BetweenDatetimeOptions>,
    instance: T
  ) => void;

  /**
   * 待选日期发生变化的回调
   */
  nzxStartOnPanelChange?: (
    evt: string | NzDateMode[] | string[],
    field: NzFormlyFieldConfig<BetweenDatetimeOptions>,
    instance: T
  ) => void;

  /**
   * 待选日期发生变化的回调
   */
  nzxEndOnPanelChange?: (
    evt: string | NzDateMode[] | string[],
    field: NzFormlyFieldConfig<BetweenDatetimeOptions>,
    instance: T
  ) => void;

  /**
   * 最小时间
   */
  startMinDateTime?: DisabledDateType;

  /**
   * 最大时间
   */
  endMaxDateTime?: DisabledDateType;

  /**
   * 最大时间
   */
  startMaxDateTime?: DisabledDateType;

  /**
   * 最小时间
   */
  endMinDateTime?: DisabledDateType;
}

export type BetweenDatetimeOptions = BaseBetweenDatetimeOptions<NzxBetweenDatetimeComponent> & BaseBetweenOptions;

export interface BetweenDateTimeFieldConfig extends NzFormlyFieldConfig<BetweenDatetimeOptions> {
  type: 'between-datetime';
}
