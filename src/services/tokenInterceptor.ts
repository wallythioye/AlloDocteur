// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token');

//     if (token) {
//       const cloned = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       return next.handle(cloned);
//     }

//     return next.handle(request);
//   }
// }
