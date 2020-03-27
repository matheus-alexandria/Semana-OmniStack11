const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // Eventualmente criar url poderá acessar o site, com o comando origin
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso -- É onde informamos a rota que deve ser seguida ---> "/users" por exemplo
 * 
 * Métodos HTTP
*   GET: Buscar ou listar informação do Back-end
*   POST: Criar informação do Back-end
*   PUT: Alterar informação do Back-end
*   DELETE: Deletar uma informação do Back-end
 */

 /**
  * Tipos de parâmetros
  *     
  *     Query Parms: Parâmetros nomeados e enviados na rota, após o símbolo de interrogação
  *         Normalmente servem pra filtros, paginação (/users?name=Matheus&idade=22) request.query
  *     Route Parms: Parâmetros utilizados para identificar recursos no banco, como ID
  *         (/users/:"numero do ID" == /users/:231) request.params
  *     Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  *         request.body
  */

  /**
   * Bancos de dados
   *    
   *    SQL: MySQL, SQLite, Postgris, Oracle, Microsoft SQL Server
   *    NoSQL: MongoDB, CouchDB, etc.
   */

   /**
    * Se comunicando com o banco de dados
    * 
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

app.listen(3333);