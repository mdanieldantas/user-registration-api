import express from 'express'; // importando o express
import cors from 'cors'; // importando o cors
import dotenv from 'dotenv'; // importando o dotenv
import routes from './routes'; // importando as rotas

// Carrega as variáveis de ambiente do arquivo .env (se existir)
dotenv.config(); // iniciando o dotenv

// Cria uma instância do framework Express
const app = express(); // iniciando o express e criando a variavel app que vai representar o express

// Habilita o middleware CORS (Cross-Origin Resource Sharing)
app.use(cors()); // habilitando o cors
/*CORS (Cross-Origin Resource Sharing)** é como um "porteiro" para sites. Ele permite ou bloqueia pedidos entre diferentes sites. Assim, mantém a segurança e evita que sites maliciosos acessem suas informações pessoais.  ncessario proteger a api de outra maneira*/


// Habilita o middleware para interpretar solicitações com formato JSON
app.use(express.json()); // habilitando o formato json para que o expreess entenda os json

// Importa as rotas definidas no arquivo "../src/routes/index" e associa ao aplicativo Express(app)
//O require é uma função do Node.js que carrega módulos.
// Módulos no Node.js são como “peças de Lego” para o seu código. Eles são pedaços de funcionalidade que você pode usar e reutilizar em diferentes partes do seu programa. Por exemplo, imagine que você está construindo uma casa de Lego: cada peça (módulo) tem uma função específica, como uma janela, uma porta ou um telhado. Você pode encaixá-las juntas para criar algo maior e mais complexo. Da mesma forma, os módulos no Node.js ajudam a organizar e dividir seu código em partes menores e mais gerenciáveis. no caso abaixo o "index" é um modulo que contém as rotas
// require("../src/routes/index")(app);

// routes(app);: Aqui, estamos usando o módulo de rotas que definimos em outro arquivo (provavelmente chamado routes.js). Essas rotas especificam como nosso servidor deve responder a diferentes URLs (por exemplo, /users para criar um usuário).
routes(app);

//Isso configura o servidor Express para ouvir na porta 3001. Quando alguém acessar essa porta, o servidor responderá às solicitações HTTP.
app.listen(3001);

console.log("Servidor iniciado na porta 3001");