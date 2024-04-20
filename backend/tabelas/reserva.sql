CREATE TABLE reserva(
    id_Res INT AUTO_INCREMENT NOT NULL,
    id_Livro INT NOT NULL,
    id_AlunoProf VARCHAR (30) NOT NULL,
    Data_Reserva DATE NOT NULL,
    Data_Devolução DATE NOT NULL,
    Status_Reserva VARCHAR (250) NOT NULL,
    PRIMARY KEY (id_Res, id_Livro, id_AlunoProf),
    FOREIGN KEY (id_Livro) REFERENCES cadLivro(id), 
    FOREIGN KEY (id_AlunoProf) REFERENCES alunoProfessor(cpf)
);