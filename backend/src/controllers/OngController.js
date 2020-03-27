const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    /**
     * Index é o nome dado usualmente pra o parâmetro que lista as informações em uma tabela
     */
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id });
    }
};