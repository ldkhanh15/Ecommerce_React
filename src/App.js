import { BrowserRouter as Router, Routes, Route,useNavigate, Navigate } from 'react-router-dom'
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
          <Route path='*' element={<Navigate to={'/404-page'}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
