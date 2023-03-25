import { NzSizeLDSType } from 'ng-zorro-antd/core/types'

/**
 * 开始结束公共配置
 */
export interface BaseBetweenOptions {
  /**
   * 控件大小
   */
  nzxSize?: NzSizeLDSType;
  /**
   * 开始字段Placeholder
   */
  nzxStartPlaceholder?: string;
  /**
   * 结束字段Placeholder
   */
  nzxEndPlaceholder?: string;
  /**
   * 开始和结束是否禁用
   */
  nzxDisabled?: boolean;
  /**
   * 开始字段禁用
   */
  nzxStartDisabled?: boolean;
  /**
   * 结束字段禁用
   */
  nzxEndDisabled?: boolean;
}