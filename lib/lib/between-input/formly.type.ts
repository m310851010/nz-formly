import { ControlOptions, NzFormlyFieldConfig } from '../formly-utils';
import { BaseBetweenOptions } from './base-between.type';

/**
 * BetweenInput模板配置
 */
export interface BetweenInputOptions extends ControlOptions {
  nzxType?: 'input' | 'number';

  /**
   * 最大值
   */
  nzxStartMax?: number;
  nzxEndMax?: number;
  /**
   * 最小值
   */
  nzxStartMin?: number;
  nzxEndMin?: number;
  /**
   * 	数值精度
   */
  nzxStarPrecision?: number;
  nzxEndPrecision?: number;
  /**
   * 	Step
   */
  nzxStarStep?: number;
  nzxEndStep?: number;

  nzxStarId?: string;
  nzxEndId?: string;
  /**
   * 开始字段重命名
   */
  nzxStartReName?: string;
  /**
   * 结束字段重命名
   */
  nzxEndReName?: string;

  /**
   * 指定输入框展示值的格式
   */
  nzxStartFormatter?: (value: number | string) => string | number;
  nzxEndFormatter?: (value: number | string) => string | number;
}

export interface BetweenInputFieldConfig extends NzFormlyFieldConfig<BetweenInputOptions & BaseBetweenOptions> {
  type: 'between-input';
}
