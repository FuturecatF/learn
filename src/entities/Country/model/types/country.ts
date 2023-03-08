export const COUNTRY = {
  Russia: 'Russia',
  Belarus: 'Belarus',
} as const;

export type CountryType = ValueOf<typeof COUNTRY>;
