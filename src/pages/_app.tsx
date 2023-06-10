import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@src/store/store";
import { Provider } from "react-redux";
import Layout from "@src/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}
