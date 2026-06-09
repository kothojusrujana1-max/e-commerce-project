import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addItem } from "../../store/cartSlice";
import { addToWishlist } from "../../store/wishlistSlice";

function UserHome() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [search, setSearch] = useState("");
  async function getData() {
    let res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='product-page'
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #04090B 40%, #DEC5B1 100%)",
        padding: "20px"
      }}
    >
      <h1 className="products-title">
        Shop the Latest Fashion Collection
      </h1>
      <p className="products-subtitle">
        Discover fashion that matches your personality.
      </p>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px",

          }}
        />
      </div>
      <div className="product-container">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>

            <img src={item.image} alt="" />

            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "18px",
                fontWeight: "600",
                color: "#04090B",
                lineHeight: "1.4"
              }}
            >
              {item.title}
            </h1>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                fontWeight: "400",
                color: "#666",
                textTransform: "capitalize",
                letterSpacing: "1px"
              }}
            >
              {item.category}
            </h2>
            <h3
              style={{
                color: "#04090B",
                fontFamily: "Poppins, sans-serif"
              }}
            >
              ₹ {item.price}
            </h3>


            <div
              style={{
                color: "#04090B",
                fontWeight: "bold",
                marginBottom: "10px",
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              ⭐ {item.rating.rate} ({item.rating.count} Reviews)
            </div>

            <button
              onClick={() => {
                dispatch(addItem(item))
                alert("Item added to cart")
              }}>
              Add to cart
            </button>

            <button 
            style={{
               background: "linear-gradient(to right, #04090B, #DEC5B1)"
            }}
              onClick={() => {
                dispatch(addToWishlist(item));
                alert("Added to Wishlist");
              }}
            >
              ❤️ Wishlist
            </button>

            <button
              onClick={() =>
                navigate(`/userDashboard/productDetails/${item.id}`)
              }
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>

  )
}

export default UserHome