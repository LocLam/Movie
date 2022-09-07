import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent, NavBarComponent],
  imports: [CommonModule, RouterModule],
  exports:[
    MainLayoutComponent
  ]
})
export class LayoutModule {}
