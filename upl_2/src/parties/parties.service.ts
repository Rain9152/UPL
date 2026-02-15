import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parties } from './parties.entity'
import { DeckService } from 'src/deck/deck.service';
import { JoueursService } from 'src/joueurs/joueurs.service';

@Injectable()
export class PartiesService {

    
    constructor(
            @InjectRepository(Parties)
            private partieRepository: Repository<Parties>,

            private readonly deckService : DeckService,
            private readonly joueursService : JoueursService
        ) {}

        
    async creePartieBD(): Promise<Parties>{

        //on crée le nouveau deck
        const newGame = this.partieRepository.create();

        // on traduit la commande en SQL : "INSERT INTO Deck [...]"
        const saveGame = await this.partieRepository.save(newGame);
        return saveGame;

    }


async nouvellePartie(pseudos: string[]) {        
        const partie = await this.creePartieBD();

        await this.deckService.createDeck(partie);
        const joueurs = await this.joueursService.createPlayers(pseudos);
        return joueurs;
        

    }



}
