import React from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import { SCREENS } from '@shared-constants';
import { LightTheme, DarkTheme } from '@theme';
import BottomTabBar from './BottomTabBar';

const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const RenderTabNavigation = () => {
    return <BottomTabBar />;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator
        initialRouteName={SCREENS.MAIN}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name={SCREENS.MAIN}
          component={RenderTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
