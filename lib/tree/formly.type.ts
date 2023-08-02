import { TemplateRef } from '@angular/core';
import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzTreeComponent, NzTreeNode } from 'ng-zorro-antd/tree';
import { NzFormatBeforeDropEvent, NzTreeNodeOptions, NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { Observable } from 'rxjs';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * 多行文本模板配置
 */
export interface TreeOptions extends ControlOptions {
  /**
   * 元数据
   */
  nzData?: NzTreeNodeOptions[] | NzTreeNode[];
  /**
   * 是否节点占据一行
   */
  nzBlockNode?: boolean;
  /**
   * 节点前添加 Checkbox 复选框
   */
  nzCheckable?: boolean;
  /**
   * 节点前添加展开图标
   */
  nzShowExpand?: boolean;
  /**
   * 是否展示连接线
   */
  nzShowLine?: boolean;
  /**
   * 自定义展开图标
   */
  nzExpandedIcon?: TemplateRef<{ $implicit: NzTreeNode }>;
  nzExpandedIconName?: string;
  /**
   * 是否展示 TreeNode title 前的图标，没有默认样式
   */
  nzShowIcon?: boolean;
  /**
   * 是否异步加载(显示加载状态)
   */
  nzAsyncData?: boolean;
  /**
   * 设置节点可拖拽
   */
  nzDraggable?: boolean;
  /**
   * 支持点选多个节点（节点本身）
   */
  nzMultiple?: boolean;
  /**
   * 搜索隐藏未匹配的节点
   */
  nzHideUnMatched?: boolean;
  /**
   * checkable 状态下节点选择完全受控（父子节点选中状态不再关联）
   */
  nzCheckStrictly?: boolean;
  /**
   * 自定义节点
   */
  nzTreeTemplate?: TemplateRef<{ $implicit: NzTreeNode }>;
  nzTreeTemplateName?: string;
  /**
   * 默认展开所有树节点
   */
  nzExpandAll?: boolean;
  /**
   * 展开指定的树节点
   */
  nzExpandedKeys?: string[];
  /**
   * 指定选中复选框的树节点
   */
  nzCheckedKeys?: string[];
  /**
   * 指定选中的树节点
   */
  nzSelectedKeys?: string[];
  /**
   * 是否是选择模式
   */
  nzSelectMode?: boolean;
  /**
   * 按需筛选树高亮节点(参考可搜索的树),双向绑定
   */
  nzSearchValue?: string;
  /**
   * 自定义匹配方法，配合 nzSearchValue 使用
   */
  nzSearchFunc?: (node: NzTreeNodeOptions) => boolean;
  /**
   * drop前二次校验,允许用户自行决定是否允许放置
   */
  nzBeforeDrop?: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
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
   * 点击树节点触发
   */
  nzClick?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * 双击树节点触发
   */
  nzDblClick?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * 右键树节点触发
   */
  nzContextMenu?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * 点击树节点 Checkbox 触发
   */
  nzCheckBoxChange?: (
    evt: NzFormatEmitEvent,
    field: NzFormlyFieldConfig<TreeOptions>,
    instance: NzTreeComponent
  ) => void;
  /**
   * 点击展开树节点图标触发
   */
  nzExpandChange?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * 搜索节点时调用(与nzSearchValue配合使用)
   */
  nzSearchValueChange?: (
    evt: NzFormatEmitEvent,
    field: NzFormlyFieldConfig<TreeOptions>,
    instance: NzTreeComponent
  ) => void;
  /**
   * 开始拖拽时调用
   */
  nzOnDragStart?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * dragenter 触发时调用
   */
  nzOnDragEnter?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * dragover 触发时调用
   */
  nzOnDragOver?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * dragleave 触发时调用
   */
  nzOnDragLeave?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * drop 触发时调用
   */
  nzOnDrop?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
  /**
   * dragend 触发时调用
   */
  nzOnDragEnd?: (evt: NzFormatEmitEvent, field: NzFormlyFieldConfig<TreeOptions>, instance: NzTreeComponent) => void;
}

/**
 *  grid配置
 */
export interface TreeFieldConfig extends NzFormlyFieldConfig<TreeOptions & FieldWrapperOptions> {
  type: 'tree';
}
