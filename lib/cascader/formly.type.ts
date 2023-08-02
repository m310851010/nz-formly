import { TemplateRef } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzCascaderComponent, NzCascaderOption, NzShowSearchOptions } from 'ng-zorro-antd/cascader';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * 级联模板配置
 */
export type CascaderOptions = BaseCascaderOptions & AsyncFormlyOptions;
export interface BaseCascaderOptions extends ControlOptions {
  /**
   * 是否支持清除
   */
  nzAllowClear?: boolean;
  /**
   * 是否自动聚焦，当存在输入框时
   */
  nzAutoFocus?: boolean;
  /**
   * 浮层是否应带有背景板
   */
  nzBackdrop?: boolean;
  /**
   * 点击父级菜单选项时，可通过该函数判断是否允许值的变化
   */
  nzChangeOn?: (option: any, index: number) => boolean;
  /**
   * 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示
   */
  nzChangeOnSelect?: boolean;
  /**
   * 自定义浮层列类名
   */
  nzColumnClassName?: string;
  /**
   * 禁用
   */
  nzDisabled?: boolean;
  /**
   * 自定义次级菜单展开图标
   */
  nzExpandIcon?: string | TemplateRef<void>;
  nzExpandIconName?: string;
  /**
   * 次级菜单的展开方式，可选 'click' 和 'hover'
   */
  nzExpandTrigger?: 'click' | 'hover';
  /**
   * 选项的显示值的属性名
   */
  nzLabelProperty?: string;
  /**
   * 选择后展示的渲染模板
   */
  nzLabelRender?: TemplateRef<any>;
  nzLabelRenderName?: string;
  /**
   * 用于动态加载选项。如果提供了ngModel初始值，且未提供nzOptions值，则会立即触发动态加载。
   */
  nzLoadData?: (option: any, index?: number) => PromiseLike<any>;
  /**
   * 自定义浮层类名
   */
  nzMenuClassName?: string;
  /**
   * 自定义浮层样式
   */
  nzMenuStyle?: object;
  /**
   * 当下拉列表为空时显示的内容
   */
  nzNotFoundContent?: string | TemplateRef<void>;
  nzNotFoundContentName?: string;
  /**
   * 选项的渲染模板
   */
  nzOptionRender?: TemplateRef<{ $implicit: NzCascaderOption; index: number }>;
  nzOptionRenderName?: string;
  /**
   * 输入框占位文本
   */
  nzPlaceHolder?: string;
  /**
   * 是否显示箭头
   */
  nzShowArrow?: boolean;
  /**
   * 显示输入框
   */
  nzShowInput?: boolean;
  /**
   * 是否支持搜索，默认情况下对 label 进行全匹配搜索，不能和 [nzLoadData] 同时使用
   */
  nzShowSearch?: boolean | NzShowSearchOptions;
  /**
   * 输入框大小，可选 largedefaultsmall
   */
  nzSize?: 'large' | 'small' | 'default';
  /**
   * 自定义的选择框后缀图标
   */
  nzSuffixIcon?: string | TemplateRef<void>;
  nzSuffixIconName?: string;
  /**
   * 选项的实际值的属性名
   */
  nzValueProperty?: string;

  /**
   * 清除值时触发
   */
  nzClear?: (field: FormlyFieldConfig, com: NzSafeAny) => void;
  /**
   * 菜单浮层的显示/隐藏
   */
  nzVisibleChange?: (evt: boolean, field: FormlyFieldConfig, com: NzCascaderComponent) => void;
  /**
   * 值发生变化时触发
   */
  nzSelectionChange?: (evt: NzCascaderOption[], field: FormlyFieldConfig, com: NzCascaderComponent) => void;
}

/**
 * 级联配置
 */
export interface CascaderFieldConfig extends NzFormlyFieldConfig<CascaderOptions & FieldWrapperOptions> {
  type: 'cascader';
}
