import { Router } from 'express';

const router = Router();

    router.post('/lists/{id1}/songs/{id2}', (req, res) => {
    //Contenido post
    });

    router.get('/lists/{id1}/songs', (req, res) => {
    //Contenido get
    });

    router.get('/lists/{id1}/songs/{id2}', (req, res) => {
    //Contenido get
    });

    router.delete('/lists/{id1}/songs/{id2}', (req, res) => {
    //Contenido delete
    });

export default router;