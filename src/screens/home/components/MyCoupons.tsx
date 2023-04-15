import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { FstImage, Text } from '@shared-components';
import { colors, CONTAINER_FLUID_SPACING, sizeScale, spacing } from '@theme';
import { images } from '@images';

interface Props {
  availableCoins: number;
  onBenefit: () => void;
  onCoupon: () => void;
}

export const MyCoupons = ({ availableCoins, onBenefit, onCoupon }: Props) => {
  return (
    <ImageBackground source={images.bg_coupon} style={styles.container}>
      <Text h4 color={colors.neutral1} bold bottom={spacing.small}>
        Available Coin balance
      </Text>
      <Text style={styles.textAvailable}>{availableCoins}</Text>
      <View>
        <View style={styles.processBar} />
        <View
          style={[styles.processBar, styles.processActive, { width: '60%' }]}
        />
      </View>

      <Text
        h4
        color={colors.neutral1}
        top={spacing.default}
        bottom={spacing.double}
      >
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnBenefit}
        onPress={onBenefit}
      >
        <Text h4 color={colors.blue_dark}>
          View tier benefits
        </Text>
        <FstImage
          source={images.ic_back}
          color={colors.blue_dark}
          style={styles.icRight}
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnCoupon}
        onPress={onCoupon}
      >
        <Text h3 color={colors.white} bold>
          My Coupons
        </Text>
      </TouchableOpacity>
      <Text
        h5
        color={colors.neutral1}
        top={spacing.regular}
        style={{ alignSelf: 'center' }}
      >
        Updated: 02/11/2021
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: spacing.small,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.icon,
    shadowColor: colors.shadow,
    marginHorizontal: CONTAINER_FLUID_SPACING,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  textAvailable: {
    fontSize: sizeScale(48),
    fontWeight: '400',
    marginBottom: spacing.medium,
  },
  processBar: {
    height: sizeScale(6),
    width: '100%',
    backgroundColor: colors.line,
    borderRadius: sizeScale(3),
    marginVertical: spacing.medium,
  },
  processActive: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.blue_dark,
  },
  btnBenefit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icRight: {
    transform: [{ rotate: '180deg' }],
  },
  btnCoupon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: sizeScale(4),
    paddingVertical: spacing.regular,
    marginTop: spacing.medium,
  },
});
