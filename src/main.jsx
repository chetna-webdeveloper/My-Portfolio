import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import ScrollToTopButton from './Components/ScrollToTopBtn/ScrollToTopBtn.jsx'
import './index.css'
import Contact from './Components/Contact/Contact.jsx'
// import WhatsAppButton from './Components/WhatsappBtn/WhatsappBtn'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='skills' element={<Skills />} />
      <Route path='contact' element={<Contact />} />
      <Route path='ScrollToTopButton' element={<ScrollToTopButton />} />
      {/* <Route path='WhatsAppButton' element={<WhatsAppButton/>}/> */}


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
