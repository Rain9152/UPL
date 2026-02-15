import { Module } from '@nestjs/common';
import { PartiesService } from './parties.service';
import { PartiesController } from './parties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parties } from './parties.entity'
import { DeckModule } from 'src/deck/deck.module';


@Module({

    imports: [
  
      // 2. On déclare les entitées dans le module pour pouvoir s'en servir
      TypeOrmModule.forFeature([Parties]),
      DeckModule,
  
    ],

  providers: [PartiesService],
  controllers: [PartiesController]
})
export class PartiesModule {}
