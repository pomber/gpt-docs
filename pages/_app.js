import "@code-hike/mdx/dist/index.css";
import "../global.css";

function App({ Component, pageProps }) {
  return (
    <main>
      <header />
      <Component {...pageProps} />
      <footer />
    </main>
  );
}

export default App;
