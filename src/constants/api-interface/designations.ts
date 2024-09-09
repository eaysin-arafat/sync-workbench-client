import { MultipleEntityAttributes } from "./root";
import { User } from "./user";

export interface Designation {
  name: string;
  description: string;
  users: MultipleEntityAttributes<User>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
