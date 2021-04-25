import Cliente from '../models/Clientes';

class ClientesController {
    async store(request, response) {
        const clienteExists = await Cliente.findOne( { where: { email: request.body.email } } );

        if (clienteExists) {
            return response.status(400).json({ error: "Cliente já cadastrado"});
        };
        
        const {id, nome, email} = await Cliente.create(request.body);


        return response.json({
            id,
            nome,
            email,
        });
    };   

    async update(request, response) {
        const {id} = request.params
        const clienteExists = await Cliente.findByPk(id);

        if (!clienteExists) {
            return response.status(400).json({ error: "Cadastro não existe"});
        };
        const cliente = await Cliente.findByPk(id);
        const clienteFinal = await cliente.update(request.body);

        return response.json(clienteFinal);
    }

    async delete(request, response) {
        const {id} = request.params
        Cliente.destroy({where:{id : id}})
        .then(num => {
            if (num == 1) {
                response.send({
                    message: "Cadastro apagado com sucesso"
                });
            } else {
                response.send ({
                    message: "Ocorreu um erro ao apagar este cadastro, verifique os dados inseridos"
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
        const {id} = request.params
        const clienteExists = await Cliente.findByPk(id);

        if (!clienteExists) {
            return response.status(400).json({ error: "Cadastro não existe"});
        };
        const cliente = await Cliente.findByPk(id);

        return response.json(cliente);
    }
}

export default new ClientesController();

