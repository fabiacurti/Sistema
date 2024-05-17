import React, { useEffect, useState } from 'react';
import Cabecalho_Editoras from './Cabecalho_Editoras.jsx';
import InputMask from 'react-input-mask';
import './Editoras.css';
import EditoraService from '../services/EditoraService.js';
import FormFiltro from './FormFiltro.jsx';



const editoraService = new EditoraService();




function Editoras() {
  const [cnpjValido, setcnpjValido] = useState(true);
  const [FundacaoValida] = useState(true);
  const [emailValido] = useState(true);
  const [NomeValido] = useState(true);
  const [editora, setEditora] = useState([]);
  const [selectedEditora,setSelectedEditora]=useState(null)
  const [editoraData,setEditoraData] =useState({Nome:"",fundacao:"",cnpj:"",contato:"",email:""})

  
  const handleUpdateFiltro = async (editorasFiltradas) => {
    setEditora(editorasFiltradas)
};



const handleDelete = async (id) => {
  const confirmDelete = window.confirm('Tem certeza que deseja excluir esta editora?');

  if (confirmDelete) {
    await editoraService.deleteEditora(id);
    await carregaEditoras();
  }
};


  useEffect(()=>{
  if(selectedEditora!=null){
    setEditoraData(selectedEditora)
  } } , [selectedEditora])

  const carregaEditoras= async ()=>{
    try {
      const dados= await editoraService.getAllEditora();
      setEditora(dados)
    } catch (error) {
      console.error('erro ao carregar livros', error)
    }
  }
  useEffect(()=>{
      carregaEditoras()
      
    },[]);

    const handleEdit = async(Editoras)=>{
      console.log('o')
      setSelectedEditora(Editoras)
    };


  const calcularDigitoVerificador = (cnpj) => {
    const multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const calcularDigito = (cnpj, multiplicadores) => {
      let soma = 0;
      for (let i = 0; i < multiplicadores.length; i++) {
        soma += parseInt(cnpj[i]) * multiplicadores[i];
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const digito1 = calcularDigito(cnpj, multiplicadores1);
    const digito2 = calcularDigito(cnpj + digito1, multiplicadores2);

    return `${digito1}${digito2}`;
  };

  const handlecnpjChange = (event) => {
    const cnpjValue = event.target.value.replace(/\D/g, '');

    if (cnpjValue.length === 14) {
      const digitoVerificador = calcularDigitoVerificador(cnpjValue.substr(0, 12));
      const iscnpjValid = cnpjValue.substr(12, 2) === digitoVerificador;
      setcnpjValido(iscnpjValid);
      event.target.setCustomValidity(iscnpjValid ? '' : 'Por favor, digite um cnpj válido!');
    } else {
      setcnpjValido(false);
      event.target.setCustomValidity('Por favor, digite um cnpj válido!');
    }
  };


//=======================


  const handleInputChange =(event)=>{
    const {name,value}=event.target;
    setEditoraData({...editoraData,[name]:value})
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
  try {
    if(selectedEditora==null){
      await editoraService.creatEditora(editoraData)
      alert('Editora cadastrada com sucesso')
    }else{
      await editoraService.updateEditora(selectedEditora.id,editoraData);
      console.log('i')
      alert ('Editora atualizada com sucesso')

    } 
    handleUpdate()
    setEditoraData({Nome:"",fundacao:"",cnpj:"",contato:"",email:""})

    
  }  catch (error) {
    alert('Editora não foi cadastrada')
  }
  }




const handleUpdate = async ()=> {
  await carregaEditoras()
}


  return (
    <>
      <Cabecalho_Editoras/>
      <div className='conterner'>
        <div className="formulario fundo">
          <form id="formCadastroEditora" className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
          
          <div className="form-group col-md-5">
        <label htmlFor="Nome" className="form-label">
          Nome da Editora:
        </label>
        <input
          type="text"
          className={`form-control rounded ${NomeValido ? '' : 'is-invalid'}`}
          id="Nome"
          name="Nome"
          value={editoraData.Nome}
          placeholder="Digite o Nome da Editora"
          minLength="5"
          required
          onChange={handleInputChange}
          
        />
        <div className="invalid-feedback">
          O Nome da Editora deve ter pelo menos 1 caractere.
        </div>
      </div>
            
        <div className="form-group col-md-5">
        <label htmlFor="fundacao" className="form-label">Data de Fundação:</label>
        <input
          type="date"
          className={`form-control ${FundacaoValida ? '' : 'is-invalid'}`}
          id="fundacao"
          name="fundacao"
          value={editoraData.fundacao}
          max={`${new Date().getFullYear() - 10}-${new Date().getMonth().toString().padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`}
          required
          
          onChange={handleInputChange}
          maxLength="18"
        />
        <div className="invalid-feedback">
          A Data de Fundação não pode ser no futuro.
        </div>
      </div>
            
            
      <div className="form-group col-md-5">
        <label htmlFor="cnpj" className="form-label">
          cnpj:
        </label>
        <InputMask
          mask="99.999.999/9999-99"
          maskChar=""
          className={`form-control ${cnpjValido ? '' : 'is-invalid'}`}
          id="cnpj"
          name="cnpj"
          value={editoraData.cnpj}
          placeholder="Digite o cnpj"
          onBlur={handlecnpjChange}
          maxLength="18"
          required
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">Por favor, digite um CNPJ válido!</div>
      </div>
            
            
            <div className="form-group col-md-5">
              <label htmlFor="contato" className="form-label">Contato:</label>
              <input
                type="text"
                className="form-control"
                id="contato"
                name="contato"
                value={editoraData.contato}
                placeholder="Digite o contato"
                
                onChange={handleInputChange}
                maxLength="15"
                required
              />
              <div className="invalid-feedback">
                Por favor, digite um número de contato válido!
              </div>
            </div>
            
            <div className="form-group col-md-5">
              <label htmlFor="email" className="form-label">E-mail:</label>
              <input
                type="email"
                className={`form-control ${emailValido ? '' : 'is-invalid'}`}
                id="email"
                name="email"
                value={editoraData.email}
                placeholder="name@example.com"
                required
                
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">
                Por favor, digite um e-mail válido!
              </div>
            </div>
            
            <div className="col-12 centralizar justify-content-evenly">
          <button
            className="btn btn-outline-success"
            type="submit"
            
          >
            Cadastrar
          </button>
          
        </div>
      </form>

          <div style={{ margin: '20px' }}></div>
          <div id="mensagem"></div>

          

        </div>

        
        

        
        <div className="conteudo-extra">
        
          <FormFiltro onUpdate={handleUpdateFiltro}></FormFiltro>
      
          <div className="tabelaEditoras"> 
            

            <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Fundação</th>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Contato</th>
                            <th scope="col">E-mail</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { editora.map((Edit)=>(
                            <tr>
                                <th>{Edit.id}</th>
                                <td>{Edit.Nome}</td>
                                <td>{Edit.fundacao}</td>
                                <td>{Edit.cnpj}</td>
                                <td>{Edit.contato}</td>
                                <td>{Edit.email}</td>
                                <td>
                                    <button
                                                type="button"
                                                class="btn btn-primary"
                                                id="atualizar"
                                                onClick={() => handleEdit(Edit)}
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                    <button
                                                className="btn btn-danger "
                                                id="excluir"
                                                type="button"
                                                onClick={() => handleDelete(Edit.id)}
                                            >  
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </td>
                            </tr>
                            
                            ))}
                          
                            


                        </tbody>
                    </table>
             
                    
                
          </div>
        </div>
      </div>

    </>
  );
}

export default Editoras;