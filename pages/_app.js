import GlobalStyle from '../styles/global';
import "../styles/sidebar.css"
import "../styles/themewindow.css"
import "../styles/sidebar2.css"
import "../styles/profile.css";
function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
