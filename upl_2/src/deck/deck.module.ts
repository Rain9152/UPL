import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deck } from '../deck/deck.entity'


@Module({

    imports: [
  
      // 2. On déclare les entitées dans le module pour pouvoir s'en servir
      TypeOrmModule.forFeature([Deck])
  
    ],

  providers: [DeckService],
  controllers: [DeckController]
})
export class DeckModule {}
