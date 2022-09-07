import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../../models/casino.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
