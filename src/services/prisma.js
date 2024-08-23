
// Importando o cliente Prisma do pacote @prisma/client e exportando para ser usada em outros arquivos do projeto
import { PrismaClient } from "@prisma/client";

// Criando uma instância do cliente Prisma e exportando ela para ser usada em outros arquivos do projeto
export const prisma = new PrismaClient();
