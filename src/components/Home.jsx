import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import heroPic from "../assets/hero-pic.png";

function Home() {
  return (
    <div style={{ margin: 0, padding: 0 }}>

      {/* HERO */}
 <Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#DEC5B1"
  }}
>
  <img
    src={heroPic}
    alt="banner"
    style={{
      width: "100%",
      maxWidth: "1600px",
      height: "auto",
      display: "block"
    }}
  />
</Box>

      {/* CATEGORY SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #04090B 40%, #DEC5B1 100%)",
          py: 6,
          px: {
            xs: 2,
            sm: 3,
            md: 6
          }
        }}
      >

        {/* TITLE */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            mb: 4,
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem"
            }
          }}
        >
          Trending Products
        </Typography>

        {/* GRID */}
        <Grid container spacing={3} justifyContent="center">

          {/* WOMEN */}
          <Grid item xs={12} sm={6} md={2.4}>
            <CardBox
              img="https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg"
              title="Women"
            />
          </Grid>

          {/* MEN */}
          <Grid item xs={12} sm={6} md={2.4}>
            <CardBox
              img="https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2026/JANUARY/6/Av7lOvo6_87f843b5fe2a457d806bae28c9f05aaa.jpg"
              title="Men"
            />
          </Grid>

          {/* KIDS */}
          <Grid item xs={12} sm={6} md={2.4}>
            <CardBox
              img="https://images.meesho.com/images/products/614140820/9ue7q_512.webp"
              title="Kids"
            />
          </Grid>

          {/* ACCESSORIES */}
          <Grid item xs={12} sm={6} md={2.4}>
            <CardBox
              img="https://images.unsplash.com/photo-1511556820780-d912e42b4980"
              title="Accessories"
            />
          </Grid>

          {/* BEAUTY */}
          <Grid item xs={12} sm={6} md={2.4}>
            <CardBox
              img="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
              title="Beauty"
            />
          </Grid>

        </Grid>
      </Box>

      {/* SALE */}
      <Box
        sx={{
          background: "#01171D",
          color: "#DEC5B1",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">
          Big Sale - Flat 50% OFF
        </Typography>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          background: "#01171D",
          color: "#DEC5B1",
          py: 3,
          textAlign: "center",
        }}
      >
        © 2026 Capital Style Store
      </Box>

    </div>
  );
}

export default Home;

/* CARD COMPONENT */
function CardBox({ img, title }) {
  return (
    <Box
      sx={{
        height: 260,
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "0.4s",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.35)",
        }}
      >
        <Typography sx={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}