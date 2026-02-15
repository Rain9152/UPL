import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//Postgres ne supporte par le type "Enum", on le crée nous même
export enum status_partie{
    ENCOURS = "En cours",
    TERMINEE = "Terminée"
}


// Le nom entre parenthèses doit correspondre EXACTEMENT au nom de la table dans Adminer
@Entity('parties') 
export class Parties {
  
  // PrimaryGeneratedColumn car on utilise un SERIAL qui s'auto-incrémente
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum',
  enum : status_partie,
  default: status_partie.ENCOURS
  })
  statut : status_partie ;

  @Column({ type: 'int' , nullable: true })
  gagnant: number;

}
