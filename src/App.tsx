import React from 'react';
import { Typography, Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Typography variant="h5">Hello Firebase</Typography>
        <Typography variant="h5">GitHub Actions</Typography>
      </Container>
    </>
  );
};

export default App;
