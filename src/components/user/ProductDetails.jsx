import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../../store/cartSlice";


import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";



function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
   

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </Box>
    );
  }



  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       background: "linear-gradient(135deg, #04090B  40%, #DEC5B1 100%)",
        padding: 3,
      }}
    >
    

      <Card

        sx={{
          width: 500,
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
     

        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 300,
            objectFit: "contain",
            backgroundColor: "#fff",
            padding: 2,
          }}
        />

        <CardContent>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            {product.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            ₹ {product.price}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
              marginBottom: 3,
              lineHeight: 1.6,
            }}
          >
            {product.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(addItem(product));
                alert("Added to cart");
              }}
              sx={{
                flex: 1,
                backgroundColor: "#111",
                fontSize: "12px",
                "&:hover": { backgroundColor: "#000" },
                color:"#DAC2AE"
              }}
            >
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/userDashboard")}
              sx={{
                flex: 1,
                fontSize: "12px",
                borderColor: "#DAC2AE",
                color: "#DAC2AE",
              }}
            >
              Back
            </Button>

          </Box>
        </CardContent>



      </Card>
    </Box>
  );
}

export default ProductDetails;