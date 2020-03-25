const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //faz com que as requisições em formato json sejam entendidas - deve estar antes das rotas
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * Como acessar
 * 
 * const query = request.query;
 * const params = request.params;
 * const body = request.body;
 */

/**
 * Banco de dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Comunicação com o banco de dados
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() - Utiliza JS, pronto pra aceitar qualquer banco SQL  
 */


app.listen(3333);