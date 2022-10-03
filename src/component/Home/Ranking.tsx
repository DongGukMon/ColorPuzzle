import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import styled from 'styled-components/native';
import {
  enrollModalVisibleState,
  selectedPatternState,
  themeState,
} from '../../atom/shared';
import firebaseInit from '../../utils/firebaseInit';
import {getDatabase, ref, get, child} from 'firebase/database';

firebaseInit();

interface styleProps {
  theme: {[k: string]: string};
  size?: number;
  isRank?: boolean;
  isMedal?: boolean;
}

interface rankItemType {
  name: string;
  record: string;
  rank: string;
}

const {width} = Dimensions.get('window');

const RankingContainer = styled.View`
  flex: 1;
`;
const HeaderContainer = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
`;
const Title = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  font-weight: bold;
  font-size: 24px;
`;

const EnrollBtn = styled.TouchableOpacity`
  height: 100%;
  width: 80px;
  background-color: ${(props: styleProps) => props.theme.fourth};
  border-radius: 8px;
  border-width: 2px;
  border-color: ${(props: styleProps) => props.theme.text};
  justify-content: center;
  align-items: center;
`;

const EnrollText = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  font-weight: 600;
  font-size: 18px;
`;

const RankItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

const Separator = styled.View`
  height: 0.3px;
  width: ${width * 0.85 - 30}px;
  background-color: ${(props: styleProps) =>
    props.theme.name === 'dark'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0,0,0,0.7)'};
  align-self: center;
`;

const RnakText = styled.Text`
  color: ${(props: styleProps) =>
    props.isMedal ? props.theme.third : props.theme.text};
  font-weight: 600;
  font-size: ${(props: styleProps) => props.size}px;
  font-style: ${(props: styleProps) => (props.isRank ? 'italic' : 'normal')};
`;

const CircleView = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const dbRef = ref(getDatabase());

const Ranking = () => {
  const setIsVisible = useSetRecoilState(enrollModalVisibleState);
  const [rankingData, setRankingData] = useState([]);
  const selectedPattern = useRecoilValue(selectedPatternState);
  const isMedal = useCallback((rank: string) => {
    if (Number(rank) <= 3) {
      return true;
    } else {
      return false;
    }
  }, []);

  const _renderItem = ({item}: {item: rankItemType}) => {
    if (!item) {
      return null;
    }

    const {name, rank, record} = item;

    return (
      <RankItemContainer>
        <Row>
          <CircleView>
            <RnakText isRank={true} isMedal={isMedal(rank)} size={24}>
              {rank}
            </RnakText>
          </CircleView>
          <RnakText size={20}>{name}</RnakText>
        </Row>
        <RnakText size={20}>{record}</RnakText>
      </RankItemContainer>
    );
  };

  useEffect(() => {
    get(child(dbRef, `ranking/${selectedPattern}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setRankingData(snapshot.val());
        } else {
          setRankingData([]);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedPattern]);

  return (
    <RankingContainer>
      <HeaderContainer>
        <Title>{selectedPattern} Ranking</Title>
        <EnrollBtn onPress={() => setIsVisible(true)}>
          <EnrollText>Enroll</EnrollText>
        </EnrollBtn>
      </HeaderContainer>
      <Separator />
      {rankingData.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Title>지금 도전하면 당신이 1등!!!</Title>
        </View>
      ) : (
        <FlatList
          data={rankingData}
          keyExtractor={(_, index) => index + ''}
          renderItem={_renderItem}
        />
      )}
    </RankingContainer>
  );
};

export default Ranking;
