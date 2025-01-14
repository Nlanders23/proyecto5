import { Container, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailGames = () => {
    const location = useLocation();
    const game = location.state?.game;

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        {game.title}
      </Typography>
      <img
        src={game.thumbnail}
        alt={game.title}
        style={{width:'50%', borderRadius: '8px'}}
      >
      </img>
      <Typography variant='h5'>Descripción</Typography>
      <Typography>{game.short_description}</Typography>
      <Typography>{game.genre}</Typography>
      <Typography>{game.platform}</Typography>
      <Typography>{game.release_date}</Typography>
    </Container>
  )
}

export default DetailGames