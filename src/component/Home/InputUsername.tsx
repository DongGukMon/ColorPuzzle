import React, {useEffect} from 'react';
import {TextInput} from 'react-native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import styled from 'styled-components/native';
import {themeState, usernameState} from '../../atom/shared';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface styleProps {
  theme: {[k: string]: string};
  disable: boolean;
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
  justify-content: center;
`;

const NameTextInput = styled.TextInput`
  color: ${(props: styleProps) => props.theme.text};
  margin-left: 10px;
  font-size: 16px;
`;

const InputContainer = ({setEdited}: {setEdited: Function}) => {
  const currentTheme = useRecoilValue(themeState);
  const [username, setUsername] = useRecoilState(usernameState);
  const {register, watch, getValues, setValue} = useForm();

  const name = 'username';

  const storeName = async (value: string) => {
    try {
      const replacedName = value.replace(/ /g, '');

      await AsyncStorage.setItem(name, replacedName).then(() => {
        setUsername(replacedName);
        Boolean(replacedName) && setEdited(true);
        setValue(name, '');
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    register(name, {
      maxLength: 30,
    });
  }, [register]);

  useEffect(() => {
    setValue(name, username);
  }, []);

  return (
    <SInputContainer>
      <FlexView>
        <NameTextInput
          placeholder="닉네임을 입력해주세요"
          placeholderTextColor={currentTheme.placeholder}
          onChangeText={(text: string) => setValue(name, text)}
          maxLength={30}
          value={watch(name)}
        />
      </FlexView>
      <SaveBtn
        onPress={() => {
          storeName(getValues(name));
        }}>
        <SaveText>SAVE</SaveText>
      </SaveBtn>
    </SInputContainer>
  );
};

export default React.memo(InputContainer);
