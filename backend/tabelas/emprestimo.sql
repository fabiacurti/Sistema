CREATE TABLE Emprestimo (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDLivro INT,
    IDUsuario INT,
    dEmprestimo DATE,
    dDevolucao DATE
);
