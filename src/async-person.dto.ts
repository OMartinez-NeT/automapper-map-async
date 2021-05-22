import { AutoMap } from '@automapper/classes';

export class asyncPersonDTO {
  @AutoMap()
  name: string;

  @AutoMap()
  lastName: string;
}
