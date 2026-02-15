import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestRouteModule } from './test_route/test_route.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeckModule } from './deck/deck.module';
import { JoueursModule } from './joueurs/joueurs.module';
import { PartiesModule } from './parties/parties.module';


@Module({
  imports: [TestRouteModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres', // Le nom d'utilisateur défini dans votre docker-compose
      password: 'postgres', // Le mot de passe défini dans votre docker-compose
      database: 'upl', // Le nom de la base de données
      autoLoadEntities: true, // Pratique : charge automatiquement les tables que l'on va créer
      synchronize: false, // TRÈS IMPORTANT : Laissez sur false !
    }),

    TestRouteModule,

    DeckModule,

    JoueursModule,

    PartiesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
