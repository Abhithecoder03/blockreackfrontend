// import {Link} from 'react-router-dom';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import {useEffect,useState } from "react";

// // import { width } from '@mui/system';

// export default function Bloglist(props) {
//   const [blogs,setblogs]=useState(props.propsV)
//   console.log('Received blogs:', blogs)

//    useEffect(() => {
//     setblogs(props.propsV);
//   }, [props.propsV]);
 
//   // const heading=props.heading;
//   // const img=['/modi.jpg','/yogi.jpg','/swami.jpg','/hemanta.jpg']
    
//   return (
//     <div className="bloglist" >

    
//     {blogs.map((blog,index)=>(
       
//       <Card sx={{maxWidth:380,overflow: "hidden", textOverflow: "ellipsis",overflow: "hidden",my:6,alignItems:"center" ,backgroundImage:`url(3.jpg)`,border:"Highlight", boxShadow:12,borderColor:"yellowgreen"}} key={blog.id}>
//         <CardMedia
//           sx={{height:300,minWidth:380,alignItems:"center",pl:"4px"}}
//           image={`http://localhost:9000/uploads/${blog.image}`}
//           title={blog.image}
        
//         />
//         <CardContent sx={{textAlign:"center",color:"red"}}>
//           <Typography gutterBottom variant="h5" component="div">
//             {blog.title}
//           </Typography>
//           <Typography variant="body2" color="black" sx={{maxHeight:200,overflow: "hidden", textOverflow: "ellipsis" ,alignItems:"center", lm:66}}>
//           {blog.body}
//           </Typography>
//         </CardContent>
//         <CardActions>
        
//           <Button variant="contained"  size="small" sx={{border:"Highlight",boxShadow:1,bgcolor:"black"}}>
//             <Link variant="inherit" to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' ,color:'white'}}>View</Link>
//           </Button>

//           <Button size="small" variant='contained' sx={{border:"Highlight",boxShadow:1,bgcolor:"black"}}>Edit</Button>
//         </CardActions>
        
//       </Card>
      
      
//     ))

//     }
//     </div>
//   );
// }








import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Bloglist(props) {
  const [blogs, setBlogs] = useState(props.propsV);

  useEffect(() => {
    setBlogs(props.propsV);
  }, [props.propsV]);

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <Card
          key={blog._id}
          className="blog-card"
          sx={{
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={`http://localhost:9000/uploads/${blog.image}`}
            alt={blog.title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {blog.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="blog-body"
              sx={{ maxHeight: 100, overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {blog.body}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              component={Link}
              to={`/blogs/${blog._id}`}
              sx={{ backgroundColor: '#3f51b5', '&:hover': { backgroundColor: '#283593' } }}
            >
              View
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              component={Link}
              to={`/update/${blog._id}`}
              sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#d32f2f' } }}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}



