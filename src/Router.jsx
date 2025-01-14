import { createBrowserRouter } from "react-router-dom";
import GamesList from './Pages/GameList'
import DetailGames from './Pages/DetailGames'
import Layout from "./Components/Layout";
import Home from './Pages/Home'
import NewPost from "./Pages/NewPost";

const Router = createBrowserRouter ([
    { path: '/',
      element: <Layout />,  
      children:  [
            {path: '/' , element: <Home />},
            {path: '/juegos', element: <GamesList />},
            {path: '/juegos/:nombre', element: <DetailGames />},
            {path: '/juegos/ultimos-lanzamientos', element: <NewPost />} 
        ]
    }

])

export default Router;