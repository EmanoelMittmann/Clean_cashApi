import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TransationModule } from './modules/transation/transation.module';
import { AccountModule } from './modules/account/account.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, TransationModule, AccountModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
