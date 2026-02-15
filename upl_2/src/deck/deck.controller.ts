import { Controller, Get, Post } from '@nestjs/common';
import { DeckService } from './deck.service';



@Controller('deck')
export class DeckController {

    constructor(private readonly DeckService: DeckService) {}

  @Get("createdeck")
  async createDeck() {
    return await this.DeckService.createDeck();
  }

}
