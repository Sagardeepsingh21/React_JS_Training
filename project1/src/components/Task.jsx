import React, { useState, useEffect } from "react";

function Task() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // filtered list
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // show all by default
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  //  Filtering products from diffrenent category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* drop down */}
      <div className="dropdown mb-3">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedCategory}
        </a>

        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={() => filterByCategory("All Products")}
            >
              All Products
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => filterByCategory("men's clothing")}
            >
              Men's Clothing
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => filterByCategory("women's clothing")}
            >
              Women's Clothing
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => filterByCategory("electronics")}
            >
              Electronics
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => filterByCategory("jewelery")}
            >
              Jewelry
            </button>
          </li>
        </ul>
      </div>

      <h2> {selectedCategory}</h2>

      {/*  display products */}
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={styles.grid}>
          {filteredProducts.map((p) => (
            <div key={p.id} style={styles.card}>
              <img src={p.image} alt={p.title} style={styles.image} />
              <h4 style={styles.title}>{p.title}</h4>
              <p style={styles.category}>{p.category}</p>
              <p style={styles.price}>${p.price}</p>
            </div>
             
          ))}
        </div>
      )}
    </div>
  );
}

// styles inline
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    width:"200px",
    Height:"200px",
    border: "5px solid #000000ff",
    borderRadius: "200px",
    padding: "15px",
    backgroundColor: "white",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "600",
    margin: "8px 0",
  },
  category: {
    fontSize: "13px",
    color: "#777",
  },
  price: {
    fontWeight: "bold",
    color: "#007b00",
  },
};

export default Task;
