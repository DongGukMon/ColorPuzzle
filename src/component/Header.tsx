import React, {useEffect, useInsertionEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {Stopwatchs} from 'react-native-stopwatch-timer/d';
import {useRecoilState, useRecoilValue} from 'recoil';
import {themeState, stopwatchPropsState} from '../atom/shared';

const SHeader = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0px;

  align-items: center;
`;
const BackBtn = styled.TouchableOpacity`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 50px;
  left: 20px;
  justify-content: center;
  align-items: center;
`;

interface HeaderProps {
  setIsStarted: Function;
  isEnded: boolean;
}

const Header = ({setIsStarted, isEnded}: HeaderProps) => {
  const [stopwatchState, setStopwatchState] =
    useRecoilState(stopwatchPropsState);
  const theme = useRecoilValue(themeState);
  let record = '00:00:00:000';
  useEffect(() => {
    if (isEnded) {
      setStopwatchState({
        start: false,
        stop: true,
        reset: false,
        record,
      });
    } else {
      setStopwatchState({
        start: true,
        stop: false,
        reset: false,
        record,
      });
    }
  }, [isEnded]);

  return (
    <SHeader>
      <BackBtn onPress={() => setIsStarted(false)}>
        <Icon name="arrow-back" size={30} />
      </BackBtn>
      <Stopwatchs
        start={stopwatchState.start}
        reset={stopwatchState.reset}
        stop={stopwatchState.stop}
        msecs={true}
        getTime={(time: string) => (record = time)}
        options={{
          text: {
            fontSize: 26,
            fontWeight: 'bold',
            color: theme.text,
            marginTop: 50,
          },
        }}
      />
    </SHeader>
  );
};

export default React.memo(Header);
