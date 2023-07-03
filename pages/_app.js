import "@code-hike/mdx/dist/index.css"
import "../global.css"
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>GPT API Unofficial Docs</title>
        <meta property="og:title" content="GPT API Unofficial Docs" />
        <meta
          property="description"
          content="An alternative take on OpenAI's Chat Completion official guide and API reference."
        />
        <meta property="og:image" content="https://gpt.pomb.us/card.png" />
        <meta property="og:url" content="https://gpt.pomb.us/" />
        <meta
          property="og:description"
          content="An alternative take on OpenAI's Chat Completion official guide and API reference."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://gpt.pomb.us/card.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}

export default App
