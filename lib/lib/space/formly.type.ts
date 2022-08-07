import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { TemplateRef } from '@angular/core';
import { NzSpaceDirection, NzSpaceSize, NzSpaceAlign } from 'ng-zorro-antd/space';

/**
 * Space模板配置
 */
export interface SpaceOptions extends ControlOptions {
  /**
   * 间距大小
   */
  nzSize?: NzSpaceSize;
  /**
   * 间距方向
   */
  nzDirection?: NzSpaceDirection;
  /**
   * 对齐方式
   */
  nzAlign?: NzSpaceAlign;
  /**
   * 是否自动换行，仅在 horizontal 时有效
   */
  nzWrap?: boolean;
  /**
   * 设置分隔符
   */
  nzSplit?: TemplateRef<{ $implicit: number }> | null;
  nzSplitName?: string;
}

/**
 * Space配置
 */
export interface SpaceFieldConfig extends NzFormlyFieldConfig<SpaceOptions> {
  type: 'space';
}
