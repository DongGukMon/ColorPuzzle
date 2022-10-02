import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

interface ModalLayoutProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalLayout = ({children, isVisible}: ModalLayoutProps) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <ModalBackground>{children}</ModalBackground>
    </Modal>
  );
};

export default ModalLayout;
