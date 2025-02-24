import {icons, LucideProps} from 'lucide-react-native';
import React from 'react';
import {useAppTheme} from '../hooks';

export type IconName = keyof typeof icons;

export type IconProps = LucideProps & {
  name: IconName;
};

export const Icon: React.FC<IconProps> = ({name, ...props}) => {
  const {theme} = useAppTheme();

  const LucideIcon = icons[name];

  return <LucideIcon color={theme.colors.primary} size={20} {...props} />;
};
