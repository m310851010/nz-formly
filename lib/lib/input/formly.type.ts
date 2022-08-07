import { TemplateRef } from '@angular/core';
import { NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { OptionItem } from '@xmagic/nzx-antd/checkbox';

export interface BaseInputOptions {
  /**
   * 是否隐藏边框
   */
  nzBorderless?: boolean;
  /**
   * 设置校验状态
   */
  nzStatus?: 'error' | 'warning';
  type?: 'text' | 'password' | 'email' | 'number' | 'color' | string;

  /**
   * 输入框大小
   */
  nzSize?: NzSizeLDSType;
}

/**
 * 按钮模板配置
 */
export interface InputOptions extends ControlOptions {
  /**
   * 是否显示输入框
   */
  showInput?: boolean;
  /**
   * 带标签的 input，设置后置标签，可以与 nzAddOnBefore 配合使用
   */
  nzAddOnAfter?: string | TemplateRef<void>;
  nzAddOnAfterName?: string;
  /**
   * 带标签的 input，设置前置标签，可以与 nzAddOnAfter 配合使用
   */
  nzAddOnBefore?: string | TemplateRef<void>;
  nzAddOnBeforeName?: string;
  /**
   * 带有前缀图标的 input，可以与 nzSuffix 配合使用
   */
  nzPrefix?: string | TemplateRef<void>;
  nzPrefixName?: string;
  /**
   * 带有后缀图标的 input，可以与 nzPrefix 配合使用
   */
  nzSuffix?: string | TemplateRef<void>;
  nzSuffixName?: string;
  /**
   * 是否用紧凑模式
   */
  nzCompact?: boolean;
  /**
   * 是否用搜索框
   */
  nzSearch?: boolean;
}

export interface InputNumberOptions extends ControlOptions {
  /**
   * 输入框大小
   */
  nzSize?: NzSizeLDSType;
  /**
   * 最大值
   */
  max?: number;
  /**
   * 最小值
   */
  min?: number;
  /**
   * 数值精度
   */
  nzPrecision?: number;
  /**
   *
   */
  nzPrecisionMode?: 'cut' | 'toFixed' | ((value: number | string, precision?: number) => number);
  /**
   * focus时回调
   * @param evt
   * @param field
   * @param instance
   */
  nzFocus?: (evt: HTMLElement, field: InputNumberFieldConfig, instance: NzInputNumberComponent) => void;
  /**
   * blur时回调
   * @param evt
   * @param field
   * @param instance
   */
  nzBlur?: (evt: HTMLElement, field: InputNumberFieldConfig, instance: NzInputNumberComponent) => void;
}

export interface BaseAutocompleteOptions extends ControlOptions {
  /**
   * 自定义渲染option label
   */
  labelTemplate?: string | TemplateRef<{ $implicit: OptionItem; field: AutocompleteFieldConfig }>;
  /**
   * 自定义渲染option label, 模板名称
   */
  labelTemplateName?: string;
  /**
   * 使用键盘选择选项的时候，会把当前高亮项的值即时回填到输入框中
   */
  nzBackfill?: boolean;
  /**
   * 是否默认高亮第一个选项。
   */
  nzDefaultActiveFirstOption?: boolean;
  /**
   * 自定义宽度单位 px
   */
  nzWidth?: number;
  /**
   * 下拉根元素的类名称
   */
  nzOverlayClassName?: string;
  /**
   * 下拉根元素的样式
   */
  nzOverlayStyle?: object;
  /**
   * 与 SelectControlValueAccessor 相同
   */
  compareWith?: (o1: any, o2: any) => boolean;
}

export interface InputFieldConfig extends NzFormlyFieldConfig<InputOptions & BaseInputOptions> {
  type: 'input';
}

/**
 * 	数值精度的取值方式
 */
export interface InputNumberFieldConfig
  extends NzFormlyFieldConfig<InputNumberOptions & Omit<BaseInputOptions, 'nzBorderless'>> {
  type: 'number';
}

export type AutocompleteOptions = BaseAutocompleteOptions &
  AsyncFormlyOptions<NzSafeAny, OptionItem> &
  BaseInputOptions;

/**
 * 	数值精度的取值方式
 */
export interface AutocompleteFieldConfig extends NzFormlyFieldConfig<AutocompleteOptions> {
  type: 'autocomplete';
}
