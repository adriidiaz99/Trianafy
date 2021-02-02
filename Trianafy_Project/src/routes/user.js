import { Router } from 'express';
import { usuarioRepository } from '../repository/UserRepository';
import { UserController} from '../controllers/UsuarioController';
import { param, body } from 'express-validator';
import { validar } from '../middleware/validacion';
import { token } from '../services/passport';

const router = Router();

router.get('/',token(), UserController.todosLosUsuarios)

// router.get('/me', UserController.me);

router.get('/:id',token(), [
        param('id').isInt().withMessage('ID debe ser un número entero')
    ],
    validar,
    UserController.usuarioPorId);

router.post('/',[
        body('username').isLength({min: 5}).withMessage('La longitud mínima del nombre de usuario son 5 caracteres'),
        body('fullname').exists(),
        body('email')
            .isEmail()
            .withMessage('El campo email debe ser un email válido')
            .custom(async email =>{

                if(await usuarioRepository.emailExists(email)) {
                    throw new Error('El email ya está registrado. Proporcione un valor diferente');
                } else {  
                    return true;
                }
            }),
        body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')
    ],
    validar, 
    UserController.nuevoUsuario);

router.put('/:id',token(), UserController.editarUsuario);

export default router;