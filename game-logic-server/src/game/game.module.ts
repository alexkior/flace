import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  imports: [],
  controllers: [AppController, GameController],
  providers: [AppService, GameService],
})
export class GameModule {}
