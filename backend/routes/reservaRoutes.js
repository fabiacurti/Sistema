const ReservaController =require('../controller/reservaController.js')

 const reservaController = new ReservaController()
 const express =require('express')
 const router =express.Router();

 router.get('/', reservaController.getAllByIDProf);
 router.delete('/:id', reservaController.delete);
 router.post('/',reservaController.create);
 router.put('/:cpf', reservaController.update);
 router.post('/filtrar',reservaController.filtrar)
 
 module.exports=router;