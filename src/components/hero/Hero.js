import React from 'react'
import { Grid,Typography } from '@mui/material'
import background from '../../assets/21.jpg'

const Hero = () => {
  return (
   
    <Grid container spacing={2} minHeight="70vh" px={3} sx={{backgroundImage:`url(${background})`,backgroundSize:'fit',alignItems:'center', justifyContent:"center"}}>
        <Typography sx={{textTransform:'capitalize'}} variant='h3' color={'whitesmoke'}>
            welcome to food time
        </Typography>
    </Grid>
  )
}

export default Hero