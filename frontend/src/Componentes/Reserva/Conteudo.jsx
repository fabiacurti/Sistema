import "./reservaConteudo.css";
/*import "./reservaSuport.css";*/
import TabelaReserva from "./tabelaReserva.jsx";
import React, { useEffect, useState } from "react";

function Conteudo() {
  const [validado, setValidado] = useState(false);
  const [alunoP, setAlunoPro] = useState([]);
  const [livros, setLivro] = useState([]);
  const [reservas, setReservas] = useState([])
  const [reserva, setReserva] = useState({
    id_Res: 0,
    id_AlunoProf: "",
    id_Livro: 0,
    Data_Reserva: "",
    Data_Devolucao: "",
    Status_Reserva: "Reservado",
  });

  useEffect(() => {
    fetch("http://localhost:3001/Aluno&Professor", { method: "GET" })
      .then((resposta) => {
        return resposta.json();
      })
      .then((data) => setAlunoPro(data))
      .catch((error) =>
        console.log("Erro ao encontrar aluno ou professor" + error)
      );

    fetch("http://localhost:3001/cadLivro", { method: "GET" })
      .then((resposta) => {
        return resposta.json();
      })
      .then((data) => setLivro(data))
      .catch((error) =>
        console.log("Erro ao encontrar aluno ou professor" + error)
      );
  }, []);

  async function atualizarResevar(){
    try{
       const resultado = await fetch('http://localhost:3001/reservas',{ method: "GET" })
       const data = await resultado.json()
       setReservas(data)
    }catch(error){

       console.error('Erro a consultar a reserva ' + error)
    }
       
   } 

  function gravarReserva() {
    fetch("http://localhost:3001/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_AlunoProf: reserva.id_AlunoProf,
        id_Livro: reserva.id_Livro,
        Data_Reserva: reserva.Data_Reserva,
        Data_Devolucao: reserva.Data_Devolucao,
        Status_Reserva: reserva.Status_Reserva,
      }),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        if (dados.status) {
          setReserva({ ...reserva, id_Res: dados.id_Res });
        }
        alert("Resevardo com sucesso!");
        atualizacaoReserva()
        atualizarResevar()
      })
      .catch((erro) => alert(erro.message));
  }


  function atualizacaoReserva(){
    fetch("http://localhost:3001/reservas", { method: "GET" })
      .then((resposta) => {
        return resposta.json();
      })
      .then((data) => setAlunoPro(data))
      .catch((error) =>
        console.log("Erro ao encontrar aluno ou professor" + error)
      );
  }


  function manipularMudanca(e) {
    const alvo = e.target.id;

    if (e.target.type === "checkbox") {
      //spread operator = operador de espalhamento
      setReserva({ ...reserva, [alvo]: e.target.checked });
    } else {
      //spread operator = operador de espalhamento
      setReserva({ ...reserva, [alvo]: e.target.value });
    }
  }
  const manipulaSubmissao = (event) => {
    const form = event.currentTarget;
      gravarReserva();
      
    if (form.checkValidity()) {

      setValidado(false);
      
    } else {
      setValidado(true);
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      <div className="ConteinerReserva">
        <div className="cabecalhosReserva">
          <h2 className="cor_fonte">Reserva de Livro</h2>
        </div>

        <div className="ConteudosReserva">
          <form
            id="formCadastroAlunoProfessor"
            method="POST"
            action="#"
            className="row g-3 needs-validation"
            validate={validado}
            onSubmit={manipulaSubmissao}
            noValidate
          >
            <div class="form-group col-md-4">
              <label for="inputState">Aluno ou Professor</label>
              <select
                id="id_AlunoProf"
                class="form-control"
                onChange={manipularMudanca}
              >
                <option selected disabled>
                  Escolha Aluno ou Professor:
                </option>
                {alunoP.map((alunops) => (
                  <option key={alunops.cpf} value={alunops.cpf}>
                    {alunops.Nome} - {alunops.TipoPessoa}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Lista de livros</label>
              <select
                id="id_Livro"
                class="form-control"
                onChange={manipularMudanca}
              >
                <option selected disabled>
                  Escolha o livro:
                </option>
                {livros.map((livro) => (
                  <option key={livro.id} value={livro.id}>
                    {livro.nomeLivro}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="Data_Reserva" className="form-label">
                Data do Início da Reserva
              </label>
              <input
                type="date"
                className="form-control"
                id="Data_Reserva"
                name="Data_Reserva"
                placeholder="DD/MM/YYYY"
                value={reserva.Data_Reserva}
                onChange={manipularMudanca}
                max={`${new Date().getFullYear() + 1}-${new Date()
                  .getMonth()
                  .toString()
                  .padStart(2, "0")}-${new Date()
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`}
                min={`${new Date().getFullYear() - 0}-${new Date()
                  .getMonth()
                  .toString()
                  .padStart(2, "0")}-${new Date()
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`}
                required
              />
            </div>
            <div class="form-group col-md-4">
              <label for="Data_Devolucao" className="form-label">
                Data da entrega
              </label>
              <input
                type="date"
                className="form-control"
                id="Data_Devolucao"
                name="Data_Devolucao"
                placeholder="DD/MM/YYYY"
                value={reserva.Data_Devolucao}
                onChange={manipularMudanca}
                max={`${new Date().getFullYear() + 1}-${new Date()
                  .getMonth()
                  .toString()
                  .padStart(2, "0")}-${new Date()
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`}
                min={`${new Date().getFullYear() - 0}-${new Date()
                  .getMonth()
                  .toString()
                  .padStart(2, "0")}-${new Date()
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`}
                required
              />
            </div>
            <div class="form-floating  mx-auto col-md-4">
              <select
                class="form-select"
                id="Status_Reserva"
                aria-label="Floating label select example"
               
                onChange={manipularMudanca}
              >
                <option selected disabled>
                  Escola estado
                </option>
                <option value="Reservado">Reservado</option>
              </select>
              <label for="Status_Reserva">Estado do Livro</label>
            </div>
            <div className="col-12 centralizar justify-content-evenly">
              <button
                className="btn btn-outline-success"
                type="submit"
                /*disabled={!isFormValid}*/
              >
                <i class="bi bi-calendar-check-fill"></i> Reservar{" "}
                {/*{isEditMode ? 'Atualizar' : 'Cadastrar'}*/}
              </button>
            </div>
          </form>
        </div>
        <TabelaReserva 
        atualizarResevar ={atualizarResevar} 
        setReservas = {setReservas}
        reservas = {reservas}
        ></TabelaReserva>

      </div>
    </>
  );
}
export default Conteudo;
