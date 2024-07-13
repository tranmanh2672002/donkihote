import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Donkihote</title>
        <meta property="og:image" content={`https://res.cloudinary.com/dij3qktkj/image/upload/v1720857665/donkihote/td00plerdgkoettf0esa.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content={`Nội thất Việt`} />
        <meta property="og:description" content={'Mang đến cho bạn trải nghiệm tuyệt vời'} />
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
