import { Module } from '@nestjs/common';
import { CartesController } from './cartes.controller';
import { CartesService } from './cartes.service';

@Module({
  controllers: [CartesController],
  providers: [CartesService]
})
export class CartesModule {}
