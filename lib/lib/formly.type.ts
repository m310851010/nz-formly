import { BetweenInputFieldConfig } from './between-input/formly.type';
import { ButtonFieldConfig } from './button/formly.type';
import { AutocompleteFieldConfig, InputFieldConfig, InputNumberFieldConfig } from './input/formly.type';
import { BetweenTimeFieldConfig } from './between-time/formly.type';
import { BetweenDateTimeFieldConfig } from './between-datetime/formly.type';
import { ButtonGroupFieldConfig } from './button-group/formly.type';
import { CascaderFieldConfig } from './cascader/formly.type';
import { CheckboxFieldConfig } from './checkbox/formly.type';
import { DatePickerFieldConfig } from './date-picker/formly.type';
import { DateRangePickerFieldConfig } from './date-range-picker/formly.type';
import { DividerFieldConfig } from './divider/formly.type';
import { DropdownFieldConfig } from './dropdown/formly.type';
import { RowFieldConfig } from './grid/formly.type';
import { ModalFieldConfig } from './modal/formly.type';
import { RadioFieldConfig } from './radio/formly.type';
import { RateFieldConfig } from './rate/formly.type';
import { RefTemplateFieldConfig } from './ref-template/formly.type';
import { SelectFieldConfig } from './select/formly.type';
import { SliderFieldConfig } from './slider/formly.type';
import { SpaceFieldConfig } from './space/formly.type';
import { SwitchFieldConfig } from './switch/formly.type';
import { TableFieldConfig } from './table/formly.type';
import { TabsFieldConfig } from './tabs/formly.type';
import { TagFieldConfig } from './tag/formly.type';
import { TextareaFieldConfig } from './textarea/formly.type';
import { TimePickerFieldConfig } from './time-picker/formly.type';
import { TreeFieldConfig } from './tree/formly.type';
import { TreeSelectFieldConfig } from './tree-select/formly.type';
import { UploadFieldConfig } from './upload/formly.type';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CardFieldConfig } from './card/formly.type';
import { AlertFieldConfig } from './alert/formly.type';
import { TextFieldConfig } from './text-value/formly.type';

export type NzFormlyFieldType =
  | BetweenInputFieldConfig
  | BetweenTimeFieldConfig
  | BetweenDateTimeFieldConfig
  | ButtonFieldConfig
  | ButtonGroupFieldConfig
  | CascaderFieldConfig
  | CheckboxFieldConfig
  | DatePickerFieldConfig
  | DateRangePickerFieldConfig
  | DividerFieldConfig
  | DropdownFieldConfig
  | RowFieldConfig
  | InputFieldConfig
  | InputNumberFieldConfig
  | AutocompleteFieldConfig
  | ModalFieldConfig
  | RadioFieldConfig
  | RateFieldConfig
  | RefTemplateFieldConfig
  | SelectFieldConfig
  | SliderFieldConfig
  | SpaceFieldConfig
  | SwitchFieldConfig
  | TableFieldConfig
  | TabsFieldConfig
  | TagFieldConfig
  | TextareaFieldConfig
  | TimePickerFieldConfig
  | TreeFieldConfig
  | TreeSelectFieldConfig
  | UploadFieldConfig
  | CardFieldConfig
  | AlertFieldConfig
  | TextFieldConfig;
// | FormlyFieldConfig;

export type NzField = NzFormlyFieldType & {
  fieldGroup?: NzFormlyFieldType[];
};
