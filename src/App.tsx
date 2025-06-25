
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import NoPage from './pages/NoPage';
import PrivateRoute from './context/PrivateRoute.tsx';
import GoToPage from './context/GoToPage.tsx';
import Reviews from './pages/Reviews.tsx'


function App() {

  return (
    <>
      <div>
        <HashRouter>
          <GoToPage />
          <Routes>

            {/* public */}
            <Route
              path='/login'
              element={
                <Login />
              } />

            {/* private */}
            <Route
              path='/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path='/reviews'
              element={
                <PrivateRoute>
                  <Reviews />
                </PrivateRoute>

              }
            />

            <Route
              path='/users'
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            />

            <Route path='*' element={< NoPage />} />

          </Routes>
        </HashRouter>
      </div>

    </>
  )
}

export default App
