import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Project from './components/Project';
import SignUp from './components/SignUp';
import DrawerAppBar from './components/NavBar';

function App() {
  return (
    <>
    <div className='mb-3'>
    <DrawerAppBar />

    </div>
    <div className='mt-3'>

      <Routes>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>


      </Routes>
      </div>

    </>
  );
}

export default App;
