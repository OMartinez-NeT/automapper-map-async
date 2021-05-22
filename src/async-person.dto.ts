import { AutoMap } from '@automapper/classes';

export class AsyncPersonDTO {
  @AutoMap()
  name: string;

  @AutoMap()
  lastName: string;
}
