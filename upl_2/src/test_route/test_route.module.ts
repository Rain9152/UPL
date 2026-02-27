import { Module } from '@nestjs/common';
import { TestRouteController } from './test_route.controller';
import { TestRouteService } from './test_route.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Carte } from '../cartes/cartes.entity'
import { Deck } from '../deck/deck.entity'


@Module({

  imports: [

    // 2. On déclare les entitées dans le module pour pouvoir s'en servir
    TypeOrmModule.forFeature([Carte, Deck])

  ],

  controllers: [TestRouteController],
  providers: [TestRouteService]
})
export class TestRouteModule {}

