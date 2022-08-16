import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Digite um email'),
    password: yup.string().required('Digite sua senha'),
  })
  .required();

export const createUserSchema = yup
  .object({
    name: yup.string().required('Nome obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Digite um email'),
    password: yup
      .string()
      .required('Digite sua senha')
      .min(6, 'Mínimo 6 caracteres'),
    passwordConfirm: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required();
