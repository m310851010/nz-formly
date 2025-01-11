import { ChangeDetectionStrategy, Component, OnInit, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName, hasTplNameValue } from '@xmagic/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'nz-formly-input',
  template: `
    <nz-input-group
      *ngIf="hasAddon; else inputTemplate"
      [nzSize]="props.nzSize"
      [nzSearch]="props.nzSearch"
      [nzAddOnAfter]="nzAddOnAfter"
      [nzAddOnBefore]="nzAddOnBefore"
      [nzPrefix]="nzPrefix"
      [nzAddOnAfterIcon]="props.nzAddOnAfterIcon"
      [nzAddOnBeforeIcon]="props.nzAddOnBeforeIcon"
      [nzPrefixIcon]="props.nzPrefixIcon"
      [nzSuffix]="suffixTemplate"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzCompact]="props.nzCompact === true"
      (mouseenter)="onMouseenter($event)"
      (mouseleave)="onMouseleave($event)"
    >
      <ng-container *ngIf="props.showInput !== false">
        <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="content; context: { $implicit: field, options: props }">
        <div [innerHTML]="content"></div>
      </ng-container>
    </nz-input-group>

    <ng-template #suffixTemplate>
      <ng-container *ngIf="nzSuffix; else clearTemplate">
        <ng-container *nzStringTemplateOutlet="nzSuffix; context: { $implicit: field, options: props }">
          <div [innerHTML]="nzSuffix"></div>
        </ng-container>
      </ng-container>
    </ng-template>

    <ng-template #clearTemplate>
      <i
        *ngIf="type === 'password'"
        nz-icon
        style="cursor: pointer"
        [nzType]="isPwdVisible ? 'eye-invisible' : 'eye'"
        (click)="isPwdVisible = !isPwdVisible;props.type = isPwdVisible? 'text' : 'password'"
      ></i>
      <div style="width: 14px" *ngIf="type === 'text' && props.clearable && !isDisabled">
        <i
          *ngIf="clearVisible && formControl.value"
          nz-icon
          style="cursor: pointer"
          [nzType]="props.nzClearIcon || 'close-circle'"
          (click)="formControl.setValue(null)"
        ></i>
      </div>
    </ng-template>

    <ng-template #inputTemplate>
      <ng-container *ngIf="props.type !== 'number'; else numberTmp">
        <input
          *ngIf="!props.nzAutocomplete; else autoCompleteTemplate"
          nz-input
          autocomplete="off"
          [formControl]="$any(formControl)"
          [type]="props.type || 'text'"
          [formlyAttributes]="field"
          [nzBorderless]="props.nzBorderless"
          [nzStatus]="props.nzStatus"
          [nzSize]="props.nzSize"
          [readOnly]="props.nzReadOnly || props.readOnly"
          [disabled]="isDisabled"
          maxlength=""
          ngDefaultControl
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
        />
      </ng-container>
    </ng-template>

    <ng-template #autoCompleteTemplate>
      <input
        nz-input
        autocomplete="off"
        [formControl]="$any(formControl)"
        [type]="props.type || 'text'"
        [formlyAttributes]="field"
        [nzSize]="props.nzSize"
        [nzAutocomplete]="auto"
        [nzBorderless]="props.nzBorderless"
        [nzStatus]="props.nzStatus"
        [readOnly]="props.nzReadOnly || props.readOnly"
        [disabled]="isDisabled"
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
        [nzMin]="props.min"
        [nzMax]="props.max"
        [nzDisabled]="isDisabled"
        [nzPrecision]="props.nzPrecision"
        [nzPrecisionMode]="props.nzPrecisionMode"
        [nzSize]="props.nzSize"
        [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
        [nzStep]="props.step"
        [nzStatus]="props.nzStatus"
        [nzReadOnly]="props.nzReadOnly || props.readOnly"
        (nzFocus)="props.nzFocus?.($event, field, instance)"
        (nzBlur)="props.nzBlur?.($event, field, instance)"
        ngDefaultControl
      ></nz-input-number>
    </ng-template>

    <nz-autocomplete
      #auto
      [nzBackfill]="props.nzBackfill"
      [nzDefaultActiveFirstOption]="props.nzDefaultActiveFirstOption"
      [nzWidth]="props.nzWidth"
      [nzOverlayClassName]="props.nzOverlayClassName"
      [nzOverlayStyle]="props.nzOverlayStyle"
      [compareWith]="props.compareWith"
    >
      <ng-container
        *ngFor="let item of props.options | toAsync: $any(props) | async | filter: props.filterFn : formControl?.value"
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
export class FormlyFieldInputComponent extends FieldType implements OnInit {
  override defaultOptions = {
    props: {
      step: 1,
      enableHTML: false,
      clearable: true,
      nzDefaultActiveFirstOption: true,
      nzPrecisionMode: 'toFixed',
      filterFn: (item: NzSafeAny, query: string) => (query == null ? true : item.label.indexOf(query) > -1),
      compareWith: (o1: NzSafeAny, o2: NzSafeAny) => o1 === o2
    }
  };

  type = 'text';
  isPwdVisible = false;
  mouseEnter = false;
  inputFocus = false;

  get clearVisible() {
      return this.inputFocus || this.mouseEnter;
  }

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  ngOnInit(): void {
   if (this.props.type) {
     this.type = this.props.type;
   }
  }

  get isDisabled() {
    return this.props.nzDisabled || this.props.disabled || this.formControl?.disabled
  }

  get hasAddon() {
    return (
      hasTplNameValue(this.props, 'nzAddOnAfter') ||
      hasTplNameValue(this.props, 'nzAddOnBefore') ||
      hasTplNameValue(this.props, 'nzPrefix') ||
      hasTplNameValue(this.props, 'nzSuffix') ||
      this.props.nzCompact === true ||
      this.props.nzSearch === true ||
      (!this.props.type || this.props.type === 'text' || this.props.type === 'password')
    );
  }

  get nzAddOnAfter() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzAddOnAfter');
  }

  get nzAddOnBefore() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzAddOnBefore');
  }

  get nzPrefix() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzPrefix');
  }

  get nzSuffix() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzSuffix');
  }
  get content() {
    return resolveTplName(this.props, this.fieldTemplates, 'content');
  }

  get labelTemplate() {
    return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
  }

  onMouseenter(evt: MouseEvent) {
    this.mouseEnter = true;
  }
  onMouseleave(evt: MouseEvent) {
    this.mouseEnter = false;
  }

  onFocus(evt: FocusEvent) {
   this.inputFocus = true;
  }

  onBlur(evt: FocusEvent) {
   this.inputFocus = false;
  }
}
