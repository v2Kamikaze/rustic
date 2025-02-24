import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Box, PressableBox} from './box';
import {useAppSafeArea, useAppTheme} from '../hooks';
import {Component, Dumbbell, Home, LucideIcon} from 'lucide-react-native';
import {Typography} from './typography';
import {TabParamList} from '../../App';

type TabRoutes = keyof TabParamList;

const mapIcons: Record<TabRoutes, LucideIcon> = {
  SerieScreen: Dumbbell,
  DesignSystemScreen: Component,
  HomeScreen: Home,
};

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {theme} = useAppTheme();
  const {bottom} = useAppSafeArea();

  return (
    <Box
      flexDirection="row"
      borderTopWidth={1}
      paddingTop={theme.spacings.md}
      borderTopColor={theme.colors.border}
      backgroundColor={theme.colors.card}
      paddingBottom={bottom}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = mapIcons[route.name as TabRoutes];

        return (
          <PressableBox
            key={route.key}
            onPress={onPress}
            flex={1}
            alignItems="center"
            justifyContent="center"
            gap={theme.spacings.sm}>
            <Icon color={theme.colors.primary} opacity={isFocused ? 1 : 0.5} />

            <Typography
              variant="label"
              fontSize={10}
              fontWeight="medium"
              opacity={isFocused ? 1 : 0.5}>
              {label as string}
            </Typography>
          </PressableBox>
        );
      })}
    </Box>
  );
};
