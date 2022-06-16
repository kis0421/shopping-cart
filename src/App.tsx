import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"

import { css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import Routes from "./Routes";

const queryClient = new QueryClient();
const appStyle = css`
  font-size:16px;
  a{
    color: inherit;
    &:hover, &:link {
      text-decoration: none;
    }
  }

`;
const theme = createTheme({
  palette: {
    primary: {
      main: "#7befb2"
    }
  }
});

const App = () => {
  return (
    <BrowserRouter>
      <div css={appStyle}>
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  )
}