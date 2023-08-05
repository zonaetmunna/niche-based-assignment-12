import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./view/components/PrivateRoute/PrivateRoute";
import Header from "./view/components/common/Header/Header";
import AddProduct from "./view/components/page/dashboard/AddProduct/AddProduct";
import MakeAdmin from "./view/components/page/dashboard/MakeAdmin/MakeAdmin";
import AllOrders from "./view/components/page/dashboard/ManageOrders/AllOrders";
import ManageP from "./view/components/page/dashboard/ManageProducts/ManageP";
import MyOrders from "./view/components/page/dashboard/MyOrders/MyOrders";
import Payment from "./view/components/page/dashboard/Payment/Payment";
import ReviewUser from "./view/components/page/dashboard/ReviewUser/ReviewUser";
import Dashboard from "./view/pages/Dashboard/Dashboard";
import Explore from "./view/pages/Explore/Explore";
import Home from "./view/pages/Home/Home";
import Login from "./view/pages/Login/Login";
import Purchase from "./view/pages/Purchase/Purchase";
import Register from "./view/pages/Register/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/explore" element={<Explore />} />

            <Route
              path="/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard>
                    <Route path="myOrders" element={<MyOrders />} />
                    <Route path="reviewUser" element={<ReviewUser />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="manageAllOrders" element={<AllOrders />} />
                    <Route path="addProduct" element={<AddProduct />} />
                    <Route path="makeAdmin" element={<MakeAdmin />} />
                    <Route path="manageProducts" element={<ManageP />} />
                  </Dashboard>
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
