import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '@theme';

export const useScreenStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        outer: {
          flex: 1,
          justifyContent: 'flex-start',
        },
        outerWithoutScroll: {
          flex: 1,
        },
        inner: {
          flex: 1,
          width: '100%',
        },
        insets: {
          position: 'absolute',
        },
      }),
    [colors],
  );
};
