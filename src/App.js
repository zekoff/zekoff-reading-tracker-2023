import input_data from './2023_input_data.js';
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Button, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';

function useUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getAuth().onAuthStateChanged(currentUser => setUser(currentUser));
  }, []);
  return user;
}

function useAccount(userId) {
  const [account, setAccount] = useState(null);
  useEffect(()=>{
    
  },[]);
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

function PassageHeading({ canonicalPassage, week, day }) {
  return <>
    <Typography variant="h4">{canonicalPassage}</Typography>
    <Typography variant="h5">Week: {week}, Day: {day}</Typography>
  </>
}

function App() {
  const user = useUser();
  const [passageReference, setPassageReference] = useState('');
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
  console.log(input_data.meta.fields);
  console.log(input_data.data);
  return (
    <Container>
      <PassageHeading canonicalPassage={passageReference} week={1} day={1} />
      <Button onClick={async () => {
        const apiData = await getPassagesFromEsvApi(input_data.data[0]['Passages']);
        console.log(apiData);
        console.log('Number of passages:', apiData['passages'].length)
        setPassageText(apiData.passages);
      }}>Sample Request</Button>
      <div dangerouslySetInnerHTML={{ __html: passageText }}></div>
    </Container>
  );
}

export default App;
