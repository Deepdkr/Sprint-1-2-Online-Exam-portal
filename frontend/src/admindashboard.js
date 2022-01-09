import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import {  Menu } from '@mui/icons-material'
import { AppBar, Toolbar } from '@mui/material'
import './admin.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div class="container" id="grid">
    {/* <Box sx={{ flexGrow: 1 }}>
      <Grid id="ac"container spacing={2}>
        <Grid id='aa' item xs={6} md={12}>
          <Item><Link id="a" to="/adminregistration">Admin Registration</Link></Item>
        </Grid>
        <Grid id='aa'item xs={6} md={12}>
          <Item><Link id='a' to="/admintestmanagement">Exam Management</Link></Item>
        </Grid>
        <Grid id='aa'item xs={6} md={12}>
          <Item><Link id='a' to="/adminusermanagement">User Management</Link></Item>
        </Grid>
        

      </Grid>
    </Box> */}
<AppBar>

<Toolbar>

    <Menu/>
    <ul class="link">
      
      <li>
      <Link id="a" to="/adminregistration">Admin Registration</Link>
      </li>
     <li>
     <Link id='a' to="/admintestmanagement">Exam Management</Link>
     </li>

      <li>
      <Link id='a' to="/adminusermanagement">User Management</Link>
      </li>
      


    </ul>
</Toolbar>

</AppBar>
    
    </div>
  );
}