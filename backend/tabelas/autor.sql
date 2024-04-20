create TABLE `autor` (
  `ID` int not null AUTO_INCREMENT,
  `Nome` varchar(50) NULL,
  `sobrenome` varchar(50) NULL,
  `dNascimento` DATE NULL,
  `cidadeNascimento` varchar(30) NULL,
  `genero` varchar(15) NULL,
  `email` varchar(100) NULL,
  `qntObras` varchar(4) NULL,
  PRIMARY KEY (`ID`)
);

INSERT INTO autor (Nome, sobrenome, dNascimento, cidadeNascimento, genero, email, qntObras) VALUES
('João', 'Silva', '1980-02-15', 'São Paulo', 'Masculino', 'joao.silva@example.com', '10');

INSERT INTO autor (Nome, sobrenome, dNascimento, cidadeNascimento, genero, email, qntObras) VALUES
('Maria', 'Souza', '1975-06-20', 'Rio de Janeiro', 'Feminino', 'maria.souza@example.com', '15');

INSERT INTO autor (Nome, sobrenome, dNascimento, cidadeNascimento, genero, email, qntObras) VALUES
('Carlos', 'Oliveira', '1990-10-10', 'Belo Horizonte', 'Masculino', 'carlos.oliveira@example.com', '8');

INSERT INTO autor (Nome, sobrenome, dNascimento, cidadeNascimento, genero, email, qntObras) VALUES
('Ana', 'Rodrigues', '1985-04-25', 'Porto Alegre', 'Feminino', 'ana.rodrigues@example.com', '20');

INSERT INTO autor (Nome, sobrenome, dNascimento, cidadeNascimento, genero, email, qntObras) VALUES
('Pedro', 'Santos', '1970-12-03', 'Salvador', 'Masculino', 'pedro.santos@example.com', '12');