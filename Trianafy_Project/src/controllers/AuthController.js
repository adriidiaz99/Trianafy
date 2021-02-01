import 'dotenv/config';
import { Usuario } from '../models/User';
import { usuarioRepository } from '../repository/UserRepository';
import bcrypt from 'bcryptjs';
import { JwtService } from '../services/jwt';



const AuthController = {

    register: (req, res, next) => {

        let usuarioCreado = usuarioRepository.agregarUsuario(
                new Usuario({username : req.body.username, 
                email : req.body.email, 
                fullname : req.body.fullname, 
                password : bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS))}));
           
        res.status(201).json({
            id: usuarioCreado.id,
            username: usuarioCreado.username,
            email: usuarioCreado.email
        });
    },
    login: (req, res, next) => {

        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }


}

export {
    AuthController
}