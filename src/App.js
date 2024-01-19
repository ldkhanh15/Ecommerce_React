import { BrowserRouter as Router, Routes, Route, unstable_HistoryRouter } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '@/routes/routes'
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';

function App() {

  return (
    <Router>
      <div className="App">

        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            return <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          }
          )}
          {privateRoutes.map((route) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            return <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          }
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
