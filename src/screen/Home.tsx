import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import MainButton from '../component/MainButton';
import {isStartedState, themeState} from '../atom/shared';
import {Animated} from 'react-native';

interface styleProps {
  theme: {[key: string]: string};
}

// const Container = styled`
//   flex: 1;
//   background-color: ${(props: styleProps) => props.theme.fifth};
// `;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const UpperBox = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const LowerBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const setIsStarted = useCallback(useSetRecoilState(isStartedState), []);
  const theme = useRecoilValue(themeState);
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
    console.log('?');
    console.log(bgColor);
  }, [bgColor]);

  return (
    <Animated.View style={{flex: 1, backgroundColor: animatedColor}}>
      <UpperBox>
        <Title>Align to {theme.targetColor}</Title>
      </UpperBox>
      <LowerBox>
        <MainButton text="도전하기" callback={() => setIsStarted(true)} />
      </LowerBox>
    </Animated.View>
  );
};
export default Home;
