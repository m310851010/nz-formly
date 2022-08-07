import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Utils } from '@xmagic/nzx-antd/util';
import { Observable, of, Subscription } from 'rxjs';
import { TextFieldConfig } from './formly.type';

@Component({
  selector: 'nz-formly-text-value',
  template: `
    <nz-form-text class="wrap-text" [formlyAttributes]="field" [ngClass]="props.ngClass" [ngStyle]="props.ngStyle">
      {{ textValue | async | defaultify }}
    </nz-form-text>
  `,
  styles: [
    `
      .wrap-text {
        word-break: break-all;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTextValueComponent<T> extends FieldType<TextFieldConfig> implements OnInit, OnDestroy {
  private result?: Observable<T> | Promise<T>;
  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.formControl!.valueChanges.subscribe(value => {
      this.result = undefined;
    });
  }

  get textValue() {
    const value = this.formControl!.value;
    const format = this.props.format || this.formState.format;

    if (typeof format !== 'function') {
      return of(value);
    }

    if (this.result) {
      return this.result;
    }
    const result = format(value, this.field);
    if (Utils.isPromise(result) || Utils.isObservable(result)) {
      this.result = result;
      return result;
    }
    return of(result);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
