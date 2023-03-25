import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";

// layout
import RootLayout from "./Layouts/RootLayout/RootLayout";
import OrderLayout from "./Layouts/OrderLayout/OrderLayout";

// page
import ProductList from "./pages/Product/ProductList";
import Home from "./pages/Home/Home";
import OrderOnProcess from "./pages/Order/OrderOnProcess";
import OrderCompleted from "./pages/Order/OrderCompleted";
import Kitchen from "./pages/Kitchen/kitchen";
import { useAuthContext } from "./context/authContext";
import Login from "./pages/Login/Login";
import Notfound from "./pages/NotFound/Notfound";

function App() {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  return (
    <Routes>
      {currentUser && (
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ProductList />} />

          {
            currentUser.role.title === "cashier" && (
              <Route path="order" element={<OrderLayout />}>
                <Route index element={<OrderOnProcess />} />
                <Route path="order-completed" element={<OrderCompleted />} />
              </Route>
            )
          }

          <Route path="bartender" element={<Kitchen />} />
        </Route>
      )}
      {!currentUser && <Route path="/" element={<Login />} />}
      <Route path="*" element={<Notfound/>} />
    </Routes>
  );
}

export default App;
