import { UserAlreadyExists } from '../../@core/application/errors/UserAlreadyExists';
import { BaseUseCase } from '../../@core/domain/BaseUseCase';
import { EncodeStringContract } from '../../@core/domain/EncodeStringContract';
import { GenerateUlidContract } from '../../@core/domain/GenerateUlidContract';
import { UserRepositoryContract } from '../../domain/contracts/UserRepositoryPrismaContract';
import { IUser } from '../../domain/entities/user/User';

export class SignUpUseCase implements BaseUseCase<IUser, Omit<IUser, 'id'>> {
  constructor(
    private readonly userRepository: UserRepositoryContract,
    private readonly encodeString: EncodeStringContract,
    private readonly generateUlid: GenerateUlidContract
  ) {}

  async execute(user: IUser): Promise<IUser> {
    const userAlreadyExists = await this.userRepository.getByEmail(user.email);

    if(userAlreadyExists) {
      throw new UserAlreadyExists('User Already Exists');
    }

    const hashedPassword = await this.encodeString.execute(user.password);
    const generatedUlid = this.generateUlid.execute();

    return await this.userRepository.create({
      ...user,
      id: generatedUlid,
      password: hashedPassword,
    });
  }
}
