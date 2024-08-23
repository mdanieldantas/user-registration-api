import * as yup from "yup"; // Importando o pacote 'yup' do pacote 'yup'

export const userValidation = yup.object({ // Criando um esquema de validação para os dados de um novo usuário
  name: yup.string().required("O nome é obrigatório"), // Verificando se o nome é obrigatório
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória").min(6, "A senha deve ter pelo menos 6 caracteres"),
  phone: yup.string().nullable(true),
});
