import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ':id',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./casino/casino.module').then((m) => m.CasinoModule),
  },
  {
    path: 'videos',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./videos/videos.module').then((m) => m.VideosModule),
  },
  
  { path: '', redirectTo: 'top', pathMatch: 'prefix' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
