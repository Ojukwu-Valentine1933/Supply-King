const CheckoutComponent = () => {
  return (
    < >
    <div className="container">

    <button
        type="button"
        className="btn btn-primary form-control"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        
      >
        Launch demo modal
      </button>
    </div>
   

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer d-flex justify-content-center">
            
              <button type="button" className="btn btn-primary ">
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutComponent;
