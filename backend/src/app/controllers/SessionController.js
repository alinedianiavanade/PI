import jwt from 'jsonwebtoken';
import Cliente from '../models/Clientes';
import authConfig from '../../config/auth';

class SessionController {
    async store(request, response) {
        const { email, senha } = request.body;

        const cliente = await Cliente.findOne({ where: { email } });

        if (!cliente) {
            return response.status(401).json({ error: "Cliente não cadastrado" })
        }

        if (!(await cliente.checkFalsePassword(senha))) {
            return response.status(401).json({ error: "Senha incorreta" });
        }

        const { id_cliente, nome, rua, cidade, cep, estado, cpf } = cliente;

        return response.json({
            cliente: {
                id_cliente,
                nome,
                email,
                rua,
                cidade,
                cep,
                estado,
                cpf,
            },
            token: jwt.sign({ id_cliente, nome, email, rua, cidade, cep, estado }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        })
    }
}

export default new SessionController();