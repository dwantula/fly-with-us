export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

export const countriesFetched = (countries) => ({
  type: 'FETCH_COUNTRIES',
  countries,
});
