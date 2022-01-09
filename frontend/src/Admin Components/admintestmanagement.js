import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ManageExam() {
  return (
    <div class="container" id="grid">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        
        <Grid id="aa"item xs={6} md={12}>
          <Item><Link id="a" to="/adminNewExam">Add Exam</Link></Item>
        </Grid>
        <Grid id="aa"item xs={6} md={12}>
          <Item><Link id="a" to="/viewExam"> View Exam </Link></Item>
        </Grid>
        <Grid id="aa"item xs={6} md={12}>
          <Item><Link id="a" to="/AddQuestion">Add Question </Link></Item>
        </Grid>
        <Grid id="aa"item xs={6} md={12}>
          <Item><Link id="a" to="/viewQuestions">View Question </Link></Item>
        </Grid>
       
      </Grid>
    </Box><br/>
  <center>
  <Link to="/"><button id="but" type="button">Home</button></Link><br/>
  
  </center>
      
    </div>
  );
}