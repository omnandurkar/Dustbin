import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import Reviews from './views/Reviews/Reviews'
import Login from './views/Login/Login';




function App() {

  const router = createBrowserRouter([

    {
      path : "/",
      element : <Home/>
    },

    {
      path : "/review",
      element : <Reviews/>
    },

    {
      path : "/login",
      element : <Login/>
    }

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
