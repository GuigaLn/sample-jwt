import { BaseController, IRequest, IResponse } from '../../../@core/domain/BaseController';
import { SignUpUseCase } from '../../../application/useCases/SignUpUseCase';
import { User } from '../../../domain/entities/user/User';
import { UserAlreadyExists } from '../../../@core/application/errors/UserAlreadyExists';
import { BadRequest } from '../../../@core/application/errors/BadRequest';

export class SignUpController implements BaseController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const user = new User({
        id: 'id',
        name: request.body?.name,
        email: request.body?.email,
        password: request.body?.password,
      });

      const userCreated = await this.signUpUseCase.execute(user.props);

      return {
        statusCode: 200,
        body: { ...userCreated, password: null }
      };
    } catch (error) {
      /* Depois sera criado um tratamento, por tipo de error */
      if(error instanceof UserAlreadyExists) {
        return {
          statusCode: 409,
          body: { message: error.message }
        };
      }

      /* Depois sera criado um tratamento, por tipo de error */
      if(error instanceof BadRequest) {
        return {
          statusCode: 400,
          body: { message: error.message }
        };
      }

      return {
        statusCode: 500,
        body: { message: error.message }
      };
    }
  }
}
