import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-textarea',
  template: `
    <nz-textarea-count
      *ngIf="props.nzMaxCharacterCount != null; else templateRef"
      [nzMaxCharacterCount]="props.nzMaxCharacterCount"
      [nzComputeCharacterCount]="props.nzComputeCharacterCount"
    >
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder"
        [nzAutosize]="props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </nz-textarea-count>

    <ng-template #templateRef>
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder || ''"
        [nzAutosize]="props.nzAutosize == null ? false : props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </ng-template>
  `
})
export class FormlyFieldTextareaComponent extends FieldType {
  override defaultOptions = {
    props: { nzComputeCharacterCount: (v: string) => v.length, nzAutosize: false, nzSize: 'default', rows: 2 }
  };
}
