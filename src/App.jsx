import './App.css';
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import CreatePost from './pages/CreatePost';

function App() {

  const PrivateRoute = ({element}) =>{
       const [cookie,setCookie]= useCookies(['access_token'])
       const nav = useNavigate()
      useEffect(()=>{
        if(!cookie.access_token){
          nav('/login')
        }
      },[])
      return element
  }

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<PrivateRoute element={<Home/>}/>} />
      <Route path='/create-post' element={<PrivateRoute element={<CreatePost/>}/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
