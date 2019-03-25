import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        console.log('I am here');
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.authdata}`
                }
            });
        } else {
            localStorage.setItem('currentUser', JSON.stringify({'authdata': 'aHM6aHM='}));
        }
        return next.handle(request);
    }
}