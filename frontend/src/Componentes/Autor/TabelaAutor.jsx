import React, { useState, useEffect } from 'react';
import AutorService from '../services/autorService.js';
import FormAutor from './FormAutor.jsx';
import FormFiltro from './FormFiltro.jsx';


const autorService = new AutorService()


function TabelaAutor({ atualizar }) {

    const [confirmacaoDelete, setConfirmacaoDelete] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [autores, setAutores] = useState([]);

    const carregaAutores = async () => {
        try {
            const dados = await autorService.getAllAutores();
            setAutores(dados);
        } catch (error) {
            console.error("Erro ao carregar os autores: ", error);
        }
    };

    useEffect(() => {
        carregaAutores();
    }, [atualizar]);


    const handleDelete = async (ID) => {
        setConfirmacaoDelete(ID);
        setShowConfirmation(true);
    };


    const confirmDelete = async () => {
        if (confirmacaoDelete) {
            await autorService.deleteAutor(confirmacaoDelete);
            const dados = await autorService.getAllAutores();
            setAutores(dados);
            setConfirmacaoDelete(null);
        }
        setShowConfirmation(false);
    };

    const cancelDelete = () => {
        setConfirmacaoDelete(null);
        setShowConfirmation(false);
    };

    const [selectedAutor, setSelectedAutor] = useState(null)
    const handleEdit = async (autor) => {
        setSelectedAutor(autor)
    }


    const handleUpdate = async () => {
        await carregaAutores()
    }


    const handleUpDateFiltro = async (autoresFiltrados) => {
        setAutores(autoresFiltrados)
    }

    return (
        <>
            <FormAutor selectedAutor={selectedAutor} onUpdate={handleUpdate}></FormAutor>
            <div className="janelaAutor">
                <FormFiltro onUpdate={handleUpDateFiltro}></FormFiltro>
                
                    {showConfirmation && (
                            <div className="confirmation">
                                <p>Confirme a exclusão do autor?</p>
                                <button className="btn btn-danger" onClick={confirmDelete}>
                                    Sim
                                </button>
                                <button className="btn btn-primary" onClick={cancelDelete}>
                                    Não
                                </button>
                            </div>
                        )}
                
                <div className="tabelaAutor">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col ">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobrenome</th>
                                <th scope="col">Data Nascimento</th>
                                <th scope="col">Cidade Nascimento</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Email</th>
                                <th scope="col">Qnt Obras</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                autores.map((autor => (
                                    <tr>
                                        <th scope="row ">{autor.ID}</th>
                                        <td >{autor.Nome}</td>
                                        <td>{autor.sobrenome}</td>
                                        <td>{`${new Date(autor.dNascimento).getDate().toString().padStart(2, "0")}/${new Date(autor.dNascimento).getMonth().toString().padStart(2, "0")}/${new Date(autor.dNascimento).getFullYear()}`}
                                        </td>
                                        <td>{autor.cidadeNascimento}</td>
                                        <td>{autor.genero}</td>
                                        <td>{autor.email}</td>
                                        <td>{autor.qntObras}</td>
                                        <td>
                                            <button type='button' onClick={() => handleDelete(autor.ID)} className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                            <button type='button' onClick={() => handleEdit(autor)} className="btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                                        </td>
                                        

                                    </tr>
                                )))
                            }
                        </tbody>

                    </table>
                    
                </div>
            </div>
        </>
    );
}

export default TabelaAutor;
