import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { RoleAdminstrator } from 'src/shared/enums/roles.enum';

export class CreateUserRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isEnabled: boolean = true;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  password: string;

  @ApiProperty()
  @IsEnum(RoleAdminstrator)
  @IsNotEmpty()
  role: RoleAdminstrator;
}
