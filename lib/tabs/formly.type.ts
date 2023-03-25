import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import {
  NzTabComponent,
  NzTabPosition,
  NzTabsCanDeactivateFn,
  NzTabType,
  TabTemplateContext
} from 'ng-zorro-antd/tabs';

/**
 * Tabs模板配置
 */
export interface TabsOptions<T = NzSafeAny> extends ControlOptions {
  /**
   * 当前激活 tab 面板的 序列号，可双向绑定
   */
  nzSelectedIndex?: number;
  /**
   * 是否使用动画切换 Tabs，在 nzTabPosition="top" | "bottom" 时有效
   */
  nzAnimated?: boolean | { inkBar: boolean; tabPane: boolean };
  /**
   * 大小，提供 large default 和 small 三种大小
   */
  nzSize?: NzSizeLDSType;
  /**
   * tab bar 上额外的元素
   */
  nzTabBarExtraContent?: TemplateRef<void>;
  nzTabBarExtraContentName?: string;
  /**
   * tab bar 的样式对象
   */
  nzTabBarStyle?: Record<string, string> | null;
  /**
   * 页签位置，可选值有 top right bottom left
   */
  nzTabPosition?: NzTabPosition;
  /**
   * 页签的基本样式
   */
  nzType?: NzTabType;
  /**
   * tabs 之间的间隙
   */
  nzTabBarGutter?: number;
  /**
   * 是否隐藏所有tab内容
   */
  nzHideAll?: boolean;
  /**
   * 与 Angular 路由联动
   */
  nzLinkRouter?: boolean;
  /**
   * 以严格匹配模式确定联动的路由
   */
  nzLinkExact?: boolean;
  /**
   * 决定一个 tab 是否可以被切换
   */
  nzCanDeactivate?: NzTabsCanDeactivateFn;
  /**
   * 标签居中展示
   */
  nzCentered?: boolean;
  /**
   * 当前激活 tab 面板的 序列号变更回调函数
   */
  nzSelectedIndexChange?: (evt: number, field: TabsFieldConfig, instance: NzTabComponent) => void;
  /**
   * 当前激活 tab 面板变更回调函数
   */
  nzSelectChange?: (
    evt: { index: number; tab: NzTabComponent },
    field: TabsFieldConfig,
    instance: NzTabComponent
  ) => void;

  /**
   * 每个tab配置
   */
  tabs?: TabsItem[];
}

export interface TabsItem extends TabItemOption {
  /**
   * tab内容
   */
  nzxContent?: string | TemplateRef<{ $implicit: TabsItem; field: TabsFieldConfig }>;
  /**
   * tab内容模板名称
   */
  nzxContentName?: string;
}

export interface TabItemOption extends ControlOptions {
  /**
   * 选项卡头显示文字
   */
  nzTitle?: string | TemplateRef<TabTemplateContext>;
  nzTitleName?: string;
  /**
   * 被隐藏时是否渲染 DOM 结构
   */
  nzForceRender?: boolean;
  /**
   * 是否禁用
   */
  nzDisabled?: boolean;
  /**
   * 单击 title 的回调函数
   */
  nzClick?: (field: TabsItemConfig, instance: NzTabComponent) => void;
  /**
   * 右键 title 的回调函数
   */
  nzContextmenu?: (evt: MouseEvent, field: TabsItemConfig, instance: NzTabComponent) => void;
  /**
   * tab 被选中的回调函数
   */
  nzSelect?: (field: TabsItemConfig, instance: NzTabComponent) => void;
  /**
   * tab 被取消选中的回调函数
   */
  nzDeselect?: (field: TabsItemConfig, instance: NzTabComponent) => void;
}

export type TabsItemConfig = { tab?: TabItemOption } & ControlOptions;

/**
 * Tabs配置
 */
export interface TabsFieldConfig extends NzFormlyFieldConfig<TabsOptions> {
  type: 'tabs';
  fieldGroup?: NzFormlyFieldConfig<TabsItemConfig>[];
}
