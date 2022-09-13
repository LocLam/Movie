import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  getListUser,
  signIn,
  signOut,
  signUp,
} from 'src/app/auth/store/action';
import { User } from 'src/app/videos/models/video.model';
import {
  selectIsLoading,
  selectUser,
  selectUsers,
} from 'src/app/auth/store/selector/auth.selector';
import { resetMessageShareVideo } from 'src/app/videos/store/action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectIsLoading));
  users$ = this.store.pipe(select(selectUsers));
  user$ = this.store.pipe(select(selectUser));

  form!: FormGroup;
  urlActive = '';
  users!: Array<User>;
  user!: any;

  emailPattern =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    router.events.subscribe((val: any) => {
      this.urlActive = val?.url;
    });
    this.store.dispatch(getListUser());
    this.buildForm();
    this.getDataFromLocalStorage();
  }

  ngOnInit(): void {
    this.users$.subscribe((users: Array<User>) => {
      this.users = users;
    });

    this.user$.subscribe((user: User | null) => {
      this.user = user;
    });
  }
  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    const userSelected = this.users.find(
      (item: User) => item.email === user.email
    );

    if (!userSelected) {
      this.store.dispatch(signUp({ user }));
    }

    if (userSelected) {
      if (userSelected.password === user.password) {
        this.store.dispatch(signIn({ user: userSelected }));
      } else {
        alert('Password is incorrect!!!');
      }
    }
  }

  getDataFromLocalStorage() {
    let user: any = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
      this.store.dispatch(signIn({ user: this.user }));
    }
  }

  onLogout() {
    localStorage.removeItem('user');
    this.store.dispatch(signOut());
    this.store.dispatch(resetMessageShareVideo());
  }
}
