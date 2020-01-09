import { Injectable } from '@angular/core';

export interface UserTag {
  id: number;
  name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
