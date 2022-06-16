import { memo } from "react";
import { css } from "@emotion/react";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

export default memo(() => {
  return (
    <header css={css`border-bottom: 1px solid #dedede;`}>
      <div css={css`max-width:1024px;padding:16px;margin:0 auto;`}>
        <div css={css`font-size:1.5rem;`}>
          <span>Shopping Cart</span>
          <ShoppingCartIcon css={css`float: right; margin: 4px`} />
        </div>
      </div>
    </header>
  )
})