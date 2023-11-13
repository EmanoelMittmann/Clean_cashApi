import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity | null>;
  findById(id: number): Promise<UserEntity | null>;
  save(userDto: CreateUserDto): Promise<UserEntity>;
  update(updateUserDto: UpdateUserDto): Promise<void>;
}
