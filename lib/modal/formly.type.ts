import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { NzModalComponent, StyleObjectLike } from 'ng-zorro-antd/modal';

type OnClickCallback = (
  field: ModalFieldConfig,
  instance: NzModalComponent
) => (false | void | {}) | Promise<false | void | {}>;

/**
 * grid模板配置
 */
export interface ModalOptions extends ControlOptions {
  /**
   * Modal 打开后的回调
   */
  nzAfterOpen?: (field: ModalFieldConfig, instance: NzModalComponent) => void;
  /**
   * Modal 完全关闭后的回调，可监听close/destroy方法传入的参数
   */
  nzAfterClose?: (field: ModalFieldConfig, instance: NzModalComponent) => void;
  /**
   * Modal body 样式
   */
  nzBodyStyle?: StyleObjectLike;
  /**
   * 取消按钮文字。设为 null 表示不显示取消按钮（若在普通模式下使用了 nzFooter 参数，则该值无效）
   */
  nzCancelText?: string;
  /**
   * 垂直居中展示 Modal
   */
  nzCentered?: boolean;
  /**
   * 是否显示右上角的关闭按钮。确认框模式下该值无效（默认会被隐藏）
   */
  nzClosable?: boolean;
  /**
   * 确定按钮 loading
   */
  nzOkLoading?: boolean;
  /**
   * 取消按钮 loading
   */
  nzCancelLoading?: boolean;
  /**
   * 是否禁用确定按钮
   */
  nzOkDisabled?: boolean;
  /**
   * 是否禁用取消按钮
   */
  nzCancelDisabled?: boolean;
  /**
   * 是否支持键盘esc关闭
   */
  nzKeyboard?: boolean;
  /**
   * 是否展示遮罩
   */
  nzMask?: boolean;
  /**
   * 点击蒙层是否允许关闭
   */
  nzMaskClosable?: boolean;
  /**
   * 当用户在历史中前进/后退时是否关闭模态框。注意，这通常不包括点击链接（除非用户使用HashLocationStrategy）。
   */
  nzCloseOnNavigation?: boolean;
  /**
   * 文字方向
   */
  nzDirection?: 'ltr' | 'rtl';
  /**
   * 遮罩样式
   */
  nzMaskStyle?: StyleObjectLike;
  /**
   * 确认按钮文字。设为 null 表示不显示确认按钮（若在普通模式下使用了 nzFooter 参数，则该值无效）
   */
  nzOkText?: string;
  /**
   * 确认按钮类型。与 nz-button 的 nzType 类型值一致
   */
  nzOkType?: string;
  /**
   * 确认按钮是否为危险按钮。与 nz-button 的 nzDanger 值保持一致
   */
  nzOkDanger?: boolean;
  /**
   * 可用于设置浮层的样式，调整浮层位置等
   */
  nzStyle?: StyleObjectLike;
  /**
   * 标题。留空表示不展示标题。TemplateRef的使用方法可参考案例
   */
  nzTitle?: string;
  /**
   * 自定义关闭图标
   */
  nzCloseIcon?: string | TemplateRef<void>;
  nzCloseIconName?: string;
  /**
   * 对话框是否可见。当以 <nz-modal> 标签使用时，请务必使用双向绑定，例如：[(nzVisible)]="visible"
   */
  nzVisible?: boolean;
  /**
   * 宽度。使用数字时，默认单位为px
   */
  nzWidth?: string;
  /**
   * 对话框的类名
   */
  nzClassName?: string;
  /**
   * 对话框外层容器的类名
   */
  nzWrapClassName?: string;
  /**
   * 设置 Modal 的 z-index
   */
  nzZIndex?: number;
  /**
   * 点击遮罩层或右上角叉或取消按钮的回调（若nzContent为Component，则将会以该Component实例作为参数）。注：当以NzModalS
   * ervice.create创建时，此参数应传入function（回调函数）。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框
   * （返回false可阻止关闭）
   */
  nzOnCancel?: OnClickCallback | NzSafeAny;
  /**
   * 点击确定回调（若nzContent为Component，则将会以该Component实例作为参数）。注：当以NzModalService.create创建时，此
   * 参数应传入function（回调函数）。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）
   */
  nzOnOk?: OnClickCallback | NzSafeAny;
  /**
   * 内容
   */
  nzContent?: string | TemplateRef<{ $implicit: ModalFieldConfig; options: ModalOptions }>;
  nzContentName?: string;
  /**
   * 当 nzContent 为组件时将作为实例属性，为 TemplateRef 时将作为模版变量
   */
  nzComponentParams?: NzSafeAny;
  /**
   * 图标 Icon 类型。仅 确认框模式 下有效
   */
  nzIconType?: string;
  /**
   * 自动聚焦及聚焦位置，为 null 时禁用
   */
  nzAutofocus?: 'ok' | 'cancel' | 'auto' | null;
}

/**
 *  modal配置
 */
export interface ModalFieldConfig extends NzFormlyFieldConfig<ModalOptions> {
  type: 'modal';
}
