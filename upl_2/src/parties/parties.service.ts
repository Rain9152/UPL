import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parties } from './parties.entity'
import { DeckService } from 'src/deck/deck.service';

@Injectable()
export class PartiesService {

    
    constructor(
            @InjectRepository(Parties)
            private partieRepository: Repository<Parties>,

            private readonly deckService : DeckService
        ) {}

        
    async creePartieBD(): Promise<Parties>{

        //on crée le nouveau deck
        const newGame = this.partieRepository.create();

        // on traduit la commande en SQL : "INSERT INTO Deck [...]"
        const saveGame = await this.partieRepository.save(newGame);
        return saveGame;

    }


    nouvellePartie(): any{
        
        this.creePartieBD();

        this.deckService.createDeck();
        
        

    }



}
