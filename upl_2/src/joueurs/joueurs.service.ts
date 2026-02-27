import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Joueurs } from './joueurs.entity';
import { Repository } from 'typeorm';
import { JoueursPartie } from './joueurs-partie.entity';
import { Parties } from '../parties/parties.entity';

@Injectable()
export class JoueursService {

    constructor(
        @InjectRepository(Joueurs)
        private joueursRepository: Repository<Joueurs>,
        @InjectRepository(JoueursPartie)
        private joueursPartieRepository: Repository<JoueursPartie>,
    ){}

    async createPlayers(pseudos: string[], partie: Parties){
        const createdPlayers: Joueurs[] = [];
        let ordre = 0;

        for(const pseudo of pseudos){

            const joueur = this.joueursRepository.create({ 
                pseudo, 
                ordre: ordre++, 
            });

            const savedPlayer = await this.joueursRepository.save(joueur);

            const liaison = this.joueursPartieRepository.create({
                joueurs: savedPlayer,
                partie: partie,
            });
            await this.joueursPartieRepository.save(liaison);

            createdPlayers.push(savedPlayer);

        }
        return createdPlayers;
    }
}
