// pages/_app.js
import "../styles/global.css"; // Cambia la ruta si el archivo está en otro directorio
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
