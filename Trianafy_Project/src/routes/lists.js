import { Router } from 'express';
import { ListaReproduccionController } from '../controllers/ListaReproduccionController';
import { token } from '../services/passport';

const router = Router();

    router.get('', token(), ListaReproduccionController.allList);

    router.post('',token(),  ListaReproduccionController.nuevaLista);

    router.put('/:id',token(), ListaReproduccionController.editarLista);

    router.get('/:id',token(), ListaReproduccionController.seeDescription);

    router.delete('/:id',token(), ListaReproduccionController.eliminarLista);


export default router;