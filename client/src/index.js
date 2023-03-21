import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import store from "./redux/store";
import { Provider } from "react-redux";
import AuthContextProvider from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: "lightblue",
//       contrastText: "#fff",
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <GlobalStyles>
      {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </GlobalStyles>
    {/* </React.StrictMode> */}
  </Provider>
);
