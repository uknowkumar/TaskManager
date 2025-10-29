import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users'; // adjust as needed

  constructor(private http: HttpClient) {}

  register(payload: UserPayload): Observable<any> {
    return this.http.post(this.baseUrl, payload);
  }
}
