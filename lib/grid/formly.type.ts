import { IndexableObject } from 'ng-zorro-antd/core/types';
import { NzAlign, NzJustify } from 'ng-zorro-antd/grid/row.directive';
import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { EmbeddedProperty } from 'ng-zorro-antd/grid';

type strNum = string | number;

/**
 * grid模板配置
 */
export interface RowOptions extends ControlOptions {
  /**
   * 垂直对齐方式
   */
  nzAlign?: NzAlign | null;
  /**
   * 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]。
   */
  nzJustify?: NzJustify | null;
  /**
   * 水平排列方式
   */
  nzGutter?: strNum | IndexableObject | [number, number] | [IndexableObject, IndexableObject] | null;
}

/**
 * 列配置
 */
export interface ColOptions extends ControlOptions {
  /**
   * flex 布局属性
   */
  colNzFlex?: strNum;
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   */
  colNzSpan?: strNum;
  /**
   * 	栅格顺序
   */
  colNzOrder?: strNum;
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  colNzOffset?: strNum;
  /**
   * 栅格向右移动格数
   */
  colNzPush?: strNum;
  /**
   * 	栅格向左移动格数
   */
  colNzPull?: strNum;
  /**
   * <576px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  colNzXs?: strNum | EmbeddedProperty;
  /**
   * ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  colNzSm?: strNum | EmbeddedProperty;
  /**
   * ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  colNzMd?: strNum | EmbeddedProperty;
  /**
   * ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  colNzLg?: strNum | EmbeddedProperty;
  /**
   * ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  colNzXl?: strNum | EmbeddedProperty;
  /**
   * ≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  colNzXXl?: strNum | EmbeddedProperty;
}

/**
 *  grid配置
 */
export interface RowFieldConfig extends NzFormlyFieldConfig<RowOptions> {
  type: 'row';
  fieldGroup?: NzFormlyFieldConfig<ColOptions>[];
}
