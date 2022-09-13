import { Injectable } from '@angular/core';

import { filter, from, map, Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  getDocs,
  QuerySnapshot,
  addDoc,
} from 'firebase/firestore';

import { environment } from 'src/environments/environment';

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

  shareVideo(data: any ): Observable<any> {
    console.log('data', data);
    
    const documents = addDoc(collection(this.firestoreDB, this.collectionName), {
      urlId: data.urlId,
      sharedBy: data.user.email,
      date: new Date()
    });

    return from(documents);
  }
}
