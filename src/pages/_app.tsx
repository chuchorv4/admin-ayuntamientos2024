import { AppProps } from "next/app"
import "@styles/globals.css"
import { SessionProvider } from "next-auth/react"
import Layout from "../layout"
import StoreProvider from "@components/store-provider"

const App = ({
  Component,
  pageProps: { session, ...pageProperties },
}: AppProps) => (
  <SessionProvider {...session}>
    <Layout>
      <StoreProvider>
        <Component {...pageProperties} />
      </StoreProvider>
    </Layout>
  </SessionProvider>
)

export default App
