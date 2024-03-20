import express from 'express';

import { userRepository } from '../infra/repositories';
import { EncodeString } from '../@core/application/EncodeStrig';
import { GenerateUlid } from '../@core/application/GenerateUlid';
import { SignUpUseCase } from '../application/useCases/SignUpUseCase';
import { SignUpController } from '../interfaces/controller/auth/SignUpController';

const app = express();

app.use(express.json());

app.post('/sign-up', async (request, response) => {
  const signUpUseCase = new SignUpUseCase(userRepository, new EncodeString(), new GenerateUlid());
  const signUpController = new SignUpController(signUpUseCase);

  const { body, statusCode } = await signUpController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
