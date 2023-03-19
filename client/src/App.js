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
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import OrderOnProcess from "./pages/Order/OrderOnProcess";
import OrderCompleted from "./pages/Order/OrderCompleted";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="drinks" element={<ProductList />} />

      <Route path="order" element={<OrderLayout/>}>
        <Route index element={<OrderOnProcess/>}/>
        <Route path="order-completed" element={<OrderCompleted/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
