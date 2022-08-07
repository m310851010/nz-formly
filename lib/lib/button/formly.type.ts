import { NzButtonShape, NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { DropdownWrapperOptions } from '../wrappers/dropdown-wrapper/formly.type';
import { NzFormlyFieldConfig } from '../formly-utils';
import { TemplateRef } from '@angular/core';

/**
 * 按钮模板配置
 */
export interface ButtonOptions extends DropdownWrapperOptions {
  /**
   * 按钮内容文本
   */
  text?: string | TemplateRef<{ $implicit: ButtonFieldConfig, options: ButtonOptions }>;
  textName?: string;
  /**
   * 按钮内容模板名称
   */
  nzSearch?: boolean;
  nzWaveExtraNode?: boolean;
  /**
   * 文字前面的图标
   */
  beforeIcon?: string;
  /**
   * 文字后面面的图标
   */
  afterIcon?: string;

  /**
   * 幽灵属性，使按钮背景透明
   */
  nzGhost?: boolean;
  /**
   * 设置按钮载入状态
   */
  nzLoading?: boolean;
  /**
   * 设置按钮形状，可选值为 circleround 或者不设
   */
  nzShape?: NzButtonShape;
  /**
   * 设置按钮大小，可选值为 smalllarge 或者不设
   */
  nzSize?: NzButtonSize;
  /**
   * 设置按钮类型，可选值为 primarydashedtextlink 或者不设
   */
  nzType?: NzButtonType;
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  nzBlock?: boolean;
  /**
   * 设置危险按钮
   */
  nzDanger?: boolean;
}

export interface ButtonFieldConfig extends NzFormlyFieldConfig<ButtonOptions> {
  type: 'button';
}
