CREATE TYPE statut_partie AS ENUM ('en_cours', 'terminee');
CREATE TABLE Joueurs
(
    ID SERIAL PRIMARY KEY NOT NULL,
    Pseudo VARCHAR(255) NOT NULL,
    Ordre INT
);

CREATE TABLE Partie
(
    ID SERIAL PRIMARY KEY NOT NULL,
    Statut statut_partie NOT NULL default 'en_cours',
    Gagnant INT,
    CONSTRAINT fk_gagnant FOREIGN KEY (Gagnant) REFERENCES Joueurs(ID) ON DELETE SET NULL
);