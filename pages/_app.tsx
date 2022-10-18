import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavBar from "../components/NavBar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
  font-family: 'League Spartan', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    purple: "#7C5DFA",
    lightPurple: "#9277FF",
    darkerPurple: "#1E2139",
    darkPurple: "#252945",
    lightGrey: "#DFE3FA",
    grey: "##888EB0",
    purpleGrey: "#7E88C3",
    black: "#0C0E16",
    red: "#EC5757",
    lightRed: "#9277FF",
    lightBackground: "#f8f8fb",
    background: "#141625",
  },
  fonts: ["League Sparta", "sans-serif"],
  fontStyles: {
    h1: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 36,
      letterSpacing: -1,
      textAlign: "left",
      color: "#0C0E16",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 22,
      letterSpacing: -0.625,
      color: "#0C0E16",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: -0.8,
      color: "#0C0E16",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: 15,
      letterSpacing: -0.25,
      color: "#0C0E16",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 15,
      letterSpacing: -0.25,
      color: "#0C0E16",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 15,
      letterSpacing: -0.25,
      color: "#0C0E16",
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
