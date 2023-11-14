import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '../usecases/create-user.usecase';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { CreateUserResponseDto } from '../dtos/create-user-response.dto';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Usuario criado com sucesso!',
  })
  async createUser(
    @Body() body: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return this.createUserUseCase.execute(body);
  }
}
