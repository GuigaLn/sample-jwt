import { PrismaClient } from '@prisma/client';
import { UserRepositoryContract } from '../../../domain/contracts/UserRepositoryPrismaContract';
import { IUser } from '../../../domain/entities/user/User';

export class UserRepositoryPrisma implements UserRepositoryContract {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getByEmail(email: string): Promise<IUser | null> {
    return await this.prismaClient.user.findUnique({ where: { email } });
  }

  async create(user: IUser): Promise<IUser> {
    return await this.prismaClient.user.create({ data: user });
  }
}
