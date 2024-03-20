import { PrismaClient } from '@prisma/client';

class RepositoryPrisma extends PrismaClient  {
  async onModuleInit() {
    await this.$connect();
  }
}

export default new RepositoryPrisma();
