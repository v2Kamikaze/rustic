import React from 'react';
import {Box, BoxProps} from './box';

export type CollapsibleProps = BoxProps & {
  collapsed: boolean;
};

export const Collapsible: React.FC<CollapsibleProps> = ({
  collapsed,
  children,
  ...rest
}) => {
  return <Box {...rest}>{!collapsed && children}</Box>;
};
