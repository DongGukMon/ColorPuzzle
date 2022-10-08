import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Stopwatch from '../utils/stopwatch';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
  themeState,
  stopwatchPropsState,
  selectedPatternState,
  usernameState,
} from '../atom/shared';
import {checkRecord} from '../utils/whiteRecord';
import {Platform} from 'react-native';

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
  top: ${(props: {isIos: boolean}) => (props.isIos ? 50 : 25)}px;

  left: 20px;
  justify-content: center;
  align-items: center;
`;

interface HeaderProps {
  setIsStarted: Function;
  isEnded: boolean;
  setIsFailModalVisible: Function;
  isFailed: boolean;
}

const Header = ({
  setIsStarted,
  isEnded,
  setIsFailModalVisible,
  isFailed,
}: HeaderProps) => {
  const [stopwatchState, setStopwatchState] =
    useRecoilState(stopwatchPropsState);
  const theme = useRecoilValue(themeState);
  const selectedPattern = useRecoilValue(selectedPatternState);
  const username = useRecoilValue(usernameState);
  let record = '00:00:000';

  const isIos = Platform.OS === 'ios';

  useEffect(() => {
    if (isEnded) {
      setStopwatchState({
        start: false,
        stop: true,
        reset: false,
        record,
      });
      Boolean(username) && checkRecord(record, username, selectedPattern);
    } else {
      setStopwatchState({
        start: true,
        stop: false,
        reset: false,
        record,
      });
    }
  }, [isEnded]);

  useEffect(() => {
    if (isFailed) {
      setStopwatchState({
        start: false,
        stop: true,
        reset: true,
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
  }, [isFailed]);

  return (
    <SHeader>
      <BackBtn onPress={() => setIsStarted(false)} isIos={isIos}>
        <Icon name="chevron-back-outline" size={30} color={theme.text} />
      </BackBtn>

      <Stopwatch
        start={stopwatchState.start}
        reset={stopwatchState.reset}
        stop={stopwatchState.stop}
        msecs={true}
        getTime={(time: string) => {
          record = time;

          if (record.startsWith('59:59:9')) {
            record = '60:00:000';
            setIsFailModalVisible(true);
          }
        }}
        options={{
          text: {
            fontSize: 26,
            fontWeight: 'bold',
            color: theme.text,
            marginTop: isIos ? 50 : 25,
          },
        }}
      />
    </SHeader>
  );
};

export default React.memo(Header);
