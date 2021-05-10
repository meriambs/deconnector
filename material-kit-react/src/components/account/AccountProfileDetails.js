// import { useState } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   Grid,
//   TextField
// } from '@material-ui/core';

// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama'
//   },
//   {
//     value: 'new-york',
//     label: 'New York'
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco'
//   }
// ];

// const AccountProfileDetails = (props) => {
//   const [values, setValues] = useState({
//     firstName: 'Katarina',
//     lastName: 'Smith',
//     email: 'demo@devias.io',
//     phone: '',
//     state: 'Alabama',
//     country: 'USA'
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <form
//       autoComplete="off"
//       noValidate
//       {...props}
//     >
//       <Card>
//         <CardHeader
//           subheader="The information can be edited"
//           title="Profile"
//         />
//         <Divider />
//         <CardContent>
//           <Grid
//             container
//             spacing={3}
//           >
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 helperText="Please specify the first name"
//                 label="First name"
//                 name="firstName"
//                 onChange={handleChange}
//                 required
//                 value={values.firstName}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Last name"
//                 name="lastName"
//                 onChange={handleChange}
//                 required
//                 value={values.lastName}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 onChange={handleChange}
//                 required
//                 value={values.email}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 name="phone"
//                 onChange={handleChange}
//                 type="number"
//                 value={values.phone}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Country"
//                 name="country"
//                 onChange={handleChange}
//                 required
//                 value={values.country}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Select State"
//                 name="state"
//                 onChange={handleChange}
//                 required
//                 select
//                 SelectProps={{ native: true }}
//                 value={values.state}
//                 variant="outlined"
//               >
//                 {states.map((option) => (
//                   <option
//                     key={option.value}
//                     value={option.value}
//                   >
//                     {option.label}
//                   </option>
//                 ))}
//               </TextField>
//             </Grid>
//           </Grid>
//         </CardContent>
//         <Divider />
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             p: 2
//           }}
//         >
//           <Button
//             color="primary"
//             variant="contained"
//           >
//             Save details
//           </Button>
//         </Box>
//       </Card>
//     </form>
//   );
// };

// export default AccountProfileDetails;

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
  Typography,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


 import  {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();

 const user=useSelector((state =>state.user))
  

const navigate = useNavigate();

  //  const handleChange = (e, value) => {
      //  setAccountType(value)
  //  }
 const updated  =()=>{
                            console.log('test direction');

               navigate('/app/update-profil', { replace: true })
              
 }

  return (
    
 <div 
      className={classes.root}
      title="Register"
    >
    <Container maxWidth="sm">
          
              <form>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
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
                // error={Boolean(touched.name && errors.name)}
                  fullWidth
                  // helperText={touched.name && errors.name}
                  label="name"
                  margin="normal"
                  name="name"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  value={user.name}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  // helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  value={user.lastName}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  type="email"
                  value={user.email}
                  variant="outlined"
              />
            </Grid>
              <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="phoneNumber"
                  margin="normal"
                  name="phoneNumber"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // type="email"
                  value={user.phoneNumber}
                  variant="outlined"
              />
            </Grid>
              <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="adress"
                  margin="normal"
                  name="adress"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  type="adress"
                  value={user.adress}
                  variant="outlined"
              />
            </Grid>
              <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="githubLink"
                  margin="normal"
                  name="githubLink"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  type="githubLink"
                  value={user.githubLink}
                  variant="outlined"
              />
            </Grid>
              <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="linkedin"
                  margin="normal"
                  name="linkedin"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  type="linkedin"
                  value={user.linkedin}
                  variant="outlined"
              />
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
                    onClick={updated}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
          >
            Change some details
          </Button>
        </Box>
      </Card>
    </form>
            
    </Container>
    </div>
  );
};

//  ProfileDetails.propTypes = {
//    className: PropTypes.string
//  };

export default AccountProfileDetails;
