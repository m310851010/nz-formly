import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-textarea',
  template: `
    <nz-textarea-count
      *ngIf="to.nzMaxCharacterCount != null; else templateRef"
      [nzMaxCharacterCount]="to.nzMaxCharacterCount"
      [nzComputeCharacterCount]="to.nzComputeCharacterCount"
    >
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="to.rows"
        [attr.placeholder]="to.placeholder"
        [nzAutosize]="to.nzAutosize"
        [nzBorderless]="to.nzBorderless"
        [nzSize]="to.nzSize"
        maxlength=""
      ></textarea>
    </nz-textarea-count>

    <ng-template #templateRef>
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="to.rows"
        [attr.placeholder]="to.placeholder || ''"
        [nzAutosize]="to.nzAutosize == null ? false : to.nzAutosize"
        [nzBorderless]="to.nzBorderless"
        [nzSize]="to.nzSize"
        maxlength=""
      ></textarea>
    </ng-template>
  `
})
export class FormlyFieldTextareaComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzComputeCharacterCount: (v: string) => v.length, nzAutosize: false, nzSize: 'default', rows: 2 }
  };
}
