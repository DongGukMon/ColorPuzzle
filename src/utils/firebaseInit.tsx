import {initializeApp} from 'firebase/app';

const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyC_QMwzjbvr3E25O320y1SdLyW6GtP63gs',
    authDomain: 'skytab-2e882.firebaseapp.com',
    projectId: 'skytab-2e882',
    storageBucket: 'skytab-2e882.appspot.com',
    messagingSenderId: '338436654426',
    appId: '1:338436654426:web:7bc5b357b3d541e8ae1f63',
    databaseURL: 'https://skytab-2e882-default-rtdb.firebaseio.com/',
  };

  initializeApp(firebaseConfig);
};

export default firebaseInit;
