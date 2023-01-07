import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { doc, getFirestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';

export function useUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getAuth().onAuthStateChanged(currentUser => setUser(currentUser));
  }, []);
  return user;
}

export function useAccount() {
  const user = useUser();
  const [account, setAccount] = useState(null);
  useEffect(() => {
    if (!user) {
      setAccount(null);
      return;
    }
    console.log('siging up for account snapshots');
    console.log('user uid: ', user.uid);
    return onSnapshot(
      doc(getFirestore(), 'accounts', user.uid),
      doc => {
        console.log('account: ', doc.data());
        setAccount(doc.data());
      }
    );
  }, [user]);
  return account;
}

export async function googleSignIn(auth) {
  try {
    const result = await signInWithRedirect(auth, new GoogleAuthProvider());
    return result.user;
  } catch (error) {
    console.log(error);
  }
}

export async function getPassagesFromEsvApi(passages) {
  try {
    console.log('fetching from ESV API');
    const response = await axios.get('https://api.esv.org/v3/passage/html/', {
      headers: {
        'Authorization': 'Token e93288b94fbf996c1161e3eee7efcabb3bb1906e'
      },
      params: {
        q: passages,
        "include-footnotes": false,
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function setReadingComplete(userId, dayNumber) {
  const accountRef = doc(getFirestore(), "accounts", userId);
  await updateDoc(accountRef, {
    last_completed_day: dayNumber
  });
  await setDoc(doc(getFirestore(), `accounts/${userId}/completed_readings`, String(dayNumber)), {
    completed_timestamp: Date.now()
  });
}
