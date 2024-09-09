export interface Roles {
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  nb_users: number;
}
