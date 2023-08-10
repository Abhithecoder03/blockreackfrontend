// import Button from '@mui/material/Button';
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Edit = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [author, setAuthor] = useState('Abhi');
//   const [image, setImage] = useState(null);
//   const history = useNavigate();

//   useEffect(() => {
//     // Fetch the blog data by ID when the component mounts
//     fetch(`http://localhost:9000/blogs/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setTitle(data.title);
//         setBody(data.body);
//         setAuthor(data.author);
//       })
//       .catch((error) => console.error('Error fetching blog:', error));
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('author', author);
//       formData.append('body', body);
//       formData.append('image', image);

//       const response = await fetch(`http://localhost:9000/blogs/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Updated Successfully');
//         history('/');
//       } else {
//         console.error('Error updating blog');
//       }
//     } catch (err) {
//       console.error('Error updating blog:', err);
//     }
//   };

//   return (
//     <div className="edit">
//       <p>Edit Blog</p>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <label>Blog title:</label>
//         <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
//         <label>Image:</label>
//         <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />

//         <label>Author Name:</label>
//         <select value={author} onChange={(e) => setAuthor(e.target.value)}>
//           <option value="Abhi">Abhi</option>
//           <option value="Abhishek">Abhishek</option>
//           <option value="A">A</option>
//         </select>

//         <label>Blog body:</label>
//         <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//         <Button variant="contained" color="success" type="submit">Update Blog</Button>
//       </form>
//     </div>
//   );
// };

// export default Edit;






























// import Button from '@mui/material/Button';
// import { useState,useEffect} from "react";
// import {useNavigate,useParams} from 'react-router-dom'
// const Updateblog = () => {
//     const navigate=useNavigate()
//     const{id}=useParams();
//     const [title,setTitle]=useState('')
//     const [body,setBody]=useState('')
//     const [author,setAuth]=useState('Abhi')
//     const [image, setImage] = useState(null);


//       useEffect(() => {
//     // Fetch the blog data by ID when the component mounts
//     fetch(`http://localhost:9000/blogs/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setTitle(data.title);
//         setBody(data.body);
//         setAuth(data.author);
//       })
//       .catch((error) => console.error('Error fetching blog:', error));
//   }, [id]);
    
//     // const Updateblog={title,author,body};
    
//     const handelUpdate=(e)=>{
//         e.preventDefault();
//          const formData = new FormData();
//             formData.append('title', title);
//             formData.append('author', author);
//             formData.append('body', body);
//             formData.append('image', image);

//         fetch('http://localhost:9000/blogs/'+id,{
//             method:'PUT',
//             // headers:{"content-type":"application/json"},
//             body:formData

//         }).then(()=>{
//             console.log("Sucessful")
//                 navigate("/");
//                 console.log("nav")
//         })
//         console.log("Sucessful")
//     }
//     return ( 
//     <div className="create">
//     <p>Add A NEw BLOg</p>
//     <form onSubmit={handelUpdate} encType="multipart/form-data">
//         <label>Blog title:</label>
//         <input type="text" required
//         value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

//         <label>Image:</label>
//                 <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />

//         <label>Author Name:</label>
//         <select name="" id="" value={author}
//         onChange={(e)=>{setAuth(e.target.value)}}>
//             <option value="Abhi">Abhi</option>
//             <option value="Abhishek">Abhishek</option>
//             <option value="A">A</option>

//         </select>
//         <label>Blog body:</label>
//         <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}>
            
//         </textarea>
//         <Button variant="contained" color="success" onClick={handelUpdate}>Update</Button>
//     </form>
   
// </div> );
// }
 
// export default Updateblog;


import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const Updateblog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Abhi');
    const [image, setImage] = useState(null);

    useEffect(() => {
        // Fetch the blog data by ID when the component mounts
        fetch(`http://localhost:9000/blogs/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setBody(data.body);
                setAuthor(data.author);
            })
            .catch((error) => console.error('Error fetching blog:', error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('body', body);
        formData.append('image', image);

        fetch('http://localhost:9000/blogs/' + id, {
            method: 'PUT',
            body: formData
        }).then(() => {
            console.log("Successful");
            navigate("/");
        }).catch((error) => {
            console.error('Error updating blog:', error);
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Paper elevation={3} sx={{ p: 3, maxWidth: 550, width: '100%' }}>
                {/* <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main' }}>U</Avatar> */}
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>
                    Edit Blog
                </Typography>
                <form onSubmit={handleUpdate} encType="multipart/form-data">
                    <TextField
                        label="Blog title"
                        variant="outlined"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                       
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        sx={{ mb: 2 ,width:"100%"}}
                    />

                    <TextField
                        select
                        label="Author Name"
                        variant="outlined"
                        fullWidth
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        sx={{ mb: 2 }}
                    >
                        <option value="Abhi">Abhi</option>
                        <option value="Abhishek">Abhishek</option>
                        <option value="A">A</option>
                    </TextField>

                    <TextField
                        label="Blog body"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={8} // Increase the number of rows
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <Button variant="contained" color="primary" fullWidth type="submit">
                        Update Blog
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default Updateblog;


