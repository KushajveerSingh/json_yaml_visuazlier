import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../theme/createEmotionCache';

import { Provider } from 'react-redux';
import store from '../store/store';
import { useAppSelector } from '../store/hooks';
import { selectPrefersDarkTheme } from '../theme/themeSlice';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface Props {
  component: Function;
  pageProps: object;
}

function MainComponent(props: Props) {
  const Component = props.component;
  const pageProps = props.pageProps;

  const prefersDarkTheme = useAppSelector(selectPrefersDarkTheme);
  const theme = createTheme({
    palette: {
      mode: prefersDarkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <MainComponent component={Component} pageProps={pageProps} />
      </Provider>
    </CacheProvider>
  );
}
