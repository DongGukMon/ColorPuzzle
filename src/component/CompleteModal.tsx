import React, {useCallback} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components/native';
import {isStartedState, puzzleSetState} from '../atom/shared';
import {shuffle} from '../utils/shuffle';
import ModalButton from './ModalButton';

const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContainer = styled.View`
  height: 350px;
  width: 85%;
  background-color: ${(props: {theme: {[k: string]: string}}) =>
    props.theme.main};
  border-radius: 15px;
  overflow: hidden;
  padding: 0px 10px;
  border-width: 4px;
  border-color: ${(props: {theme: {[k: string]: string}}) =>
    props.theme.modalMain};
`;

const Title = styled.Text`
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.modalMain};
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;

  font-style: italic;
`;

const Record = styled.Text`
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.modalMain};
  font-size: 64px;
  font-weight: bold;
`;
const SectionBox = styled.View`
  justify-content: center;
  align-items: center;
  height: ${(props: {height: number}) => props.height}px;
`;
const ButtonContainer = styled(SectionBox)`
  flex-direction: row;
  justify-content: space-around;
`;

const CompleteModal = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Function;
}) => {
  const setIsStarted = useSetRecoilState(isStartedState);
  const setPuzzleSet = useSetRecoilState(puzzleSetState);

  const onRetryClick = useCallback(() => {
    setIsVisible(false);
    setPuzzleSet(shuffle());
  }, []);
  const onMainClick = useCallback(() => {
    setIsVisible(false);
    setIsStarted(false);
  }, []);
  return (
    <Modal visible={isVisible} transparent={true}>
      <ModalBackground>
        <ModalContainer>
          <SectionBox height={70}>
            <Title>It's lined up in sky blue</Title>
          </SectionBox>
          <SectionBox height={160}>
            <Record>15:35:05</Record>
          </SectionBox>
          <ButtonContainer height={120}>
            <ModalButton text="다시하기" callback={onRetryClick} type="fill" />
            <ModalButton text="메인으로" callback={onMainClick} type="empty" />
          </ButtonContainer>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default CompleteModal;
