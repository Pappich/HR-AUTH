import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthUtilsModule } from './auth-utils/auth-utils.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthUtilsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
