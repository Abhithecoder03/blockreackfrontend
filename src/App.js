import Navbar from './nav';
// import './App.css';
import Home from './home';
import Create from './create';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Updateblog from './updateblog';
import Headers from './headers';

import { Auth0Provider } from '@auth0/auth0-react'

import { useAuth0 } from "@auth0/auth0-react";




function App() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();

  

  
  return (
    <Auth0Provider
    domain="dev-zjeg3rqf3l0xjxe2.us.auth0.com"
    clientId="SqFJwIdWpNrFC5TL7DaP5YNDj2gpsiNc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
    <div className="App">
    <Navbar></Navbar>
    
    
    <div className='content'>
      <Routes>
         <Route exact path="/" element={<Home/>}/>
             
         
         <Route exact path="/create" element={<Create/>}/>
         <Route path="/blogs/:id" element={<BlogDetails/>}/>
         <Route exact path="/update/:id" element={<Updateblog/>}/>
             
       
      </Routes>
    </div>
    </div>
    </Router>
    </Auth0Provider>
  );
}

export default App;
