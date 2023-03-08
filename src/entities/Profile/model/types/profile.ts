import { CURRENCY } from 'entities/Currency/model/types/currency';
import { COUNTRY } from 'entities/Country/model/types/country';

type ValueOf<T> = T[keyof T];

type CurrencyType = ValueOf<typeof CURRENCY>;
type CountryType = ValueOf<typeof COUNTRY>;

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: CurrencyType;
  country?: CountryType;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
