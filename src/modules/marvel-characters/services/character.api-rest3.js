import { getAllPaginated } from '@/modules/core/services/marvel.api-rest3';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard2 } from '@/modules/marvel-characters/services';

const domain = `characters`;

export async function getCharatersAtPage3(
  page,
  itemsPerPage, 
  autor,
  orden,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, autor, orden,{
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid3(page, itemsPerPage, autor,orden) {
  return getCharatersAtPage3(page, itemsPerPage, autor, orden, {
    mappedBy: mapCharacterToCard2
  });
}
