import { useEffect ,useState} from "react"


const useFecth=(url)=>{
    const [data, setData] = useState(null)
    //conditonal handling
    const[ishandling,setishandling]=useState(true)
    const[error,seterror]=useState(null)
      //del by filter
    //   const handel=(id)=>{
    //     const newBlog=blogs.filter(blog=>id!==blog.id);
    //     setBlogs(newBlog)
    //     }
    //use effect use
    useEffect(()=>{
        const abortCont= new AbortController();
        fetch(url,{signal: abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error("unable to fetch")
            }
            return res.json();
        })
        .then(data=>{
            setData(data)
            setishandling(false);
            seterror(null)
        }).catch(e=>{
            if(e.name==="AborrError"){
                console.log('fetch aborted')
            }
            else{
            seterror(e.message)
            setishandling(false);}
        });
        return ()=>abortCont.abort()
    },[url]);
    return {data,ishandling,error}
}
export default useFecth