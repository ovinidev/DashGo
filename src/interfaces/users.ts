export interface IUsers {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface IUsersMirage {
  users: IUsers[];
}

export interface IUserMirage {
  user: IUsers;
}
