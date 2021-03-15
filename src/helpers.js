import { v4 as uuidv4 } from 'uuid';

export const mapPictureCards = countriesData => countriesData.map(country => ({
  id: uuidv4(),
  type: 'picture',
  country: country.name,
  pictureURL: country.pictureURL,
  selected: false,
}));

export const mapFlagCards = countriesData => countriesData.map(country => ({
  id: uuidv4(),
  type: 'flag',
  country: country.name,
  flagURL: `./assets/flags/${country.name}.png`,
  selected: false,
}));
