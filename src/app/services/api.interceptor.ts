import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { tap } from 'rxjs/internal/operators';

export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Basic aHM6aHM=').set('Content-Type', 'application/json')
    });
    return next.handle(newRequest);
  }
}
