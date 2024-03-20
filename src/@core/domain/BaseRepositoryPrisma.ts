import { PrismaClient } from '@prisma/client';

export abstract class BaseRepositoryPrisma {
  constructor(readonly prismaClient: PrismaClient) {}
}
