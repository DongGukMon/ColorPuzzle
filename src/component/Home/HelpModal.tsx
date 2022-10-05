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

const {width, height} = Dimensions.get('window');

const EnrollModal = ({isVisible, setIsVisible}: HeplModalProps) => {
  const username = useRecoilValue(usernameState);

  const [edited, setEdited] = useState(false);

  useEffect(() => {
    //처음에 username이 공백이었다가 업데이트 되기 때문에 edited은 항상 false로 찍히고
    //그 초기값으로 렌더링되는 문제 해결을 위해
    setEdited(Boolean(username));
  }, [username]);

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
