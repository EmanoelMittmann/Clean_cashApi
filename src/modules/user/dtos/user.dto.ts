import { RoleAdminstrator } from 'src/shared/enums/roles.enum';

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: RoleAdminstrator;
  isEnabled: boolean;
}

export interface UpdateUserDto {
  id: number;
  name: string;
  email: string;
  isEnabled: boolean;
  phone?: string;
  password: string;
  roleId: number;
}

export interface UserDto {
  id?: number;
  name: string;
  email: string;
  password: string;
  isEnabled: boolean;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  role: RoleAdminstrator;
}
