import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useFecth from './useFetch';
import Headers from './headers';
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, ishandling, error } = useFecth(`http://localhost:9000/blogs/${id}`);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:9000/blogs/${blogs._id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="blogdetail">

        
    <Headers></Headers>


      {ishandling && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article style={{ display: 'flex', alignItems: 'center', gap: '30px', padding: '20px' }}>
          <div style={{ flex: 1 }}>
            <img
              className="imgd"
              src={`http://localhost:9000/uploads/${blogs.image}`}
              alt="Blog"
              style={{
                width: '350px',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
              {blogs.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: '20px' }}>
              Written By {blogs.author}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              {blogs.body}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
                sx={{ marginRight: '10px', backgroundColor: '#FF5757', color: '#fff' }}
              >
                Delete
              </Button>
              <Link to={`/update/${blogs._id}`}>
                <Button variant="contained" startIcon={<EditIcon />} sx={{ backgroundColor: '#00BFFF', color: '#fff' }}>
                  Edit
                </Button>
              </Link>
            </Box>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;






















// import { useNavigate, useParams, Link } from "react-router-dom";
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit'
// import Box from '@mui/material/Box';

// import useFecth from './useFetch'
// const BlogDetails = () => {
//     const { id } = useParams();
//     console.log(id,"data")
//     const { data: blogs, ishandling, error } = useFecth(" http://localhost:9000/blogs/" + id);
//     const navigate = useNavigate()

//     console.log(blogs,"data")

//     //delete function
//     const handel = () => {
//         fetch('http://localhost:9000/blogs/' + blogs._id, {
//             method: 'DELETE'
//         }).then(() => {
//             navigate('/')
//         })
//     }
//     //


//     return (
//         <div className="blogdetail">

//             {ishandling && <div>Loading...</div>}
//             {error && <div>{error}</div>}
//             {
//                 blogs && (
//                     <article>
//                         <div className="buttond">

//                         <Box sx={{
//                             display: 'flex',
//                             flexDirection: 'row-reverse',
//                             p: 1,
//                             m: 1,

//                             borderRadius: 1,
//                         }}>
//                         <div className="buttond"></div>

//                             <Button variant="contained" sx={{bgcolor:"black"}} startIcon={<DeleteIcon />} onClick={handel}  >Delete</Button>


//                             <Link to={`/update/${blogs._id}`}>
//                                 <Button variant="contained" startIcon={<EditIcon />} sx={{ mr: "14px" ,bgcolor:"black" }}>EDIT</Button>
//                             </Link>
//                         </Box>
//                         </div>

//                         <h2 class="HeadingD"> {blogs.title}</h2>
//                         <p class="Wby">Written By {blogs.author}</p>
//                         <div className="maind">
//                         <img className="imgd" src={`http://localhost:9000/uploads/${blogs.image}`}></img>
//                         <div class="detailtext"> {blogs.body}</div>
//                         </div>



//                     </article>
//                 )
//             }

//         </div>
//     );
// }

// export default BlogDetails;