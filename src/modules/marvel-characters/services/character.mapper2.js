import { getCharacterImage } from './character.handler';

export function mapCharacterToCard2(character) {
  return {
    name: character.name,
    image: getCharacterImage(character),
    id: character.id,
    description: character.description
  };
}
