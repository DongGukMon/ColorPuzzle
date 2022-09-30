import React from 'react';
import styled from 'styled-components/native';
import {puzzleSetState, selectedPatternState} from '../atom/shared';
import {numberToName} from '../utils/numberToName';
import {useRecoilState, useRecoilValue} from 'recoil';
import {patternA} from '../utils/patternA';

const GameBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(props: {name: string; theme: {[key: string]: string}}) =>
    props.theme[props.name]};
`;

const GamePage = ({index}: {index: number}) => {
  const [puzzleSet, setPuzzleSet] = useRecoilState(puzzleSetState);
  const [selectedPattern, setijwqlkem] = useRecoilState(selectedPatternState);

  const pageName = numberToName(
    puzzleSet[numberToName(index) as keyof typeof puzzleSet],
  );

  const onScreenPress = () => {
    const newPuzzleSet = selectedPattern(puzzleSet, index);

    setPuzzleSet({...puzzleSet, ...newPuzzleSet});
  };

  return <GameBackground onPress={onScreenPress} name={pageName} />;
};

export default GamePage;
