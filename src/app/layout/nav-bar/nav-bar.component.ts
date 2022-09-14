import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { User } from 'src/app/videos/models/video.model';
import * as authActions from 'src/app/auth/store/action';
import * as authSelectors from 'src/app/auth/store/selector/auth.selector';
import { resetMessageShareVideo } from 'src/app/videos/store/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoading$ = this.store.pipe(select(authSelectors.selectIsLoading));
  users$ = this.store.pipe(select(authSelectors.selectUsers));
  user$ = this.store.pipe(select(authSelectors.selectUser));

  form!: FormGroup;
  users!: Array<User>;
  user!: any;
  urlActive = '';

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
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();

    this.router.events.subscribe((val: any) => (this.urlActive = val?.url));
    this.store.dispatch(authActions.getListUser());
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
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const user = this.form.value;

    const userSelected = this.users.find(
      (item: User) => item.email === user.email
    );

    if (!userSelected) {
      this.store.dispatch(authActions.signUp({ user }));
    }

    if (userSelected) {
      if (userSelected.password === user.password) {
        this.store.dispatch(authActions.signIn({ user: userSelected }));
        return;
      }

      alert('Password is incorrect!!!');
    }
  }

  getDataFromLocalStorage() {
    let user: any = localStorage.getItem('user');

    if (user) {
      this.user = JSON.parse(user);
      this.store.dispatch(authActions.signIn({ user: this.user }));
    }
  }

  onLogout() {
    localStorage.removeItem('user');
    this.store.dispatch(authActions.signOut());
    this.store.dispatch(resetMessageShareVideo());
  }
}
