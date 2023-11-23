import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { IStripeOptions } from './stripe.config';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  constructor(
    @Inject() private options: IStripeOptions,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.options.apikey, this.options.options);
  }

  public async createCustomer(name: string, email: string) {
    return this.stripe.customers.create({
      name,
      email,
    });
  }

  public async charge(
    amount: number,
    paymentMethodId: string,
    customerId: string,
  ) {
    return this.stripe.paymentIntents.create({
      amount,
      customer: customerId,
      payment_method: paymentMethodId,
      currency: this.configService.get('STRIPE_CURRENCY'),
      confirm: true,
    });
  }
}
