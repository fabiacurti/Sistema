const API_BASE_URL ='http://localhost:3001';

class LivroService{



    async getAllLivros(){
        try {
            const response = await fetch(`${API_BASE_URL}/cadlivro`)

            if(!response.ok){
                throw new Error('erro de busca')
            }
            const dados = await response.json();
            return dados;

        } catch (error) {
            console.error('erro de busca:',error);
            throw error;

        }
    }
    async createLivro(livroData){
        try {
            const response = await fetch(`${API_BASE_URL}/cadlivro`,{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(livroData)

            })

            if(!response.ok){
                throw new Error('erro ao cadastrar')
            }

        } catch (error){
            throw error;
        }
    }

    

    async updateLivro(id,livroData){
        try {
            const response = await fetch(`${API_BASE_URL}/cadlivro/${id}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(livroData)

            })

            if(!response.ok){
                throw new Error('erro ao atualizar')
            }

        } catch (error){
            throw error;
        }
    }


    async getLivrosById(id){
        try {
            const response = await fetch(`${API_BASE_URL}/cadlivro/${id}`)

            if(!response.ok){
                throw new Error('erro de busca')
            }
            const dados = await response.json();
            return dados;

        } catch (error) {
            console.error('erro de busca:',error);
            throw error;

        }
    }

    async deleteLivro(id){
        try {
            const response = await fetch(`${API_BASE_URL}/cadlivro/${id}`,{
                method:"delete"
            })

            if(!response.ok){
                throw new Error('erro de deletar')
            }


        } catch (error) {
            console.error('erro de deletar:',error);
            throw error;

        }

    }

    async filtrar(filtroData) {
        try {
            const response = await fetch(`${API_BASE_URL}/cadlivro/filtrar`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filtroData)
            });
    
            if (!response.ok) {
                throw new Error(`Erro ao filtrar autor! Status: ${response.status}, Mensagem: ${response.statusText}`);
            }
    
            return response.json();
        } catch (error) {
            throw error;
        }
    }
    

}
export default LivroService