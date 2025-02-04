import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';

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
  id?: string;
}
