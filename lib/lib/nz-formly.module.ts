import { NgModule } from '@angular/core';

import { FormlyNzCascaderModule } from './cascader/public_api';
import { FormlyNzDatePickerModule } from './date-picker/public_api';
import { FormlyNzDateRangePickerModule } from './date-range-picker/public_api';
import { FormlyNzInputModule } from './input/public_api';
import { FormlyNzRadioModule } from './radio/public_api';
import { FormlyNzRateModule } from './rate/public_api';
import { FormlyNzSelectModule } from './select/public_api';
import { FormlyNzSliderModule } from './slider/public_api';
import { FormlyNzSwitchModule } from './switch/public_api';
import { FormlyNzTextareaModule } from './textarea/public_api';
import { FormlyNzTimePickerModule } from './time-picker/public_api';
import { FormlyNzTreeSelectModule } from './tree-select/public_api';
import { FormlyNzFormFieldModule } from './wrappers/field-wrapper/public_api';
import { FormlyFieldBetweenInputModule } from './between-input/between-input.module';
import { FormlyNzCheckboxModule } from './checkbox/checkbox.module';
import { FormlyNzCardWrapperModule } from './wrappers/card-wrapper/card-wrapper.module';
import { FormlyDropdownWrapperModule } from './wrappers/dropdown-wrapper/dropdown-wrapper.module';
import { FormlyNzModalWrapperModule } from './wrappers/modal-wrapper/modal-wrapper.module';
import { FormlyNzModalModule } from './modal/modal.module';
import { FormlyNzButtonModule } from './button/button.module';
import { FormlyNzTabsModule } from './tabs/tabs.module';
import { FormlyNzButtonGroupModule } from './button-group/button-group.module';
import { FormlyBoxTemplates } from './service/formly-box-templates.directive';
import { FormlyNzTreeModule } from './tree/tree.module';
import { FormlyNzSpaceModule } from './space/space.module';
import { FormlyNzTableModule } from './table/table.module';
import { FormlyNzGridModule } from './grid/grid.module';
import { FormlyNzUploadModule } from './upload/upload.module';
import { FormlyNzTextValueModule } from './text-value/text-value.module';
import { FormlyNzDividerModule } from './divider/divider.module';
import { FormlyNzTagModule } from './tag/tag.module';
import { FormlyRefTemplateModule } from './ref-template/ref-template.module';
import { FormlyNzDropdownModule } from './dropdown/dropdown.module';
import { FormlyFieldBetweenDatetimeModule } from './between-datetime/between-datetime.module';
import { FormlyFieldBetweenTimeModule } from './between-time/between-time.module';
import { FormlyModule } from '@ngx-formly/core';
import { defaultPlaceholderExtensionOption } from './extension/default-label-extension';
import { valueChangesExtensionOption } from './extension/value-changes-extension';
import { FormlyNzCardModule } from './card/card.module';
import { FormlyFieldAlertModule } from './alert/alert.module'

const EXPORTS = [FormlyBoxTemplates];

@NgModule({
  imports: [
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: (error, field) => `${field.props?.label}不能为空` },
        { name: 'minLength', message: (error, field) => `至少输入${field.props!.minLength}个字符` },
        { name: 'maxLength', message: (error, field) => `最多输入${field.props!.maxLength}个字符` },
        { name: 'max', message: (error, field) => `不能超过${field.props!.max}` },
        { name: 'min', message: (error, field) => `不能小于${field.props!.min}` },
        { name: 'pattern', message: (error, field) => `${field.props!.label}格式不正确` }
      ],
      extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
    })
  ],
  exports: [
    FormlyNzFormFieldModule,
    FormlyNzCardWrapperModule,
    FormlyDropdownWrapperModule,
    FormlyNzModalWrapperModule,
    FormlyNzModalModule,
    FormlyNzCardModule,
    FormlyFieldBetweenInputModule,
    FormlyNzCascaderModule,
    FormlyNzCheckboxModule,
    FormlyNzDatePickerModule,
    FormlyNzDateRangePickerModule,
    FormlyNzInputModule,
    FormlyNzRadioModule,
    FormlyNzRateModule,
    FormlyNzSelectModule,
    FormlyNzSliderModule,
    FormlyNzSwitchModule,
    FormlyNzTextareaModule,
    FormlyNzTimePickerModule,
    FormlyNzTreeModule,
    FormlyNzTreeSelectModule,
    FormlyNzButtonModule,
    FormlyNzButtonGroupModule,
    FormlyNzTabsModule,
    FormlyNzSpaceModule,
    FormlyNzTableModule,
    FormlyNzGridModule,
    FormlyNzUploadModule,
    FormlyNzTextValueModule,
    FormlyNzDividerModule,
    FormlyNzTagModule,
    FormlyRefTemplateModule,
    FormlyNzDropdownModule,
    FormlyFieldBetweenDatetimeModule,
    FormlyFieldBetweenTimeModule,
    FormlyFieldAlertModule,
    EXPORTS
  ],
  declarations: [EXPORTS]
})
export class NzFormlyModule {}
