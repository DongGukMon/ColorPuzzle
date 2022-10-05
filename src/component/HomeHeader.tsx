import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import {useRecoilValue} from 'recoil';
import {themeState} from '../atom/shared';

const SHeader = styled.View`
  z-index: 1;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0px;
  align-items: center;
`;
const InfoBtn = styled.TouchableOpacity`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 50px;
  right: 20px;
  justify-content: center;
  align-items: center;
`;

const HomeHeader = ({setIsVisible}: {setIsVisible: Function}) => {
  const theme = useRecoilValue(themeState);

  return (
    <SHeader>
      <InfoBtn
        onPress={() => {
          setIsVisible(true);
        }}>
        <Icon name="help-circle-outline" size={36} color={theme.text} />
      </InfoBtn>
    </SHeader>
  );
};

export default React.memo(HomeHeader);
