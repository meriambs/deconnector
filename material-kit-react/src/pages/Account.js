
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import axios from 'axios';
import { setuser } from "../../src/redux/action";
import { useDispatch } from "react-redux";


//definir le token et dou il veinbt : 
const token = localStorage.getItem('token');
const Account = () => {
  
  const dispatch = useDispatch();
  //ici d'ou il vient le token 
  //alors ici le token permet d'afficher la partie nom prenom et autres info de notre profil 
  if(!token) {
    window.location.href='/login'
  };
  useEffect(() => {
    const fetchUser = async() => {
    if(!!token){
     const dis = await axios.get('http://localhost:4150/users', {
        headers: {"x-auth-token": token}
    }
    )
    dispatch(setuser(dis.data[0]));
 console.log('dis',dis.data);
     //ici on a la const enregistrée dan redux et la modification des nom du profil .
    
  
  }
    };
    fetchUser()
  }, [])
  
  
  return (

  <>
    <Helmet>
      <title>Account | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
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
            <AccountProfile />
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
    </Box>
  </>
)};

export default Account;
