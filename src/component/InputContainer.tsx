import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

interface styleProps {
  theme: {[k: string]: string};
}

const SInputContainer = styled.View`
  height: 50px;
  width: 100%;
  border-width: 2px;
  border-color: ${(props: styleProps) => props.theme.modalMain};
  flex-direction: row;
`;

const SaveBtn = styled.TouchableOpacity`
  height: 100%;
  width: 60px;
  background-color: ${(props: styleProps) => props.theme.modalMain};
  justify-content: center;
  align-items: center;
`;
const SaveText = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  font-weight: 600;
  font-size: 16px;
  font-style: italic;
`;

const FlexView = styled.View`
  flex: 1;
`;

const InputContainer = () => {
  return (
    <SInputContainer>
      <FlexView>
        <TextInput />
      </FlexView>
      <SaveBtn>
        <SaveText>SAVE</SaveText>
      </SaveBtn>
    </SInputContainer>
  );
};

export default React.memo(InputContainer);
