CREATE TABLE Emprestimo (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDLivro INT,
    IDUsuario VARCHAR(14),
    dEmprestimo DATE,
    dDevolucao DATE,
    IsReservado BOOLEAN,
    FOREIGN KEY (IDLivro) REFERENCES cadLivro(codigoLivro), 
    FOREIGN KEY (IDUsuario) REFERENCES alunoProfessor(cpf)
);