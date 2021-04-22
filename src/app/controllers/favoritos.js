/*import User from '../models/User';

class UserController {
    async store(request, response) {
        const userExists = await User.findOne({ where: { email: request.body.email}});

        if (userExists) {
            return response.status(400).json({ error:'Usuário já existe' });
        }

        const {id, nome, email, provider} = await User.create(request.body);
        //destruturação pra no insomina não ficar aparecendo a senha.

        return response.json({
            id,
            nome,
            email,
            provider,
        });
    }   
}

export default new UserController();*/