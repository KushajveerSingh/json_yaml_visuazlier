import Document, { Html, Head, Main, NextScript } from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../theme/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    const title = 'JSON/YAML Graph Visualizer';
    const url = 'https://github.com/KushajveerSingh/json_yaml_visuazlier';
    const description = 'Visualizer tool to convert JSON and YAML into a graph for increased readability';
    const image = ''; // Provide url to png image
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Kushajveer Singh" />
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="YAML,JSON,Nextjs,TypeScript,meterial-ui,visualization,graph-visualization,demo-app,js-yaml,parser"
          />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#42a5f5" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1565c0" />

          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content={url} />
          <meta property="twitter:url" content={url} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />

          <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
          <link rel="manifest" href="/json_yaml_visuazlier/manifest.json" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <meta name="emotion-insertion-point" content="" />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
