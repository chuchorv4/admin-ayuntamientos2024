import { PropsWithChildren } from "react"
import Navbar from "./navbar"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
