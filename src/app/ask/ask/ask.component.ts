import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { QuestionsService, AskInfo } from '../../services/questions/questions.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  askForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(6)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    tags: ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
  }

  submitPost() {
    if (this.askForm.get('title').invalid) {
      this.message.create('error', '请输入提问的标题，至少6个字');
      return;
    }
    if (this.askForm.get('description').invalid) {
      this.message.create('error', '请输入详细描述，至少10个字');
      return;
    }

    const askInfo: AskInfo = {
      title: this.askForm.get('title').value,
      description: this.askForm.get('description').value,
      tags: (this.askForm.get('tags').value as string).split(',')
    };

    this.questionsService.ask(askInfo).subscribe((resp) => {
      if (resp.isFault) {
        this.message.create('error', resp.message);
        return;
      }
      this.message.create('success', '提问成功');
      this.router.navigate(['/questions']);
  });
  }
}
