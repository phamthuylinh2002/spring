import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL_API : string;

  constructor(
    private httpClient : HttpClient
  ) {
    this.URL_API = 'http://localhost:8080/user';
  }

  public findAll() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.URL_API);
  }

  public saveUser(user : User) : Observable<Object>{
    return this.httpClient.post(this.URL_API, user);
  }

  public  updateUser(id : number , value: any) : Observable<Object>{
    return this.httpClient.put(this.URL_API+"/"+id,value);
  }

  public  deleteUser(id : number) : Observable<Object>{
    return this.httpClient.delete(this.URL_API+"/"+id);
  }

  public getUserById(id : number) : Observable<any>{
    return this.httpClient.get(this.URL_API+"/"+id)
  }

}
