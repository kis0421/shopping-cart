import { memo } from "react";
import { css } from "@emotion/react";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom"

const cartStyle = css`
  float: right;
  margin: 4px;
  color: #777;
  transition: color .5s;
  &:hover {
    color: #333
  }
`

export default memo(() => {
  return (
    <header css={css`border-bottom: 1px solid #dedede;`}>
      <div css={css`max-width:1024px;padding:16px;margin:0 auto;`}>
        <div css={css`font-size:1.5rem;`}>
          <NavLink to="/">Shopping Cart</NavLink>
          <NavLink to="/cart">
            <ShoppingCartIcon css={cartStyle} />
          </NavLink >
        </div>
      </div>
    </header>
  )
})