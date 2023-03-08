export const CURRENCY = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export type CurrencyType = ValueOf<typeof CURRENCY>;
