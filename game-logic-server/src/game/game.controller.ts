import { Controller, Get, Post, Query } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('move')
  makeMove(
    @Query('x') x: number,
    @Query('y') y: number,
    @Query('player') player: 'X' | 'O',
  ): { success: boolean; message?: string } {
    const result = this.gameService.setCell(x, y, player);

    if (result) {
      return { success: true, message: 'Valid move' };
    } else {
      return { success: false, message: 'Invalid move' };
    }
  }
}
