import React, { useEffect, useState } from 'react';
import EmprestimoService from '../services/emprestimoService.js';
import InputMask from "react-input-mask";

const emprestimoService = new EmprestimoService()


function FormEmprestimo({ selectedEmprestimo, onUpdate, setSelectedEmprestimo }) {

    const formatDate = (date) => {
        return `${new Date(date).getFullYear()}-${(new Date(date).getMonth()+1).toString().padStart(2, "0")}-${new Date(date).getDate().toString().padStart(2, "0")}`;
    };

    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (selectedEmprestimo != null) {
            setEmprestimoData({
                ...selectedEmprestimo,
                dEmprestimo: formatDate(selectedEmprestimo.dEmprestimo),
                dDevolucao: formatDate(selectedEmprestimo.dDevolucao)
            });
            setIsEditMode(true);
        } else {
            setIsEditMode(false);
        }
    }, [selectedEmprestimo]);



    const [alerta, setAlerta] = useState('')
    const [emprestimoData, setEmprestimoData] = useState({
        ID_Livro: "",
        ID_AlunoProf: "",
        dEmprestimo: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`,
        dDevolucao: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setEmprestimoData({ ...emprestimoData, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (selectedEmprestimo == null) {
                await emprestimoService.createEmprestimo(emprestimoData);
                setAlerta("Emprestimo cadastrado com sucesso!");
                setID_Livro('');
                setID_AlunoProf('');
                setdEmprestimo('');
                setdDevolucao('');
            } else {
                await emprestimoService.updateEmprestimo(selectedEmprestimo.ID, emprestimoData);
                setAlerta("Emprestimo atualizado com sucesso!");
                setIsEditMode(false);

                onUpdate();
                setEmprestimoData({
                    ID_Livro: "",
                    ID_AlunoProf: "",
                    dEmprestimo: "",
                    dDevolucao: "",
                });

            }

        } catch (error) {
            setAlerta("Emprestimo não foi cadastrado !");
        } finally {
            setTimeout(() => {
                setAlerta('');
            }, 2500);
        }
    };


    const [ID_Livro, setID_Livro] = useState('');
    const [ID_AlunoProf, setID_AlunoProf] = useState('');
    const [dEmprestimo, setdEmprestimo] = useState('');
    const [dDevolucao, setdDevolucao] = useState('');
    const isFormValid =
        ((ID_Livro.length != null &&
            ID_AlunoProf.length >= 3 &&
            dEmprestimo != null &&
            dDevolucao != null) || isEditMode)

    const relebeSoNumero = (valor) => {
        const regexSomenteNumero = /^[0-9]+$/;
        return regexSomenteNumero.test(valor) || valor === ""
    }

    return (
        <>

            <div className='conterner'>
                <div className="formulario fundo">
                    <form
                        className="row g-3 needs-validation"
                        onSubmit={handleSubmit}
                    >
                        <div className={`form-group col-md-5`}>
                            <label>
                                ID do Livro:
                            </label>
                            <input
                                value={ID_Livro}
                                type="text"
                                className={`form-control`}
                                name="ID_Livro"
                                placeholder="Digite o ID do livro"
                                onChange={(e) => {
                                    setID_Livro(prev => relebeSoNumero(e.target.value) ? e.target.value : prev);
                                    handleInputChange(e);
                                }}
                                required
                            />
                            <div className="invalid-feedback">
                                Por Favor, digite o ID!
                            </div>
                        </div>
                        <div className={`form-group col-md-5`}>
                            <label>
                                ID do Usuario:
                            </label>
                            <InputMask
                                mask="999.999.999-99"
                                type="text"
                                maskPlaceholder={null}
                                className={`form-control`}
                                id="ID_AlunoProf"
                                name="ID_AlunoProf"
                                value={ID_AlunoProf}
                                onChange={(e) => {
                                    setID_AlunoProf(e.target.value);
                                    handleInputChange(e);
                                }}
                                placeholder="Digite o ID do livro"
                                required
                            
                            />
                            <div className="invalid-feedback">
                                Por Favor, digite o ID!
                            </div>
                        </div>

                        <div className={`form-group col-md-5`}>
                            <label>
                                Data do Devolucao:
                            </label>
                            <input
                                value={emprestimoData.dDevolucao}
                                type="date"
                                className={`form-control`}
                                name="dDevolucao"
                                onChange={(e) => {
                                    setdDevolucao(e.target.value);
                                    handleInputChange(e);
                                }}
                                min={`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, "0")}-${(new Date().getDate() + 1).toString().padStart(2, "0")}`}
                                required

                            />
                            <div className="invalid-feedback">
                                Por favor, informe a data da devolução!
                            </div>
                        </div>

                        <div className="col-12 centralizar justify-content-evenly">
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                disabled={!isFormValid}
                            >
                                {isEditMode ? 'Atualizar' : 'Cadastrar'}
                            </button>
                        </div>

                        {alerta && (

                            <div className="text-center mt-3">


                                <p className='bg-success p-2 rounded d-inline'>{alerta}</p>
                            </div>
                        )}
                    </form>

                </div>


            </div>
        </>
    );
}

export default FormEmprestimo;
