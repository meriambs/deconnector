//ici la partie info profil selon el id 

import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// partie add 
import * as Yup from 'yup';
import { Formik  } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

import  {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {}
}));

const SettingsPassword = ({ className, ...rest }) => {
  const classes = useStyles();
  // // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const user=useSelector((state =>state.user))
  console.log('user',user)

const navigate = useNavigate();
 


  return (
    
     <div
      className={classes.root}
      
    >
    <Container maxWidth="sm">
    {user.email !== 'duda-1258**' &&
          <Formik
            initialValues={{
              email: user.email,
              name: user.name,
              lastName: user.lastName,
              phonenumber:user.phonenumber,                 
             age:user.age,
            
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                name: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                phonenumber:Yup.string().max(255).required('Phone number   is required'),
              })
            }
            onSubmit={async (values)=>{
               const res = await axios.put(`http://localhost:4150/users/${user._id}`, values)
              //  enqueueSnackbar('Profile updated', {variant:'success'});
              console.log('testy')
              navigate('/app/account', { replace: true })

              }
            }
   
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (<form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile Update"
        />
        <Divider />
        <CardContent>
           <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
              />
            </Grid> 
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.phonenumber && errors.phoneNumber)}
                  fullWidth
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  label="phoneNumber"
                  margin="normal"
                  name="phoneNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
                  value={values.phoneNumber}
                  variant="outlined"
              />
            </Grid> 
             <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.age && errors.age)}
                  fullWidth
                  helperText={touched.age && errors.age}
                  label="age"
                  margin="normal"
                  name="age"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
                  value={values.age}
                  variant="outlined"
              />
            </Grid>
             <Grid
              item
              md={6}
              xs={12}
            >
              
            </Grid> 
             <Grid
              item
              md={6}
              xs={12}
            >
             
             
            </Grid> 
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
           color="primary"
                     disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained" 
          >
             Save details
           </Button>
         </Box> 
       </Card>
     </form> )}
    </Formik>}
    </Container>
  </div>
    
  );
};



export default SettingsPassword;
