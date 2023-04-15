import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREENS } from '@shared-constants';
import { HomeScreen } from '@screens/home';
import { colors, spacing } from '@theme';
import { images } from '@images';
import { FstImage } from '@shared-components';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const tabData: Array<any> = [
    {
      name: SCREENS.HOME,
      component: HomeScreen,
    },
    {
      name: SCREENS.NOTIFY,
      component: HomeScreen,
      options: {
        tabBarBadge: 1,
        tabBarBadgeStyle: {
          top: -spacing.small / 3,
          backgroundColor: colors.red,
          lineHeight: 0,
          alignSelf: undefined,
        },
      },
    },
    {
      name: SCREENS.WALLET,
      component: HomeScreen,
    },
    {
      name: SCREENS.PROFILE,
      component: HomeScreen,
    },
  ];

  const renderTabIcon = (route: any, color: any) => {
    let iconName = images.ic_home;
    switch (route.name) {
      case SCREENS.HOME:
        iconName = images.ic_home;
        break;
      case SCREENS.NOTIFY:
        iconName = images.ic_bell;
        break;
      case SCREENS.WALLET:
        iconName = images.ic_wallet;
        break;
      case SCREENS.PROFILE:
        iconName = images.ic_user;
        break;
      default:
        break;
    }
    return (
      <FstImage
        source={iconName}
        color={color}
        resizeMode={'contain'}
        size={35}
      />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => renderTabIcon(route, color),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.line,
          borderTopWidth: spacing.border,
          paddingTop: spacing.regular,
        },
      })}
    >
      {tabData.map((item) => (
        <Tab.Screen
          key={`tab_${item.name}`}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabBar;
