import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Parties } from '../parties/parties.entity';
import { Joueurs } from './joueurs.entity';

@Entity('joueurs_partie')
export class JoueursPartie {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Joueurs, { eager: true })
    @JoinColumn({ name: 'joueurs_id' })
    joueurs: Joueurs;

    @ManyToOne(() => Parties, { eager: true })
    @JoinColumn({ name: 'partie_id' })
    partie: Parties;
}