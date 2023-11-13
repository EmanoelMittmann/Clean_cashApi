import { PrismaClient } from '@prisma/client';
import { roleSeed } from './role.seed';

export const prisma = new PrismaClient();

async function main() {
  console.log('Rodando a seeder do postgres');

  await roleSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
