----------- TBL.alunoProfessor
CREATE TABLE alunoProfessor (
  Nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) NOT NULL primary key,
  DataNascimento DATE NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Cidade VARCHAR(100) NOT NULL,
  Telefone VARCHAR (15) NOT NULL,
  Rua VARCHAR(100) NOT NULL,
  Numero VARCHAR(10) NOT NULL,
  cep VARCHAR(9) NOT NULL,
  TipoPessoa VARCHAR(50) NOT NULL
);

INSERT INTO
  alunoProfessor (Nome, CPF, DataNascimento, Email, Cidade, Telefone, Rua, Numero, CEP, TipoPessoa)
VALUES
  ('João Silva', '123.456.789-00', '1990-05-15', 'joao.silva@email.com', 'São Paulo', '(11) 9876-5432', 'Rua ABC', '123', '01234-567', 'Aluno'),
  ('Maria Oliveira','987.654.321-00','1988-12-03','maria.oliveira@email.com','Rio de Janeiro','(21) 8765-4321','Avenida XYZ','456','89012-345','Professor'),
  ('Pedro Santos','111.222.333-44','1995-08-22','pedro.santos@email.com','Brasília','(61) 7654-3210','Praça DEF','789','45678-901','Aluno'),
  ('Ana Pereira','555.666.777-88','1987-04-11','ana.pereira@email.com','Belo Horizonte','(31) 6543-2109','Alameda GHI','101','23456-789','Aluno'),
  ('Carlos Lima','999.888.777-66','1980-11-28','carlos.lima@email.com','Porto Alegre','(51) 5432-1098','Praia JKL','202','56789-012','Professor');


-------------------------------------------------------------
----------- TBL.autor
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



-------------------------------------------------------------
CREATE TABLE generos (
  id INT NOT NULL AUTO_INCREMENT,
  codigo INT NOT NULL,
  descricao VARCHAR(100),
  isAtivo BOOLEAN,
  PRIMARY KEY (id)
);



INSERT INTO
  generos (codigo, descricao, isAtivo)
VALUES
  (1, 'Ação', true),
  (2, 'Comédia', true),
  (3, 'Drama', false),
  (4, 'Ficção Científica', true);

CREATE TABLE tipoLivro (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    faixaEtaria VARCHAR(50),
    nivelLeitura VARCHAR(50),
    formato VARCHAR(50)
);


  CREATE TABLE `editoras` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(255) DEFAULT NULL,
    `fundacao` VARCHAR(255) NOT NULL,
    `cnpj` VARCHAR(255) NOT null,
    `contato` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO editoras (Nome, fundacao, cnpj, contato, email) VALUES
('Editora A', '01/01/1980', '123.456.789/0001-01', '(11) 1234-5678', 'contato@editoraA.com');
INSERT INTO editoras (Nome, fundacao, cnpj, contato, email) VALUES
('Editora B', '15/05/1975', '987.654.321/0001-02', '(21) 9876-5432', 'contato@editoraB.com');
INSERT INTO editoras (Nome, fundacao, cnpj, contato, email) VALUES
('Editora C', '20/10/1990', '111.222.333/0001-03', '(31) 1111-2222', 'contato@editoraC.com');
INSERT INTO editoras (Nome, fundacao, cnpj, contato, email) VALUES
('Editora D', '03/04/1985', '444.555.666/0001-04', '(41) 5555-4444', 'contato@editoraD.com');
INSERT INTO editoras (Nome, fundacao, cnpj, contato, email) VALUES
('Editora E', '12/12/2000', '777.888.999/0001-05', '(51) 7777-8888', 'contato@editoraE.com');



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
  


CREATE TABLE Emprestimo (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDLivro INT,
    IDUsuario VARCHAR(14),
    dEmprestimo DATE,
    dDevolucao DATE,
    IsReservado BOOLEAN,
    FOREIGN KEY (IDLivro) REFERENCES cadlivro(id), 
    FOREIGN KEY (IDUsuario) REFERENCES alunoProfessor(cpf)
);