import "@code-hike/mdx/dist/index.css";
import "../global.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>OpenAI Chat Completion Unofficial Docs</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
