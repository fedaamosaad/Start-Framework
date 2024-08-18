

import './App.css'
import Home from './components/Home/Home'

import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'


function App() {



  const routes  = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        
        { index: true, element: <Home /> },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '*', element: <NotFound /> },
      ]
    },
  ])
  return (
    <RouterProvider router={routes}>


    </RouterProvider>
    
  )
}

export default App
