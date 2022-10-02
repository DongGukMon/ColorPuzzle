import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import MainButton from '../component/MainButton';
import {isStartedState, selectedPatternState, themeState} from '../atom/shared';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {getDatabase, ref, set} from 'firebase/database';
import firebaseInit from '../utils/firebaseInit';

firebaseInit();

const {width} = Dimensions.get('window');

const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const UpperBox = styled.View`
  width: 100%;
  height: 15%;
  justify-content: flex-end;
  align-items: center;
`;
const MiddleBox = styled.View`
  flex: 1;
`;
const LowerBox = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
`;
const RadioContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const RadioBtn = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 5px;
  border-color: white;
  background-color: ${(props: {
    theme: {[k: string]: string};
    isSelected: boolean;
  }) => (props.isSelected ? props.theme.main : 'transparent')};
  margin: 0px 7px;
`;
const RadioText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 36px;
`;

const FlexBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const ContentContainer = styled.View`
  width: 85%;
  height: 100%;
  background-color: ${(props: {theme: {[k: string]: any}}) => props.theme.main};
  border-radius: 10px;
`;

const PatternItem = styled.View`
  width: ${width * 0.85}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const PatternText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.text};
`;

const Home = () => {
  const setIsStarted = useCallback(useSetRecoilState(isStartedState), []);
  const theme = useRecoilValue(themeState);
  const [selectedPattern, setSelectedPattern] =
    useRecoilState(selectedPatternState);

  const [bgColor, setBgColor] = useState(new Animated.Value(0));
  const [isColorReset, setIsColorReset] = useState(false);
  const animatedColor = isColorReset
    ? bgColor.interpolate({
        inputRange: [4, 5],
        outputRange: [theme.fourth, theme.fifth],
      })
    : bgColor.interpolate({
        inputRange: [0, 1, 2, 3, 4],
        outputRange: [
          theme.fifth,
          theme.first,
          theme.second,
          theme.third,
          theme.fourth,
        ],
      });

  const colorChange = async (nowColor: any) => {
    Animated.timing(nowColor, {
      toValue: 4,
      duration: 8000,
      useNativeDriver: false,
    } as any).start(() => {
      setIsColorReset(true);
      Animated.timing(nowColor, {
        toValue: 5,
        duration: 2000,
        useNativeDriver: false,
      } as any).start(() => {
        setIsColorReset(false);
        setBgColor(new Animated.Value(0));
      });
    });
  };

  useEffect(() => {
    colorChange(bgColor);
  }, [bgColor]);

  const _renderItem = ({item}: {item: string}) => {
    return (
      <PatternItem>
        <PatternText>{item} pattern</PatternText>
      </PatternItem>
    );
  };

  const patternItem = ['A', 'B', 'C'];

  const onScrollEnd = (e: any) => {
    const contnetOffset = e.nativeEvent.contentOffset.x;
    const nowIndex = Math.floor(
      Math.floor(contnetOffset) / Math.floor(width * 0.85),
    );
    setSelectedPattern(patternItem[nowIndex]);
  };

  return (
    <Animated.View style={{flex: 1, backgroundColor: animatedColor}}>
      <SafeAreaView style={{flex: 1}}>
        <UpperBox>
          <Title>Align to {theme.targetColor}</Title>
        </UpperBox>
        <MiddleBox>
          <FlexBox style={{height: 90}}>
            <ContentContainer>
              <FlatList
                data={patternItem}
                keyExtractor={item => item}
                renderItem={_renderItem}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={onScrollEnd}
                showsHorizontalScrollIndicator={false}
              />
            </ContentContainer>
          </FlexBox>
          <FlexBox style={{flex: 1}}>
            <ContentContainer></ContentContainer>
          </FlexBox>

          {/* {['A', 'B', 'C'].map((type: string) => {
          return (
            <RadioContainer
              key={type}
              onPress={() => {
                setSelectedPattern(type);
              }}>
              <RadioBtn isSelected={selectedPattern === type} />
              <RadioText>pattern {type}</RadioText>
            </RadioContainer>
          );
        })} */}
        </MiddleBox>
        <LowerBox>
          <MainButton text="도전하기" callback={() => setIsStarted(true)} />
        </LowerBox>
      </SafeAreaView>
    </Animated.View>
  );
};
export default Home;
