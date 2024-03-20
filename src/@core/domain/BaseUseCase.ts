export abstract class BaseUseCase<inputs, output> {
  abstract execute(inputs: inputs): Promise<output>
}
