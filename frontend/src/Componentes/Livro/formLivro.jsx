import React, { useEffect, useState } from "react";
import LivroService from "../services/livroService";
import GeneroService from '../services/GeneroService';
import EditoraService from '../services/EditoraService.js';

const livroService = new LivroService();
const editoraService = new EditoraService();

function FormLivro({ selectedLivro, onUpdate }) {
  const [generos, setGeneros] = useState([{
    codigo: 0,
    descricao: " Nenhum genero encontrado"
  }])
  const [editoras, setEditora] = useState([{
    codigo: 0,
    Nome: " Nenhuma editora encontrada"
  }]);
  const [livroData, setLivroData] = useState({
    nomeLivro: "",
    cod: "",
    numeroPagina: "",
    editora: "",
    genero: "",
    dataPublicacao: "",
  });


  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const response = await fetch('http://localhost:3001/genero');
        const data = await response.json();
        setGeneros(data);
      } catch (error) {
        console.error('Erro ao obter gêneros:', error);
      }
    };

    fetchGeneros();
  }, []);
  const carregaEditoras = async () => {
    try {
      const dados = await editoraService.getAllEditora();
      setEditora(dados)
    } catch (error) {
      console.error('erro ao carregar livros', error)
    }
  }
  useEffect(() => {
    carregaEditoras()

  }, []);



  useEffect(() => {
    if (selectedLivro != null) {
      setLivroData(selectedLivro);
    }
  }, [selectedLivro])
    ;

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLivroData({ ...livroData, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};


    if (livroData.nomeLivro.trim().length < 3) {
      newErrors.nomeLivro = 'O Nome do Livro deve ter no mínimo 3 caracteres';
      valid = false;
    }


    if (!/^\d+$/.test(livroData.numeroPagina)) {
      newErrors.numeroPagina = 'Número de Páginas deve conter apenas números';
      valid = false;
    }



    if (!livroData.genero) {
      newErrors.genero = 'Selecione o Gênero';
      valid = false;
    }


    if (!livroData.dataPublicacao) {
      newErrors.dataPublicacao = 'Data de Publicação é obrigatória';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        if (selectedLivro == null) {
          await livroService.createLivro(livroData);
          alert("Livro cadastrado");
        } else {
          await livroService.updateLivro(selectedLivro.id, livroData);
          alert("Atualizado");
        }
        onUpdate();
        setLivroData({
          nomeLivro: "",
          cod: "",
          numeroPagina: "",
          editora: "",
          genero: "",
          dataPublicacao: "",
        });
      } catch (error) {
        alert("Não cadastrado");
      }
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <div>
      <div className="ConteinerLivro">
        
          
           
              <div className="cabecalhosLivro" style={{ color: "#ddd" }}>
                Cadastro de Livros
              </div>
            
          
        
      </div>
      <div className="formulario fundo">
        <form onSubmit={handleSubmit} className="row g-3 needs-validation">

          <div className="form-group col-md-5">
            <label>Código do Livro:</label>
            <input
              type="text"
              name="cod"
              className="form-control"
              value={livroData.cod}
              onChange={handleInputChange}
            />
            {errors.cod && <p style={{ color: "red" }}>{errors.cod}</p>}
          </div>

          <div className="form-group col-md-5">
            <label>Nome do Livro:</label>
            <input
              type="text"
              name="nomeLivro"
              className="form-control"
              value={livroData.nomeLivro}
              onChange={handleInputChange}
            />
            {errors.nomeLivro && <p style={{ color: "red" }}>{errors.nomeLivro}</p>}
          </div>


          <div className="form-group col-md-5">
            <label>Número de Páginas:</label>
            <input
              type="text"
              name="numeroPagina"
              className="form-control"
              value={livroData.numeroPagina}
              onChange={handleInputChange}
            />
            {errors.numeroPagina && <p style={{ color: "red" }}>{errors.numeroPagina}</p>}
          </div>

          <div className="form-group col-md-5">
            <label>Editora:</label>
            <select
              id="editora"
              name="editora"
              className="form-select"
              value={livroData.editora}
              onChange={handleInputChange}
            >
              <option value="">Selecione uma Editora</option>
              {editoras.map(editora => (
                <option key={editora.codigo} value={editora.codigo}>{editora.Nome}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-5">
            <label>Gênero:</label>
            <select
              id="genero"
              name="genero"
              className="form-select"
              value={livroData.generos}
              onChange={handleInputChange}
            >
              <option value="">Selecione um Genero</option>
              {generos.map(genero => (
                <option key={genero.codigo} value={genero.descricao}>{genero.descricao}</option>
              ))}
            </select>
            {errors.genero && <p style={{ color: "red" }}>{errors.genero}</p>}
          </div>

          <div className="form-group col-md-5">
            <label>Data de Publicação:</label>
            <input
              type="date"
              name="dataPublicacao"
              className="form-control"
              value={livroData.dataPublicacao}
              onChange={handleInputChange}
              max={`${new Date().getFullYear()}-${new Date().getMonth().toString().padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`}
            />
            {errors.dataPublicacao && <p style={{ color: "red" }}>{errors.dataPublicacao}</p>}
          </div>

          <div className="form-group col-md-12">
            <div class="row justify-content-center">
              <div class="col-auto">
                <button type="submit" className="btn btn-outline-success">
                Cadastrar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLivro;
