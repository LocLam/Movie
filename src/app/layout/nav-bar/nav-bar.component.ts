import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { FormBuilder, FormGroup } from '@angular/forms';
import { selectIsLoading } from '../store/selector/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectIsLoading));

  form!: FormGroup;
  urlActive = '';
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    router.events.subscribe((val: any) => {
      this.urlActive = val?.url;
  });

    this.buildForm();
  }

  ngOnInit(): void {}
  buildForm() {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    console.log('form.value: ', this.form.value);
  }
}
