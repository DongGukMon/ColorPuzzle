import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
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
  padding: 10px;
`;

const Title = styled.Text`
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.text};
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  opacity: 0.8;
  font-style: italic;
`;

const Record = styled.Text`
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.fifth};
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
  return (
    <Modal visible={isVisible} transparent={true}>
      <ModalBackground>
        <ModalContainer>
          <SectionBox height={50}>
            <Title>It's lined up in sky blue</Title>
          </SectionBox>
          <SectionBox height={190}>
            <Record>15:35</Record>
          </SectionBox>
          <ButtonContainer height={100}>
            <ModalButton
              text="다시하기"
              callback={() => {}}
              backgroundColor="tomato"
            />
            <ModalButton
              text="메인으로"
              callback={() => {}}
              backgroundColor="green"
            />
          </ButtonContainer>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default CompleteModal;
