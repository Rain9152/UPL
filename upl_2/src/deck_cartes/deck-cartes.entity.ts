import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, UpdateDateColumn  } from 'typeorm';
import { Deck } from '../deck/deck.entity';
import { Carte } from '../cartes/cartes.entity';
import { Joueurs } from '../joueurs/joueurs.entity';

export enum status_carte{
    DANSPIOCHE = "Dans pioche",
    DANSMAIN = "Dans main",
    DANSDEFAUSSE = "Dans defausse"
}

@Entity('deck_cartes')
export class DeckCartes{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Deck, { eager: true })
    @JoinColumn({ name: 'deck_id' })
    deck: Deck;

    @ManyToOne(() => Carte, { eager: true })
    @JoinColumn({ name: 'cartes_id' })
    carte: Carte;

    @Column({ type: 'enum',
    enum : status_carte,
    default: status_carte.DANSPIOCHE
    })
    statut : status_carte ;

    @ManyToOne(() => Joueurs, { nullable: true })
    @JoinColumn({ name: 'joueur_id' })
    joueur?: Joueurs;

    @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    })
    updatedAt: Date;
}