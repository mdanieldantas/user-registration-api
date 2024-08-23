// Importando o pacote bcrypt
import bcrypt from "bcrypt";
// Importando a função createUser do arquivo user.repository
import { userValidation } from "../validations/user.validation";
// Importando a função createUser do arquivo user.repository 
// Importando a função getAll do arquivo user.repository
// importando updateUser do arquivo user.repository
// Importando a função deleteUser do arquivo user.repository
import { createUser, getAll, getById, updateUser, deleteUser } from "../repositorys/user.repository";
import { prisma } from "../services/prisma";


// Criando uma rota para criar um usuário
export const create = async (req, res) => {
   try {
      // Validando os dados do corpo da requisição não precisa de constante
      await userValidation.validate(req.body);

      // Criando uma senha criptografada
      const hashPassword = await bcrypt.hash(req.body.password, 10);

      // Adicionando a senha criptografada ao corpo da requisição
      req.body.password = hashPassword;
      // Aqui, estamos chamando a função createUser com os dados do corpo da requisição (req.body)
      const user = await createUser(req.body);
      // Se tudo der certo, respondemos com o usuário criado (status 200)
      res.status(200).send(user);
   } catch (error) {
      // Se algo der errado, respondemos com uma mensagem de erro detalhada (status 400)
      res.status(400).send("Erro ao criar usuário: " + error.message);
   }
};


// Criando uma rota para buscar todos os usuários
export const get = async (req, res) => {
   try {
      // Aqui, estamos chamando a função getAll
      const users = await getAll();
      // Se tudo der certo, respondemos com os usuários (status 200)
      res.status(200).send(users);
   } catch (error) {
      // Se algo der errado, respondemos com uma mensagem de erro detalhada (status 400)
      res.status(400).send("Erro ao buscar usuários: " + error.message);
   }
}

// Criando uma rota para buscar um usuário pelo ID
export const getId = async (req, res) => {
   try {
      // Aqui, estamos chamando a função getById
      const user = await getById(Number(req.params.id));
      // Se tudo der certo, respondemos com o usuário (status 200)
      res.status(200).send(user);
   } catch (error) {
      // Se algo der errado, respondemos com uma mensagem de erro detalhada (status 400)
      res.status(400).send("Erro ao buscar usuário: " + error.message);
   }
};

// Criando uma rota para deletar um usuário pelo ID
export const update = async (req, res) => {
   try {
      // Aqui, estamos chamando a função getById
      const user = await updateUser(Number(req.params.id), req.body);
      // Se tudo der certo, respondemos com o usuário (status 200)
      res.status(200).send(user);

   } catch (error) {
      // Se algo der errado, respondemos com uma mensagem de erro detalhada (status 400)
      res.status(400).send("Erro ao atualizar usuário: " + error.message);
   }
}

// Criando uma rota para deletar um usuário pelo ID
export const remove = async (req, res) => {
   try {
      // Aqui, estamos chamando a função deleteUser
      await deleteUser(Number(req.params.id));
      res.status(200).send("Usuário deletado com sucesso!");
   } catch (error) {
      // Se algo der errado, respondemos com uma mensagem de erro detalhada (status 400)
      res.status(400).send("Erro ao deletar usuário: " + error.message);
   }
};




/*
Aqui está o que cada parte faz:

1. **Importando a função `createUser`:**
   - `import { createUser } from "../repositorys/user.repository";`: Imagine que temos um amigo chamado "createUser" que é especialista em criar usuários. Ele mora em um arquivo chamado `user.repository`. Estamos chamando esse amigo para nos ajudar.

2. **Criando uma rota para criar um usuário:**
   - `export const create = async (req, res) => {`: Agora, estamos construindo uma estrada chamada "rota de criação de usuário". Quando alguém seguir essa estrada (fizer uma requisição), chegaremos a um lugar onde podemos criar um novo usuário.
   - `async`: Isso significa que nossa estrada pode ter algumas curvas e obstáculos, então precisamos estar preparados para esperar.
   - `(req, res)`: Aqui, `req` é como uma carta que alguém nos enviou com informações sobre o novo usuário. E `res` é como o envelope onde colocaremos a resposta (o usuário criado ou um erro).

3. **Chamando a função `createUser` com os dados do corpo da requisição:**
   - `const user = await createUser(req.body);`: Agora estamos abrindo a carta (`req.body`) e entregando os detalhes para o nosso amigo "createUser". Ele vai preencher o formulário de criação de usuário com essas informações.
   - `await`: Estamos esperando pacientemente enquanto nosso amigo faz o trabalho.

4. **Respondendo com o usuário criado ou com um erro:**
   - `res.status(200).send(user);`: Se tudo correr bem, pegamos o cartão com o nome do novo usuário e o mostramos para todos! Isso é como dizer: "Olhem, temos um novo usuário!" (status 200).
   - `res.status(400).send(error);`: Mas, se algo der errado (como se o papel da carta estiver em branco ou rasgado), mostramos o erro para que possamos corrigir (status 400).

E assim, nossa rota de criação de usuário está pronta para receber novos moradores! 🏠✨
*/