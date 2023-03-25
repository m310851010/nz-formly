import { DatePipe } from '@angular/common';
import { TemplateRef } from '@angular/core';
import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';

/**
 * 多行文本模板配置
 */
export interface TimePickerOptions extends ControlOptions {
  /**
   * 组件内部 input 的 id 值
   */
  nzId?: string;
  /**
   * 当前时间
   */
  ngModel?: Date;
  /**
   * 选择框底部显示自定义的内容
   */
  nzAddOn?: TemplateRef<void>;
  nzAddOnName?: string;
  /**
   * 是否展示清除按钮
   */
  nzAllowEmpty?: boolean;
  /**
   * 自动获取焦点
   */
  nzAutoFocus?: boolean;
  /**
   * 浮层是否应带有背景板
   */
  nzBackdrop?: boolean;
  /**
   * 清除按钮的提示文案
   */
  nzClearText?: string;
  /**
   * 此刻按钮文本
   */
  nzNowText?: string;
  /**
   * 确认按钮文本
   */
  nzOkText?: string;
  /**
   * 当 [ngModel] 不存在时，可以设置面板打开时默认选中的值
   */
  nzDefaultOpenValue?: Date;
  /**
   * 禁用全部操作
   */
  nzDisabled?: boolean;
  /**
   * 禁止选择部分小时选项
   */
  nzDisabledHours?: () => number[];
  /**
   * 禁止选择部分分钟选项
   */
  nzDisabledMinutes?: (hour: number) => number[];
  /**
   * 禁止选择部分秒选项
   */
  nzDisabledSeconds?: (hour: number, minute: number) => number[];
  /**
   * 展示的时间格式
   */
  nzFormat?: string;
  /**
   * 隐藏禁止选择的选项
   */
  nzHideDisabledOptions?: boolean;
  /**
   * 小时选项间隔
   */
  nzHourStep?: number;
  /**
   * 分钟选项间隔
   */
  nzMinuteStep?: number;
  /**
   * 秒选项间隔
   */
  nzSecondStep?: number;
  /**
   * 时间选择框大小
   */
  nzSize?: 'large' | 'small' | 'default';
  /**
   * 设置校验状态
   */
  nzStatus?: 'error' | 'warning';
  /**
   * 没有值的时候显示的内容
   */
  nzPlaceHolder?: string;
  /**
   * 弹出层类名
   */
  nzPopupClassName?: string;
  /**
   * 使用12小时制，为true时format默认为h:mm:ss a
   */
  nzUse12Hours?: boolean;
  /**
   * 自定义的后缀图标
   */
  nzSuffixIcon?: string;
  /**
   * 面板打开/关闭时的回调
   */
  nzOpenChange?: (evt: boolean, field: NzFormlyFieldConfig<TimePickerOptions>, instance: NzTimePickerComponent) => void;
}

/**
 *  grid配置
 */
export interface TimePickerFieldConfig extends NzFormlyFieldConfig<TimePickerOptions> {
  type: 'textarea';
}
