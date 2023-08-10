import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName, hasTplNameValue } from '@xmagic/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'nz-formly-input',
  template: `
    <nz-input-group
      *ngIf="hasAddon; else inputTemplate"
      [nzSize]="to.nzSize"
      [nzSearch]="to.nzSearch"
      [nzAddOnAfter]="nzAddOnAfter"
      [nzAddOnBefore]="nzAddOnBefore"
      [nzPrefix]="nzPrefix"
      [nzAddOnAfterIcon]="to.nzAddOnAfterIcon"
      [nzAddOnBeforeIcon]="to.nzAddOnBeforeIcon"
      [nzPrefixIcon]="to.nzPrefixIcon"
      [nzSuffix]="nzSuffix"
      [nzSuffixIcon]="to.nzSuffixIcon"
      [nzCompact]="to.nzCompact === true"
    >
      <ng-container *ngIf="to.showInput !== false">
        <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="content; context: { $implicit: field, options: to }">
        <div [innerHTML]="content"></div>
      </ng-container>
    </nz-input-group>

    <ng-template #inputTemplate>
      <ng-container *ngIf="to.type !== 'number'; else numberTmp">
        <input
          *ngIf="!to.nzAutocomplete; else autoCompleteTemplate"
          nz-input
          autocomplete="off"
          [formControl]="$any(formControl)"
          [type]="to.type || 'text'"
          [formlyAttributes]="field"
          [nzBorderless]="to.nzBorderless"
          [nzSize]="to.nzSize"
          [disabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
          maxlength=""
          ngDefaultControl
        />
      </ng-container>
    </ng-template>

    <ng-template #autoCompleteTemplate>
      <input
        nz-input
        autocomplete="off"
        [formControl]="$any(formControl)"
        [type]="to.type || 'text'"
        [formlyAttributes]="field"
        [nzSize]="to.nzSize"
        [nzAutocomplete]="auto"
        [nzBorderless]="to.nzBorderless"
        [disabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
        maxlength=""
        ngDefaultControl
      />
    </ng-template>

    <ng-template #numberTmp>
      <nz-input-number
        #instance
        style="width: 100%"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [nzMin]="to.min"
        [nzMax]="to.max"
        [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
        [nzPrecision]="to.nzPrecision"
        [nzPrecisionMode]="to.nzPrecisionMode"
        [nzSize]="to.nzSize"
        [nzPlaceHolder]="to.nzPlaceHolder || to.placeholder"
        [nzStep]="to.step"
        (nzFocus)="to.nzFocus && to.nzFocus($event, field, instance)"
        (nzBlur)="to.nzBlur && to.nzBlur($event, field, instance)"
        ngDefaultControl
      ></nz-input-number>
    </ng-template>

    <nz-autocomplete
      #auto
      [nzBackfill]="to.nzBackfill"
      [nzDefaultActiveFirstOption]="to.nzDefaultActiveFirstOption"
      [nzWidth]="to.nzWidth"
      [nzOverlayClassName]="to.nzOverlayClassName"
      [nzOverlayStyle]="to.nzOverlayStyle"
      [compareWith]="to.compareWith"
    >
      <ng-container
        *ngFor="let item of to.options | toAsync: $any(to) | async | filter: to.filterFn:formControl?.value"
      >
        <nz-auto-option *ngIf="item.hide !== false" [nzValue]="item.value" [nzDisabled]="item.disabled">
          <ng-container *ngIf="labelTemplate; else strLabelTpl">
            <ng-container *nzStringTemplateOutlet="labelTemplate; context: { $implicit: item, field: field }">
              <span>{{ labelTemplate }}</span>
            </ng-container>
          </ng-container>

          <ng-template #strLabelTpl>
            <span>{{ item.label }}</span>
          </ng-template>
        </nz-auto-option>
      </ng-container>
    </nz-autocomplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldInputComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      step: 1,
      enableHTML: false,
      nzDefaultActiveFirstOption: true,
      nzPrecisionMode: 'toFixed',
      filterFn: (item: NzSafeAny, query: string) => (query == null ? true : item.label.indexOf(query) > -1),
      compareWith: (o1: NzSafeAny, o2: NzSafeAny) => o1 === o2
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get hasAddon() {
    return (
      hasTplNameValue(this.to, 'nzAddOnAfter') ||
      hasTplNameValue(this.to, 'nzAddOnBefore') ||
      hasTplNameValue(this.to, 'nzPrefix') ||
      hasTplNameValue(this.to, 'nzSuffix') ||
      this.to.nzCompact === true ||
      this.to.nzSearch === true
    );
  }

  get nzAddOnAfter() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzAddOnAfter');
  }

  get nzAddOnBefore() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzAddOnBefore');
  }

  get nzPrefix() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzPrefix');
  }

  get nzSuffix() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzSuffix');
  }
  get content() {
    return resolveTplName(this.to, this.fieldTemplates, 'content');
  }

  get labelTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'labelTemplate');
  }
}
