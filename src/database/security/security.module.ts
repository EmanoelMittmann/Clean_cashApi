import { Module } from '@nestjs/common';
import { BcryptRepository } from './hash/repository/bcrypt.repository';

@Module({
  providers: [
    {
      provide: 'IHashRepository',
      useClass: BcryptRepository,
    },
  ],
  exports: ['IHashRepository'],
})
export class SecurityModule {}
