import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { BaseBetweenOptions } from '@xmagic/nz-formly/between-input';
import { TemplateRef } from '@angular/core';
import { NzxBetweenTimeComponent } from '@xmagic/nzx-antd/between-time';
import { DisabledDateType } from '@xmagic/nzx-antd/between-datetime';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

export interface BaseBetweenTimeOptions<T> extends ControlOptions {
  /**
   * 浮层是否应带有背景板
   */
  nzxStartBackdrop?: boolean;

  /**
   * 浮层是否应带有背景板
   */
  nzxEndBackdrop?: boolean;
  /**
   * 自动获取焦点
   */
  nzxStartAutoFocus?: boolean;

  /**
   * 自动获取焦点
   */
  nzxEndAutoFocus?: boolean;
  /**
   * 展示的日期格式，见nzFormat特别说明
   */
  nzFormat?: string;

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
  nzxStartHourStep?: number;
  nzxStartMinuteStep?: number;
  nzxStartSecondStep?: number;
  nzxStartClearText?: string;
  nzxStartNowText?: string;
  nzxStartOkText?: string;
  nzxStartPopupClassName?: string;
  nzxStartAddOn?: TemplateRef<void>;
  nzxStartDefaultOpenValue?: Date;
  nzxStartUse12Hours?: boolean;
  nzxStartHideDisabledOptions?: boolean;
  nzxStartAllowEmpty?: boolean;
  nzxStartOpenChange?: (evt: boolean, field: NzFormlyFieldConfig<BetweenTimeOptions>, instance: T) => void;

  nzxEndHourStep?: number;
  nzxEndMinuteStep?: number;
  nzxEndSecondStep?: number;
  nzxEndClearText?: string;
  nzxEndNowText?: string;
  nzxEndOkText?: string;
  nzxEndPopupClassName?: string;
  nzxEndAddOn?: TemplateRef<void>;
  nzxEndDefaultOpenValue?: Date;

  nzxEndUse12Hours?: boolean;
  nzxEndHideDisabledOptions?: boolean;
  nzxEndAllowEmpty?: boolean;
  nzxEndOpenChange?: (evt: boolean, field: NzFormlyFieldConfig<BetweenTimeOptions>, instance: T) => void;

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

export type BetweenTimeOptions = BaseBetweenTimeOptions<NzxBetweenTimeComponent> &
  BaseBetweenOptions &
  FieldWrapperOptions;

/**
 * BetweenTime 模板配置定义
 */
export interface BetweenTimeFieldConfig extends NzFormlyFieldConfig<BetweenTimeOptions> {
  type: 'between-time';
}
