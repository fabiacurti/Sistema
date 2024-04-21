import ReservaService from "../services/reservaService.js";
import './reservaConteudo.css'
/*import './reservaSuport.css'*/
import { useState } from 'react';
import InputMask from 'react-input-mask';


const reservaService = new  ReservaService()
function FormFiltro({ onUpdate }) {
    
    const [filtroData,setFiltroData]=useState({nomeLivro:""})

    const handleInputChange = async (event)=>{
        const {name,value} = event.target;
        setFiltroData({ ...filtroData, [name] : value })
    };
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const resevasFiltradas = await reservaService.filtrar(filtroData);
            console.log("Clicou em Filtrar");
            onUpdate(resevasFiltradas);

        } catch (error) {
            console.log("Erro ao filtrar aluno Professor:");
        }
    };

    return ( 
       <form onSubmit={handleSubmit}>
       
       <div className={`col-md-3`}>
                    <label htmlFor="nomeLivro" className="form-label">Nome do Livro:</label>
                    <InputMask type="text" mask="" className={`form-control rounded `} id="nomeLivro" name="nomeLivro" placeholder="Nome do aluno ou professor" value={filtroData.nomeLivro} onChange={handleInputChange} />
                    
                        <div className="invalid-feedback">
                        {'Por Favor, digite o Nome! Digite pelo menos 4 letras, apenas letras são permitidas.'}
                        </div>
            </div>
            <div className="Posicao col-md-4 ">
                        <label htmlFor="TipoPessoa" className="form-label">
                            Pessoa:
                        </label>
                        <select className="form-select" id="TipoPessoa" name="TipoPessoa" value={filtroData.TipoPessoa} onChange={handleInputChange} >
                            <option selected disabled value="">
                                Tipo de pessoa...
                            </option>
                            <option value="Todos">Todos</option>
                            <option value="Aluno">Aluno</option>
                            <option value="Professor">Professor</option>
                        </select>
                    </div>
            <button className="btn btn-success mov" id="cadastrar" type="submit"><i class="bi bi-search"></i>  </button>
       </form>
     );
}

export default FormFiltro;