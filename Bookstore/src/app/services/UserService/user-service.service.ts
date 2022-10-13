import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }

  loginService(data: any){
    console.log(data);
    const httpOptions = {
      Headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'null'
      })
    };
     return this.httpService.PostService('users/login',data,false,httpOptions);
  }

  registerService(data:any){
    const httpOptions = {
      Headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'null'
      })
    };
     return this.httpService.PostService('users/register',data,false,httpOptions); 
  }
}
