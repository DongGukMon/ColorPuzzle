import {
  getDatabase,
  ref,
  child,
  get,
  push,
  set,
  update,
} from 'firebase/database';
import {useRecoilValue} from 'recoil';
import firebaseInit from './firebaseInit';

firebaseInit();

interface rankProps {
  name: string;
  type: string;
  record: string;
  rank: string;
  replaceAll: Function;
}

const db = getDatabase();

const setRank = (
  targetRank: number,
  record: string,
  selectedPattern: string,
  username: string,
) =>
  set(ref(db, `ranking/${selectedPattern}/${targetRank}`), {
    name: username,
    type: selectedPattern,
    record,
    rank: targetRank,
  });

const getMyRank = (
  ranking: [{[k: string]: rankProps}],
  myRecord: string,
  selectedPattern: string,
  username: string,
) => {
  let isFind = false;

  const newRanking: any = [];

  for (let index = 1; index <= ranking.length; index++) {
    const eachRank = ranking[index];
    if (!isFind && !eachRank) {
      newRanking.push({
        [index]: {
          name: username,
          record: myRecord,
          rank: index,
          type: selectedPattern,
        },
      });
      continue;
    }

    const existRecord = eachRank && Number(eachRank.record.replaceAll(':', ''));
    const record = Number(myRecord.split(':').join(''));

    if (isFind) {
      newRanking.push({
        [index]: {
          ...ranking[index - 1],
          rank: index,
        },
      });
    } else {
      if (existRecord > record) {
        isFind = true;

        newRanking.push({
          [index]: {
            name: username,
            record: myRecord,
            rank: index,
            type: selectedPattern,
          },
        });
      } else {
        newRanking.push({[index]: eachRank});
      }
    }
  }

  return newRanking;
};

export const checkRecord = (
  record: string,
  username: string,
  selectedPattern: string,
) => {
  get(child(ref(db), `ranking/${selectedPattern}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        const ranking = snapshot.val();
        const newRanking = getMyRank(
          ranking,
          record,
          selectedPattern,
          username,
        );
        const newRankingObject: any = {};

        newRanking.slice(0, 100).map((item: any, idx: number) => {
          newRankingObject[idx + 1] = item[idx + 1];
        });

        update(ref(db, `ranking`), {
          [selectedPattern]: {
            ...newRankingObject,
          },
        });
      } else {
        setRank(1, record, selectedPattern, username);
      }
    })
    .catch(error => {
      console.error(error);
    });
};
