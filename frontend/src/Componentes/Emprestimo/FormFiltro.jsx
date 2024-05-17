import { useState } from "react";
import EmprestimoService from "../services/emprestimoService";
import './Emprestimo.css';

const emprestimoService = new EmprestimoService();

function FormFiltro({ onUpdate }) {
    const [filtroData, setFiltroData] = useState({ID_Livro: '' });

    const handleInputChange = async (event) => {
        const { name, value } = event.target;
        setFiltroData({ ...filtroData, [name]: value });
    };

    const handleSubmit = async (event) => {
        console.log(event)
        event.preventDefault();
        try {
            const emprestimosFiltrados = await emprestimoService.filtrar(filtroData);
            onUpdate(emprestimosFiltrados);
            console.log(emprestimosFiltrados)
        } catch (error) {
            console.log("Erro ao filtrar emprestimos:");
        }
    };
    return (
        <div className="row">
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="text-center">
                </div>
                <div className="d-flex flex-wrap input-group mb-2">
                    <div className="mb-3">
                        <div className="input-group">
                            <label className="input-group-text custom-label-height">ID Livro:</label>
                            <input
                                type="text"
                                name="ID_Livro"
                                id="inputNome"
                                value={filtroData.ID_Livro}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="ms-auto">
                        <button type="submit" className="btn btn-success" ><i class="bi bi-search"></i>{"  "}
                            
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default FormFiltro;
