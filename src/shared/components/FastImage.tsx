import React from 'react';
import FastImage from 'react-native-fast-image';
interface Props {
  source?: any;
  uri?: string | null;
  size?: number;
  style?: any;
  resizeMode?: any;
  color?: string;
}
export const FstImage = ({
  source,
  uri,
  size,
  style,
  color,
  resizeMode = 'contain',
}: Props) => {
  return (
    <FastImage
      resizeMode={resizeMode}
      tintColor={color}
      style={[size && { height: size, width: size }, style]}
      source={uri ? { uri } : source}
    />
  );
};
