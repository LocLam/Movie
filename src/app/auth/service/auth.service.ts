import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { filter, from, map, Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  getDocs,
  QuerySnapshot,
  addDoc,
} from 'firebase/firestore';

import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseApp = initializeApp(environment.firebaseConfig);
  firestoreDB = getFirestore(this.firebaseApp);

  collectionName = 'users';
  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {}

  getUsers(): Observable<any> {
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

  signUp(email: string, password: string): Observable<any> {
    const documents = addDoc(
      collection(this.firestoreDB, this.collectionName),
      {
        email,
        password,
      }
    );
    return from(documents);
  }
}
