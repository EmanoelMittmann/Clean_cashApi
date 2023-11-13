import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

export class UserAdapter {
  static transformFromDB(data: UserDto) {
    const user = new UserEntity();
    user.setId(data.id);
    user.setName(data.name);
    user.setEmail(data.email);
    user.setCreatedAt(data.createdAt);
    user.setPhone(data.phone);
    user.setPassword(data.password);
    user.setRole(data.role);

    return user;
  }
}
