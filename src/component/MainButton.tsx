import React from 'react';
import styled from 'styled-components/native';

interface styleProps {
  theme: {[key: string]: string};
}

const SMainButton = styled.TouchableOpacity`
  width: 85%;
  height: 70px;
  background-color: ${(props: styleProps) => props.theme.fourth};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
const MainButton = ({text, callback}: {text: string; callback: Function}) => {
  return (
    <SMainButton onPress={callback}>
      <BtnText>{text}</BtnText>
    </SMainButton>
  );
};

export default React.memo(MainButton);
