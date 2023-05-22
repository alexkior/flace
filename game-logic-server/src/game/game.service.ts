import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  private board: Map<string, string>;

  constructor() {
    this.board = new Map();
  }

  setCell(x: number, y: number, player: 'X' | 'O'): boolean {
    if (this.getCell(x, y) !== null) {
      return false;
    }

    this.board.set(`${x},${y}`, player);

    if (this.checkWin(x, y, player)) {
      console.log(`${player} wins!`);
      return true;
    }

    return false;
  }

  getCell(x: number, y: number): 'X' | 'O' | null {
    return (this.board.get(`${x},${y}`) as 'X' | 'O') || null;
  }

  private checkWin(x: number, y: number, player: 'X' | 'O'): boolean {
    const directions = [
      [1, 0],
      [0, 1],
      [1, 1],
      [1, -1],
    ];

    for (const [dx, dy] of directions) {
      let count = 1;

      for (let step = 1; step < 5; step++) {
        if (this.getCell(x + step * dx, y + step * dy) === player) {
          count++;
        } else {
          break;
        }
      }

      for (let step = 1; step < 5; step++) {
        if (this.getCell(x - step * dx, y - step * dy) === player) {
          count++;
        } else {
          break;
        }
      }

      if (count >= 5) {
        return true;
      }
    }

    return false;
  }
}
