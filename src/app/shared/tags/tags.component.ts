import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-tags',
  template: `
  <span *ngFor="let tag of tags">
  <a class="post-tag" target="_blank" [routerLink]="['/targets', tag]">{{tag}}</a>
  &nbsp;
</span>
  `,
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() tags: KeyValue<number, string>[] = [];

  constructor() { }

  ngOnInit() {
  }

}
