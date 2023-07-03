import "@code-hike/mdx/dist/index.css"
import "../global.css"
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>OpenAI Chat Completion Unofficial Docs</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://gpt.pomb.us/card.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}

export default App
