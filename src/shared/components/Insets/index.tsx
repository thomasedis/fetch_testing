import React, { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { StatusBar, useWindowDimensions, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './Styles';
import { InsetProps, InsetsProps } from './Types';

const Inset = memo(
  ({ color, height, width, bottom, left, right, top }: InsetProps) => {
    const style = useMemo<ViewStyle>(
      () => ({
        backgroundColor: color,
        width,
        height,
        top,
        left,
        bottom,
        right,
      }),
      [bottom, color, height, left, right, top, width],
    );
    return <View style={[styles.insets, style]} />;
  },
  isEqual,
);

export const Insets = memo(
  ({
    edges,
    bottomInsetColor,
    hiddenStatusBar,
    leftInsetColor,
    rightInsetColor,
    statusColor,
    unsafe,
    statusBarStyle,
  }: InsetsProps) => {
    const inset = useSafeAreaInsets();
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
    return (
      <>
        <StatusBar
          hidden={hiddenStatusBar}
          backgroundColor={'transparent'}
          translucent
          barStyle={statusBarStyle || 'light-content'}
        />
        {!unsafe && edges?.includes('top') && (
          <Inset
            color={statusColor}
            top={0}
            height={inset.top}
            width={screenWidth}
          />
        )}
        {!unsafe && edges?.includes('left') && (
          <Inset
            color={leftInsetColor}
            left={0}
            height={screenHeight}
            width={inset.left}
          />
        )}
        {!unsafe && edges?.includes('right') && (
          <Inset
            color={rightInsetColor}
            right={0}
            height={screenHeight}
            width={inset.right}
          />
        )}
        {!unsafe && edges?.includes('bottom') && (
          <Inset
            color={bottomInsetColor}
            bottom={0}
            height={inset.bottom}
            width={screenWidth}
          />
        )}
      </>
    );
  },
  isEqual,
);
