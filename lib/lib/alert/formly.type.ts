import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { TemplateRef } from '@angular/core';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

/**
 * Alert模板配置
 */
export interface AlertOptions extends ControlOptions {
  /**
   * 是否用作顶部公告
   */
  nzBanner?: boolean;
  /**
   * 自定义操作项
   */
  nzAction?: string | TemplateRef<void>;
  nzActionName?: string;
  /**
   * 默认不显示关闭按钮
   */
  nzCloseable?: boolean;
  /**
   * 自定义关闭按钮
   */
  nzCloseText?: string | TemplateRef<void>;
  nzCloseTextName?: string;
  /**
   * 警告提示的辅助性文字介绍
   */
  nzDescription?: string | TemplateRef<void>;
  nzDescriptionName?: string;
  /**
   * 警告提示内容
   */
  nzMessage?: string | TemplateRef<void>;
  nzMessageName?: string;
  /**
   * 是否显示辅助图标，nzBanner 模式下默认值为 true
   */
  nzShowIcon?: boolean;
  /**
   * 自定义图标类型，nzShowIcon 为 true 时有效
   */
  nzIconType?: string;
  /**
   * 指定警告提示的样式，nzBanner 模式下默认值为 'warning'
   */
  nzType?: 'success' | 'info' | 'warning' | 'error';
  /**
   * 关闭时触发的回调函数
   */
  nzOnClose?: (evt: boolean, field: NzFormlyFieldConfig<AlertOptions>, instance: NzAlertComponent) => void;
}

/**
 * nz Alert组件配置
 */
export interface AlertFieldConfig extends NzFormlyFieldConfig<AlertOptions> {
  type: 'alert';
}
