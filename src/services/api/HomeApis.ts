import { response } from '@services/api/DataFake';

export function getSections() {
  // ApiConfig.getSectionsHome
  return {
    status: 200,
    data: response,
  };
}
