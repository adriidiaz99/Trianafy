import { Router } from 'express';
import { body } from 'express-validator';
import { CancionController } from '../controllers/CancionController';
import { validar } from '../middleware/Validacion';


const router = Router();

    router.get('/', CancionController.allSongs);

    router.post('/',
        body('title').isLength({max : 30}).withMessage("El título debe contener como máximo 30 caracteres"),
        body('year').isInt({min : 1700}).withMessage("El año debe de ser un número entero y mayor de 1700"),
        validar,
        CancionController.nuevaCancion);

    router.get('/:id', CancionController.cancionPorId);

    router.put('/:id',
        body('title').isLength({max : 30}).withMessage("El título debe contener como máximo 30 caracteres"),
        body('year').isInt({min : 1700}).withMessage("El año debe de ser un número entero y mayor de 1700"),
        validar,
        CancionController.editarCancion);

    router.delete('/:id',
        validar,
        CancionController.eliminarCancion);

   

export default router;