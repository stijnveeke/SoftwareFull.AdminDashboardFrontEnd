import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthService';
import {Observable} from 'rxjs';
import {UserOutput} from '../dto/user-output';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public authHttp: HttpClient, private auth: AuthService) { }

  getAllUsers()
  {
    return this.authHttp.get<UserOutput[]>('https://softwarefullusercomponent.azurewebsites.net/api/User');
  }

  getUser(userId: string): Observable<UserOutput>
  {
    return this.authHttp.get<UserOutput>(`https://softwarefullusercomponent.azurewebsites.net/api/User/${userId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    });
  }
}
