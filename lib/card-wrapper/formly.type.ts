import { TemplateRef, Type } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NzSizeDSType } from 'ng-zorro-antd/core/types';
import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';

/**
 * 卡片模板配置
 */
export interface CardWrapperOptions extends ControlOptions {
  /**
   * 卡片操作组，位置在卡片底部
   */
  nzActions?: Array<TemplateRef<void>>;
  nzActionsName?: string[];
  /**
   * 是否显示边框
   */
  nzBordered?: boolean;
  /**
   * 内容区域自定义样式
   */
  nzBodyStyle?: { [key: string]: string };
  /**
   * 是否移除边框
   */
  nzBorderless?: boolean;
  /**
   * 卡片封面
   */
  nzCover?: TemplateRef<void>;
  nzCoverName?: string;
  /**
   * 卡片右上角的操作区域
   */
  nzExtra?: string | TemplateRef<void>;
  nzExtraName?: string;
  /**
   * 鼠标移过时可浮起
   */
  nzHoverable?: boolean;
  /**
   * 当卡片内容还在加载中时，可以用 loading 展示一个占位
   */
  nzLoading?: boolean;
  /**
   * 卡片标题
   */
  nzTitle?: string | TemplateRef<void>;
  nzTitleName?: string;
  /**
   * 卡片类型，可设置为 inner 或 不设置
   */
  nzType?: string | 'inner' | null;
  /**
   * 卡片的尺寸
   */
  nzSize?: NzSizeDSType;
}

/**
 *  Card配置
 */
export interface CardFieldWrapperConfig extends NzFormlyFieldConfig<CardWrapperOptions> {
  // type: 'formly-group',
  wrappers: Array<'modal-wrapper' | string>;
}
