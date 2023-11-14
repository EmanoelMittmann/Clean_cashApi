import { Module } from '@nestjs/common';
import { UserPostgresRepository } from 'src/database/implements.repository/user.repository';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from './usecases/create-user.usecase';
import { SecurityModule } from 'src/database/security/security.module';

@Module({
  imports: [SecurityModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserPostgresRepository,
    },
    CreateUserUseCase,
  ],
  exports: ['IUserRepository'],
})
export class UserModule {}
