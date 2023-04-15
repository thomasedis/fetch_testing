import React, { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { Block } from '../Block';
import { Insets } from '../Insets';
import { useScreenStyles } from './Styles';
import { ScreenProps } from './Types';
import { colors } from '@theme';

const INSETS: Edge[] = ['top', 'bottom', 'left', 'right'];

function ScreenWithoutScrolling(props: ScreenProps) {
  const styles = useScreenStyles();

  const {
    hiddenStatusBar = false,
    statusColor = colors.background,
    bottomInsetColor = colors.background,
    rightInsetColor = colors.background,
    leftInsetColor = colors.background,
    style = {},
    statusBarStyle,
    backgroundColor,
    excludeEdges,
    unsafe = false,
    children,
  } = props;

  const edges = useMemo<Edge[]>(() => {
    if (excludeEdges === 'all') {
      return [];
    }
    const actualEdges = INSETS.filter(x => !(excludeEdges ?? []).includes(x));
    if (hiddenStatusBar) {
      return actualEdges.filter(x => x !== 'top');
    }
    return actualEdges;
  }, [excludeEdges, hiddenStatusBar]);

  const actualUnsafe = useMemo<boolean>(() => unsafe || edges.length <= 0, [edges.length, unsafe]);

  const Wrapper = useMemo(
    () => (actualUnsafe ? Block : SafeAreaView),
    [actualUnsafe],
  );

  return (
    <>
      <Wrapper
        edges={edges}
        style={[
          styles.inner,
          style,
          backgroundColor
            ? { backgroundColor }
            : { backgroundColor: colors.background },
        ]}
      >
        <View
          style={[
            styles.outerWithoutScroll,
            backgroundColor
              ? { backgroundColor }
              : { backgroundColor: colors.background },
          ]}
          children={children}
        />
      </Wrapper>
      <Insets
        edges={edges}
        bottomInsetColor={bottomInsetColor}
        statusColor={statusColor}
        statusBarStyle={statusBarStyle}
        hiddenStatusBar={hiddenStatusBar}
        leftInsetColor={leftInsetColor}
        rightInsetColor={rightInsetColor}
        unsafe={actualUnsafe}
      />
    </>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const styles = useScreenStyles();
  const {
    hiddenStatusBar = false,
    statusColor = colors.background,
    bottomInsetColor = colors.background,
    rightInsetColor = colors.background,
    leftInsetColor = colors.background,
    style = {},
    statusBarStyle,
    backgroundColor,
    excludeEdges,
    unsafe = false,
    children,
    bounces = false,
    onScroll,
  } = props;
  const edges = useMemo<Edge[]>(() => {
    if (excludeEdges === 'all') {
      return [];
    }
    const actualEdges = INSETS.filter(x => !(excludeEdges ?? []).includes(x));
    if (hiddenStatusBar) {
      return actualEdges.filter(x => x !== 'top');
    }
    return actualEdges;
  }, [excludeEdges, hiddenStatusBar]);

  const actualUnsafe = useMemo<boolean>(
    () => unsafe || edges.length <= 0,
    [edges.length, unsafe],
  );

  const Wrapper = useMemo(() => (actualUnsafe ? Block : SafeAreaView), [actualUnsafe]);

  return (
    <>
      <Insets
        edges={edges}
        bottomInsetColor={bottomInsetColor}
        statusColor={statusColor}
        statusBarStyle={statusBarStyle}
        hiddenStatusBar={hiddenStatusBar}
        leftInsetColor={leftInsetColor}
        rightInsetColor={rightInsetColor}
        unsafe={actualUnsafe}
      />
      <Wrapper
        edges={edges}
        style={[styles.outer, { backgroundColor: colors.background }]}
      >
        <Animated.ScrollView
          bounces={bounces}
          scrollEventThrottle={16}
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          overScrollMode={'never'}
          style={[
            styles.inner,
            backgroundColor
              ? { backgroundColor }
              : { backgroundColor: colors.background },
          ]}
          contentContainerStyle={[style]}
          children={children}
        />
      </Wrapper>
    </>
  );
}

function ScreenComponent(props: ScreenProps) {
  const { scroll = false } = props;
  if (scroll) {
    return <ScreenWithScrolling {...props} />;
  } else {
    return <ScreenWithoutScrolling {...props} />;
  }
}
export const Screen = memo(ScreenComponent, isEqual);
