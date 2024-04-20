import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { privateRouteR3, privateRoutesSeller, publicRoutes,privateRoutesAdmin } from '@/routes/routes'
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
function App({user}) {
  return (
    <Router>
      <div className="App">

        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout;
            return <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          }
          )}
          {user.role && privateRouteR3.map((route) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout;
            return <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          }
          )}
          {user.role !== 'R3' && privateRoutesSeller.map((route) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout;
            return <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          }
          )}
          {user.role ==='R1' && privateRoutesAdmin.map((route) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout;
            return <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          }
          )}
          <Route path='*' element={<Navigate to={'/404-page'} />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
