import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAQBZA3zi70pZsrSJN5rFusyQLYOQkNqUw',
  authDomain: 'fir-sample-72516.firebaseapp.com',
  projectId: 'fir-sample-72516',
  storageBucket: 'fir-sample-72516.appspot.com',
  messagingSenderId: '259081684559',
  appId: '1:259081684559:web:4199e28fa687fcf121cc3a',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db.collection('todos').get();
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection('todos');
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
};

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection('todos').doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
};

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection('todos').doc(item.id);
  await todoRef
    .delete()
    .then(function () {})
    .catch(function (err) {
      console.log(err);
    });
};
