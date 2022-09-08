import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareLinkComponent } from './containers/share-link/share-link.component';

import { VideosPageComponent } from './containers/videos-page/videos-page.component';

const routes: Routes = [
  {
    path: '',
    component: VideosPageComponent,
  },
  {
    path: 'share',
    component: ShareLinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
