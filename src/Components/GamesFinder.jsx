import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const GamesFinder = () => {
  
  const {error, setError} = useState(null);
  const {isLoading, setIsLoading} = useState(false);

  const inputRef = useRef(null)
  const navigate = useNavigate();

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchGames = async () => {
    const game = inputRef.current.value;

    if (!game.trim()) {
      setError('Por favor ingrese un nombre de juego');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_FREETOGAMES_API_URL;
      if (!apiUrl) {
        throw new Error('La URL de la API no está configurada');
      }

      const response = await fetch(`${import.meta.env.VITE_FREETOGAMES_API_URL}${game}`)
      if(!response.ok) {
        throw new Error(
          response.status === 404 
          ? 'Juego no encontrado' 
          : 'Error al buscar el juego'
        );
      }
      const data = await response.json();
      navigate(`/juegos/${data.title}`, { state: { game: data } });

    } catch (error) {
        setError(error.message); 
    } finally {
      setIsLoading(false)
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
        disabled={isLoading}
        sx={{marginTop: 2}}  
      >
       {isLoading? 'Buscando...' : 'Buscar'} 
        </Button>    
    </Paper>
  )
}

export default GamesFinder