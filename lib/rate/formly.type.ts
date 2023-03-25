import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { NzRateComponent } from 'ng-zorro-antd/rate';

/**
 * Rate模板配置
 */
export interface RateOptions extends ControlOptions {
  /**
   * 是否允许再次点击后清除
   */
  nzAllowClear?: boolean;
  /**
   * 是否允许半选
   */
  nzAllowHalf?: boolean;
  /**
   * 自动获取焦点
   */
  nzAutoFocus?: boolean;
  /**
   * 自定义字符
   */
  nzCharacter?: TemplateRef<void>;
  nzCharacterName?: string;
  /**
   * star 总数
   */
  nzCount?: number;
  /**
   * 只读，无法进行交互
   */
  nzDisabled?: boolean;
  /**
   * 自定义每项的提示信息
   */
  nzTooltips?: string[];
  /**
   * 失去焦点时的回调
   */
  nzOnBlur?: (evt: FocusEvent, field: RateFieldConfig, instance: NzRateComponent) => void;
  /**
   * 获取焦点时的回调
   */
  nzOnFocus?: (evt: FocusEvent, field: RateFieldConfig, instance: NzRateComponent) => void;
  /**
   * 鼠标经过时数值变化的回调
   */
  nzOnHoverChange?: (evt: number, field: RateFieldConfig, instance: NzRateComponent) => void;
  /**
   * 按键回调
   */
  nzOnKeyDown?: (evt: KeyboardEvent, field: RateFieldConfig, instance: NzRateComponent) => void;

}

/**
 * rate配置
 */
export interface RateFieldConfig extends NzFormlyFieldConfig<RateOptions> {
  type: 'rate';
}
