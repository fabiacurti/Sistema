import EditoraService from '../services/EditoraService.js';
import { useState } from 'react';


const editoraService = new EditoraService();

function FormFiltro({ onUpdate }) {
    const [filtroData,setFiltroData]=useState({Nome:""})

    const handleInputChange = async (event)=>{
        const {name,value} = event.target;
        setFiltroData({ ...filtroData, [name] : value })
    };
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const editorasFiltradas = await editoraService.filtrar(filtroData);
            console.log("Clicou em Filtrar");
            onUpdate(editorasFiltradas);

        } catch (error) {
            console.log("Erro ao filtrar editora:");
        }
    };


    return ( 

        <form onSubmit={handleSubmit}>
        <div className='criarEspaco'>  
            <div className="form-group col-md-5">
                <div className="input-group">
                    <label htmlFor="Nome" className="input-group-text custom-label-height">Filtrar por Nome:</label>
                    <input type="text" className="form-control" id="Nome" name="Nome" value={filtroData.Nome} onChange={handleInputChange} placeholder="Digite o Nome" />
                </div>
                <div className="input-group movBootamEdit">
                    <button className="btn btn-success" id="btnFiltrar" type="submit"><i class="bi bi-search"></i></button>
                </div>
                
            </div>
        </div>    

        </form>
     );
}

export default FormFiltro;