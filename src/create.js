// import Button from '@mui/material/Button';
// import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Navbar from './nav';

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CreateContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  backgroundColor: '#192841', // Light gray background
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '20px auto',
});

const Header = styled('h2')({
  fontSize: '2rem',
  color: '#FFD700',
  marginBottom: '20px',
  textAlign: 'center',
});

const Form = styled('form')({
  width: '100%',
  maxWidth: '400px',
});

const Label = styled('label')({
  fontSize: '1.1rem',
  color: '#FFD700',
  marginTop: '15px',
  fontWeight: 'bold',
});

const Input = styled('input')({
  width: '100%',
  padding: '12px',
  marginTop: '8px',
  backgroundColor: 'white',
  border: '3px solid #1A1110',
  borderRadius: '5px',
});

const SelectInput = styled('select')({
  width: '107%',
  padding: '12px',
  marginTop: '8px',
  backgroundColor: 'white',
  border: '3px solid #1A1110',
  borderRadius: '5px',
});

const Textarea = styled('textarea')({
  width: '100%',
  padding: '12px',
  marginTop: '8px',
  resize: 'vertical',
  backgroundColor: 'white',
  border: '3px solid #1A1110',
  borderRadius: '5px',
});

const SubmitButton = styled(Button)({
  marginTop: '20px',
  padding: '12px 30px',
  fontWeight: 'bold',
  backgroundColor: 'red', // Black background color
  color: 'white', // White text color
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#333', // Darker black on hover
    transform: 'scale(1.05)',
  },
});

const authors = ['Abhi', 'Abhishek', 'A'];

const Create = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState(authors[0]);
  const [body, setBody] = useState('');
  const history = useNavigate();
  const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('author', author);
                formData.append('body', body);
                formData.append('image', image);
    
                const response = await fetch('http://localhost:9000/blogs', {
                    method: 'POST',
                    body: formData,
                });
    
                if (response.ok) {
                    console.log("Added Successfully");
                    setTitle('');
                    setBody('');
                    setAuthor('Abhi');
                    setImage(null);
                    history('/');
                } else {
                    console.error("Error adding blog");
                }
            } catch (err) {
                console.error("Error adding blog:", err);
            }
        };
        

  return (
    <CreateContainer>
      <Header>Add A New Blog</Header>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Label>Blog title:</Label>
        <Input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
        <Label>Image:</Label>
        <Input type="file" name="image" accept="image/*" onChange={e => setImage(e.target.files[0])} />

        <Label>Author Name:</Label>
        <SelectInput value={author} onChange={e => setAuthor(e.target.value)}>
          {authors.map(author => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </SelectInput>

        <Label>Blog body:</Label>
        <Textarea required value={body} onChange={e => setBody(e.target.value)} rows="6" />

        <SubmitButton type="submit">Add Blog</SubmitButton>
      </Form>
    </CreateContainer>
  );
};

export default Create;


































// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('Abhi');
//     const [image, setImage] = useState(null);
//     const history = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('author', author);
//             formData.append('body', body);
//             formData.append('image', image);

//             const response = await fetch('http://localhost:9000/blogs', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 console.log("Added Successfully");
//                 setTitle('');
//                 setBody('');
//                 setAuthor('Abhi');
//                 setImage(null);
//                 history('/');
//             } else {
//                 console.error("Error adding blog");
//             }
//         } catch (err) {
//             console.error("Error adding blog:", err);
//         }
//     };
    

//     return (
//         <div className="create">
            
//             <p>Add A New Blog</p>
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <label>Blog title:</label>
//                 <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <label>Image:</label>
//                 <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />

//                 <label>Author Name:</label>
//                 <select value={author} onChange={(e) => setAuthor(e.target.value)}>
//                     <option value="Abhi">Abhi</option>
//                     <option value="Abhishek">Abhishek</option>
//                     <option value="A">A</option>
//                 </select>

//                 <label>Blog body:</label>
//                 <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//                 <Button variant="contained" color="success" type="submit">Add Blog</Button>
//             </form>
//         </div>
//     );
// };

// export default Create;






























