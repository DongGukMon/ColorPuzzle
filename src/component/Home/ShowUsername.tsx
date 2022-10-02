import React, {useEffect} from 'react';
import {TextInput} from 'react-native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import styled from 'styled-components/native';
import {themeState, usernameState} from '../../atom/shared';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

interface styleProps {
  theme: {[k: string]: string};
}

const SInputContainer = styled.View`
  height: 50px;
  width: 100%;
  border-left-width: 4px;
  border-color: ${(props: styleProps) => props.theme.modalMain};
  flex-direction: row;
`;

const SaveBtn = styled.TouchableOpacity`
  height: 100%;
  width: 60px;
  background-color: ${(props: styleProps) => props.theme.modalMain};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const FlexView = styled.View`
  flex: 1;
  justify-content: center;
`;

const NameText = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const InputContainer = ({setEdited}: {setEdited: Function}) => {
  const currentTheme = useRecoilValue(themeState);
  const username = useRecoilValue(usernameState);

  return (
    <SInputContainer>
      <FlexView>
        <NameText>{username}</NameText>
      </FlexView>
      <SaveBtn
        onPress={() => {
          setEdited(false);
        }}>
        <Icon name="pencil" size={24} color={currentTheme.text} />
      </SaveBtn>
    </SInputContainer>
  );
};

export default React.memo(InputContainer);
