import { useState } from "react";
import LivroService from "../services/livroService";
const livroService = new LivroService();

function FormFiltro({ onUpdate }) {
  const [filtroData, setFiltroData] = useState({
    nomeLivro: "",
    genero: "Todos",
  });

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFiltroData({ ...filtroData, [name]: value });
  };
  console.log(filtroData)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const livroFiltro = await livroService.filtrar(filtroData);
      onUpdate(livroFiltro);
    } catch (error) {}
  };
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className={`col-md-5 `}>
        <div className="input-group">

          <label className="input-group-text custom-label-height ">Nome do Livro: &nbsp;</label>
          <input
            type="text"
            name="nomeLivro"
            value={filtroData.nomeLivro}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>
      <div className={`col-md-5 `}>
        <div className="input-group">
        <label className="input-group-text">Gênero:</label>
          
            <select 
              name="genero"
              value={filtroData.genero}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="Todos">Todos</option>
              <option value="Ação">Ação</option>
              <option value="Comédia">Comédia</option>
              <option value="Drama">Drama</option>
              <option value="Ficcao">Ficção Científica</option>
              <option value="Terror">Terror</option>
            </select>
            
            
                
        </div>
        <div className="input-group movBootam">
                <div className="ms-auto ">
                  <button type="submit" className="btn btn-success">
                  <i class="bi bi-search"></i>
                  </button>
                </div>
        </div>
        
      </div>
            
          </div>
      
      </form>
    </div>
  );
}

export default FormFiltro;
