// import moment from 'moment';
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Divider,
//   Typography
// } from '@material-ui/core';
// import  {useSelector} from 'react-redux';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

// const AccountProfile = ({ ...rest}) => {
//   const user=useSelector((state =>state.user));

//   <Card  {...rest}>
//     <CardContent>
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column'
//         }}
//       >
//         <Avatar
//           src={user.avatar}
//           sx={{
//             height: 100,
//             width: 100
//           }}
//         />
//         <Typography
//           color="textPrimary"
//           gutterBottom
//           variant="h3"
//         >
//           {user.name}
//         </Typography>
//         <Typography
//           color="textSecondary"
//           variant="body1"
//         >
//           {`${user.city} ${user.country}`}
//         </Typography>
//         <Typography
//           color="textSecondary"
//           variant="body1"
//         >
//         {`${moment().format('hh:mm A')} `}
//         </Typography>
//       </Box>
//     </CardContent>
//     <Divider />
//     <CardActions>
//       <Button
//         color="primary"
//         fullWidth
//         variant="text"
//       >
//         Upload picture
//       </Button>
//     </CardActions>
//   </Card>
//         };

// export default AccountProfile;
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
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

import  {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const AccountProfile = ({ className, ...rest }) => {
  const classes = useStyles();

  const user=useSelector((state =>state.user))
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={`http://localhost:4150/${user.photo}`}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
         
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
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
         
        </Button>
      </CardActions>
    </Card>
  );
};



export default AccountProfile;
