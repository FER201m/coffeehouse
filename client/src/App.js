import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="drinks" element={<ProductList />} />

      <Route path="order" element={<OrderLayout />}>
        <Route index element={<OrderOnProcess />} />
        <Route path="order-completed" element={<OrderCompleted />} />
      </Route>

      <Route path="kitchen" element={<Kitchen />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
