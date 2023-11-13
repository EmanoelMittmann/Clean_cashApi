import { Role } from '@prisma/client';
import { RoleAdminstrator } from '../../shared/enums/roles.enum';
import { prisma } from './database.prisma';

export async function roleSeed(): Promise<Role[]> {
  const roleNames = Object.values(RoleAdminstrator).map((name) => ({ name }));

  return Promise.all(
    roleNames.map(async ({ name }) => {
      return prisma.role.upsert({
        where: { name },
        update: {},
        create: {
          name,
        },
      });
    }),
  );
}
