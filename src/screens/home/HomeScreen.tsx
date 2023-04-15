import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Block, Screen } from '@shared-components';
import { colors } from '@theme';
import { Header, MyCoupons, SectionItem } from '@screens/home/components';
import HomeService from '@screens/home/services/HomeService';
import { useSelector } from 'react-redux';
import { useHomeStyles } from '@screens/home/styles';
import { MainState } from '@services/redux/RootReducer';
import { IDataSectionItem } from '@services/models';

export const HomeScreen = ({}: any) => {
  const styles = useHomeStyles();
  const { sections } = useSelector((state: MainState) => state.home);

  useEffect(() => {
    HomeService.getSectionRequest();
  }, []);

  const _onBack = () => {
    console.log('_onBack');
  };

  const _onCoupon = () => {
    console.log('_onCoupon');
  };

  const _onBenefit = () => {
    console.log('_onBenefit');
  };

  const _onInsufficient = (item: IDataSectionItem) => {
    console.log(item);
    console.log('_onInsufficient');
  };

  const _onDetailItemSection = (item: IDataSectionItem) => {
    console.log(item);
    console.log('_onDetailItemSection');
  };

  return (
    <Screen
      unsafe
      statusBarStyle="light-content"
      backgroundColor={colors.white}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      >
        <Block style={styles.overlay} />
        <Header onBack={_onBack} />
        <MyCoupons
          availableCoins={340}
          onCoupon={_onCoupon}
          onBenefit={_onBenefit}
        />
        {!!sections?.records?.length &&
          sections.records.map((section) => (
            <SectionItem
              key={section.id}
              section={section}
              onInsufficient={_onInsufficient}
              onDetail={_onDetailItemSection}
            />
          ))}
      </ScrollView>
    </Screen>
  );
};
