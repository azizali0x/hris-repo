import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule
  ]
})
export class SharedModule { }
