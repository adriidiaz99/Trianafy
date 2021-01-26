import { Router } from 'express';
import { ListaReproduccionController } from '../controllers/ListaReproduccionController';

const router = Router();

    router.post('/:id1/songs/:id2', ListaReproduccionController.nuevaCancionALista);

    router.get('/:id/songs', ListaReproduccionController.allSongsOfLista);

    router.get('/:id1/songs/:id2', ListaReproduccionController.VerCancionPorIdLista);

    router.delete('/:id1/songs/:id2', ListaReproduccionController.eliminarCancionDeLista);

export default router;