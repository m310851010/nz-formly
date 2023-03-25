import { FormlyFieldConfig } from '@ngx-formly/core';
import { ControlOptions } from '@xmagic/nz-formly/common';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';

/**
 * 表单项配置
 */
export interface FieldWrapperOptions extends ControlOptions {
  dropdown?: {
    ref: string;
    /**
     * 菜单是否禁用
     */
    nzDisabled?: boolean;
    /**
     * 菜单弹出位置
     */
    nzPlacement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
    /**
     * 触发下拉的行为
     */
    nzTrigger?: 'click' | 'hover';
    /**
     * 点击后是否隐藏菜单
     */
    nzClickHide?: boolean;
    /**
     * 菜单是否显示，可双向绑定
     */
    nzVisible?: boolean;
    /**
     * 下拉根元素的类名称
     */
    nzOverlayClassName?: string;
    /**
     * 下拉根元素的样式
     */
    nzOverlayStyle?: object;
    /**
     * 菜单显示状态改变时调用，参数为 nzVisible
     */
    nzVisibleChange?: (evt: boolean, field: FormlyFieldConfig, instance: NzDropDownDirective) => void;
  }
}
