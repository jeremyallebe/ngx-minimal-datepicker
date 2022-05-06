import { Injectable } from '@angular/core';
import moment from 'moment';
import { Day } from './ngx-minimal-datepicker.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxMinimalDatepickerService {

  private selectedDate?: moment.Moment;
  private currentMonth: moment.Moment = moment();
  private month: Day[][] = [];

  setLocale(locale: string): void {
    moment.locale(locale);
  }

  getSelectedDate(): moment.Moment | undefined {
    return this.selectedDate;
  }

  setSelectedDate(date: moment.Moment): Day[][] {
    this.selectedDate = date.clone();
    return this.setMonth(this.selectedDate);
  }

  getCurrentMonth(): moment.Moment {
    return this.currentMonth;
  }

  setCurrentMonth(month: moment.Moment): void {
    this.currentMonth = month;
  }

  getFormattedDate(): string {
    return this.currentMonth?.format("MMMM YYYY");
  }

  getFormattedDaysOfWeek(): string[] {
    return moment.weekdaysShort(true);
  }

  getMonth(): Day[][] {
    return this.month;
  }

  setMonth(month: moment.Moment = moment()): Day[][] {
    this.month = [];

    this.currentMonth = month.clone().startOf("month");
    const date = this.currentMonth.clone().startOf("week");

    for (let i = 0; i < 6 && date.isSameOrBefore(this.currentMonth, 'month'); i++) {
      const week: Day[] = [];

      for (let j = 0; j < 7; j++) {
        const day: Day = {
          date: date.clone(),
          formattedDate: date.format("D")
        };

        week.push(day);

        date.add(1, "day");
      }

      this.month.push(week);
    }

    return this.month;
  }

}
