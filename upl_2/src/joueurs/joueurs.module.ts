import { Module } from '@nestjs/common';
import { JoueursService } from './joueurs.service';
import { JoueursController } from './joueurs.controller';

@Module({
  providers: [JoueursService],
  controllers: [JoueursController]
})
export class JoueursModule {}
