import { ControlOptions } from '@xmagic/nz-formly/common';
import { NgClassType, NzTSType } from 'ng-zorro-antd/core/types';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form/form-label.component';
import { EmbeddedProperty } from 'ng-zorro-antd/grid';
import { AbstractControl, NgModel } from '@angular/forms';
import { TemplateRef } from '@angular/core';

/**
 * 表单项配置
 */
export interface FieldWrapperOptions extends ControlOptions {
  nzNoColon?: boolean;
  labelClass?: NgClassType;
  nzTooltipTitle?: NzTSType;
  nzTooltipTitleName?: string;
  nzTooltipIcon?: string | NzFormTooltipIcon;

  labelNzFlex?: string | number | null;
  labelNzSpan?: string | number | null;
  labelNzOrder?: string | number | null;
  labelNzOffset?: string | number | null;
  labelNzPush?: string | number | null;
  labelNzPull?: string | number | null;
  labelNzXs?: string | number | EmbeddedProperty | null;
  labelNzSm?: string | number | EmbeddedProperty | null;
  labelNzMd?: string | number | EmbeddedProperty | null;
  labelNzLg?: string | number | EmbeddedProperty | null;
  labelNzXl?: string | number | EmbeddedProperty | null;
  labelNzXXl?: string | number | EmbeddedProperty | null;

  controlClass?: NgClassType;
  controlNzFlex?: string | number | null;
  controlNzSpan?: string | number | null;
  controlNzOrder?: string | number | null;
  controlNzOffset?: string | number | null;
  controlNzPush?: string | number | null;
  controlNzPull?: string | number | null;
  controlNzXs?: string | number | EmbeddedProperty | null;
  controlNzSm?: string | number | EmbeddedProperty | null;
  controlNzMd?: string | number | EmbeddedProperty | null;
  controlNzLg?: string | number | EmbeddedProperty | null;
  controlNzXl?: string | number | EmbeddedProperty | null;
  controlNzXXl?: string | number | EmbeddedProperty | null;

  nzSuccessTip?: NzTipType;
  nzWarningTip?: NzTipType;
  nzValidatingTip?: NzTipType;
  nzExtra?: NzTSType;

  nzSuccessTipName?: string;
  nzWarningTipName?: string;
  nzValidatingTipName?: string;
  nzExtraName?: string;
  nzAutoTips?: Record<string, Record<string, string>>;
  nzDisableAutoTips?: boolean | 'default';
}

export type NzTipType =
  | string
  | TemplateRef<{
      $implicit: AbstractControl | NgModel;
    }>;
