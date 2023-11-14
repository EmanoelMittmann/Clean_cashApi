import { Injectable } from '@nestjs/common';
import { IHashRepository } from './hash.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptRepository implements IHashRepository {
  public async hashPassword(password: string): Promise<string> {
    const saltRounds = 16;
    return bcrypt.hash(password, saltRounds);
  }
  checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
