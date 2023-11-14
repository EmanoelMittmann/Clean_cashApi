import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/modules/user/dtos/user.dto';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { IUserRepository } from 'src/modules/user/repository/user.repository';
import { PrismaService } from '../prisma.service';
import { UserAdapter } from 'src/modules/user/adapters/user.adapter';
import { RoleAdminstrator } from 'src/shared/enums/roles.enum';

@Injectable()
export class UserPostgresRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async update(updateUserDto: UpdateUserDto): Promise<void> {
    const { id, roleId, ...data } = updateUserDto;
    await this.prisma.user.update({
      where: { id },
      data: {
        ...data,
        ...(roleId ? { roleId } : {}),
      },
    });
    return;
  }

  public async save(userDto: CreateUserDto): Promise<UserEntity> {
    const { transformFromDB } = UserAdapter;
    const { role, ...user } = userDto;
    const request = await this.prisma.user.create({
      data: {
        ...user,
        role: {
          connect: {
            name: role,
          },
        },
      },
      include: {
        role: true,
      },
    });

    return transformFromDB({
      ...request,
      role: <RoleAdminstrator>request.role.name,
    });
  }
  public async findByEmail(email: string): Promise<UserEntity> {
    const { transformFromDB } = UserAdapter;
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        role: true,
      },
    });

    if (!user) return null;

    return transformFromDB({
      ...user,
      role: <RoleAdminstrator>user.role.name,
    });
  }
  public async findById(id: number): Promise<UserEntity> {
    const { transformFromDB } = UserAdapter;
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        role: true,
      },
    });

    return transformFromDB({
      ...user,
      role: <RoleAdminstrator>user.role.name,
    });
  }
}
