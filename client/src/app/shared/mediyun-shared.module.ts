import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from './pipe/ellipsis.pipe';


@NgModule({
  declarations:[
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    EllipsisPipe,
    RouterModule,
    FormsModule

  ]
})
export class MediyunSharedModule {}
