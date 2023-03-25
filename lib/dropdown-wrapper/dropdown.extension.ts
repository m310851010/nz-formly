import { FormlyFieldConfig } from '@ngx-formly/core';

export function dropdownExtension(field: FormlyFieldConfig) {
  if (!field.props || (field.wrappers && field.wrappers.indexOf('dropdown-wrapper') !== -1)) {
    return;
  }

  if (field.props?.nzDropdown?.ref) {
    field.wrappers = [...(field.wrappers || []), 'dropdown-wrapper'];
  }
}
