import { Component, OnInit, Input } from '@angular/core';
import { UserTag } from '../../services/users/user.service';

@Component({
  selector: 'app-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.css']
})
export class UserTagComponent implements OnInit {

  @Input() userInfo: UserTag = {
    id: 0,
    name: '',
    avatar: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
