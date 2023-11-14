import { ConflictException, Inject } from '@nestjs/common';
import { IUserRepository } from '../repository/user.repository';
import { IHashRepository } from 'src/database/security/hash/repository/hash.repository';
import { CreateUserDto } from '../dtos/user.dto';
import IUseCaseBaseContract from 'src/database/contract/usecase.contract';
import { CreateUserResponseDto } from '../dtos/create-user-response.dto';

export class CreateUserUseCase implements IUseCaseBaseContract {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IHashRepository')
    private readonly hashRepository: IHashRepository,
  ) {}

  public async execute(body: CreateUserDto): Promise<CreateUserResponseDto> {
    const { exists } = await this.existsFields(body);

    if (exists) {
      throw new ConflictException();
    }

    const hash = await this.hashed(body.password);

    body.password = hash;

    await this.userRepository.save(body);

    return { message: 'Usuario criado com sucesso' };
  }

  public async existsFields(user: CreateUserDto) {
    const existsEmail = await this.userRepository.findByEmail(user.email);

    if (!!existsEmail) {
      return { exists: true, reason: 'Email' };
    }

    return { exists: false };
  }

  private async hashed(content: string): Promise<string> {
    return this.hashRepository.hashPassword(content);
  }
}
