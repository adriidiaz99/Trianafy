import { Router } from 'express';

const router = Router();

    router.get('/lists', (req, res) => {
    //Contenido get
    });

    router.post('/lists', (req, res) => {
    //Contenido post
    });

    router.put('/lists/{id}', (req, res) => {
    //Contenido put
    });

    router.get('/lists/{id}', (req, res) => {
    //Contenido get
    });

    router.delete('/lists/{id}', (req, res) => {
        //Contenido get
    });


export default router;