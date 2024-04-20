CREATE TABLE tipoLivro (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    faixaEtaria VARCHAR(50),
    nivelLeitura VARCHAR(50),
    formato VARCHAR(50)
);

INSERT INTO tipolivro (ID, nome, faixaEtaria, nivelLeitura, formato) VALUES (1, 'João', 'Adulto', 'Avançado', 'Digital');
INSERT INTO tipolivro (ID, nome, faixaEtaria, nivelLeitura, formato) VALUES (2, 'Maria', 'Jovem', 'Intermediário', 'Impresso');
INSERT INTO tipolivro (ID, nome, faixaEtaria, nivelLeitura, formato) VALUES (3, 'Carlos', 'Adulto', 'Básico', 'Digital');
INSERT INTO tipolivro (ID, nome, faixaEtaria, nivelLeitura, formato) VALUES (4, 'Ana', 'Jovem', 'Avançado', 'Impresso');
INSERT INTO tipolivro (ID, nome, faixaEtaria, nivelLeitura, formato) VALUES (5, 'Pedro', 'Adulto', 'Intermediário', 'Digital');
