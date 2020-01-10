import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ServicesBase, Result, Paginator } from '../common';
import { UserTag } from '../users/user.service';

export interface QuestionItem {
  id: number;
  votes: number;
  answers: number;
  title: string;
  description: string;
  targets: string[];
  askTime: string;
  views: number;
  asker: UserTag;
}

export interface QuestionDetail {
  title: string;
  description: string;
  tags: string[];
  votes: number;
  createDate: string;
  active: string;
  viewed: number;
  user: UserTag;
  answers: QuestionAnswerItem[];
}

export interface QuestionAnswerItem {
  id: number;
  votes: number;
  content: string;
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
