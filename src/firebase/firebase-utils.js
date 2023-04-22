import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from 'firebase/auth';
import { 
  getFirestore,
  doc, 
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6G3O0Vgg8pDBqPyWPAroLbAN8cRTojLQ",
    authDomain: "react-ecommerce-bd321.firebaseapp.com",
    projectId: "react-ecommerce-bd321",
    storageBucket: "react-ecommerce-bd321.appspot.com",
    messagingSenderId: "833891576610",
    appId: "1:833891576610:web:53475a98ca9178c2e5937b",
    measurementId: "G-8914NVRVZP"
  };

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments =async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments =async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((accumulator,docSnapshot) => {
    const{title,items} = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator; 
  },{});
  return categoryMap;
}
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth,callback);
}