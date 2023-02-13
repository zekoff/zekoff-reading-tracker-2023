import input_data from './2023_input_data.js';
import { Typography, Divider, Container, Stack, Button } from '@mui/material';
import { getCurrentWeekOfYear, googleSignIn } from './utilFunctions.js';
import { getAuth } from 'firebase/auth';

export function SignInPrompt() {
  return <Container>
    <Stack alignItems="center">
      <Typography variant="body">Sign in to Zekoff Bible Reading Tracker 2023:</Typography>
      <Button variant="contained" onClick={() => googleSignIn(getAuth())}>Sign In</Button>
    </Stack>
  </Container>
}

export function ReadingCompleteBanner() {
  return <Container sx={{ p: 3 }}>
    <Typography variant="body">Today's reading complete. See you tomorrow!</Typography>
  </Container>
}

export function PlanCompleteBanner() {
  return <Container>
    <Typography variant="h1">All readings complete for 2023!</Typography>
  </Container>
}

export function PassageHeading({ dayNumber, passageReferences }) {
  const weekDisplay = Math.ceil(dayNumber / 5);
  const weekDelta = getCurrentWeekOfYear() - weekDisplay;
  const dayDisplay = dayNumber % 5 || 5;
  const startDate = input_data.data[dayNumber - 1]["Start Date"];
  const endDate = input_data.data[dayNumber - 1]["End Date"]
  return <>
    <Typography variant="body2">Week: {weekDisplay} ({`${startDate} through ${endDate}`})</Typography>
    {weekDelta > 0 ?
      <Typography variant="body2" sx={{color: "orange"}}>{weekDelta} week(s) behind schedule!</Typography>
      : null
    }
    <Typography variant="body2">Day: {dayDisplay} of 5</Typography>
    <Typography variant="body2">Passages: {passageReferences}</Typography>
    <Divider />
  </>
}

export function PassageDisplay({ passageText }) {
  return <>
    <div dangerouslySetInnerHTML={{ __html: passageText }} />
    <Divider />
  </>
}
