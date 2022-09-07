export interface Game {
  id: string;
  categories: Array<string>;
  name: string;
  image: string;
}

export interface Jackpot {
  game: string;
  amount: number;
}
