import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Redirect } from '../../shared/redirect-to/redirect';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  constructor(
    private redirect: Redirect,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.redirect.redirectTo();
  }

}
