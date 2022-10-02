import React from 'react';
import {Text} from 'react-native';

import styled from 'styled-components/native';
import PatternCarousel from './PatternCarousel';
import Ranking from './Ranking';

const HomeContentsContainer = styled.View`
  flex: 1;
`;

const FlexBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const ContentContainer = styled.View`
  width: 85%;
  height: 100%;
  background-color: ${(props: {theme: {[k: string]: any}}) => props.theme.main};
  border-radius: 10px;
  border-width: 2px;
  border-color: white;
`;

const HomeContents = () => {
  return (
    <HomeContentsContainer>
      <FlexBox style={{height: 90}}>
        <ContentContainer>
          <PatternCarousel />
        </ContentContainer>
      </FlexBox>
      <FlexBox style={{flex: 1}}>
        <ContentContainer>
          <Ranking />
        </ContentContainer>
      </FlexBox>
    </HomeContentsContainer>
  );
};

export default React.memo(HomeContents);
