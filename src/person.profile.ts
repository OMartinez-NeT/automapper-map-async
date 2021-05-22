import { InjectMapper, AutomapperProfile } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/types';
import { PersonDTO } from './person.dto';
import { AsyncPersonDTO } from './async-person.dto';

@Injectable()
export class PersonProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      mapper
        .createMap(PersonDTO, AsyncPersonDTO)
        .afterMap(async (source, destination) => {
          const resolveValue = await new Promise((reject, resolve) => {
            setTimeout(() => {
              resolve('async last name');
            }, 100);
          });
          destination.lastName = resolveValue;
        });
    };
  }
}
