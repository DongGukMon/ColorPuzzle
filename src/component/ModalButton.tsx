import React from 'react';
import styled from 'styled-components/native';

interface styleProps {
  theme: {[key: string]: string};
  backgroundColor: string;
}
interface ModalButtonProps {
  text: string;
  callback: Function;
  backgroundColor: string;
}

const SMainButton = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  background-color: ${(props: styleProps) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
const MainButton = ({text, callback, backgroundColor}: ModalButtonProps) => {
  return (
    <SMainButton backgroundColor={backgroundColor} onPress={callback}>
      <BtnText>{text}</BtnText>
    </SMainButton>
  );
};

export default React.memo(MainButton);
