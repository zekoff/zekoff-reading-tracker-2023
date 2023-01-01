import input_data from './2023_input_data.js';
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { doc, getFirestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { Button, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';

function useUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getAuth().onAuthStateChanged(currentUser => setUser(currentUser));
  }, []);
  return user;
}

function useAccount() {
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

async function googleSignIn(auth) {
  try {
    const result = await signInWithRedirect(auth, new GoogleAuthProvider());
    return result.user;
  } catch (error) {
    console.log(error);
  }
}

async function getPassagesFromEsvApi(passages) {
  try {
    const response = await axios.get('https://api.esv.org/v3/passage/html/', {
      headers: {
        'Authorization': 'Token e93288b94fbf996c1161e3eee7efcabb3bb1906e'
      },
      params: {
        q: passages
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function setReadingComplete(userId, dayNumber) {
  const accountRef = doc(getFirestore(), "accounts", userId);
  await updateDoc(accountRef, {
    last_completed_day: dayNumber
  });
  await setDoc(doc(getFirestore(), `accounts/${userId}/completed_readings/${dayNumber}`), {
    completed_timestamp: Date.now()
  });
}

function PassageHeading({ canonicalPassage, week, day }) {
  return <>
    <Typography variant="h4">{canonicalPassage}</Typography>
    <Typography variant="h5">Week: {week}, Day: {day}</Typography>
  </>
}

function App() {
  const user = useUser();
  const account = useAccount();
  const [passageText, setPassageText] = useState('');
  if (user === undefined) return null;
  if (user === null) {
    return <Container>
      <Stack alignItems="center">
        <Typography variant="body">Sign in to Zekoff Bible Reading Tracker 2023:</Typography>
        <Button variant="contained" onClick={() => googleSignIn(getAuth())}>Sign In</Button>
      </Stack>
    </Container>
  }
  if (!account) return null;
  const day_number = parseInt(account["last_completed_day"]) + 1;
  console.log('day number', day_number);
  if (day_number >= 261) {
    return <Typography variant="h1">All readings complete for 2023!</Typography>
  }
  const passages = input_data.data[day_number - 1]["Passages"];
  return (
    <Container>
      <PassageHeading canonicalPassage={passages} week={Math.ceil(day_number / 5)} day={day_number % 5} />
      <Button onClick={async () => {
        const apiData = await getPassagesFromEsvApi(passages);
        console.log(apiData);
        console.log('Number of passages:', apiData['passages'].length)
        setPassageText(apiData.passages);
      }}>Sample Request</Button>
      <div dangerouslySetInnerHTML={{ __html: passageText }}></div>
      <Button variant="contained" onClick={()=>{
        setReadingComplete(user.uid, day_number);
      }}>Reading Complete</Button>
    </Container>
  );
}

export default App;
