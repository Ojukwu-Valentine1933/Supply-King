import { Routes, Route } from "react-router-dom";
import Welcomepage from "../pages/WelcomePages/WelcomePage";
import CategoryPage from "../pages/AllRoundPages/CategoryPage";
import CustomerDashBoardPage from "../pages/AllRoundPages/CustomerDashBoardPage";
import OrderPage from "../pages/AllRoundPages/OrderPage";
import LoginSuccessPage from "../pages/SuccessPages/LoginSuccessPage";
import SignupSuccessPage from "../pages/SuccessPages/SignupSuccessPage";
import LoginPage from "../pages/AuthPages/LoginPage";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/dashboard" element={<CustomerDashBoardPage />} />
      <Route path="dashboard/order" element={<OrderPage/>}/>
      <Route path="/loginsuccess" element={<LoginSuccessPage/>}/>
      <Route path="/signupsuccess" element={<SignupSuccessPage/>}/>
      <Route path="/auth/login" element={<LoginPage/>}/>
    </Routes>
  );
};

export default AppRoutes