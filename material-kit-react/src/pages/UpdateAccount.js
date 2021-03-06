
import React  from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import AccountUpda from 'src/components/updateAccount/AccountUpda';
import AccountUpd from 'src/components/updateAccount/AccountUpd'





  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    }
  }));
  
  const UpdateAccount = () => {
    const classes = useStyles();
  
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
              <AccountUpda />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountUpd/>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  };

export default UpdateAccount;
