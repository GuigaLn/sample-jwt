import { GenerateUlidContract } from '../domain/GenerateUlidContract';
import { ulid } from 'ulid';

export class GenerateUlid implements GenerateUlidContract {
  execute(): string {
    return ulid();
  }
}
