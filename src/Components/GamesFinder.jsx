import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

const GamesFinder = () => {
  const {games, setGames} = useState(null);
  const {error, setError} = useState(null);

  const inputRef = useRef(null)

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchGames = async () => {
    const game = inputRef.current.value;
    try {
      const response = await fetch(`${import.meta.env.VITE_FREETOGAMES_API_URL}${game}`)
      if(!response.ok) {
        throw new Error('Usuario no encontrado');
      }
      const data = await response.json();
      setUser(data);
      setError(null);

    } catch (error) {
        setError(error.message);
        setUser(null); 
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        maxWith: 400,
        margin: "auto",
        padding: 2,
        textAlign: "center",
        marginTop: 2  
      }}
    >
      <Typography>Buscar juego</Typography>
      <TextField 
        inputRef={inputRef}
        fullWidth
        variant='outlined'
        placeholder='Ingrese el nombre del juego'
        margin='normal'
      />  
      <Button
        variant='contained'
        color='primary'
        onClick={fetchGames}
        sx={{marginTop: 2}}
      >
        Buscar
        </Button>    
    </Paper>
  )
}

export default GamesFinder