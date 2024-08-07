import Home from "@/pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    { path: '/', element:<div>1</div> },
    { path: 'page',element: <Home></Home> },
])


export  function Router(){
    return (
        <RouterProvider router={router} />
    )
}