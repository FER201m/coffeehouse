import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import RootLayout from "./Layouts/RootLayout";

// page


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  ) 
}

export default App;
