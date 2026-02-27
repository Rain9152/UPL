import { Entity, PrimaryGeneratedColumn } from 'typeorm';

// Le nom entre parenthèses doit correspondre EXACTEMENT au nom de la table dans Adminer
@Entity('deck') 
export class Deck {
  
  // PrimaryGeneratedColumn car on utilise un SERIAL qui s'auto-incrémente
  @PrimaryGeneratedColumn()
  id: number;

}