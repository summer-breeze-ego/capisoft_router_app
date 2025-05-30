
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import NoPage from './pages/NoPage';
import PrivateRoute from './components/PrivateRoute';
import GoToDashboard from './components/GoToDashboard.tsx';


function App() {

  return (
    <>
      <div>
        <HashRouter>
            <Routes>

              {/* public */}
              <Route 
                path='/login' 
                element = {
                  <GoToDashboard>
                    <Login />
                  </GoToDashboard>
                } /> 
              
              {/* private */}
              <Route 
                path='/dashboard' 
                element = {
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route 
                path='/users' 
                element = {
                  <PrivateRoute>
                    <Users />
                  </PrivateRoute>
                } 
              />

              <Route path='*' element = {< NoPage />} />
              
            </Routes>
        </HashRouter>
      </div>
      
    </>
  )
}

export default App
