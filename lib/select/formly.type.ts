import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { OptionItem } from '@xmagic/nzx-antd/checkbox';
import { AutocompleteFieldConfig } from '@xmagic/nz-formly/input';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * Select模板配置
 */
export interface BaseSelectOptions extends ControlOptions {
  /**
   * 自定义渲染option label
   */
  labelTemplate?: string | TemplateRef<{ $implicit: OptionItem; field: AutocompleteFieldConfig }>;
  /**
   * 自定义渲染option label, 模板名称
   */
  labelTemplateName?: string;

  /**
   * 组件内部 input 的 id 值
   */
  nzId?: string;
  /**
   * 当前选中的 nz-option 的 nzValue 值，可双向绑定，当 nzMode 为 multiple 或 tags 时，ngModel 为数组
   */
  ngModel?: any | any[];
  /**
   * 与 SelectControlValueAccessor 相同
   */
  compareWith?: (o1: any, o2: any) => boolean;
  /**
   * 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。
   */
  nzAutoClearSearchValue?: boolean;
  /**
   * 支持清除
   */
  nzAllowClear?: boolean;
  /**
   * 浮层是否应带有背景板
   */
  nzBackdrop?: boolean;
  /**
   * 是否无边框
   */
  nzBorderless?: boolean;
  /**
   * 下拉菜单是否打开，可双向绑定
   */
  nzOpen?: boolean;
  /**
   * 默认获取焦点
   */
  nzAutoFocus?: boolean;
  /**
   * 是否禁用
   */
  nzDisabled?: boolean;
  /**
   * 下拉菜单的 className 属性
   */
  nzDropdownClassName?: string;
  /**
   * 下拉菜单和选择器同宽
   */
  nzDropdownMatchSelectWidth?: boolean;
  /**
   * 下拉菜单的 style 属性
   */
  nzDropdownStyle?: Record<string, string> | null;
  /**
   * 自定义选择框的 Template 内容
   */
  nzCustomTemplate?: TemplateRef<{ $implicit: NzOptionComponent }>;
  nzCustomTemplateName?: string;
  /**
   * 是否使用服务端搜索，当为 true 时，将不再在前端对 nz-option 进行过滤
   */
  nzServerSearch?: boolean;
  /**
   * 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValueoption 两个参数，当 option 符合筛选条件时，应返回 true
   * ，反之则返回 false。
   */
  nzFilterOption?: (input?: string, option?: NzOptionComponent) => boolean;
  /**
   * 最多选中多少个标签
   */
  nzMaxMultipleCount?: number;
  /**
   * 设置 nz-select 的模式
   */
  nzMode?: 'multiple' | 'tags' | 'default';
  /**
   * 当下拉列表为空时显示的内容
   */
  nzNotFoundContent?: string | TemplateRef<void>;
  nzNotFoundContentName?: string;
  /**
   * 选择框默认文字
   */
  nzPlaceHolder?: string;
  /**
   * 是否显示下拉小箭头
   */
  nzShowArrow?: boolean;
  /**
   * 使单选模式可搜索
   */
  nzShowSearch?: boolean;
  /**
   * 选择框大小
   */
  nzSize?: 'large' | 'small' | 'default';
  /**
   * 设置校验状态
   */
  nzStatus?: 'error' | 'warning';
  /**
   * 自定义的选择框后缀图标
   */
  nzSuffixIcon?: TemplateRef<any> | string;
  nzSuffixIconName?: string;
  /**
   * 自定义的多选框清除图标
   */
  nzRemoveIcon?: TemplateRef<any>;
  nzRemoveIconName?: string;
  /**
   * 自定义的多选框清空图标
   */
  nzClearIcon?: TemplateRef<any>;
  nzClearIconName?: string;
  /**
   * 自定义当前选中的条目图标
   */
  nzMenuItemSelectedIcon?: TemplateRef<any>;
  nzMenuItemSelectedIconName?: string;
  /**
   * 在 tags 和 multiple 模式下自动分词的分隔符
   */
  nzTokenSeparators?: string[];
  /**
   * 加载中状态
   */
  nzLoading?: boolean;
  /**
   * 最多显示多少个 tag
   */
  nzMaxTagCount?: number;
  /**
   * 隐藏 tag 时显示的内容
   */
  nzMaxTagPlaceholder?: TemplateRef<{ $implicit: any[] }>;
  nzMaxTagPlaceholderName?: string;
  /**
   * 下拉菜单中每个 Option 的高度
   */
  nzOptionHeightPx?: number;
  /**
   * 下拉菜单中最多展示的 Option 个数，超出部分滚动
   */
  nzOptionOverflowSize?: number;
  /**
   *
   * 下拉菜单打开状态变化回调
   */
  nzOpenChange?: (evt: boolean, field: SelectFieldConfig, instance: NzSelectComponent) => void;
  /**
   * 下拉列表滚动到底部的回调
   */
  nzScrollToBottom?: (evt: any, field: SelectFieldConfig, instance: NzSelectComponent) => void;
  /**
   * 文本框值变化时回调
   */
  nzOnSearch?: (evt: string, field: SelectFieldConfig, instance: NzSelectComponent) => void;
  /**
   * focus时回调
   */
  nzFocus?: (evt: any, field: SelectFieldConfig, instance: NzSelectComponent) => void;
  /**
   * blur时回调
   */
  nzBlur?: (evt: any, field: SelectFieldConfig, instance: NzSelectComponent) => void;
}

export type SelectOptionItem = { nzCustomContent?: boolean } & OptionItem;
export type SelectOptions = BaseSelectOptions &
  AsyncFormlyOptions<NzSafeAny, { group: SelectOptionItem[] } | SelectOptionItem>;

/**
 * Select配置
 */
export interface SelectFieldConfig extends NzFormlyFieldConfig<SelectOptions> {
  type: 'select';
}
