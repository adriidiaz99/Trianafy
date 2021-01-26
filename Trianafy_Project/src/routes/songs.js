import { Router } from 'express';
import { CancionController } from '../controllers/CancionController';


const router = Router();

    router.get('/', CancionController.allSongs);

    router.post('/', CancionController.nuevaCancion);

    /*router.get('/songs/{id}', CancionController.);*/

    router.put('/:id', CancionController.editarCancion);

    router.delete('/:id', CancionController.eliminarCancion);

   

export default router;