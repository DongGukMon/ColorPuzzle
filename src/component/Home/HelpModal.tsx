import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {usernameState} from '../../atom/shared';
import ClosableModalLayout from '../ClosableModalLayout';

import {
  ModalContainer,
  SectionBox,
  Separator,
  Title,
} from '../modal/modalComponents';
import HelpCarousel from './HelpCarousel';

interface HeplModalProps {
  isVisible: boolean;
  setIsVisible: Function;
}

const ContentContainer = styled.View`
  flex: 1;
`;

const EnrollModal = ({isVisible, setIsVisible}: HeplModalProps) => {
  return (
    <ClosableModalLayout isVisible={isVisible} setIsVisible={setIsVisible}>
      <ModalContainer>
        <SectionBox height={70}>
          <Title>How To Play This Game</Title>
        </SectionBox>
        <Separator />
        <ContentContainer>
          <HelpCarousel />
        </ContentContainer>
      </ModalContainer>
    </ClosableModalLayout>
  );
};
export default React.memo(EnrollModal);
