import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Deck } from './deck.entity';
import { Parties } from '../parties/parties.entity';

@Entity('deck_partie')
export class DeckPartie {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Deck, { eager: true })
  @JoinColumn({ name: 'deck_id' })
  deck: Deck;

  @ManyToOne(() => Parties, { eager: true })
  @JoinColumn({ name: 'partie_id' })
  partie: Parties;
}
