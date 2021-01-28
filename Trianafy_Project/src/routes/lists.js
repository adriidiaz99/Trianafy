import { Router } from 'express';
import { ListaReproduccionController } from '../controllers/ListaReproduccionController';

const router = Router();

    router.get('', ListaReproduccionController.allList);

    router.post('', ListaReproduccionController.nuevaLista);

    router.put('/:id', ListaReproduccionController.editarLista);

    router.get('/:id', ListaReproduccionController.seeDescription);

    router.delete('/:id', ListaReproduccionController.eliminarLista);


export default router;