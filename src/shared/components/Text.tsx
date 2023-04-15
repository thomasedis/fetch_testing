import React from 'react';
import RNText, { IRNTextProps } from '@freakycoder/react-native-custom-text';
/**
 * ? Local Imports
 */
import { fonts } from '@theme';

interface ITextWrapperProps extends IRNTextProps {
  fontFamily?: string;
  children?: React.ReactNode;
  top?: number;
  bottom?: number;
}

export const Text: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.arial,
  children,
  top,
  bottom,
  ...rest
}) => {
  return (
    <RNText
      fontFamily={fontFamily}
      {...rest}
      style={[
        rest.style,
        {
          marginTop: top ?? 0,
          marginBottom: bottom ?? 0,
        },
      ]}
    >
      {children}
    </RNText>
  );
};
