import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyNzFormFieldModule } from './wrappers/field-wrapper/field-wrapper.module';

@NgModule({
  exports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyNzFormFieldModule]
})
export class NzCommTypeModule {}
