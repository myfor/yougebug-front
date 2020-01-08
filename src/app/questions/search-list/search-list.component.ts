import { Component, OnInit } from '@angular/core';
import { QuestionItem } from '../../services/questions/questions.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  searchList: QuestionItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
