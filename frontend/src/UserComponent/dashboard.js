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

export default function FullWidthGrid() {
  return (
    <div class="container" id="grid">
    <Box sx={{ flexGrow: 1 }}>
      <Grid id="ac"container spacing={2}>
        <Grid id='aa' item xs={6} md={12}>
          <Item><Link id="a" to="/adminregistration">History</Link></Item>
        </Grid>
        <Grid id='bb'item xs={6} md={12}>
          <Item><Link id='b' to="/admintestmanagement"></Link></Item>
        </Grid>
        <Grid id='cc'item xs={6} md={12}>
          <Item><Link id='c' to="/adminusermanagement">User Management</Link></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}