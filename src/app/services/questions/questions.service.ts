import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ServicesBase, Result, Paginator } from '../common';

export interface QuestionItem {
  id: number;
  votes: number;
  answers: number;
  title: string;
  description: string;
  targets: string[];
  askTime: string;
  userName: string;
  avatar: string;
  views: number;
  asker: KeyValue<number, string>;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private serviceBase: ServicesBase,
    private http: HttpClient
  ) { }
}
