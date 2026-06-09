import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../../store/cartSlice";
import { removeFromWishlist } from "../../store/wishlistSlice";

import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Wishlist() {
    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #04090B 40%, #DEC5B1 100%)",
                py: 4,
            }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        color: "#DEC5B1",
                        fontWeight: "bold",
                        mb: 4,
                    }}
                >
                     My Wishlist
                </Typography>

                {wishlistItems.length === 0 ? (
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#DEC5B1",
                            fontSize: "20px",
                        }}
                    >
                        No items in wishlist
                    </Typography>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 3,
                            justifyContent: "center",
                        }}
                    >
                        {wishlistItems.map((item) => (
                            <Card
                                key={item.id}
                                sx={{
                                    width: 300,
                                    borderRadius: 3,
                                    boxShadow: 5,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                        height: 220,
                                        objectFit: "contain",
                                        p: 2,
                                        background: "#fff",
                                    }}
                                />

                                <CardContent>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                            height: 50,
                                            overflow: "hidden",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            color: "#04090B",
                                        }}
                                    >
                                        ₹ {item.price}
                                    </Typography>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 2,
                                            background: "#04090B",
                                            color: "#DEC5B1",
                                            "&:hover": {
                                                background: "#000",
                                            },
                                        }}
                                        onClick={() => {
                                            dispatch(addItem(item));
                                            dispatch(removeFromWishlist(item.id));
                                            alert("Item added to Cart");
                                        }}
                                    >
                                        Add to Cart
                                    </Button>

                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            mt: 1,
                                            borderColor: "#DEC5B1",
                                            color: "#DEC5B1",
                                        }}
                                        onClick={() =>
                                            dispatch(removeFromWishlist(item.id))
                                        }
                                    >
                                        Remove
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}
            </Container>

            <Box
                sx={{
                    textAlign: "center",
                    mt: 5,
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "#DEC5B1",
                        color: "#DEC5B1",
                        px: 4,
                        py: 1,
                        fontWeight: "bold",
                       
                    }}
                    onClick={() => navigate("/userDashboard")}
                >
                    Continue Shopping
                </Button>
            </Box>

        </Box>
    );
}

export default Wishlist;