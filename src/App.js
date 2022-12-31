import input_data from './2023_input_data.csv';
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button, Container, Stack, Typography } from '@mui/material';

function useUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getAuth().onAuthStateChanged(currentUser => setUser(currentUser));
  }, []);
  return user;
}

async function googleSignIn(auth) {
  try {
    const result = await signInWithRedirect(auth, new GoogleAuthProvider());
    return result.user;
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const user = useUser();
  if (user === undefined) return null;
  if (user === null) {
    return <Container>
      <Stack alignItems="center">
        <Typography variant="h1">Sign in to Zekoff Bible Reading Tracker 2023</Typography>
        <Button variant="contained" onClick={() => googleSignIn(getAuth())}>Sign In</Button>
      </Stack>
    </Container>
  }
  return (
    <Container>
      <Typography>Zekoff Bible Reading Tracker 2023</Typography>
    </Container>
  );
}

export default App;
