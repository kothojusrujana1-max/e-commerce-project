import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../store/cartSlice";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #04090B 40%, #DEC5B1 100%)",
        py: 4
      }}


    >

      <Container maxWidth="xl" sx={{ py: 4 }}>

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            color: "#DAC2AE"
          }}
        >
          My Shopping Cart
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center"
          }}
        >
          {cart.map((item, ind) => (
            <Card
              key={ind}
              sx={{
                width: 300,
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)"
                }
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  height: 220,
                  objectFit: "contain",
                  p: 2
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    height: 50,
                    overflow: "hidden",
                    color: "#04090B"
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "gray",
                    textTransform: "capitalize",
                    mt: 1
                  }}
                >
                  {item.category}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: "bold",
                    color: "#04090B",
                  }}
                >
                  ₹ {item.price}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() =>
                    dispatch(
                      removeItem({
                        index: ind,
                        price: item.price
                      })
                    )
                  }
                  sx={{
                    mt: 2,
                    background: "#04090B",
                    color: "#DEC5B1",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "#000"
                    }
                  }}
                >
                  Remove Item
                </Button>
              </CardContent>
            </Card>
          ))}



        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 5
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "#DAC2AE",
              fontWeight: "bold"
            }}
          >
            Total Price : ₹ {totalPrice.toFixed(2)}
          </Typography>

<Box
  sx={{
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row"
    },
    gap: 2,
    justifyContent: "center"
  }}
></Box>
 
          <Button
            variant="contained"
            sx={{
              background: "#04090B",
              color: "#DEC5B1",
              px: 4,
              width: {
                xs: "100%",
                sm: "auto"
              },
              "&:hover": {
                background: "#000"
              }
            }}
            onClick={() => alert("Order placed successfully")}
          >
            Buy Now
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#D9C1AE",
              color: "#D9C1AE",
              px: 4,
              width: {
                xs: "100%",
                sm: "auto"
              }
            }}
            onClick={() => navigate("/userDashboard")}
          >
            Continue
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Cart;