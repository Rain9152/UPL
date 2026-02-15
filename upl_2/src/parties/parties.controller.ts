import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { PartiesService } from './parties.service';

@Controller('parties')
export class PartiesController {
  constructor(
    private readonly partiesService: PartiesService,
  ){}
    
    @Post("nouvellePartie")
    @HttpCode(201)
    async nouvellePartie(
      @Body() body: {pseudos: string[]},
  ) {
      console.log("nb joueur: ", body);
      const pseudos = body.pseudos;
      
      return this.partiesService.nouvellePartie(pseudos);
    }

}
