import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('joueurs')
export class Joueurs{

@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar', length: 50})
pseudo: string;

@Column({type: 'int'})
ordre: number;
}