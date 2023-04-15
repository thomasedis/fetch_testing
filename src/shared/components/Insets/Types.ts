import { Edge } from 'react-native-safe-area-context';

export type InsetsProps = {
  edges?: Edge[];

  /**
   * Status bar style
   * @default dark-content
   */
  statusBarStyle?: 'light-content' | 'dark-content';

  /**
   * Using safe area on ios
   * @default false
   */
  unsafe?: boolean;

  /**
   * Visibility status bar
   * @default true
   */
  hiddenStatusBar?: boolean;

  /**
   * Color of status bar for both Android/IOS
   */
  statusColor?: string;

  /**
   * Color of inset bottom
   * @default #ffffff
   */
  bottomInsetColor?: string;

  /**
   * Color of inset left
   * @default #ffffff
   */
  leftInsetColor?: string;

  /**
   * Color of inset left
   * @default #ffffff
   */
  rightInsetColor?: string;

  /**
   * Inset for safe area view
   * @default undefined
   */
  excludeEdges?: 'all' | Edge[];
};

export interface InsetProps {
  color?: string;
  height: number;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}
