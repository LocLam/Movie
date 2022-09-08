import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get('http://stage.whgstage.com/front-end-test/games.php');
  }
}
