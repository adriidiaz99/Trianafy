import { Router } from 'express';

const router = Router();

    router.get('/songs', (req, res) => {
    //Contenido get
    });

    router.post('/songs', (req, res) => {
    //Contenido post
    });

    router.get('/songs/{id}', (req, res) => {
    //Contenido get
    });

    router.put('/songs/{id}', (req, res) => {
    //Contenido put
    });

    router.delete('/songs/{id}', (req, res) => {
    //Contenido delete
    });

   

export default router;