// Importando o Prisma
import { prisma } from "../services/prisma.js";

// Criando uma função para criar um usuário
export const createUser = async (data) => {
  try {
    // Aqui, estamos pedindo ao Prisma para criar um novo usuário com os dados fornecidos
    const user = await prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        phone: true,
        createAt: true,
        updateAt: true,
      },
    });
    // Depois que o usuário é criado, retornamos essa informação
    return user;
  } catch (error) {
    // Tratamento de erro
    throw new Error("Erro ao criar usuário: " + error.message);
  }
};

// Criando uma função para buscar todos os usuários
export const getAll = async () => {
  try {
    // Aqui, estamos chamando a função getAll
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        phone: true,
        createAt: true,
        updateAt: true,
      },
    });
    // Depois que os usuários forem buscados, retornamos essa informação
    return users;
  } catch (error) {
    // Tratamento de erro
    throw new Error("Erro ao buscar usuários: " + error.message);
  }
};

// Criando uma função para buscar um usuário pelo ID
export const getById = async (id) => {
  try {
    // Aqui, estamos chamando a função findUnique do Prisma
    const user = await prisma.user.findUnique({
      // Aqui, estamos buscando o usuário pelo ID
      where: {
        id
      }
    });
    // Retornando o usuário encontrado
    return user;
  } catch (error) {
    // Tratamento de erro
    throw new Error("Erro ao buscar usuário: " + error.message);
  }
};

// Criando uma rota para atualizar um usuário
export const updateUser = async (id, data) => {
  try {
    // Aqui, estamos pedindo ao Prisma para atualizar um usuário com o ID fornecido
    const user = await prisma.user.update({
      // Especificamos o usuário a ser atualizado pelo ID
      where: {
        id
      },
      // Dados a serem atualizados
      data,
      // Selecionamos os campos que queremos retornar
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        phone: true,
        createAt: true,
        updateAt: true,
      }
    });
    // Depois que o usuário é atualizado, retornamos essa informação
    return user;
  } catch (error) {
    // Tratamento de erro
    throw new Error("Erro ao atualizar usuário: " + error.message);
  }
};

// Criando uma função para deletar um usuário
export const deleteUser = async (id) => {
  try {
    // Aqui, estamos pedindo ao Prisma para deletar um usuário com o ID fornecido
    await prisma.user.delete({
      where: {
        id
      }
    });
    return;
  } catch (error) {
    // Tratamento de erro
    throw new Error("Erro ao deletar usuário: " + error.message);
  }
};

/*
Importando o Prisma:
import { Prisma } from "../services/prisma.js";: Isso é como pegar uma caixa de ferramentas chamada “Prisma” que alguém já preparou para nós. Essa caixa contém todas as ferramentas que precisamos para trabalhar com nosso banco de dados.

Criando uma função para criar um usuário:
export const createUser = async (data) => {: Imagine que estamos criando um formulário para adicionar informações sobre um novo morador à nossa casa (ou aplicativo). Essa função chamada createUser é como o nosso “formulário de criação de usuário”.

async: Isso significa que a função pode levar algum tempo para fazer seu trabalho (como quando você está cozinhando algo no forno e precisa esperar).

(data): Aqui, data é como o papel onde escrevemos as informações do novo morador. Ele contém coisas como nome, idade, endereço, etc.

Pedindo ao Prisma para criar um novo usuário:
const user = await prisma.user.create({ data });: Agora estamos preenchendo o formulário! Pedimos ao Prisma para criar um novo usuário com as informações que estão no data.

await: Isso é como esperar pacientemente enquanto o Prisma preenche o formulário e coloca os detalhes do novo morador em um arquivo especial.

user: Quando o Prisma termina, ele nos entrega um cartão com o nome do novo morador (ou seja, o objeto user).

Retornando o usuário criado:
return user;: Finalmente, pegamos o cartão com o nome do novo morador e o mostramos para todos! Essa linha é como dizer: “Olhem, temos um novo usuário!”
E assim, nosso “mestre de obras” Prisma cuida de todo o processo de criar um usuário no nosso banco de dados. 🏠✨
*/ 