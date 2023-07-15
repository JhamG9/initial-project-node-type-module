import {response, request} from 'express'

export const usuariosGet = (req = request, res = response) => {
    const {apiKey, name = 'No name'} = req.query;

    res.json({
        msg: 'Get API - Controlador',
        apiKey,
        name
    });
}

export const usuariosPut = (req = request, res = response) => {
    const id = req.params.id;

    res.status(500).json({
        msg: 'PUT API - Controlador',
        id
    });
}

export const usuariosPost = (req = request, res = response) => {
    const body = req.body;
    
    res.json({
        msg: 'POST API - Controlador',
        body
    });
}

export const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'DELETE API - Controlador'
    });
}
