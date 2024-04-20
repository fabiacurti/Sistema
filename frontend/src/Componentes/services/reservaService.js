


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
                throw new Error('Erro ao filtrar Aluno ou Professor')
            }
            return response.json()
        } catch (error) {
            throw error;
        }
    }
}
export default ReservaService;