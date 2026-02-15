import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deck } from '../deck/deck.entity';
import { DeckPartie } from '../deck/deck-partie.entity';
import { Parties } from '../parties/parties.entity';



@Injectable()
export class DeckService {

    constructor(
        @InjectRepository(Deck)
        private deckRepository: Repository<Deck>,
        @InjectRepository(DeckPartie) 
        private deckPartieRepository: Repository<DeckPartie>,
    ) {}

  //Méthode pour crée un deck. La logique de TypeORM est de crée l'objet (réserver la zone mémoire), puis de l'enregistrer dans la base de donnée (c'est là que PostgreSQL lui donne son ID)

async createDeck(partie: Parties): Promise<DeckPartie> {

  const deck = await this.deckRepository.save(
    this.deckRepository.create()
  );

  const liaison = this.deckPartieRepository.create({
    deck,
    partie,
  });

  return await this.deckPartieRepository.save(liaison);
}

}


