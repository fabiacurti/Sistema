import React, { useState, useEffect } from "react";
import LivroService from "../services/livroService";
import FormLivro from "./formLivro";
import FormFiltro from "./formFiltro";
import "./Livro.css"

const livroservice = new LivroService();

function ListaLivros() {
  const [livros, setLivros] = useState([]);
  const [selectedLivro, setSelectedLivro] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const carregaLivros = async () => {
    try {
      const dados = await livroservice.getAllLivros();
      setLivros(dados);
    } catch (error) {
      console.error('Erro ao carregar:', error);
    }
  };

  useEffect(() => {
    carregaLivros();
  }, []);

  const handleDelete = async (id) => {
    setIdToDelete(id);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    if (idToDelete) {
      await livroservice.deleteLivro(idToDelete);
      await carregaLivros(); // Update the list of books after deletion
      setIdToDelete(null);
    }
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setIdToDelete(null);
    setShowConfirmation(false);
  };

  const handleEdit = async (cadlivro) => {
    setSelectedLivro(cadlivro);
  };

  const handleUpdate = async () => {
    await carregaLivros();
  };

  const handleUpdateFiltro = async (livroFiltro) => {
    setLivros(livroFiltro);
  };

  return (
    <div>
      <FormLivro selectedLivro={selectedLivro} onUpdate={handleUpdate} />
      <div className="janelaLivro">
        <FormFiltro onUpdate={handleUpdateFiltro} />
        {showConfirmation && (
          <div className="confirmation">
            <p>Deseja realmente excluir este livro?</p>
            <button className="btn btn-danger" onClick={confirmDelete}>
              Sim
            </button>
            <button className="btn btn-primary" onClick={cancelDelete}>
              Não
            </button>
          </div>
        )}
        <div className="tabelaLivro">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome Livro</th>
                <th scope="col">Páginas</th>
                <th scope="col">Editora</th>
                <th scope="col">Gênero</th>
                <th scope="col">Data de Publicação</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((cadlivro) => (
                <tr key={cadlivro.id}>
                  <th scope="row">{cadlivro.cod}</th>
                  <td>{cadlivro.nomeLivro}</td>
                  <td>{cadlivro.numeroPagina}</td>
                  <td>{cadlivro.editora}</td>
                  <td>{cadlivro.genero}</td>
                  <td>{new Date(cadlivro.dataPublicacao).toLocaleDateString()}</td>
                  <td>
                    
                    <button
                      type="button"
                      onClick={() => handleEdit(cadlivro)}
                      className="btn btn-primary"
                    >
                    <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(cadlivro.id)}
                      className="btn btn-danger"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaLivros;
