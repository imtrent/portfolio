import React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
