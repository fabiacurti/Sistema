


class ReservaService{

    async filtrar(filtroData){
        try {
            const response = await fetch(`http://localhost:3001/reservas/filtrar`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },

                body:JSON.stringify(filtroData)
            });
            if(!response.ok){
                throw new Error('Erro ao filtrar Livros reservados')
            }
            return response.json()
        } catch (error) {
            throw error;
        }
    }

    async deleteReserva(id_Reserva) {
        try {
            const response = await fetch(`http://localhost:3001/reservas/${id_Reserva}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error('Erro ao cancelar reserva');
            }
            return true; 
        } catch (error) {
            throw error;
        }
    }

    async getReservas() {
        try {
            const response = await fetch(`http://localhost:3001/reservas`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error('Erro ao obter reservas');
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }
}
export default ReservaService;