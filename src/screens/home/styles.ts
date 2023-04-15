import { useMemo } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { colors, spacing } from '@theme';

export const useHomeStyles = () => {
  const scheme = useColorScheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: spacing.regular,
        },
        overlay: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: spacing.deviceHeight / 2,
          width: '100%',
          backgroundColor: colors.primary,
        },
        scrollViewWrapper: {
          paddingBottom: spacing.medium,
        },
      }),
    [scheme],
  );
};
