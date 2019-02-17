import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContentType } from '../enums';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  protected contentType = ContentType.JSON;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: { 'Content-Type': this.contentType }
    });

    return next.handle(jsonReq);
  }
}

@Injectable()
export class AddXmlHeaderInterceptor extends AddHeaderInterceptor {
  constructor() {
    super();

    this.contentType = ContentType.XML;
  }
}
