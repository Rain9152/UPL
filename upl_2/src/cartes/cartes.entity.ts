import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Le nom entre parenthèses doit correspondre EXACTEMENT au nom de la table dans Adminer
@Entity('cartes') 
export class Carte {
  
  // PrimaryGeneratedColumn car on utilise un SERIAL qui s'auto-incrémente
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  couleur: string;

  @Column({ type: 'int' })
  numero: number;

  // On précise "name: 'lien_image'" car en TypeScript on préfère écrire 
  // en camelCase (lienImage) mais dans la base c'est en snake_case (lien_image)
  @Column({ type: 'varchar', length: 255, name: 'lien_image', nullable: true })
  lienImage: string;

}