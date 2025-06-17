import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ArtObjectType from "./pages/ArtObjectType.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/art-object-type/:artObjectType",
        element: <ArtObjectType/>,
    }

])

function App() {
    
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>

    );
}

export default App
