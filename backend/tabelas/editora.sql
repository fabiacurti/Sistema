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