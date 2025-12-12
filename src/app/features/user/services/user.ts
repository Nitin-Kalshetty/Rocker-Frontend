import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from '../../../core/api';
import {UserRequest} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient) { }

  registerUser(request: UserRequest){
    return this.http.post(`${API_BASE_URL}/user/register`,request);
  }

}
