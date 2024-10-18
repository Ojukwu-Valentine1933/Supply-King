// src/components/MarketPlace.js
import { useState } from "react";
import categories from "../../../helpers/categories";
import CategoryButton from "../../../helpers/CategoriesButton"; // Adjust the import path as necessary
import styles from "./MarketPlace.module.css";
import MarketCarousel from "../../../helpers/Carousel";


const MarketPlace = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`);
    // Additional logic to filter or display items based on the selected category can be added here.
  };

  return (
    <div>
      <div className={`container mt-4`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.category_container}`}
          style={{ marginTop: "70px" }}
        >
          <div>
            <h3>Vego Store</h3>
          </div>
          <div>
            <CategoryButton
              categories={categories}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </div>
      <div>
        <form>
          <div className="d-flex justify-content-center container mt-3">
            <div className="input-group" style={{ width: "100%" }}>
              <input
                type="search"
                className={`form-control ${styles.input_search}`}
                style={{
                  borderRadius: "35px",
                  height: "45px",
                  paddingLeft: "20px",
                }}
                placeholder="Search"
              />
              <span
                className="input-group-text"
                style={{
                  position: "absolute",
                  left: "10px",
                  border: "none",
                  background: "transparent",
                  padding: "0",
                  margin: "0",
                  fontSize: "20px",
                }}
              >
                <i className="bi bi-search" style={{ margin: "8px" }}></i>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div>
        {selectedCategory && (
          <h4 className="text-center mt-2" style={{ fontSize: "15px" }}>
            Selected Category: {selectedCategory}
          </h4>
        )}
      </div>
      <div className="product cards conatiner mt-4">
        <div
          className="filter d-flex container"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <h4 className={`${styles.filter_h4}`}>Sort By: </h4>
          </div>
          <div>
            <select>
              <option>Newest</option>
              <option>Trending</option>
              <option>On Sale</option>
              <option>Top Rated</option>
              <option>Best Sellers</option>
              <option>Limited Stock</option>
              <option>Discount prices</option>
            </select>
          </div>
        </div>

        <div className="goods display">
          <MarketCarousel />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
