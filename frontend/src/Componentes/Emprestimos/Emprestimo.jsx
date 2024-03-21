import React, { useState, useEffect } from 'react';
import CabecalhoEmprestimo from './Cabecalho_Emprestimo';
import './Cabecalho_Emprestimo.css';
import EmprestimoService from '../services/emprestimoService.js'; // Importando o serviço de empréstimo

function Emprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [codigo, setCodigo] = useState('');
    const [genero, setGenero] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [idUsuario, setIdUsuario] = useState(''); 
    const [dataEmprestimo, setDataEmprestimo] = useState('');
    const [dataDevolucao, setDataDevolucao] = useState(''); 
    const emprestimoService = new EmprestimoService();

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const response = await emprestimoService.obterLista(); // Usando o serviço para obter os gêneros
                setEmprestimos(response);
            } catch (error) {
                console.error('Erro ao obter gêneros:', error);
                setMensagemErro('Erro ao obter gêneros do servidor.');
            }
        };

        fetchEmprestimos();
    }, []);

    // Função para realizar empréstimo
    const handleEmprestimo = async () => {
        try {
            // Lógica para realizar o empréstimo
            // Você pode chamar uma função do serviço relacionada ao empréstimo
            // Certifique-se de lidar com erros e atualizar o estado conforme necessário
        } catch (error) {
            console.error('Erro ao realizar empréstimo:', error.message);
            setMensagemErro('Erro ao realizar empréstimo.');
        }
    };

    const handleExcluir = async (id) => {
        // Função para excluir o gênero
        // Adicione a lógica de exclusão aqui, similar ao método handleCadastrar
    };

    const handleCadastrar = async (id) => {
        // Função para excluir o gênero
        // Adicione a lógica de exclusão aqui, similar ao método handleCadastrar
    };
    const handleEditar = async () => {
        // Função para editar o gênero
        // Adicione a lógica de edição aqui, similar ao método handleCadastrar
    };

    const handleIniciarEdicao = (id, descricao) => {
        setEditingId(id);
        setEditedName(descricao);
    };

    return (
        <>
            <CabecalhoEmprestimo />
            <div className="container fundoss">
                <div className="formulario fundo">
                    <div className="mb-3">
                        <label htmlFor="codigo" className="form-label">
                            Código do Livro
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="codigo"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="idUsuario" className="form-label">
                            ID do Usuário
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="idUsuario"
                            value={idUsuario}
                            onChange={(e) => setIdUsuario(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dataEmprestimo" className="form-label">
                            Data do Empréstimo
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataEmprestimo"
                            value={dataEmprestimo}
                            onChange={(e) => setDataEmprestimo(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dataDevolucao" className="form-label">
                            Data de Devolução
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataDevolucao"
                            value={dataDevolucao}
                            onChange={(e) => setDataDevolucao(e.target.value)}
                        />
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleCadastrar}
                        >
                           Pesquisar
                        </button>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={() => {
                                setCodigo('');
                                setIdUsuario('');
                                setDataEmprestimo('');
                                setDataDevolucao('');
                                setMensagemErro('');
                            }}
                        >
                            Limpar
                        </button>
                    </div>

                    {mensagemErro && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {mensagemErro}
                        </div>
                    )}
                </div>

                <div className="conteudo-extra">
                    <div id="tabela">
                        <div id="espacoTabela"></div>
                        {emprestimos.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID do Empréstimo</th>
                                        <th scope="col">ID do Livro</th>
                                        <th scope="col">ID do Usuário</th>
                                        <th scope="col">Data do Empréstimo</th>
                                        <th scope="col">Data de Devolução</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Nome do Livro</th>
                                        <th scope="col">Nome do Usuário</th>
                                        <th scope="col">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emprestimos.map((emprestimo) => (
                                        <tr key={emprestimo.id}>
                                            <td>{emprestimo.id}</td>
                                            <td>{emprestimo.idLivro}</td>
                                            <td>{emprestimo.idUsuario}</td>
                                            <td>{emprestimo.dataEmprestimo}</td>
                                            <td>{emprestimo.dataDevolucao}</td>
                                            <td>{emprestimo.isAtivo ? 'Ativo' : 'Inativo'}</td>
                                            <td>{emprestimo.NomeLivro}</td>
                                            <td>{emprestimo.NomeUsuario}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Nenhum empréstimo encontrado.</p>
                        )}
                    </div>
                </div>




            </div>


        </>
    );
}

export default Emprestimo;
