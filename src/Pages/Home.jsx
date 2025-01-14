import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GamesFinder from "../Components/GamesFinder";

const Home = () => {
    return(
        <>
        <GamesFinder />
        <div className="min-h-screen bg-gray-900 text-white">
            <h1>HOWLING GAMES</h1>
            <div className="relative h-96 bg-gradient-to-r from-purple-900 to-blue-900">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-5xl font-bold mb-4">Descubre tu próxima aventura</h2>
                    <Typography className="text-xl mb-8">Explora los mejores juegos y únete a una comunidad apasionada</Typography>
                    <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg flex items-center" component={Link} to={'/juegos/ultimos-lanzamientos'}>
                        Explorar últimos lanzamientos
                        <ArrowForwardIcon className="ml-2"/>
                    </Button>
                </div>
            </div>
        </div> 
        </>
       
    )
}
export default Home;