import {useEffect, useState} from 'react';

/**
 * `useDebounce` is a custom hook that delays updating the value until after a specified delay period, avoiding excessive updates during rapid changes.
 *
 * ## Usage
 * This hook is useful in scenarios like search inputs or form fields in React Native, where you want to delay the processing of input or actions until the user has stopped typing for a specified amount of time.
 *
 * ### Example
 *
 * ```tsx
 * import React, { useState, useEffect } from 'react';
 * import { TextInput, View, Text } from 'react-native';
 * import { useDebounce } from './useDebounce';
 *
 * const SearchComponent = () => {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(searchTerm, 300);
 *
 *   useEffect(() => {
 *     if (debouncedSearchTerm) {
 *       // Simulate an API call or other action with the debounced value
 *       console.log('Searching for:', debouncedSearchTerm);
 *     }
 *   }, [debouncedSearchTerm]);
 *
 *   return (
 *     <View>
 *       <TextInput
 *         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
 *         value={searchTerm}
 *         onChangeText={setSearchTerm}
 *         placeholder="Search..."
       />
 *       <Text>Searching for: {debouncedSearchTerm}</Text>
 *     </View>
 *   );
 * };
 *
 * export default SearchComponent;
 * ```
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
