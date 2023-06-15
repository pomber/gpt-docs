import "@code-hike/mdx/dist/index.css";
import "../global.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>OpenAI Chat Completion Unofficial Docs</title>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <ThemeChanger />
      <header />
      <Component {...pageProps} />
      <footer />
    </main>
  );
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  } catch (e) {}
})();
`;

const ThemeChanger = () => {
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
export default App;
