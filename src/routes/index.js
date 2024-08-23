

// Importando as rotas relacionadas aos usuários do arquivo user.routes.js
import userRoutes from "./user.routes";

// Definindo um conjunto de rotas para a nossa aplicação
const routes = (app) => {
  // Aqui, estamos chamando as rotas específicas dos usuários e passando o 'app' como argumento
  userRoutes(app);
};

// Exportando o conjunto de rotas para uso em outras partes do código
export default routes;
