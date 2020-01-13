import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-your-answer',
  templateUrl: './your-answer.component.html',
  styleUrls: ['./your-answer.component.css']
})
export class YourAnswerComponent implements OnInit {

  answerForm: FormGroup;

  @Input() questionId = 0;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.answerForm = this.fb.group({
      answer: ['', [Validators.required]]
    });
  }

  answerSubmit() {

  }
}
