import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';


const MakeAdmin = () => {
     const [email, setEmail] = useState('')
     const { token } = useAuth();

     const handleOnBlur = e => {
          setEmail(e.target.value);
     }

     const handleSubmit = e => {
          e.preventDefault();
          const user = { email }
          const url = `https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/users/admin`;
          fetch(url, {
               method: 'PUT',
               headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         alert('make admin successfully')
                         e.target.reset()

                    }
                    console.log(data);
               });
     }

     return (
          <div>
               <Typography variant="h5">Make Admin</Typography>
               <form onSubmit={handleSubmit}>
                    <TextField
                         sx={{ mb: 4 }}
                         label="email"
                         variant="standard"
                         onBlur={handleOnBlur}
                    />
                    <br />
                    <Button type="submit" variant="contained">make admin</Button>
               </form>
          </div>
     );
};

export default MakeAdmin;