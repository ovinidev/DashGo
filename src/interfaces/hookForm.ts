export interface LoginInputs {
  email: string;
  password: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
