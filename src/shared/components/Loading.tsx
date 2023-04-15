import { colors } from '@theme';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

const Loading: React.FC<{
  containerStyle?: StyleProp<ViewStyle>;
  isFullScreen?: boolean;
  isCoverScreen?: boolean;
}> = (props) => {
  const loadingStyle: any = [];
  if (props.isFullScreen) {
    loadingStyle.push(styles.center);
  }
  if (props.isCoverScreen) {
    loadingStyle.push(styles.cover);
  }

  return (
    <View style={[styles.loadingContainer, loadingStyle, props.containerStyle]}>
      <ActivityIndicator size="small" color={colors.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    margin: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  cover: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1000,
    margin: 0,
  },
});
