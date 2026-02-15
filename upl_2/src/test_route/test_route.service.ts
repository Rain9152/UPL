import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Carte } from '../cartes/cartes.entity';
import { Deck } from '../deck/deck.entity';

@Injectable()
export class TestRouteService {

    constructor(
        @InjectRepository(Carte)
        private carteRepository: Repository<Carte>,

        @InjectRepository(Deck)
        private deckRepository: Repository<Deck>,

    ) {}

  disBonjour(): string {
    return 'Bonjour!';
  }

  ////////CARTES///////

  // Méthode pour récupérer des cartes avec des certaines caractérisiiques : "find" et "findOne" ne peuvent pas faire d'aléatoire, il nous faut utiliser un autre
  async getRedCards(): Promise<Carte[]> {
    const RedCards = await this.carteRepository
    .find({
        
        where: {
            couleur : 'Rouge', 
            numero : 4
        }

    });
    return RedCards;
  }

  async getAHand(): Promise<Carte[]> {

    const Hand = await this.carteRepository.createQueryBuilder('carte')
    .orderBy('RANDOM()')
    .take(7)
    .getMany();

    return Hand;
  }

  
  ////////DECK///////


   // Méthode pour récuperer un deck. J'ai mis ici un paramètre pour le test. 
   // Problème de Promise : il est possible que le rendu soit type NULL (pas de deck crée) alors qu'on attend un type Deck. On doit mettre Deck | null
  async getDeck(idcherche : number): Promise<Deck | null> {
    const deck = await this.deckRepository
    .findOne({
        
        where: {
            id : idcherche

        }

    });
    return deck;
  }

    //Méthode pour crée un deck. La logique de TypeORM est de crée l'objet (réserver la zone mémoire), puis de l'enregistrer dans la base de donnée (c'est là que PostgreSQL lui donne son ID)

  async createDeck(): Promise<Deck>{

    //on crée le nouveau deck
    const newDeck = this.deckRepository.create();

    // on traduit la commande en SQL : "INSERT INTO Deck [...]"
    const saveDeck = await this.deckRepository.save(newDeck);
    return saveDeck;

  }


}
