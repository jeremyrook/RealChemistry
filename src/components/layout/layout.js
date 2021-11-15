import React from "react";
import Navigation from "./header";
import Footer from "./footer";
import "../../scss/layout.scss"

const Layout = ({children}) => {
    return(
        <>
        <Navigation />
        <main className="mx-auto mt-5">{children}</main>
        <Footer />
        </>

    )
}
export default Layout
