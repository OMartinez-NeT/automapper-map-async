import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { PersonProfile } from './person.profile';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: '', pluginInitializer: classes }],
      singular: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PersonProfile],
})
export class AppModule {}
