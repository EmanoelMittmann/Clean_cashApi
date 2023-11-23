import { TokenType } from 'src/shared/enums/token.enum';

export class TokenEntity {
  private id: number;
  private token: string;
  private type: TokenType;
  private userId: number;
  private createdAt: Date;
  private updatedAt: Date;
  private expiresIn: Date;

  setId(id: number): void {
    this.id = id;
  }

  setToken(token?: string): void {
    const newToken = this.newRandomToken();
    this.token = token ?? newToken;
  }

  setType(type: TokenType): void {
    this.type = type;
  }

  setUserId(id: number): void {
    this.userId = id;
  }

  setCreatedAt(date: Date): void {
    this.createdAt = date;
  }

  setUpdatedAt(date: Date): void {
    this.updatedAt = date;
  }

  setExpiresIn(date: Date): void {
    const dayInMilliseconds = 86400000;
    const monthInMilliseconds = dayInMilliseconds * 30;
    const today = new Date();
    const expiresInDate = new Date(today.getTime() + monthInMilliseconds);

    this.expiresIn = date ?? expiresInDate;
  }

  getId(): number {
    return this.id;
  }

  getType(): TokenType {
    return this.type;
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): number {
    return this.userId;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getExpiresIn(): Date {
    return this.expiresIn;
  }

  private newRandomToken(): string {
    const length = 32;
    const char =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += char.charAt(Math.floor(Math.random() * char.length));
    }
    return token;
  }
}
