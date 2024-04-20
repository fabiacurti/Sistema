 create TABLE `cadLivro` (
  `nomeLivro` varchar(50) NULL,
  `id` int AUTO_INCREMENT,
  `cod` int not null,
  `numeroPagina` int NULL,
  `editora` varchar(40) NULL,
  `genero` varchar(30) NULL,
  `dataPublicacao` date NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO cadLivro (nomeLivro, cod, numeroPagina, editora, genero, dataPublicacao) VALUES
('Dom Casmurro', 1, 256, 'Editora A', 'Drama', '1870-01-01');
INSERT INTO cadLivro (nomeLivro, cod, numeroPagina, editora, genero, dataPublicacao) VALUES
('A Metamorfose', 2, 128, 'Editora B', 'Ficção Científica', '1915-01-01');
INSERT INTO cadLivro (nomeLivro, cod, numeroPagina, editora, genero, dataPublicacao) VALUES
('O Pequeno Príncipe', 3, 96, 'Editora C', 'Comédia', '1943-01-01');
INSERT INTO cadLivro (nomeLivro, cod, numeroPagina, editora, genero, dataPublicacao) VALUES
('1984', 4, 328, 'Editora D', 'Ação', '1949-01-01');
INSERT INTO cadLivro (nomeLivro, cod, numeroPagina, editora, genero, dataPublicacao) VALUES
('O Senhor dos Anéis', 5, 1000, 'Editora E', 'Drama', '1954-01-01');