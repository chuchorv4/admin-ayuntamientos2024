import { AppProps } from "next/app"
import "@styles/globals.css"
import { SessionProvider } from "next-auth/react"
import Layout from "../layout"

const App = ({
  Component,
  pageProps: { session, ...pageProperties },
}: AppProps) => (
  <SessionProvider {...session}>
    <Layout>
      <Component {...pageProperties} />
    </Layout>
  </SessionProvider>
)

export default App
