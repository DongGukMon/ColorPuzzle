import React, {useState} from 'react';
import {Image, ScrollView, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {themeState} from '../../atom/shared';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRecoilValue} from 'recoil';

const {width, height} = Dimensions.get('window');

const contentTexts: {
  [k: string]: {title: string; body: string; route: number};
} = {
  0: {
    title: '클리어 조건',
    body: '클릭시 특정 패턴에 따라 색상이 변하는 5개의 페이지를 모두 sky blue 색상으로 맞추면 게임이 클리어됩니다. (다크모드의 경우 진한 남색입니다.)',
    route: require('../../assets/0.gif'),
  },
  1: {
    title: 'A 패턴',
    body: '클릭시 특정 패턴에 따라 색상이 변하는 5개의 페이지를 모두 sky blue 색상으로 맞추면 게임이 클리어됩니다. (다크모드의 경우 진한 남색입니다.)',
    route: require('../../assets/1.gif'),
  },
  2: {
    title: 'B 패턴',
    body: '클릭시 특정 패턴에 따라 색상이 변하는 5개의 페이지를 모두 sky blue 색상으로 맞추면 게임이 클리어됩니다. (다크모드의 경우 진한 남색입니다.)',
    route: require('../../assets/2.gif'),
  },
  3: {
    title: 'C 패턴',
    body: '클릭시 특정 패턴에 따라 색상이 변하는 5개의 페이지를 모두 sky blue 색상으로 맞추면 게임이 클리어됩니다. (다크모드의 경우 진한 남색입니다.)',
    route: require('../../assets/3.gif'),
  },
};

interface styleProps {
  theme: {[k: string]: string};
  isFocused: boolean;
}

const ChevronBtn = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  height: 80%;
  justify-content: center;
`;

const ContentTextBox = styled.View`
  margin: 10px 0px;
  height: 150px;
  width: 100%;
`;
const ContentTitle = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;
const ContentText = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.View`
  width: ${(props: {carouselItemSize: {w: number; h: number}}) =>
    props.carouselItemSize.w}px;
  padding: 0px 35px;
  height: 85%;
`;

const DotContainer = styled.View`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Dot = styled.View`
  width: 7px;
  height: 7px;
  margin: 0px 5px;
  border-width: 1px;
  border-color: ${(props: styleProps) => props.theme.text};
  background-color: ${(props: styleProps) =>
    props.isFocused ? props.theme.text : props.theme.main};
  border-radius: 10px;
`;

const indexToOffset = (
  index: number,
  itemWidth: number,
  type: 'prev' | 'current' | 'next',
) => {
  let x = 0;
  if (type === 'current') {
    x = itemWidth * index;
  } else if (type === 'prev') {
    const prevIndex = index === 0 ? index : index - 1;
    x = itemWidth * prevIndex;
  } else if (type === 'next') {
    const nextIndex = index === 3 ? index : index + 1;
    x = itemWidth * nextIndex;
  }
  return {x, y: 0};
};

const HelpCarousel = () => {
  const currentTheme = useRecoilValue(themeState);
  const [carouselItemSize, setCarouselItemSize] = useState({w: 0, h: 0});

  const [currentIndex, setCurrentIndex] = useState(0);

  const fakeArray = Array.from({length: 4});

  const _renderItem = (index: number) => {
    return (
      <ItemContainer key={index} carouselItemSize={carouselItemSize}>
        <ContentTextBox>
          <ContentTitle>{contentTexts[index].title}</ContentTitle>
          <ContentText>{contentTexts[index].body}</ContentText>
        </ContentTextBox>
        <View style={{flex: 1}}>
          <Image style={{width: '100%'}} source={contentTexts[index].route} />
        </View>
      </ItemContainer>
    );
  };

  const onScrollEnd = (e: any) => {
    const contentOffset = e.nativeEvent.contentOffset.x;

    const nowIndex = Math.floor(
      Math.floor(contentOffset + 50) / carouselItemSize.w,
    );

    setCurrentIndex(nowIndex);
  };

  const onChevronPress = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      currentIndex !== 0 && setCurrentIndex(currentIndex - 1);
    } else if (type === 'next') {
      currentIndex !== 3 && setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <ChevronBtn
        onPress={() => {
          onChevronPress('prev');
        }}>
        <Icon name="chevron-back-outline" size={30} color={currentTheme.text} />
      </ChevronBtn>
      <ChevronBtn
        onPress={() => {
          onChevronPress('next');
        }}
        style={{right: 0}}>
        <Icon
          name="chevron-forward-outline"
          size={30}
          color={currentTheme.text}
        />
      </ChevronBtn>

      <ScrollView
        onMomentumScrollEnd={onScrollEnd}
        horizontal
        pagingEnabled
        contentContainerStyle={{width: `${100 * 4}%`}}
        scrollEventThrottle={200}
        decelerationRate="fast"
        onContentSizeChange={(w, h) => setCarouselItemSize({w: w / 4, h})}
        contentOffset={indexToOffset(
          currentIndex,
          carouselItemSize.w,
          'current',
        )}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{flexDirection: 'row'}}
          onStartShouldSetResponder={() => true}>
          {fakeArray.map((_, index) => {
            return _renderItem(index);
          })}
        </View>
      </ScrollView>
      <DotContainer>
        {fakeArray.map((_, index) => {
          const isFoused = currentIndex === index;
          return <Dot key={index} isFocused={isFoused} />;
        })}
      </DotContainer>
    </>
  );
};

export default React.memo(HelpCarousel);
