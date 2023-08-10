import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-select-component',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSelectComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
      nzMode: 'default',
      nzAutoClearSearchValue: true,
      nzDropdownMatchSelectWidth: true,
      nzMaxMultipleCount: Infinity,
      nzMaxTagCount: Infinity,
      nzTokenSeparators: [],
      nzOptionHeightPx: 32,
      nzOptionOverflowSize: 8,
      compareWith: (o1: NzSafeAny, o2: NzSafeAny) => o1 === o2,
      nzFilterOption: (input: string, option: any) => {
        if (option && option.nzLabel) {
          return option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
        } else {
          return false;
        }
      },
      defaultValue: []
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzCustomTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzCustomTemplate');
  }
  get nzSuffixIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzSuffixIcon');
  }
  get nzRemoveIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzRemoveIcon');
  }
  get nzClearIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzClearIcon');
  }
  get nzMenuItemSelectedIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzMenuItemSelectedIcon');
  }
  get nzMaxTagPlaceholder() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzMaxTagPlaceholder');
  }
  get nzNotFoundContent() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzNotFoundContent');
  }
  get labelTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'labelTemplate');
  }
}
