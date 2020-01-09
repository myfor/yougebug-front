import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionDetail } from '../../services/questions/questions.service';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.css']
})
export class QuestionsDetailComponent implements OnInit {

  id = 0;
  detail: QuestionDetail = {
    title: '标题',
    description: '随便什么逗号随便什么逗号随便什么逗号随便什么逗号随便什么逗号随便什么逗号随便什么逗号',
    tags: ['a-target', 'b-target'],
    votes: 12,
    createDate: '2020',
    active: '2020',
    viewed: 123,
    user: {
      id: 1,
      name: 'dededad',
      avatar: 'assets/img/B.png'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
