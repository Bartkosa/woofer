import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { TicToe } from "./components/tictoe/TicToe";
import { Woofer } from "./components/woofer/Woofer";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    
    {
        path: '/tictoe',
        element: <TicToe />
    },
    {
        path: '/woofer',
        element: <Woofer />
    }



];

export default AppRoutes;
