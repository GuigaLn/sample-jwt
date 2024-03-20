import RepositoryPrisma from '../../@core/infra/database/RepositoryPrisma';

import { UserRepositoryPrisma } from './prisma/UserRepositoryPrisma';

const userRepository = new UserRepositoryPrisma(RepositoryPrisma);

export {
  userRepository,
};
