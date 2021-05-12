import Cliente from '../models/Clientes';

class ClientesController {
    async store(request, response) {
        const clienteExists = await Cliente.findOne({ where: { email: request.body.email } });

        if (clienteExists) {
            return response.status(400).json({ error: "Cliente já cadastrado" });
        };

        const { id_cliente, nome, email } = await Cliente.create(request.body);


        return response.json({
            id_cliente,
            nome,
            email,
        });
    };

    async update(request, response) {
        const cliente = await Cliente.findByPk(request.clienteId);

        const { nome, email, cpf, cep, estado, cidade, rua } = await cliente.update(request.body);

        return response.json({
            nome,
            email,
            cpf,
            cep,
            estado,
            cidade,
            rua,
        });
    }

    async delete(request, response) {
        Cliente.destroy({ where: { id_cliente: request.clienteId } })
            .then(num => {
                if (num == 1) {
                    response.send({
                        message: "Cadastro apagado com sucesso"
                    });
                } else {
                    response.send({
                        message: "Ocorreu um erro ao apagar este cadastro, verifique se está logado corretamente."
                    });
                }
            })
            .catch(err => {
                response.status(500).send({
                    message: "Erro interno ao apagar o cadastro"
                })
            })
    }


    async show(request, response) {
        const cliente = await Cliente.findAll();

        return response.json(cliente);
    }

    async showClienteId(request, response) {
        const { nome, email, cpf, cep, estado, cidade, rua } = await Cliente.findByPk(request.clienteId);

        return response.json({
            nome,
            email,
            cpf,
            cep,
            estado,
            cidade,
            rua,
        });
    }
}

export default new ClientesController();