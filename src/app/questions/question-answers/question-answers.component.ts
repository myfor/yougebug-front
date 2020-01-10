import { Component, OnInit, Input } from '@angular/core';
import { QuestionAnswerItem } from '../../services/questions/questions.service';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {

  index = 1;
  totalSize = 100;

  @Input() answers: QuestionAnswerItem[] = [];
  constructor() { }

  ngOnInit() {
  }

  changeIndex(index: number) {
    this.index = index;
  }
}
