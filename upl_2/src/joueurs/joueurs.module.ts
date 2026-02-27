import { Module } from '@nestjs/common';
import { JoueursService } from './joueurs.service';
import { JoueursController } from './joueurs.controller';
import { Joueurs } from './joueurs.entity';
import { JoueursPartie } from './joueurs-partie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Joueurs, JoueursPartie])
  ],
  providers: [JoueursService],
  controllers: [JoueursController],
  exports:[JoueursService],
})
export class JoueursModule {}
