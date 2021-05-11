import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import AccountProfileDetails from '../components/accountUpdate/AccountProfileDetails';
import AccountUpdated from '../components/accountUpdate/AccountUpdated';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();
console.log('your in the update page but there is may a prof')
  return (
    <div
      className={classes.root}
      title="Account"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountUpdated />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Account;
