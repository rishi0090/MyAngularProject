import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  upcoming:string[];

  constructor() { 
    this.upcoming=[
      "Angular 4 starts on 11 june",
      "Core Jave starts on 30 May",
      "SQL starts on Jan 2",
      "RedHat starts on May 5"
    ]
  }

  ngOnInit() {
  }

}
