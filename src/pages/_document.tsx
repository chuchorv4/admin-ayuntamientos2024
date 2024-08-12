import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://slimecode.net/img/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://slimecode.net/img/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://slimecode.net/img/favicon-16x16.png"
        ></link>
      </Head>
      <body data-theme="aqua">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
