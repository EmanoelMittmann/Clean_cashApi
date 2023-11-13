import { Module } from '@nestjs/common';
import { UserPostgresRepository } from 'src/database/implements.repository/user.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserPostgresRepository,
    },
  ],
  exports: ['IUserRepository'],
})
export class UserModule {}
