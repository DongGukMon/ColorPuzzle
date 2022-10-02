import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import MainButton from '../component/MainButton';
import {isStartedState, themeState} from '../atom/shared';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {getDatabase, ref, set} from 'firebase/database';
import firebaseInit from '../utils/firebaseInit';

import HomeContents from '../component/Home/HomeContents';
import EnrollModal from '../component/Home/EnrollModal';

firebaseInit();

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

const LowerBox = styled.View`
  height: 20%;
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
  }, [bgColor]);

  return (
    <Animated.View style={{flex: 1, backgroundColor: animatedColor}}>
      {/* <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={70}> */}
      <EnrollModal />
      <SafeAreaView style={{flex: 1}}>
        <UpperBox>
          <Title>Align to {theme.targetColor}</Title>
        </UpperBox>

        <HomeContents />
        <LowerBox>
          <MainButton text="도전하기" callback={() => setIsStarted(true)} />
        </LowerBox>
      </SafeAreaView>
      {/* </KeyboardAvoidingView> */}
    </Animated.View>
  );
};
export default Home;
