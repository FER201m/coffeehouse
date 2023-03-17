import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import RootLayout from "./Layouts/RootLayout/RootLayout";

// page
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>        
      <Route path="drinks" element={<ProductList/>}/>        
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  ) 
}

export default App;
