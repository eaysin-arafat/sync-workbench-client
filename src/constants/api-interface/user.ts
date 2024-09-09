import { Designation } from "./designations";
import { Role } from "./role";
import { SingleEntityAttributes } from "./root";

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  first_name: string;
  last_name: string;
  position_name: string;
  address: string;
  state: string;
  city: string;
  country: string;
  date_of_birth: string;
  phone: number;
  zip_code: number;
  employee_skill: any;
  employee_certification: any;
  work_experiences: any[];
  designation: SingleEntityAttributes<Designation>;
  avatar: SingleEntityAttributes<AvatarType>;
  role: SingleEntityAttributes<Role>;
}

export interface AvatarType {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}
