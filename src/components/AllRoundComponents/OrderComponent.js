import styles from "./OrderComponent.module.css";
import categories from "../../helpers/categories";
import PictureUpload from "../../helpers/PictureUpload";

const OrderComponent = () => {
  return (
    <div className={`container ${styles.order_div}`}>
      <h1 className="mt-5 text-center">Order</h1>
      <div
        className={`alert alert-warning text-center ${styles.alert}`}
        role="alert"
      >
        Please ensure to fill in all compulsory input fields
      </div>
      <form>
        <div className={`order-cartegories ${styles.order_categories}`}>
          <label className={`${styles.label} text-center`}>
            Select Category
          </label>
          <select className={`${styles.select_category}`}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <PictureUpload />
        </div>
        <div>
          <div className="mt-3">
            <div className={`${styles.compulsory}`}>
              <label className={`${styles.label}`}>Item Name</label>{" "}
              <label>compulsory!</label>
            </div>
            <input type="text" className={`form-control ${styles.input}`} />
          </div>

          <div className="mt-3">
            <div className={`${styles.compulsory}`}>
              <label className={`${styles.label}`}>Item Make (Company)</label>
              <label>compulsory!</label>
            </div>
            <input type="text" className={`form-control ${styles.input}`} />
          </div>
          <div>
            <div>
              <h5 className={`text-center mt-5 ${styles.h5}`} >
                Physical Properties (optional)
              </h5>
            </div>
            <div className={`mt-3 ${styles.measurement}`}>
              <div className={`${styles.optional}`}>
                <label className={`${styles.label}`}>Size (eg. Inches)</label>
                <input type="text" className={`form-control ${styles.input}`} />
              </div>

              <div className={`${styles.optional}`}>
                <label
                  className={`${styles.label}`}
                  style={{ textAlign: "right" }}
                >
                  Weight (eg. Kg)
                </label>
                <input type="text" className={`form-control ${styles.input}`} />
              </div>
            </div>
          </div>
          <div className={`personal information ${styles.personalInformation}`}>
            <div className={`${styles.h5}`}><h5>Delivery Details     (compulsory)</h5></div>
            <label>Customer Name: </label>
            <input className={`form-control ${styles.input}`} type="text" />
            <label>WhatsApp Number: </label>
            <input className={`form-control ${styles.input}`} type="email" />
            <label>Phone Number: </label>
            <input className={`form-control ${styles.input}`} type="number" />
            <label>Delivery Location: </label>
            <input className={`form-control ${styles.input}`} type="text" />
            <label>Item Description: </label>
            <textarea className={`form-control ${styles.text_area}`} placeholder="Here, you can provide detailed information about your request, such as the item quantity, color, and any other details you consider important."/>

          </div>
        </div>
        <div className="mt-4">
          <button className={`btn btn-primary form-control ${styles.btn}`}>PLACE ORDER</button>
          </div>
          {/* <aside><strong>NB:</strong> Orders placed are currently pending and under review. We will notify you once the availabilty is confirmed!!!</aside> */}



      </form>
    </div>
  );
};
export default OrderComponent;
