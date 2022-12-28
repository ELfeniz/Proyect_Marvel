import { getAllPaginated } from '@/modules/core/services/marvel.api-rest2';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`;

export async function getCharatersAtPage2(
  page,
  itemsPerPage, 
  orden,
  name,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, orden, name, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid2(page, itemsPerPage, orden, name) {
  return getCharatersAtPage2(page, itemsPerPage, orden, name, {
    mappedBy: mapCharacterToCard
  });
}
