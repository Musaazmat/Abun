import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/sidebar'



function Layout() {
    return (
    <>
    <Sidebar/>
    <Footer/>
    <main className='main-container'>
        <Outlet/>
    </main>
    </>
    )
}

export default Layout