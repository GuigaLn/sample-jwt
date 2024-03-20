import { IUser } from '../entities/user/User';

export abstract class UserRepositoryContract {
  abstract getByEmail(email: string): Promise<IUser | null>;
  abstract create(user: IUser): Promise<IUser>;
}
