import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [MainLayoutComponent, NavBarComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [MainLayoutComponent],
  providers: [
    AuthService,
  ]
})
export class LayoutModule {}
