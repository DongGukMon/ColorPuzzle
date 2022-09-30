import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import MainButton from '../component/MainButton';
import {isStartedState, themeState} from '../atom/shared';

interface styleProps {
  theme: {[key: string]: string};
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: styleProps) => props.theme.fifth};
`;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const UpperBox = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const LowerBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const setIsStarted = useCallback(useSetRecoilState(isStartedState), []);
  const theme = useRecoilValue(themeState);
  return (
    <Container>
      <UpperBox>
        <Title>Align to {theme.targetColor}</Title>
      </UpperBox>
      <LowerBox>
        <MainButton text="도전하기" callback={() => setIsStarted(true)} />
      </LowerBox>
    </Container>
  );
};
export default Home;
