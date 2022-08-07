import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FormlyBoxTemplates } from '../service/formly-box-templates.directive';
import { resolveTplName } from '../formly-utils';

@Component({
  selector: 'nz-formly-select-component',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSelectComponent extends FieldType {
  override defaultOptions = {
    props: {
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
    return resolveTplName(this.props, this.fieldTemplates, 'nzCustomTemplate');
  }
  get nzSuffixIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
  }
  get nzRemoveIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzRemoveIcon');
  }
  get nzClearIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzClearIcon');
  }
  get nzMenuItemSelectedIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzMenuItemSelectedIcon');
  }
  get nzMaxTagPlaceholder() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzMaxTagPlaceholder');
  }
  get nzNotFoundContent() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzNotFoundContent');
  }
  get labelTemplate() {
    return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
  }
}
