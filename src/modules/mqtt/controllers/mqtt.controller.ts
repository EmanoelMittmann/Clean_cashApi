import { Controller, Get } from '@nestjs/common';
import { MqttService } from '../mqtt.service';

@Controller('MQTT')
export class MessengerController {
  constructor(private readonly appService: MqttService) {}

  @Get('/sendcats')
  async sendCats() {
    return this.appService.send('senha:1q2wnoa(03nd01-i3');
  }
}
