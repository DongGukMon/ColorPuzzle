import React from 'react';
import styled from 'styled-components/native';

interface styleProps {
  theme: {[key: string]: string};
  isFill: boolean;
}
interface ModalButtonProps {
  text: string;
  callback: Function;
  type: 'fill' | 'empty';
}

const SMainButton = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  background-color: ${(props: styleProps) =>
    props.isFill ? props.theme.modalMain : props.theme.main};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props: styleProps) => props.theme.modalMain};
`;
const BtnText = styled.Text`
  color: ${(props: styleProps) =>
    props.isFill ? props.theme.main : props.theme.modalMain};
  font-size: 24px;
  font-weight: bold;
`;
const MainButton = ({text, callback, type = 'fill'}: ModalButtonProps) => {
  const isFill = type === 'fill';
  return (
    <SMainButton isFill={isFill} onPress={callback}>
      <BtnText isFill={isFill}>{text}</BtnText>
    </SMainButton>
  );
};

export default React.memo(MainButton);
