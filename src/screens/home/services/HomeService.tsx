import { ReduxServices } from '@services/redux/ReduxService';
import { getSectionsRequest } from '@services/redux/home/HomeReducers';

class HomeServiceState {
  getSectionRequest = () => {
    ReduxServices.dispatchAction(getSectionsRequest());
  };
}

const HomeService = new HomeServiceState();

export default HomeService;
