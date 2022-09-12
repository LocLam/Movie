import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  apiKey: string = 'AIzaSyAjbXFeXTx0HCn8shZCNckp1nMazM2oSiU';

  constructor(public http: HttpClient) {}

  getVideosForChanel(videoIds?: Array<string>): Observable<Object> {
    console.log('videoIds service', videoIds);

    let params = new HttpParams();
    params = params.append('part', 'snippet, player, contentDetails');

    videoIds?.forEach((id) => {
      params = params.append('id', id);
    });
    console.log('params', params);

    let url = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}`;

    return this.http.get(url, { params });
  }
}
