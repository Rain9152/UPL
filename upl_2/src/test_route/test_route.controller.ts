import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TestRouteService } from './test_route.service';

@Controller('test-route')
export class TestRouteController {

    constructor(private readonly TestRouteService: TestRouteService) {}

  @Get("disBonjour")
  getHello(): string {
    return this.TestRouteService.disBonjour();
  }

  @Get("cartesrouges")
  async getRedCards() {
    return await this.TestRouteService.getRedCards();
  }

  @Get("Hand")
  async getAHand() {
    return await this.TestRouteService.getAHand();
  }

  //Récuperer un deck. La difficulté ici est qu'on a un paramètre dans la fonction (pour tester comment marchera l'intéraction du joueur avec l'API)
  //Dans les paramètres de la fonction on rajoute @Param(nom en texte du paramètre, ParseIntPipe) ParseIntPipe permet de faire la conversion du texte dans notre requete HTTP vers un int
  //Pour  
  @Get("deck/:id")
  async getDeck( @Param('id', ParseIntPipe) idcherche: number ){
    return await this.TestRouteService.getDeck(idcherche);
  }

  @Get("createdeck")
  async createDeck() {
    return await this.TestRouteService.createDeck();
  }

}
