import { TemplateRef } from '@angular/core';
import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzTreeSelectComponent } from 'ng-zorro-antd/tree-select';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * 多行文本模板配置
 */
export interface BaseTreeSelectOptions extends ControlOptions {
  /**
   * 组件内部 input 的 id 值
   */
  nzId?: string;
  /**
   * 显示清除按钮
   */
  nzAllowClear?: boolean;
  /**
   * 选择框默认文字
   */
  nzPlaceHolder?: string;
  /**
   * 禁用选择器
   */
  nzDisabled?: boolean;
  /**
   * 是否展示 TreeNode title 前的图标，没有默认样式
   */
  nzShowIcon?: boolean;
  /**
   * 显示搜索框
   */
  nzShowSearch?: boolean;
  /**
   * 当下拉列表为空时显示的内容
   */
  nzNotFoundContent?: string;
  /**
   * 下拉菜单和选择器同宽
   */
  nzDropdownMatchSelectWidth?: boolean;
  /**
   * 下拉菜单的样式
   */
  nzDropdownStyle?: { [key: string]: string };
  /**
   * 下拉菜单的 className 属性
   */
  nzDropdownClassName?: string;
  /**
   * 支持多选（当设置 nzCheckable 时自动变为true）
   */
  nzMultiple?: boolean;
  /**
   * 搜索隐藏未匹配的节点
   */
  nzHideUnMatched?: boolean;
  /**
   * 选择框大小
   */
  nzSize?: 'large' | 'small' | 'default';
  /**
   * 设置校验状态
   */
  nzStatus?: 'error' | 'warning';
  /**
   * 自定义展开图标
   */
  nzExpandedIcon?: TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>;
  nzExpandedIconName?: string;
  /**
   * 节点前添加 Checkbox 复选框
   */
  nzCheckable?: boolean;
  /**
   * checkable 状态下节点选择完全受控（父子节点选中状态不再关联）
   */
  nzCheckStrictly?: boolean;
  /**
   * 节点前添加展开图标
   */
  nzShowExpand?: boolean;
  /**
   * 是否展示连接线
   */
  nzShowLine?: boolean;
  /**
   * 是否异步加载(显示加载状态)
   */
  nzAsyncData?: boolean;
  /**
   * treeNodes 数据
   */
  nzNodes?: NzTreeNodeOptions[];
  /**
   * 默认展开所有树节点
   */
  nzDefaultExpandAll?: boolean;
  /**
   * 默认展开指定的树节点
   */
  nzExpandedKeys?: string[];
  /**
   * 如何在输入框显示所选的节点值的方法
   */
  nzDisplayWith?: (node: NzTreeNode) => string;
  /**
   * 最多显示多少个 tag
   */
  nzMaxTagCount?: number;
  /**
   * 隐藏 tag 时显示的内容
   */
  nzMaxTagPlaceholder?: TemplateRef<{ $implicit: NzTreeNode[] }>;
  nzMaxTagPlaceholderName?: string;
  /**
   * 自定义节点
   */
  nzTreeTemplate?: TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>;
  nzTreeTemplateName?: string;
  /**
   * 虚拟滚动的总高度
   */
  nzVirtualHeight?: string;
  /**
   * 虚拟滚动时每一列的高度，与 cdk itemSize 相同
   */
  nzVirtualItemSize?: number;
  /**
   * 缓冲区最大像素高度，与 cdk maxBufferPx 相同
   */
  nzVirtualMaxBufferPx?: number;
  /**
   * 缓冲区最小像素高度，低于该值时将加载新结构，与 cdk minBufferPx 相同
   */
  nzVirtualMinBufferPx?: number;
  /**
   * 浮层是否应带有背景板
   */
  nzBackdrop?: boolean;
  /**
   * 点击展开树节点图标调用
   */
  nzExpandChange?: (
    evt: NzFormatEmitEvent,
    field: NzFormlyFieldConfig<TreeSelectOptions>,
    instance: NzTreeSelectComponent
  ) => void;
  nzOpenChange?: (evt: boolean, field: NzFormlyFieldConfig<TreeSelectOptions>, instance: NzTreeSelectComponent) => void;
  nzTreeCheckBoxChange?: (
    evt: NzFormatEmitEvent,
    field: NzFormlyFieldConfig<TreeSelectOptions>,
    instance: NzTreeSelectComponent
  ) => void;
  nzRemoved?: (evt: NzTreeNode, field: NzFormlyFieldConfig<TreeSelectOptions>, instance: NzTreeSelectComponent) => void;
  nzCleared?: (field: NzFormlyFieldConfig<TreeSelectOptions>, instance: NzTreeSelectComponent) => void;
  nzTreeClick?: (
    evt: NzFormatEmitEvent,
    field: NzFormlyFieldConfig<TreeSelectOptions>,
    instance: NzTreeSelectComponent
  ) => void;
}

export type TreeSelectOptions = BaseTreeSelectOptions & AsyncFormlyOptions<NzSafeAny, NzTreeNodeOptions>;

/**
 *  grid配置
 */
export interface TreeSelectFieldConfig extends NzFormlyFieldConfig<TreeSelectOptions & FieldWrapperOptions> {
  type: 'tree-select';
}
