import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { authRouter } from './router';
import DefaultLayout from './components/layout/DefaultLayout';
import { makeStyles } from '@mui/styles';



function App() {
  return (
    <Router>
      <Routes>
        {
          authRouter.map((router, index) => {
            const Page = router.component;
            let Layout = DefaultLayout;

            if (router.layout) {
              Layout = router.layout;
            }

            return <Route
              path={router.path}
              key={index}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />

          })
        }
      </Routes>
    </Router >
  );
}

export default App;
