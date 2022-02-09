import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.scren';
import { Analytics } from './Analytics.screen';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          color: theme.colorPurple,
          fontFamily: theme.fontFamilyRegular,
        },
        tabBarActiveTintColor: theme.colorPurple,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => {
          if (route.name === 'Home') {
            return <HomeIcon size={size} color={color} />;
          }
          if (route.name === 'History') {
            return <HistoryIcon size={size} color={color} />;
          }
          if (route.name === 'Analytics') {
            return <AnalyticsIcon size={size} color={color} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: 'Current mood' }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Graphs for nerds' }}
      />
    </BottomTabs.Navigator>
  );
};
