import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import styled from 'styled-components/native';
import GamePage from './GamePage';
import {numberToName} from '../utils/numberToName';
import {isStartedState, puzzleSetState} from '../atom/shared';
import {useSetRecoilState, useRecoilValue, useRecoilState} from 'recoil';
import {isAllSame} from '../utils/isAllSame';
import CompleteModal from '../component/CompleteModal';
import Header from '../component/Header';
import {shuffle} from '../utils/shuffle';
import FailModal from '../component/FailMoal';

const {width} = Dimensions.get('window');

const ButtonContainer = styled.View`
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  flex-direction: row;
`;
const ButtonWrapper = styled.View`
  width: ${width / 5}px;
  height: ${width / 5}px;
  padding: 7px;
`;
const TabButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: ${(props: {color: string; theme: {[k: string]: string}}) =>
    props.theme[props.color]};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  border-color: white;
  border-width: ${(props: any) => (props.isFocused ? '4px' : '2px')};
`;
const BtnText = styled.Text`
  font-size: ${(props: {isFocused: boolean}) =>
    props.isFocused ? '24px' : '20px'};
  font-weight: ${(props: {isFocused: boolean}) =>
    props.isFocused ? 'bold' : '600'};
  color: white;
`;

const GameContainer = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFailModalVisible, setIsFailModalVisible] = useState(false);

  const setIsStarted = useSetRecoilState(isStartedState);
  const [puzzleSet, setPuzzleSet] = useRecoilState(puzzleSetState);

  if (isAllSame(Object.values(puzzleSet), true) && !isModalVisible) {
    setIsModalVisible(true);
  }
  useEffect(() => {
    setPuzzleSet(shuffle());
  }, []);

  return (
    <View style={{flex: 1}}>
      <CompleteModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <FailModal
        isVisible={isFailModalVisible}
        setIsVisible={setIsFailModalVisible}
      />
      <GamePage index={focusedIndex} />
      <Header
        setIsStarted={setIsStarted}
        isEnded={isModalVisible}
        isFailed={isFailModalVisible}
        setIsFailModalVisible={setIsFailModalVisible}
      />
      <ButtonContainer>
        {Array.from({length: 5}).map((_: unknown, index: number) => (
          <ButtonWrapper key={index}>
            <TabButton
              isFocused={focusedIndex === index}
              color={numberToName(index)}
              onPress={() => setFocusedIndex(index)}>
              <BtnText isFocused={focusedIndex === index}>{index + 1}</BtnText>
            </TabButton>
          </ButtonWrapper>
        ))}
      </ButtonContainer>
    </View>
  );
};
export default GameContainer;
