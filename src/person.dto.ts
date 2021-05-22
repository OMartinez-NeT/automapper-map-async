import { AutoMap } from '@automapper/classes';

export class PersonDTO {
  @AutoMap()
  name: string;

  @AutoMap()
  lastName: string;
}
