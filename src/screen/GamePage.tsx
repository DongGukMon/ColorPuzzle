import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {puzzleSetState, selectedPatternState, themeState} from '../atom/shared';
import {numberToName} from '../utils/numberToName';
import {useRecoilState, useRecoilValue} from 'recoil';
import {patternA} from '../utils/patternA';
import {patternB} from '../utils/patternB';
import {patternC} from '../utils/patternC';
import Icon from 'react-native-vector-icons/Ionicons';

const GameBackground = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: {name: string; theme: {[key: string]: string}}) =>
    props.theme[props.name]};
`;

const GamePage = ({index}: {index: number}) => {
  const theme = useRecoilValue(themeState);
  const [puzzleSet, setPuzzleSet] = useRecoilState(puzzleSetState);
  const selectedPattern = useRecoilValue(selectedPatternState);

  const patternSet = {A: patternA, B: patternB, C: patternC};
  const pattern = useCallback(
    patternSet[selectedPattern as keyof typeof patternSet],
    [],
  );

  const pageName = numberToName(
    puzzleSet[numberToName(index) as keyof typeof puzzleSet],
  );

  const onScreenPress = () => {
    const newPuzzleSet = pattern(puzzleSet, index);

    setPuzzleSet({...puzzleSet, ...newPuzzleSet});
  };

  return (
    <GameBackground onPress={onScreenPress} name={pageName}>
      <Icon
        name={theme[`iconname-${pageName}`]}
        color={theme[`icon-${pageName}`]}
        size={200}
      />
    </GameBackground>
  );
};

export default GamePage;
