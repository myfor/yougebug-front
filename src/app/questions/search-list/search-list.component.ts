import { Component, OnInit } from '@angular/core';
import { QuestionItem } from '../../services/questions/questions.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  totalSize = 100;

  searchList: QuestionItem[] = [
    {
      id: 1,
      votes: 10,
      answers: 10,
      title: '怎么用 GIT',
      description: '怎么用 GIT怎么用 GIT怎么用 GIT 怎么用 GIT怎么用 GIT怎么用 GIT 怎么用 GIT怎么用 GIT怎么用 GIT 怎么用 GIT怎么用 GIT怎么用 GIT 怎么用 GIT怎么用 GIT怎么用 GIT...',
      targets: ['a-target', 'b-targat'],
      askTime: '2020-15-03',
      userName: '阿凡达',
      avatar: '',
      views: 11,
      asker: {
        key: 1,
        value: 'emcentter'
      }
    },
    {
      id: 2,
      votes: 10,
      answers: 10,
      title: '怎么用 GIT',
      description: '怎么用 GIT怎么用 GIT怎么用 GIT...',
      targets: ['a-target', 'b-targat'],
      askTime: '2020-15-03',
      userName: '阿凡达',
      avatar: '',
      views: 11,
      asker: {
        key: 2,
        value: 'emcentter'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  changeIndex(index: number) {
    console.log(index);
  }
}
