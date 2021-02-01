import { Router } from 'express';
import { ListaReproduccionController } from '../controllers/ListaReproduccionController';
import { token } from '../services/passport';

const router = Router();

    router.post('/:id1/songs/:id2',token(), ListaReproduccionController.nuevaCancionALista);

    router.get('/:id/songs',token(), ListaReproduccionController.allSongsOfLista);

    router.get('/:id1/songs/:id2',token(), ListaReproduccionController.VerCancionPorIdLista);

    router.delete('/:id1/songs/:id2',token(), ListaReproduccionController.eliminarCancionDeLista);

export default router;