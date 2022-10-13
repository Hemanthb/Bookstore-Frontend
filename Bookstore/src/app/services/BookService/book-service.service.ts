import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpService:HttpServiceService) { }

  getBookService() {
    const httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'null'
      })

    };
  return this.httpService.GetService('books/',false,httpOptions);
  }

}
