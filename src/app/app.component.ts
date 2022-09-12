import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from 'src/environments/environment';

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getFirestore,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import { from, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { getVideos } from './videos/store/action';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './videos/services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Movie';

  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);
  // docRef = doc(this.db, 'users');

  constructor(private store: Store, private spinner: NgxSpinnerService, private youTubeService: YoutubeService) {
    // this.addDoc();
    // this.getDoc();
  }

  async getDoc() {
    const querySnapshot = await getDocs(collection(this.db, 'users'));
    let response: any = [];
    querySnapshot.forEach((doc) => {
      response = [...response,  doc.data()]
    });
    console.log('response service', response);
    return of(response);
    // console.log('querySnapshot', querySnapshot.docs);
    
    // querySnapshot.forEach((doc) => {
    //   console.log('doc.data()', doc.data());
    // });
  }

  async addDoc() {
    const docRef = await addDoc(collection(this.db, 'users'), {
      email: 'loclam@yopm.com',
      password: 'new paass',
    });
    
    console.log('Document written with ID: ', docRef.id);
  }
}
