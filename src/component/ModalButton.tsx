import React from 'react';
import styled from 'styled-components/native';
import {stopwatchPropsState} from '../atom/shared';

interface styleProps {
  theme: {[key: string]: string};
  isFill: boolean;
  isComplete: boolean;
}
interface ModalButtonProps {
  text: string;
  callback: Function;
  type: 'fill' | 'empty';
  modal?: 'complete' | 'fail';
}

const SMainButton = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  background-color: ${(props: styleProps) =>
    props.isFill
      ? props.isComplete
        ? props.theme.modalMain
        : props.theme.third
      : props.theme.main};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props: styleProps) =>
    props.isComplete ? props.theme.modalMain : props.theme.third};
`;
const BtnText = styled.Text`
  color: ${(props: styleProps) =>
    props.isFill
      ? props.theme.main
      : props.isComplete
      ? props.theme.modalMain
      : props.theme.third};
  font-size: 24px;
  font-weight: bold;
`;
const MainButton = ({
  text,
  callback,
  type = 'fill',
  modal = 'complete',
}: ModalButtonProps) => {
  const isFill = type === 'fill';
  const isComplete = modal === 'complete';
  return (
    <SMainButton isComplete={isComplete} isFill={isFill} onPress={callback}>
      <BtnText isComplete={isComplete} isFill={isFill}>
        {text}
      </BtnText>
    </SMainButton>
  );
};

export default React.memo(MainButton);
