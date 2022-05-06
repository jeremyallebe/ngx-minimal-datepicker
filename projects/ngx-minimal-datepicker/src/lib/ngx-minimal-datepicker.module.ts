import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMinimalDatepickerComponent } from './ngx-minimal-datepicker.component';

@NgModule({
  declarations: [
    NgxMinimalDatepickerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    NgxMinimalDatepickerComponent,
  ]
})
export class NgxMinimalDatepickerModule { }
