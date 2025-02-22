import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DesignSystemScreen, HomeScreen, SerieScreen} from './src/screens';
import './src/theme/unistyles';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabBar} from './src/components';

export type TabParamList = {
  SerieScreen: undefined;
  DesignSystemScreen: undefined;
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={renderTabBar}
          screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="HomeScreen"
            options={{
              tabBarLabel: 'home',
            }}
            component={HomeScreen}
          />

          <Tab.Screen
            name="SerieScreen"
            options={{
              tabBarLabel: 'series',
            }}
            component={SerieScreen}
          />

          <Tab.Screen
            name="DesignSystemScreen"
            options={{
              tabBarLabel: 'design',
            }}
            component={DesignSystemScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
