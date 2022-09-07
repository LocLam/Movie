import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { containers } from './containers';
import { CasinoService } from './service/casino.service';
import { CasinoRoutingModule } from './casino-routing.module';
import { components } from './components';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { RibbonLabelPipe } from './ribbon-label.pipe';

@NgModule({
  declarations: [containers, components, JackpotComponent, RibbonLabelPipe],
  imports: [
    CommonModule,
    CasinoRoutingModule,
  ],
  providers: [CasinoService],
})
export class CasinoModule {}
