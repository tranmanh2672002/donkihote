// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications autoClose={2000} position="top-right" />
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}
