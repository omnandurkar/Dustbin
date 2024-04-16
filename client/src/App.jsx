import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import Reviews from './views/Reviews/Reviews'
import Login from './views/Login/Login';
import Contact from './views/Contact/Contact'
import ADashboard from './views/Admin/ADashboard';
import ALogin from './views/Admin/ALogin';
import Pricing from './views/Pricing/Pricing';




function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },

    {
      path: "/review",
      element: <Reviews />
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/contact",
      element: <Contact />
    },

    // {
    //   path: "/admin",
    //   element: <ADashboard />
    // },

    {
      path:"/admin",
      element : <ALogin/>
    },

    {
      path: "/pricing",
      element : <Pricing/>
    }

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
