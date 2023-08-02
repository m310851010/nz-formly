import { BetweenInputFieldConfig } from '@xmagic/nz-formly/between-input';
import { ButtonFieldConfig } from '@xmagic/nz-formly/button';
import { AutocompleteFieldConfig, InputFieldConfig, InputNumberFieldConfig } from '@xmagic/nz-formly/input';
import { BetweenTimeFieldConfig } from '@xmagic/nz-formly/between-time';
import { BetweenDateTimeFieldConfig } from '@xmagic/nz-formly/between-datetime';
import { ButtonGroupFieldConfig } from '@xmagic/nz-formly/button-group';
import { CascaderFieldConfig } from '@xmagic/nz-formly/cascader';
import { CheckboxFieldConfig } from '@xmagic/nz-formly/checkbox';
import { DatePickerFieldConfig } from '@xmagic/nz-formly/date-picker';
import { DateRangePickerFieldConfig } from '@xmagic/nz-formly/date-range-picker';
import { DividerFieldConfig } from '@xmagic/nz-formly/divider';
import { DropdownFieldConfig } from '@xmagic/nz-formly/dropdown';
import { RowFieldConfig } from '@xmagic/nz-formly/grid';
import { ModalFieldConfig } from '@xmagic/nz-formly/modal';
import { RadioFieldConfig } from '@xmagic/nz-formly/radio';
import { RateFieldConfig } from '@xmagic/nz-formly/rate';
import { RefTemplateFieldConfig } from '@xmagic/nz-formly/ref-template';
import { SelectFieldConfig } from '@xmagic/nz-formly/select';
import { SliderFieldConfig } from '@xmagic/nz-formly/slider';
import { SpaceFieldConfig } from '@xmagic/nz-formly/space';
import { SwitchFieldConfig } from '@xmagic/nz-formly/switch';
import { TableFieldConfig } from '@xmagic/nz-formly/table';
import { TabsFieldConfig } from '@xmagic/nz-formly/tabs';
import { TagFieldConfig } from '@xmagic/nz-formly/tag';
import { TextareaFieldConfig } from '@xmagic/nz-formly/textarea';
import { TimePickerFieldConfig } from '@xmagic/nz-formly/time-picker';
import { TreeFieldConfig } from '@xmagic/nz-formly/tree';
import { TreeSelectFieldConfig } from '@xmagic/nz-formly/tree-select';
import { UploadFieldConfig } from '@xmagic/nz-formly/upload';
import { CardFieldConfig } from '@xmagic/nz-formly/card';
import { AlertFieldConfig } from '@xmagic/nz-formly/alert';
import { TextFieldConfig } from '@xmagic/nz-formly/text-value';
import { FormlyFieldConfig } from '@ngx-formly/core';

export type NzFormlyFieldType =
  | Omit<BetweenInputFieldConfig, 'fieldGroup'>
  | Omit<BetweenTimeFieldConfig, 'fieldGroup'>
  | Omit<BetweenDateTimeFieldConfig, 'fieldGroup'>
  | Omit<ButtonFieldConfig, 'fieldGroup'>
  | Omit<ButtonGroupFieldConfig, 'fieldGroup'>
  | Omit<CascaderFieldConfig, 'fieldGroup'>
  | Omit<CheckboxFieldConfig, 'fieldGroup'>
  | Omit<DatePickerFieldConfig, 'fieldGroup'>
  | Omit<DateRangePickerFieldConfig, 'fieldGroup'>
  | Omit<DividerFieldConfig, 'fieldGroup'>
  | Omit<DropdownFieldConfig, 'fieldGroup'>
  | Omit<RowFieldConfig, 'fieldGroup'>
  | Omit<InputFieldConfig, 'fieldGroup'>
  | Omit<InputNumberFieldConfig, 'fieldGroup'>
  | Omit<AutocompleteFieldConfig, 'fieldGroup'>
  | Omit<ModalFieldConfig, 'fieldGroup'>
  | Omit<RadioFieldConfig, 'fieldGroup'>
  | Omit<RateFieldConfig, 'fieldGroup'>
  | Omit<RefTemplateFieldConfig, 'fieldGroup'>
  | Omit<SelectFieldConfig, 'fieldGroup'>
  | Omit<SliderFieldConfig, 'fieldGroup'>
  | Omit<SpaceFieldConfig, 'fieldGroup'>
  | Omit<SwitchFieldConfig, 'fieldGroup'>
  | Omit<TableFieldConfig, 'fieldGroup'>
  | Omit<TabsFieldConfig, 'fieldGroup'>
  | Omit<TagFieldConfig, 'fieldGroup'>
  | Omit<TextareaFieldConfig, 'fieldGroup'>
  | Omit<TimePickerFieldConfig, 'fieldGroup'>
  | Omit<TreeFieldConfig, 'fieldGroup'>
  | Omit<TreeSelectFieldConfig, 'fieldGroup'>
  | Omit<UploadFieldConfig, 'fieldGroup'>
  | Omit<CardFieldConfig, 'fieldGroup'>
  | Omit<AlertFieldConfig, 'fieldGroup'>
  | Omit<TextFieldConfig, 'fieldGroup'>
  | Omit<FormlyFieldConfig, 'fieldGroup'>;

export type NzField = NzFormlyFieldType & {
  fieldGroup?: NzField[];
  fieldArray?: NzField | ((field: NzField) => NzField);
};
