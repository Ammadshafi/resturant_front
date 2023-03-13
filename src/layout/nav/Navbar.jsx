import React, { useContext, useState } from 'react'
import { LocalMall, Delete } from '@mui/icons-material';
import { CartContext } from '../../context/index';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Card,
  Grid,
  Button,
  CardMedia,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@mui/material";
const Navbar = () => {
  const { getCartLength, cartItems, removeItem,getCartTotal,openCheckOutForm } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <AppBar  sx={{backgroundColor:'white',color:'black'}} >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">
          FoodTime
        </Typography>
        <IconButton color="inherit" onClick={()=>setCartOpen(!cartOpen)}>
          <LocalMall />
          <sup>{getCartLength()}</sup>
        </IconButton>
        {
          cartOpen ? (
            <Grid container width={'700px'} py={4} position={'absolute'} sx={{ backgroundColor: 'white', color: 'black' }} right={0} top={100}>


              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name </TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Qty</TableCell>
                      <TableCell align="right">Item Total</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((product) => (
                      <TableRow
                        key={product.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {product.name}
                        </TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">{product.quantity}</TableCell>
                        <TableCell align="right">{product.item_total}</TableCell>
                        <TableCell align="right">
                          <IconButton color="inherit" onClick={()=>removeItem(product)}>
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid container px={2} py={2}>
              <Grid xs={6} >
              <Typography variant="h6">
              Total Amount
             </Typography>
             <Typography variant="h6">
              {getCartTotal()}
             </Typography>
                </Grid>
                <Grid xs={6} alignItems='end' display={'flex'}>
            <Button variant='contained' onClick={()=>(openCheckOutForm(),setCartOpen(false))}>
              Check Out
            </Button>
                </Grid>
              </Grid>
             


            </Grid>
          ) : null
        }

      </Toolbar>
    </AppBar>
  )
}

export default Navbar