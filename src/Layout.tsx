import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function Layout() {
    return (
        <div>
            <Header />
            <main className='pt-[90px]'>
            <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    )
}

export default Layout