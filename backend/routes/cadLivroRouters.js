const express =require('express');
const CadLivroController = require('../controller/cadLivroController.js')
const router =express.Router();
const cadLivroController = new CadLivroController();

router.get('/', cadLivroController.getALL)
router.get('/:cod', cadLivroController.getById)
router.delete('/:cod', cadLivroController.delete)
router.post('/', cadLivroController.create);
router.put('/:cod', cadLivroController.update);
router.post('/filtrar',cadLivroController.filtrar)

module.exports= router;