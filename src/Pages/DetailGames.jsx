import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailGames = () => {
    const location = useLocation();
    const game = location.state?.game;

  return (
    <Container className='detalles'>
      <div className='juego'>
        <Typography variant='h4' gutterBottom sx={{paddingBottom: '10px'}}>
          {game.title}
        </Typography>
        <img
          src={game.thumbnail}
          alt={game.title}
          style={{width:'100%', borderRadius: '8px'}}
        >
        </img>
      </div>

      <div className='descripcion'>
         <Typography variant='h5'>Características</Typography>
          
         <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                     <strong>Descripción:</strong> {game.short_description}
                  </Typography>
                }
              />
            </ListItem>
  
           <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Género:</strong> {game.genre}
                  </Typography>
                }
              />
            </ListItem>
  
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                      <strong>Plataforma:</strong> {game.platform}
                  </Typography>
                }
              />
            </ListItem>
  
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Fecha de lanzamiento:</strong> {game.release_date}
                  </Typography>
                }
              />
            </ListItem>
          </List>      
      </div>  
      
      
    </Container>
  )
}

export default DetailGames