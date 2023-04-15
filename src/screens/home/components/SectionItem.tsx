import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Block, FstImage, Text } from '@shared-components';
import { colors, sizeScale, spacing } from '@theme';
import { images } from '@images';
import { get } from 'lodash';
import { numberFormat } from '@freakycoder/react-native-helpers';
import {
  IDataSectionItem,
  IRenderSectionItem,
  ISectionItem,
} from '@services/models';
import 'intl';
import 'intl/locale-data/jsonp/en';
interface Props {
  section: ISectionItem;
  onInsufficient: (item: IDataSectionItem) => void;
  onDetail: (item: IDataSectionItem) => void;
}

export const SectionItem = ({ section, onInsufficient, onDetail }: Props) => {
  const availableCoins = 340;

  const renderItem = ({ item, index }: IRenderSectionItem) => {
    const coins = get(item, 'coins', 0);
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.8}
        onPress={() => onDetail(item)}
        style={[
          styles.item,
          section.data.length - 1 === index && { marginRight: 0 },
        ]}
      >
        <FstImage
          source={{ uri: item?.image?.toString() }}
          style={styles.thumbnail}
        />
        <Block
          flex={1}
          padding={spacing.regular}
          justifyContent={'space-between'}
        >
          <Block>
            {coins < availableCoins ? (
              <Text
                h4
                bottom={sizeScale(6)}
                bold
                color={colors.blue_dark}
              >{`${numberFormat(coins)} Coins`}</Text>
            ) : (
              <Block
                flexDirection={'row'}
                alignItems={'center'}
                marginBottom={sizeScale(6)}
              >
                <FstImage
                  source={images.ic_l}
                  size={sizeScale(16)}
                  style={styles.icL}
                />
                <Text h4 bold color={colors.neutral3}>{`${numberFormat(
                  coins,
                )} Coins`}</Text>
              </Block>
            )}
            <Text h4 color={colors.neutral1} style={styles.des}>
              {get(item, 'des')}
            </Text>
          </Block>
          {coins > availableCoins && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onInsufficient(item)}
            >
              <Text h4 color={colors.blue_dark}>
                Insufficient coins
              </Text>
            </TouchableOpacity>
          )}
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block style={styles.container}>
      <Text h3 color={colors.primary} bold style={styles.title}>
        {get(section, 'name', '')}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={get(section, 'data', [])}
        decelerationRate="fast"
        snapToInterval={sizeScale(200)}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index?.toString()}
        onEndReachedThreshold={50}
        contentContainerStyle={styles.wrapList}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: spacing.double,
    paddingVertical: spacing.double,
  },
  container: {
    marginTop: spacing.medium,
  },
  wrapList: {
    paddingHorizontal: spacing.double,
    paddingBottom: spacing.regular,
  },
  item: {
    height: sizeScale(240),
    width: sizeScale(200),
    backgroundColor: colors.white,
    borderRadius: sizeScale(4),
    shadowColor: colors.shadow,
    marginRight: spacing.double,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  thumbnail: {
    width: sizeScale(200),
    height: sizeScale(100),
  },
  des: {
    lineHeight: sizeScale(24),
  },
  icL: {
    marginRight: sizeScale(5),
  },
});
