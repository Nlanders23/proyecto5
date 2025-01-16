import React from "react";
import { Button, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GamesFinder from "../Components/GamesFinder";
import { ErrorBoundary } from "../Components/ErrorBoundary";
import { Container } from "postcss";

const Home = () => {
    return(
        <>
        <div className="cuerpo">
            <h1>HOWLING GAMES</h1>
          <div className="caja-principal">
                <div className="subcajas"> 
                    <div className="subcaja1">
                        <h2>Descubre tu próxima aventura</h2>
                        <Typography variant="h6">Explora los mejores juegos y únete a una comunidad apasionada</Typography>
                    </div>
                    <div className="subcaja2">
                       <CardMedia>
                            <img src="/logo2.png" alt="imagen principal" height='200px' style={{borderRadius: '50px' , backgroundColor: ' #dce3f1'}} />
                        </CardMedia> 
                    </div>
                </div>
                    
             <div className="enlaces">
                  <div className="enlace1">
                      <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg flex items-center" component={Link} to={'/juegos/ultimos-lanzamientos'}>
                         Explorar últimos lanzamientos
                         <ArrowForwardIcon className="ml-2"/>
                      </Button>
                 </div>
                 <div className="enlace 2">
                      <ErrorBoundary>
                         <GamesFinder />
                     </ErrorBoundary> 
                 </div>
             </div>
          </div>
        </div> 
        </>
       
    )
}
export default Home;