import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { TemplateRef } from '@angular/core';

/**
 * Tag模板配置
 */
export interface TagOptions extends ControlOptions {
  /**
   * tab内容
   */
  nzxContent?: string | TemplateRef<{ $implicit: TagFieldConfig; templateOptions: TagOptions }>;
  /**
   * tab内容模板名称
   */
  nzxContentName?: string;

  /**
   * 设定标签工作的模式
   */
  nzMode?: 'default' | 'closeable' | 'checkable';

  /**
   * 设置标签的选中状态，可双向绑定，在 nzMode="checkable" 时可用
   */
  nzChecked?: string;
  /**
   * 标签色
   */
  nzColor?: string;
  /**
   * 关闭时的回调，在 nzMode="closable" 时可用
   */
  nzOnClose?: (evt: MouseEvent, field: TagFieldConfig, instance: NzTagComponent) => void;
  /**
   * 设置标签的选中状态的回调，在 nzMode="checkable" 时可用
   */
  nzCheckedChange?: (field: TagFieldConfig, instance: NzTagComponent) => void;
}

/**
 * Tag配置
 */
export interface TagFieldConfig extends NzFormlyFieldConfig<TagOptions> {
  type: 'tag';
}
