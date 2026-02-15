import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deck } from '../deck/deck.entity';


@Injectable()
export class DeckService {

    constructor(
        @InjectRepository(Deck)
        private deckRepository: Repository<Deck>,
    ) {}

  //Méthode pour crée un deck. La logique de TypeORM est de crée l'objet (réserver la zone mémoire), puis de l'enregistrer dans la base de donnée (c'est là que PostgreSQL lui donne son ID)

  async createDeck(): Promise<Deck>{

    //on crée le nouveau deck
    const newDeck = this.deckRepository.create();

    // on traduit la commande en SQL : "INSERT INTO Deck [...]"
    const saveDeck = await this.deckRepository.save(newDeck);
    return saveDeck;

  }
}


