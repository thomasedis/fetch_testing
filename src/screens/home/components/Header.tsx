import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Block, FstImage, Text } from '@shared-components';
import { colors, CONTAINER_FLUID_SPACING, sizeScale, spacing } from '@theme';
import { images } from '@images';

interface Props {
  onBack: () => void;
}

export const Header = ({ onBack }: Props) => {
  return (
    <Block paddingHorizontal={CONTAINER_FLUID_SPACING}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnBack}
        onPress={onBack}
      >
        <FstImage source={images.ic_back} size={sizeScale(24)} />
      </TouchableOpacity>
      <Block>
        <Text h1 color={colors.white} bold>
          Silver Tier
        </Text>
        <Text
          h4
          color={colors.neutral1}
          top={spacing.small}
          bottom={spacing.large}
        >
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          redeem exclusive rewards.
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  btnBack: {
    backgroundColor: colors.white,
    width: sizeScale(50),
    height: sizeScale(50),
    borderRadius: sizeScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.medium,
    marginTop: spacing.picture,
  },
});
