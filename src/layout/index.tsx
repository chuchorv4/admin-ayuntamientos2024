import { PropsWithChildren } from "react"
import Navbar from "./navbar"

const Layout = ({ children }: PropsWithChildren) => {
  const isLoading = false

  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <Navbar />
      <section className="mx-a flex-grow">{children}</section>
      {isLoading && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-75">
          <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
          <h2 className="text-center text-xl font-semibold text-white">
            Cargando...
          </h2>
        </div>
      )}
    </main>
  )
}

export default Layout
