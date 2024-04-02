CREATE TABLE alunoProfessor (
  Nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) NOT NULL PRIMARY KEY,
  dNascimento DATE NOT NULL,
  email VARCHAR(255) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  rua VARCHAR(100) NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  cep VARCHAR(9) NOT NULL,
  tipoPessoa VARCHAR(50) NOT NULL
);


INSERT INTO alunoProfessor (Nome, cpf, dNascimento, email, cidade, rua, telefone, cep, tipoPessoa) VALUES
('João Silva', '123.456.789-01', '1990-05-15', 'joao@example.com', 'São Paulo', 'Rua A', '(11) 1234-5678', '12345-678', 'Aluno');

INSERT INTO alunoProfessor (Nome, cpf, dNascimento, email, cidade, rua, telefone, cep, tipoPessoa) VALUES
('Maria Souza', '987.654.321-02', '1988-08-20', 'maria@example.com', 'Rio de Janeiro', 'Rua B', '(21) 9876-5432', '54321-876', 'Aluno');

INSERT INTO alunoProfessor (Nome, cpf, dNascimento, email, cidade, rua, telefone, cep, tipoPessoa) VALUES
('Carlos Oliveira', '111.222.333-45', '1975-12-10', 'carlos@example.com', 'Belo Horizonte', 'Rua C', '(31) 1111-2222', '98765-432', 'Professor');

INSERT INTO alunoProfessor (Nome, cpf, dNascimento, email, cidade, rua, telefone, cep, tipoPessoa) VALUES
('Ana Rodrigues', '444.555.666-78', '1995-03-25', 'ana@example.com', 'Porto Alegre', 'Rua D', '(51) 4444-5555', '67890-123', 'Aluno');

INSERT INTO alunoProfessor (Nome, cpf, dNascimento, email, cidade, rua, telefone, cep, tipoPessoa) VALUES
('Pedro Santos', '777.888.999-00', '1980-11-03', 'pedro@example.com', 'Salvador', 'Rua E', '(71) 7777-8888', '54321-098', 'Professor');



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


----------- TBL.generos
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
    IDUsuario INT,
    dEmprestimo DATE,
    dDevolucao DATE
);