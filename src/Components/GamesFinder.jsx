import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GamesFinder = () => {
  const [error, setError]   = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchGames = async () => {
    const gameName = inputRef.current.value;

    if (!gameName.trim()) {
      setError('Por favor ingrese un nombre de juego');
      return;
    }

    

    try {
      setIsLoading(true);
      setError(null);
      const apiUrl = import.meta.env.VITE_FREETOGAMES_API_URL;
      if (!apiUrl) {
        throw new Error('La URL de la API no está configurada');
      }

      const response = await fetch(`${apiUrl}`);
      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? 'Juego no encontrado'
            : 'Error al buscar el juego'
        );
      }
      console.log(response)
      const data = await response.json();
      console.log(data)
      // Encuentra el juego que coincida con el nombre ingresado
      const games = Array.isArray(data) ? data: [];
      const foundGame = games.filter(game => game.title.toLowerCase() === gameName.toLowerCase());
      console.log(foundGame)
      if (foundGame) {
        navigate(`/juegos/${foundGame[0].id}`, { state: { game: foundGame[0] } }); 
       
      } 

    } catch (error) {
      console.log(error)
      setError('Juego no encontrado');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchGames();
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        textAlign: "center",
        marginTop: 2,
      }}
    >
      <Typography variant='h6' gutterBottom>Buscar juego</Typography>
      <TextField
        inputRef={inputRef}
        fullWidth
        variant='outlined'
        placeholder='Ingrese el nombre del juego'
        margin='normal'
        onKeyDown={handleKeyDown}
        error={!!error} 
        helperText={error}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={fetchGames}
        disabled={isLoading}
        sx={{ marginTop: 2 }}
      >
        {isLoading ? 'Buscando...' : 'Buscar'}
      </Button>
    </Paper>
  );
};

export default GamesFinder;