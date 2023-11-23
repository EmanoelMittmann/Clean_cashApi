import Stripe from 'stripe';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface IStripeOptions {
  apikey: string;
  options: Stripe.StripeConfig;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IStripeOptions>()
    .setClassMethodName('forRoot')
    .build();
