import React from "react";
import Navigation from "./header";
import Footer from "./footer";

const Layout = ({children}) => {
    return(
        <>
        <Navigation />
        <main>{children}</main>
        <Footer />
        </>

    )
}
export default Layout
