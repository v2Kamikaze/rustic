import {FlashList, FlashListProps} from '@shopify/flash-list';
import React from 'react';

export const List = <T,>(props: FlashListProps<T>) => {
  return <FlashList {...props} />;
};
