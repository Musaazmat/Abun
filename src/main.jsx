import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import BackLinks from './components/SidebarItems/BackLink'
import CreateArticle from './components/SidebarItems/CreateArticle'
import GeneratedArticles from './components/SidebarItems/GeneratedArticles'
import GetDemo from './components/SidebarItems/GetDemo'
import Profile from './components/SidebarItems/Profile'
import Subscription from './components/SidebarItems/Subscription'
import Tutorial from './components/SidebarItems/Tutorial'
import Upgrade from './components/SidebarItems/Upgrade'


import './index.css'
import Layout from './layout'




const router = createBrowserRouter(
  createRoutesFromElements(

    
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<CreateArticle/>}/>
      <Route path='upgrade/:type' element={<Upgrade/>} />
      <Route path='generated-articles' element={<GeneratedArticles/>} />
      <Route path='subscription' element={<Subscription/>} />
      <Route path='back-link' element={<BackLinks/>} />
      <Route path='tutorial' element={<Tutorial/>} />
      <Route path='get-demo' element={<GetDemo/>} />
      <Route path='profile' element={<Profile/>} />
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
