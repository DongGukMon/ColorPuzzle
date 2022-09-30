import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const SHeader = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0px;

  justify-content: center;
  padding: 20px;
`;
const BackBtn = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

interface HeaderProps {
  setIsStarted: Function;
}

const Header = ({setIsStarted}: HeaderProps) => {
  return (
    <SHeader>
      <BackBtn onPress={() => setIsStarted(false)}>
        <Icon name="close" size={30} />
      </BackBtn>
    </SHeader>
  );
};

export default React.memo(Header);
