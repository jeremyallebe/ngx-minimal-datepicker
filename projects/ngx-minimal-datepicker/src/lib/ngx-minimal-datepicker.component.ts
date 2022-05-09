import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { Day } from './ngx-minimal-datepicker.interface';
import { NgxMinimalDatepickerService } from './ngx-minimal-datepicker.service';

@Component({
  selector: 'minimal-datepicker',
  templateUrl: './ngx-minimal-datepicker.component.html',
  styleUrls: ['./ngx-minimal-datepicker.component.scss']
})
export class NgxMinimalDatepickerComponent implements OnInit {

  @Input() locale: string = 'en';
  @Input() selectedDate?: moment.Moment;

  @Output() dateChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() monthChanged: EventEmitter<string> = new EventEmitter<string>();

  monthFormatted?: string;
  currentMonth?: moment.Moment;
  daysOfWeek: string[] = [];
  month: Day[][] = [];
  today: moment.Moment = moment();

  constructor(
    private service: NgxMinimalDatepickerService,
  ) { }

  ngOnInit(): void {
    this.service.setLocale(this.locale);
    if (this.selectedDate) {
      this.month = this.service.setSelectedDate(this.selectedDate);
    } else {
      this.month = this.service.setMonth();
    }
    this.currentMonth = this.service.getCurrentMonth();
    this.monthFormatted = this.service.getFormattedDate();
    this.daysOfWeek = this.service.getFormattedDaysOfWeek();
  }

  previousMonth(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();

    const month = this.service.getCurrentMonth().startOf('month').subtract(1, 'month');
    this.month = this.service.setMonth(month);
    this.currentMonth = this.service.getCurrentMonth();
    this.monthFormatted = this.service.getFormattedDate();
    this.monthChanged.emit(month.format('YYYY-MM'));
  }

  nextMonth(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();

    const month = this.service.getCurrentMonth().startOf('month').add(1, 'month');
    this.month = this.service.setMonth(month);
    this.currentMonth = this.service.getCurrentMonth();
    this.monthFormatted = this.service.getFormattedDate();
    this.monthChanged.emit(month.format('YYYY-MM'));
  }

  selectDay(day: moment.Moment, ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();

    this.service.setSelectedDate(day);
    this.selectedDate = day;
    this.dateChanged.emit(day.format('YYYY-MM-DD'));

    this.month = this.service.getMonth();
    this.currentMonth = this.service.getCurrentMonth();
    this.monthFormatted = this.service.getFormattedDate();
  }

}
