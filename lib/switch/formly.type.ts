import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { NzSafeAny, NzSizeDSType } from 'ng-zorro-antd/core/types';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * Switch模板配置
 */
export interface SwitchOptions extends ControlOptions {
  /**
   * 选中时的值
   */
  nzxCheckedValue?: NzSafeAny;
  /**
   * 非选中时的值
   */
  nzxUnCheckedValue?: NzSafeAny;
  /**
   * 	disable 状态
   */
  nzDisabled?: boolean;
  /**
   * 	加载中的开关
   */
  nzLoading?: boolean;
  /**
   * 	是否完全由用户控制状态, Switch 的状态完全由用户接管，不再自动根据点击事件改变数据。
   */
  nzControl?: boolean;
  /**
   * 选中时的内容
   */
  nzCheckedChildren?: string | TemplateRef<void>;
  nzCheckedChildrenName?: string;
  /**
   * 非选中时的内容
   */
  nzUnCheckedChildren?: string | TemplateRef<void>;
  nzUnCheckedChildrenName?: string;
  /**
   * 开关大小
   */
  nzSize?: NzSizeDSType;
}

/**
 * Switch配置
 */
export interface SwitchFieldConfig extends NzFormlyFieldConfig<SwitchOptions & FieldWrapperOptions> {
  type: 'switch';
}
