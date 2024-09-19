import { Link } from "react-router-dom";
const LoginComponent = () => {
    return (
        <div
        className="card signup-form"
        style={{ width: "100%", height: "30rem" }}
      >
        <h1 className="card-header text-center" style={{color: "#b22222"}}>Login</h1>
        <div className="card-body mt-5">
        <form className="container">
         
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        
          <div className="form-group">
            <Link to={"/loginsuccess"}>
              <button
                type="submit"
                className="btn btn-primary form-control"
                style={{ marginTop: "40px" }}
              >
                Login
              </button>
            </Link>
          </div>
          <p className="have-account">
           Don't have an account?{" "}
            <Link to={"/auth/signup"} style={{ color: "#B22222" }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
    )
}

export default LoginComponent;