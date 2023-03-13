import React,{useContext,useState} from 'react'
import { CartContext } from '../../context/index';
import { createOrder } from '../../services/api';


import { Button, FormControl, Grid, TextareaAutosize, TextField,Typography } from '@mui/material'

const initailValues ={
  name:'',
  phone_no:'',
  email:"",
  address:''

}
const Index = () => {
  const { checkOut,cartItems,getCartTotal,closeCheckOutForm,clearCart} = useContext(CartContext);
  const [info,setInfo]=useState({
...initailValues
  })

    const onChangeHandler=(e)=>{
      setInfo({
        ...info,
        [e.target.name]:e.target.value
      })
    }
    const onSubmitHandler=(e)=>{
      e.preventDefault();
      const data ={
        products:cartItems,
        customer:info, 
        total_price:getCartTotal()
      }
      createOrder(data).then((res)=>{
        if (res.status=201){
          console.log(res)
          alert('order succcessfully placed')
          closeCheckOutForm()
          clearCart()

        }
        
      })
    
    }
  return (
    <>
    {
      checkOut?(<Grid  position={'absolute'} top={'40%'} px={2} py={2} left={'50%'} sx={{transform:'translate(-50%,-50%)',backgroundColor:'white'}} >

      <form style={{display:'flex',flexDirection:'column',width:700}}  onSubmit={onSubmitHandler}>
          <Typography variant='h3'>
  
      Customer Info
          </Typography>
          
          <TextField id="standard-basic" name='name' onChange={onChangeHandler} sx={{my:2}} label="Full Name" variant="standard" />
      
      <TextField id="standard-basic" name='phone_no' onChange={onChangeHandler} sx={{my:2}}  label="Phone No" variant="standard" />
      <TextField id="standard-basic" name='email' onChange={onChangeHandler}sx={{my:2}} type={'email'} label="Email Address" variant="standard" />
  
      <TextareaAutosize minRows={5} name='address' onChange={onChangeHandler} placeholder="Address"  my={2}/>
      <Button variant="contained" type='submit' sx={{my:2}} my={2}>Submit</Button>
    </form>
      </Grid>):null
    }
    </>
 
  )
}

export default Index