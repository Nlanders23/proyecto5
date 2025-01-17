import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'

const RandomMesaggeBar = () => {
  const [message, setMessage] = useState('Chiste del día');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(import.meta.env.VITE_RAMDONJOKERS_API_URL)
        .then(res => res.json())
        .then(data => setMessage(data.value));
    }, 10000); 

    return () => clearInterval(intervalId);
  }, []);

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
             <Alert severity="info" sx={{ width: '100%' }}>
                 {message}
                </Alert>
      </Snackbar>
      )
}
  
export default RandomMesaggeBar