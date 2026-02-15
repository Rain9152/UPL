import { Controller, HttpCode, Post } from '@nestjs/common';

@Controller('parties')
export class PartiesController {

    
    @Post("nouvellePartie")
    @HttpCode(204)
      async nouvellePartie() {
        return 0;
    }

}
