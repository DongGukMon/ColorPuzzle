import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import styled from 'styled-components/native';

interface ModalLayoutProps {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: Function;
}

const OutOfContent = styled.TouchableOpacity`
  flex: 1;

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
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.25)'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}>
        <OutOfContent onPress={() => setIsVisible(false)}>
          <TouchableWithoutFeedback onPress={() => {}}>
            {children}
          </TouchableWithoutFeedback>
        </OutOfContent>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ClosableModalLayout;
