import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQMxyxqkZubpIDYCppoR7fRegL5VrzEZg",
    authDomain: "fir-sample-27a49.firebaseapp.com",
    projectId: "fir-sample-27a49",
    storageBucket: "fir-sample-27a49.appspot.com",
    messagingSenderId: "832450273084",
    appId: "1:832450273084:web:59cfdc35ebe0c3ef73c839"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};  