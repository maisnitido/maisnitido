import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#E86A52',
      },
      text: {
        primary: '#0A0445',
        secondary: '#707070',
      },
    },
  });

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

    return (    
    <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </SessionProvider>);
}

export default MyApp