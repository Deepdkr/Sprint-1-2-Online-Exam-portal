import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import './test.css'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TakeTest() {
  return (
    <div class="container" id='aaa'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Item><Link to="/veiwExam"><button type="button">View Exam</button></Link></Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item><Link to="/Start"><button type="button">Attempt Exam</button></Link></Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item><Link to="/"><button type="button">Your Score</button></Link></Item>
        </Grid><br/><br/>

        <Grid item xs={6} md={12}>
        <Link to="/"><button type="button">Return To Home</button></Link><br/>
        </Grid>
      </Grid>
    </Box>
    <center/>
    
    </div>
  );
}