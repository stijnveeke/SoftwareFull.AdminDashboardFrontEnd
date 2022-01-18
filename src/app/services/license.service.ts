import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './AuthService';
import {Observable} from 'rxjs';
import {LicenseOutput} from '../dto/license-output';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(public authHttp: HttpClient, private auth: AuthService) { }

  getAllLicenses()
  {
    return this.authHttp.get<LicenseOutput[]>('https://softwarefulllicensecomponent.azurewebsites.net/api/License');
  }

  getLicense(licenseId: string): Observable<LicenseOutput>
  {
    return this.authHttp.get<LicenseOutput>(`https://softwarefulllicensecomponent.azurewebsites.net/api/License/${licenseId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    });
  }
}
