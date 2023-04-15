import 'react-native-gesture-handler';
import React from 'react';
import './src/i18n';
import {
  StatusBar,
  useColorScheme,
  LogBox,
} from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { isAndroid } from '@freakycoder/react-native-helpers';
import 'react-native-reanimated';
/**
 * ? Local Imports
 */
import Navigation from './src/navigation';
import { store, persistor } from './src/services/redux/Store';
import { initializeReduxService } from '@services/redux/ReduxService';
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs();


const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  React.useLayoutEffect(() => {
    initializeReduxService(store.dispatch, store.getState);
  });

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'dark-content' : 'dark-content');
    if (isAndroid) {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [scheme, isDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <Toast position="bottom" visibilityTime={1500} />
        {/*{progress ? showProgressView() : null}*/}
      </PersistGate>
    </Provider>
  );
};

export default App;
