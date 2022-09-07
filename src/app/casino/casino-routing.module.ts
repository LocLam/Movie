import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasinoPageComponent } from './containers/casino-page/casino-page.component';
import { ListGameComponent } from './containers/list-game/list-game.component';

const routes: Routes = [
  {
    path: '',
    component: CasinoPageComponent,
    children: [{ path: '', component: ListGameComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasinoRoutingModule {}
