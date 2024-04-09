import React, { useState, useEffect } from 'react';
import FormReserva from './FormReserva.jsx';
import ReservaService from '../services/reservaService.js';

const reservaLivro = new ReservaService();

function TabelaReserva({ atualizar }) {
    const [reservas, setReservas] = useState([]);

    const carregarReservas = async () => {
        try {
            const dados = await reservaLivro.getAll();
            setReservas(dados);
        } catch (error) {
            console.error("Erro ao carregar as reservas: ", error);
        }
    };

    useEffect(() => {
        carregarReservas();
    }, [atualizar]);

    const handleUpdate = async () => {
        await carregarReservas();
    };

    return (
        <>
            <FormReserva onUpdate={handleUpdate} />
            <div className='conteudo-extra'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">ID Livro</th>
                            <th scope="col">ID Usuario</th>
                            <th scope="col">Data Emprestimo</th>
                            <th scope="col">Data Devolução</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map(reserva => (
                            <tr key={reserva.ID}>
                                <th scope="row">{reserva.ID}</th>
                                <td>{reserva.IDLivro}</td>
                                <td>{reserva.IDUsuario}</td>
                                <td>{reserva.dEmprestimo}</td>
                                <td>{reserva.dDevolucao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TabelaReserva;
