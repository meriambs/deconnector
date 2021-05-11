
// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import moment from 'moment';
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Divider,
//   Typography,
//   makeStyles
// } from '@material-ui/core';

// import  {useSelector} from 'react-redux';


// const useStyles = makeStyles(() => ({
//   root: {},
//   avatar: {
//     height: 100,
//     width: 100
//   }
// }));

// const AccountProfile = ({ className, ...rest }) => {
//   const classes = useStyles();

//   const user=useSelector((state =>state.user))
//   return (
//     <Card
//       className={clsx(classes.root, className)}
//       {...rest}
//     >
//       <CardContent>
//         <Box
//           alignItems="center"
//           display="flex"
//           flexDirection="column"
//         >
//           <Avatar
//             className={classes.avatar}
//             src={`http://localhost:4150/${user.photo}`}
//           />
//           <Typography
//             color="textPrimary"
//             gutterBottom
//             variant="h3"
//           >
//             {user.name}
//           </Typography>
         
//           <Typography
//             className={classes.dateText}
//             color="textSecondary"
//             variant="body1"
//           >
//             {`${moment().format('hh:mm A')} `}
//           </Typography>
//         </Box>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Button
//           color="primary"
//           fullWidth
//           variant="text"
//         >
         
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };



// export default AccountProfile;

import React , {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import axios from 'axios'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import { setuser } from "../../redux/action";
import { useDispatch } from "react-redux";
import  {useSelector} from 'react-redux';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const AccountUpdated = ({ className, ...rest }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user=useSelector((state =>state.user));
   const [formData, setFormData] = useState('');
  
  const [info, setInfo] = useState({
    image: '',
    name: '',
  });
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState({
    found: false,
    message: '',
  });
  /** end states */

  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('data', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
   const token = localStorage.getItem('token');
    const options = {
     
 headers: {"x-auth-token": token ,'Content-Type': 'multipart'},
    
    };
    
       const res = await axios.post(`http://localhost:3003/users/photo`,formData,options);
       const dis = await axios.get('http://localhost:3003/users', {
        headers: {"x-auth-token": token}
    }
    )
    dispatch(setuser(dis.data[0]));
      }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        {/* <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography> */}
          {/* <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography> */}
          {/* <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} `}
          </Typography>
        </Box>
      </CardContent>
      <Divider /> */}
      {/* <CardActions>
        {/* <Button
          color="primary"
          fullWidth
          variant="text"
        > */}
          {/* Upload picture */}
        {/* </Button> 
      </CardActions> */}
         <div
      // style={{ width: '100vw', height: '100vh' }}
      // className='d-flex justify-content-center align-items-center flex-column'
    >
      {error.found && (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '150px'}}
        >
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} >
       
        <div  style={{position:'center'}}>
         <img
        className='mt-3'
        src={`http://localhost:3003/${info.image}`}
        alt={`${info.name}`}
        style={{ width: '150px',borderRadius:'60%' ,display: 'block',marginLeft: 'auto',marginRight:' auto'}}
      />
          <input
            type='file'
            
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
          
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
     
    </div>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          {/* <Avatar
            className={classes.avatar}
            src={user.avatar}
          /> */}
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          {/* <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography> */}
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} `}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>

  );
};



export default AccountUpdated;