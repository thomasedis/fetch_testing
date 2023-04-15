import { colors } from '@theme';
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { Indicator } from './Indicator';
interface propTypes {
  style?: any;
  count?: number;
  size?: number;
  height?: number;
  width?: number;
}
export const Spiner = ({
  style,
  size = 16,
  height = 36,
  width = 36,
}: propTypes) => {
  const renderComponent = ({ index, count, progress }) => {
    const angle = (index * 360) / count;

    const layerStyle = {
      transform: [
        {
          rotate: angle + 'deg',
        },
      ],
    };

    const inputRange = Array.from(
      new Array(count + 1),
      (item, index) => index / count,
    );

    const outputRange = Array.from(
      new Array(count),
      (item, index) => 1.2 - (0.5 * index) / (count - 1),
    );

    for (let j = 0; j < index; j++) {
      outputRange.unshift(outputRange.pop());
    }

    outputRange.unshift(...outputRange.slice(-1));

    const ballStyle = {
      margin: size / 2,
      backgroundColor: colors.primary,
      width: size,
      height: size,
      borderRadius: size / 2,
      transform: [
        {
          scale: progress.interpolate({ inputRange, outputRange }),
        },
      ],
      opacity: progress.interpolate({ inputRange, outputRange }),
    };

    return (
      <Animated.View style={[styles.layer, layerStyle]} {...{ key: index }}>
        <Animated.View style={ballStyle} />
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.overlay} />
      {/* <View style={styles.background} /> */}
      <Indicator style={{ width, height }} renderComponent={renderComponent} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: 'white',
    position: 'absolute',
  },

  // background: {
  //   position: 'absolute',
  //   height: 84,
  //   width: 84,
  //   borderRadius: spacing.regular,
  //   backgroundColor: colors.darkgray,
  // },
  container: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  layer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
