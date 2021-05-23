import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { PersonDTO } from './person.dto';
import { AsyncPersonDTO } from './async-person.dto';

@Injectable()
export class AppService {
  constructor(@InjectMapper() private mapper: Mapper) {}

  personMapperAsync = async () => {
    const syncPerson = new PersonDTO();
    syncPerson.name = 'sync name';

    return this.mapper.mapAsync(syncPerson, AsyncPersonDTO, PersonDTO);
  };
}
