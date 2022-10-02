import React from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';

import styled from 'styled-components/native';

interface ModalLayoutProps {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: Function;
}

const OutOfContent = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
`;

const ClosableModalLayout = ({
  children,
  isVisible,
  setIsVisible,
}: ModalLayoutProps) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <OutOfContent onPress={() => setIsVisible(false)}>
        <TouchableWithoutFeedback onPress={() => {}}>
          {children}
        </TouchableWithoutFeedback>
      </OutOfContent>
    </Modal>
  );
};

export default ClosableModalLayout;
