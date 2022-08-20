import ThemeContextProvider from '../context/theme-context';
import Wrapper from '../components/Wrapper';

import '../styles/index.scss';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []);

  return (
    <ThemeContextProvider>
      <Wrapper Component={Component} pageProps={pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
