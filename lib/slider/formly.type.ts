import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { NzSliderShowTooltip, NzSliderComponent, NzMarks, NzSliderValue } from 'ng-zorro-antd/slider';
import { FieldWrapperOptions } from '@xmagic/nz-formly/field-wrapper';

/**
 * Slider模板配置
 */
export interface SliderOptions extends ControlOptions {
  /**
   * 值为 true 时，滑块为禁用状态
   */
  nzDisabled?: boolean;
  /**
   * 是否只能拖拽到刻度上
   */
  nzDots?: boolean;
  /**
   * marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列
   */
  nzIncluded?: boolean;
  /**
   * 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式
   */
  nzMarks?: NzMarks | null;
  /**
   * 最大值
   */
  nzMax?: number;
  /**
   * 最小值
   */
  nzMin?: number;
  /**
   * 双滑块模式
   */
  nzRange?: boolean;
  /**
   * 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。
   */
  nzStep?: number | null;
  /**
   * Slider 会把当前值传给 nzTipFormatter，并在 Tooltip 中显示 nzTipFormatter 的返回值，若为 null，则隐藏 Tooltip。
   */
  nzTipFormatter?: (value: number) => string;
  /**
   * 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]
   */
  ngModel?: number | number[];
  /**
   * 值为 true 时，Slider 为垂直方向
   */
  nzVertical?: boolean;
  /**
   * 反向坐标轴
   */
  nzReverse?: boolean;
  /**
   * 值为 always 时总是显示，值为 never 时在任何情况下都不显示
   */
  nzTooltipVisible?: NzSliderShowTooltip;
  nzDefaultValue?: NzSliderValue;
  /**
   * 设置 Tooltip 的默认位置。
   */
  nzTooltipPlacement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'
    | Array<string>;
  /**
   * 与 onmouseup 触发时机一致，把当前值作为参数传入。
   */
  nzOnAfterChange?: (
    evt: number[] | number,
    field: NzFormlyFieldConfig<SliderOptions>,
    instance: NzSliderComponent
  ) => void;
}

/**
 * Slider配置
 */
export interface SliderFieldConfig extends NzFormlyFieldConfig<SliderOptions & FieldWrapperOptions> {
  type: 'slider';
}
