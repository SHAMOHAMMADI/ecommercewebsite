import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

interface ILayout {
    children : React.ReactNode;
}


function Layout({children}:ILayout) {
  return (
    <>
    <Navbar/>
     {children}
    <Footer/>
    </>
  )
} 

export default Layout