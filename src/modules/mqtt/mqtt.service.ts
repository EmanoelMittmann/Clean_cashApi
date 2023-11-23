import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MqttService {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  public send(msg: string) {
    try {
      this.client.emit('Message', {
        id: `${Math.random() * 100} `,
        data: {
          name: msg,
        },
      });
      return {
        message: 'Message send!',
      };
    } catch (error) {
      console.log(error);
    }
  }

  public sendEmail(): string {
    //Implements service messenger email
    return '';
  }
}
