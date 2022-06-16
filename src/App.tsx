import { QueryClient, QueryClientProvider } from "react-query"

import { css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";

const queryClient = new QueryClient();
const appStyle = css`
  font-size:16px;
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
    <div css={appStyle}>
      <Header />
    </div>
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