import input_data from './2023_input_data.js';
import { useEffect, useState } from 'react';
import { useUser, useAccount, getPassagesFromEsvApi, setReadingComplete } from './utilFunctions.js';
import { PassageHeading, PassageDisplay, SignInPrompt, ReadingCompleteBanner, PlanCompleteBanner } from './components.js';
import { Button, Container, LinearProgress } from '@mui/material';

function App() {
  const user = useUser();
  const account = useAccount();
  const [readingAssignment, setReadingAssignment] = useState(null);
  const [passageFullTexts, setPassageFullTexts] = useState(null);
  const [dailyReadingComplete, setDailyReadingComplete] = useState(false);

  // Generate today's reading assignment from account state
  useEffect(() => {
    if (!!account) {
      console.log(account);
      const dayNumber = parseInt(account["last_completed_day"]) + 1
      let passageReferences = input_data.data[dayNumber - 1]["Passages"];
      if (account["nt_only"]) passageReferences = passageReferences.split(";").pop();
      setReadingAssignment({
        dayNumber: dayNumber,
        passageReferences: passageReferences
      })
    }
  }, [account]);

  // Fetch full passage text from ESV API based on today's assignment
  useEffect(() => {
    if (readingAssignment) {
      console.log('Reading assignment: ', readingAssignment);
      (async () => {
        const apiData = await getPassagesFromEsvApi(readingAssignment.passageReferences);
        setPassageFullTexts(apiData.passages);
      })();
    }
  }, [readingAssignment]);

  // Alternate UI displays for any states other than presenting the day's reading assignments
  if (user === undefined) return null; // waiting on login
  if (user === null) return <SignInPrompt /> // user is not signed in
  if (!account || !readingAssignment) return <LinearProgress />; // waiting on Firestore results
  if (dailyReadingComplete) return <ReadingCompleteBanner />;
  if (readingAssignment?.dayNumber >= 261) return <PlanCompleteBanner />

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
