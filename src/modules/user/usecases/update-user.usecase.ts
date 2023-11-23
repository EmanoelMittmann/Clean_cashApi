import { Inject } from '@nestjs/common';
import IUseCaseBaseContract from 'src/database/contract/usecase.contract';
import { IUserRepository } from '../repository/user.repository';
import { IHashRepository } from 'src/database/security/hash/repository/hash.repository';
import { UpdateUserDto } from '../dtos/user.dto';

export class UpdateUserUseCase implements IUseCaseBaseContract {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IHashRepository')
    private readonly hashRepository: IHashRepository,
  ) {}

  public async execute(body: UpdateUserDto): Promise<void> {
    const result = await this.existUser(body.id);

    if (result) return;

    return;
  }

  public async existUser(id: number): Promise<boolean> {
    const existId = await this.userRepository.findById(id);

    if (!!existId) {
      return true;
    }

    return false;
  }
}
