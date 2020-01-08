import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesBase, Result, Paginator } from '../common';

export interface QuestionItem {
  id: number;
  voted: number;
  answers: number;
  title: string;
  description: string;
  targets: [];
  askTime: string;
  userName: string;
  avatar: string;
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
