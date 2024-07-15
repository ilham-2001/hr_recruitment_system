import { Routes, Route } from 'react-router-dom';

import ApplyForm from './pages/candidate/ApplyForm';
import Home from './pages/candidate/Home';
import Profile from './pages/candidate/Profile';
import Login from './pages/Login';
import Dashboard from './pages/hr/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/apply' element={<ApplyForm />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App;
