export abstract class EncodeStringContract {
  abstract execute(stringForEncode: string): Promise<string>;
}
