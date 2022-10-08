import React, {useState} from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import styled from 'styled-components/native';
import {selectedPatternState, themeState} from '../../atom/shared';
import Icon from 'react-native-vector-icons/Ionicons';
import {returnOffset} from '../../utils/returnOffset';

const ChevronBtn = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const PatternItem = styled.View`
  width: ${(props: {width: number}) => {
    return props.width * 0.84;
  }}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const PatternText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.text};
`;

const PatternCarousel = () => {
  const {width} = useWindowDimensions();
  const currentTheme = useRecoilValue(themeState);
  const [selectedPattern, setSelectedPattern] =
    useRecoilState(selectedPatternState);

  const [currentPattern, setCurrentPattern] = useState(
    returnOffset(selectedPattern, 'current', width),
  );

  const _renderItem = ({item}: {item: string}) => {
    return (
      <PatternItem width={width}>
        <PatternText>{item} pattern</PatternText>
      </PatternItem>
    );
  };

  const patternItem = ['A', 'B', 'C'];

  const onScrollEnd = (e: any) => {
    const contnetOffset = e.nativeEvent.contentOffset.x;

    const nowIndex = Math.floor(
      Math.floor(contnetOffset + 50) / Math.floor(width * 0.85),
    );

    setSelectedPattern(patternItem[nowIndex]);
  };

  const onChevronPress = (type: 'prev' | 'current' | 'next') => {
    const offset = returnOffset(selectedPattern, type, width);
    setCurrentPattern(offset);
    setSelectedPattern(patternItem[offset.x / (width * 0.85)]);
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
      <FlatList
        data={patternItem}
        keyExtractor={item => item}
        renderItem={_renderItem}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        contentOffset={currentPattern}
      />
    </>
  );
};

export default React.memo(PatternCarousel);
