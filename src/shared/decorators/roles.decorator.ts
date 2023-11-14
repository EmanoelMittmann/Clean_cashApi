import { SetMetadata } from '@nestjs/common';
import { RoleAdminstrator } from '../enums/roles.enum';

export const Roles = (...roles: RoleAdminstrator[]) =>
  SetMetadata('roles', roles);
