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
  await setDoc(doc(getFirestore(), `accounts/${userId}/completed_readings`, String(dayNumber)), {
    completed_timestamp: Date.now()
  });
}

function PassageHeading({ dayNumber }) {
  const weekDisplay = Math.ceil(dayNumber / 5);
  const dayDisplay = dayNumber % 5 || 5;
  const startDate = input_data.data[dayNumber - 1]["Start Date"];
  const endDate = input_data.data[dayNumber - 1]["End Date"]
  return <>
    <Typography variant="body2">Week: {weekDisplay} ({`${startDate} through ${endDate}`})</Typography>
    <Typography variant="body2">Day: {dayDisplay} of 5</Typography>
    <Typography variant="body2">Passages: {input_data.data[dayNumber - 1]["Passages"]}</Typography>
  </>
}

function PassageDisplay({ passageReferences }) {
  const [passageText, setPassageText] = useState(null);
  useEffect(() => {
    (async () => {
      if (passageReferences) {
        const apiData = await getPassagesFromEsvApi(passageReferences);
        console.log(apiData);
        console.log('Number of passages:', apiData['passages'].length)
        setPassageText(apiData.passages);
      }
    })();
  }, [passageReferences]);
  return <div dangerouslySetInnerHTML={{ __html: passageText }}></div>
}

function App() {
  const user = useUser();
  const account = useAccount();
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
      <PassageHeading dayNumber={day_number} />
      <PassageDisplay passageReferences={passages} />
      <Button variant="contained" onClick={() => {
        setReadingComplete(user.uid, day_number);
      }}>Reading Complete</Button>
    </Container>
  );
}

export default App;
