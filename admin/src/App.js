import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { authRouter } from "./router";
import DefaultLayout from "./components/layout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { useAuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useAuthContext();
  return (
    <>
        <Routes>
          {currentUser &&
            authRouter.map((router, index) => {
              const Page = router.component;
              let Layout = DefaultLayout;

              if (router.layout) {
                Layout = router.layout;
              }

              return (
                <Route
                  path={router.path}
                  key={index}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          {!currentUser && <Route path="/" element={<Login />} />}
        </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
