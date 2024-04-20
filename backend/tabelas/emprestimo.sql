CREATE TABLE Emprestimo (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDLivro INT,
    IDUsuario VARCHAR(14),
    dEmprestimo DATE,
    dDevolucao DATE,
    IsReservado BOOLEAN,
    FOREIGN KEY (id_Livro) REFERENCES cadLivro(id), 
    FOREIGN KEY (id_AlunoProf) REFERENCES alunoProfessor(cpf)
);