import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = environment.BASEURL;
  constructor(private httpClient:HttpClient) { }

  PostService(url: string, data: any, token:boolean, httpOptions: any){
    console.log("url",url,"data-",data);
    console.log("Base Url",this.baseUrl);
    return this.httpClient.post(this.baseUrl+url, data, token && httpOptions);
  }
  GetService(url: string, token:boolean, httpOptions: any){
    console.log("url",url);
    console.log("Base Url",this.baseUrl);
    return this.httpClient.get(this.baseUrl+url, token && httpOptions);
  }
  GetByIdService(url: string,data:any, token:boolean, httpOptions: any){
    console.log("url",url);
    console.log("Base Url",this.baseUrl);
    return this.httpClient.request(this.baseUrl+url, data, token && httpOptions);
  }
}
