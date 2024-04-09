const API_BASE_URL = 'http://localhost:3001'

class ReservaService {
    async getAll() {
        try {
            const response = await fetch(`${API_BASE_URL}/reserva/`)
            if (!response.ok) {
                throw new Error('Erro ao buscar os livros reservados')
            }
            const dados = await response.json()
            return dados


        } catch (error) {
            console.error('Erro ao buscar os livros reservados: ', error);
            throw error;
        }


    }

    async reservarLivro(ID,reservaData){
        try {
            const response = await fetch(`${API_BASE_URL}/reserva/${ID}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(reservaData)

            })

            if(!response.ok){
                throw new Error('erro ao tentar reservar o livro')
            }

        } catch (error){
            throw error;
        }
    }

}
export default ReservaService;