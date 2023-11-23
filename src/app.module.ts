import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TransationModule } from './modules/transation/transation.module';
import { AccountModule } from './modules/account/account.module';
import { UserModule } from './modules/user/user.module';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma/prisma.module';
import { StripeModule } from './database/stripe/stripe.module';
import { MqttModule } from './modules/mqtt/mqtt.module';

@Module({
  imports: [
    UserModule,
    TransationModule,
    AccountModule,
    PrismaModule,
    StripeModule,
    MqttModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
