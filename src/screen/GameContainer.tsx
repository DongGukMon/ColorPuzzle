import React, {useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import styled from 'styled-components/native';
import GamePage from './GamePage';
import Icon from 'react-native-vector-icons/Ionicons';
import {numberToName} from '../utils/numberToName';
import {isStartedState, puzzleSetState} from '../atom/shared';
import {useSetRecoilState, useRecoilValue} from 'recoil';
import {isAllSame} from '../utils/isAllSame';
import CompleteModal from '../component/CompleteModal';

const {width} = Dimensions.get('window');

const Header = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0px;

  justify-content: center;
  padding: 20px;
`;
const BackBtn = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
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
  const [isModalVisible, setIsModalVisible] = useState(true);
  const setIsStarted = useSetRecoilState(isStartedState);
  const puzzleSet = useRecoilValue(puzzleSetState);

  if (isAllSame(Object.values(puzzleSet))) {
    setIsModalVisible(true);
  }

  return (
    <View style={{flex: 1}}>
      <CompleteModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <GamePage index={focusedIndex} />
      <Header>
        <BackBtn onPress={() => setIsStarted(false)}>
          <Icon name="close" size={30} />
        </BackBtn>
      </Header>
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
