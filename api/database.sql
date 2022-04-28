DROP TABLE songs;
DROP TABLE artists;

CREATE TABLE artists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT,
    img TEXT
);
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artistId INT REFERENCES artists(id),
    name TEXT NOT NULL,
    duration TEXT NOT NULL,
    play_count VARCHAR(50),
    img TEXT
);
INSERT INTO artists VALUES (DEFAULT,  'Jay-Z',  52,'https://freepngimg.com/thumb/jay_z/32562-7-jay-z-clipart.png');

INSERT INTO songs VALUES (DEFAULT, 1, 'Song Cry', '5:03', 0,   
'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc4-static.dodax.com%2Fv2%2F600-600-152021069_BYDBa2-png&imgrefurl=https%3A%2F%2Fwww.dodax.com%2Fen-us%2Fmovies-music-gaming%2Fgeneral-hip-hop-rap%2Fjay-z-the-blueprint-dpBQ1IRUOI1SH%2F&tbnid=Tm0ExkKjGT8QNM&vet=12ahUKEwiooInb6Kr3AhUMLM0KHVnDDlUQMygEegQIARBG..i&docid=g1iDAJR7W3rOWM&w=600&h=600&q=j%20z%20album%20song%20cry&hl=en&ved=2ahUKEwiooInb6Kr3AhUMLM0KHVnDDlUQMygEegQIARBG'
);
