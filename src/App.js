import { useEffect, } from 'react';
import './App.css';
import Navbar from './layout/nav/Navbar';
import { fetchAllProducts } from './services/api';
import Provider from './context'
import Slider from './components/sliders/Index';
import Hero from './components/hero/Hero';
import CheckOut from './components/checkOut/Index'
import {createTheme,ThemeProvider,Grid  } from '@mui/material'
function App() {
  const THEME = createTheme({
    typography: {
     "fontFamily": `'Signika Negative', sans-serif`,
    }
 });
  useEffect(() => {
    const fetchProducts = async()=>{
      const res = await fetchAllProducts()
      console.log(res)
      return res
    }
    
    fetchProducts()
  }, [])

  
  return (
    <ThemeProvider theme={THEME}>

    <Grid >
    <Provider>
     <Navbar/>
     <Hero/>
     <Slider/>
    
     <CheckOut/>
    
    </Provider>
    
    </Grid>
    </ThemeProvider>
  );
}

export default App;
