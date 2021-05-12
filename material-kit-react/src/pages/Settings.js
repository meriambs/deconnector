import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
// import SettingsNotifications from 'src/components/settings/SettingsNotifications';
// import SettingsPassword from 'src/components/settings/SettingsPassword';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
       <h1>test</h1>
      </Container>
    </Box>
  </>
);

export default SettingsView;
