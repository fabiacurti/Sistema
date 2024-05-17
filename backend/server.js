
const express =require('express')
const cors = require('cors');
const app= express()
const port = 3001;



const ReservaController =require('./routes/reservaRoutes.js')
const alunoprofessorRoutes =require('./routes/AlunoProfessorRoutes.js')
const autorRoutes =require('./routes/autorRoutes')
const emprestimoRoutes =require('./routes/emprestimoRoutes')
const generosRoute =require("./routes/generosRoute");
const cadLivroRouters =require('./routes/cadLivroRouters.js')
const EditorasRoutes =require('./routes/EditorasRoutes')
const tipoLivroRoutes =require('./routes/tipoLivroRoutes')

app.use(express.json())
app.use(cors({origin:'http://localhost:3000',credentials:true}))



app.use('/reservas', ReservaController)
app.use('/Aluno&Professor',alunoprofessorRoutes)
app.use('/autor',autorRoutes)
app.use('/emprestimo',emprestimoRoutes)
app.use('/genero',generosRoute)
app.use('/cadLivro', cadLivroRouters)
app.use('/editoras',EditorasRoutes)
app.use('/tipoLivro',tipoLivroRoutes)



app.listen(port,()=>{
    console.log(`Rodando na porta ${port}\n`)
})


