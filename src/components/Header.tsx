import { css } from "@emotion/react";
import { memo } from "react";

const headerStyle = css`
  border-bottom: 1px solid #dedede;
  > div:nth-of-type(1) {
    max-width:1024px;
    padding:16px;
    margin:0 auto;
  }
`;

export default memo(() => {
  console.log("aaa")
  return (
    <header css={headerStyle}>
      <div>
        <div css={css`font-size:1.5rem;`}>Shopping Cart</div>
      </div>
    </header>
  )
})