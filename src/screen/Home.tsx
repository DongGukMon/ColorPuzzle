import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import MainButton from '../component/MainButton';
import {isStartedState, selectedPatternState, themeState} from '../atom/shared';
import {Animated} from 'react-native';
import {getDatabase, ref, set} from 'firebase/database';
import firebaseInit from '../utils/firebaseInit';

firebaseInit();

const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const UpperBox = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const MiddleBox = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const LowerBox = styled.View`
  flex: 2;
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

  return (
    <Animated.View style={{flex: 1, backgroundColor: animatedColor}}>
      <UpperBox>
        <Title>Align to {theme.targetColor}</Title>
      </UpperBox>
      <MiddleBox>
        {['A', 'B', 'C'].map((type: string) => {
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
        })}
      </MiddleBox>
      <LowerBox>
        <MainButton text="도전하기" callback={() => setIsStarted(true)} />
      </LowerBox>
    </Animated.View>
  );
};
export default Home;
