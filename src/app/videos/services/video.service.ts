import { Injectable } from '@angular/core';

import { filter, from, map, Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

import {
  collection,
  getFirestore,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  firebaseApp = initializeApp(environment.firebaseConfig);
  firestoreDB = getFirestore(this.firebaseApp);

  collectionName = 'videos';

  constructor() {}

  getVideos(): Observable<any> {
    const documents = getDocs(
      collection(this.firestoreDB, this.collectionName)
    );

    return from(documents).pipe(
      filter((result) => !!result),
      map((result: QuerySnapshot<any>) => {
        let data: any = [];
        result.forEach((doc: any) => {
          const documentData = doc.data();
          data = [...data, documentData];
        });
        return data;
      })
    );
  }
}
