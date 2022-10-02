import styled from 'styled-components/native';
import React from 'react';
import {Dimensions, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {enrollModalVisibleState} from '../../atom/shared';
import InputContainer from '../InputContainer';
import ClosableModalLayout from '../ClosableModalLayout';

interface styleProps {
  theme: {[k: string]: string};
}

const {width} = Dimensions.get('window');

const ModalContainer = styled.View`
  height: 60%;
  width: 85%;
  background-color: ${(props: styleProps) => props.theme.main};
  border-radius: 15px;
  overflow: hidden;
  padding: 0px 10px;
  border-width: 4px;
  border-color: ${(props: styleProps) => props.theme.modalMain};
`;
const SectionBox = styled.View`
  justify-content: center;
  align-items: center;
  height: ${(props: {height: number}) => `${props.height}px`};
`;
const Title = styled.Text`
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.modalMain};
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;

  font-style: italic;
`;

const DescriptionSection = styled.ScrollView`
  flex: 1;
  background-color: tomato;
`;

const Separator = styled.View`
  height: 0.3px;
  width: ${width * 0.85 - 30}px;
  background-color: ${(props: styleProps) =>
    props.theme.name === 'dark'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0,0,0,0.7)'};
  align-self: center;
  margin: 10px 0px;
`;

const EnrollModal = () => {
  const [isVisible, setIsVisible] = useRecoilState(enrollModalVisibleState);
  return (
    <ClosableModalLayout isVisible={isVisible} setIsVisible={setIsVisible}>
      <ModalContainer>
        <SectionBox height={70}>
          <Title>Enter your nickname,</Title>
          <Title>Join the ranking</Title>
        </SectionBox>
        <Separator />
        <DescriptionSection>
          <View onStartShouldSetResponder={() => true}>
            <Title>hi</Title>
          </View>
        </DescriptionSection>
        <SectionBox height={100}>
          <InputContainer></InputContainer>
        </SectionBox>
      </ModalContainer>
    </ClosableModalLayout>
  );
};
export default React.memo(EnrollModal);
