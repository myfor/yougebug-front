import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, debounceTime, catchError } from 'rxjs/operators';
import { Result, ServicesBase } from '../common';
import sha256 from 'crypto-js/sha256';

/**
 * 用户标签
 */
export interface UserTag {
  id: number;
  name: string;
  avatar: string;
}
/**
 * 用户注册用的信息
 */
export interface RegisterInfo {
  email: string;
  password: string;
}
/**
 * 登录用的参数
 */
export interface LoginInfo {
  account: string;
  password: string;
}
export interface LoginedInfo {
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private baseService: ServicesBase,
    private http: HttpClient
  ) { }

  /**
   * 用户注册
   * @param registerInfo 注册信息
   */
  register(registerInfo: RegisterInfo): Observable<Result> {
    const url = 'client/api/register';
    registerInfo.password = sha256(registerInfo.password).toString();
    return this.http.post<Result>(url, registerInfo)
      .pipe(
        debounceTime(500),
        catchError(this.baseService.handleError)
      );
  }
  /**
   * 用户登录
   * @param loginInfo 登录信息
   */
  login(loginInfo: LoginInfo): Observable<Result<LoginedInfo>> {
    const url = 'client/api/login';
    loginInfo.password = sha256(loginInfo.password).toString();
    return this.http.patch<Result>(url, loginInfo)
      .pipe(
        debounceTime(500),
        retry(1),
        catchError(this.baseService.handleError)
      );
  }
  // /**
  //  * 登出
  //  */
  // logout() {
  //   const url = 'client/api/logout';
  //   return this.http.patch<Result>(url, '')
  //   .pipe(
  //     debounceTime(500),
  //     catchError(this.baseService.handleError)
  //   );
  // }
}
