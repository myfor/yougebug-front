import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * 服务器响应模型
 */
export interface Result<T = any> {
    message: string;
    data: T;
}

/**
 * 分页模型
 */
export interface Paginator<T = any> {
    index: number;
    rows: number;
    totalPages: number;
    totalRows: number;
    list: T[];
}

@Injectable({
    providedIn: 'root'
})
export class ServicesBase {
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
        }
          // return an observable with a user-facing error message
        // return throwError(
        //     'Something bad happened; please try again later.');
        const result: Result = {
            message: '请求失败',
            data: {}
        };
        return of(result);
    }
}
