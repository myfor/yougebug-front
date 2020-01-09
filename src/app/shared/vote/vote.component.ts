import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: `
  <div class="vote">
    <div class="up"></div>
    <h2 class="number">{{votes}}</h2>
    <div class="down"></div>
  </div>
  `,
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() id = 0;
  @Input() type = 0;
  @Input() votes = 0;
  constructor() { }

  ngOnInit() {
  }

}
