// import { useState ,useEffect} from "react";
import Bloglist from "./Bloglist";
import Navbar from "./nav";
import useFecth from "./useFetch";
import Headers from "./headers";
import { useState ,useEffect} from "react";

const Home = () => {
    const{data:blogs,ishandling,error}=useFecth(" http://localhost:9000/blogs")

    console.log('Fetched blogs:', blogs)
    
    const [datafilter,setfilter]=useState()
    
    useEffect(() => {
        // This useEffect will be triggered whenever datafilter changes
        // Here, you can log the updated datafilter value
        setfilter(blogs);
        console.log('Updated datafilter:', datafilter);
    }, [blogs]);



    
    const categories=(blogs,cat)=>{
         setfilter(null)
        var data_filter = blogs.filter( element => element.author ==cat)
        
        setfilter(data_filter)
        
    }
   
   
   
    
    return ( 
        <div className="home">
            <Headers></Headers>
            <nav className="nav">
                 <a className="cat1"  onClick={()=>{setfilter(blogs)}}>All</a>
                <a className="cat1"  onClick={()=>{categories(blogs,"Abhi")}}>Author1</a>
                <a className="cat2" onClick={()=>{categories(blogs,"Abhishek")}}>Author2</a>
                <a className="cat3" onClick={()=>{categories(blogs,"A")}}>Author3</a>
                <div id="indicator"></div>
            </nav>
            {error && <p>{error}</p>}
            { ishandling && <h1>Loading....</h1>}
            
           <div class="homebloglist">

            {datafilter&&<Bloglist propsV={datafilter}heading="Bloging Site React" />}
           </div>
            
           
           
          
        </div>
     );
}
 
export default Home;