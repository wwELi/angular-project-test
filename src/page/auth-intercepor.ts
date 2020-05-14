import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log(req.url);
        
        const cloneReq = req.clone({ setHeaders: { 'X_AUTH': 'xxx' } })

        return next.handle(cloneReq).pipe(
            tap(
                (res) => {
                    console.log('res:', res)
                },
                (err?: HttpErrorResponse) => {
                    console.log('err status:', err.status)
                    // do some thing
                }
            )
        );
    }
}
