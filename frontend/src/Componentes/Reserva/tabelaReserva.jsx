import "./reservaConteudo.css";
/*import "./reservaSuport.css";*/
import FormFiltro from './FormFiltro.jsx'
import React, { useEffect} from "react"; //useState


function TabelaReserva({atualizarResevar, setReservas, reservas}){
   

    

    useEffect(()=>{
        atualizarResevar()
        /*fetch('http://localhost:3001/reservas',{ method: "GET" })
        .then((resposta)=>{
            return resposta.json()
        }).then(data=>setReserva(data)).catch(error=>console.log('Erro ao encontrar as reservas' + error))*/
    },[]);

    /*async function atualizarResevar(){
     try{
        const resultado = await fetch('http://localhost:3001/reservas',{ method: "GET" })
        const data = await resultado.json()
        setReserva(data)
     }catch(error){

        console.error('Erro a consultar a reserva ' + error)
     }
        
    } */

    const handleUpdateFiltro = async (resevasFiltradas) => {
        setReservas(resevasFiltradas)
        console.log(resevasFiltradas)
    };

    const handleDelete = async (id_Res) => {
        try {
            const response = await fetch(`http://localhost:3001/reservas/${id_Res}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                // Remover a reserva excluída da lista
                setReservas(reservas.filter(item => item.id_Res !== id_Res));
                alert("Reserva cancelada com sucesso!");
            } else {
                alert("Erro ao cancelar a reserva.");
            }
        } catch (error) {
            console.error("Erro ao cancelar a reserva:", error);
            alert("Erro ao cancelar a reserva. Verifique o console para mais detalhes.");
        }
    };

    return(
        <div className="janela">
        <FormFiltro onUpdate={handleUpdateFiltro}></FormFiltro>
        <div className="tabela">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome do Livro</th>
                        <th scope="col">Data da reserva</th>
                        <th scope="col">Data da entrega</th>
                        <th scope="col">Tipo de Cargo</th>
                        <th scope="col">estado do Livro</th>
                       
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                    <tbody>
                        {reservas.map((reserv) => (
                            <tr key={reserv.id_Res} >
                                <th scope="row">{reserv.Nome}</th>
                                <td>{reserv.nomeLivro}</td>
                                <td>
                                {`${new Date(reserv.Data_Reserva).getDate().toString().padStart(2, "0")}/${(new Date(reserv.Data_Reserva).getMonth() +1).toString().padStart(2, "0")}/${new Date(reserv.Data_Reserva).getFullYear()}`}
                                </td>
                                <td>
                                {`${new Date(reserv.Data_Devolução).getDate().toString().padStart(2, "0")}/${(new Date(reserv.Data_Devolução).getMonth() +1).toString().padStart(2, "0")}/${new Date(reserv.Data_Devolução).getFullYear()}`}
                                </td>
                                <td>{reserv.TipoPessoa}</td>
                                <td>{reserv.Status_Reserva}</td>
                                <td>
                                    <button
                                        className="btn btn-danger "
                                        id="excluir"
                                        type="button"
                                        onClick={() => handleDelete(reserv.id_Res)}    >
                                        <i className="bi bi-trash3"></i> Cancelar Reserva
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>            
)
} export default TabelaReserva;