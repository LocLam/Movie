import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export enum GameType {
  NEW = 'new',
  TOP = 'top',
}

@Pipe({
  name: 'ribbonLabel',
})
export class RibbonLabelPipe implements PipeTransform {
  categorySelected = '';
  needToShowRibbon: Array<string> = [GameType.NEW, GameType.TOP];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.categorySelected = params['id'];
    });
  }

  transform(value: Array<string>): Array<string> {
    return this.filterRibbon(value);
  }

  filterRibbon(value: Array<string>): Array<string> {
    if (this.needToShowRibbon.includes(this.categorySelected)) {
      let categoryNeedToFilter =
        this.categorySelected === GameType.NEW ? GameType.TOP : GameType.NEW;

      return [...value.filter((item: string) => item === categoryNeedToFilter)];
    }

    return [
      ...value.filter((item: string) => this.needToShowRibbon.includes(item)),
    ];
  }
}
