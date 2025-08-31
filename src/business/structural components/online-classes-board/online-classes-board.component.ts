import { Component, OnInit } from '@angular/core';
import { ClassNotice } from 'src/business/model/class-notice';

@Component({
  selector: 'app-online-classes-board',
  templateUrl: './online-classes-board.component.html',
  styleUrl: './online-classes-board.component.css',
  standalone: false
})
export class OnlineClassesBoardComponent implements OnInit {
public notices: ClassNotice[] = [];
  constructor() { }

  ngOnInit(): void {
    this.notices.push({"id":1,"subject":"Biswa Bangla", "teacher":"T Sen", "meetingLink":"","date": new Date()})
    this.notices.push({"id":1,"subject":"Biswa Bangla", "teacher":"T Sen", "meetingLink":"","date": new Date()})
    this.notices.push({"id":1,"subject":"Biswa Bangla", "teacher":"T Sen", "meetingLink":"","date": new Date()})
    this.notices.push({"id":1,"subject":"Biswa Bangla", "teacher":"T Sen", "meetingLink":"","date": new Date()})

  }

  removeClass(id:any) {}

}