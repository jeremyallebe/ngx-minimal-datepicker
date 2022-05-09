import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMinimalDatepickerComponent } from './ngx-minimal-datepicker.component';

@NgModule({
  declarations: [
    NgxMinimalDatepickerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxMinimalDatepickerComponent,
  ]
})
export class NgxMinimalDatepickerModule { }
