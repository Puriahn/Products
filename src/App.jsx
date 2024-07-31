import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./Components/Root";

const router=createBrowserRouter([{
  path: "/",
  element:<Root/>,
  children: [
    { path: "/", element:<div>sdfsffffffffff</div> },
    {path:'/aboutUs',element:<div>sssssssssdfsf</div>}
  ],
}
])


function App() {
  
    return<>
    <RouterProvider router={router}/></> 
  
 
}

export default App;
