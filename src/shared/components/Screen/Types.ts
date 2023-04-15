import React from 'react';
import { InsetsProps } from '../Insets/Types';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ScreenProps extends InsetsProps {
  /**
   * Children of Screen
   */
  children?: React.ReactNode;

  /**
   * Overwrite style of screen
   * @default undefined
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Color of Screen
   * @default transparent
   */
  backgroundColor?: string;

  /**
   * Using scroll content
   * @default false
   */
  scroll?: boolean;

  /**
   * Animated onScroll
   * @default undefined
   */
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

  /**
   * Using bounces for scroll
   * @default true
   */
  bounces?: boolean;
}
