import { RoleAdminstrator } from 'src/shared/enums/roles.enum';

export class UserEntity {
  private id?: number;
  private name: string;
  private email: string;
  private password: string;
  private phone: string | null;
  private isEnabled: boolean;
  private createdAt: Date;
  private updateAt: Date;
  private role: RoleAdminstrator;

  getId(): number {
    return this.id ?? null;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getPassword(): string {
    return this.password;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updateAt;
  }

  getRole(): RoleAdminstrator {
    return this.role;
  }

  getIsEnabled(): boolean {
    return this.isEnabled;
  }

  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setPassword(pass: string): void {
    this.password = pass;
  }

  setCreatedAt(date: Date): void {
    this.createdAt = date;
  }

  setRole(role: RoleAdminstrator): void {
    this.role = role;
  }
}
