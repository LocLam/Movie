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
export class AuthService {
  constructor() {}
}
