import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get('http://stage.whgstage.com/front-end-test/games.php');
  }

  getJackpots(): Observable<any> {
    return this.http.get('http://stage.whgstage.com/front-end-test/jackpots.php');
  }
}
