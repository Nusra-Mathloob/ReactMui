import { Box, Container, Stack, ThemeProvider, createTheme} from '@mui/material';
import './App.css';
import MenuBar from './Components/MenuBar';
import Content from './Components/Content';
import RightBar from './Components/RightBar';
import NavBar from './Components/NavBar';
import { useState } from 'react';

function App() {

  const [theme,setTheme] = useState('light')

const darkTheme = createTheme({
  palette:{
    mode:theme
  },

  typography:{
    fontFamily:'Roboto',
    fontWeightLight:300,
    fontWeightMedium: 700,
    fontWeightBold:900
  }
})

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color='text.primary'>

      <NavBar/>
    
      <Container maxWidth='xl'>
        <Stack direction='row' spacing={2} justifyContent="space-between">
          <MenuBar/>
          <Content/>
          <RightBar/>
        </Stack>
      </Container>




    </Box>
    </ThemeProvider>
    </>
    
  );
}

export default App;
