import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// Configuração do aplicativo no Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyAd5Jie_99kgJR-dpAtuHy8yun7hrDllts',
  authDomain: 'aulapdm2020-7467d.firebaseapp.com',
  databaseURL: 'https://aulapdm2020-7467d.firebaseio.com',
  projectId: 'aulapdm2020-7467d',
  storageBucket: 'aulapdm2020-7467d.appspot.com',
  messagingSenderId: '706829657533',
  appId: '1:706829657533:web:d3f5f99001cdc0d99b1ed4',
};
try {
  // Inicializa o Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (e) {
  console.log('O app foi recarregado!');
}
export default firebase;
