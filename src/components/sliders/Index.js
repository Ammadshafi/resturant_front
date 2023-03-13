import React, { useContext,useState,useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { CartContext } from '../../context/index';
import { fetchAllProducts } from '../../services/api';

// Product data array here...

const Slider = () => {
    const [products, setProducts] = useState([])
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  useEffect(() => {
    const fetchProducts = async()=>{
      const res = await fetchAllProducts()
      setProducts(res.data)
    }
    
    fetchProducts()
  }, [])

  return (
   
    <Grid container spacing={2} px={2} my={2} >
       <Grid xs={12} px={2}>
      
      <Typography variant="h4" sx={{borderBottom:'3px solid black',width:'100px'}}>
        Menu
      </Typography>
      </Grid>
      {products.map((product) =>{
        
      return(
        <Grid item xs={12} sm={6} md={3} key={product.id} >
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image}
              height="200"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
             
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h6">
                ${product.price}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => handleAddToCart({name:product.name,quantity:1,item_total:product.price,menu_item_id:product.id})}>
                Add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )})}
    </Grid>
  );
};

export default Slider;