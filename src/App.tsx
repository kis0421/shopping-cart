import { css } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query"

const appStyle = css`
  font-size:12px;
`;

const queryClient = new QueryClient()
export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div css={appStyle}>init</div>
    </QueryClientProvider>
  )
}