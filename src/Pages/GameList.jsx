import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid2, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const API_URL = 'https://corsproxy.io/?url=https://www.freetogame.com/api/games';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(API_URL) 
     .then(res => res.json())
      .then(data => {
        console.log(data)
        setGames(data)})
      .catch(error => {
        console.log('fetching error', error);     
     })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <Grid2
        container
        alignItems='center'
        justifyContent='center'
        sx={{minHeight:'100vh'}}
      >
        <CircularProgress />
      </Grid2>
    )
  }
  
  return (
    <Grid2 container spacing={2} sx={{padding:'20px'}}>
      {games!= null && games.map(game =>(
           <Grid2 item xs={12} sm={6} md={4}  key={game.id}>
              <Card>
                <CardActionArea 
                  component={Link}
                  to={`/juegos/${game.title}`} 
                  state={{game}}    
                >
                  <CardMedia 
                    component='img'
                    height='140'
                    image={game.thumbnail}
                    alt={game.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6'> 
                      {game.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>

        
      ))}
    </Grid2>
  )
}

export default GameList