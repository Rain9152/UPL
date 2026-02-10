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




CREATE TABLE Cartes
(
    ID SERIAL PRIMARY KEY NOT NULL,
    Couleur VARCHAR(100),
    Numero INT NOT NULL,
    Lien_Image VARCHAR(255)
);

INSERT INTO Cartes (Couleur, Numero, Lien_Image)
VALUES

-- ROUGE (25 cartes)
('Rouge', 0, ' '),
('Rouge', 1, ' '), ('Rouge', 1, ' '),
('Rouge', 2, ' '), ('Rouge', 2, ' '),
('Rouge', 3, ' '), ('Rouge', 3, ' '),
('Rouge', 4, ' '), ('Rouge', 4, ' '),
('Rouge', 5, ' '), ('Rouge', 5, ' '),
('Rouge', 6, ' '), ('Rouge', 6, ' '),
('Rouge', 7, ' '), ('Rouge', 7, ' '),
('Rouge', 8, ' '), ('Rouge', 8, ' '),
('Rouge', 9, ' '), ('Rouge', 9, ' '),
('Rouge', 10, ' '), ('Rouge', 10, ' '), -- Changement de sens
('Rouge', 11, ' '), ('Rouge', 11, ' '), -- +2
('Rouge', 12, ' '), ('Rouge', 12, ' '), -- Sens interdit

-- BLEU (25 cartes)
('Bleu', 0, ' '),
('Bleu', 1, ' '), ('Bleu', 1, ' '),
('Bleu', 2, ' '), ('Bleu', 2, ' '),
('Bleu', 3, ' '), ('Bleu', 3, ' '),
('Bleu', 4, ' '), ('Bleu', 4, ' '),
('Bleu', 5, ' '), ('Bleu', 5, ' '),
('Bleu', 6, ' '), ('Bleu', 6, ' '),
('Bleu', 7, ' '), ('Bleu', 7, ' '),
('Bleu', 8, ' '), ('Bleu', 8, ' '),
('Bleu', 9, ' '), ('Bleu', 9, ' '),
('Bleu', 10, ' '), ('Bleu', 10, ' '),
('Bleu', 11, ' '), ('Bleu', 11, ' '),
('Bleu', 12, ' '), ('Bleu', 12, ' '),

-- JAUNE (25 cartes)
('Jaune', 0, ' '),
('Jaune', 1, ' '), ('Jaune', 1, ' '),
('Jaune', 2, ' '), ('Jaune', 2, ' '),
('Jaune', 3, ' '), ('Jaune', 3, ' '),
('Jaune', 4, ' '), ('Jaune', 4, ' '),
('Jaune', 5, ' '), ('Jaune', 5, ' '),
('Jaune', 6, ' '), ('Jaune', 6, ' '),
('Jaune', 7, ' '), ('Jaune', 7, ' '),
('Jaune', 8, ' '), ('Jaune', 8, ' '),
('Jaune', 9, ' '), ('Jaune', 9, ' '),
('Jaune', 10, ' '), ('Jaune', 10, ' '),
('Jaune', 11, ' '), ('Jaune', 11, ' '),
('Jaune', 12, ' '), ('Jaune', 12, ' '),

-- VERT (25 cartes)
('Vert', 0, ' '),
('Vert', 1, ' '), ('Vert', 1, ' '),
('Vert', 2, ' '), ('Vert', 2, ' '),
('Vert', 3, ' '), ('Vert', 3, ' '),
('Vert', 4, ' '), ('Vert', 4, ' '),
('Vert', 5, ' '), ('Vert', 5, ' '),
('Vert', 6, ' '), ('Vert', 6, ' '),
('Vert', 7, ' '), ('Vert', 7, ' '),
('Vert', 8, ' '), ('Vert', 8, ' '),
('Vert', 9, ' '), ('Vert', 9, ' '),
('Vert', 10, ' '), ('Vert', 10, ' '),
('Vert', 11, ' '), ('Vert', 11, ' '),
('Vert', 12, ' '), ('Vert', 12, ' '),

-- CARTES NOIRES / SPECIALES (8 cartes)
('Noir', 13, ' '), ('Noir', 13, ' '), ('Noir', 13, ' '), ('Noir', 13, ' '), -- 4 Changement Couleur
('Noir', 14, ' '), ('Noir', 14, ' '), ('Noir', 14, ' '), ('Noir', 14, ' '); -- 4 Joker (+4)


CREATE TABLE Deck
(
    ID SERIAL PRIMARY KEY NOT NULL
);

CREATE TYPE statut_carte AS ENUM ('dans_pioche', 'dans_main','dans_defausse');
CREATE TABLE Deck_Cartes
(
    ID SERIAL PRIMARY KEY NOT NULL,
    Deck_ID INT,
    Cartes_ID INT,
    Statut statut_carte NOT NULL default 'dans_pioche',
    Updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_Deck FOREIGN KEY (Deck_ID) REFERENCES Deck (ID) ON DELETE CASCADE,
    CONSTRAINT fk_Carte FOREIGN KEY (Cartes_ID) REFERENCES Cartes (ID) ON DELETE CASCADE

);
