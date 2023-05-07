import { Component } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  currentDate = dayjs();
  startMonth = 8;
  startDay = 29;
  currentYear = this.currentDate.year();
  startDate = `${this.currentYear}-${this.startMonth}-${this.startDay}`;
  formatDays = dayjs(this.startDate, 'YYYY-MM-DD');
  days = this.formatDays.diff(this.currentDate, 'day');

}
