import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import {useRecoilValue} from 'recoil';
import {themeState} from '../atom/shared';
import {Platform} from 'react-native';

const SHeader = styled.View`
  z-index: 1;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0px;
  align-items: center;
`;
const HelpBtn = styled.TouchableOpacity`
  position: absolute;
  width: 35px;
  height: 35px;
  top: ${(props: {isIos: boolean}) => (props.isIos ? 50 : 25)}px;
  right: 20px;
  justify-content: center;
  align-items: center;
`;

const HomeHeader = ({setIsVisible}: {setIsVisible: Function}) => {
  const theme = useRecoilValue(themeState);
  const isIos = Platform.OS === 'ios';

  return (
    <SHeader>
      <HelpBtn
        onPress={() => {
          setIsVisible(true);
        }}
        isIos={isIos}>
        <Icon name="help-circle-outline" size={36} color={theme.text} />
      </HelpBtn>
    </SHeader>
  );
};

export default React.memo(HomeHeader);
