import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }
  campusTour = ''
  stateCollege = ["Monday 8:00am—5:00pm", "Tuesday 8:00am—5:00pm", "Wednesday 8:00am—7:00pm", "Thursday 8:00am—7:00pm", "Friday 8:00am—5:00pm"]
  altoona = ["Monday 7:30am—7:00pm", "Tuesday 7:30am—5:00pm", "Wednesday 7:30am—5:00pm", "Thursday 7:30am—5:00pm", "Friday 7:30am—5:00pm"]

  stateCollegeClick() {
    this.campusTour = this.stateCollege.join(',');
  }

  altoonaClick() {
    this.campusTour = this.altoona.join(',');
  }

  ngOnInit() {
  }

}
