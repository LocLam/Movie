import { Injectable } from '@angular/core';

import { filter, from, map, Observable, of } from 'rxjs';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  getDocs,
  QuerySnapshot,
  addDoc,
} from 'firebase/firestore';

import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/videos/models/video.model';

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
        console.log('result',result);
        
        let data: any = [];
        result.forEach((doc: any) => {
          const documentData = doc.data();
          data = [...data, documentData];
        });
        return data;
      })
    );
  }

  // signUp(email: string, password: string) {
  //   return this.afAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       console.log('result', result);

  //     })
  //     .catch((error) => {
  //       window.alert(error.message);
  //     });
  // }

  signUp(email: string, password: string): Observable<any> {
    console.log('email service: ', email);
    console.log('password service: ', password);

    const documents = addDoc(
      collection(this.firestoreDB, this.collectionName),
      {
        email,
        password,
      }
    );

    console.log('documents', documents);
    

    return from(documents);
  }
}
