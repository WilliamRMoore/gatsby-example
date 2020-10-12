import React from "react"
import Navbar from "./NavBar"
import Footer from "./Footer"
import "./Layout.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
