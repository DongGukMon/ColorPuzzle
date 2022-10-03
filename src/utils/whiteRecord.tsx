import {getDatabase, ref, child, get, push, set} from 'firebase/database';
import {useRecoilValue} from 'recoil';
import firebaseInit from './firebaseInit';

firebaseInit();

interface rankProps {
  name: string;
  type: string;
  record: string;
  rank: string;
}

const db = getDatabase();

const setRank = (
  targetRank: number,
  record: string,
  selectedPattern: string,
  username: string,
) =>
  set(ref(db, `ranking/${selectedPattern}/${targetRank}`), {
    username,
    type: selectedPattern,
    record,
    rank: targetRank,
  });

const getMyRank = (ranking: [{[k: string]: rankProps}]) => {
  let isFind = false;
  ranking.map((eachRank, index) => {
    const existRecord = Object.values(eachRank)[index + 1].record;
    if (isFind) {
      return;
    }
  });
};

export const checkRecord = (
  record: string,
  username: string,
  selectedPattern: string,
) => {
  get(child(ref(db), `ranking/${selectedPattern}`))
    .then(snapshot => {
      // 랭킹이 비어있거나 길이가 99가 넘지 않으면 바로 랭킹에 기록
      // 랭킹이 99개면 내 랭킹을 기록하고 100번째 랭킹 삭제
      if (snapshot.exists()) {
        const ranking = snapshot.val();
        if (ranking.length < 99) {
          //마지막에 내 랭킹 추가
        } else {
        }
        const theLast = ranking[ranking.length - 1].record;
        if (theLast > record) {
        }
      } else {
        setRank(1, record, selectedPattern, username);
      }
    })
    .catch(error => {
      console.error(error);
    });
};
