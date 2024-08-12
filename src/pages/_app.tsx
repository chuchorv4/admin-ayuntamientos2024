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
    <StoreProvider>
      <Layout>
        <Component {...pageProperties} />
      </Layout>
    </StoreProvider>
  </SessionProvider>
)

export default App
