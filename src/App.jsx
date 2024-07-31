import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Welcome from "./Components/Welcom";
import ProductList from "./Components/ProductList";
import ShopCart from './Components/ShopCart';

const router=createBrowserRouter([{
  path: "/",
  element:<Root/>,
  children: [
    { path: "/",element: <Welcome/> },
    {path:'/Products',element:<ProductList/>}
  ],
}
])


function App() {
  
    return<>
    <RouterProvider router={router}/>
    <ShopCart/>
    </> 

  
 
}

export default App;
