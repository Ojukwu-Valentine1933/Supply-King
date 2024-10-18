// src/components/MarketPlace.js
import { useState } from "react";
import categories from "../../../helpers/categories";
import CategoryButton from "../../../helpers/CategoriesButton"; // Adjust the import path as necessary
import styles from "./MarketPlace.module.css";
// import appIcon from "../../../assets/app-icon.png";

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
                className="form-control"
                style={{
                  borderRadius: "35px",
                  height: "45px",
                  paddingLeft: "45px",
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
                <i className="bi bi-search" style={{margin: "8px"}}></i>
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
      <div className="product cards conatiner mt-5">

      </div>
    </div>
  );
};

export default MarketPlace;
