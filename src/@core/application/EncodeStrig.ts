import { EncodeStringContract } from '../domain/EncodeStringContract';
import bcryptjs from 'bcryptjs';

export class EncodeString implements EncodeStringContract {
  async execute(stringForEncode: string): Promise<string> {
    return await bcryptjs.hash(stringForEncode, 8);
  }
}
