import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TransationModule } from './modules/transation/transation.module';
import { AccountModule } from './modules/account/account.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './database/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, TransationModule, AccountModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
