import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers
        .set('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
        .set('Pragma', 'no-cache')
        .set('Expires', '0')
    });

    let apiPath = environment.apiPath;

    if(!req.url.startsWith('http')){
      const apiReq = req.clone({ url: `${apiPath}${req.url}` });

      return next.handle(apiReq);
    }
    return next.handle(req);
  }
}
