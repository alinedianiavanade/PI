
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: "Token não fornecido" });
    }

    const [token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        request.clienteId = decoded.id_cliente;
        console.log(decoded)

        return next();
    }
    catch (err) {
        return response.status(401).json({ error: 'Token inválido' }),
            console.log(token)
    }
};