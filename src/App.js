import Navbar from './nav';
// import './App.css';
import Home from './home';
import Create from './create';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Updateblog from './updateblog';
import Headers from './headers';

function App() {
  
     
  
  return (
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
  );
}

export default App;
