# NzFormly

基于ng-zorro-antd UI 扩展的ngx-formly组件库

## demo

![Alt Text](https://raw.githubusercontent.com/m310851010/nz-formly/main/static/img.png)


## 用法

### 安装

```shell
npm i @ngx-formly/core @xmagic/nz-formly @xmagic/nzx-antd
```

### 导入模块

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormlyModule } from '@xmagic/nz-formly';
import { FormlyModule } from '@ngx-formly/core';

/**
 * ngx-formly的nz组件, 包含常用的表单组件
 */
@NgModule({
  imports: [
    CommonModule,
    // 使用nz-formly所必须的模块
    FormlyModule,
    NzFormlyModule
  ]
})
export class AppModule {}
```

> 上面代码导入的是基础模块, 要用里面的组件需要导入对应的模块。
>
> 通常我们会创建一个`module`用来存放`nz-formly`用到的组件，例如：

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormlyModule } from '@xmagic/nz-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCommonModule } from '@xmagic/nz-formly/common';
import { FormlyNzCheckboxModule } from '@xmagic/nz-formly/checkbox';
import { FormlyNzInputModule } from '@xmagic/nz-formly/input';
import { FormlyNzDatePickerModule } from '@xmagic/nz-formly/date-picker';
import { FormlyNzDateRangePickerModule } from '@xmagic/nz-formly/date-range-picker';
import { FormlyNzRadioModule } from '@xmagic/nz-formly/radio';
import { FormlyNzGridModule } from '@xmagic/nz-formly/grid';
import { FormlyNzFormFieldModule } from '@xmagic/nz-formly/field-wrapper';
import { FormlyNzTextareaModule } from '@xmagic/nz-formly/textarea';
import { FormlyNzTextValueModule } from '@xmagic/nz-formly/text-value';
import { FormlyNzSelectModule } from '@xmagic/nz-formly/select';
import { FormlyNzSwitchModule } from '@xmagic/nz-formly/switch';

/**
 * ngx-formly的nz组件, 包含常用的表单组件
 */
@NgModule({
  exports: [
    CommonModule,
    FormlyModule,
    NzFormlyModule,
    FormlyCommonModule,
    FormlyNzCheckboxModule,
    FormlyNzInputModule,
    FormlyNzDatePickerModule,
    FormlyNzDateRangePickerModule,
    FormlyNzRadioModule,
    FormlyNzGridModule,
    FormlyNzFormFieldModule,
    FormlyNzTextareaModule,
    FormlyNzTextValueModule,
    FormlyNzSelectModule,
    FormlyNzSwitchModule
    // 其他组件
  ]
})
export class SharedFormlyModule {}
```
### 模板的写法

仍然采用 `ngx-formly`的原生用法，`nz-formly`扩展了便捷的操作

```html
<form nz-form [formGroup]="form" (ngSubmit)="submit()">
  <formly-form formly-box [model]="model" [fields]="fields" [options]="options" [form]="form">
    <ng-template named="icon-button">
      <button nz-button nzType="primary" nzSearch><i nz-icon nzType="search"></i></button>
    </ng-template>
  </formly-form>
</form>
```

### 组件的写法

```ts
@Component({
  ...
})
export class AppComponent {
  form = new FormGroup({});
  model = { awesome: [1, 2], switchDemoKey: 'XX', myText2: 'some text' };
  options: FormlyFormOptions = {
    formState: {
      labelNzFlex: '100px',
      controlNzFlex: 'auto'
    }
  };
  fields: NzField[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: '名称',
        required: true,
        nzSearch: true,
        nzAddOnAfterName: 'icon-button'
      }
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: {
        label: '渠道',
        options: [
          { label: '网络', value: 1 },
          { label: '代理商', value: 2 },
          { label: '其他', value: 3 }
        ]
      }
    },
    {
      key: 'radioKey',
      type: 'radio',
      templateOptions: {
        label: '单选',
        options: [
          { label: '网络', value: 1 },
          { label: '代理商', value: 2 },
          { label: '其他', value: 3 }
        ]
      }
    },
    {
      key: 'switchDemoKey',
      type: 'switch',
      templateOptions: {
        label: '开关',
        nzxCheckedValue: 'XX',
        nzxUnCheckedValue: 'YY'
      }
    },
    {
      key: 'comment',
      type: 'textarea',
      templateOptions: {
        label: '评论',
        rows: 2,
        maxLength: 100,
        nzMaxCharacterCount: 100
      }
    },
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        label: '状态',
        nzAllowClear: true,
        options: [
          { label: 'AA', value: 'aa' },
          { label: 'BB', value: 'bb' }
        ]
      }
    },
    {
      key: 'myText',
      type: 'text',
      templateOptions: {
        label: '文本'
      }
    },
    {
      key: 'myText2',
      type: 'text',
      templateOptions: {
        label: '文本2'
      }
    }
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
```

## 运行环境

- ndoejs 14.x
- angular 12.x
- ng-zorro-antd 12.x
- @ngx-formly/core 6.x
- @xmagic/nzx-antd 12.x (angular 14 请安装@xmagic/nzx-antd 14.x)

### License

The MIT License (see the [LICENSE](https://github.com/m310851010/nz-formly/blob/master/LICENSE) file for the full text)
