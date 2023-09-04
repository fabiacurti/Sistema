CREATE TABLE Cliente (
    CPF VARCHAR(14) NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Endereco VARCHAR(255),
    Bairro VARCHAR(100),
    Cidade VARCHAR(100),
    UF CHAR(2),
    Telefone VARCHAR(20),
    Email VARCHAR(255),
    PRIMARY KEY (CPF)
);

