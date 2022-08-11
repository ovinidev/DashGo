export interface IUsers {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface IUsersMirage {
  users: IUsers[];
}

export interface IUserMirage {
  user: IUsers;
}