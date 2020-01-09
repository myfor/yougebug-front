import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {

  index = 1;
  totalSize = 100;
  constructor() { }

  ngOnInit() {
  }

  changeIndex(index: number) {

  }
}
