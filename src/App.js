import input_data from './2023_input_data.js';
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { doc, getFirestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { Button, Container, Divider, LinearProgress, Stack, Typography } from '@mui/material';
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

async function setReadingComplete(userId, dayNumber) {
  const accountRef = doc(getFirestore(), "accounts", userId);
  await updateDoc(accountRef, {
    last_completed_day: dayNumber
  });
  await setDoc(doc(getFirestore(), `accounts/${userId}/completed_readings`, String(dayNumber)), {
    completed_timestamp: Date.now()
  });
}

function PassageHeading({ dayNumber, passageReferences }) {
  const weekDisplay = Math.ceil(dayNumber / 5);
  const dayDisplay = dayNumber % 5 || 5;
  const startDate = input_data.data[dayNumber - 1]["Start Date"];
  const endDate = input_data.data[dayNumber - 1]["End Date"]
  return <>
    <Typography variant="body2">Week: {weekDisplay} ({`${startDate} through ${endDate}`})</Typography>
    <Typography variant="body2">Day: {dayDisplay} of 5</Typography>
    <Typography variant="body2">Passages: {passageReferences}</Typography>
    <Divider />
  </>
}

function PassageDisplay({ passageText }) {
  return <>
    <div dangerouslySetInnerHTML={{ __html: passageText }} />
    <Divider />
  </>
}

function App() {
  const user = useUser();
  const account = useAccount();
  const [readingAssignment, setReadingAssignment] = useState(null);
  const [passageFullTexts, setPassageFullTexts] = useState(null);
  const [dailyReadingComplete, setDailyReadingComplete] = useState(false);
  useEffect(() => {
    if (account?.["last_completed_day"]) {
      const dayNumber = parseInt(account["last_completed_day"]) + 1
      let passageReferences = input_data.data[dayNumber - 1]["Passages"];
      if (account["nt_only"]) passageReferences = passageReferences.split(";").pop();
      setReadingAssignment({
        dayNumber: dayNumber,
        passageReferences: passageReferences
      })
    }
  }, [account]);
  useEffect(() => {
    if (readingAssignment) {
      (async () => {
        const apiData = await getPassagesFromEsvApi(readingAssignment.passageReferences);
        setPassageFullTexts(apiData.passages);
      })();
    }
  }, [readingAssignment]);
  if (user === undefined) return null;
  if (user === null) {
    return <Container>
      <Stack alignItems="center">
        <Typography variant="body">Sign in to Zekoff Bible Reading Tracker 2023:</Typography>
        <Button variant="contained" onClick={() => googleSignIn(getAuth())}>Sign In</Button>
      </Stack>
    </Container>
  }
  if (!account || !readingAssignment) return <LinearProgress />;
  if (dailyReadingComplete)
    return <>
      <Container>
        <Typography variant="body">Today's reading complete. See you tomorrow!</Typography>
      </Container>
    </>
  console.log('day number', readingAssignment?.dayNumber);
  if (readingAssignment?.dayNumber >= 261) {
    return <Typography variant="h1">All readings complete for 2023!</Typography>
  }
  return (
    <Container style={{ userSelect: "none" }}>
      <PassageHeading dayNumber={readingAssignment?.dayNumber} passageReferences={readingAssignment?.passageReferences} />
      {passageFullTexts
        ? passageFullTexts.map((passage, index) => <PassageDisplay key={index} passageText={passage} />)
        : <LinearProgress />}
      <Button disabled={!passageFullTexts} sx={{ m: 3 }} variant="contained" onClick={() => {
        setReadingComplete(user.uid, readingAssignment?.dayNumber);
        setDailyReadingComplete(true);
      }}>Reading Complete</Button>
    </Container>
  );
}

export default App;
