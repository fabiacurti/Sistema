import React, { useEffect, useState } from 'react';
import AutorService from '../services/autorService.js';

const autorService = new AutorService()


function FormAutor({ selectedAutor, onUpdate, setSelectedAutor }) {

    const formatDate = (date) => {
        return `${new Date(date).getFullYear()}-${(new Date(date).getMonth())
            .toString()
            .padStart(2, "0")}-${new Date(date)
                .getDate()
                .toString()
                .padStart(2, "0")}`;
    };

    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (selectedAutor != null) {
            setAutorData({
                ...selectedAutor,
                dNascimento: formatDate(selectedAutor.dNascimento)
            });
            setIsEditMode(true);
        } else {
            setIsEditMode(false);
        }
    }, [selectedAutor]);



    const [alerta, setAlerta] = useState('')
    const [autorData, setAutorData] = useState({
        Nome: "",
        sobrenome: "",
        dNascimento: "",
        cidadeNascimento: "",
        genero: "",
        email: "",
        qntObras: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setAutorData({ ...autorData, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (selectedAutor == null) {
                await autorService.createAutor(autorData);
                setAlerta("Autor cadastrado com sucesso!");
                setNome('');
                setSobrenome('');
                setDNascimento('');
                setCidadeNascimento('');
                setGenero('');
                setemail('');
                setQntObras('');
            } else {
                await autorService.updateAutor(selectedAutor.ID, autorData);
                setAlerta("Autor atualizado com sucesso!");
                setIsEditMode(false);

                onUpdate();
                setAutorData({
                    Nome: "",
                    sobrenome: "",
                    dNascimento: "",
                    cidadeNascimento: "",
                    genero: "",
                    email: "",
                    qntObras: ""
                });

            }

        } catch (error) {
            setAlerta("Autor não foi cadastrado !");
        } finally {
            setTimeout(() => {
                setAlerta('');
            }, 2500);
        }
    };


    const [Nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dNascimento, setDNascimento] = useState('');
    const [cidadeNascimento, setCidadeNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setemail] = useState('');
    const [qntObras, setQntObras] = useState('');
    const isFormValid =
        (Nome.length >= 3 &&
            sobrenome.length >= 3 &&
            dNascimento != null &&
            cidadeNascimento.length >= 3 &&
            genero.length !== 0 &&
            email.length >= 7 && email.length <= 1100 &&
            qntObras.length > 0) || isEditMode

    const receberSoLetra = (valor) => {
        const regexSomenteLetras = /^[a-zA-Z\sáÁéÉíÍóÓúÚàÀèÈìÌòÒùÙãÃõÕâÂêÊîÎôÔûÛäÄëËïÏöÖüÜçÇ]*$/;
        return regexSomenteLetras.test(valor) || valor === ""
    }

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
                                Nome:
                            </label>
                            <input
                                value={Nome || autorData.Nome}
                                type="text"
                                className={`form-control`}
                                name="Nome"
                                placeholder="Digite o Nome"
                                onChange={(e) => {
                                    setNome(prev => receberSoLetra(e.target.value) ? e.target.value : prev);
                                    handleInputChange(e);
                                }}
                                required
                            />
                            <div className="invalid-feedback">
                                Por Favor, digite o Nome!
                            </div>
                        </div>

                        <div className={`form-group col-md-5`}>
                            <label>
                                Sobrenome:
                            </label>
                            <input
                                value={sobrenome || autorData.sobrenome}
                                type="text"
                                className={`form-control`}
                                name="sobrenome"
                                placeholder="Digite o sobrenome"
                                onChange={(e) => {
                                    setSobrenome(prev => receberSoLetra(e.target.value) ? e.target.value : prev);
                                    handleInputChange(e);
                                }}
                                required
                            />
                            <div className="invalid-feedback">
                                Por Favor, digite o sobrenome!
                            </div>
                        </div>

                        <div className={`form-group col-md-5`}>
                            <label>
                                Data de Nascimento:
                            </label>
                            <input
                                value={autorData.dNascimento}
                                type="date"
                                className={`form-control`}
                                name="dNascimento"
                                onChange={(e) => {
                                    setDNascimento(e.target.value);
                                    handleInputChange(e);
                                }}
                                max={`${new Date().getFullYear() - 10}-${new Date().getMonth().toString().padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`}
                                required

                            />
                            <div className="invalid-feedback">
                                Por favor, informe a data de nascimento!
                            </div>
                        </div>

                        <div className={`form-group col-md-5`}>
                            <label>
                                Cidade de nascimento:
                            </label>
                            <input
                                value={cidadeNascimento || autorData.cidadeNascimento}
                                type="text"
                                className={`form-control`}
                                name="cidadeNascimento"
                                placeholder="Digite a cidade"
                                onChange={(e) => {
                                    setCidadeNascimento(prev => receberSoLetra(e.target.value) ? e.target.value : prev);
                                    handleInputChange(e);
                                }}
                                required
                            />
                            <div className="invalid-feedback">
                                Por favor, informe a cidade!
                            </div>
                        </div>

                        <div className={`form-group col-md-5`}>
                            <label>
                                Gênero:
                            </label>
                            <select
                                value={autorData.genero}
                                className={`form-select`}
                                name="genero"

                                onChange={(e) => {
                                    setGenero(e.target.value);
                                    handleInputChange(e);
                                }}
                                required
                            >
                                <option selected disabled value="">
                                    Selecione o Gênero...
                                </option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>

                        <div className={`form-group col-md-5`}>
                            <label>
                                Email:
                            </label>
                            <input
                                value={autorData.email}
                                type="email"
                                className={`form-control`}
                                name="email"
                                placeholder="name@example.com"
                                onChange={(e) => {
                                    setemail(e.target.value);
                                    handleInputChange(e);
                                }}
                                required
                            />
                            <div className="invalid-feedback">
                                Por favor, informe um email válido!
                            </div>
                        </div>

                        <div className={`form-group col-md-3`}>
                            <label>
                                Obras Publicadas:
                            </label>
                            <input
                                value={qntObras || autorData.qntObras}
                                type="text"
                                className={`form-control`}
                                name="qntObras"
                                placeholder="Número de obras publicadas"
                                onChange={(e) => {
                                    setQntObras(prev => relebeSoNumero(e.target.value) ? e.target.value : prev);
                                    handleInputChange(e);
                                }}
                                required
                            />
                            <div className="invalid-feedback">
                                Por favor, informe o número de obras publicadas!
                            </div>
                        </div>

                        <div className="col-12 centralizar justify-content-evenly">
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                disabled={!isFormValid}
                            >
                                <i class="bi bi-pencil-square"></i>
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

export default FormAutor;
